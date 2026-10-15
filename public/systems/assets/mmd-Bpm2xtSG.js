var e=e=>{switch(e){case`index`:return'---\ntitle: "How everything connects"\n---\ngraph TB\n  Iphone@{ shape: rectangle, label: "iPhone" }\n  Backups@{ shape: rectangle, label: "Backups" }\n  IcloudMail@{ shape: rounded, label: "iCloud Mail" }\n  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }\n  FieldAgent@{ shape: rectangle, label: "Field Agent" }\n  Mail@{ shape: rectangle, label: "Email & Texts" }\n  Assistants@{ shape: rectangle, label: "AI assistants" }\n  Gmail@{ shape: rounded, label: "Gmail" }\n  Vault@{ shape: rectangle, label: "Second Brain" }\n  Capture@{ shape: rectangle, label: "Capture" }\n  Scan@{ shape: rectangle, label: "Scanner" }\n  Docs@{ shape: rectangle, label: "Find Anything" }\n  Pi@{ shape: rectangle, label: "brainpi" }\n  Printing@{ shape: rectangle, label: "3D printing" }\n  Cloudflare@{ shape: rounded, label: "Cloudflare" }\n  Site@{ shape: rectangle, label: "embry.dev" }\n  Github@{ shape: rounded, label: "GitHub" }\n  Iphone -. "`in his pocket`" .-> Jt\n  Jt -. "`checks`" .-> Vault\n  Jt -. "`jots things down`" .-> Capture\n  Vault -. "`open to-dos`" .-> Capture\n  Capture -. "`[...]`" .-> Vault\n  Jt -. "`asks`" .-> Assistants\n  Assistants -. "`[...]`" .-> Vault\n  Assistants -. "`runs`" .-> Capture\n  Jt -. "`taps`" .-> FieldAgent\n  Iphone -. "`runs`" .-> FieldAgent\n  FieldAgent -. "`one turn per message`" .-> Assistants\n  Jt -. "`presses buttons`" .-> Mail\n  Mail -. "`what needs action`" .-> Jt\n  Mail -. "`triage button: note with full text`" .-> Vault\n  Jt -. "`loads paper`" .-> Scan\n  Vault -. "`asks JT`" .-> Scan\n  Scan -. "`one note per scan`" .-> Vault\n  Scan -. "`indexed`" .-> Docs\n  Docs -. "`full text`" .-> Vault\n  Scan -. "`[...]`" .-> Pi\n  Pi -. "`saves pages`" .-> Scan\n  Pi -. "`drafted card`" .-> Printing\n  Printing -. "`[...]`" .-> Pi\n  Printing -. "`gallery card`" .-> Site\n  Backups -. "`writes setup into`" .-> Vault\n  Backups -. "`backs up to`" .-> Pi\n  Capture -. "`via the vault copy`" .-> Github\n  Site -. "`runs on`" .-> Github\n  Backups -. "`private repo`" .-> Github\n  Pi -. "`camera stream`" .-> Cloudflare\n  Cloudflare -. "`serves`" .-> Site\n  Mail -. "`archive, delete`" .-> Gmail\n  Gmail -. "`new mail`" .-> Mail\n  IcloudMail -. "`new mail`" .-> Mail\n';case`secondBrain`:return'---\ntitle: "Second Brain"\n---\ngraph LR\n  Schedulers@{ shape: rectangle, label: "Schedulers" }\n  Mail@{ shape: rectangle, label: "Email & Texts" }\n  Backups@{ shape: rectangle, label: "Backups" }\n  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }\n  Assistants@{ shape: rectangle, label: "AI assistants" }\n  Scan@{ shape: rectangle, label: "Scanner" }\n  Capture@{ shape: rectangle, label: "Capture" }\n  Docs@{ shape: rectangle, label: "Find Anything" }\n  subgraph Vault["`Second Brain`"]\n    Vault.Ingest@{ shape: disk, label: "0 Ingest" }\n    Vault.PdfText@{ shape: disk, label: "Document text" }\n    Vault.Triage@{ shape: rectangle, label: "Vault triage" }\n    Vault.Para@{ shape: disk, label: "Projects & Areas" }\n    Vault.Zettel@{ shape: disk, label: "Concepts & Quotes" }\n    Vault.Memory@{ shape: disk, label: "System memory" }\n    Vault.Home@{ shape: rectangle, label: "Home dashboard" }\n  end\n  Jt -. "`checks`" .-> Vault.Home\n  Capture -. "`[...]`" .-> Vault.Ingest\n  Capture -. "`swept by`" .-> Vault.Triage\n  Assistants -. "`runs`" .-> Vault.Triage\n  Assistants -. "`remembers in`" .-> Vault.Memory\n  Schedulers -. "`[...]`" .-> Vault.Home\n  Mail -. "`triage button: note with full text`" .-> Vault.Ingest\n  Scan -. "`one note per scan`" .-> Vault.Ingest\n  Docs -. "`full text`" .-> Vault.PdfText\n  Backups -. "`writes setup into`" .-> Vault.Memory\n  Vault.Para -. "`next actions`" .-> Vault.Home\n  Vault.Ingest -. "`read by`" .-> Vault.Triage\n  Vault.Triage -. "`files to-dos`" .-> Vault.Para\n  Vault.Triage -. "`files ideas`" .-> Vault.Zettel\n  Vault.Triage -. "`logs the run`" .-> Vault.Memory\n  Vault.Triage -. "`asks JT`" .-> Scan\n  Vault.Para -. "`open to-dos`" .-> Capture\n  Mail -. "`what needs action`" .-> Jt\n  Jt -. "`jots things down`" .-> Capture\n  Jt -. "`asks`" .-> Assistants\n  Jt -. "`presses buttons`" .-> Mail\n  Jt -. "`loads paper`" .-> Scan\n  Assistants -. "`runs`" .-> Capture\n  Schedulers -. "`[...]`" .-> Mail\n  Schedulers -. "`every minute`" .-> Scan\n  Scan -. "`indexed`" .-> Docs\n  Schedulers -. "`hourly`" .-> Docs\n  Schedulers -. "`hourly`" .-> Backups\n';case`captureView`:return`---
title: "Capture"
---
graph LR
  subgraph Assistants["\`AI assistants\`"]
    Assistants.Claude@{ shape: rectangle, label: "Claude Code" }
  end
  subgraph Capture["\`Capture\`"]
    Capture.Reminders@{ shape: rectangle, label: "Reminders sync" }
    Capture.CloudCapture@{ shape: rectangle, label: "Phone capture" }
    Capture.Distill@{ shape: rectangle, label: "Chat distill" }
    Capture.Quick@{ shape: rectangle, label: "Quick capture" }
    Capture.Journal@{ shape: rectangle, label: "Journal to-dos" }
  end
  AppleApps@{ shape: rounded, label: "Apple Calendar & Reminders" }
  Github@{ shape: rounded, label: "GitHub" }
  subgraph Vault["\`Second Brain\`"]
    Vault.Ingest@{ shape: disk, label: "0 Ingest" }
    Vault.Triage@{ shape: rectangle, label: "Vault triage" }
    Vault.Para@{ shape: disk, label: "Projects & Areas" }
  end
  Iphone@{ shape: rectangle, label: "iPhone" }
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  Capture.Reminders -. "\`open to-dos\`" .-> AppleApps
  Capture.CloudCapture -. "\`via the vault copy\`" .-> Github
  AppleApps -. "\`on\`" .-> Iphone
  Iphone -. "\`in his pocket\`" .-> Jt
  Assistants.Claude -. "\`runs\`" .-> Capture.Distill
  Capture.Reminders -. "\`new reminders\`" .-> Vault.Ingest
  Capture.Distill -. "\`atomic notes\`" .-> Vault.Ingest
  Capture.Quick -. "\`new note\`" .-> Vault.Ingest
  Capture.CloudCapture -. "\`new notes\`" .-> Vault.Ingest
  Capture.Journal -. "\`swept by\`" .-> Vault.Triage
  Assistants.Claude -. "\`runs\`" .-> Vault.Triage
  Vault.Ingest -. "\`read by\`" .-> Vault.Triage
  Vault.Triage -. "\`files to-dos\`" .-> Vault.Para
  Vault.Para -. "\`open to-dos\`" .-> Capture.Reminders
  Jt -. "\`jots things down\`" .-> Capture
  Jt -. "\`asks\`" .-> Assistants
`;case`assistantsView`:return`---
title: "AI assistants"
---
graph LR
  Iphone@{ shape: rectangle, label: "iPhone" }
  subgraph FieldAgent["\`Field Agent\`"]
    FieldAgent.Relay@{ shape: rectangle, label: "Home base" }
  end
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  subgraph Assistants["\`AI assistants\`"]
    Assistants.Claude@{ shape: rectangle, label: "Claude Code" }
    Assistants.Grok@{ shape: rectangle, label: "Grok" }
    Assistants.Skills@{ shape: disk, label: "Shared skills" }
  end
  subgraph Capture["\`Capture\`"]
    Capture.Distill@{ shape: rectangle, label: "Chat distill" }
  end
  subgraph Vault["\`Second Brain\`"]
    Vault.Triage@{ shape: rectangle, label: "Vault triage" }
    Vault.Memory@{ shape: disk, label: "System memory" }
  end
  Assistants.Claude -. "\`follows\`" .-> Assistants.Skills
  Assistants.Grok -. "\`follows\`" .-> Assistants.Skills
  Iphone -. "\`in his pocket\`" .-> Jt
  Assistants.Claude -. "\`runs\`" .-> Vault.Triage
  Assistants.Grok -. "\`runs\`" .-> Vault.Triage
  Vault.Triage -. "\`logs the run\`" .-> Vault.Memory
  Assistants.Claude -. "\`runs\`" .-> Capture.Distill
  FieldAgent.Relay -. "\`one turn per message\`" .-> Assistants.Claude
  FieldAgent.Relay -. "\`one turn per message\`" .-> Assistants.Grok
  Jt -. "\`asks\`" .-> Assistants
  Jt -. "\`jots things down\`" .-> Capture
  Assistants -. "\`remembers in\`" .-> Vault.Memory
`;case`fieldAgentView`:return`---
title: "Field Agent"
---
graph LR
  Iphone@{ shape: rectangle, label: "iPhone" }
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  subgraph FieldAgent["\`Field Agent\`"]
    FieldAgent.App@{ shape: rectangle, label: "Field Agent app" }
    FieldAgent.Tailnet@{ shape: rounded, label: "Private network" }
    FieldAgent.Relay@{ shape: rectangle, label: "Home base" }
    FieldAgent.Approval@{ shape: rectangle, label: "Allow / Deny card" }
  end
  subgraph Assistants["\`AI assistants\`"]
    Assistants.Claude@{ shape: rectangle, label: "Claude Code" }
    Assistants.Grok@{ shape: rectangle, label: "Grok" }
  end
  Jt -. "\`taps\`" .-> FieldAgent.Approval
  Iphone -. "\`runs\`" .-> FieldAgent.App
  FieldAgent.App -. "\`messages\`" .-> FieldAgent.Tailnet
  FieldAgent.Relay -. "\`asks first\`" .-> FieldAgent.Approval
  FieldAgent.Approval -. "\`Allow or Deny\`" .-> FieldAgent.Relay
  FieldAgent.Tailnet -. "\`carries\`" .-> FieldAgent.Relay
  Iphone -. "\`in his pocket\`" .-> Jt
  FieldAgent.Relay -. "\`one turn per message\`" .-> Assistants.Claude
  FieldAgent.Relay -. "\`one turn per message\`" .-> Assistants.Grok
  Jt -. "\`asks\`" .-> Assistants
`;case`schedulersView`:return`---
title: "Schedulers"
---
graph LR
  AppleApps@{ shape: rounded, label: "Apple Calendar & Reminders" }
  subgraph Pi["\`brainpi\`"]
    Pi.Heartbeat@{ shape: rectangle, label: "Heartbeat" }
  end
  Iphone@{ shape: rectangle, label: "iPhone" }
  subgraph Schedulers["\`Schedulers\`"]
    Schedulers.ChipRelay@{ shape: rectangle, label: "Phone button relay" }
    Schedulers.Launchd@{ shape: rectangle, label: "Mac background agents" }
    Schedulers.HomePlugin@{ shape: rectangle, label: "Home Button plugin" }
    Schedulers.Calendar@{ shape: rectangle, label: "Calendar mirror" }
    Schedulers.Health@{ shape: rectangle, label: "Health check" }
  end
  Docs@{ shape: rectangle, label: "Find Anything" }
  subgraph Mail["\`Email & Texts\`"]
    Mail.Unread@{ shape: rectangle, label: "Unread list" }
    Mail.Texts@{ shape: rectangle, label: "Texts mirror" }
    Mail.MailTriage@{ shape: rectangle, label: "Mail & text triage" }
  end
  subgraph Scan["\`Scanner\`"]
    Scan.Ocr@{ shape: rectangle, label: "Scan sync + OCR" }
  end
  subgraph Backups["\`Backups\`"]
    Backups.Machine@{ shape: rectangle, label: "Machine snapshot" }
  end
  subgraph Printing["\`3D printing\`"]
    Printing.PrintLog@{ shape: rectangle, label: "Print log" }
    Printing.Publish@{ shape: rectangle, label: "Gallery publish" }
  end
  subgraph Vault["\`Second Brain\`"]
    Vault.Home@{ shape: rectangle, label: "Home dashboard" }
  end
  AppleApps -. "\`events\`" .-> Schedulers.Calendar
  Iphone -. "\`button taps\`" .-> Schedulers.ChipRelay
  Schedulers.HomePlugin -. "\`hourly\`" .-> Schedulers.Calendar
  Schedulers.HomePlugin -. "\`daily\`" .-> Schedulers.Health
  Schedulers.ChipRelay -. "\`queues a button\`" .-> Schedulers.HomePlugin
  Schedulers.HomePlugin -. "\`hourly\`" .-> Docs
  AppleApps -. "\`on\`" .-> Iphone
  Schedulers.Launchd -. "\`every 5 min\`" .-> Mail.Unread
  Schedulers.HomePlugin -. "\`every 5 min\`" .-> Mail.Texts
  Schedulers.HomePlugin -. "\`launch and Home\`" .-> Mail.MailTriage
  Mail.Unread -. "\`new mail\`" .-> Mail.MailTriage
  Mail.Texts -. "\`new texts\`" .-> Mail.MailTriage
  Schedulers.HomePlugin -. "\`every minute\`" .-> Scan.Ocr
  Schedulers.HomePlugin -. "\`hourly\`" .-> Backups.Machine
  Schedulers.HomePlugin -. "\`every minute\`" .-> Printing.PrintLog
  Schedulers.HomePlugin -. "\`every 5 min\`" .-> Printing.Publish
  Schedulers.Calendar -. "\`today’s events\`" .-> Vault.Home
  Schedulers.Health -. "\`Health Report\`" .-> Vault.Home
  Pi.Heartbeat -. "\`disk and drive health\`" .-> Schedulers.Health
`;case`email`:return`---
title: "Email & Texts"
---
graph LR
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  Gmail@{ shape: rounded, label: "Gmail" }
  IcloudMail@{ shape: rounded, label: "iCloud Mail" }
  subgraph Schedulers["\`Schedulers\`"]
    Schedulers.Launchd@{ shape: rectangle, label: "Mac background agents" }
    Schedulers.HomePlugin@{ shape: rectangle, label: "Home Button plugin" }
  end
  subgraph Mail["\`Email & Texts\`"]
    Mail.Unread@{ shape: rectangle, label: "Unread list" }
    Mail.Texts@{ shape: rectangle, label: "Texts mirror" }
    Mail.MailTriage@{ shape: rectangle, label: "Mail & text triage" }
    Mail.Fold@{ shape: rectangle, label: "Needs action list" }
    Mail.MailArchive@{ shape: disk, label: "Mail archive" }
  end
  subgraph Vault["\`Second Brain\`"]
    Vault.Ingest@{ shape: disk, label: "0 Ingest" }
  end
  Jt -. "\`presses buttons\`" .-> Mail.Fold
  Gmail -. "\`new mail\`" .-> Mail.Unread
  IcloudMail -. "\`new mail\`" .-> Mail.Unread
  Mail.Unread -. "\`new mail\`" .-> Mail.MailTriage
  Mail.Texts -. "\`new texts\`" .-> Mail.MailTriage
  Mail.MailTriage -. "\`what needs action\`" .-> Mail.Fold
  Mail.Fold -. "\`triage button: raw copy\`" .-> Mail.MailArchive
  Mail.Fold -. "\`what needs action\`" .-> Jt
  Mail.Fold -. "\`archive, delete\`" .-> Gmail
  Schedulers.Launchd -. "\`every 5 min\`" .-> Mail.Unread
  Schedulers.HomePlugin -. "\`every 5 min\`" .-> Mail.Texts
  Schedulers.HomePlugin -. "\`launch and Home\`" .-> Mail.MailTriage
  Mail.Fold -. "\`triage button: note with full text\`" .-> Vault.Ingest
`;case`scanner`:return`---
title: "Scanner"
---
graph LR
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  subgraph Schedulers["\`Schedulers\`"]
    Schedulers.HomePlugin@{ shape: rectangle, label: "Home Button plugin" }
  end
  subgraph Scan["\`Scanner\`"]
    Scan.Scanner@{ shape: rectangle, label: "Brother ADS-1350W" }
    Scan.Raw@{ shape: disk, label: "Raw scans" }
    Scan.Ocr@{ shape: rectangle, label: "Scan sync + OCR" }
    Scan.Rename@{ shape: rectangle, label: "Rename dialog" }
    Scan.Pdf@{ shape: disk, label: "Scanned PDFs" }
  end
  subgraph Pi["\`brainpi\`"]
    Pi.ScanWatch@{ shape: rectangle, label: "Scan watcher" }
    Pi.OcrFallback@{ shape: rectangle, label: "Backup OCR" }
  end
  subgraph Vault["\`Second Brain\`"]
    Vault.Ingest@{ shape: disk, label: "0 Ingest" }
    Vault.Triage@{ shape: rectangle, label: "Vault triage" }
    Vault.PdfText@{ shape: disk, label: "Document text" }
  end
  Docs@{ shape: rectangle, label: "Find Anything" }
  Jt -. "\`loads paper\`" .-> Scan.Scanner
  Scan.Scanner -. "\`scanned pages\`" .-> Scan.Raw
  Scan.Raw -. "\`pulled by\`" .-> Scan.Ocr
  Scan.Ocr -. "\`searchable PDF\`" .-> Scan.Pdf
  Scan.Rename -. "\`renames\`" .-> Scan.Pdf
  Scan.Pdf -. "\`indexed\`" .-> Docs
  Scan.Scanner -. "\`paper detected\`" .-> Pi.ScanWatch
  Pi.ScanWatch -. "\`saves pages\`" .-> Scan.Raw
  Scan.Raw -. "\`left an hour\`" .-> Pi.OcrFallback
  Schedulers.HomePlugin -. "\`every minute\`" .-> Scan.Ocr
  Schedulers.HomePlugin -. "\`hourly\`" .-> Docs
  Scan.Ocr -. "\`one note per scan\`" .-> Vault.Ingest
  Vault.Ingest -. "\`read by\`" .-> Vault.Triage
  Vault.Triage -. "\`asks JT\`" .-> Scan.Rename
  Docs -. "\`full text\`" .-> Vault.PdfText
`;case`piView`:return`---
title: "brainpi"
---
graph LR
  subgraph Scan["\`Scanner\`"]
    Scan.Scanner@{ shape: rectangle, label: "Brother ADS-1350W" }
    Scan.Raw@{ shape: disk, label: "Raw scans" }
  end
  subgraph Pi["\`brainpi\`"]
    Pi.Mirror@{ shape: rectangle, label: "Nightly mirror" }
    Pi.Camera@{ shape: rectangle, label: "Camera relay" }
    Pi.ScanWatch@{ shape: rectangle, label: "Scan watcher" }
    Pi.TmShare@{ shape: disk, label: "Time Machine share" }
    Pi.Heartbeat@{ shape: rectangle, label: "Heartbeat" }
    Pi.Tunnel@{ shape: rectangle, label: "Tunnel" }
    Pi.PrintWatch@{ shape: rectangle, label: "Print watcher" }
    Pi.OcrFallback@{ shape: rectangle, label: "Backup OCR" }
  end
  subgraph Printing["\`3D printing\`"]
    Printing.Printer@{ shape: rectangle, label: "Bambu P2S" }
    Printing.Publish@{ shape: rectangle, label: "Gallery publish" }
  end
  subgraph Backups["\`Backups\`"]
    Backups.TimeMachine@{ shape: rectangle, label: "Time Machine" }
  end
  subgraph Schedulers["\`Schedulers\`"]
    Schedulers.Health@{ shape: rectangle, label: "Health check" }
  end
  Cloudflare@{ shape: rounded, label: "Cloudflare" }
  SiteLive@{ shape: rectangle, label: "Live camera" }
  Pi.Camera -. "\`live video\`" .-> Pi.Tunnel
  Pi.Camera -. "\`bed photo\`" .-> Pi.PrintWatch
  Pi.Tunnel -. "\`camera stream\`" .-> Cloudflare
  Scan.Scanner -. "\`paper detected\`" .-> Pi.ScanWatch
  Pi.ScanWatch -. "\`saves pages\`" .-> Scan.Raw
  Scan.Scanner -. "\`scanned pages\`" .-> Scan.Raw
  Scan.Raw -. "\`left an hour\`" .-> Pi.OcrFallback
  Printing.Printer -. "\`camera feed\`" .-> Pi.Camera
  Printing.Printer -. "\`finished\`" .-> Pi.PrintWatch
  Pi.PrintWatch -. "\`drafted card\`" .-> Printing.Publish
  Backups.TimeMachine -. "\`backs up to\`" .-> Pi.TmShare
  Pi.Heartbeat -. "\`disk and drive health\`" .-> Schedulers.Health
  Cloudflare -. "\`serves\`" .-> SiteLive
`;case`printingView`:return`---
title: "3D printing"
---
graph LR
  subgraph Schedulers["\`Schedulers\`"]
    Schedulers.HomePlugin@{ shape: rectangle, label: "Home Button plugin" }
  end
  subgraph Printing["\`3D printing\`"]
    Printing.Printer@{ shape: rectangle, label: "Bambu P2S" }
    Printing.PrintLog@{ shape: rectangle, label: "Print log" }
    Printing.Library@{ shape: disk, label: "3D printing library" }
    Printing.Publish@{ shape: rectangle, label: "Gallery publish" }
  end
  subgraph Pi["\`brainpi\`"]
    Pi.Camera@{ shape: rectangle, label: "Camera relay" }
    Pi.PrintWatch@{ shape: rectangle, label: "Print watcher" }
    Pi.Tunnel@{ shape: rectangle, label: "Tunnel" }
  end
  Cloudflare@{ shape: rounded, label: "Cloudflare" }
  subgraph Site["\`embry.dev\`"]
    Site.Code@{ shape: disk, label: "Site code" }
    Site.Live@{ shape: rectangle, label: "Live camera" }
  end
  Printing.Printer -. "\`start and finish\`" .-> Printing.PrintLog
  Printing.PrintLog -. "\`writes history\`" .-> Printing.Library
  Schedulers.HomePlugin -. "\`every minute\`" .-> Printing.PrintLog
  Schedulers.HomePlugin -. "\`every 5 min\`" .-> Printing.Publish
  Printing.Printer -. "\`camera feed\`" .-> Pi.Camera
  Printing.Printer -. "\`finished\`" .-> Pi.PrintWatch
  Pi.Camera -. "\`bed photo\`" .-> Pi.PrintWatch
  Pi.PrintWatch -. "\`drafted card\`" .-> Printing.Publish
  Pi.Camera -. "\`live video\`" .-> Pi.Tunnel
  Pi.Tunnel -. "\`camera stream\`" .-> Cloudflare
  Printing.Publish -. "\`gallery card\`" .-> Site.Code
  Cloudflare -. "\`serves\`" .-> Site.Live
`;case`siteView`:return`---
title: "embry.dev"
---
graph LR
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  PiTunnel@{ shape: rectangle, label: "Tunnel" }
  subgraph Printing["\`3D printing\`"]
    Printing.Publish@{ shape: rectangle, label: "Gallery publish" }
  end
  Cloudflare@{ shape: rounded, label: "Cloudflare" }
  subgraph Site["\`embry.dev\`"]
    Site.Live@{ shape: rectangle, label: "Live camera" }
    Site.Code@{ shape: disk, label: "Site code" }
    Site.Deploy@{ shape: rectangle, label: "Build and publish" }
    Site.Pages@{ shape: rectangle, label: "Public pages" }
  end
  Github@{ shape: rounded, label: "GitHub" }
  Cloudflare -. "\`serves\`" .-> Site.Live
  Site.Code -. "\`push\`" .-> Site.Deploy
  Site.Deploy -. "\`publishes\`" .-> Site.Pages
  Site.Live -. "\`plays on\`" .-> Site.Pages
  Site.Deploy -. "\`runs on\`" .-> Github
  PiTunnel -. "\`camera stream\`" .-> Cloudflare
  Printing.Publish -. "\`gallery card\`" .-> Site.Code
`;case`backupsView`:return`---
title: "Backups"
---
graph LR
  subgraph Schedulers["\`Schedulers\`"]
    Schedulers.HomePlugin@{ shape: rectangle, label: "Home Button plugin" }
  end
  subgraph Backups["\`Backups\`"]
    Backups.Machine@{ shape: rectangle, label: "Machine snapshot" }
    Backups.TimeMachine@{ shape: rectangle, label: "Time Machine" }
    Backups.VaultPush@{ shape: rectangle, label: "Vault backup" }
    Backups.Usb@{ shape: rectangle, label: "USB backup drive" }
  end
  subgraph Vault["\`Second Brain\`"]
    Vault.Memory@{ shape: disk, label: "System memory" }
  end
  subgraph Pi["\`brainpi\`"]
    Pi.TmShare@{ shape: disk, label: "Time Machine share" }
    Pi.Mirror@{ shape: rectangle, label: "Nightly mirror" }
  end
  Github@{ shape: rounded, label: "GitHub" }
  Backups.Machine -. "\`one minute before\`" .-> Backups.VaultPush
  Backups.TimeMachine -. "\`second copy\`" .-> Backups.Usb
  Backups.VaultPush -. "\`private repo\`" .-> Github
  Schedulers.HomePlugin -. "\`hourly\`" .-> Backups.Machine
  Schedulers.HomePlugin -. "\`hourly\`" .-> Backups.VaultPush
  Backups.Machine -. "\`writes setup into\`" .-> Vault.Memory
  Backups.TimeMachine -. "\`backs up to\`" .-> Pi.TmShare
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};