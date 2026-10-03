# Live feed and print gallery

## Live feed (self-hosted: go2rtc on brainpi + Cloudflare Tunnel)

Printer camera (RTSPS, port 322, Developer Mode) → **go2rtc** on brainpi (user service, `~/.config/go2rtc/go2rtc.yaml`, API bound to 127.0.0.1:1984) → **cloudflared** tunnel on brainpi publishing only the player assets and stream endpoints as `live.embry.dev` → `/live` runs a small MSE client of our own against go2rtc's WebSocket protocol (go2rtc's bundled player threw on this browser), with native HLS on browsers without MSE (iPhone).

- Comes on and off with the printer; no YouTube, no manual start.
- Secrets: the LAN access code lives only in the Pi's go2rtc.yaml (mode 600) and the Mac Keychain `brain-bambu-p2s`.
- Exposed paths: `/api/ws`, `/api/stream.mp4`, `/api/stream.m3u8`, `/api/hls/*`. Everything else (including `/api/streams`, which would reveal the camera URL) returns 404 at the tunnel.
- Pi service checks: `systemctl --user status go2rtc cloudflared`; local probe `curl -s -m 5 http://127.0.0.1:1984/api/stream.mp4?src=p2s -o /tmp/x.mp4`.
- The YouTube route was abandoned 2026-10-02: YouTube blocks live embeds on channels without AdSense, and a dropped encoder ends the broadcast with no automatic restart. `brain-print-stream` still exists if a YouTube broadcast is ever wanted by hand.

## Print gallery

Entries are Markdown files in `src/content/prints/`, one per print, with the photo (and optional timelapse) in `public/prints/`. Fields: `title`, `date`, `image`, optional `video`, `material`, `color`, `printTime`, `layers`, `nozzle`, `model` (URL), `designedByMe`, `tags`, `featured`. The body is the one-sentence story.

**Automatic drafts.** `brain-print-watch` runs on brainpi (user service) and listens to the printer over MQTT. When a job finishes it waits 20 s, grabs a bed photo from go2rtc, and writes `~/prints-drafts/<date>-<slug>/{entry.md,photo.jpg,job.json}` with the job name, filament type and color (from the AMS tray that fed), duration, layers, and nozzle filled in. Failed jobs are logged, not drafted.

**Pulling drafts to the site.** On the Mac: `brain-prints-sync` (rsync from the Pi; `--dry-run` to list). It adds any draft that isn't already in `src/content/prints/`. Then add a sentence to the new entry, replace the bed photo with a better one if you have it (same filename), commit, push.

Pi checks: `ssh joel@192.168.50.36 'systemctl --user status brain-print-watch; tail ~/prints-drafts/watch.log'`. The P2S's internal storage is not reachable over FTP, so timelapses only reach the gallery via a USB stick (External target) or a Handy/Studio download dropped into `public/prints/` with `video:` set.
