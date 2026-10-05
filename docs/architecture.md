# embry.dev print pipeline: architecture

Four moving parts: the printer, the Pi beside it, Cloudflare in front of the Pi, and the static site on GitHub Pages. The Pi publishes finished prints itself (`brain-prints-push`, deploy key, write access to this repo only); the Mac is no longer involved.

## 1. System overview

```mermaid
flowchart LR
  subgraph LAN["Home LAN · 192.168.50.0/24"]
    P["Bambu Lab P2S · .79<br/>RTSPS camera :322<br/>MQTT :8883<br/>Developer Mode, LAN-only"]
    subgraph PI["brainpi · .36 (Debian, user services as joel)"]
      G["go2rtc<br/>holds the one camera connection<br/>API 127.0.0.1:1984"]
      W["brain-print-watch<br/>MQTT listener → gallery drafts<br/>~/prints-drafts/"]
      U["brain-prints-push<br/>sentence · commit · push<br/>after each draft + every 10 min"]
      C["cloudflared<br/>tunnel 'printer'<br/>path-restricted ingress"]
    end
    M["Mac<br/>JT's own edits only"]
  end
  subgraph CF["Cloudflare"]
    E["live.embry.dev<br/>CNAME → tunnel"]
    D["embry.dev DNS<br/>A → GitHub Pages"]
  end
  subgraph GH["GitHub"]
    R["jtembry/embry.dev repo"]
    A["Actions: Astro build"]
    PG["GitHub Pages<br/>embry.dev"]
  end
  B["Visitor's browser"]

  P -- "rtsps (1 connection)" --> G
  P -- "mqtt report topic" --> W
  G -- "snapshot via ffmpeg" --> W
  C -- "http 127.0.0.1:1984" --> G
  C == "outbound tunnel" ==> E
  W -- "draft" --> U
  U -- "git push (deploy key)" --> R --> A --> PG
  M -. "manual edits" .-> R
  B -- "page + player" --> PG
  B -- "wss /api/ws · HLS" --> E
```

## 2. Live feed: one viewer opening /live

```mermaid
sequenceDiagram
  autonumber
  participant V as Browser
  participant PG as GitHub Pages
  participant CF as Cloudflare edge
  participant CD as cloudflared (Pi)
  participant G as go2rtc (Pi)
  participant P as P2S camera

  V->>PG: GET /live
  PG-->>V: page + player script (own MSE client)
  V->>CF: wss://live.embry.dev/api/ws?src=p2s
  CF->>CD: via tunnel (path allowed)
  CD->>G: ws 127.0.0.1:1984/api/ws
  alt first viewer
    G->>P: rtsps://…:322 (the single allowed connection)
    P-->>G: H.264 1080p30
  end
  V->>G: {type: "mse", value: codecs}
  G-->>V: {type: "mse", value: "video/mp4; codecs=avc1…"}
  loop every frame
    G-->>V: fMP4 fragment (binary ws frame)
    V->>V: SourceBuffer.appendBuffer, stay near live edge
  end
  Note over V: iPhone (no MSE): video.src = /api/stream.m3u8 → HLS over the same tunnel
  Note over V,G: Printer asleep → ws closes → idle panel, retry every 30 s
```

## 3. Gallery: from "send print" to a published card

```mermaid
sequenceDiagram
  autonumber
  participant S as Bambu Studio (Mac)
  participant P as P2S
  participant W as brain-print-watch (Pi)
  participant G as go2rtc (Pi)
  participant M as Mac (brain-prints-sync)
  participant GH as GitHub → Pages

  S->>P: send job (LAN)
  P-->>W: mqtt: gcode_state PREPARE/RUNNING, subtask_name, total_layer_num, nozzle
  W->>W: job started: record name, layers, nozzle, start time
  loop during the print
    P-->>W: mqtt: ams.tray_now
    W->>W: note filament type + color of the feeding tray
  end
  P-->>W: mqtt: gcode_state FINISH
  W->>W: wait 20 s (bed settles)
  W->>G: ffmpeg frame from /api/stream.mp4
  G-->>W: bed photo (cropped 4:3)
  W->>W: write ~/prints-drafts/<date>-<slug>/{entry.md, photo.jpg, job.json}
  Note over W: FAILED → logged only, no draft
  M->>W: brain-prints-sync (rsync over ssh)
  M->>M: copy new drafts into src/content/prints + public/prints
  M->>M: add one sentence, git commit
  M->>GH: git push → Actions build → Pages deploy
```

## 4. Trust boundaries and secrets

```mermaid
flowchart TB
  subgraph Internet
    V["Anyone"]
    CFE["Cloudflare edge<br/>TLS termination for live.embry.dev"]
    GHP["GitHub Pages (static files, no secrets)"]
  end
  subgraph Tunnel["Allowed through the tunnel"]
    T1["/api/ws"]
    T2["/api/stream.mp4"]
    T3["/api/stream.m3u8 · /api/hls/*"]
    T4["everything else → 404<br/>(incl. /api/streams, which would reveal the camera URL)"]
  end
  subgraph LAN["Home LAN"]
    PI["brainpi<br/>go2rtc.yaml (mode 600): LAN access code<br/>~/.cloudflared/*.json: tunnel credentials<br/>brain-print-watch reads the code from go2rtc.yaml"]
    MAC["Mac Keychain<br/>brain-bambu-p2s (IP + access code)<br/>brain-youtube-stream (legacy)"]
    P["P2S: Developer Mode on, LAN-only<br/>(no Bambu cloud, Handy app offline)"]
  end
  V --> CFE --> T1 & T2 & T3
  V --> T4
  T1 & T2 & T3 --> PI
  PI --> P
  MAC -. "ssh as joel (key)" .-> PI
  V --> GHP
```

## Services and where to look

| Where | Service | Purpose | Check |
| --- | --- | --- | --- |
| brainpi | `go2rtc.service` (user) | camera relay | `curl http://127.0.0.1:1984/api/streams?src=p2s` |
| brainpi | `cloudflared.service` (user) | tunnel to live.embry.dev | `systemctl --user status cloudflared` |
| brainpi | `brain-print-watch.service` (user) | job watcher → drafts | `tail ~/prints-drafts/watch.log` |
| Mac | `brain-prints-sync` | pull drafts into the site | `brain-prints-sync --dry-run` |
| GitHub | Actions `Deploy to GitHub Pages` | build + publish on push to main | `gh run list -R jtembry/embry.dev` |

Design decisions: the Pi is the relay because the printer only speaks on the LAN and allows one camera connection; YouTube Live was tried and dropped (no live embeds without AdSense, no automatic restart); the site's player is hand-written because go2rtc's bundled one threw in Edge; the Pi never gets GitHub credentials, so publishing stays a human step on the Mac.
