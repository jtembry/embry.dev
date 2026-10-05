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

**Publishing.** `brain-prints-push` on the Pi runs right after each draft and every 10 minutes (systemd timer). It resets its clone at `~/embry.dev` to `origin/main`, adds any draft not yet in the repo with a templated sentence, commits, and pushes with a deploy key that can write only to this repo. Calibration jobs are skipped. Your own edits from the Mac always win. Log: `~/prints-drafts/publish.log`. The Pi's DNS points at 1.1.1.1 and 9.9.9.9 first because the router's DNS failed 90% of lookups (2026-10-05). Model links from the Mac library are no longer added automatically.

**Publishing (automatic since 2026-10-03).** `brain-prints-publish` (vault `System/Scripts`, run by the Home Button plugin every 5 min and 90 s after the Mac-side watcher sees a finish) runs the sync, writes a templated one-sentence body into any new entry, adds `model:` when the job name matches a folder in `~/Documents/3d_printing/models` (its README's Source link), commits, pulls --rebase and pushes. GitHub Actions deploys. To improve a card afterwards: edit the sentence or drop a better photo in `public/prints/` (same filename), commit, push by hand — the publisher only ever touches entries that are new. The Mac is the only committer; drafts wait on the Pi while it's off. Log: `~/.local/state/brain-prints-publish.log`; `brain-prints-publish --dry-run` shows what's pending.

Pi checks: `ssh joel@192.168.50.36 'systemctl --user status brain-print-watch; tail ~/prints-drafts/watch.log'`. The P2S's internal storage is not reachable over FTP, so timelapses only reach the gallery via a USB stick (External target) or a Handy/Studio download dropped into `public/prints/` with `video:` set.
