# FieldADE screenshots for /work

The phone screenshots in `public/work/` come from the iOS simulator talking to a stand-in home base with made-up data, so nothing private lands on the site. Never point the simulator at the real home base (8788) or the real vault.

Made 2026-10-15. Redone 2026-10-29 for the FieldADE app (Mission Control is the root screen; the chat list is its Agents section), in both looks. Redo them after a look change in the app.

| File | Shows |
| --- | --- |
| `fieldade.png` / `fieldade-dos.png` | A Claude chat with the Allow / Deny card for a file edit |
| `fieldade-list.png` / `fieldade-list-dos.png` | Agents: FIELD ADE wordmark, usage strip, open chats |
| `mission-control.png` / `mission-control-dos.png` | Today: calendar and what's due |
| `mission-control-email.png` / `mission-control-email-dos.png` | Email: unread messages |

The plain names are the Professional look (`themeMode pro`); `-dos` is the DOS look.

## Steps

1. `~/RemoteAgentIOS` is shared with other chats. Do not edit it. Copy it and work in the copy:

```
rm -rf /tmp/fa-shots-src
rsync -a --exclude .git --exclude .claude --exclude build ~/RemoteAgentIOS/ /tmp/fa-shots-src/
```

2. Add three temporary hooks to the copy only. There is no way to tap the simulator without Simulator.app, so launch arguments pick the screen.

   - `RemoteAgent/ContentView.swift`, in the first `.task { await loadAll()` block, right after `await loadAll()`:

     ```swift
     let demoArgs = ProcessInfo.processInfo.arguments
     if let i = demoArgs.firstIndex(of: "-demoSession"), i + 1 < demoArgs.count {
         if let j = demoArgs.firstIndex(of: "-demoPrompt"), j + 1 < demoArgs.count { PendingPrompts.set(demoArgs[i + 1], demoArgs[j + 1]) }
         path = chatPath(demoArgs[i + 1])
     }
     ```

     and in `RemoteSession.apply(to:)`, after the `session.replyAt = …` line, so the list shows real ages instead of "7 sec" on every row:

     ```swift
     if let r = session.replyAt { session.lastActivity = r }
     ```

   - `RemoteAgent/MissionControlView.swift`: replace `.onAppear { MissionSection.visible = section; openPending() }` with

     ```swift
     .onAppear {
         let demoArgs = ProcessInfo.processInfo.arguments
         if let i = demoArgs.firstIndex(of: "-demoSection"), i + 1 < demoArgs.count, let s = MissionSection(rawValue: demoArgs[i + 1]) { section = s }
         MissionSection.visible = section; openPending()
     }
     ```

   - `RemoteAgent/PushNotifications.swift`: delete the `PushNotifications.request()` call in `didFinishLaunching`, so no notification prompt covers the shots.

3. Build the copy (the `.xcodeproj` is checked in; it comes from `project.yml` via xcodegen, but you do not need to regenerate it):

```
export DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer
D=E09C1626-7715-4C84-BA46-169137C3D015   # iPhone 18 Pro
cd /tmp/fa-shots-src
xcodebuild -project RemoteAgent.xcodeproj -scheme RemoteAgent -sdk iphonesimulator \
  -destination "id=$D" -derivedDataPath /tmp/fa-sim -skipPackagePluginValidation CODE_SIGNING_ALLOWED=NO build
```

4. Start the stand-in home base (port 8789). It needs the `ws` package; symlink the real home base's node_modules. `make-mission.py` dates everything from today, so rerun it on the day you shoot. `server.mjs` stamps chat ages at start, so start it just before shooting.

```
cd ~/Projects/embry-dev-site/scripts/fieldade-shots
ln -sfn ~/RemoteAgentMac/node_modules node_modules
python3 make-mission.py        # writes mission.json
node server.mjs                # leave running
```

It answers `/about` (turns on Mission Control, email, texts, scans, terminal), `/sessions`, `/usage` (limits + this-device turns), `/terminals`, `/mac-sessions`, `/mission` (HTTP and socket), and one scripted chat socket that echoes the prompt, replies, then asks to Edit `SettingsView.swift`.

5. Install on a clean simulator and point the app at the stand-in. `macHost`/`macPort`/`authToken` are the old single-Mac keys; the app turns them into its one home base on first launch. Revoke calendar access so the phone's own (empty) calendar does not replace the stand-in's.

```
B=dev.embry.FieldAgents
xcrun simctl boot $D
xcrun simctl uninstall $D $B      # wipes any earlier settings
xcrun simctl install $D /tmp/fa-sim/Build/Products/Debug-iphonesimulator/RemoteAgent.app
xcrun simctl spawn $D defaults write $B macHost 127.0.0.1
xcrun simctl spawn $D defaults write $B macPort 8789
xcrun simctl spawn $D defaults write $B authToken demo
xcrun simctl privacy $D revoke calendar $B
```

6. Shoot one look, then the other. Save this as `shoot.sh` and run `./shoot.sh pro` then `./shoot.sh dos`:

```
#!/bin/zsh
export DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer
D=E09C1626-7715-4C84-BA46-169137C3D015; B=dev.embry.FieldAgents; L=$1; O=/tmp/fa-shots
mkdir -p $O
xcrun simctl spawn $D defaults write $B themeMode $L
xcrun simctl status_bar $D override --time 9:41 --batteryState charged --batteryLevel 100 --wifiBars 3 --cellularBars 4
shot() { name=$1; wait=$2; shift 2
  xcrun simctl terminate $D $B 2>/dev/null; sleep 1
  xcrun simctl launch $D $B "$@" >/dev/null; sleep $wait
  xcrun simctl io $D screenshot $O/$L-$name.png; }
shot today 8 -demoSection today
shot email 9 -demoSection email
shot list 8 -demoSection agents
C=$(xcrun simctl get_app_container $D $B data); rm -rf "$C/Library/Application Support/history"
shot chat 11 -demoSection agents -demoSession claude-1 -demoPrompt "Add a dark mode toggle to the settings screen"
```

7. Look at every shot: no spinner, no "Can't reach the Mac", no real names. Then shrink and copy. The iPhone 18 Pro screen (1206×2622) is the same 0.46 ratio as 460×1000.

```
W=~/Projects/embry-dev-site/public/work; cd /tmp/fa-shots
for L in pro dos; do s=""; [ $L = dos ] && s="-dos"
  sips -z 1000 460 $L-chat.png  --out $W/fieldade$s.png
  sips -z 1000 460 $L-list.png  --out $W/fieldade-list$s.png
  sips -z 1000 460 $L-today.png --out $W/mission-control$s.png
  sips -z 1000 460 $L-email.png --out $W/mission-control-email$s.png
done
```

8. Clean up: stop `server.mjs`, `xcrun simctl shutdown $D`, remove `node_modules` and `mission.json` here, and delete `/tmp/fa-shots-src`. Do not `git add` anything in this repo; the background publisher commits whatever is staged.

## Gotchas

- Today no longer lists Ingest or Next (both moved to their own sections on 2026-10-25), so the Today shot shows calendar and Due only.
- The reply frame must start with the user's own text; the phone drops a reply that does not echo its send.
- `defaults write` through `simctl spawn` needs one key per call; a quoted "key value" pair is read as one argument. (In zsh, `set -- $kv` does not split either.)
- If the chat shows the prompt twice, delete the app's `Library/Application Support/history` in its container (the script does).
