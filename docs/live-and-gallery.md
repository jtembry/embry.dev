# Live feed and print gallery

## Live feed (YouTube Live)

The P2S camera goes printer → Mac (ffmpeg) → YouTube Live → `/live` on the site. Nothing runs on the Pi and nothing is exposed from the LAN.

One-time setup, in this order:

1. **Printer.** Settings → General → enable **Developer Mode** (LAN camera access). Note the printer's IP and the **LAN access code** (Settings → WLAN).
2. **YouTube.** On the channel: enable live streaming (first time needs phone verification and a 24 h wait). In YouTube Studio → Go live → Stream: create a **persistent stream key**, set *Enable Auto-start* and *Enable Auto-stop*, unlisted or public as you like. Copy the channel ID (Settings → Advanced settings).
3. **Optional, for on-air detection:** in Google Cloud, create a YouTube Data API v3 key restricted to HTTP referrer `https://embry.dev/*`. Without it the page embeds the channel's live slot, which is blank when idle.
4. **Secrets in Keychain** (never in the repo). Run in your own terminal:
   ```
   security add-generic-password -a "<PRINTER_IP>" -s brain-bambu-p2s -w "<LAN_ACCESS_CODE>" -U
   security add-generic-password -a youtube -s brain-youtube-stream -w "<STREAM_KEY>" -U
   ```
5. **Site config:** `src/data/site.json` → `live.channelId` (and `live.apiKey`). Commit and push.

Per print: `brain-print-stream start` on the Mac while it's on the Asus LAN. `brain-print-stream stop` when done (or leave it; it exits when the printer drops the camera). `brain-print-stream status` shows the ffmpeg process and last log lines. With Auto-start set on YouTube, the broadcast goes live as soon as ffmpeg connects.

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
