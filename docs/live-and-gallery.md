# Live feed and print gallery

## Live feed (self-hosted: go2rtc on brainpi + Cloudflare Tunnel)

Printer camera (RTSPS, port 322, Developer Mode) → **go2rtc** on brainpi (user service, `~/.config/go2rtc/go2rtc.yaml`, API bound to 127.0.0.1:1984) → **cloudflared** tunnel on brainpi publishing only the player assets and stream endpoints as `live.embry.dev` → `/live` embeds go2rtc's `<video-stream>` element (MSE over WebSocket, MP4 fallback).

- Comes on and off with the printer; no YouTube, no manual start.
- Secrets: the LAN access code lives only in the Pi's go2rtc.yaml (mode 600) and the Mac Keychain `brain-bambu-p2s`.
- Exposed paths: `/video-stream.js`, `/video-rtc.js`, `/api/ws`, `/api/stream.mp4`. Everything else (including `/api/streams`, which would reveal the camera URL) returns 404 at the tunnel.
- Pi service checks: `systemctl --user status go2rtc cloudflared`; local probe `curl -s -m 5 http://127.0.0.1:1984/api/stream.mp4?src=p2s -o /tmp/x.mp4`.
- The YouTube route was abandoned 2026-10-02: YouTube blocks live embeds on channels without AdSense, and a dropped encoder ends the broadcast with no automatic restart. `brain-print-stream` still exists if a YouTube broadcast is ever wanted by hand.

## Print gallery

Entries are Markdown files in `src/content/prints/`, one per print, with the photo (and optional timelapse) in `public/prints/`:

```markdown
---
title: Dishwasher rack clip
date: 2026-09-30
image: /prints/2026-09-30-dishwasher-clip.jpg
video: /prints/2026-09-30-dishwasher-clip.mp4   # optional timelapse
material: PETG
color: Black
printTime: 42 m
designedByMe: true
tags: [replacement part]
---
Measured from the broken original. Third revision fit first time.
```

`brain-prints-sync` pulls new timelapses off the printer's SD card over FTPS (LAN only), downscales them to 720p, grabs a poster frame, and writes a draft entry you then title and describe. Your own photos beat the poster frame: drop the photo in `public/prints/` and point `image:` at it.
