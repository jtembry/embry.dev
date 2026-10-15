var e=e=>{switch(e){case`index`:return`direction: down

Iphone: {
  label: "iPhone"
}
Backups: {
  label: "Backups"
}
IcloudMail: {
  label: "iCloud Mail"
}
Jt: {
  label: "JT"
  shape: c4-person
}
FieldAgent: {
  label: "Field Agent"
}
Mail: {
  label: "Email & Texts"
}
Assistants: {
  label: "AI assistants"
}
Gmail: {
  label: "Gmail"
}
Vault: {
  label: "Second Brain"
}
Capture: {
  label: "Capture"
}
Scan: {
  label: "Scanner"
}
Docs: {
  label: "Find Anything"
}
Pi: {
  label: "brainpi"
}
Printing: {
  label: "3D printing"
}
Cloudflare: {
  label: "Cloudflare"
}
Site: {
  label: "embry.dev"
}
Github: {
  label: "GitHub"
}

Iphone -> Jt: "in his pocket"
Jt -> Vault: "checks"
Jt -> Capture: "jots things down"
Vault -> Capture: "open to-dos"
Capture -> Vault: "[...]"
Jt -> Assistants: "asks"
Assistants -> Vault: "[...]"
Assistants -> Capture: "runs"
Jt -> FieldAgent: "taps"
Iphone -> FieldAgent: "runs"
FieldAgent -> Assistants: "one turn per message"
Jt -> Mail: "presses buttons"
Mail -> Jt: "what needs action"
Mail -> Vault: "triage button: note with full text"
Jt -> Scan: "loads paper"
Vault -> Scan: "asks JT"
Scan -> Vault: "one note per scan"
Scan -> Docs: "indexed"
Docs -> Vault: "full text"
Scan -> Pi: "[...]"
Pi -> Scan: "saves pages"
Pi -> Printing: "drafted card"
Printing -> Pi: "[...]"
Printing -> Site: "gallery card"
Backups -> Vault: "writes setup into"
Backups -> Pi: "backs up to"
Capture -> Github: "via the vault copy"
Site -> Github: "runs on"
Backups -> Github: "private repo"
Pi -> Cloudflare: "camera stream"
Cloudflare -> Site: "serves"
Mail -> Gmail: "archive, delete"
Gmail -> Mail: "new mail"
IcloudMail -> Mail: "new mail"
`;case`secondBrain`:return`direction: right

Schedulers: {
  label: "Schedulers"
}
Mail: {
  label: "Email & Texts"
}
Backups: {
  label: "Backups"
}
Jt: {
  label: "JT"
  shape: c4-person
}
Assistants: {
  label: "AI assistants"
}
Scan: {
  label: "Scanner"
}
Capture: {
  label: "Capture"
}
Docs: {
  label: "Find Anything"
}
Vault: {
  label: "Second Brain"

  Ingest: {
    label: "0 Ingest"
    shape: stored_data
  }
  PdfText: {
    label: "Document text"
    shape: stored_data
  }
  Triage: {
    label: "Vault triage"
  }
  Para: {
    label: "Projects & Areas"
    shape: stored_data
  }
  Zettel: {
    label: "Concepts & Quotes"
    shape: stored_data
  }
  Memory: {
    label: "System memory"
    shape: stored_data
  }
  Home: {
    label: "Home dashboard"
  }
}

Jt -> Vault.Home: "checks"
Capture -> Vault.Ingest: "[...]"
Capture -> Vault.Triage: "swept by"
Assistants -> Vault.Triage: "runs"
Assistants -> Vault.Memory: "remembers in"
Schedulers -> Vault.Home: "[...]"
Mail -> Vault.Ingest: "triage button: note with full text"
Scan -> Vault.Ingest: "one note per scan"
Docs -> Vault.PdfText: "full text"
Backups -> Vault.Memory: "writes setup into"
Vault.Para -> Vault.Home: "next actions"
Vault.Ingest -> Vault.Triage: "read by"
Vault.Triage -> Vault.Para: "files to-dos"
Vault.Triage -> Vault.Zettel: "files ideas"
Vault.Triage -> Vault.Memory: "logs the run"
Vault.Triage -> Scan: "asks JT"
Vault.Para -> Capture: "open to-dos"
Mail -> Jt: "what needs action"
Jt -> Capture: "jots things down"
Jt -> Assistants: "asks"
Jt -> Mail: "presses buttons"
Jt -> Scan: "loads paper"
Assistants -> Capture: "runs"
Schedulers -> Mail: "[...]"
Schedulers -> Scan: "every minute"
Scan -> Docs: "indexed"
Schedulers -> Docs: "hourly"
Schedulers -> Backups: "hourly"
`;case`captureView`:return`direction: right

Assistants: {
  label: "AI assistants"

  Claude: {
    label: "Claude Code"
  }
}
Capture: {
  label: "Capture"

  Reminders: {
    label: "Reminders sync"
  }
  CloudCapture: {
    label: "Phone capture"
  }
  Distill: {
    label: "Chat distill"
  }
  Quick: {
    label: "Quick capture"
  }
  Journal: {
    label: "Journal to-dos"
  }
}
AppleApps: {
  label: "Apple Calendar & Reminders"
}
Github: {
  label: "GitHub"
}
Vault: {
  label: "Second Brain"

  Ingest: {
    label: "0 Ingest"
    shape: stored_data
  }
  Triage: {
    label: "Vault triage"
  }
  Para: {
    label: "Projects & Areas"
    shape: stored_data
  }
}
Iphone: {
  label: "iPhone"
}
Jt: {
  label: "JT"
  shape: c4-person
}

Capture.Reminders -> AppleApps: "open to-dos"
Capture.CloudCapture -> Github: "via the vault copy"
AppleApps -> Iphone: "on"
Iphone -> Jt: "in his pocket"
Assistants.Claude -> Capture.Distill: "runs"
Capture.Reminders -> Vault.Ingest: "new reminders"
Capture.Distill -> Vault.Ingest: "atomic notes"
Capture.Quick -> Vault.Ingest: "new note"
Capture.CloudCapture -> Vault.Ingest: "new notes"
Capture.Journal -> Vault.Triage: "swept by"
Assistants.Claude -> Vault.Triage: "runs"
Vault.Ingest -> Vault.Triage: "read by"
Vault.Triage -> Vault.Para: "files to-dos"
Vault.Para -> Capture.Reminders: "open to-dos"
Jt -> Capture: "jots things down"
Jt -> Assistants: "asks"
`;case`assistantsView`:return`direction: right

Iphone: {
  label: "iPhone"
}
FieldAgent: {
  label: "Field Agent"

  Relay: {
    label: "Home base"
  }
}
Jt: {
  label: "JT"
  shape: c4-person
}
Assistants: {
  label: "AI assistants"

  Claude: {
    label: "Claude Code"
  }
  Grok: {
    label: "Grok"
  }
  Skills: {
    label: "Shared skills"
    shape: stored_data
  }
}
Capture: {
  label: "Capture"

  Distill: {
    label: "Chat distill"
  }
}
Vault: {
  label: "Second Brain"

  Triage: {
    label: "Vault triage"
  }
  Memory: {
    label: "System memory"
    shape: stored_data
  }
}

Assistants.Claude -> Assistants.Skills: "follows"
Assistants.Grok -> Assistants.Skills: "follows"
Iphone -> Jt: "in his pocket"
Assistants.Claude -> Vault.Triage: "runs"
Assistants.Grok -> Vault.Triage: "runs"
Vault.Triage -> Vault.Memory: "logs the run"
Assistants.Claude -> Capture.Distill: "runs"
FieldAgent.Relay -> Assistants.Claude: "one turn per message"
FieldAgent.Relay -> Assistants.Grok: "one turn per message"
Jt -> Assistants: "asks"
Jt -> Capture: "jots things down"
Assistants -> Vault.Memory: "remembers in"
`;case`fieldAgentView`:return`direction: right

Iphone: {
  label: "iPhone"
}
Jt: {
  label: "JT"
  shape: c4-person
}
FieldAgent: {
  label: "Field Agent"

  App: {
    label: "Field Agent app"
  }
  Tailnet: {
    label: "Private network"
  }
  Relay: {
    label: "Home base"
  }
  Approval: {
    label: "Allow / Deny card"
  }
}
Assistants: {
  label: "AI assistants"

  Claude: {
    label: "Claude Code"
  }
  Grok: {
    label: "Grok"
  }
}

Jt -> FieldAgent.Approval: "taps"
Iphone -> FieldAgent.App: "runs"
FieldAgent.App -> FieldAgent.Tailnet: "messages"
FieldAgent.Relay -> FieldAgent.Approval: "asks first"
FieldAgent.Approval -> FieldAgent.Relay: "Allow or Deny"
FieldAgent.Tailnet -> FieldAgent.Relay: "carries"
Iphone -> Jt: "in his pocket"
FieldAgent.Relay -> Assistants.Claude: "one turn per message"
FieldAgent.Relay -> Assistants.Grok: "one turn per message"
Jt -> Assistants: "asks"
`;case`schedulersView`:return`direction: right

AppleApps: {
  label: "Apple Calendar & Reminders"
}
Pi: {
  label: "brainpi"

  Heartbeat: {
    label: "Heartbeat"
  }
}
Iphone: {
  label: "iPhone"
}
Schedulers: {
  label: "Schedulers"

  ChipRelay: {
    label: "Phone button relay"
  }
  Launchd: {
    label: "Mac background agents"
  }
  HomePlugin: {
    label: "Home Button plugin"
  }
  Calendar: {
    label: "Calendar mirror"
  }
  Health: {
    label: "Health check"
  }
}
Docs: {
  label: "Find Anything"
}
Mail: {
  label: "Email & Texts"

  Unread: {
    label: "Unread list"
  }
  Texts: {
    label: "Texts mirror"
  }
  MailTriage: {
    label: "Mail & text triage"
  }
}
Scan: {
  label: "Scanner"

  Ocr: {
    label: "Scan sync + OCR"
  }
}
Backups: {
  label: "Backups"

  Machine: {
    label: "Machine snapshot"
  }
}
Printing: {
  label: "3D printing"

  PrintLog: {
    label: "Print log"
  }
  Publish: {
    label: "Gallery publish"
  }
}
Vault: {
  label: "Second Brain"

  Home: {
    label: "Home dashboard"
  }
}

AppleApps -> Schedulers.Calendar: "events"
Iphone -> Schedulers.ChipRelay: "button taps"
Schedulers.HomePlugin -> Schedulers.Calendar: "hourly"
Schedulers.HomePlugin -> Schedulers.Health: "daily"
Schedulers.ChipRelay -> Schedulers.HomePlugin: "queues a button"
Schedulers.HomePlugin -> Docs: "hourly"
AppleApps -> Iphone: "on"
Schedulers.Launchd -> Mail.Unread: "every 5 min"
Schedulers.HomePlugin -> Mail.Texts: "every 5 min"
Schedulers.HomePlugin -> Mail.MailTriage: "launch and Home"
Mail.Unread -> Mail.MailTriage: "new mail"
Mail.Texts -> Mail.MailTriage: "new texts"
Schedulers.HomePlugin -> Scan.Ocr: "every minute"
Schedulers.HomePlugin -> Backups.Machine: "hourly"
Schedulers.HomePlugin -> Printing.PrintLog: "every minute"
Schedulers.HomePlugin -> Printing.Publish: "every 5 min"
Schedulers.Calendar -> Vault.Home: "today’s events"
Schedulers.Health -> Vault.Home: "Health Report"
Pi.Heartbeat -> Schedulers.Health: "disk and drive health"
`;case`email`:return`direction: right

Jt: {
  label: "JT"
  shape: c4-person
}
Gmail: {
  label: "Gmail"
}
IcloudMail: {
  label: "iCloud Mail"
}
Schedulers: {
  label: "Schedulers"

  Launchd: {
    label: "Mac background agents"
  }
  HomePlugin: {
    label: "Home Button plugin"
  }
}
Mail: {
  label: "Email & Texts"

  Unread: {
    label: "Unread list"
  }
  Texts: {
    label: "Texts mirror"
  }
  MailTriage: {
    label: "Mail & text triage"
  }
  Fold: {
    label: "Needs action list"
  }
  MailArchive: {
    label: "Mail archive"
    shape: stored_data
  }
}
Vault: {
  label: "Second Brain"

  Ingest: {
    label: "0 Ingest"
    shape: stored_data
  }
}

Jt -> Mail.Fold: "presses buttons"
Gmail -> Mail.Unread: "new mail"
IcloudMail -> Mail.Unread: "new mail"
Mail.Unread -> Mail.MailTriage: "new mail"
Mail.Texts -> Mail.MailTriage: "new texts"
Mail.MailTriage -> Mail.Fold: "what needs action"
Mail.Fold -> Mail.MailArchive: "triage button: raw copy"
Mail.Fold -> Jt: "what needs action"
Mail.Fold -> Gmail: "archive, delete"
Schedulers.Launchd -> Mail.Unread: "every 5 min"
Schedulers.HomePlugin -> Mail.Texts: "every 5 min"
Schedulers.HomePlugin -> Mail.MailTriage: "launch and Home"
Mail.Fold -> Vault.Ingest: "triage button: note with full text"
`;case`scanner`:return`direction: right

Jt: {
  label: "JT"
  shape: c4-person
}
Schedulers: {
  label: "Schedulers"

  HomePlugin: {
    label: "Home Button plugin"
  }
}
Scan: {
  label: "Scanner"

  Scanner: {
    label: "Brother ADS-1350W"
  }
  Raw: {
    label: "Raw scans"
    shape: stored_data
  }
  Ocr: {
    label: "Scan sync + OCR"
  }
  Rename: {
    label: "Rename dialog"
  }
  Pdf: {
    label: "Scanned PDFs"
    shape: stored_data
  }
}
Pi: {
  label: "brainpi"

  ScanWatch: {
    label: "Scan watcher"
  }
  OcrFallback: {
    label: "Backup OCR"
  }
}
Vault: {
  label: "Second Brain"

  Ingest: {
    label: "0 Ingest"
    shape: stored_data
  }
  Triage: {
    label: "Vault triage"
  }
  PdfText: {
    label: "Document text"
    shape: stored_data
  }
}
Docs: {
  label: "Find Anything"
}

Jt -> Scan.Scanner: "loads paper"
Scan.Scanner -> Scan.Raw: "scanned pages"
Scan.Raw -> Scan.Ocr: "pulled by"
Scan.Ocr -> Scan.Pdf: "searchable PDF"
Scan.Rename -> Scan.Pdf: "renames"
Scan.Pdf -> Docs: "indexed"
Scan.Scanner -> Pi.ScanWatch: "paper detected"
Pi.ScanWatch -> Scan.Raw: "saves pages"
Scan.Raw -> Pi.OcrFallback: "left an hour"
Schedulers.HomePlugin -> Scan.Ocr: "every minute"
Schedulers.HomePlugin -> Docs: "hourly"
Scan.Ocr -> Vault.Ingest: "one note per scan"
Vault.Ingest -> Vault.Triage: "read by"
Vault.Triage -> Scan.Rename: "asks JT"
Docs -> Vault.PdfText: "full text"
`;case`piView`:return`direction: right

Scan: {
  label: "Scanner"

  Scanner: {
    label: "Brother ADS-1350W"
  }
  Raw: {
    label: "Raw scans"
    shape: stored_data
  }
}
Pi: {
  label: "brainpi"

  Mirror: {
    label: "Nightly mirror"
  }
  Camera: {
    label: "Camera relay"
  }
  ScanWatch: {
    label: "Scan watcher"
  }
  TmShare: {
    label: "Time Machine share"
    shape: stored_data
  }
  Heartbeat: {
    label: "Heartbeat"
  }
  Tunnel: {
    label: "Tunnel"
  }
  PrintWatch: {
    label: "Print watcher"
  }
  OcrFallback: {
    label: "Backup OCR"
  }
}
Printing: {
  label: "3D printing"

  Printer: {
    label: "Bambu P2S"
  }
  Publish: {
    label: "Gallery publish"
  }
}
Backups: {
  label: "Backups"

  TimeMachine: {
    label: "Time Machine"
  }
}
Schedulers: {
  label: "Schedulers"

  Health: {
    label: "Health check"
  }
}
Cloudflare: {
  label: "Cloudflare"
}
SiteLive: {
  label: "Live camera"
}

Pi.Camera -> Pi.Tunnel: "live video"
Pi.Camera -> Pi.PrintWatch: "bed photo"
Pi.Tunnel -> Cloudflare: "camera stream"
Scan.Scanner -> Pi.ScanWatch: "paper detected"
Pi.ScanWatch -> Scan.Raw: "saves pages"
Scan.Scanner -> Scan.Raw: "scanned pages"
Scan.Raw -> Pi.OcrFallback: "left an hour"
Printing.Printer -> Pi.Camera: "camera feed"
Printing.Printer -> Pi.PrintWatch: "finished"
Pi.PrintWatch -> Printing.Publish: "drafted card"
Backups.TimeMachine -> Pi.TmShare: "backs up to"
Pi.Heartbeat -> Schedulers.Health: "disk and drive health"
Cloudflare -> SiteLive: "serves"
`;case`printingView`:return`direction: right

Schedulers: {
  label: "Schedulers"

  HomePlugin: {
    label: "Home Button plugin"
  }
}
Printing: {
  label: "3D printing"

  Printer: {
    label: "Bambu P2S"
  }
  PrintLog: {
    label: "Print log"
  }
  Library: {
    label: "3D printing library"
    shape: stored_data
  }
  Publish: {
    label: "Gallery publish"
  }
}
Pi: {
  label: "brainpi"

  Camera: {
    label: "Camera relay"
  }
  PrintWatch: {
    label: "Print watcher"
  }
  Tunnel: {
    label: "Tunnel"
  }
}
Cloudflare: {
  label: "Cloudflare"
}
Site: {
  label: "embry.dev"

  Code: {
    label: "Site code"
    shape: stored_data
  }
  Live: {
    label: "Live camera"
  }
}

Printing.Printer -> Printing.PrintLog: "start and finish"
Printing.PrintLog -> Printing.Library: "writes history"
Schedulers.HomePlugin -> Printing.PrintLog: "every minute"
Schedulers.HomePlugin -> Printing.Publish: "every 5 min"
Printing.Printer -> Pi.Camera: "camera feed"
Printing.Printer -> Pi.PrintWatch: "finished"
Pi.Camera -> Pi.PrintWatch: "bed photo"
Pi.PrintWatch -> Printing.Publish: "drafted card"
Pi.Camera -> Pi.Tunnel: "live video"
Pi.Tunnel -> Cloudflare: "camera stream"
Printing.Publish -> Site.Code: "gallery card"
Cloudflare -> Site.Live: "serves"
`;case`siteView`:return`direction: right

Jt: {
  label: "JT"
  shape: c4-person
}
PiTunnel: {
  label: "Tunnel"
}
Printing: {
  label: "3D printing"

  Publish: {
    label: "Gallery publish"
  }
}
Cloudflare: {
  label: "Cloudflare"
}
Site: {
  label: "embry.dev"

  Live: {
    label: "Live camera"
  }
  Code: {
    label: "Site code"
    shape: stored_data
  }
  Deploy: {
    label: "Build and publish"
  }
  Pages: {
    label: "Public pages"
  }
}
Github: {
  label: "GitHub"
}

Cloudflare -> Site.Live: "serves"
Site.Code -> Site.Deploy: "push"
Site.Deploy -> Site.Pages: "publishes"
Site.Live -> Site.Pages: "plays on"
Site.Deploy -> Github: "runs on"
PiTunnel -> Cloudflare: "camera stream"
Printing.Publish -> Site.Code: "gallery card"
`;case`backupsView`:return`direction: right

Schedulers: {
  label: "Schedulers"

  HomePlugin: {
    label: "Home Button plugin"
  }
}
Backups: {
  label: "Backups"

  Machine: {
    label: "Machine snapshot"
  }
  TimeMachine: {
    label: "Time Machine"
  }
  VaultPush: {
    label: "Vault backup"
  }
  Usb: {
    label: "USB backup drive"
  }
}
Vault: {
  label: "Second Brain"

  Memory: {
    label: "System memory"
    shape: stored_data
  }
}
Pi: {
  label: "brainpi"

  TmShare: {
    label: "Time Machine share"
    shape: stored_data
  }
  Mirror: {
    label: "Nightly mirror"
  }
}
Github: {
  label: "GitHub"
}

Backups.Machine -> Backups.VaultPush: "one minute before"
Backups.TimeMachine -> Backups.Usb: "second copy"
Backups.VaultPush -> Github: "private repo"
Schedulers.HomePlugin -> Backups.Machine: "hourly"
Schedulers.HomePlugin -> Backups.VaultPush: "hourly"
Backups.Machine -> Vault.Memory: "writes setup into"
Backups.TimeMachine -> Pi.TmShare: "backs up to"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};