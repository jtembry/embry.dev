var e=e=>{switch(e){case`index`:return`@startuml
title "How everything connects"
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

skinparam rectangle<<Iphone>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Backups>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<IcloudMail>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
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
skinparam rectangle<<Mail>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Assistants>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Gmail>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Vault>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Capture>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Docs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Pi>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Printing>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Cloudflare>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Site>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Github>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
rectangle "==iPhone\\n\\nObsidian, Reminders, the Field Agent app." <<Iphone>> as Iphone
rectangle "==Backups\\n<size:10>[GitHub · Time Machine]</size>\\n\\nHourly copy of the vault and machine setup to GitHub; Time Machine for everything else." <<Backups>> as Backups
rectangle "==iCloud Mail\\n\\nSecond mailbox." <<IcloudMail>> as IcloudMail
person "==JT\\n\\nCaptures things, makes the calls, presses the buttons." <<Jt>> as Jt
rectangle "==Field Agent\\n<size:10>[iPhone app · Swift · Node]</size>\\n\\nA custom iPhone app for talking to Claude and Grok on the Mac from anywhere." <<FieldAgent>> as FieldAgent
rectangle "==Email & Texts\\n\\nTurns two inboxes and iMessage into one short list of what needs action." <<Mail>> as Mail
rectangle "==AI assistants\\n<size:10>[Claude Code · Grok]</size>\\n\\nTwo assistants share one vault, one set of skills, and one memory." <<Assistants>> as Assistants
rectangle "==Gmail\\n\\nMain mailbox." <<Gmail>> as Gmail
rectangle "==Second Brain\\n<size:10>[Obsidian vault]</size>\\n\\nWhere everything ends up: notes, projects, ideas, and the dashboard." <<Vault>> as Vault
rectangle "==Capture\\n\\nEvery way a thought gets into the in-tray." <<Capture>> as Capture
rectangle "==Scanner\\n\\nPaper in the scanner becomes a searchable PDF and a note to file." <<Scan>> as Scan
rectangle "==Find Anything\\n<size:10>[Mac · hourly · free]</size>\\n\\nCopies the text of every document in Documents into the vault so one search finds it." <<Docs>> as Docs
rectangle "==brainpi\\n<size:10>[Raspberry Pi]</size>\\n\\nSmall always-on box: runs the scanner, holds Time Machine, streams the printer camera." <<Pi>> as Pi
rectangle "==3D printing\\n<size:10>[Bambu Lab P2S]</size>\\n\\nLogs every print, streams the camera, and posts finished prints to the site." <<Printing>> as Printing
rectangle "==Cloudflare\\n\\nCarries the printer camera from home to the public site without opening the home network." <<Cloudflare>> as Cloudflare
rectangle "==embry.dev\\n<size:10>[Astro site on GitHub Pages]</size>\\n\\nPublic site: the studio, the live printer camera, and the print gallery." <<Site>> as Site
rectangle "==GitHub\\n\\nHolds the vault backup and the website code; builds and hosts embry.dev." <<Github>> as Github

Iphone .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>in his pocket
Jt .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>checks
Jt .[#8D8D8D,thickness=2].> Capture : <color:#8D8D8D>jots things down
Vault .[#8D8D8D,thickness=2].> Capture : <color:#8D8D8D>open to-dos
Capture .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>[...]
Jt .[#8D8D8D,thickness=2].> Assistants : <color:#8D8D8D>asks
Assistants .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>[...]
Assistants .[#8D8D8D,thickness=2].> Capture : <color:#8D8D8D>runs
Jt .[#8D8D8D,thickness=2].> FieldAgent : <color:#8D8D8D>taps
Iphone .[#8D8D8D,thickness=2].> FieldAgent : <color:#8D8D8D>runs
FieldAgent .[#8D8D8D,thickness=2].> Assistants : <color:#8D8D8D>one turn per message
Jt .[#8D8D8D,thickness=2].> Mail : <color:#8D8D8D>presses buttons
Mail .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>what needs action
Mail .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>triage button: note with full text
Jt .[#8D8D8D,thickness=2].> Scan : <color:#8D8D8D>loads paper
Vault .[#8D8D8D,thickness=2].> Scan : <color:#8D8D8D>asks JT
Scan .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>one note per scan
Scan .[#8D8D8D,thickness=2].> Docs : <color:#8D8D8D>indexed
Docs .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>full text
Scan .[#8D8D8D,thickness=2].> Pi : <color:#8D8D8D>[...]
Pi .[#8D8D8D,thickness=2].> Scan : <color:#8D8D8D>saves pages
Pi .[#8D8D8D,thickness=2].> Printing : <color:#8D8D8D>drafted card
Printing .[#8D8D8D,thickness=2].> Pi : <color:#8D8D8D>[...]
Printing .[#8D8D8D,thickness=2].> Site : <color:#8D8D8D>gallery card
Backups .[#8D8D8D,thickness=2].> Vault : <color:#8D8D8D>writes setup into
Backups .[#8D8D8D,thickness=2].> Pi : <color:#8D8D8D>backs up to
Capture .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>via the vault copy
Site .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>runs on
Backups .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>private repo
Pi .[#8D8D8D,thickness=2].> Cloudflare : <color:#8D8D8D>camera stream
Cloudflare .[#8D8D8D,thickness=2].> Site : <color:#8D8D8D>serves
Mail .[#8D8D8D,thickness=2].> Gmail : <color:#8D8D8D>archive, delete
Gmail .[#8D8D8D,thickness=2].> Mail : <color:#8D8D8D>new mail
IcloudMail .[#8D8D8D,thickness=2].> Mail : <color:#8D8D8D>new mail
@enduml
`;case`secondBrain`:return`@startuml
title "Second Brain"
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

skinparam rectangle<<Schedulers>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Mail>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Backups>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
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
skinparam rectangle<<Scan>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Capture>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Docs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<VaultIngest>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam database<<VaultPdfText>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
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
skinparam rectangle<<VaultHome>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "==Schedulers\\n<size:10>[Obsidian plugin · launchd]</size>\\n\\nTimers that refresh everything so nobody has to press refresh." <<Schedulers>> as Schedulers
rectangle "==Email & Texts\\n\\nTurns two inboxes and iMessage into one short list of what needs action." <<Mail>> as Mail
rectangle "==Backups\\n<size:10>[GitHub · Time Machine]</size>\\n\\nHourly copy of the vault and machine setup to GitHub; Time Machine for everything else." <<Backups>> as Backups
person "==JT\\n\\nCaptures things, makes the calls, presses the buttons." <<Jt>> as Jt
rectangle "==AI assistants\\n<size:10>[Claude Code · Grok]</size>\\n\\nTwo assistants share one vault, one set of skills, and one memory." <<Assistants>> as Assistants
rectangle "==Scanner\\n\\nPaper in the scanner becomes a searchable PDF and a note to file." <<Scan>> as Scan
rectangle "==Capture\\n\\nEvery way a thought gets into the in-tray." <<Capture>> as Capture
rectangle "==Find Anything\\n<size:10>[Mac · hourly · free]</size>\\n\\nCopies the text of every document in Documents into the vault so one search finds it." <<Docs>> as Docs
rectangle "Second Brain" <<Vault>> as Vault {
  skinparam RectangleBorderColor<<Vault>> #3b82f6
  skinparam RectangleFontColor<<Vault>> #3b82f6
  skinparam RectangleBorderStyle<<Vault>> dashed

  database "==0 Ingest\\n\\nThe in-tray. Every capture lands here first." <<VaultIngest>> as VaultIngest
  database "==Document text\\n<size:10>[3 Resources/PDF Text]</size>\\n\\nSearchable text of every document, with links that open the original." <<VaultPdfText>> as VaultPdfText
  rectangle "==Vault triage\\n<size:10>[Claude or Grok skill]</size>\\n\\nReads the in-tray and files each item where it belongs." <<VaultTriage>> as VaultTriage
  database "==Projects & Areas\\n\\nLife admin: things with a finish line and ongoing duties." <<VaultPara>> as VaultPara
  database "==Concepts & Quotes\\n\\nIdeas worth keeping, one per note, linked together." <<VaultZettel>> as VaultZettel
  database "==System memory\\n\\nWhat the assistants need to remember between sessions." <<VaultMemory>> as VaultMemory
  rectangle "==Home dashboard\\n\\nThe front door. Shows today, mail, texts, and what each project needs next." <<VaultHome>> as VaultHome
}

Jt .[#8D8D8D,thickness=2].> VaultHome : <color:#8D8D8D>checks
Capture .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>[...]
Capture .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>swept by
Assistants .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>runs
Assistants .[#8D8D8D,thickness=2].> VaultMemory : <color:#8D8D8D>remembers in
Schedulers .[#8D8D8D,thickness=2].> VaultHome : <color:#8D8D8D>[...]
Mail .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>triage button: note with full text
Scan .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>one note per scan
Docs .[#8D8D8D,thickness=2].> VaultPdfText : <color:#8D8D8D>full text
Backups .[#8D8D8D,thickness=2].> VaultMemory : <color:#8D8D8D>writes setup into
VaultPara .[#8D8D8D,thickness=2].> VaultHome : <color:#8D8D8D>next actions
VaultIngest .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>read by
VaultTriage .[#8D8D8D,thickness=2].> VaultPara : <color:#8D8D8D>files to-dos
VaultTriage .[#8D8D8D,thickness=2].> VaultZettel : <color:#8D8D8D>files ideas
VaultTriage .[#8D8D8D,thickness=2].> VaultMemory : <color:#8D8D8D>logs the run
VaultTriage .[#8D8D8D,thickness=2].> Scan : <color:#8D8D8D>asks JT
VaultPara .[#8D8D8D,thickness=2].> Capture : <color:#8D8D8D>open to-dos
Mail .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>what needs action
Jt .[#8D8D8D,thickness=2].> Capture : <color:#8D8D8D>jots things down
Jt .[#8D8D8D,thickness=2].> Assistants : <color:#8D8D8D>asks
Jt .[#8D8D8D,thickness=2].> Mail : <color:#8D8D8D>presses buttons
Jt .[#8D8D8D,thickness=2].> Scan : <color:#8D8D8D>loads paper
Assistants .[#8D8D8D,thickness=2].> Capture : <color:#8D8D8D>runs
Schedulers .[#8D8D8D,thickness=2].> Mail : <color:#8D8D8D>[...]
Schedulers .[#8D8D8D,thickness=2].> Scan : <color:#8D8D8D>every minute
Scan .[#8D8D8D,thickness=2].> Docs : <color:#8D8D8D>indexed
Schedulers .[#8D8D8D,thickness=2].> Docs : <color:#8D8D8D>hourly
Schedulers .[#8D8D8D,thickness=2].> Backups : <color:#8D8D8D>hourly
@enduml
`;case`captureView`:return`@startuml
title "Capture"
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

skinparam rectangle<<AssistantsClaude>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<CaptureReminders>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<CaptureCloudCapture>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<CaptureDistill>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<CaptureQuick>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<CaptureJournal>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<AppleApps>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Github>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Iphone>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam database<<VaultIngest>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
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
rectangle "AI assistants" <<Assistants>> as Assistants {
  skinparam RectangleBorderColor<<Assistants>> #3b82f6
  skinparam RectangleFontColor<<Assistants>> #3b82f6
  skinparam RectangleBorderStyle<<Assistants>> dashed

  rectangle "==Claude Code\\n<size:10>[terminal tabs inside Obsidian]</size>\\n\\nMain assistant. Builds and fixes the machinery, runs the skills." <<AssistantsClaude>> as AssistantsClaude
}
rectangle "Capture" <<Capture>> as Capture {
  skinparam RectangleBorderColor<<Capture>> #3b82f6
  skinparam RectangleFontColor<<Capture>> #3b82f6
  skinparam RectangleBorderStyle<<Capture>> dashed

  rectangle "==Reminders sync\\n<size:10>[Remindian · two-way]</size>\\n\\nOpen to-dos show up as phone reminders; new reminders come back into the vault." <<CaptureReminders>> as CaptureReminders
  rectangle "==Phone capture\\n<size:10>[Claude on the phone · GitHub copy]</size>\\n\\nAway from the Mac, Claude can add new notes to the in-tray only." <<CaptureCloudCapture>> as CaptureCloudCapture
  rectangle "==Chat distill\\n<size:10>[session-distill skill]</size>\\n\\nBoils a finished AI chat down to a few lasting notes, then the chat can go." <<CaptureDistill>> as CaptureDistill
  rectangle "==Quick capture\\n<size:10>[Obsidian ribbon button]</size>\\n\\nType a thought, press save, it becomes a note in the in-tray." <<CaptureQuick>> as CaptureQuick
  rectangle "==Journal to-dos\\n<size:10>[daily note]</size>\\n\\nTo-dos jotted in the day’s journal. Triage moves them to the right project." <<CaptureJournal>> as CaptureJournal
}
rectangle "==Apple Calendar & Reminders\\n\\nThe calendar and the to-do lists on the phone." <<AppleApps>> as AppleApps
rectangle "==GitHub\\n\\nHolds the vault backup and the website code; builds and hosts embry.dev." <<Github>> as Github
rectangle "Second Brain" <<Vault>> as Vault {
  skinparam RectangleBorderColor<<Vault>> #3b82f6
  skinparam RectangleFontColor<<Vault>> #3b82f6
  skinparam RectangleBorderStyle<<Vault>> dashed

  database "==0 Ingest\\n\\nThe in-tray. Every capture lands here first." <<VaultIngest>> as VaultIngest
  rectangle "==Vault triage\\n<size:10>[Claude or Grok skill]</size>\\n\\nReads the in-tray and files each item where it belongs." <<VaultTriage>> as VaultTriage
  database "==Projects & Areas\\n\\nLife admin: things with a finish line and ongoing duties." <<VaultPara>> as VaultPara
}
rectangle "==iPhone\\n\\nObsidian, Reminders, the Field Agent app." <<Iphone>> as Iphone
person "==JT\\n\\nCaptures things, makes the calls, presses the buttons." <<Jt>> as Jt

CaptureReminders .[#8D8D8D,thickness=2].> AppleApps : <color:#8D8D8D>open to-dos
CaptureCloudCapture .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>via the vault copy
AppleApps .[#8D8D8D,thickness=2].> Iphone : <color:#8D8D8D>on
Iphone .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>in his pocket
AssistantsClaude .[#8D8D8D,thickness=2].> CaptureDistill : <color:#8D8D8D>runs
CaptureReminders .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>new reminders
CaptureDistill .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>atomic notes
CaptureQuick .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>new note
CaptureCloudCapture .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>new notes
CaptureJournal .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>swept by
AssistantsClaude .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>runs
VaultIngest .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>read by
VaultTriage .[#8D8D8D,thickness=2].> VaultPara : <color:#8D8D8D>files to-dos
VaultPara .[#8D8D8D,thickness=2].> CaptureReminders : <color:#8D8D8D>open to-dos
Jt .[#8D8D8D,thickness=2].> Capture : <color:#8D8D8D>jots things down
Jt .[#8D8D8D,thickness=2].> Assistants : <color:#8D8D8D>asks
@enduml
`;case`assistantsView`:return`@startuml
title "AI assistants"
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

skinparam rectangle<<Iphone>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<FieldAgentRelay>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
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
skinparam database<<AssistantsSkills>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<CaptureDistill>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<VaultTriage>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<VaultMemory>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
rectangle "==iPhone\\n\\nObsidian, Reminders, the Field Agent app." <<Iphone>> as Iphone
rectangle "Field Agent" <<FieldAgent>> as FieldAgent {
  skinparam RectangleBorderColor<<FieldAgent>> #3b82f6
  skinparam RectangleFontColor<<FieldAgent>> #3b82f6
  skinparam RectangleBorderStyle<<FieldAgent>> dashed

  rectangle "==Home base\\n<size:10>[Node service on the Mac]</size>\\n\\nPasses each phone message to Claude or Grok and streams the answer back." <<FieldAgentRelay>> as FieldAgentRelay
}
person "==JT\\n\\nCaptures things, makes the calls, presses the buttons." <<Jt>> as Jt
rectangle "AI assistants" <<Assistants>> as Assistants {
  skinparam RectangleBorderColor<<Assistants>> #3b82f6
  skinparam RectangleFontColor<<Assistants>> #3b82f6
  skinparam RectangleBorderStyle<<Assistants>> dashed

  rectangle "==Claude Code\\n<size:10>[terminal tabs inside Obsidian]</size>\\n\\nMain assistant. Builds and fixes the machinery, runs the skills." <<AssistantsClaude>> as AssistantsClaude
  rectangle "==Grok\\n<size:10>[terminal tabs inside Obsidian]</size>\\n\\nSecond assistant. Same vault, same skills, same rules." <<AssistantsGrok>> as AssistantsGrok
  database "==Shared skills\\n<size:10>[System/Skills]</size>\\n\\nWritten procedures both assistants follow: triage, distill, lint, plain style." <<AssistantsSkills>> as AssistantsSkills
}
rectangle "Capture" <<Capture>> as Capture {
  skinparam RectangleBorderColor<<Capture>> #3b82f6
  skinparam RectangleFontColor<<Capture>> #3b82f6
  skinparam RectangleBorderStyle<<Capture>> dashed

  rectangle "==Chat distill\\n<size:10>[session-distill skill]</size>\\n\\nBoils a finished AI chat down to a few lasting notes, then the chat can go." <<CaptureDistill>> as CaptureDistill
}
rectangle "Second Brain" <<Vault>> as Vault {
  skinparam RectangleBorderColor<<Vault>> #3b82f6
  skinparam RectangleFontColor<<Vault>> #3b82f6
  skinparam RectangleBorderStyle<<Vault>> dashed

  rectangle "==Vault triage\\n<size:10>[Claude or Grok skill]</size>\\n\\nReads the in-tray and files each item where it belongs." <<VaultTriage>> as VaultTriage
  database "==System memory\\n\\nWhat the assistants need to remember between sessions." <<VaultMemory>> as VaultMemory
}

AssistantsClaude .[#8D8D8D,thickness=2].> AssistantsSkills : <color:#8D8D8D>follows
AssistantsGrok .[#8D8D8D,thickness=2].> AssistantsSkills : <color:#8D8D8D>follows
Iphone .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>in his pocket
AssistantsClaude .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>runs
AssistantsGrok .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>runs
VaultTriage .[#8D8D8D,thickness=2].> VaultMemory : <color:#8D8D8D>logs the run
AssistantsClaude .[#8D8D8D,thickness=2].> CaptureDistill : <color:#8D8D8D>runs
FieldAgentRelay .[#8D8D8D,thickness=2].> AssistantsClaude : <color:#8D8D8D>one turn per message
FieldAgentRelay .[#8D8D8D,thickness=2].> AssistantsGrok : <color:#8D8D8D>one turn per message
Jt .[#8D8D8D,thickness=2].> Assistants : <color:#8D8D8D>asks
Jt .[#8D8D8D,thickness=2].> Capture : <color:#8D8D8D>jots things down
Assistants .[#8D8D8D,thickness=2].> VaultMemory : <color:#8D8D8D>remembers in
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

skinparam rectangle<<Iphone>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<FieldAgentApp>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldAgentTailnet>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<FieldAgentRelay>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<FieldAgentApproval>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
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
rectangle "==iPhone\\n\\nObsidian, Reminders, the Field Agent app." <<Iphone>> as Iphone
person "==JT\\n\\nCaptures things, makes the calls, presses the buttons." <<Jt>> as Jt
rectangle "Field Agent" <<FieldAgent>> as FieldAgent {
  skinparam RectangleBorderColor<<FieldAgent>> #3b82f6
  skinparam RectangleFontColor<<FieldAgent>> #3b82f6
  skinparam RectangleBorderStyle<<FieldAgent>> dashed

  rectangle "==Field Agent app\\n<size:10>[SwiftUI · iPhone]</size>\\n\\nTwo chats, Claude and Grok. Replies fill in as they are written." <<FieldAgentApp>> as FieldAgentApp
  rectangle "==Private network\\n<size:10>[Tailscale]</size>\\n\\nLinks the phone to the Mac without opening the home network to the internet." <<FieldAgentTailnet>> as FieldAgentTailnet
  rectangle "==Home base\\n<size:10>[Node service on the Mac]</size>\\n\\nPasses each phone message to Claude or Grok and streams the answer back." <<FieldAgentRelay>> as FieldAgentRelay
  rectangle "==Allow / Deny card\\n<size:10>[in the app]</size>\\n\\nBefore Claude edits a file or runs a command, the phone buzzes and asks." <<FieldAgentApproval>> as FieldAgentApproval
}
rectangle "AI assistants" <<Assistants>> as Assistants {
  skinparam RectangleBorderColor<<Assistants>> #3b82f6
  skinparam RectangleFontColor<<Assistants>> #3b82f6
  skinparam RectangleBorderStyle<<Assistants>> dashed

  rectangle "==Claude Code\\n<size:10>[terminal tabs inside Obsidian]</size>\\n\\nMain assistant. Builds and fixes the machinery, runs the skills." <<AssistantsClaude>> as AssistantsClaude
  rectangle "==Grok\\n<size:10>[terminal tabs inside Obsidian]</size>\\n\\nSecond assistant. Same vault, same skills, same rules." <<AssistantsGrok>> as AssistantsGrok
}

Jt .[#8D8D8D,thickness=2].> FieldAgentApproval : <color:#8D8D8D>taps
Iphone .[#8D8D8D,thickness=2].> FieldAgentApp : <color:#8D8D8D>runs
FieldAgentApp .[#8D8D8D,thickness=2].> FieldAgentTailnet : <color:#8D8D8D>messages
FieldAgentRelay .[#8D8D8D,thickness=2].> FieldAgentApproval : <color:#8D8D8D>asks first
FieldAgentApproval .[#8D8D8D,thickness=2].> FieldAgentRelay : <color:#8D8D8D>Allow or Deny
FieldAgentTailnet .[#8D8D8D,thickness=2].> FieldAgentRelay : <color:#8D8D8D>carries
Iphone .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>in his pocket
FieldAgentRelay .[#8D8D8D,thickness=2].> AssistantsClaude : <color:#8D8D8D>one turn per message
FieldAgentRelay .[#8D8D8D,thickness=2].> AssistantsGrok : <color:#8D8D8D>one turn per message
Jt .[#8D8D8D,thickness=2].> Assistants : <color:#8D8D8D>asks
@enduml
`;case`schedulersView`:return`@startuml
title "Schedulers"
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
skinparam rectangle<<Iphone>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<PiHeartbeat>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SchedulersChipRelay>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SchedulersLaunchd>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SchedulersHomePlugin>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SchedulersCalendar>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SchedulersHealth>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Docs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<MailUnread>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<MailTexts>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ScanOcr>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BackupsMachine>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PrintingPrintLog>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PrintingPublish>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<VaultHome>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<MailMailTriage>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "==Apple Calendar & Reminders\\n\\nThe calendar and the to-do lists on the phone." <<AppleApps>> as AppleApps
rectangle "brainpi" <<Pi>> as Pi {
  skinparam RectangleBorderColor<<Pi>> #3b82f6
  skinparam RectangleFontColor<<Pi>> #3b82f6
  skinparam RectangleBorderStyle<<Pi>> dashed

  rectangle "==Heartbeat\\n<size:10>[every 6 hours]</size>\\n\\nReports disk space and drive health so the Health Report notices trouble." <<PiHeartbeat>> as PiHeartbeat
}
rectangle "==iPhone\\n\\nObsidian, Reminders, the Field Agent app." <<Iphone>> as Iphone
rectangle "Schedulers" <<Schedulers>> as Schedulers {
  skinparam RectangleBorderColor<<Schedulers>> #3b82f6
  skinparam RectangleFontColor<<Schedulers>> #3b82f6
  skinparam RectangleBorderStyle<<Schedulers>> dashed

  rectangle "==Phone button relay\\n<size:10>[iCloud · every 15 s]</size>\\n\\nA button tapped on the phone is carried to the Mac and run there." <<SchedulersChipRelay>> as SchedulersChipRelay
  rectangle "==Mac background agents\\n<size:10>[launchd · 2 agents]</size>\\n\\nThe unread mail list, and a doorbell that wakes Obsidian when the phone asks." <<SchedulersLaunchd>> as SchedulersLaunchd
  rectangle "==Home Button plugin\\n<size:10>[inside Obsidian]</size>\\n\\nRuns most timers: every minute, every 5 minutes, hourly, and daily." <<SchedulersHomePlugin>> as SchedulersHomePlugin
  rectangle "==Calendar mirror\\n<size:10>[hourly · free]</size>\\n\\nCopies the calendar onto the Home dashboard." <<SchedulersCalendar>> as SchedulersCalendar
  rectangle "==Health check\\n<size:10>[daily · free]</size>\\n\\nLooks for broken links, stale projects, and quiet machines; writes the Health Report." <<SchedulersHealth>> as SchedulersHealth
}
rectangle "==Find Anything\\n<size:10>[Mac · hourly · free]</size>\\n\\nCopies the text of every document in Documents into the vault so one search finds it." <<Docs>> as Docs
rectangle "Email & Texts" <<Mail>> as Mail {
  skinparam RectangleBorderColor<<Mail>> #3b82f6
  skinparam RectangleFontColor<<Mail>> #3b82f6
  skinparam RectangleBorderStyle<<Mail>> dashed

  rectangle "==Unread list\\n<size:10>[Mac · every 5 min · free]</size>\\n\\nReads new mail straight from the mail servers." <<MailUnread>> as MailUnread
  rectangle "==Texts mirror\\n<size:10>[Mac · every 5 min · free]</size>\\n\\nCopies new iMessages into the vault. Login codes are skipped." <<MailTexts>> as MailTexts
  rectangle "==Mail & text triage\\n<size:10>[AI · at Obsidian launch and on opening Home, 3 h apart]</size>\\n\\nArchives the noise and lists everything else under Needs action." <<MailMailTriage>> as MailMailTriage
}
rectangle "Scanner" <<Scan>> as Scan {
  skinparam RectangleBorderColor<<Scan>> #3b82f6
  skinparam RectangleFontColor<<Scan>> #3b82f6
  skinparam RectangleBorderStyle<<Scan>> dashed

  rectangle "==Scan sync + OCR\\n<size:10>[Mac · every minute · free]</size>\\n\\nPulls each raw scan, makes the text searchable, deletes the Pi copy once it checks out." <<ScanOcr>> as ScanOcr
}
rectangle "Backups" <<Backups>> as Backups {
  skinparam RectangleBorderColor<<Backups>> #3b82f6
  skinparam RectangleFontColor<<Backups>> #3b82f6
  skinparam RectangleBorderStyle<<Backups>> dashed

  rectangle "==Machine snapshot\\n<size:10>[hourly · free]</size>\\n\\nCopies the Mac’s setup (scripts, schedules, settings) into the vault. Secrets left out." <<BackupsMachine>> as BackupsMachine
}
rectangle "3D printing" <<Printing>> as Printing {
  skinparam RectangleBorderColor<<Printing>> #3b82f6
  skinparam RectangleFontColor<<Printing>> #3b82f6
  skinparam RectangleBorderStyle<<Printing>> dashed

  rectangle "==Print log\\n<size:10>[Mac · every minute · free]</size>\\n\\nNotes each start and finish in the model’s folder, the print log, and a notification." <<PrintingPrintLog>> as PrintingPrintLog
  rectangle "==Gallery publish\\n<size:10>[Mac · every 5 min and right after a finish]</size>\\n\\nPulls the drafted card, fills in the details, and pushes it to the site." <<PrintingPublish>> as PrintingPublish
}
rectangle "Second Brain" <<Vault>> as Vault {
  skinparam RectangleBorderColor<<Vault>> #3b82f6
  skinparam RectangleFontColor<<Vault>> #3b82f6
  skinparam RectangleBorderStyle<<Vault>> dashed

  rectangle "==Home dashboard\\n\\nThe front door. Shows today, mail, texts, and what each project needs next." <<VaultHome>> as VaultHome
}

AppleApps .[#8D8D8D,thickness=2].> SchedulersCalendar : <color:#8D8D8D>events
Iphone .[#8D8D8D,thickness=2].> SchedulersChipRelay : <color:#8D8D8D>button taps
SchedulersHomePlugin .[#8D8D8D,thickness=2].> SchedulersCalendar : <color:#8D8D8D>hourly
SchedulersHomePlugin .[#8D8D8D,thickness=2].> SchedulersHealth : <color:#8D8D8D>daily
SchedulersChipRelay .[#8D8D8D,thickness=2].> SchedulersHomePlugin : <color:#8D8D8D>queues a button
SchedulersHomePlugin .[#8D8D8D,thickness=2].> Docs : <color:#8D8D8D>hourly
AppleApps .[#8D8D8D,thickness=2].> Iphone : <color:#8D8D8D>on
SchedulersLaunchd .[#8D8D8D,thickness=2].> MailUnread : <color:#8D8D8D>every 5 min
SchedulersHomePlugin .[#8D8D8D,thickness=2].> MailTexts : <color:#8D8D8D>every 5 min
SchedulersHomePlugin .[#8D8D8D,thickness=2].> MailMailTriage : <color:#8D8D8D>launch and Home
MailUnread .[#8D8D8D,thickness=2].> MailMailTriage : <color:#8D8D8D>new mail
MailTexts .[#8D8D8D,thickness=2].> MailMailTriage : <color:#8D8D8D>new texts
SchedulersHomePlugin .[#8D8D8D,thickness=2].> ScanOcr : <color:#8D8D8D>every minute
SchedulersHomePlugin .[#8D8D8D,thickness=2].> BackupsMachine : <color:#8D8D8D>hourly
SchedulersHomePlugin .[#8D8D8D,thickness=2].> PrintingPrintLog : <color:#8D8D8D>every minute
SchedulersHomePlugin .[#8D8D8D,thickness=2].> PrintingPublish : <color:#8D8D8D>every 5 min
SchedulersCalendar .[#8D8D8D,thickness=2].> VaultHome : <color:#8D8D8D>today’s events
SchedulersHealth .[#8D8D8D,thickness=2].> VaultHome : <color:#8D8D8D>Health Report
PiHeartbeat .[#8D8D8D,thickness=2].> SchedulersHealth : <color:#8D8D8D>disk and drive health
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

skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<Gmail>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<IcloudMail>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<SchedulersLaunchd>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SchedulersHomePlugin>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<MailUnread>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<MailTexts>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<MailMailTriage>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<MailFold>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<MailMailArchive>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam database<<VaultIngest>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
person "==JT\\n\\nCaptures things, makes the calls, presses the buttons." <<Jt>> as Jt
rectangle "==Gmail\\n\\nMain mailbox." <<Gmail>> as Gmail
rectangle "==iCloud Mail\\n\\nSecond mailbox." <<IcloudMail>> as IcloudMail
rectangle "Schedulers" <<Schedulers>> as Schedulers {
  skinparam RectangleBorderColor<<Schedulers>> #3b82f6
  skinparam RectangleFontColor<<Schedulers>> #3b82f6
  skinparam RectangleBorderStyle<<Schedulers>> dashed

  rectangle "==Mac background agents\\n<size:10>[launchd · 2 agents]</size>\\n\\nThe unread mail list, and a doorbell that wakes Obsidian when the phone asks." <<SchedulersLaunchd>> as SchedulersLaunchd
  rectangle "==Home Button plugin\\n<size:10>[inside Obsidian]</size>\\n\\nRuns most timers: every minute, every 5 minutes, hourly, and daily." <<SchedulersHomePlugin>> as SchedulersHomePlugin
}
rectangle "Email & Texts" <<Mail>> as Mail {
  skinparam RectangleBorderColor<<Mail>> #3b82f6
  skinparam RectangleFontColor<<Mail>> #3b82f6
  skinparam RectangleBorderStyle<<Mail>> dashed

  rectangle "==Unread list\\n<size:10>[Mac · every 5 min · free]</size>\\n\\nReads new mail straight from the mail servers." <<MailUnread>> as MailUnread
  rectangle "==Texts mirror\\n<size:10>[Mac · every 5 min · free]</size>\\n\\nCopies new iMessages into the vault. Login codes are skipped." <<MailTexts>> as MailTexts
  rectangle "==Mail & text triage\\n<size:10>[AI · at Obsidian launch and on opening Home, 3 h apart]</size>\\n\\nArchives the noise and lists everything else under Needs action." <<MailMailTriage>> as MailMailTriage
  rectangle "==Needs action list\\n<size:10>[Home dashboard]</size>\\n\\nOne list per inbox. Every row has the same buttons: open, archive, delete, triage, add to calendar, respond." <<MailFold>> as MailFold
  database "==Mail archive\\n<size:10>[Documents/mail-archive]</size>\\n\\nThe raw copy of every thread JT chose to keep." <<MailMailArchive>> as MailMailArchive
}
rectangle "Second Brain" <<Vault>> as Vault {
  skinparam RectangleBorderColor<<Vault>> #3b82f6
  skinparam RectangleFontColor<<Vault>> #3b82f6
  skinparam RectangleBorderStyle<<Vault>> dashed

  database "==0 Ingest\\n\\nThe in-tray. Every capture lands here first." <<VaultIngest>> as VaultIngest
}

Jt .[#8D8D8D,thickness=2].> MailFold : <color:#8D8D8D>presses buttons
Gmail .[#8D8D8D,thickness=2].> MailUnread : <color:#8D8D8D>new mail
IcloudMail .[#8D8D8D,thickness=2].> MailUnread : <color:#8D8D8D>new mail
MailUnread .[#8D8D8D,thickness=2].> MailMailTriage : <color:#8D8D8D>new mail
MailTexts .[#8D8D8D,thickness=2].> MailMailTriage : <color:#8D8D8D>new texts
MailMailTriage .[#8D8D8D,thickness=2].> MailFold : <color:#8D8D8D>what needs action
MailFold .[#8D8D8D,thickness=2].> MailMailArchive : <color:#8D8D8D>triage button: raw copy
MailFold .[#8D8D8D,thickness=2].> Jt : <color:#8D8D8D>what needs action
MailFold .[#8D8D8D,thickness=2].> Gmail : <color:#8D8D8D>archive, delete
SchedulersLaunchd .[#8D8D8D,thickness=2].> MailUnread : <color:#8D8D8D>every 5 min
SchedulersHomePlugin .[#8D8D8D,thickness=2].> MailTexts : <color:#8D8D8D>every 5 min
SchedulersHomePlugin .[#8D8D8D,thickness=2].> MailMailTriage : <color:#8D8D8D>launch and Home
MailFold .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>triage button: note with full text
@enduml
`;case`scanner`:return`@startuml
title "Scanner"
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
skinparam rectangle<<SchedulersHomePlugin>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ScanScanner>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<PiScanWatch>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<ScanRaw>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<ScanOcr>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PiOcrFallback>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<VaultIngest>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<VaultTriage>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ScanRename>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<ScanPdf>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Docs>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<VaultPdfText>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
person "==JT\\n\\nCaptures things, makes the calls, presses the buttons." <<Jt>> as Jt
rectangle "Schedulers" <<Schedulers>> as Schedulers {
  skinparam RectangleBorderColor<<Schedulers>> #3b82f6
  skinparam RectangleFontColor<<Schedulers>> #3b82f6
  skinparam RectangleBorderStyle<<Schedulers>> dashed

  rectangle "==Home Button plugin\\n<size:10>[inside Obsidian]</size>\\n\\nRuns most timers: every minute, every 5 minutes, hourly, and daily." <<SchedulersHomePlugin>> as SchedulersHomePlugin
}
rectangle "Scanner" <<Scan>> as Scan {
  skinparam RectangleBorderColor<<Scan>> #3b82f6
  skinparam RectangleFontColor<<Scan>> #3b82f6
  skinparam RectangleBorderStyle<<Scan>> dashed

  rectangle "==Brother ADS-1350W\\n\\nFeeds paper. A blank sheet splits one document from the next." <<ScanScanner>> as ScanScanner
  database "==Raw scans\\n<size:10>[brainpi · holding area]</size>\\n\\nImage-only PDFs waiting for the Mac." <<ScanRaw>> as ScanRaw
  rectangle "==Scan sync + OCR\\n<size:10>[Mac · every minute · free]</size>\\n\\nPulls each raw scan, makes the text searchable, deletes the Pi copy once it checks out." <<ScanOcr>> as ScanOcr
  rectangle "==Rename dialog\\n<size:10>[during triage]</size>\\n\\nProposes a real file name from what the page says. Ignore it to keep the old name." <<ScanRename>> as ScanRename
  database "==Scanned PDFs\\n<size:10>[Documents/scans/<year>]</size>\\n\\nThe keeper copy. Opens on the Mac and the phone." <<ScanPdf>> as ScanPdf
}
rectangle "brainpi" <<Pi>> as Pi {
  skinparam RectangleBorderColor<<Pi>> #3b82f6
  skinparam RectangleFontColor<<Pi>> #3b82f6
  skinparam RectangleBorderStyle<<Pi>> dashed

  rectangle "==Scan watcher\\n<size:10>[every 2 seconds]</size>\\n\\nNotices paper in the scanner and starts the scan." <<PiScanWatch>> as PiScanWatch
  rectangle "==Backup OCR\\n<size:10>[every 2 min]</size>\\n\\nMakes a scan searchable itself if the Mac has not picked it up within an hour." <<PiOcrFallback>> as PiOcrFallback
}
rectangle "Second Brain" <<Vault>> as Vault {
  skinparam RectangleBorderColor<<Vault>> #3b82f6
  skinparam RectangleFontColor<<Vault>> #3b82f6
  skinparam RectangleBorderStyle<<Vault>> dashed

  database "==0 Ingest\\n\\nThe in-tray. Every capture lands here first." <<VaultIngest>> as VaultIngest
  rectangle "==Vault triage\\n<size:10>[Claude or Grok skill]</size>\\n\\nReads the in-tray and files each item where it belongs." <<VaultTriage>> as VaultTriage
  database "==Document text\\n<size:10>[3 Resources/PDF Text]</size>\\n\\nSearchable text of every document, with links that open the original." <<VaultPdfText>> as VaultPdfText
}
rectangle "==Find Anything\\n<size:10>[Mac · hourly · free]</size>\\n\\nCopies the text of every document in Documents into the vault so one search finds it." <<Docs>> as Docs

Jt .[#8D8D8D,thickness=2].> ScanScanner : <color:#8D8D8D>loads paper
ScanScanner .[#8D8D8D,thickness=2].> ScanRaw : <color:#8D8D8D>scanned pages
ScanRaw .[#8D8D8D,thickness=2].> ScanOcr : <color:#8D8D8D>pulled by
ScanOcr .[#8D8D8D,thickness=2].> ScanPdf : <color:#8D8D8D>searchable PDF
ScanRename .[#8D8D8D,thickness=2].> ScanPdf : <color:#8D8D8D>renames
ScanPdf .[#8D8D8D,thickness=2].> Docs : <color:#8D8D8D>indexed
ScanScanner .[#8D8D8D,thickness=2].> PiScanWatch : <color:#8D8D8D>paper detected
PiScanWatch .[#8D8D8D,thickness=2].> ScanRaw : <color:#8D8D8D>saves pages
ScanRaw .[#8D8D8D,thickness=2].> PiOcrFallback : <color:#8D8D8D>left an hour
SchedulersHomePlugin .[#8D8D8D,thickness=2].> ScanOcr : <color:#8D8D8D>every minute
SchedulersHomePlugin .[#8D8D8D,thickness=2].> Docs : <color:#8D8D8D>hourly
ScanOcr .[#8D8D8D,thickness=2].> VaultIngest : <color:#8D8D8D>one note per scan
VaultIngest .[#8D8D8D,thickness=2].> VaultTriage : <color:#8D8D8D>read by
VaultTriage .[#8D8D8D,thickness=2].> ScanRename : <color:#8D8D8D>asks JT
Docs .[#8D8D8D,thickness=2].> VaultPdfText : <color:#8D8D8D>full text
@enduml
`;case`piView`:return`@startuml
title "brainpi"
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

skinparam rectangle<<PiMirror>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ScanScanner>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<PrintingPrinter>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<BackupsTimeMachine>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PiCamera>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PiScanWatch>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<PiTmShare>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<PiHeartbeat>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PiTunnel>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PiPrintWatch>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<ScanRaw>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Cloudflare>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PrintingPublish>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PiOcrFallback>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SchedulersHealth>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SiteLive>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "Scanner" <<Scan>> as Scan {
  skinparam RectangleBorderColor<<Scan>> #3b82f6
  skinparam RectangleFontColor<<Scan>> #3b82f6
  skinparam RectangleBorderStyle<<Scan>> dashed

  rectangle "==Brother ADS-1350W\\n\\nFeeds paper. A blank sheet splits one document from the next." <<ScanScanner>> as ScanScanner
  database "==Raw scans\\n<size:10>[brainpi · holding area]</size>\\n\\nImage-only PDFs waiting for the Mac." <<ScanRaw>> as ScanRaw
}
rectangle "brainpi" <<Pi>> as Pi {
  skinparam RectangleBorderColor<<Pi>> #3b82f6
  skinparam RectangleFontColor<<Pi>> #3b82f6
  skinparam RectangleBorderStyle<<Pi>> dashed

  rectangle "==Nightly mirror\\n<size:10>[3:30 am]</size>\\n\\nCopies the Pi’s working files to a second disk. Time Machine is skipped." <<PiMirror>> as PiMirror
  rectangle "==Camera relay\\n<size:10>[go2rtc]</size>\\n\\nTakes the printer camera and serves it as a video stream." <<PiCamera>> as PiCamera
  rectangle "==Scan watcher\\n<size:10>[every 2 seconds]</size>\\n\\nNotices paper in the scanner and starts the scan." <<PiScanWatch>> as PiScanWatch
  database "==Time Machine share\\n<size:10>[4 TB disk]</size>\\n\\nWhere the Mac backs itself up, encrypted." <<PiTmShare>> as PiTmShare
  rectangle "==Heartbeat\\n<size:10>[every 6 hours]</size>\\n\\nReports disk space and drive health so the Health Report notices trouble." <<PiHeartbeat>> as PiHeartbeat
  rectangle "==Tunnel\\n<size:10>[cloudflared]</size>\\n\\nSends that stream out to the public site through Cloudflare." <<PiTunnel>> as PiTunnel
  rectangle "==Print watcher\\n<size:10>[listens to the printer]</size>\\n\\nWhen a print finishes, grabs a bed photo and drafts a gallery card." <<PiPrintWatch>> as PiPrintWatch
  rectangle "==Backup OCR\\n<size:10>[every 2 min]</size>\\n\\nMakes a scan searchable itself if the Mac has not picked it up within an hour." <<PiOcrFallback>> as PiOcrFallback
}
rectangle "3D printing" <<Printing>> as Printing {
  skinparam RectangleBorderColor<<Printing>> #3b82f6
  skinparam RectangleFontColor<<Printing>> #3b82f6
  skinparam RectangleBorderStyle<<Printing>> dashed

  rectangle "==Bambu P2S\\n\\nThe 3D printer. Reports its status and camera over the home network." <<PrintingPrinter>> as PrintingPrinter
  rectangle "==Gallery publish\\n<size:10>[Mac · every 5 min and right after a finish]</size>\\n\\nPulls the drafted card, fills in the details, and pushes it to the site." <<PrintingPublish>> as PrintingPublish
}
rectangle "Backups" <<Backups>> as Backups {
  skinparam RectangleBorderColor<<Backups>> #3b82f6
  skinparam RectangleFontColor<<Backups>> #3b82f6
  skinparam RectangleBorderStyle<<Backups>> dashed

  rectangle "==Time Machine\\n<size:10>[macOS]</size>\\n\\nFull Mac backup, history included, to the Pi." <<BackupsTimeMachine>> as BackupsTimeMachine
}
rectangle "Schedulers" <<Schedulers>> as Schedulers {
  skinparam RectangleBorderColor<<Schedulers>> #3b82f6
  skinparam RectangleFontColor<<Schedulers>> #3b82f6
  skinparam RectangleBorderStyle<<Schedulers>> dashed

  rectangle "==Health check\\n<size:10>[daily · free]</size>\\n\\nLooks for broken links, stale projects, and quiet machines; writes the Health Report." <<SchedulersHealth>> as SchedulersHealth
}
rectangle "==Cloudflare\\n\\nCarries the printer camera from home to the public site without opening the home network." <<Cloudflare>> as Cloudflare
rectangle "==Live camera\\n<size:10>[live.embry.dev]</size>\\n\\nThe video the /printing page plays." <<SiteLive>> as SiteLive

PiCamera .[#8D8D8D,thickness=2].> PiTunnel : <color:#8D8D8D>live video
PiCamera .[#8D8D8D,thickness=2].> PiPrintWatch : <color:#8D8D8D>bed photo
PiTunnel .[#8D8D8D,thickness=2].> Cloudflare : <color:#8D8D8D>camera stream
ScanScanner .[#8D8D8D,thickness=2].> PiScanWatch : <color:#8D8D8D>paper detected
PiScanWatch .[#8D8D8D,thickness=2].> ScanRaw : <color:#8D8D8D>saves pages
ScanScanner .[#8D8D8D,thickness=2].> ScanRaw : <color:#8D8D8D>scanned pages
ScanRaw .[#8D8D8D,thickness=2].> PiOcrFallback : <color:#8D8D8D>left an hour
PrintingPrinter .[#8D8D8D,thickness=2].> PiCamera : <color:#8D8D8D>camera feed
PrintingPrinter .[#8D8D8D,thickness=2].> PiPrintWatch : <color:#8D8D8D>finished
PiPrintWatch .[#8D8D8D,thickness=2].> PrintingPublish : <color:#8D8D8D>drafted card
BackupsTimeMachine .[#8D8D8D,thickness=2].> PiTmShare : <color:#8D8D8D>backs up to
PiHeartbeat .[#8D8D8D,thickness=2].> SchedulersHealth : <color:#8D8D8D>disk and drive health
Cloudflare .[#8D8D8D,thickness=2].> SiteLive : <color:#8D8D8D>serves
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

skinparam rectangle<<SchedulersHomePlugin>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PrintingPrinter>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<PrintingPrintLog>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<PrintingLibrary>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<PiCamera>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PiPrintWatch>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PiTunnel>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<PrintingPublish>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Cloudflare>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<SiteCode>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<SiteLive>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "Schedulers" <<Schedulers>> as Schedulers {
  skinparam RectangleBorderColor<<Schedulers>> #3b82f6
  skinparam RectangleFontColor<<Schedulers>> #3b82f6
  skinparam RectangleBorderStyle<<Schedulers>> dashed

  rectangle "==Home Button plugin\\n<size:10>[inside Obsidian]</size>\\n\\nRuns most timers: every minute, every 5 minutes, hourly, and daily." <<SchedulersHomePlugin>> as SchedulersHomePlugin
}
rectangle "3D printing" <<Printing>> as Printing {
  skinparam RectangleBorderColor<<Printing>> #3b82f6
  skinparam RectangleFontColor<<Printing>> #3b82f6
  skinparam RectangleBorderStyle<<Printing>> dashed

  rectangle "==Bambu P2S\\n\\nThe 3D printer. Reports its status and camera over the home network." <<PrintingPrinter>> as PrintingPrinter
  rectangle "==Print log\\n<size:10>[Mac · every minute · free]</size>\\n\\nNotes each start and finish in the model’s folder, the print log, and a notification." <<PrintingPrintLog>> as PrintingPrintLog
  database "==3D printing library\\n<size:10>[Documents/3d_printing]</size>\\n\\nOne folder per model: files, notes, photos, and its print history." <<PrintingLibrary>> as PrintingLibrary
  rectangle "==Gallery publish\\n<size:10>[Mac · every 5 min and right after a finish]</size>\\n\\nPulls the drafted card, fills in the details, and pushes it to the site." <<PrintingPublish>> as PrintingPublish
}
rectangle "brainpi" <<Pi>> as Pi {
  skinparam RectangleBorderColor<<Pi>> #3b82f6
  skinparam RectangleFontColor<<Pi>> #3b82f6
  skinparam RectangleBorderStyle<<Pi>> dashed

  rectangle "==Camera relay\\n<size:10>[go2rtc]</size>\\n\\nTakes the printer camera and serves it as a video stream." <<PiCamera>> as PiCamera
  rectangle "==Print watcher\\n<size:10>[listens to the printer]</size>\\n\\nWhen a print finishes, grabs a bed photo and drafts a gallery card." <<PiPrintWatch>> as PiPrintWatch
  rectangle "==Tunnel\\n<size:10>[cloudflared]</size>\\n\\nSends that stream out to the public site through Cloudflare." <<PiTunnel>> as PiTunnel
}
rectangle "==Cloudflare\\n\\nCarries the printer camera from home to the public site without opening the home network." <<Cloudflare>> as Cloudflare
rectangle "embry.dev" <<Site>> as Site {
  skinparam RectangleBorderColor<<Site>> #3b82f6
  skinparam RectangleFontColor<<Site>> #3b82f6
  skinparam RectangleBorderStyle<<Site>> dashed

  database "==Site code\\n<size:10>[Astro · Projects/embry-dev-site]</size>\\n\\nPages and the print gallery, as files in one folder." <<SiteCode>> as SiteCode
  rectangle "==Live camera\\n<size:10>[live.embry.dev]</size>\\n\\nThe video the /printing page plays." <<SiteLive>> as SiteLive
}

PrintingPrinter .[#8D8D8D,thickness=2].> PrintingPrintLog : <color:#8D8D8D>start and finish
PrintingPrintLog .[#8D8D8D,thickness=2].> PrintingLibrary : <color:#8D8D8D>writes history
SchedulersHomePlugin .[#8D8D8D,thickness=2].> PrintingPrintLog : <color:#8D8D8D>every minute
SchedulersHomePlugin .[#8D8D8D,thickness=2].> PrintingPublish : <color:#8D8D8D>every 5 min
PrintingPrinter .[#8D8D8D,thickness=2].> PiCamera : <color:#8D8D8D>camera feed
PrintingPrinter .[#8D8D8D,thickness=2].> PiPrintWatch : <color:#8D8D8D>finished
PiCamera .[#8D8D8D,thickness=2].> PiPrintWatch : <color:#8D8D8D>bed photo
PiPrintWatch .[#8D8D8D,thickness=2].> PrintingPublish : <color:#8D8D8D>drafted card
PiCamera .[#8D8D8D,thickness=2].> PiTunnel : <color:#8D8D8D>live video
PiTunnel .[#8D8D8D,thickness=2].> Cloudflare : <color:#8D8D8D>camera stream
PrintingPublish .[#8D8D8D,thickness=2].> SiteCode : <color:#8D8D8D>gallery card
Cloudflare .[#8D8D8D,thickness=2].> SiteLive : <color:#8D8D8D>serves
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

skinparam person<<Jt>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<PiTunnel>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Cloudflare>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<PrintingPublish>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SiteLive>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<SiteCode>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<SiteDeploy>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<SitePages>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Github>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
person "==JT\\n\\nCaptures things, makes the calls, presses the buttons." <<Jt>> as Jt
rectangle "==Tunnel\\n<size:10>[cloudflared]</size>\\n\\nSends that stream out to the public site through Cloudflare." <<PiTunnel>> as PiTunnel
rectangle "3D printing" <<Printing>> as Printing {
  skinparam RectangleBorderColor<<Printing>> #3b82f6
  skinparam RectangleFontColor<<Printing>> #3b82f6
  skinparam RectangleBorderStyle<<Printing>> dashed

  rectangle "==Gallery publish\\n<size:10>[Mac · every 5 min and right after a finish]</size>\\n\\nPulls the drafted card, fills in the details, and pushes it to the site." <<PrintingPublish>> as PrintingPublish
}
rectangle "==Cloudflare\\n\\nCarries the printer camera from home to the public site without opening the home network." <<Cloudflare>> as Cloudflare
rectangle "embry.dev" <<Site>> as Site {
  skinparam RectangleBorderColor<<Site>> #3b82f6
  skinparam RectangleFontColor<<Site>> #3b82f6
  skinparam RectangleBorderStyle<<Site>> dashed

  rectangle "==Live camera\\n<size:10>[live.embry.dev]</size>\\n\\nThe video the /printing page plays." <<SiteLive>> as SiteLive
  database "==Site code\\n<size:10>[Astro · Projects/embry-dev-site]</size>\\n\\nPages and the print gallery, as files in one folder." <<SiteCode>> as SiteCode
  rectangle "==Build and publish\\n<size:10>[GitHub Actions]</size>\\n\\nEvery push rebuilds the site and puts it live within minutes." <<SiteDeploy>> as SiteDeploy
  rectangle "==Public pages\\n<size:10>[embry.dev]</size>\\n\\nThe studio, and /printing with the live camera and gallery." <<SitePages>> as SitePages
}
rectangle "==GitHub\\n\\nHolds the vault backup and the website code; builds and hosts embry.dev." <<Github>> as Github

Cloudflare .[#8D8D8D,thickness=2].> SiteLive : <color:#8D8D8D>serves
SiteCode .[#8D8D8D,thickness=2].> SiteDeploy : <color:#8D8D8D>push
SiteDeploy .[#8D8D8D,thickness=2].> SitePages : <color:#8D8D8D>publishes
SiteLive .[#8D8D8D,thickness=2].> SitePages : <color:#8D8D8D>plays on
SiteDeploy .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>runs on
PiTunnel .[#8D8D8D,thickness=2].> Cloudflare : <color:#8D8D8D>camera stream
PrintingPublish .[#8D8D8D,thickness=2].> SiteCode : <color:#8D8D8D>gallery card
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

skinparam rectangle<<SchedulersHomePlugin>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BackupsMachine>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BackupsTimeMachine>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BackupsVaultPush>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<BackupsUsb>>{
  BackgroundColor #A35829
  FontColor #FFE0C2
  BorderColor #7E451D
}
skinparam rectangle<<Github>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<VaultMemory>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam database<<PiTmShare>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<PiMirror>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "Schedulers" <<Schedulers>> as Schedulers {
  skinparam RectangleBorderColor<<Schedulers>> #3b82f6
  skinparam RectangleFontColor<<Schedulers>> #3b82f6
  skinparam RectangleBorderStyle<<Schedulers>> dashed

  rectangle "==Home Button plugin\\n<size:10>[inside Obsidian]</size>\\n\\nRuns most timers: every minute, every 5 minutes, hourly, and daily." <<SchedulersHomePlugin>> as SchedulersHomePlugin
}
rectangle "Backups" <<Backups>> as Backups {
  skinparam RectangleBorderColor<<Backups>> #3b82f6
  skinparam RectangleFontColor<<Backups>> #3b82f6
  skinparam RectangleBorderStyle<<Backups>> dashed

  rectangle "==Machine snapshot\\n<size:10>[hourly · free]</size>\\n\\nCopies the Mac’s setup (scripts, schedules, settings) into the vault. Secrets left out." <<BackupsMachine>> as BackupsMachine
  rectangle "==Time Machine\\n<size:10>[macOS]</size>\\n\\nFull Mac backup, history included, to the Pi." <<BackupsTimeMachine>> as BackupsTimeMachine
  rectangle "==Vault backup\\n<size:10>[hourly · free]</size>\\n\\nCommits the whole vault to a private GitHub repo." <<BackupsVaultPush>> as BackupsVaultPush
  rectangle "==USB backup drive\\n\\nA second copy that can leave the house." <<BackupsUsb>> as BackupsUsb
}
rectangle "Second Brain" <<Vault>> as Vault {
  skinparam RectangleBorderColor<<Vault>> #3b82f6
  skinparam RectangleFontColor<<Vault>> #3b82f6
  skinparam RectangleBorderStyle<<Vault>> dashed

  database "==System memory\\n\\nWhat the assistants need to remember between sessions." <<VaultMemory>> as VaultMemory
}
rectangle "brainpi" <<Pi>> as Pi {
  skinparam RectangleBorderColor<<Pi>> #3b82f6
  skinparam RectangleFontColor<<Pi>> #3b82f6
  skinparam RectangleBorderStyle<<Pi>> dashed

  database "==Time Machine share\\n<size:10>[4 TB disk]</size>\\n\\nWhere the Mac backs itself up, encrypted." <<PiTmShare>> as PiTmShare
  rectangle "==Nightly mirror\\n<size:10>[3:30 am]</size>\\n\\nCopies the Pi’s working files to a second disk. Time Machine is skipped." <<PiMirror>> as PiMirror
}
rectangle "==GitHub\\n\\nHolds the vault backup and the website code; builds and hosts embry.dev." <<Github>> as Github

BackupsMachine .[#8D8D8D,thickness=2].> BackupsVaultPush : <color:#8D8D8D>one minute before
BackupsTimeMachine .[#8D8D8D,thickness=2].> BackupsUsb : <color:#8D8D8D>second copy
BackupsVaultPush .[#8D8D8D,thickness=2].> Github : <color:#8D8D8D>private repo
SchedulersHomePlugin .[#8D8D8D,thickness=2].> BackupsMachine : <color:#8D8D8D>hourly
SchedulersHomePlugin .[#8D8D8D,thickness=2].> BackupsVaultPush : <color:#8D8D8D>hourly
BackupsMachine .[#8D8D8D,thickness=2].> VaultMemory : <color:#8D8D8D>writes setup into
BackupsTimeMachine .[#8D8D8D,thickness=2].> PiTmShare : <color:#8D8D8D>backs up to
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};