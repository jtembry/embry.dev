var e=e=>{switch(e){case`index`:return`---
title: "How everything connects"
---
graph TB
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  Assistants@{ shape: rectangle, label: "AI assistant" }
  Workshop@{ shape: rectangle, label: "Workshop" }
  Intake@{ shape: rectangle, label: "What comes in" }
  Vault@{ shape: rectangle, label: "The vault" }
  FieldAgent@{ shape: rectangle, label: "Field Agent" }
  Backups@{ shape: rectangle, label: "Backups" }
  Jt -. "\`mail, texts, paper, notes\`" .-> Intake
  Intake -. "\`lands in the in-tray\`" .-> Vault
  Assistants -. "\`files it, remembers it\`" .-> Vault
  Assistants -. "\`sorts mail and texts\`" .-> Intake
  Vault -. "\`what needs doing\`" .-> FieldAgent
  FieldAgent -. "\`on the phone, anywhere\`" .-> Jt
  FieldAgent -. "\`chat, Allow / Deny\`" .-> Assistants
  Vault -. "\`every hour\`" .-> Backups
  Workshop -. "\`print history\`" .-> Vault
`;case`intakeView`:return'---\ntitle: "What comes in"\n---\ngraph LR\n  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }\n  Mailboxes@{ shape: rounded, label: "Mailboxes" }\n  AppleApps@{ shape: rounded, label: "Calendar & Reminders" }\n  Vault@{ shape: rectangle, label: "The vault" }\n  Assistants@{ shape: rectangle, label: "AI assistant" }\n  FieldAgent@{ shape: rectangle, label: "Field Agent" }\n  subgraph Intake["`What comes in`"]\n    Intake.Scan@{ shape: rectangle, label: "Paper" }\n    Intake.Capture@{ shape: rectangle, label: "Notes & to-dos" }\n    Intake.Mail@{ shape: rectangle, label: "Email & Texts" }\n  end\n  Jt -. "`loads paper`" .-> Intake.Scan\n  Jt -. "`jots things down`" .-> Intake.Capture\n  Mailboxes -. "`new mail`" .-> Intake.Mail\n  AppleApps -. "`new reminders`" .-> Intake.Capture\n  Vault -. "`asks JT`" .-> Intake.Scan\n  Vault -. "`open to-dos`" .-> Intake.Capture\n  Assistants -. "`runs`" .-> Intake.Mail\n  Assistants -. "`runs`" .-> Intake.Capture\n  FieldAgent -. "`when the phone opens`" .-> Intake.Mail\n  Intake.Mail -. "`archive the noise`" .-> Mailboxes\n  Intake.Mail -. "`lands in the in-tray`" .-> Vault\n  Intake.Mail -. "`needs action`" .-> FieldAgent\n  Intake.Scan -. "`[...]`" .-> Vault\n  Intake.Capture -. "`open to-dos`" .-> AppleApps\n  Intake.Capture -. "`[...]`" .-> Vault\n';case`email`:return`---
title: "Email & Texts"
---
graph LR
  Assistants@{ shape: rectangle, label: "AI assistant" }
  FieldAgent@{ shape: rectangle, label: "Field Agent" }
  Mailboxes@{ shape: rounded, label: "Mailboxes" }
  subgraph IntakeMail["\`Email & Texts\`"]
    IntakeMail.Unread@{ shape: rectangle, label: "Unread mail" }
    IntakeMail.Texts@{ shape: rectangle, label: "New texts" }
    IntakeMail.MailTriage@{ shape: rectangle, label: "Mail & text triage" }
    IntakeMail.MailArchive@{ shape: disk, label: "Mail archive" }
  end
  Vault@{ shape: rectangle, label: "The vault" }
  Mailboxes -. "\`new mail\`" .-> IntakeMail.Unread
  Assistants -. "\`runs\`" .-> IntakeMail.MailTriage
  FieldAgent -. "\`when the phone opens\`" .-> IntakeMail.MailTriage
  IntakeMail.Unread -. "\`new mail\`" .-> IntakeMail.MailTriage
  IntakeMail.Texts -. "\`new texts\`" .-> IntakeMail.MailTriage
  IntakeMail.MailTriage -. "\`kept threads\`" .-> IntakeMail.MailArchive
  IntakeMail.MailTriage -. "\`archive the noise\`" .-> Mailboxes
  IntakeMail.MailTriage -. "\`lands in the in-tray\`" .-> Vault
  IntakeMail.MailTriage -. "\`needs action\`" .-> FieldAgent
  FieldAgent -. "\`archive, delete\`" .-> Mailboxes
`;case`scanner`:return`---
title: "Paper"
---
graph LR
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  Vault@{ shape: rectangle, label: "The vault" }
  subgraph IntakeScan["\`Paper\`"]
    IntakeScan.Scanner@{ shape: rectangle, label: "Scanner" }
    IntakeScan.Rename@{ shape: rectangle, label: "Name and file it" }
    IntakeScan.Ocr@{ shape: rectangle, label: "Make it searchable" }
  end
  Jt -. "\`loads paper\`" .-> IntakeScan.Scanner
  Vault -. "\`asks JT\`" .-> IntakeScan.Rename
  IntakeScan.Scanner -. "\`scanned pages\`" .-> IntakeScan.Ocr
  IntakeScan.Rename -. "\`names the PDF\`" .-> IntakeScan.Ocr
  IntakeScan.Ocr -. "\`[...]\`" .-> Vault
`;case`captureView`:return`---
title: "Notes & to-dos"
---
graph LR
  AppleApps@{ shape: rounded, label: "Calendar & Reminders" }
  Assistants@{ shape: rectangle, label: "AI assistant" }
  subgraph IntakeCapture["\`Notes & to-dos\`"]
    IntakeCapture.Quick@{ shape: rectangle, label: "Quick note" }
    IntakeCapture.Journal@{ shape: rectangle, label: "Journal to-dos" }
    IntakeCapture.Reminders@{ shape: rectangle, label: "Phone reminders" }
    IntakeCapture.Distill@{ shape: rectangle, label: "Chat distill" }
  end
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  Vault@{ shape: rectangle, label: "The vault" }
  AppleApps -. "\`new reminders\`" .-> IntakeCapture.Reminders
  Vault -. "\`open to-dos\`" .-> IntakeCapture.Reminders
  Assistants -. "\`runs\`" .-> IntakeCapture.Distill
  IntakeCapture.Quick -. "\`lands in the in-tray\`" .-> Vault
  IntakeCapture.Journal -. "\`swept by filing\`" .-> Vault
  IntakeCapture.Reminders -. "\`open to-dos\`" .-> AppleApps
  IntakeCapture.Reminders -. "\`lands in the in-tray\`" .-> Vault
  IntakeCapture.Distill -. "\`lands in the in-tray\`" .-> Vault
  Jt -. "\`jots things down\`" .-> IntakeCapture
`;case`secondBrain`:return'---\ntitle: "The vault"\n---\ngraph LR\n  Intake@{ shape: rectangle, label: "What comes in" }\n  Assistants@{ shape: rectangle, label: "AI assistant" }\n  Workshop@{ shape: rectangle, label: "Workshop" }\n  subgraph Vault["`The vault`"]\n    Vault.Health@{ shape: rectangle, label: "Health check" }\n    Vault.Ingest@{ shape: disk, label: "In-tray" }\n    Vault.Docs@{ shape: disk, label: "Documents" }\n    Vault.Triage@{ shape: rectangle, label: "Filing" }\n    Vault.Para@{ shape: disk, label: "Projects & Areas" }\n    Vault.Zettel@{ shape: disk, label: "Ideas" }\n    Vault.Memory@{ shape: disk, label: "Memory" }\n  end\n  FieldAgent@{ shape: rectangle, label: "Field Agent" }\n  Backups@{ shape: rectangle, label: "Backups" }\n  Intake -. "`lands in the in-tray`" .-> Vault.Ingest\n  Intake -. "`swept by filing`" .-> Vault.Triage\n  Intake -. "`searchable PDF`" .-> Vault.Docs\n  Assistants -. "`runs filing`" .-> Vault.Triage\n  Assistants -. "`remembers in`" .-> Vault.Memory\n  FieldAgent -. "`triage button: note with full text`" .-> Vault.Ingest\n  Workshop -. "`print history`" .-> Vault.Docs\n  Vault.Ingest -. "`read by`" .-> Vault.Triage\n  Vault.Triage -. "`to-dos`" .-> Vault.Para\n  Vault.Triage -. "`ideas`" .-> Vault.Zettel\n  Vault.Triage -. "`logs the run`" .-> Vault.Memory\n  Vault.Triage -. "`asks JT`" .-> Intake\n  Vault.Para -. "`open to-dos`" .-> Intake\n  Vault.Para -. "`next steps`" .-> FieldAgent\n  Vault.Health -. "`Health Report`" .-> FieldAgent\n  FieldAgent -. "`reads`" .-> Vault\n  Vault -. "`every hour`" .-> Backups\n';case`assistantsView`:return`---
title: "AI assistant"
---
graph LR
  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }
  FieldAgent@{ shape: rectangle, label: "Field Agent" }
  subgraph Assistants["\`AI assistant\`"]
    Assistants.Claude@{ shape: rectangle, label: "Claude Code" }
    Assistants.Grok@{ shape: rectangle, label: "Grok" }
    Assistants.Skills@{ shape: disk, label: "Written procedures" }
  end
  Intake@{ shape: rectangle, label: "What comes in" }
  Vault@{ shape: rectangle, label: "The vault" }
  Jt -. "\`works with\`" .-> Assistants.Claude
  FieldAgent -. "\`one turn per message\`" .-> Assistants.Claude
  FieldAgent -. "\`one turn per message\`" .-> Assistants.Grok
  Assistants.Claude -. "\`follows\`" .-> Assistants.Skills
  Assistants.Grok -. "\`follows\`" .-> Assistants.Skills
  Assistants.Claude -. "\`runs\`" .-> Intake
  Assistants.Claude -. "\`runs filing\`" .-> Vault
  Assistants.Grok -. "\`runs filing\`" .-> Vault
  Assistants -. "\`remembers in\`" .-> Vault
`;case`fieldAgentView`:return'---\ntitle: "Field Agent"\n---\ngraph LR\n  Jt@{ icon: "fa:user", shape: rounded, label: "JT" }\n  AppleApps@{ shape: rounded, label: "Calendar & Reminders" }\n  Intake@{ shape: rectangle, label: "What comes in" }\n  Vault@{ shape: rectangle, label: "The vault" }\n  subgraph FieldAgent["`Field Agent`"]\n    FieldAgent.Mission@{ shape: rectangle, label: "Mission Control" }\n    FieldAgent.App@{ shape: rectangle, label: "Chat" }\n    FieldAgent.Approval@{ shape: rectangle, label: "Allow / Deny" }\n    FieldAgent.Relay@{ shape: rectangle, label: "Home base" }\n  end\n  Assistants@{ shape: rectangle, label: "AI assistant" }\n  Jt -. "`checks`" .-> FieldAgent.Mission\n  Jt -. "`asks`" .-> FieldAgent.App\n  Jt -. "`taps`" .-> FieldAgent.Approval\n  AppleApps -. "`today’s events`" .-> FieldAgent.Mission\n  Intake -. "`needs action`" .-> FieldAgent.Mission\n  Vault -. "`[...]`" .-> FieldAgent.Mission\n  FieldAgent.Mission -. "`button taps`" .-> FieldAgent.Relay\n  FieldAgent.Relay -. "`live updates`" .-> FieldAgent.Mission\n  FieldAgent.App -. "`messages`" .-> FieldAgent.Relay\n  FieldAgent.Approval -. "`Allow or Deny`" .-> FieldAgent.Relay\n  FieldAgent.Relay -. "`asks first`" .-> FieldAgent.Approval\n  FieldAgent.Mission -. "`what needs action`" .-> Jt\n  FieldAgent.Mission -. "`triage button: note with full text`" .-> Vault\n  FieldAgent.Relay -. "`when the phone opens`" .-> Intake\n  FieldAgent.Relay -. "`reads`" .-> Vault\n  FieldAgent.Relay -. "`one turn per message`" .-> Assistants\n';case`backupsView`:return`---
title: "Backups"
---
graph LR
  Vault@{ shape: rectangle, label: "The vault" }
  subgraph Backups["\`Backups\`"]
    Backups.VaultPush@{ shape: rectangle, label: "Vault backup" }
    Backups.TimeMachine@{ shape: rectangle, label: "Time Machine" }
    Backups.TmShare@{ shape: disk, label: "Backup disk" }
    Backups.Usb@{ shape: rectangle, label: "USB drive" }
  end
  Github@{ shape: rounded, label: "GitHub" }
  Vault -. "\`every hour\`" .-> Backups.VaultPush
  Backups.TimeMachine -. "\`backs up to\`" .-> Backups.TmShare
  Backups.TimeMachine -. "\`second copy\`" .-> Backups.Usb
  Backups.VaultPush -. "\`private repo\`" .-> Github
`;case`workshopView`:return`---
title: "Workshop"
---
graph LR
  Cloudflare@{ shape: rounded, label: "Cloudflare" }
  subgraph Workshop["\`Workshop\`"]
    Workshop.Printing@{ shape: rectangle, label: "3D printing" }
    Workshop.Site@{ shape: rectangle, label: "embry.dev" }
  end
  Vault@{ shape: rectangle, label: "The vault" }
  Github@{ shape: rounded, label: "GitHub" }
  Cloudflare -. "\`serves\`" .-> Workshop.Site
  Workshop.Printing -. "\`gallery card\`" .-> Workshop.Site
  Workshop.Printing -. "\`camera stream\`" .-> Cloudflare
  Workshop.Printing -. "\`print history\`" .-> Vault
  Workshop.Site -. "\`runs on\`" .-> Github
`;case`printingView`:return`---
title: "3D printing"
---
graph LR
  subgraph WorkshopPrinting["\`3D printing\`"]
    WorkshopPrinting.Printer@{ shape: rectangle, label: "Printer" }
    WorkshopPrinting.PrintLog@{ shape: rectangle, label: "Print log" }
    WorkshopPrinting.Camera@{ shape: rectangle, label: "Camera relay" }
    WorkshopPrinting.Library@{ shape: disk, label: "Print library" }
    WorkshopPrinting.PrintWatch@{ shape: rectangle, label: "Finish watcher" }
    WorkshopPrinting.Publish@{ shape: rectangle, label: "Gallery publish" }
  end
  Vault@{ shape: rectangle, label: "The vault" }
  Cloudflare@{ shape: rounded, label: "Cloudflare" }
  WorkshopSite@{ shape: rectangle, label: "embry.dev" }
  WorkshopPrinting.Printer -. "\`start and finish\`" .-> WorkshopPrinting.PrintLog
  WorkshopPrinting.Printer -. "\`camera feed\`" .-> WorkshopPrinting.Camera
  WorkshopPrinting.Printer -. "\`finished\`" .-> WorkshopPrinting.PrintWatch
  WorkshopPrinting.PrintLog -. "\`writes history\`" .-> WorkshopPrinting.Library
  WorkshopPrinting.Camera -. "\`bed photo\`" .-> WorkshopPrinting.PrintWatch
  WorkshopPrinting.PrintWatch -. "\`drafted card\`" .-> WorkshopPrinting.Publish
  WorkshopPrinting.PrintLog -. "\`print history\`" .-> Vault
  WorkshopPrinting.Camera -. "\`camera stream\`" .-> Cloudflare
  WorkshopPrinting.Publish -. "\`gallery card\`" .-> WorkshopSite
`;case`siteView`:return`---
title: "embry.dev"
---
graph LR
  Cloudflare@{ shape: rounded, label: "Cloudflare" }
  WorkshopPrinting@{ shape: rectangle, label: "3D printing" }
  subgraph WorkshopSite["\`embry.dev\`"]
    WorkshopSite.Live@{ shape: rectangle, label: "Live camera" }
    WorkshopSite.Code@{ shape: disk, label: "Site code" }
    WorkshopSite.Deploy@{ shape: rectangle, label: "Build and publish" }
    WorkshopSite.Pages@{ shape: rectangle, label: "Public pages" }
  end
  Github@{ shape: rounded, label: "GitHub" }
  Cloudflare -. "\`serves\`" .-> WorkshopSite.Live
  WorkshopPrinting -. "\`gallery card\`" .-> WorkshopSite.Code
  WorkshopSite.Code -. "\`push\`" .-> WorkshopSite.Deploy
  WorkshopSite.Deploy -. "\`publishes\`" .-> WorkshopSite.Pages
  WorkshopSite.Live -. "\`plays on\`" .-> WorkshopSite.Pages
  WorkshopSite.Deploy -. "\`runs on\`" .-> Github
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};