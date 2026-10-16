var e=e=>{switch(e){case`index`:return`direction: down

Jt: {
  label: "JT"
  shape: c4-person
}
Assistants: {
  label: "AI assistant"
}
Workshop: {
  label: "Workshop"
}
Intake: {
  label: "What comes in"
}
Vault: {
  label: "The vault"
}
FieldAgent: {
  label: "Field Agent"
}
Backups: {
  label: "Backups"
}

Jt -> Intake: "mail, texts, paper, notes"
Intake -> Vault: "lands in the in-tray"
Assistants -> Vault: "files it, remembers it"
Assistants -> Intake: "sorts mail and texts"
Vault -> FieldAgent: "what needs doing"
FieldAgent -> Jt: "on the phone, anywhere"
FieldAgent -> Assistants: "chat, Allow / Deny"
Vault -> Backups: "every hour"
Workshop -> Vault: "print history"
`;case`intakeView`:return`direction: right

Jt: {
  label: "JT"
  shape: c4-person
}
Mailboxes: {
  label: "Mailboxes"
}
AppleApps: {
  label: "Calendar & Reminders"
}
Vault: {
  label: "The vault"
}
Assistants: {
  label: "AI assistant"
}
FieldAgent: {
  label: "Field Agent"
}
Intake: {
  label: "What comes in"

  Scan: {
    label: "Paper"
  }
  Capture: {
    label: "Notes & to-dos"
  }
  Mail: {
    label: "Email & Texts"
  }
}

Jt -> Intake.Scan: "loads paper"
Jt -> Intake.Capture: "jots things down"
Mailboxes -> Intake.Mail: "new mail"
AppleApps -> Intake.Capture: "new reminders"
Vault -> Intake.Scan: "asks JT"
Vault -> Intake.Capture: "open to-dos"
Assistants -> Intake.Mail: "runs"
Assistants -> Intake.Capture: "runs"
FieldAgent -> Intake.Mail: "when the phone opens"
Intake.Mail -> Mailboxes: "archive the noise"
Intake.Mail -> Vault: "lands in the in-tray"
Intake.Mail -> FieldAgent: "needs action"
Intake.Scan -> Vault: "[...]"
Intake.Capture -> AppleApps: "open to-dos"
Intake.Capture -> Vault: "[...]"
`;case`email`:return`direction: right

Assistants: {
  label: "AI assistant"
}
FieldAgent: {
  label: "Field Agent"
}
Mailboxes: {
  label: "Mailboxes"
}
IntakeMail: {
  label: "Email & Texts"

  Unread: {
    label: "Unread mail"
  }
  Texts: {
    label: "New texts"
  }
  MailTriage: {
    label: "Mail & text triage"
  }
  MailArchive: {
    label: "Mail archive"
    shape: stored_data
  }
}
Vault: {
  label: "The vault"
}

Mailboxes -> IntakeMail.Unread: "new mail"
Assistants -> IntakeMail.MailTriage: "runs"
FieldAgent -> IntakeMail.MailTriage: "when the phone opens"
IntakeMail.Unread -> IntakeMail.MailTriage: "new mail"
IntakeMail.Texts -> IntakeMail.MailTriage: "new texts"
IntakeMail.MailTriage -> IntakeMail.MailArchive: "kept threads"
IntakeMail.MailTriage -> Mailboxes: "archive the noise"
IntakeMail.MailTriage -> Vault: "lands in the in-tray"
IntakeMail.MailTriage -> FieldAgent: "needs action"
FieldAgent -> Mailboxes: "archive, delete"
`;case`scanner`:return`direction: right

Jt: {
  label: "JT"
  shape: c4-person
}
Vault: {
  label: "The vault"
}
IntakeScan: {
  label: "Paper"

  Scanner: {
    label: "Scanner"
  }
  Rename: {
    label: "Name and file it"
  }
  Ocr: {
    label: "Make it searchable"
  }
}

Jt -> IntakeScan.Scanner: "loads paper"
Vault -> IntakeScan.Rename: "asks JT"
IntakeScan.Scanner -> IntakeScan.Ocr: "scanned pages"
IntakeScan.Rename -> IntakeScan.Ocr: "names the PDF"
IntakeScan.Ocr -> Vault: "[...]"
`;case`captureView`:return`direction: right

AppleApps: {
  label: "Calendar & Reminders"
}
Assistants: {
  label: "AI assistant"
}
IntakeCapture: {
  label: "Notes & to-dos"

  Quick: {
    label: "Quick note"
  }
  Journal: {
    label: "Journal to-dos"
  }
  Reminders: {
    label: "Phone reminders"
  }
  Distill: {
    label: "Chat distill"
  }
}
Jt: {
  label: "JT"
  shape: c4-person
}
Vault: {
  label: "The vault"
}

AppleApps -> IntakeCapture.Reminders: "new reminders"
Vault -> IntakeCapture.Reminders: "open to-dos"
Assistants -> IntakeCapture.Distill: "runs"
IntakeCapture.Quick -> Vault: "lands in the in-tray"
IntakeCapture.Journal -> Vault: "swept by filing"
IntakeCapture.Reminders -> AppleApps: "open to-dos"
IntakeCapture.Reminders -> Vault: "lands in the in-tray"
IntakeCapture.Distill -> Vault: "lands in the in-tray"
Jt -> IntakeCapture: "jots things down"
`;case`secondBrain`:return`direction: right

Intake: {
  label: "What comes in"
}
Assistants: {
  label: "AI assistant"
}
Workshop: {
  label: "Workshop"
}
Vault: {
  label: "The vault"

  Health: {
    label: "Health check"
  }
  Ingest: {
    label: "In-tray"
    shape: stored_data
  }
  Docs: {
    label: "Documents"
    shape: stored_data
  }
  Triage: {
    label: "Filing"
  }
  Para: {
    label: "Projects & Areas"
    shape: stored_data
  }
  Zettel: {
    label: "Ideas"
    shape: stored_data
  }
  Memory: {
    label: "Memory"
    shape: stored_data
  }
}
FieldAgent: {
  label: "Field Agent"
}
Backups: {
  label: "Backups"
}

Intake -> Vault.Ingest: "lands in the in-tray"
Intake -> Vault.Triage: "swept by filing"
Intake -> Vault.Docs: "searchable PDF"
Assistants -> Vault.Triage: "runs filing"
Assistants -> Vault.Memory: "remembers in"
FieldAgent -> Vault.Ingest: "triage button: note with full text"
Workshop -> Vault.Docs: "print history"
Vault.Ingest -> Vault.Triage: "read by"
Vault.Triage -> Vault.Para: "to-dos"
Vault.Triage -> Vault.Zettel: "ideas"
Vault.Triage -> Vault.Memory: "logs the run"
Vault.Triage -> Intake: "asks JT"
Vault.Para -> Intake: "open to-dos"
Vault.Para -> FieldAgent: "next steps"
Vault.Health -> FieldAgent: "Health Report"
FieldAgent -> Vault: "reads"
Vault -> Backups: "every hour"
`;case`assistantsView`:return`direction: right

Jt: {
  label: "JT"
  shape: c4-person
}
FieldAgent: {
  label: "Field Agent"
}
Assistants: {
  label: "AI assistant"

  Claude: {
    label: "Claude Code"
  }
  Grok: {
    label: "Grok"
  }
  Skills: {
    label: "Written procedures"
    shape: stored_data
  }
}
Intake: {
  label: "What comes in"
}
Vault: {
  label: "The vault"
}

Jt -> Assistants.Claude: "works with"
FieldAgent -> Assistants.Claude: "one turn per message"
FieldAgent -> Assistants.Grok: "one turn per message"
Assistants.Claude -> Assistants.Skills: "follows"
Assistants.Grok -> Assistants.Skills: "follows"
Assistants.Claude -> Intake: "runs"
Assistants.Claude -> Vault: "runs filing"
Assistants.Grok -> Vault: "runs filing"
Assistants -> Vault: "remembers in"
`;case`fieldAgentView`:return`direction: right

Jt: {
  label: "JT"
  shape: c4-person
}
AppleApps: {
  label: "Calendar & Reminders"
}
Intake: {
  label: "What comes in"
}
Vault: {
  label: "The vault"
}
FieldAgent: {
  label: "Field Agent"

  Mission: {
    label: "Mission Control"
  }
  App: {
    label: "Chat"
  }
  Approval: {
    label: "Allow / Deny"
  }
  Relay: {
    label: "Home base"
  }
}
Assistants: {
  label: "AI assistant"
}

Jt -> FieldAgent.Mission: "checks"
Jt -> FieldAgent.App: "asks"
Jt -> FieldAgent.Approval: "taps"
AppleApps -> FieldAgent.Mission: "today’s events"
Intake -> FieldAgent.Mission: "needs action"
Vault -> FieldAgent.Mission: "[...]"
FieldAgent.Mission -> FieldAgent.Relay: "button taps"
FieldAgent.Relay -> FieldAgent.Mission: "live updates"
FieldAgent.App -> FieldAgent.Relay: "messages"
FieldAgent.Approval -> FieldAgent.Relay: "Allow or Deny"
FieldAgent.Relay -> FieldAgent.Approval: "asks first"
FieldAgent.Mission -> Jt: "what needs action"
FieldAgent.Mission -> Vault: "triage button: note with full text"
FieldAgent.Relay -> Intake: "when the phone opens"
FieldAgent.Relay -> Vault: "reads"
FieldAgent.Relay -> Assistants: "one turn per message"
`;case`backupsView`:return`direction: right

Vault: {
  label: "The vault"
}
Backups: {
  label: "Backups"

  VaultPush: {
    label: "Vault backup"
  }
  TimeMachine: {
    label: "Time Machine"
  }
  TmShare: {
    label: "Backup disk"
    shape: stored_data
  }
  Usb: {
    label: "USB drive"
  }
}
Github: {
  label: "GitHub"
}

Vault -> Backups.VaultPush: "every hour"
Backups.TimeMachine -> Backups.TmShare: "backs up to"
Backups.TimeMachine -> Backups.Usb: "second copy"
Backups.VaultPush -> Github: "private repo"
`;case`workshopView`:return`direction: right

Cloudflare: {
  label: "Cloudflare"
}
Workshop: {
  label: "Workshop"

  Printing: {
    label: "3D printing"
  }
  Site: {
    label: "embry.dev"
  }
}
Vault: {
  label: "The vault"
}
Github: {
  label: "GitHub"
}

Cloudflare -> Workshop.Site: "serves"
Workshop.Printing -> Workshop.Site: "gallery card"
Workshop.Printing -> Cloudflare: "camera stream"
Workshop.Printing -> Vault: "print history"
Workshop.Site -> Github: "runs on"
`;case`printingView`:return`direction: right

WorkshopPrinting: {
  label: "3D printing"

  Printer: {
    label: "Printer"
  }
  PrintLog: {
    label: "Print log"
  }
  Camera: {
    label: "Camera relay"
  }
  Library: {
    label: "Print library"
    shape: stored_data
  }
  PrintWatch: {
    label: "Finish watcher"
  }
  Publish: {
    label: "Gallery publish"
  }
}
Vault: {
  label: "The vault"
}
Cloudflare: {
  label: "Cloudflare"
}
WorkshopSite: {
  label: "embry.dev"
}

WorkshopPrinting.Printer -> WorkshopPrinting.PrintLog: "start and finish"
WorkshopPrinting.Printer -> WorkshopPrinting.Camera: "camera feed"
WorkshopPrinting.Printer -> WorkshopPrinting.PrintWatch: "finished"
WorkshopPrinting.PrintLog -> WorkshopPrinting.Library: "writes history"
WorkshopPrinting.Camera -> WorkshopPrinting.PrintWatch: "bed photo"
WorkshopPrinting.PrintWatch -> WorkshopPrinting.Publish: "drafted card"
WorkshopPrinting.PrintLog -> Vault: "print history"
WorkshopPrinting.Camera -> Cloudflare: "camera stream"
WorkshopPrinting.Publish -> WorkshopSite: "gallery card"
`;case`siteView`:return`direction: right

Cloudflare: {
  label: "Cloudflare"
}
WorkshopPrinting: {
  label: "3D printing"
}
WorkshopSite: {
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

Cloudflare -> WorkshopSite.Live: "serves"
WorkshopPrinting -> WorkshopSite.Code: "gallery card"
WorkshopSite.Code -> WorkshopSite.Deploy: "push"
WorkshopSite.Deploy -> WorkshopSite.Pages: "publishes"
WorkshopSite.Live -> WorkshopSite.Pages: "plays on"
WorkshopSite.Deploy -> Github: "runs on"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};