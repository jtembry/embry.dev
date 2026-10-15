# Field Agent screenshots for /work

The phone screenshots in `public/work/` come from the iOS simulator talking to a stand-in home base with made-up data, so nothing private lands on the site.

Made 2026-10-15. Redo them after a look change in the app.

## Steps

1. Build the app for the simulator (this Xcode has no Simulator.app, so everything runs through `simctl`):

```
export DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer
cd ~/RemoteAgentIOS
xcodebuild -project RemoteAgent.xcodeproj -scheme RemoteAgent -sdk iphonesimulator \
  -destination 'platform=iOS Simulator,name=iPhone 17' -derivedDataPath /tmp/fa-sim CODE_SIGNING_ALLOWED=NO build
```

2. Start the stand-in home base (port 8789). It needs the `ws` package; symlink the real home base's node_modules:

```
cd scripts/field-agent-shots
ln -sfn ~/RemoteAgentMac/node_modules node_modules
python3 make-mission.py        # writes mission.json
node server.mjs
```

3. There is no way to tap the simulator without Simulator.app, so add a temporary hook to the app (do not ship it). In `ContentView.swift`, at the end of the list's `.task` after `loadUsage()`:

```swift
let args = ProcessInfo.processInfo.arguments
if args.contains("-demoMission") { showMission = true }
if let i = args.firstIndex(of: "-demoSession"), i + 1 < args.count {
    if let j = args.firstIndex(of: "-demoPrompt"), j + 1 < args.count { PendingPrompts.set(args[i + 1], args[j + 1]) }
    path = [args[i + 1]]
}
```

and in `MissionControlView.swift` make the `section` state start as `.email` when `-demoEmail` is passed. Rebuild.

4. Install, point the app at the stand-in, set the Professional look, and take the shots:

```
D=<iPhone 17 udid>; B=com.jtembry.RemoteAgent
xcrun simctl boot $D; xcrun simctl install $D /tmp/fa-sim/Build/Products/Debug-iphonesimulator/RemoteAgent.app
xcrun simctl spawn $D defaults write $B macHost 127.0.0.1
xcrun simctl spawn $D defaults write $B macPort 8789
xcrun simctl spawn $D defaults write $B authToken demo
xcrun simctl spawn $D defaults write $B themeMode pro
xcrun simctl status_bar $D override --time 9:41 --batteryState charged --batteryLevel 100 --wifiBars 3 --cellularBars 4
xcrun simctl launch $D $B; sleep 6; xcrun simctl io $D screenshot list.png
xcrun simctl launch $D $B -demoSession claude-1 -demoPrompt "Add a dark mode toggle to the settings screen"; sleep 9; xcrun simctl io $D screenshot chat.png
xcrun simctl launch $D $B -demoMission; sleep 7; xcrun simctl io $D screenshot mission.png
xcrun simctl launch $D $B -demoMission -demoEmail; sleep 7; xcrun simctl io $D screenshot mission-email.png
```

Terminate the app between launches. If the chat shows the prompt twice, delete the app's `Library/Application Support/history` in its container (chat history persists).

5. Shrink to 460×1000 (`sips -z 1000 460`) and copy to `public/work/`. Revert the hook in the app.

## Gotchas

- The reply frame must start with the user's own text; the phone drops a reply that does not echo its send.
- `defaults write` through `simctl spawn` needs one key per call; a quoted "key value" pair is read as one argument.
