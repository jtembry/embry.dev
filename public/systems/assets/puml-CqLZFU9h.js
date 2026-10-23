var e=e=>{switch(e){case`index`:return`@startuml
title "How my own system works"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Assistants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Workshop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Intake>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FieldAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Backups>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==JT\\n\\nJots things down, loads the scanner, and taps what needs him." <<Jt>> as Jt
rectangle "==3 · AI assistant\\n<size:10>[Claude Code · Grok]</size>\\n\\nSorts what comes in, drafts replies, and builds the machinery itself. Works from written procedures, not memory." <<Assistants>> as Assistants
rectangle "==Workshop\\n<size:10>[3D printer · embry.dev]</size>\\n\\nEvery print is logged, the printer camera streams live, and finished prints post themselves to the website." <<Workshop>> as Workshop
rectangle "==1 · What comes in\\n\\nEmail, texts, paper, and quick notes. Each one lands in the in-tray without being retyped." <<Intake>> as Intake
rectangle "==2 · The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault
rectangle "==4 · Field Agent\\n<size:10>[iPhone app]</size>\\n\\nJT’s phone app: one screen with what needs him today, plus a chat with the assistant from anywhere." <<FieldAgent>> as FieldAgent
rectangle "==Backups\\n\\nNotes go to GitHub every hour. The whole Mac goes to Time Machine on the Pi, with a second disk that can leave the house." <<Backups>> as Backups

Jt .[#8D8D8D,thickness=2].> Intake : <color:#8D8D8D>mail, texts, paper, notes
Intake .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>lands in the in-tray
Assistants .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>files it, remembers it
Assistants .[#8D8D8D,thickness=2].> Intake : <color:#8D8D8D>sorts mail and texts
Vault .[#8D8D8D,thickness=2].> FieldAgent : <color:#8D8D8D>what needs doing
FieldAgent .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>on the phone, anywhere
FieldAgent .[#8D8D8D,thickness=2].> Assistants : <color:#8D8D8D>chat, Allow / Deny
Vault .[#8D8D8D,thickness=2].> Backups : <color:#8D8D8D>every hour
Workshop .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>print history
@enduml
`;case`intakeView`:return`@startuml
title "What comes in"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Mailboxes>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<AppleApps>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Assistants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FieldAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<IntakeScan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<IntakeCapture>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<IntakeMail>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==JT\\n\\nJots things down, loads the scanner, and taps what needs him." <<Jt>> as Jt
rectangle "==Mailboxes\\n<size:10>[Gmail · iCloud Mail]</size>\\n\\nTwo inboxes, read straight from the mail servers." <<Mailboxes>> as Mailboxes
rectangle "==Calendar & Reminders\\n<size:10>[Apple]</size>\\n\\nThe calendar and the to-do lists on the phone." <<AppleApps>> as AppleApps
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault
rectangle "==AI assistant\\n<size:10>[Claude Code · Grok]</size>\\n\\nSorts what comes in, drafts replies, and builds the machinery itself. Works from written procedures, not memory." <<Assistants>> as Assistants
rectangle "==Field Agent\\n<size:10>[iPhone app]</size>\\n\\nJT’s phone app: one screen with what needs him today, plus a chat with the assistant from anywhere." <<FieldAgent>> as FieldAgent
rectangle "What comes in" <<Intake>> as Intake {
  skinparam RectangleBorderColor<<Intake>> #3b82f6
  skinparam RectangleFontColor<<Intake>> #3b82f6
  skinparam RectangleBorderStyle<<Intake>> dashed

  rectangle "==Paper\\n\\nPress Scan on the scanner; the page becomes a searchable PDF and a note to file." <<IntakeScan>> as IntakeScan
  rectangle "==Notes & to-dos\\n\\nEvery way a thought gets written down: a quick note, the daily journal, a phone reminder, or a finished AI chat." <<IntakeCapture>> as IntakeCapture
  rectangle "==Email & Texts\\n\\nTwo inboxes and iMessage become one short list of what needs action." <<IntakeMail>> as IntakeMail
}

Jt .[#8D8D8D,thickness=2].> IntakeScan : <color:#8D8D8D>loads paper
Jt .[#8D8D8D,thickness=2].> IntakeCapture : <color:#8D8D8D>jots things down
Mailboxes .[#8D8D8D,thickness=2].> IntakeMail : <color:#8D8D8D>new mail
AppleApps .[#8D8D8D,thickness=2].> IntakeCapture : <color:#8D8D8D>new reminders
Vault .[#8D8D8D,thickness=2].> IntakeScan : <color:#8D8D8D>asks JT
Vault .[#8D8D8D,thickness=2].> IntakeCapture : <color:#8D8D8D>open to-dos
Assistants .[#8D8D8D,thickness=2].> IntakeMail : <color:#8D8D8D>runs
Assistants .[#8D8D8D,thickness=2].> IntakeCapture : <color:#8D8D8D>runs
FieldAgent .[#8D8D8D,thickness=2].> IntakeMail : <color:#8D8D8D>when the phone opens
IntakeMail .[#8D8D8D,thickness=2].> Mailboxes : <color:#8D8D8D>archive the noise
IntakeMail .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>lands in the in-tray
IntakeMail .[#8D8D8D,thickness=2].> FieldAgent : <color:#8D8D8D>needs action
IntakeScan .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>[...]
IntakeCapture .[#8D8D8D,thickness=2].> AppleApps : <color:#8D8D8D>open to-dos
IntakeCapture .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>[...]
@enduml
`;case`email`:return`@startuml
title "Email & Texts"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Assistants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FieldAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Mailboxes>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<IntakeMailUnread>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<IntakeMailTexts>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<IntakeMailMailTriage>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<IntakeMailMailArchive>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==AI assistant\\n<size:10>[Claude Code · Grok]</size>\\n\\nSorts what comes in, drafts replies, and builds the machinery itself. Works from written procedures, not memory." <<Assistants>> as Assistants
rectangle "==Field Agent\\n<size:10>[iPhone app]</size>\\n\\nJT’s phone app: one screen with what needs him today, plus a chat with the assistant from anywhere." <<FieldAgent>> as FieldAgent
rectangle "==Mailboxes\\n<size:10>[Gmail · iCloud Mail]</size>\\n\\nTwo inboxes, read straight from the mail servers." <<Mailboxes>> as Mailboxes
rectangle "Email & Texts" <<IntakeMail>> as IntakeMail {
  skinparam RectangleBorderColor<<IntakeMail>> #3b82f6
  skinparam RectangleFontColor<<IntakeMail>> #3b82f6
  skinparam RectangleBorderStyle<<IntakeMail>> dashed

  rectangle "==Unread mail\\n<size:10>[every 5 min · free]</size>\\n\\nPulls new mail from both inboxes." <<IntakeMailUnread>> as IntakeMailUnread
  rectangle "==New texts\\n<size:10>[every 5 min · free]</size>\\n\\nCopies new iMessages. Login codes are skipped." <<IntakeMailTexts>> as IntakeMailTexts
  rectangle "==Mail & text triage\\n<size:10>[AI · a few times a day]</size>\\n\\nArchives the noise and lists everything else under Needs action." <<IntakeMailMailTriage>> as IntakeMailMailTriage
  database "==Mail archive\\n<size:10>[Documents/mail-archive]</size>\\n\\nA raw copy of every thread JT chose to keep." <<IntakeMailMailArchive>> as IntakeMailMailArchive
}
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault

Mailboxes .[#8D8D8D,thickness=2].> IntakeMailUnread : <color:#8D8D8D>new mail
Assistants .[#8D8D8D,thickness=2].> IntakeMailMailTriage : <color:#8D8D8D>runs
FieldAgent .[#8D8D8D,thickness=2].> IntakeMailMailTriage : <color:#8D8D8D>when the phone opens
IntakeMailUnread .[#8D8D8D,thickness=2].> IntakeMailMailTriage : <color:#8D8D8D>new mail
IntakeMailTexts .[#8D8D8D,thickness=2].> IntakeMailMailTriage : <color:#8D8D8D>new texts
IntakeMailMailTriage .[#8D8D8D,thickness=2].> IntakeMailMailArchive : <color:#8D8D8D>kept threads
IntakeMailMailTriage .[#8D8D8D,thickness=2].> Mailboxes : <color:#8D8D8D>archive the noise
IntakeMailMailTriage .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>lands in the in-tray
IntakeMailMailTriage .[#8D8D8D,thickness=2].> FieldAgent : <color:#8D8D8D>needs action
FieldAgent .[#8D8D8D,thickness=2].> Mailboxes : <color:#8D8D8D>archive, delete
@enduml
`;case`scanner`:return`@startuml
title "Paper"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<IntakeScanScanner>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<IntakeScanRename>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<IntakeScanOcr>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
person "==JT\\n\\nJots things down, loads the scanner, and taps what needs him." <<Jt>> as Jt
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault
rectangle "Paper" <<IntakeScan>> as IntakeScan {
  skinparam RectangleBorderColor<<IntakeScan>> #3b82f6
  skinparam RectangleFontColor<<IntakeScan>> #3b82f6
  skinparam RectangleBorderStyle<<IntakeScan>> dashed

  rectangle "==Scanner\\n<size:10>[Brother ADS-1350W]</size>\\n\\nFeeds paper. Its Scan button sends the pages straight to the Mac." <<IntakeScanScanner>> as IntakeScanScanner
  rectangle "==Name and file it\\n<size:10>[one dialog, during filing]</size>\\n\\nProposes a real file name and a folder from what the page says. Ignore it to keep the old name." <<IntakeScanRename>> as IntakeScanRename
  rectangle "==Make it searchable\\n<size:10>[Mac · every minute · free]</size>\\n\\nReads the text of each new scan and parks the PDF in an ingest folder with a note." <<IntakeScanOcr>> as IntakeScanOcr
}

Jt .[#8D8D8D,thickness=2].> IntakeScanScanner : <color:#8D8D8D>loads paper
Vault .[#8D8D8D,thickness=2].> IntakeScanRename : <color:#8D8D8D>asks JT
IntakeScanScanner .[#8D8D8D,thickness=2].> IntakeScanOcr : <color:#8D8D8D>scanned pages
IntakeScanRename .[#8D8D8D,thickness=2].> IntakeScanOcr : <color:#8D8D8D>names the PDF
IntakeScanOcr .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>[...]
@enduml
`;case`captureView`:return`@startuml
title "Notes & to-dos"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<AppleApps>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Assistants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<IntakeCaptureQuick>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<IntakeCaptureJournal>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<IntakeCaptureReminders>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<IntakeCaptureDistill>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "==Calendar & Reminders\\n<size:10>[Apple]</size>\\n\\nThe calendar and the to-do lists on the phone." <<AppleApps>> as AppleApps
rectangle "==AI assistant\\n<size:10>[Claude Code · Grok]</size>\\n\\nSorts what comes in, drafts replies, and builds the machinery itself. Works from written procedures, not memory." <<Assistants>> as Assistants
rectangle "Notes & to-dos" <<IntakeCapture>> as IntakeCapture {
  skinparam RectangleBorderColor<<IntakeCapture>> #3b82f6
  skinparam RectangleFontColor<<IntakeCapture>> #3b82f6
  skinparam RectangleBorderStyle<<IntakeCapture>> dashed

  rectangle "==Quick note\\n<size:10>[one button in Obsidian]</size>\\n\\nType a thought, press save, it is in the in-tray." <<IntakeCaptureQuick>> as IntakeCaptureQuick
  rectangle "==Journal to-dos\\n<size:10>[daily note]</size>\\n\\nTo-dos jotted in the day’s journal get swept to the right project." <<IntakeCaptureJournal>> as IntakeCaptureJournal
  rectangle "==Phone reminders\\n<size:10>[two-way sync]</size>\\n\\nOpen to-dos show up as phone reminders; new reminders come back into the vault." <<IntakeCaptureReminders>> as IntakeCaptureReminders
  rectangle "==Chat distill\\n<size:10>[AI skill]</size>\\n\\nBoils a finished AI chat down to a few lasting notes, then the chat can go." <<IntakeCaptureDistill>> as IntakeCaptureDistill
}
person "==JT\\n\\nJots things down, loads the scanner, and taps what needs him." <<Jt>> as Jt
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault

AppleApps .[#8D8D8D,thickness=2].> IntakeCaptureReminders : <color:#8D8D8D>new reminders
Vault .[#8D8D8D,thickness=2].> IntakeCaptureReminders : <color:#8D8D8D>open to-dos
Assistants .[#8D8D8D,thickness=2].> IntakeCaptureDistill : <color:#8D8D8D>runs
IntakeCaptureQuick .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>lands in the in-tray
IntakeCaptureJournal .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>swept by filing
IntakeCaptureReminders .[#8D8D8D,thickness=2].> AppleApps : <color:#8D8D8D>open to-dos
IntakeCaptureReminders .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>lands in the in-tray
IntakeCaptureDistill .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>lands in the in-tray
Jt .[#8D8D8D,thickness=2].> IntakeCapture : <color:#8D8D8D>jots things down
@enduml
`;case`secondBrain`:return`@startuml
title "The vault"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Intake>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Assistants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Workshop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<VaultHealth>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<VaultIngest>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam database<<VaultDocs>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Backups>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<VaultTriage>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<VaultPara>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam database<<VaultZettel>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam database<<VaultMemory>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
rectangle "==What comes in\\n\\nEmail, texts, paper, and quick notes. Each one lands in the in-tray without being retyped." <<Intake>> as Intake
rectangle "==AI assistant\\n<size:10>[Claude Code · Grok]</size>\\n\\nSorts what comes in, drafts replies, and builds the machinery itself. Works from written procedures, not memory." <<Assistants>> as Assistants
rectangle "==Workshop\\n<size:10>[3D printer · embry.dev]</size>\\n\\nEvery print is logged, the printer camera streams live, and finished prints post themselves to the website." <<Workshop>> as Workshop
rectangle "The vault" <<Vault>> as Vault {
  skinparam RectangleBorderColor<<Vault>> #3b82f6
  skinparam RectangleFontColor<<Vault>> #3b82f6
  skinparam RectangleBorderStyle<<Vault>> dashed

  rectangle "==Health check\\n<size:10>[daily · free]</size>\\n\\nLooks for broken links, stale projects, and quiet machines; writes the Health Report." <<VaultHealth>> as VaultHealth
  database "==In-tray\\n\\nEvery capture lands here first." <<VaultIngest>> as VaultIngest
  database "==Documents\\n<size:10>[Mac · hourly · free]</size>\\n\\nThe text of every document, so one search finds it, with links that open the original." <<VaultDocs>> as VaultDocs
  rectangle "==Filing\\n<size:10>[AI skill]</size>\\n\\nReads the in-tray and files each item where it belongs." <<VaultTriage>> as VaultTriage
  database "==Projects & Areas\\n\\nThings with a finish line, and ongoing duties." <<VaultPara>> as VaultPara
  database "==Ideas\\n\\nIdeas worth keeping, one per note, linked together." <<VaultZettel>> as VaultZettel
  database "==Memory\\n\\nWhat the assistant needs to remember between sessions." <<VaultMemory>> as VaultMemory
}
rectangle "==Field Agent\\n<size:10>[iPhone app]</size>\\n\\nJT’s phone app: one screen with what needs him today, plus a chat with the assistant from anywhere." <<FieldAgent>> as FieldAgent
rectangle "==Backups\\n\\nNotes go to GitHub every hour. The whole Mac goes to Time Machine on the Pi, with a second disk that can leave the house." <<Backups>> as Backups

Intake .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>lands in the in-tray
Intake .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>swept by filing
Intake .[#8D8D8D,thickness=2].> VaultDocs : <color:#8D8D8D>searchable PDF
Assistants .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>runs filing
Assistants .[#8D8D8D,thickness=2].> VaultMemory : <color:#8D8D8D>remembers in
FieldAgent .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>triage button: note with full text
Workshop .[#8D8D8D,thickness=2].> VaultDocs : <color:#8D8D8D>print history
VaultIngest .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>read by
VaultTriage .[#8D8D8D,thickness=2].> VaultPara : <color:#8D8D8D>to-dos
VaultTriage .[#8D8D8D,thickness=2].> VaultZettel : <color:#8D8D8D>ideas
VaultTriage .[#8D8D8D,thickness=2].> VaultMemory : <color:#8D8D8D>logs the run
VaultTriage .[#8D8D8D,thickness=2].> Intake : <color:#8D8D8D>asks JT
VaultPara .[#8D8D8D,thickness=2].> Intake : <color:#8D8D8D>open to-dos
VaultPara .[#8D8D8D,thickness=2].> FieldAgent : <color:#8D8D8D>next steps
VaultHealth .[#8D8D8D,thickness=2].> FieldAgent : <color:#8D8D8D>Health Report
FieldAgent .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>reads
Vault .[#8D8D8D,thickness=2].> Backups : <color:#8D8D8D>every hour
@enduml
`;case`assistantsView`:return`@startuml
title "AI assistant"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<FieldAgent>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<AssistantsClaude>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<AssistantsGrok>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Intake>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<AssistantsSkills>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==JT\\n\\nJots things down, loads the scanner, and taps what needs him." <<Jt>> as Jt
rectangle "==Field Agent\\n<size:10>[iPhone app]</size>\\n\\nJT’s phone app: one screen with what needs him today, plus a chat with the assistant from anywhere." <<FieldAgent>> as FieldAgent
rectangle "AI assistant" <<Assistants>> as Assistants {
  skinparam RectangleBorderColor<<Assistants>> #3b82f6
  skinparam RectangleFontColor<<Assistants>> #3b82f6
  skinparam RectangleBorderStyle<<Assistants>> dashed

  rectangle "==Claude Code\\n<size:10>[terminal inside Obsidian]</size>\\n\\nMain assistant. Builds and fixes the machinery, runs the skills." <<AssistantsClaude>> as AssistantsClaude
  rectangle "==Grok\\n<size:10>[terminal inside Obsidian]</size>\\n\\nSecond assistant. Same vault, same skills, same rules." <<AssistantsGrok>> as AssistantsGrok
  database "==Written procedures\\n<size:10>[System/Skills]</size>\\n\\nStep-by-step instructions both assistants follow: file notes, distill a chat, lint the vault, plain style." <<AssistantsSkills>> as AssistantsSkills
}
rectangle "==What comes in\\n\\nEmail, texts, paper, and quick notes. Each one lands in the in-tray without being retyped." <<Intake>> as Intake
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault

Jt .[#8D8D8D,thickness=2].> AssistantsClaude : <color:#8D8D8D>works with
FieldAgent .[#8D8D8D,thickness=2].> AssistantsClaude : <color:#8D8D8D>one turn per message
FieldAgent .[#8D8D8D,thickness=2].> AssistantsGrok : <color:#8D8D8D>one turn per message
AssistantsClaude .[#8D8D8D,thickness=2].> AssistantsSkills : <color:#8D8D8D>follows
AssistantsGrok .[#8D8D8D,thickness=2].> AssistantsSkills : <color:#8D8D8D>follows
AssistantsClaude .[#8D8D8D,thickness=2].> Intake : <color:#8D8D8D>runs
AssistantsClaude .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>runs filing
AssistantsGrok .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>runs filing
Assistants .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>remembers in
@enduml
`;case`fieldAgentView`:return`@startuml
title "Field Agent"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<AppleApps>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Intake>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<FieldAgentMission>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldAgentApp>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldAgentApproval>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldAgentRelay>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Assistants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==JT\\n\\nJots things down, loads the scanner, and taps what needs him." <<Jt>> as Jt
rectangle "==Calendar & Reminders\\n<size:10>[Apple]</size>\\n\\nThe calendar and the to-do lists on the phone." <<AppleApps>> as AppleApps
rectangle "==What comes in\\n\\nEmail, texts, paper, and quick notes. Each one lands in the in-tray without being retyped." <<Intake>> as Intake
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault
rectangle "Field Agent" <<FieldAgent>> as FieldAgent {
  skinparam RectangleBorderColor<<FieldAgent>> #3b82f6
  skinparam RectangleFontColor<<FieldAgent>> #3b82f6
  skinparam RectangleBorderStyle<<FieldAgent>> dashed

  rectangle "==Mission Control\\n<size:10>[the front screen]</size>\\n\\nToday’s calendar, mail and texts that need action, and the next step for each project. Tap a row to act on it." <<FieldAgentMission>> as FieldAgentMission
  rectangle "==Chat\\n<size:10>[Claude or Grok]</size>\\n\\nAsk the assistant anything; the reply fills in as it is written." <<FieldAgentApp>> as FieldAgentApp
  rectangle "==Allow / Deny\\n\\nBefore the assistant edits a file or runs a command, the phone buzzes and asks." <<FieldAgentApproval>> as FieldAgentApproval
  rectangle "==Home base\\n<size:10>[small service on the Mac]</size>\\n\\nPasses each phone message to the assistant, streams the answer back, and keeps Mission Control live. Phone and Mac talk over a private network." <<FieldAgentRelay>> as FieldAgentRelay
}
rectangle "==AI assistant\\n<size:10>[Claude Code · Grok]</size>\\n\\nSorts what comes in, drafts replies, and builds the machinery itself. Works from written procedures, not memory." <<Assistants>> as Assistants

Jt .[#8D8D8D,thickness=2].> FieldAgentMission : <color:#8D8D8D>checks
Jt .[#8D8D8D,thickness=2].> FieldAgentApp : <color:#8D8D8D>asks
Jt .[#8D8D8D,thickness=2].> FieldAgentApproval : <color:#8D8D8D>taps
AppleApps .[#8D8D8D,thickness=2].> FieldAgentMission : <color:#8D8D8D>today’s events
Intake .[#8D8D8D,thickness=2].> FieldAgentMission : <color:#8D8D8D>needs action
Vault .[#8D8D8D,thickness=2].> FieldAgentMission : <color:#8D8D8D>[...]
FieldAgentMission .[#8D8D8D,thickness=2].> FieldAgentRelay : <color:#8D8D8D>button taps
FieldAgentRelay .[#8D8D8D,thickness=2].> FieldAgentMission : <color:#8D8D8D>live updates
FieldAgentApp .[#8D8D8D,thickness=2].> FieldAgentRelay : <color:#8D8D8D>messages
FieldAgentApproval .[#8D8D8D,thickness=2].> FieldAgentRelay : <color:#8D8D8D>Allow or Deny
FieldAgentRelay .[#8D8D8D,thickness=2].> FieldAgentApproval : <color:#8D8D8D>asks first
FieldAgentMission .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>what needs action
FieldAgentMission .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>triage button: note with full text
FieldAgentRelay .[#8D8D8D,thickness=2].> Intake : <color:#8D8D8D>when the phone opens
FieldAgentRelay .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>reads
FieldAgentRelay .[#8D8D8D,thickness=2].> Assistants : <color:#8D8D8D>one turn per message
@enduml
`;case`backupsView`:return`@startuml
title "Backups"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BackupsVaultPush>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BackupsTimeMachine>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Github>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<BackupsTmShare>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<BackupsUsb>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault
rectangle "Backups" <<Backups>> as Backups {
  skinparam RectangleBorderColor<<Backups>> #3b82f6
  skinparam RectangleFontColor<<Backups>> #3b82f6
  skinparam RectangleBorderStyle<<Backups>> dashed

  rectangle "==Vault backup\\n<size:10>[hourly · free]</size>\\n\\nCommits the whole vault, plus a snapshot of the Mac’s setup, to a private GitHub repo." <<BackupsVaultPush>> as BackupsVaultPush
  rectangle "==Time Machine\\n<size:10>[macOS]</size>\\n\\nFull Mac backup, history included." <<BackupsTimeMachine>> as BackupsTimeMachine
  database "==Backup disk\\n<size:10>[brainpi · 4 TB]</size>\\n\\nWhere the Mac backs itself up, encrypted. Mirrored to a second disk every night." <<BackupsTmShare>> as BackupsTmShare
  rectangle "==USB drive\\n\\nA second copy that can leave the house." <<BackupsUsb>> as BackupsUsb
}
rectangle "==GitHub\\n\\nHolds the private vault backup and the website code; builds and hosts embry.dev." <<Github>> as Github

Vault .[#8D8D8D,thickness=2].> BackupsVaultPush : <color:#8D8D8D>every hour
BackupsTimeMachine .[#8D8D8D,thickness=2].> BackupsTmShare : <color:#8D8D8D>backs up to
BackupsTimeMachine .[#8D8D8D,thickness=2].> BackupsUsb : <color:#8D8D8D>second copy
BackupsVaultPush .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>private repo
@enduml
`;case`workshopView`:return`@startuml
title "Workshop"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Cloudflare>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<WorkshopPrinting>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WorkshopSite>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Github>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==Cloudflare\\n\\nCarries the printer camera from home to the public site without opening the home network." <<Cloudflare>> as Cloudflare
rectangle "Workshop" <<Workshop>> as Workshop {
  skinparam RectangleBorderColor<<Workshop>> #3b82f6
  skinparam RectangleFontColor<<Workshop>> #3b82f6
  skinparam RectangleBorderStyle<<Workshop>> dashed

  rectangle "==3D printing\\n<size:10>[Bambu Lab P2S]</size>\\n\\nLogs every print and drafts a gallery card when one finishes." <<WorkshopPrinting>> as WorkshopPrinting
  rectangle "==embry.dev\\n<size:10>[Astro site on GitHub Pages]</size>\\n\\nPublic site: the studio, the live printer camera, and the print gallery." <<WorkshopSite>> as WorkshopSite
}
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault
rectangle "==GitHub\\n\\nHolds the private vault backup and the website code; builds and hosts embry.dev." <<Github>> as Github

Cloudflare .[#8D8D8D,thickness=2].> WorkshopSite : <color:#8D8D8D>serves
WorkshopPrinting .[#8D8D8D,thickness=2].> WorkshopSite : <color:#8D8D8D>gallery card
WorkshopPrinting .[#8D8D8D,thickness=2].> Cloudflare : <color:#8D8D8D>camera stream
WorkshopPrinting .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>print history
WorkshopSite .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>runs on
@enduml
`;case`printingView`:return`@startuml
title "3D printing"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<WorkshopPrintingPrinter>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<WorkshopPrintingPrintLog>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WorkshopPrintingCamera>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<WorkshopPrintingLibrary>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WorkshopPrintingPrintWatch>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Cloudflare>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<WorkshopPrintingPublish>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WorkshopSite>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "3D printing" <<WorkshopPrinting>> as WorkshopPrinting {
  skinparam RectangleBorderColor<<WorkshopPrinting>> #3b82f6
  skinparam RectangleFontColor<<WorkshopPrinting>> #3b82f6
  skinparam RectangleBorderStyle<<WorkshopPrinting>> dashed

  rectangle "==Printer\\n<size:10>[Bambu Lab P2S]</size>\\n\\nReports its status and camera over the home network." <<WorkshopPrintingPrinter>> as WorkshopPrintingPrinter
  rectangle "==Print log\\n<size:10>[Mac · every minute · free]</size>\\n\\nNotes each start and finish in the model’s folder and sends a notification." <<WorkshopPrintingPrintLog>> as WorkshopPrintingPrintLog
  rectangle "==Camera relay\\n<size:10>[brainpi]</size>\\n\\nTakes the printer camera and serves it as a video stream." <<WorkshopPrintingCamera>> as WorkshopPrintingCamera
  database "==Print library\\n<size:10>[Documents/3d_printing]</size>\\n\\nOne folder per model: files, notes, photos, and its print history." <<WorkshopPrintingLibrary>> as WorkshopPrintingLibrary
  rectangle "==Finish watcher\\n<size:10>[brainpi]</size>\\n\\nWhen a print finishes, grabs a bed photo and drafts a gallery card." <<WorkshopPrintingPrintWatch>> as WorkshopPrintingPrintWatch
  rectangle "==Gallery publish\\n<size:10>[Mac · after each finish]</size>\\n\\nFills in the drafted card and pushes it to the website." <<WorkshopPrintingPublish>> as WorkshopPrintingPublish
}
rectangle "==The vault\\n<size:10>[Obsidian · plain text files]</size>\\n\\nOne place for everything: notes, projects, documents, and what the assistant remembers." <<Vault>> as Vault
rectangle "==Cloudflare\\n\\nCarries the printer camera from home to the public site without opening the home network." <<Cloudflare>> as Cloudflare
rectangle "==embry.dev\\n<size:10>[Astro site on GitHub Pages]</size>\\n\\nPublic site: the studio, the live printer camera, and the print gallery." <<WorkshopSite>> as WorkshopSite

WorkshopPrintingPrinter .[#8D8D8D,thickness=2].> WorkshopPrintingPrintLog : <color:#8D8D8D>start and finish
WorkshopPrintingPrinter .[#8D8D8D,thickness=2].> WorkshopPrintingCamera : <color:#8D8D8D>camera feed
WorkshopPrintingPrinter .[#8D8D8D,thickness=2].> WorkshopPrintingPrintWatch : <color:#8D8D8D>finished
WorkshopPrintingPrintLog .[#8D8D8D,thickness=2].> WorkshopPrintingLibrary : <color:#8D8D8D>writes history
WorkshopPrintingCamera .[#8D8D8D,thickness=2].> WorkshopPrintingPrintWatch : <color:#8D8D8D>bed photo
WorkshopPrintingPrintWatch .[#8D8D8D,thickness=2].> WorkshopPrintingPublish : <color:#8D8D8D>drafted card
WorkshopPrintingPrintLog .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>print history
WorkshopPrintingCamera .[#8D8D8D,thickness=2].> Cloudflare : <color:#8D8D8D>camera stream
WorkshopPrintingPublish .[#8D8D8D,thickness=2].> WorkshopSite : <color:#8D8D8D>gallery card
@enduml
`;case`siteView`:return`@startuml
title "embry.dev"
left to right direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Cloudflare>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<WorkshopPrinting>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<WorkshopSiteLive>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<WorkshopSiteCode>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<WorkshopSiteDeploy>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<WorkshopSitePages>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Github>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==Cloudflare\\n\\nCarries the printer camera from home to the public site without opening the home network." <<Cloudflare>> as Cloudflare
rectangle "==3D printing\\n<size:10>[Bambu Lab P2S]</size>\\n\\nLogs every print and drafts a gallery card when one finishes." <<WorkshopPrinting>> as WorkshopPrinting
rectangle "embry.dev" <<WorkshopSite>> as WorkshopSite {
  skinparam RectangleBorderColor<<WorkshopSite>> #3b82f6
  skinparam RectangleFontColor<<WorkshopSite>> #3b82f6
  skinparam RectangleBorderStyle<<WorkshopSite>> dashed

  rectangle "==Live camera\\n<size:10>[live.embry.dev · through Cloudflare]</size>\\n\\nThe video the /printing page plays." <<WorkshopSiteLive>> as WorkshopSiteLive
  database "==Site code\\n<size:10>[one folder of files]</size>\\n\\nPages and the print gallery." <<WorkshopSiteCode>> as WorkshopSiteCode
  rectangle "==Build and publish\\n<size:10>[GitHub Actions]</size>\\n\\nEvery push rebuilds the site and puts it live within minutes." <<WorkshopSiteDeploy>> as WorkshopSiteDeploy
  rectangle "==Public pages\\n<size:10>[embry.dev]</size>\\n\\nThe studio, and /printing with the live camera and gallery." <<WorkshopSitePages>> as WorkshopSitePages
}
rectangle "==GitHub\\n\\nHolds the private vault backup and the website code; builds and hosts embry.dev." <<Github>> as Github

Cloudflare .[#8D8D8D,thickness=2].> WorkshopSiteLive : <color:#8D8D8D>serves
WorkshopPrinting .[#8D8D8D,thickness=2].> WorkshopSiteCode : <color:#8D8D8D>gallery card
WorkshopSiteCode .[#8D8D8D,thickness=2].> WorkshopSiteDeploy : <color:#8D8D8D>push
WorkshopSiteDeploy .[#8D8D8D,thickness=2].> WorkshopSitePages : <color:#8D8D8D>publishes
WorkshopSiteLive .[#8D8D8D,thickness=2].> WorkshopSitePages : <color:#8D8D8D>plays on
WorkshopSiteDeploy .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>runs on
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};