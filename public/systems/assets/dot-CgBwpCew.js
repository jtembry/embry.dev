var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    iphone [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders, the Field Agent app.</FONT></TD></TR></TABLE>>,
        likec4_id=iphone,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Captures things, makes the calls, presses the<BR/>buttons.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    iphone -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">in his pocket</FONT></TD></TR></TABLE>>,
        likec4_id=jh8v29,
        style=dashed];
    fieldagent [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Field Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">iPhone app · Swift · Node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A custom iPhone app: the daily dashboard,<BR/>plus chats with Claude and Grok on the Mac<BR/>from anywhere.</FONT></TD></TR></TABLE>>,
        likec4_id=fieldAgent,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    iphone -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1a99ch0",
        style=dashed];
    backups [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Backups</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">GitHub · Time Machine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Hourly copy of the vault and machine setup to<BR/>GitHub; Time Machine for everything else.</FONT></TD></TR></TABLE>>,
        likec4_id=backups,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Second Brain</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Where everything ends up: notes, projects,<BR/>ideas, and the lists the dashboard reads.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    backups -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">writes setup into</FONT></TD></TR></TABLE>>,
        likec4_id="1aput2l",
        style=dashed];
    pi [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">brainpi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Raspberry Pi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Small always-on box: runs the scanner, holds<BR/>Time Machine, streams the printer camera.</FONT></TD></TR></TABLE>>,
        likec4_id=pi,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    backups -> pi [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">backs up to</FONT></TD></TR></TABLE>>,
        likec4_id="131kvpq",
        style=dashed];
    github [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">GitHub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Holds the vault backup and the website code;<BR/>builds and hosts embry.dev.</FONT></TD></TR></TABLE>>,
        likec4_id=github,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    backups -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">private repo</FONT></TD></TR></TABLE>>,
        likec4_id="1p9qjyq",
        style=dashed];
    icloudmail [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iCloud Mail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Second mailbox.</FONT></TD></TR></TABLE>>,
        likec4_id=icloudMail,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    mail [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email &amp; Texts</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Turns two inboxes and iMessage into one short<BR/>list of what needs action.</FONT></TD></TR></TABLE>>,
        likec4_id=mail,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    icloudmail -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id=dvb0eq,
        minlen=1,
        style=dashed];
    assistants [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">AI assistants</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Claude Code · Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Two assistants share one vault, one set of<BR/>skills, and one memory.</FONT></TD></TR></TABLE>>,
        likec4_id=assistants,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> assistants [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks</FONT></TD></TR></TABLE>>,
        likec4_id=kw6wlv,
        style=dashed];
    capture [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Capture</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every way a thought gets into the in-tray.</FONT></TD></TR></TABLE>>,
        likec4_id=capture,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">jots things down</FONT></TD></TR></TABLE>>,
        likec4_id="19ws780",
        style=dashed];
    jt -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1271r5b",
        style=dashed];
    scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scanner</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Paper in the scanner becomes a searchable PDF<BR/>and a note to file.</FONT></TD></TR></TABLE>>,
        likec4_id=scan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">loads paper</FONT></TD></TR></TABLE>>,
        likec4_id=qodayz,
        style=dashed];
    jt -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">presses buttons</FONT></TD></TR></TABLE>>,
        likec4_id=qoob6l,
        style=dashed];
    assistants -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1rj2lhz",
        style=dashed];
    assistants -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=nbegqx,
        style=dashed];
    vault -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="1ph5ro4",
        style=dashed];
    vault -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">next actions</FONT></TD></TR></TABLE>>,
        likec4_id="1klyicr",
        style=dashed];
    vault -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks JT</FONT></TD></TR></TABLE>>,
        likec4_id="1hliz67",
        style=dashed];
    capture -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=qgq638,
        style=dashed];
    capture -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">via the vault copy</FONT></TD></TR></TABLE>>,
        likec4_id=erp4jv,
        style=dashed];
    fieldagent -> assistants [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id=biflw6,
        style=dashed];
    fieldagent -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">phone attaches, 3 h apart</FONT></TD></TR></TABLE>>,
        likec4_id=yxvrmg,
        style=dashed];
    scan -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one note per scan</FONT></TD></TR></TABLE>>,
        likec4_id="4jr7rj",
        style=dashed];
    docs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Find Anything</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Mac · hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copies the text of every document in<BR/>Documents into the vault so one search finds<BR/>it.</FONT></TD></TR></TABLE>>,
        likec4_id=docs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    scan -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">indexed</FONT></TD></TR></TABLE>>,
        likec4_id=awspam,
        style=dashed];
    scan -> pi [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1yl1awc",
        style=dashed];
    mail -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id="1w0mhfh",
        style=dashed];
    mail -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: note with full text</FONT></TD></TR></TABLE>>,
        likec4_id=o4u72x,
        style=dashed];
    mail -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Email and Texts tabs</FONT></TD></TR></TABLE>>,
        likec4_id="1ny0f88",
        style=dashed];
    gmail [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gmail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Main mailbox.</FONT></TD></TR></TABLE>>,
        likec4_id=gmail,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    mail -> gmail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">archive, delete</FONT></TD></TR></TABLE>>,
        likec4_id=nu9k31,
        style=dashed];
    docs -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">full text</FONT></TD></TR></TABLE>>,
        likec4_id=x3l1bf,
        style=dashed];
    pi -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">saves pages</FONT></TD></TR></TABLE>>,
        likec4_id="1ueteb0",
        style=dashed];
    printing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">3D printing</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Bambu Lab P2S</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Logs every print, streams the camera, and<BR/>posts finished prints to the site.</FONT></TD></TR></TABLE>>,
        likec4_id=printing,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pi -> printing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">drafted card</FONT></TD></TR></TABLE>>,
        likec4_id=l9usua,
        style=dashed];
    cloudflare [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cloudflare</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Carries the printer camera from home to the<BR/>public site without opening the home network.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudflare,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    pi -> cloudflare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera stream</FONT></TD></TR></TABLE>>,
        likec4_id="10p0igu",
        style=dashed];
    gmail -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id="75n7fx",
        style=dashed];
    printing -> pi [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=hjw22q,
        style=dashed];
    site [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Astro site on GitHub Pages</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Public site: the studio, the live printer<BR/>camera, and the print gallery.</FONT></TD></TR></TABLE>>,
        likec4_id=site,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    printing -> site [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gallery card</FONT></TD></TR></TABLE>>,
        likec4_id="7dibu8",
        style=dashed];
    cloudflare -> site [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">serves</FONT></TD></TR></TABLE>>,
        likec4_id="1rwwmrw",
        style=dashed];
    site -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs on</FONT></TD></TR></TABLE>>,
        likec4_id=ro7g04,
        style=dashed];
}
`;case`secondBrain`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=secondBrain,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_vault {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECOND BRAIN</B></FONT>>,
            likec4_depth=1,
            likec4_id=vault,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ingest [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">0 Ingest</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">The in-tray. Every capture lands here first.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.ingest",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        pdftext [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Document text</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">3 Resources/PDF Text</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Searchable text of every document, with links<BR/>that open the original.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.pdfText",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        triage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vault triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Claude or Grok skill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reads the in-tray and files each item where<BR/>it belongs.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.triage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        para [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Projects &amp; Areas</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Life admin: things with a finish line and<BR/>ongoing duties.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.para",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        zettel [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Concepts &amp; Quotes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Ideas worth keeping, one per note, linked<BR/>together.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.zettel",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        memory [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">System memory</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">What the assistants need to remember between<BR/>sessions.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.memory",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_fieldagent {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FIELD AGENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=fieldAgent,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        mission [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mission Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">dashboard screen in the app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The front door. Shows today, mail, texts,<BR/>calendar, and what each project needs next,<BR/>updated live.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.mission",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    schedulers [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Schedulers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian plugin · launchd</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Timers that refresh everything so nobody has<BR/>to press refresh.</FONT></TD></TR></TABLE>>,
        likec4_id=schedulers,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mail [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email &amp; Texts</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Turns two inboxes and iMessage into one short<BR/>list of what needs action.</FONT></TD></TR></TABLE>>,
        likec4_id=mail,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    schedulers -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="17extt3",
        style=dashed,
        weight=2];
    backups [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Backups</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">GitHub · Time Machine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Hourly copy of the vault and machine setup to<BR/>GitHub; Time Machine for everything else.</FONT></TD></TR></TABLE>>,
        likec4_id=backups,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    schedulers -> backups [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id=hzm0nn,
        style=dashed,
        weight=2];
    scan [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scanner</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Paper in the scanner becomes a searchable PDF<BR/>and a note to file.</FONT></TD></TR></TABLE>>,
        likec4_id=scan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    schedulers -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id="17fetip",
        style=dashed,
        weight=2];
    docs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Find Anything</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Mac · hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copies the text of every document in<BR/>Documents into the vault so one search finds<BR/>it.</FONT></TD></TR></TABLE>>,
        likec4_id=docs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    schedulers -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id="17f4m6t",
        style=dashed,
        weight=2];
    schedulers -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1lfith3",
        style=dashed,
        weight=2];
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Captures things, makes the calls, presses the<BR/>buttons.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mail -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id="1w0mhfh",
        style=dashed];
    mail -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: note with full text</FONT></TD></TR></TABLE>>,
        likec4_id="3xdrxx",
        style=dashed];
    mail -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Email and Texts tabs</FONT></TD></TR></TABLE>>,
        likec4_id="1i76456",
        style=dashed,
        weight=2];
    backups -> memory [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">writes setup into</FONT></TD></TR></TABLE>>,
        likec4_id="10bynaa",
        style=dashed];
    jt -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">presses buttons</FONT></TD></TR></TABLE>>,
        likec4_id=qoob6l,
        style=dashed];
    assistants [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">AI assistants</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Claude Code · Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Two assistants share one vault, one set of<BR/>skills, and one memory.</FONT></TD></TR></TABLE>>,
        likec4_id=assistants,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> assistants [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks</FONT></TD></TR></TABLE>>,
        likec4_id=kw6wlv,
        style=dashed,
        weight=2];
    jt -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">loads paper</FONT></TD></TR></TABLE>>,
        likec4_id=qodayz,
        style=dashed,
        weight=2];
    capture [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Capture</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every way a thought gets into the in-tray.</FONT></TD></TR></TABLE>>,
        likec4_id=capture,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">jots things down</FONT></TD></TR></TABLE>>,
        likec4_id="19ws780",
        style=dashed,
        weight=2];
    jt -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks</FONT></TD></TR></TABLE>>,
        likec4_id=kyv4r1,
        style=dashed,
        weight=2];
    assistants -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=nbegqx,
        style=dashed,
        weight=2];
    assistants -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=zlogid,
        style=dashed];
    assistants -> memory [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">remembers in</FONT></TD></TR></TABLE>>,
        likec4_id="150z0d4",
        style=dashed];
    scan -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">indexed</FONT></TD></TR></TABLE>>,
        likec4_id=awspam,
        style=dashed,
        weight=2];
    scan -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one note per scan</FONT></TD></TR></TABLE>>,
        likec4_id="1m60gmb",
        style=dashed];
    capture -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=ge4o7s,
        style=dashed];
    capture -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">swept by</FONT></TD></TR></TABLE>>,
        likec4_id=ehlaba,
        style=dashed];
    docs -> pdftext [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">full text</FONT></TD></TR></TABLE>>,
        likec4_id="2v2oi2",
        minlen=1,
        style=dashed];
    ingest -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">read by</FONT></TD></TR></TABLE>>,
        likec4_id="1xi1of8",
        style=dashed,
        weight=2];
    triage -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks JT</FONT></TD></TR></TABLE>>,
        likec4_id=pigyel,
        style=dashed];
    triage -> para [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">files to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="1s5a7pg",
        style=dashed,
        weight=3];
    triage -> zettel [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">files ideas</FONT></TD></TR></TABLE>>,
        likec4_id=xqzr8w,
        minlen=1,
        style=dashed,
        weight=2];
    triage -> memory [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">logs the run</FONT></TD></TR></TABLE>>,
        likec4_id=o1lhhj,
        style=dashed,
        weight=2];
    para -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id=o59ans,
        style=dashed,
        weight=2];
    para -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">next actions</FONT></TD></TR></TABLE>>,
        likec4_id="4dett1",
        style=dashed];
}
`;case`captureView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=captureView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_assistants {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AI ASSISTANTS</B></FONT>>,
            likec4_depth=1,
            likec4_id=assistants,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        claude [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Claude Code</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">terminal tabs inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Main assistant. Builds and fixes the<BR/>machinery, runs the skills.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.claude",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_capture {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CAPTURE</B></FONT>>,
            likec4_depth=1,
            likec4_id=capture,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        reminders [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Reminders sync</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Remindian · two-way</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Open to-dos show up as phone reminders; new<BR/>reminders come back into the vault.</FONT></TD></TR></TABLE>>,
            likec4_id="capture.reminders",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        cloudcapture [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Phone capture</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Claude on the phone · GitHub copy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Away from the Mac, Claude can add new notes<BR/>to the in-tray only.</FONT></TD></TR></TABLE>>,
            likec4_id="capture.cloudCapture",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        distill [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat distill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">session-distill skill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Boils a finished AI chat down to a few<BR/>lasting notes, then the chat can go.</FONT></TD></TR></TABLE>>,
            likec4_id="capture.distill",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        quick [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Quick capture</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Obsidian ribbon button</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Type a thought, press save, it becomes a note<BR/>in the in-tray.</FONT></TD></TR></TABLE>>,
            likec4_id="capture.quick",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        journal [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Journal to-dos</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">daily note</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">To-dos jotted in the day’s journal. Triage<BR/>moves them to the right project.</FONT></TD></TR></TABLE>>,
            likec4_id="capture.journal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_vault {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECOND BRAIN</B></FONT>>,
            likec4_depth=1,
            likec4_id=vault,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ingest [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">0 Ingest</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">The in-tray. Every capture lands here first.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.ingest",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        triage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vault triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Claude or Grok skill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reads the in-tray and files each item where<BR/>it belongs.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.triage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        para [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Projects &amp; Areas</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Life admin: things with a finish line and<BR/>ongoing duties.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.para",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    claude -> distill [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=ljwdrk,
        style=dashed];
    claude -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="124ncg1",
        style=dashed];
    appleapps [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Apple Calendar &amp; Reminders</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">The calendar and the to-do lists on the<BR/>phone.</FONT></TD></TR></TABLE>>,
        likec4_id=appleApps,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    reminders -> appleapps [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id=wako7,
        style=dashed,
        weight=2];
    reminders -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new reminders</FONT></TD></TR></TABLE>>,
        likec4_id=w3b963,
        style=dashed];
    github [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">GitHub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Holds the vault backup and the website code;<BR/>builds and hosts embry.dev.</FONT></TD></TR></TABLE>>,
        likec4_id=github,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    cloudcapture -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">via the vault copy</FONT></TD></TR></TABLE>>,
        likec4_id="1vmayc0",
        minlen=1,
        style=dashed,
        weight=2];
    cloudcapture -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new notes</FONT></TD></TR></TABLE>>,
        likec4_id=qy4bgj,
        style=dashed];
    distill -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">atomic notes</FONT></TD></TR></TABLE>>,
        likec4_id="1givaxh",
        style=dashed];
    quick -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new note</FONT></TD></TR></TABLE>>,
        likec4_id="1aq20j7",
        minlen=1,
        style=dashed];
    journal -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">swept by</FONT></TD></TR></TABLE>>,
        likec4_id="13bezyx",
        minlen=1,
        style=dashed];
    iphone [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders, the Field Agent app.</FONT></TD></TR></TABLE>>,
        likec4_id=iphone,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    appleapps -> iphone [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">on</FONT></TD></TR></TABLE>>,
        likec4_id="1fqt24l",
        style=dashed,
        weight=2];
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Captures things, makes the calls, presses the<BR/>buttons.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    iphone -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">in his pocket</FONT></TD></TR></TABLE>>,
        likec4_id=jh8v29,
        style=dashed];
    ingest -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">read by</FONT></TD></TR></TABLE>>,
        likec4_id="1xi1of8",
        style=dashed,
        weight=3];
    jt -> claude [arrowhead=normal,
        lhead=cluster_assistants,
        likec4_id=kw6wlv,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks</FONT></TD></TR></TABLE>>];
    jt -> reminders [arrowhead=normal,
        lhead=cluster_capture,
        likec4_id="19ws780",
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">jots things down</FONT></TD></TR></TABLE>>];
    triage -> para [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">files to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="1s5a7pg",
        style=dashed,
        weight=3];
    para -> reminders [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="1uvd8kr",
        style=dashed];
}
`;case`assistantsView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=assistantsView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_fieldagent {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FIELD AGENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=fieldAgent,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        relay [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home base</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node service on the Mac</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Passes each phone message to Claude or Grok,<BR/>streams the answer back, and keeps Mission<BR/>Control live from the vault.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.relay",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_assistants {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AI ASSISTANTS</B></FONT>>,
            likec4_depth=1,
            likec4_id=assistants,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        claude [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=assistants,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Claude Code</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">terminal tabs inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Main assistant. Builds and fixes the<BR/>machinery, runs the skills.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.claude",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        grok [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=assistants,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">terminal tabs inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Second assistant. Same vault, same skills,<BR/>same rules.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.grok",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        skills [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=assistants,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shared skills</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">System/Skills</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Written procedures both assistants follow:<BR/>triage, distill, lint, plain style.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.skills",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_capture {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CAPTURE</B></FONT>>,
            likec4_depth=1,
            likec4_id=capture,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        distill [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat distill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">session-distill skill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Boils a finished AI chat down to a few<BR/>lasting notes, then the chat can go.</FONT></TD></TR></TABLE>>,
            likec4_id="capture.distill",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_vault {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECOND BRAIN</B></FONT>>,
            likec4_depth=1,
            likec4_id=vault,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        triage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vault triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Claude or Grok skill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reads the in-tray and files each item where<BR/>it belongs.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.triage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        memory [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">System memory</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">What the assistants need to remember between<BR/>sessions.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.memory",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    iphone [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders, the Field Agent app.</FONT></TD></TR></TABLE>>,
        likec4_id=iphone,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Captures things, makes the calls, presses the<BR/>buttons.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    iphone -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">in his pocket</FONT></TD></TR></TABLE>>,
        likec4_id=jh8v29,
        minlen=0,
        style=dashed];
    jt -> claude [arrowhead=normal,
        lhead=cluster_assistants,
        likec4_id=kw6wlv,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks</FONT></TD></TR></TABLE>>];
    jt -> distill [arrowhead=normal,
        lhead=cluster_capture,
        likec4_id="19ws780",
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">jots things down</FONT></TD></TR></TABLE>>];
    relay -> claude [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id=vfor5b,
        style=dashed];
    relay -> grok [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id=g9mjl0,
        style=dashed];
    claude -> skills [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">follows</FONT></TD></TR></TABLE>>,
        likec4_id="1118y1e",
        style=dashed,
        weight=3];
    claude -> distill [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=ljwdrk,
        style=dashed];
    claude -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="124ncg1",
        style=dashed];
    grok -> skills [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">follows</FONT></TD></TR></TABLE>>,
        likec4_id="1vmpba1",
        style=dashed,
        weight=3];
    grok -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="14pbmay",
        style=dashed];
    skills -> memory [arrowhead=normal,
        likec4_id="150z0d4",
        ltail=cluster_assistants,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">remembers in</FONT></TD></TR></TABLE>>];
    triage -> memory [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">logs the run</FONT></TD></TR></TABLE>>,
        likec4_id=o1lhhj,
        minlen=0,
        style=dashed,
        weight=3];
}
`;case`fieldAgentView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=fieldAgentView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_vault {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECOND BRAIN</B></FONT>>,
            likec4_depth=1,
            likec4_id=vault,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        para [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Projects &amp; Areas</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Life admin: things with a finish line and<BR/>ongoing duties.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.para",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_schedulers {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCHEDULERS</B></FONT>>,
            likec4_depth=1,
            likec4_id=schedulers,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        calendar [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Calendar mirror</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies the calendar into the vault for<BR/>Mission Control.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.calendar",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_fieldagent {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FIELD AGENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=fieldAgent,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        mission [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mission Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">dashboard screen in the app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The front door. Shows today, mail, texts,<BR/>calendar, and what each project needs next,<BR/>updated live.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.mission",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        app [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Field Agent app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">SwiftUI · iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Two chats, Claude and Grok. Replies fill in<BR/>as they are written.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.app",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        tailnet [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Private network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Tailscale</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Links the phone to the Mac without opening<BR/>the home network to the internet.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.tailnet",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        relay [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home base</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node service on the Mac</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Passes each phone message to Claude or Grok,<BR/>streams the answer back, and keeps Mission<BR/>Control live from the vault.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.relay",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        approval [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Allow / Deny card</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">in the app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Before Claude edits a file or runs a command,<BR/>the phone buzzes and asks.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.approval",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_assistants {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AI ASSISTANTS</B></FONT>>,
            likec4_depth=1,
            likec4_id=assistants,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        claude [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Claude Code</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">terminal tabs inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Main assistant. Builds and fixes the<BR/>machinery, runs the skills.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.claude",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        grok [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">terminal tabs inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Second assistant. Same vault, same skills,<BR/>same rules.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.grok",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_mail {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EMAIL &amp; TEXTS</B></FONT>>,
            likec4_depth=1,
            likec4_id=mail,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        mailtriage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mail &amp; text triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">AI · once per Obsidian launch and when the</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Archives the noise and lists everything else<BR/>under Needs action.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.mailTriage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        fold [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Needs action list</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mission Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">One list per inbox. Tap a row to read it;<BR/>swipe or press to open, archive, delete,<BR/>triage, add to calendar, or respond.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.fold",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    iphone [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders, the Field Agent app.</FONT></TD></TR></TABLE>>,
        likec4_id=iphone,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Captures things, makes the calls, presses the<BR/>buttons.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    iphone -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">in his pocket</FONT></TD></TR></TABLE>>,
        likec4_id=jh8v29,
        minlen=0,
        style=dashed,
        weight=2];
    iphone -> app [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=gm29nv,
        style=dashed];
    jt -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks</FONT></TD></TR></TABLE>>,
        likec4_id=kyv4r1,
        style=dashed,
        weight=2];
    jt -> approval [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">taps</FONT></TD></TR></TABLE>>,
        likec4_id="1ri0eiu",
        style=dashed];
    jt -> claude [arrowhead=normal,
        lhead=cluster_assistants,
        likec4_id=kw6wlv,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks</FONT></TD></TR></TABLE>>];
    jt -> fold [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">presses buttons</FONT></TD></TR></TABLE>>,
        likec4_id="1623q6q",
        style=dashed];
    para -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">next actions</FONT></TD></TR></TABLE>>,
        likec4_id="4dett1",
        minlen=1,
        style=dashed];
    calendar -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">today’s events</FONT></TD></TR></TABLE>>,
        likec4_id="175c8gb",
        minlen=1,
        style=dashed];
    mission -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">button taps</FONT></TD></TR></TABLE>>,
        likec4_id=ul1urp,
        style=dashed];
    app -> tailnet [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">messages</FONT></TD></TR></TABLE>>,
        likec4_id=egnqis,
        style=dashed,
        weight=2];
    tailnet -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">carries</FONT></TD></TR></TABLE>>,
        likec4_id="1oda6km",
        style=dashed,
        weight=3];
    relay -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">live updates</FONT></TD></TR></TABLE>>,
        likec4_id=rsth,
        style=dashed];
    relay -> approval [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks first</FONT></TD></TR></TABLE>>,
        likec4_id="1jq5o6m",
        style=dashed];
    relay -> claude [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id=vfor5b,
        style=dashed];
    relay -> grok [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id=g9mjl0,
        minlen=1,
        style=dashed];
    relay -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">phone attaches, 3 h apart</FONT></TD></TR></TABLE>>,
        likec4_id="1e84vby",
        style=dashed];
    approval -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Allow or Deny</FONT></TD></TR></TABLE>>,
        likec4_id="1r3tmem",
        style=dashed];
    mailtriage -> fold [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id="1a803vy",
        minlen=0,
        style=dashed,
        weight=3];
    fold -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id=ortmoi,
        style=dashed];
    fold -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Email and Texts tabs</FONT></TD></TR></TABLE>>,
        likec4_id=g7iuol,
        style=dashed];
}
`;case`schedulersView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=schedulersView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_pi {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BRAINPI</B></FONT>>,
            likec4_depth=1,
            likec4_id=pi,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        heartbeat [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Heartbeat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">every 6 hours</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reports disk space and drive health so the<BR/>Health Report notices trouble.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.heartbeat",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_schedulers {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCHEDULERS</B></FONT>>,
            likec4_depth=1,
            likec4_id=schedulers,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        chiprelay [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=schedulers,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Phone button relay</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">iCloud · every 15 s</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">A button tapped on the phone is carried to<BR/>the Mac and run there.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.chipRelay",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        launchd [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mac background agents</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">launchd · 2 agents</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The unread mail list, and a doorbell that<BR/>wakes Obsidian when the phone asks.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.launchd",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        brainengine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=schedulers,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Brain Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Obsidian plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.brainEngine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        calendar [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=schedulers,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Calendar mirror</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies the calendar into the vault for<BR/>Mission Control.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.calendar",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        health [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=schedulers,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Health check</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">daily · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Looks for broken links, stale projects, and<BR/>quiet machines; writes the Health Report.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.health",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_mail {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EMAIL &amp; TEXTS</B></FONT>>,
            likec4_depth=1,
            likec4_id=mail,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        unread [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unread list</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every 5 min · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reads new mail straight from the mail<BR/>servers.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.unread",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        texts [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Texts mirror</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every 5 min · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies new iMessages into the vault. Login<BR/>codes are skipped.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.texts",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mailtriage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mail &amp; text triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">AI · once per Obsidian launch and when the</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Archives the noise and lists everything else<BR/>under Needs action.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.mailTriage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_scan {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCANNER</B></FONT>>,
            likec4_depth=1,
            likec4_id=scan,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ocr [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scan sync + OCR</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every minute · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Pulls each raw scan, makes the text<BR/>searchable, deletes the Pi copy once it<BR/>checks out.</FONT></TD></TR></TABLE>>,
            likec4_id="scan.ocr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_backups {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BACKUPS</B></FONT>>,
            likec4_depth=1,
            likec4_id=backups,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        machine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Machine snapshot</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies the Mac’s setup (scripts, schedules,<BR/>settings) into the vault. Secrets left out.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.machine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_printing {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>3D PRINTING</B></FONT>>,
            likec4_depth=1,
            likec4_id=printing,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        printlog [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Print log</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every minute · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Notes each start and finish in the model’s<BR/>folder, the print log, and a notification.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.printLog",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        publish [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gallery publish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every 5 min and right after a finish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Pulls the drafted card, fills in the details,<BR/>and pushes it to the site.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.publish",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_fieldagent {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FIELD AGENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=fieldAgent,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        mission [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mission Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">dashboard screen in the app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The front door. Shows today, mail, texts,<BR/>calendar, and what each project needs next,<BR/>updated live.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.mission",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    appleapps [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Apple Calendar &amp; Reminders</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">The calendar and the to-do lists on the<BR/>phone.</FONT></TD></TR></TABLE>>,
        likec4_id=appleApps,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    iphone [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders, the Field Agent app.</FONT></TD></TR></TABLE>>,
        likec4_id=iphone,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    appleapps -> iphone [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">on</FONT></TD></TR></TABLE>>,
        likec4_id="1fqt24l",
        minlen=0,
        style=dashed,
        weight=2];
    appleapps -> calendar [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">events</FONT></TD></TR></TABLE>>,
        likec4_id="1crjd60",
        style=dashed,
        weight=2];
    iphone -> chiprelay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">button taps</FONT></TD></TR></TABLE>>,
        likec4_id="1ez03r8",
        style=dashed];
    heartbeat -> health [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">disk and drive health</FONT></TD></TR></TABLE>>,
        likec4_id="1icdhpv",
        minlen=1,
        style=dashed];
    chiprelay -> brainengine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queues a button</FONT></TD></TR></TABLE>>,
        likec4_id=tluksj,
        style=dashed,
        weight=3];
    launchd -> unread [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id=x53wgn,
        minlen=1,
        style=dashed];
    brainengine -> calendar [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id="158w68",
        style=dashed,
        weight=3];
    brainengine -> health [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">daily</FONT></TD></TR></TABLE>>,
        likec4_id="1mex0um",
        style=dashed,
        weight=3];
    docs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Find Anything</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Mac · hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copies the text of every document in<BR/>Documents into the vault so one search finds<BR/>it.</FONT></TD></TR></TABLE>>,
        likec4_id=docs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    brainengine -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id="1ajlr5v",
        minlen=1,
        style=dashed,
        weight=2];
    brainengine -> texts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id="17cuvyp",
        style=dashed];
    brainengine -> ocr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id=u18t93,
        minlen=1,
        style=dashed];
    brainengine -> machine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id="1sm9pym",
        minlen=1,
        style=dashed];
    brainengine -> printlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id="1glf9gy",
        minlen=1,
        style=dashed];
    brainengine -> publish [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id="1kdzbby",
        minlen=1,
        style=dashed];
    brainengine -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">once per launch</FONT></TD></TR></TABLE>>,
        likec4_id=pf0ska,
        style=dashed];
    calendar -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">today’s events</FONT></TD></TR></TABLE>>,
        likec4_id="175c8gb",
        style=dashed];
    health -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Health Report</FONT></TD></TR></TABLE>>,
        likec4_id="1rlxt45",
        style=dashed];
    unread -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id=kti7qe,
        style=dashed,
        weight=3];
    texts -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new texts</FONT></TD></TR></TABLE>>,
        likec4_id=sgfa69,
        style=dashed,
        weight=3];
}
`;case`email`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=email,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_schedulers {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCHEDULERS</B></FONT>>,
            likec4_depth=1,
            likec4_id=schedulers,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        launchd [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mac background agents</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">launchd · 2 agents</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The unread mail list, and a doorbell that<BR/>wakes Obsidian when the phone asks.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.launchd",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        brainengine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Brain Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Obsidian plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.brainEngine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_mail {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EMAIL &amp; TEXTS</B></FONT>>,
            likec4_depth=1,
            likec4_id=mail,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        unread [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unread list</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every 5 min · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reads new mail straight from the mail<BR/>servers.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.unread",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        texts [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Texts mirror</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every 5 min · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies new iMessages into the vault. Login<BR/>codes are skipped.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.texts",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mailtriage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mail &amp; text triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">AI · once per Obsidian launch and when the</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Archives the noise and lists everything else<BR/>under Needs action.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.mailTriage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        fold [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Needs action list</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mission Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">One list per inbox. Tap a row to read it;<BR/>swipe or press to open, archive, delete,<BR/>triage, add to calendar, or respond.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.fold",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mailarchive [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mail archive</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">Documents/mail-archive</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">The raw copy of every thread JT chose to<BR/>keep.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.mailArchive",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_fieldagent {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FIELD AGENT</B></FONT>>,
            likec4_depth=1,
            likec4_id=fieldAgent,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        mission [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mission Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">dashboard screen in the app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The front door. Shows today, mail, texts,<BR/>calendar, and what each project needs next,<BR/>updated live.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.mission",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        relay [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home base</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node service on the Mac</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Passes each phone message to Claude or Grok,<BR/>streams the answer back, and keeps Mission<BR/>Control live from the vault.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.relay",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_vault {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECOND BRAIN</B></FONT>>,
            likec4_depth=1,
            likec4_id=vault,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        ingest [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">0 Ingest</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">The in-tray. Every capture lands here first.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.ingest",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Captures things, makes the calls, presses the<BR/>buttons.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> fold [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">presses buttons</FONT></TD></TR></TABLE>>,
        likec4_id="1623q6q",
        style=dashed];
    jt -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks</FONT></TD></TR></TABLE>>,
        likec4_id=kyv4r1,
        style=dashed,
        weight=2];
    gmail [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gmail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Main mailbox.</FONT></TD></TR></TABLE>>,
        likec4_id=gmail,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    gmail -> unread [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id="1m0p19m",
        style=dashed,
        weight=2];
    icloudmail [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iCloud Mail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Second mailbox.</FONT></TD></TR></TABLE>>,
        likec4_id=icloudMail,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    icloudmail -> unread [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id="16t8m9h",
        minlen=1,
        style=dashed,
        weight=2];
    launchd -> unread [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id=x53wgn,
        minlen=1,
        style=dashed];
    brainengine -> texts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id="17cuvyp",
        style=dashed];
    brainengine -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">once per launch</FONT></TD></TR></TABLE>>,
        likec4_id=pf0ska,
        style=dashed];
    unread -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id=kti7qe,
        style=dashed,
        weight=3];
    texts -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new texts</FONT></TD></TR></TABLE>>,
        likec4_id=sgfa69,
        style=dashed,
        weight=3];
    mailtriage -> fold [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id="1a803vy",
        style=dashed,
        weight=3];
    fold -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id=ortmoi,
        style=dashed];
    fold -> gmail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">archive, delete</FONT></TD></TR></TABLE>>,
        likec4_id=w7svaa,
        style=dashed,
        weight=2];
    fold -> mailarchive [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: raw copy</FONT></TD></TR></TABLE>>,
        likec4_id=z581mo,
        minlen=1,
        style=dashed,
        weight=3];
    fold -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Email and Texts tabs</FONT></TD></TR></TABLE>>,
        likec4_id=g7iuol,
        style=dashed];
    fold -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: note with full text</FONT></TD></TR></TABLE>>,
        likec4_id="7smwey",
        minlen=1,
        style=dashed];
    mission -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">button taps</FONT></TD></TR></TABLE>>,
        likec4_id=ul1urp,
        minlen=0,
        style=dashed];
    relay -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">phone attaches, 3 h apart</FONT></TD></TR></TABLE>>,
        likec4_id="1e84vby",
        style=dashed];
    relay -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">live updates</FONT></TD></TR></TABLE>>,
        likec4_id=rsth,
        minlen=0,
        style=dashed];
}
`;case`scanner`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=scanner,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_schedulers {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCHEDULERS</B></FONT>>,
            likec4_depth=1,
            likec4_id=schedulers,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        brainengine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Brain Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Obsidian plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.brainEngine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_scan {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCANNER</B></FONT>>,
            likec4_depth=1,
            likec4_id=scan,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        scanner [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group=scan,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Brother ADS-1350W</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Feeds paper. A blank sheet splits one<BR/>document from the next.</FONT></TD></TR></TABLE>>,
            likec4_id="scan.scanner",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        raw [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=scan,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Raw scans</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">brainpi · holding area</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Image-only PDFs waiting for the Mac.</FONT></TD></TR></TABLE>>,
            likec4_id="scan.raw",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        ocr [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=scan,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scan sync + OCR</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every minute · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Pulls each raw scan, makes the text<BR/>searchable, deletes the Pi copy once it<BR/>checks out.</FONT></TD></TR></TABLE>>,
            likec4_id="scan.ocr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        rename [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=scan,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Rename dialog</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">during triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Proposes a real file name from what the page<BR/>says. Ignore it to keep the old name.</FONT></TD></TR></TABLE>>,
            likec4_id="scan.rename",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        pdf [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=scan,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scanned PDFs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">Documents/scans/&lt;year&gt;</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">The keeper copy. Opens on the Mac and the<BR/>phone.</FONT></TD></TR></TABLE>>,
            likec4_id="scan.pdf",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_pi {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BRAINPI</B></FONT>>,
            likec4_depth=1,
            likec4_id=pi,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        scanwatch [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scan watcher</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">every 2 seconds</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Notices paper in the scanner and starts the<BR/>scan.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.scanWatch",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ocrfallback [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Backup OCR</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">every 2 min</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Makes a scan searchable itself if the Mac has<BR/>not picked it up within an hour.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.ocrFallback",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_vault {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECOND BRAIN</B></FONT>>,
            likec4_depth=1,
            likec4_id=vault,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ingest [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">0 Ingest</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">The in-tray. Every capture lands here first.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.ingest",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        triage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vault triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Claude or Grok skill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reads the in-tray and files each item where<BR/>it belongs.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.triage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        pdftext [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Document text</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">3 Resources/PDF Text</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Searchable text of every document, with links<BR/>that open the original.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.pdfText",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Captures things, makes the calls, presses the<BR/>buttons.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> scanner [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">loads paper</FONT></TD></TR></TABLE>>,
        likec4_id="1opfb0j",
        minlen=1,
        style=dashed,
        weight=2];
    brainengine -> ocr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id=u18t93,
        style=dashed];
    docs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Find Anything</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Mac · hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copies the text of every document in<BR/>Documents into the vault so one search finds<BR/>it.</FONT></TD></TR></TABLE>>,
        likec4_id=docs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    brainengine -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id="1ajlr5v",
        style=dashed,
        weight=2];
    scanner -> scanwatch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">paper detected</FONT></TD></TR></TABLE>>,
        likec4_id="17l8vw",
        style=dashed];
    scanner -> raw [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">scanned pages</FONT></TD></TR></TABLE>>,
        likec4_id=pbo16w,
        style=dashed,
        weight=3];
    scanwatch -> raw [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">saves pages</FONT></TD></TR></TABLE>>,
        likec4_id=tpuiu6,
        style=dashed];
    raw -> ocr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">pulled by</FONT></TD></TR></TABLE>>,
        likec4_id="1d47ptc",
        style=dashed,
        weight=3];
    raw -> ocrfallback [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">left an hour</FONT></TD></TR></TABLE>>,
        likec4_id="1i23cq",
        minlen=1,
        style=dashed];
    ocr -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one note per scan</FONT></TD></TR></TABLE>>,
        likec4_id=ibk0er,
        style=dashed];
    ocr -> pdf [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">searchable PDF</FONT></TD></TR></TABLE>>,
        likec4_id=xvnhom,
        style=dashed,
        weight=3];
    ingest -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">read by</FONT></TD></TR></TABLE>>,
        likec4_id="1xi1of8",
        minlen=0,
        style=dashed,
        weight=3];
    triage -> rename [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks JT</FONT></TD></TR></TABLE>>,
        likec4_id="1ifm7tf",
        style=dashed];
    rename -> pdf [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">renames</FONT></TD></TR></TABLE>>,
        likec4_id="1faprew",
        style=dashed,
        weight=3];
    pdf -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">indexed</FONT></TD></TR></TABLE>>,
        likec4_id=g4vvrm,
        style=dashed];
    docs -> pdftext [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">full text</FONT></TD></TR></TABLE>>,
        likec4_id="2v2oi2",
        minlen=1,
        style=dashed];
}
`;case`piView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=piView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_scan {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCANNER</B></FONT>>,
            likec4_depth=1,
            likec4_id=scan,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        scanner [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Brother ADS-1350W</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Feeds paper. A blank sheet splits one<BR/>document from the next.</FONT></TD></TR></TABLE>>,
            likec4_id="scan.scanner",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        raw [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Raw scans</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">brainpi · holding area</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Image-only PDFs waiting for the Mac.</FONT></TD></TR></TABLE>>,
            likec4_id="scan.raw",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_pi {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BRAINPI</B></FONT>>,
            likec4_depth=1,
            likec4_id=pi,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        mirror [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Nightly mirror</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">3:30 am</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies the Pi’s working files to a second<BR/>disk. Time Machine is skipped.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.mirror",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        camera [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=pi,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Camera relay</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">go2rtc</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Takes the printer camera and serves it as a<BR/>video stream.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.camera",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        scanwatch [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scan watcher</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">every 2 seconds</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Notices paper in the scanner and starts the<BR/>scan.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.scanWatch",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        tmshare [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Time Machine share</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">4 TB disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Where the Mac backs itself up, encrypted.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.tmShare",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        heartbeat [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Heartbeat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">every 6 hours</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reports disk space and drive health so the<BR/>Health Report notices trouble.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.heartbeat",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        tunnel [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=pi,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tunnel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">cloudflared</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Sends that stream out to the public site<BR/>through Cloudflare.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.tunnel",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        printwatch [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=pi,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Print watcher</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">listens to the printer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">When a print finishes, grabs a bed photo and<BR/>drafts a gallery card.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.printWatch",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ocrfallback [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Backup OCR</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">every 2 min</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Makes a scan searchable itself if the Mac has<BR/>not picked it up within an hour.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.ocrFallback",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_printing {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>3D PRINTING</B></FONT>>,
            likec4_depth=1,
            likec4_id=printing,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        printer [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Bambu P2S</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">The 3D printer. Reports its status and camera<BR/>over the home network.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.printer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        publish [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gallery publish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every 5 min and right after a finish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Pulls the drafted card, fills in the details,<BR/>and pushes it to the site.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.publish",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_backups {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BACKUPS</B></FONT>>,
            likec4_depth=1,
            likec4_id=backups,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        timemachine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Time Machine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">macOS</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Full Mac backup, history included, to the Pi.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.timeMachine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_schedulers {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCHEDULERS</B></FONT>>,
            likec4_depth=1,
            likec4_id=schedulers,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        health [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Health check</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">daily · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Looks for broken links, stale projects, and<BR/>quiet machines; writes the Health Report.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.health",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    scanner -> scanwatch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">paper detected</FONT></TD></TR></TABLE>>,
        likec4_id="17l8vw",
        style=dashed];
    scanner -> raw [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">scanned pages</FONT></TD></TR></TABLE>>,
        likec4_id=pbo16w,
        minlen=0,
        style=dashed,
        weight=3];
    printer -> camera [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera feed</FONT></TD></TR></TABLE>>,
        likec4_id="12w9twd",
        style=dashed];
    printer -> printwatch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">finished</FONT></TD></TR></TABLE>>,
        likec4_id="1w767z0",
        style=dashed];
    timemachine -> tmshare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">backs up to</FONT></TD></TR></TABLE>>,
        likec4_id="1g7yjd6",
        style=dashed,
        weight=3];
    camera -> tunnel [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">live video</FONT></TD></TR></TABLE>>,
        likec4_id="1hig7uj",
        style=dashed,
        weight=3];
    camera -> printwatch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">bed photo</FONT></TD></TR></TABLE>>,
        likec4_id=t4t2rv,
        style=dashed,
        weight=3];
    scanwatch -> raw [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">saves pages</FONT></TD></TR></TABLE>>,
        likec4_id=tpuiu6,
        style=dashed];
    heartbeat -> health [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">disk and drive health</FONT></TD></TR></TABLE>>,
        likec4_id="1icdhpv",
        style=dashed,
        weight=3];
    cloudflare [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cloudflare</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Carries the printer camera from home to the<BR/>public site without opening the home network.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudflare,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    tunnel -> cloudflare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera stream</FONT></TD></TR></TABLE>>,
        likec4_id=lu2el4,
        style=dashed];
    printwatch -> publish [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">drafted card</FONT></TD></TR></TABLE>>,
        likec4_id="1kbwyv7",
        minlen=1,
        style=dashed];
    raw -> ocrfallback [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">left an hour</FONT></TD></TR></TABLE>>,
        likec4_id="1i23cq",
        minlen=1,
        style=dashed];
    live [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Live camera</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">live.embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The video the /printing page plays.</FONT></TD></TR></TABLE>>,
        likec4_id="site.live",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cloudflare -> live [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">serves</FONT></TD></TR></TABLE>>,
        likec4_id=ooiss4,
        minlen=0,
        style=dashed];
}
`;case`printingView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=printingView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_schedulers {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCHEDULERS</B></FONT>>,
            likec4_depth=1,
            likec4_id=schedulers,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        brainengine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Brain Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Obsidian plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.brainEngine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_printing {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>3D PRINTING</B></FONT>>,
            likec4_depth=1,
            likec4_id=printing,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        printer [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group=printing,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Bambu P2S</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">The 3D printer. Reports its status and camera<BR/>over the home network.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.printer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        printlog [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=printing,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Print log</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every minute · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Notes each start and finish in the model’s<BR/>folder, the print log, and a notification.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.printLog",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        library [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=printing,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">3D printing library</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">Documents/3d_printing</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">One folder per model: files, notes, photos,<BR/>and its print history.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.library",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        publish [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gallery publish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every 5 min and right after a finish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Pulls the drafted card, fills in the details,<BR/>and pushes it to the site.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.publish",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_pi {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BRAINPI</B></FONT>>,
            likec4_depth=1,
            likec4_id=pi,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        camera [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=pi,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Camera relay</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">go2rtc</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Takes the printer camera and serves it as a<BR/>video stream.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.camera",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        printwatch [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=pi,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Print watcher</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">listens to the printer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">When a print finishes, grabs a bed photo and<BR/>drafts a gallery card.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.printWatch",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        tunnel [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=pi,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tunnel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">cloudflared</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Sends that stream out to the public site<BR/>through Cloudflare.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.tunnel",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_site {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EMBRY.DEV</B></FONT>>,
            likec4_depth=1,
            likec4_id=site,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        code [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site code</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">Astro · Projects/embry-dev-site</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Pages and the print gallery, as files in one<BR/>folder.</FONT></TD></TR></TABLE>>,
            likec4_id="site.code",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        live [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Live camera</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">live.embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The video the /printing page plays.</FONT></TD></TR></TABLE>>,
            likec4_id="site.live",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    brainengine -> printlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id="1glf9gy",
        style=dashed];
    brainengine -> publish [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id="1kdzbby",
        style=dashed];
    printer -> printlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">start and finish</FONT></TD></TR></TABLE>>,
        likec4_id=aeplg9,
        style=dashed,
        weight=3];
    printer -> camera [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera feed</FONT></TD></TR></TABLE>>,
        likec4_id="12w9twd",
        style=dashed];
    printer -> printwatch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">finished</FONT></TD></TR></TABLE>>,
        likec4_id="1w767z0",
        style=dashed];
    printlog -> library [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">writes history</FONT></TD></TR></TABLE>>,
        likec4_id=m70vls,
        minlen=1,
        style=dashed,
        weight=3];
    camera -> printwatch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">bed photo</FONT></TD></TR></TABLE>>,
        likec4_id=t4t2rv,
        style=dashed,
        weight=3];
    camera -> tunnel [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">live video</FONT></TD></TR></TABLE>>,
        likec4_id="1hig7uj",
        style=dashed,
        weight=3];
    printwatch -> publish [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">drafted card</FONT></TD></TR></TABLE>>,
        likec4_id="1kbwyv7",
        style=dashed];
    cloudflare [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cloudflare</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Carries the printer camera from home to the<BR/>public site without opening the home network.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudflare,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    tunnel -> cloudflare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera stream</FONT></TD></TR></TABLE>>,
        likec4_id=lu2el4,
        style=dashed];
    publish -> code [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gallery card</FONT></TD></TR></TABLE>>,
        likec4_id="16en5t0",
        minlen=1,
        style=dashed];
    cloudflare -> live [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">serves</FONT></TD></TR></TABLE>>,
        likec4_id=ooiss4,
        minlen=1,
        style=dashed];
}
`;case`siteView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=siteView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_printing {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>3D PRINTING</B></FONT>>,
            likec4_depth=1,
            likec4_id=printing,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        publish [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gallery publish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every 5 min and right after a finish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Pulls the drafted card, fills in the details,<BR/>and pushes it to the site.</FONT></TD></TR></TABLE>>,
            likec4_id="printing.publish",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_site {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EMBRY.DEV</B></FONT>>,
            likec4_depth=1,
            likec4_id=site,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        live [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=site,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Live camera</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">live.embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The video the /printing page plays.</FONT></TD></TR></TABLE>>,
            likec4_id="site.live",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        code [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=site,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site code</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">Astro · Projects/embry-dev-site</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Pages and the print gallery, as files in one<BR/>folder.</FONT></TD></TR></TABLE>>,
            likec4_id="site.code",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        deploy [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=site,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Build and publish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">GitHub Actions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Every push rebuilds the site and puts it live<BR/>within minutes.</FONT></TD></TR></TABLE>>,
            likec4_id="site.deploy",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        pages [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=site,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Public pages</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The studio, and /printing with the live<BR/>camera and gallery.</FONT></TD></TR></TABLE>>,
            likec4_id="site.pages",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Captures things, makes the calls, presses the<BR/>buttons.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    tunnel [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tunnel</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">cloudflared</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Sends that stream out to the public site<BR/>through Cloudflare.</FONT></TD></TR></TABLE>>,
        likec4_id="pi.tunnel",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cloudflare [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cloudflare</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Carries the printer camera from home to the<BR/>public site without opening the home network.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudflare,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    tunnel -> cloudflare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera stream</FONT></TD></TR></TABLE>>,
        likec4_id=lu2el4,
        minlen=0,
        style=dashed];
    cloudflare -> live [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">serves</FONT></TD></TR></TABLE>>,
        likec4_id=ooiss4,
        style=dashed];
    publish -> code [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gallery card</FONT></TD></TR></TABLE>>,
        likec4_id="16en5t0",
        minlen=1,
        style=dashed];
    live -> pages [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">plays on</FONT></TD></TR></TABLE>>,
        likec4_id="16ryrgc",
        style=dashed,
        weight=2];
    code -> deploy [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">push</FONT></TD></TR></TABLE>>,
        likec4_id="1g0lifg",
        style=dashed,
        weight=3];
    deploy -> pages [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">publishes</FONT></TD></TR></TABLE>>,
        likec4_id="573cdd",
        style=dashed,
        weight=2];
    github [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">GitHub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Holds the vault backup and the website code;<BR/>builds and hosts embry.dev.</FONT></TD></TR></TABLE>>,
        likec4_id=github,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    deploy -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs on</FONT></TD></TR></TABLE>>,
        likec4_id=kjlcap,
        minlen=1,
        style=dashed];
}
`;case`backupsView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=backupsView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_schedulers {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SCHEDULERS</B></FONT>>,
            likec4_depth=1,
            likec4_id=schedulers,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        brainengine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Brain Engine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Obsidian plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.brainEngine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_backups {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BACKUPS</B></FONT>>,
            likec4_depth=1,
            likec4_id=backups,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        machine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=backups,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Machine snapshot</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies the Mac’s setup (scripts, schedules,<BR/>settings) into the vault. Secrets left out.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.machine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        timemachine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=backups,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Time Machine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">macOS</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Full Mac backup, history included, to the Pi.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.timeMachine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        vaultpush [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=backups,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vault backup</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Commits the whole vault to a private GitHub<BR/>repo.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.vaultPush",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        usb [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group=backups,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">USB backup drive</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">A second copy that can leave the house.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.usb",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_vault {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SECOND BRAIN</B></FONT>>,
            likec4_depth=1,
            likec4_id=vault,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        memory [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">System memory</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">What the assistants need to remember between<BR/>sessions.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.memory",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_pi {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BRAINPI</B></FONT>>,
            likec4_depth=1,
            likec4_id=pi,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        tmshare [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Time Machine share</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">4 TB disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Where the Mac backs itself up, encrypted.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.tmShare",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        mirror [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Nightly mirror</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">3:30 am</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies the Pi’s working files to a second<BR/>disk. Time Machine is skipped.</FONT></TD></TR></TABLE>>,
            likec4_id="pi.mirror",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    brainengine -> machine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id="1sm9pym",
        style=dashed];
    brainengine -> vaultpush [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id="10qskq7",
        style=dashed];
    machine -> vaultpush [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one minute before</FONT></TD></TR></TABLE>>,
        likec4_id="14mfyh7",
        style=dashed,
        weight=3];
    machine -> memory [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">writes setup into</FONT></TD></TR></TABLE>>,
        likec4_id=o6n6y1,
        minlen=1,
        style=dashed];
    timemachine -> usb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">second copy</FONT></TD></TR></TABLE>>,
        likec4_id="11c86v2",
        minlen=1,
        style=dashed,
        weight=3];
    timemachine -> tmshare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">backs up to</FONT></TD></TR></TABLE>>,
        likec4_id="1g7yjd6",
        minlen=1,
        style=dashed];
    github [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">GitHub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Holds the vault backup and the website code;<BR/>builds and hosts embry.dev.</FONT></TD></TR></TABLE>>,
        likec4_id=github,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    vaultpush -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">private repo</FONT></TD></TR></TABLE>>,
        likec4_id=uer62g,
        minlen=1,
        style=dashed,
        weight=2];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3172pt" height="3115pt"
 viewBox="0.00 0.00 3172.00 3115.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3100.25)">
<!-- iphone -->
<g id="node1" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1298.38,-3085.2 975.62,-3085.2 975.62,-2905.2 1298.38,-2905.2 1298.38,-3085.2"/>
<text xml:space="preserve" text-anchor="start" x="1105.86" y="-2998.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="995.67" y="-2975.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders, the Field Agent app.</text>
</g>
<!-- jt -->
<g id="node2" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2066.38,-2762.4 1723.62,-2762.4 1723.62,-2582.4 2066.38,-2582.4 2066.38,-2762.4"/>
<text xml:space="preserve" text-anchor="start" x="1883.89" y="-2684.4" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="1743.68" y="-2661.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="1868.31" y="-2643.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- fieldagent -->
<g id="node3" class="node">
<title>fieldagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1570.22,-2439.6 1235.78,-2439.6 1235.78,-2259.6 1570.22,-2259.6 1570.22,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="1352.41" y="-2380.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Field Agent</text>
<text xml:space="preserve" text-anchor="start" x="1326.04" y="-2359.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">iPhone app · Swift · Node</text>
<text xml:space="preserve" text-anchor="start" x="1259.99" y="-2337.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">A custom iPhone app: the daily dashboard,</text>
<text xml:space="preserve" text-anchor="start" x="1255.84" y="-2319.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">plus chats with Claude and Grok on the Mac</text>
<text xml:space="preserve" text-anchor="start" x="1351.31" y="-2301.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">from anywhere.</text>
</g>
<!-- backups -->
<g id="node4" class="node">
<title>backups</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="448.23,-3085.2 103.77,-3085.2 103.77,-2905.2 448.23,-2905.2 448.23,-3085.2"/>
<text xml:space="preserve" text-anchor="start" x="237.65" y="-3017" font-family="Arial" font-size="20.00" fill="#eff6ff">Backups</text>
<text xml:space="preserve" text-anchor="start" x="207.73" y="-2996" font-family="Arial" font-size="13.00" fill="#bfdbfe">GitHub · Time Machine</text>
<text xml:space="preserve" text-anchor="start" x="123.83" y="-2974.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Hourly copy of the vault and machine setup to</text>
<text xml:space="preserve" text-anchor="start" x="135.94" y="-2956.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">GitHub; Time Machine for everything else.</text>
</g>
<!-- vault -->
<g id="node5" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1426.63,-1794 1101.37,-1794 1101.37,-1614 1426.63,-1614 1426.63,-1794"/>
<text xml:space="preserve" text-anchor="start" x="1203.96" y="-1725.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Second Brain</text>
<text xml:space="preserve" text-anchor="start" x="1222.81" y="-1704.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian vault</text>
<text xml:space="preserve" text-anchor="start" x="1121.42" y="-1683.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Where everything ends up: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1128.91" y="-1665.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">ideas, and the lists the dashboard reads.</text>
</g>
<!-- pi -->
<g id="node6" class="node">
<title>pi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="888.96,-1148.4 547.04,-1148.4 547.04,-968.4 888.96,-968.4 888.96,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="687.98" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">brainpi</text>
<text xml:space="preserve" text-anchor="start" x="680.43" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">Raspberry Pi</text>
<text xml:space="preserve" text-anchor="start" x="567.09" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Small always&#45;on box: runs the scanner, holds</text>
<text xml:space="preserve" text-anchor="start" x="575.03" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Time Machine, streams the printer camera.</text>
</g>
<!-- github -->
<g id="node7" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="921.95,-180 572.05,-180 572.05,0 921.95,0 921.95,-180"/>
<text xml:space="preserve" text-anchor="start" x="715.88" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="596.07" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the vault backup and the website code;</text>
<text xml:space="preserve" text-anchor="start" x="653.62" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">builds and hosts embry.dev.</text>
</g>
<!-- icloudmail -->
<g id="node8" class="node">
<title>icloudmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3142.02,-3085.2 2821.98,-3085.2 2821.98,-2905.2 3142.02,-2905.2 3142.02,-3085.2"/>
<text xml:space="preserve" text-anchor="start" x="2932.54" y="-2998.2" font-family="Arial" font-size="20.00" fill="#f8fafc">iCloud Mail</text>
<text xml:space="preserve" text-anchor="start" x="2926.55" y="-2975.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">Second mailbox.</text>
</g>
<!-- mail -->
<g id="node9" class="node">
<title>mail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2360.23,-2116.8 2005.77,-2116.8 2005.77,-1936.8 2360.23,-1936.8 2360.23,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="2121.32" y="-2038.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Email &amp; Texts</text>
<text xml:space="preserve" text-anchor="start" x="2025.83" y="-2015.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Turns two inboxes and iMessage into one short</text>
<text xml:space="preserve" text-anchor="start" x="2100.87" y="-1997.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">list of what needs action.</text>
</g>
<!-- assistants -->
<g id="node10" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1764.13,-2116.8 1443.87,-2116.8 1443.87,-1936.8 1764.13,-1936.8 1764.13,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="1547.31" y="-2048.6" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistants</text>
<text xml:space="preserve" text-anchor="start" x="1544.75" y="-2027.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="1463.92" y="-2006" font-family="Arial" font-size="15.00" fill="#bfdbfe">Two assistants share one vault, one set of</text>
<text xml:space="preserve" text-anchor="start" x="1525.22" y="-1988" font-family="Arial" font-size="15.00" fill="#bfdbfe">skills, and one memory.</text>
</g>
<!-- capture -->
<g id="node11" class="node">
<title>capture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1744.02,-1471.2 1423.98,-1471.2 1423.98,-1291.2 1744.02,-1291.2 1744.02,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1548.42" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Capture</text>
<text xml:space="preserve" text-anchor="start" x="1448.1" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every way a thought gets into the in&#45;tray.</text>
</g>
<!-- scan -->
<g id="node12" class="node">
<title>scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1043.9,-1471.2 676.1,-1471.2 676.1,-1291.2 1043.9,-1291.2 1043.9,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="822.75" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Scanner</text>
<text xml:space="preserve" text-anchor="start" x="696.16" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Paper in the scanner becomes a searchable PDF</text>
<text xml:space="preserve" text-anchor="start" x="802.46" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">and a note to file.</text>
</g>
<!-- docs -->
<g id="node13" class="node">
<title>docs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1377.72,-1148.4 1038.28,-1148.4 1038.28,-968.4 1377.72,-968.4 1377.72,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1146.85" y="-1089.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="1152.37" y="-1068.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1086.27" y="-1046.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="1058.33" y="-1028.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="1202.17" y="-1010.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- gmail -->
<g id="node14" class="node">
<title>gmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2448.02,-1794 2127.98,-1794 2127.98,-1614 2448.02,-1614 2448.02,-1794"/>
<text xml:space="preserve" text-anchor="start" x="2261.89" y="-1707" font-family="Arial" font-size="20.00" fill="#f8fafc">Gmail</text>
<text xml:space="preserve" text-anchor="start" x="2241.73" y="-1684" font-family="Arial" font-size="15.00" fill="#cbd5e1">Main mailbox.</text>
</g>
<!-- printing -->
<g id="node15" class="node">
<title>printing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1074.54,-825.6 753.46,-825.6 753.46,-645.6 1074.54,-645.6 1074.54,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="865.64" y="-757.4" font-family="Arial" font-size="20.00" fill="#eff6ff">3D printing</text>
<text xml:space="preserve" text-anchor="start" x="866.66" y="-736.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Bambu Lab P2S</text>
<text xml:space="preserve" text-anchor="start" x="773.52" y="-714.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Logs every print, streams the camera, and</text>
<text xml:space="preserve" text-anchor="start" x="811.03" y="-696.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">posts finished prints to the site.</text>
</g>
<!-- cloudflare -->
<g id="node16" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="643.77,-825.6 292.23,-825.6 292.23,-645.6 643.77,-645.6 643.77,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="422.42" y="-747.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="322.11" y="-724.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="316.24" y="-706.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- site -->
<g id="node17" class="node">
<title>site</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="907.02,-502.8 586.98,-502.8 586.98,-322.8 907.02,-322.8 907.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="700.32" y="-434.6" font-family="Arial" font-size="20.00" fill="#eff6ff">embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="668.6" y="-413.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Astro site on GitHub Pages</text>
<text xml:space="preserve" text-anchor="start" x="624.85" y="-392" font-family="Arial" font-size="15.00" fill="#bfdbfe">Public site: the studio, the live printer</text>
<text xml:space="preserve" text-anchor="start" x="649.87" y="-374" font-family="Arial" font-size="15.00" fill="#bfdbfe">camera, and the print gallery.</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge1" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1298.22,-2925.97C1420.24,-2874.33 1587.87,-2803.39 1714.4,-2749.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1715.15,-2752.37 1721.03,-2747.03 1713.1,-2747.53 1715.15,-2752.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1538.73,-2822.4 1538.73,-2845.2 1622.55,-2845.2 1622.55,-2822.4 1538.73,-2822.4"/>
<text xml:space="preserve" text-anchor="start" x="1541.73" y="-2828.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- iphone&#45;&gt;fieldagent -->
<g id="edge2" class="edge">
<title>iphone&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1173.71,-2905.39C1223.16,-2785.74 1310.88,-2573.48 1362.3,-2449.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1364.65,-2450.27 1365.09,-2442.33 1359.8,-2448.26 1364.65,-2450.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1305.09,-2661 1305.09,-2683.8 1338.33,-2683.8 1338.33,-2661 1305.09,-2661"/>
<text xml:space="preserve" text-anchor="start" x="1308.09" y="-2666.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- jt&#45;&gt;fieldagent -->
<g id="edge9" class="edge">
<title>jt&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1758.6,-2582.47C1693.01,-2539.7 1614.36,-2488.41 1547.72,-2444.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1549.49,-2442.98 1541.77,-2441.08 1546.62,-2447.38 1549.49,-2442.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1663.75,-2499.6 1663.75,-2522.4 1690.75,-2522.4 1690.75,-2499.6 1663.75,-2499.6"/>
<text xml:space="preserve" text-anchor="start" x="1666.75" y="-2507.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- jt&#45;&gt;mail -->
<g id="edge11" class="edge">
<title>jt&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2066.26,-2630.3C2159.52,-2597 2262.57,-2538.75 2296,-2439.6 2321.56,-2363.79 2313.99,-2337.55 2296,-2259.6 2285.35,-2213.46 2264.22,-2165.88 2243.08,-2125.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2245.43,-2124.77 2239.57,-2119.4 2240.81,-2127.25 2245.43,-2124.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2312.45,-2338.2 2312.45,-2361 2417.29,-2361 2417.29,-2338.2 2312.45,-2338.2"/>
<text xml:space="preserve" text-anchor="start" x="2315.45" y="-2344" font-family="Arial" font-size="14.00" fill="#c9c9c9">presses buttons</text>
</g>
<!-- jt&#45;&gt;assistants -->
<g id="edge7" class="edge">
<title>jt&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1905.62,-2582.55C1916.29,-2498.82 1934.41,-2370.06 1957.21,-2259.6 1964.79,-2222.91 1993.95,-2207.86 1973,-2176.8 1928.07,-2110.2 1847.83,-2073.37 1773.62,-2052.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1774.51,-2050.51 1766.59,-2051.12 1773.16,-2055.59 1774.51,-2050.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1957.21,-2338.2 1957.21,-2361 1992,-2361 1992,-2338.2 1957.21,-2338.2"/>
<text xml:space="preserve" text-anchor="start" x="1960.21" y="-2344" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;capture -->
<g id="edge8" class="edge">
<title>jt&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2066.15,-2643.72C2318.29,-2598.04 2760,-2497.1 2760,-2350.6 2760,-2350.6 2760,-2350.6 2760,-1703 2760,-1497.05 2080.21,-1418.83 1754.31,-1393.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1754.52,-1390.54 1746.84,-1392.58 1754.12,-1395.78 1754.52,-1390.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2760,-2015.4 2760,-2038.2 2866.39,-2038.2 2866.39,-2015.4 2760,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="2763" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
<!-- jt&#45;&gt;scan -->
<g id="edge10" class="edge">
<title>jt&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1723.82,-2657.87C1564.03,-2636.53 1328.65,-2581.49 1181,-2439.6 878.47,-2148.88 927.82,-1967.03 854,-1554 849.84,-1530.71 848.83,-1505.37 849.42,-1481.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="852.04,-1481.6 849.68,-1474.01 846.79,-1481.42 852.04,-1481.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="954.77,-2015.4 954.77,-2038.2 1033.93,-2038.2 1033.93,-2015.4 954.77,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="957.77" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">loads paper</text>
</g>
<!-- fieldagent&#45;&gt;mail -->
<g id="edge20" class="edge">
<title>fieldagent&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1452.04,-2259.96C1473.21,-2229.27 1500.65,-2197.43 1533.21,-2176.8 1642.86,-2107.36 1692.44,-2145.55 1819,-2116.8 1876.6,-2103.71 1939.13,-2088.72 1995.85,-2074.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1996.41,-2077.37 2003.06,-2073.04 1995.15,-2072.28 1996.41,-2077.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1533.21,-2176.8 1533.21,-2199.6 1698,-2199.6 1698,-2176.8 1533.21,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="1536.21" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">phone attaches, 3 h apart</text>
</g>
<!-- fieldagent&#45;&gt;assistants -->
<g id="edge19" class="edge">
<title>fieldagent&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1288.06,-2259.66C1267.73,-2233.46 1258.02,-2204.41 1275.81,-2176.8 1311.59,-2121.25 1373.7,-2086.18 1434.33,-2064.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1434.98,-2066.69 1441.18,-2061.72 1433.24,-2061.74 1434.98,-2066.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1275.81,-2176.8 1275.81,-2199.6 1418,-2199.6 1418,-2176.8 1275.81,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="1278.81" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- backups&#45;&gt;vault -->
<g id="edge3" class="edge">
<title>backups&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M412.79,-2905.33C482.19,-2848.58 552,-2767.99 552,-2673.4 552,-2673.4 552,-2673.4 552,-2025.8 552,-1790.03 880.56,-1726.54 1091.29,-1710.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1091.24,-1712.71 1098.53,-1709.53 1090.85,-1707.47 1091.24,-1712.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="552,-2338.2 552,-2361 659.16,-2361 659.16,-2338.2 552,-2338.2"/>
<text xml:space="preserve" text-anchor="start" x="555" y="-2344" font-family="Arial" font-size="14.00" fill="#c9c9c9">writes setup into</text>
</g>
<!-- backups&#45;&gt;pi -->
<g id="edge4" class="edge">
<title>backups&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M276,-2905.35C276,-2840.95 276,-2751.79 276,-2673.4 276,-2673.4 276,-2673.4 276,-1380.2 276,-1243.9 415.38,-1159.51 537.6,-1111.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="538.23,-1114.29 544.29,-1109.15 536.34,-1109.39 538.23,-1114.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="276,-2015.4 276,-2038.2 353.6,-2038.2 353.6,-2015.4 276,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="279" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">backs up to</text>
</g>
<!-- backups&#45;&gt;github -->
<g id="edge5" class="edge">
<title>backups&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M139.21,-2905.33C69.81,-2848.58 0,-2767.99 0,-2673.4 0,-2673.4 0,-2673.4 0,-411.8 0,-289.74 341.01,-186.17 562.22,-131.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="562.73,-134.41 569.39,-130.08 561.48,-129.31 562.73,-134.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="0,-1531.2 0,-1554 79.93,-1554 79.93,-1531.2 0,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="3" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">private repo</text>
</g>
<!-- vault&#45;&gt;fieldagent -->
<g id="edge15" class="edge">
<title>vault&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1237.02,-1793.73C1210.92,-1896.19 1183.05,-2067.56 1241,-2199.6 1249.31,-2218.54 1261.36,-2236.14 1275.18,-2252.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1273.12,-2253.74 1280.08,-2257.57 1277.02,-2250.23 1273.12,-2253.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1215.55,-2015.4 1215.55,-2038.2 1296.26,-2038.2 1296.26,-2015.4 1215.55,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="1218.55" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">next actions</text>
</g>
<!-- vault&#45;&gt;capture -->
<g id="edge14" class="edge">
<title>vault&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1395.25,-1614.01C1418.93,-1595.43 1442.55,-1575.05 1463,-1554 1484.7,-1531.66 1505.37,-1505.13 1523.3,-1479.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1525.42,-1481.23 1527.55,-1473.57 1521.11,-1478.23 1525.42,-1481.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1482.2,-1531.2 1482.2,-1554 1562.14,-1554 1562.14,-1531.2 1482.2,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1485.2" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- vault&#45;&gt;scan -->
<g id="edge16" class="edge">
<title>vault&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1101.73,-1674.44C1027.92,-1653.26 945.66,-1616.73 893.77,-1554 876.92,-1533.63 867.62,-1507.28 862.69,-1481.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="865.29,-1481.01 861.45,-1474.06 860.12,-1481.89 865.29,-1481.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="893.77,-1531.2 893.77,-1554 948,-1554 948,-1531.2 893.77,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="896.77" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
<!-- pi&#45;&gt;scan -->
<g id="edge29" class="edge">
<title>pi&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M757.32,-1148.23C775.67,-1189.68 797.56,-1239.14 816.41,-1281.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="813.97,-1282.7 819.41,-1288.5 818.77,-1280.58 813.97,-1282.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="793.26,-1208.4 793.26,-1231.2 877.86,-1231.2 877.86,-1208.4 793.26,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="796.26" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">saves pages</text>
</g>
<!-- pi&#45;&gt;printing -->
<g id="edge30" class="edge">
<title>pi&#45;&gt;printing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M687.16,-968.55C682.53,-940.72 683.04,-910.73 696.29,-885.6 708.41,-862.62 725.84,-842.51 745.65,-825.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="747.32,-827.15 751.34,-820.3 743.92,-823.15 747.32,-827.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="696.29,-885.6 696.29,-908.4 777,-908.4 777,-885.6 696.29,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="699.29" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">drafted card</text>
</g>
<!-- pi&#45;&gt;cloudflare -->
<g id="edge31" class="edge">
<title>pi&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M615.62,-968.71C596.54,-949.81 577.62,-929.23 561.64,-908.4 544.33,-885.83 528.33,-859.65 514.63,-834.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="517,-833.5 511.13,-828.15 512.38,-835.99 517,-833.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="561.64,-885.6 561.64,-908.4 661,-908.4 661,-885.6 561.64,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="564.64" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera stream</text>
</g>
<!-- icloudmail&#45;&gt;mail -->
<g id="edge6" class="edge">
<title>icloudmail&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2974.87,-2905.34C2962.64,-2800.05 2929.87,-2623.34 2843,-2499.6 2722.29,-2327.66 2518.2,-2195.92 2368.86,-2115.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2370.53,-2113.81 2362.67,-2112.6 2368.06,-2118.44 2370.53,-2113.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2857.6,-2499.6 2857.6,-2522.4 2918.84,-2522.4 2918.84,-2499.6 2857.6,-2499.6"/>
<text xml:space="preserve" text-anchor="start" x="2860.6" y="-2505.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- mail&#45;&gt;jt -->
<g id="edge24" class="edge">
<title>mail&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2149.72,-2116.71C2111.44,-2216.77 2045.2,-2383.5 1978,-2522.4 1969.87,-2539.2 1960.72,-2556.75 1951.53,-2573.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1949.48,-2571.96 1948.19,-2579.8 1954.09,-2574.48 1949.48,-2571.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2092.05,-2338.2 2092.05,-2361 2210.9,-2361 2210.9,-2338.2 2092.05,-2338.2"/>
<text xml:space="preserve" text-anchor="start" x="2095.05" y="-2344" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- mail&#45;&gt;fieldagent -->
<g id="edge26" class="edge">
<title>mail&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2005.91,-2100.63C1878.28,-2153.12 1706.79,-2223.66 1579.34,-2276.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1578.59,-2273.55 1572.65,-2278.83 1580.59,-2278.4 1578.59,-2273.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1816.39,-2176.8 1816.39,-2199.6 1953.11,-2199.6 1953.11,-2176.8 1816.39,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="1819.39" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Email and Texts tabs</text>
</g>
<!-- mail&#45;&gt;vault -->
<g id="edge25" class="edge">
<title>mail&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2005.81,-1963.95C1841.52,-1906.6 1598.63,-1821.81 1436.02,-1765.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1437.2,-1762.68 1429.26,-1762.69 1435.47,-1767.64 1437.2,-1762.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1751.06,-1854 1751.06,-1876.8 1946.94,-1876.8 1946.94,-1854 1751.06,-1854"/>
<text xml:space="preserve" text-anchor="start" x="1754.06" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
<!-- mail&#45;&gt;gmail -->
<g id="edge27" class="edge">
<title>mail&#45;&gt;gmail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2236.32,-1936.95C2246.12,-1917.65 2255.35,-1896.96 2262,-1876.8 2269.61,-1853.74 2275.01,-1828.2 2278.83,-1804.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2281.4,-1804.54 2279.92,-1796.73 2276.21,-1803.76 2281.4,-1804.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2268.61,-1854 2268.61,-1876.8 2365.67,-1876.8 2365.67,-1854 2268.61,-1854"/>
<text xml:space="preserve" text-anchor="start" x="2271.61" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">archive, delete</text>
</g>
<!-- assistants&#45;&gt;vault -->
<g id="edge12" class="edge">
<title>assistants&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1509.74,-1936.87C1464.97,-1894.62 1411.39,-1844.07 1365.7,-1800.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1367.6,-1799.14 1360.35,-1795.91 1364,-1802.96 1367.6,-1799.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1444.19,-1854 1444.19,-1876.8 1471.19,-1876.8 1471.19,-1854 1444.19,-1854"/>
<text xml:space="preserve" text-anchor="start" x="1447.19" y="-1862.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- assistants&#45;&gt;capture -->
<g id="edge13" class="edge">
<title>assistants&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1601.39,-1936.9C1598.46,-1837.89 1593.53,-1673.09 1589,-1531.2 1588.48,-1515.03 1587.92,-1497.86 1587.37,-1481.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1590,-1481.27 1587.12,-1473.86 1584.75,-1481.44 1590,-1481.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1597.1,-1692.6 1597.1,-1715.4 1630.33,-1715.4 1630.33,-1692.6 1597.1,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="1600.1" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- capture&#45;&gt;vault -->
<g id="edge17" class="edge">
<title>capture&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1481.44,-1471.11C1460.07,-1490.5 1437.99,-1511.2 1418.01,-1531.2 1394.27,-1554.95 1369.57,-1581.57 1347.07,-1606.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1345.23,-1604.76 1342.18,-1612.1 1349.14,-1608.25 1345.23,-1604.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1418.01,-1531.2 1418.01,-1554 1445,-1554 1445,-1531.2 1418.01,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1421.01" y="-1539.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- capture&#45;&gt;github -->
<g id="edge18" class="edge">
<title>capture&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1575.49,-1291.44C1570.05,-1227.09 1564,-1137.94 1564,-1059.4 1564,-1059.4 1564,-1059.4 1564,-411.8 1564,-276.88 1173.08,-175.12 932.06,-125.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="932.61,-122.63 924.73,-123.69 931.55,-127.77 932.61,-122.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1564,-724.2 1564,-747 1678.17,-747 1678.17,-724.2 1564,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1567" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">via the vault copy</text>
</g>
<!-- scan&#45;&gt;vault -->
<g id="edge21" class="edge">
<title>scan&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M962.42,-1471.13C994.26,-1498.18 1029.73,-1527.7 1062.92,-1554 1085.31,-1571.74 1109.46,-1590.2 1132.99,-1607.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1131.28,-1609.83 1138.86,-1612.22 1134.43,-1605.63 1131.28,-1609.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1062.92,-1531.2 1062.92,-1554 1181,-1554 1181,-1531.2 1062.92,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1065.92" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">one note per scan</text>
</g>
<!-- scan&#45;&gt;pi -->
<g id="edge23" class="edge">
<title>scan&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M741.7,-1291.54C725.15,-1273.52 710.56,-1253.24 701.01,-1231.2 691.26,-1208.7 689.47,-1183.04 691.56,-1158.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="694.17,-1158.85 692.36,-1151.12 688.95,-1158.29 694.17,-1158.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="701.01,-1208.4 701.01,-1231.2 728,-1231.2 728,-1208.4 701.01,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="704.01" y="-1216.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- scan&#45;&gt;docs -->
<g id="edge22" class="edge">
<title>scan&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M956.48,-1291.27C1002.3,-1249.02 1057.14,-1198.47 1103.91,-1155.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1105.68,-1157.29 1109.41,-1150.28 1102.12,-1153.43 1105.68,-1157.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1044.43,-1208.4 1044.43,-1231.2 1099.48,-1231.2 1099.48,-1208.4 1044.43,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1047.43" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">indexed</text>
</g>
<!-- docs&#45;&gt;vault -->
<g id="edge28" class="edge">
<title>docs&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1215.74,-1148.34C1226.13,-1267.8 1244.55,-1479.45 1255.38,-1603.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1252.74,-1603.93 1256.01,-1611.17 1257.97,-1603.47 1252.74,-1603.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1243.39,-1369.8 1243.39,-1392.6 1293.74,-1392.6 1293.74,-1369.8 1243.39,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="1246.39" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">full text</text>
</g>
<!-- gmail&#45;&gt;mail -->
<g id="edge32" class="edge">
<title>gmail&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2205.46,-1793.68C2192.45,-1812.36 2180.93,-1832.86 2173.76,-1854 2165.99,-1876.89 2164.06,-1902.48 2165.05,-1926.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2162.42,-1926.74 2165.47,-1934.08 2167.66,-1926.44 2162.42,-1926.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2173.76,-1854 2173.76,-1876.8 2235,-1876.8 2235,-1854 2173.76,-1854"/>
<text xml:space="preserve" text-anchor="start" x="2176.76" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- printing&#45;&gt;pi -->
<g id="edge33" class="edge">
<title>printing&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M859.73,-825.43C834.25,-867.14 803.8,-916.97 777.67,-959.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="775.59,-958.11 773.91,-965.88 780.07,-960.85 775.59,-958.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="821.88,-885.6 821.88,-908.4 848.87,-908.4 848.87,-885.6 821.88,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="824.88" y="-893.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- printing&#45;&gt;site -->
<g id="edge34" class="edge">
<title>printing&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M867.7,-645.67C846.07,-604.12 820.26,-554.53 798.07,-511.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="800.43,-510.76 794.64,-505.31 795.77,-513.18 800.43,-510.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="835.51,-562.8 835.51,-585.6 913.87,-585.6 913.87,-562.8 835.51,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="838.51" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">gallery card</text>
</g>
<!-- cloudflare&#45;&gt;site -->
<g id="edge35" class="edge">
<title>cloudflare&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M545.35,-645.67C581.86,-603.68 625.51,-553.49 662.85,-510.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="664.82,-512.3 667.76,-504.91 660.86,-508.85 664.82,-512.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="615.87,-562.8 615.87,-585.6 663.1,-585.6 663.1,-562.8 615.87,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="618.87" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">serves</text>
</g>
<!-- site&#45;&gt;github -->
<g id="edge36" class="edge">
<title>site&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M747,-322.87C747,-281.67 747,-232.56 747,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="749.63,-190.36 747,-182.86 744.38,-190.36 749.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="747,-240 747,-262.8 799.7,-262.8 799.7,-240 747,-240"/>
<text xml:space="preserve" text-anchor="start" x="750" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs on</text>
</g>
</g>
</svg>
`;case`secondBrain`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3807pt" height="2816pt"
 viewBox="0.00 0.00 3807.00 2816.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2800.85)">
<g id="clust1" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1652.72,-478 1652.72,-1339 3241.89,-1339 3241.89,-478 1652.72,-478"/>
<text xml:space="preserve" text-anchor="start" x="1660.72" y="-1326.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_fieldagent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3370.6,-2122 3370.6,-2387 3769.07,-2387 3769.07,-2122 3370.6,-2122"/>
<text xml:space="preserve" text-anchor="start" x="3378.6" y="-2374.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FIELD AGENT</text>
</g>
<!-- ingest -->
<g id="node1" class="node">
<title>ingest</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2023.28,-971.64C2023.28,-980.67 1951.56,-988 1863.26,-988 1774.97,-988 1703.24,-980.67 1703.24,-971.64 1703.24,-971.64 1703.24,-824.36 1703.24,-824.36 1703.24,-815.33 1774.97,-808 1863.26,-808 1951.56,-808 2023.28,-815.33 2023.28,-824.36 2023.28,-824.36 2023.28,-971.64 2023.28,-971.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2023.28,-971.64C2023.28,-962.61 1951.56,-955.27 1863.26,-955.27 1774.97,-955.27 1703.24,-962.61 1703.24,-971.64"/>
<text xml:space="preserve" text-anchor="start" x="1827.68" y="-901" font-family="Arial" font-size="20.00" fill="#eef2ff">0 Ingest</text>
<text xml:space="preserve" text-anchor="start" x="1723.62" y="-878" font-family="Arial" font-size="15.00" fill="#c7d2fe">The in&#45;tray. Every capture lands here first.</text>
</g>
<!-- pdftext -->
<g id="node2" class="node">
<title>pdftext</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2033.81,-681.64C2033.81,-690.67 1957.37,-698 1863.26,-698 1769.16,-698 1692.72,-690.67 1692.72,-681.64 1692.72,-681.64 1692.72,-534.36 1692.72,-534.36 1692.72,-525.33 1769.16,-518 1863.26,-518 1957.37,-518 2033.81,-525.33 2033.81,-534.36 2033.81,-534.36 2033.81,-681.64 2033.81,-681.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2033.81,-681.64C2033.81,-672.61 1957.37,-665.27 1863.26,-665.27 1769.16,-665.27 1692.72,-672.61 1692.72,-681.64"/>
<text xml:space="preserve" text-anchor="start" x="1798.79" y="-629.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Document text</text>
<text xml:space="preserve" text-anchor="start" x="1797.52" y="-608.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">3 Resources/PDF Text</text>
<text xml:space="preserve" text-anchor="start" x="1712.77" y="-587.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Searchable text of every document, with links</text>
<text xml:space="preserve" text-anchor="start" x="1791.13" y="-569.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">that open the original.</text>
</g>
<!-- triage -->
<g id="node3" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2637.9,-988 2309.31,-988 2309.31,-808 2637.9,-808 2637.9,-988"/>
<text xml:space="preserve" text-anchor="start" x="2423.02" y="-919.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault triage</text>
<text xml:space="preserve" text-anchor="start" x="2416.89" y="-898.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok skill</text>
<text xml:space="preserve" text-anchor="start" x="2329.37" y="-877.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="2439.42" y="-859.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- para -->
<g id="node4" class="node">
<title>para</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M3182.6,-971.64C3182.6,-980.67 3110.88,-988 3022.58,-988 2934.28,-988 2862.56,-980.67 2862.56,-971.64 2862.56,-971.64 2862.56,-824.36 2862.56,-824.36 2862.56,-815.33 2934.28,-808 3022.58,-808 3110.88,-808 3182.6,-815.33 3182.6,-824.36 3182.6,-824.36 3182.6,-971.64 3182.6,-971.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M3182.6,-971.64C3182.6,-962.61 3110.88,-955.27 3022.58,-955.27 2934.28,-955.27 2862.56,-962.61 2862.56,-971.64"/>
<text xml:space="preserve" text-anchor="start" x="2948.11" y="-910" font-family="Arial" font-size="20.00" fill="#eef2ff">Projects &amp; Areas</text>
<text xml:space="preserve" text-anchor="start" x="2894.17" y="-887" font-family="Arial" font-size="15.00" fill="#c7d2fe">Life admin: things with a finish line and</text>
<text xml:space="preserve" text-anchor="start" x="2971.71" y="-869" font-family="Arial" font-size="15.00" fill="#c7d2fe">ongoing duties.</text>
</g>
<!-- zettel -->
<g id="node5" class="node">
<title>zettel</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M3182.6,-681.64C3182.6,-690.67 3110.88,-698 3022.58,-698 2934.28,-698 2862.56,-690.67 2862.56,-681.64 2862.56,-681.64 2862.56,-534.36 2862.56,-534.36 2862.56,-525.33 2934.28,-518 3022.58,-518 3110.88,-518 3182.6,-525.33 3182.6,-534.36 3182.6,-534.36 3182.6,-681.64 3182.6,-681.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M3182.6,-681.64C3182.6,-672.61 3110.88,-665.27 3022.58,-665.27 2934.28,-665.27 2862.56,-672.61 2862.56,-681.64"/>
<text xml:space="preserve" text-anchor="start" x="2935.87" y="-620" font-family="Arial" font-size="20.00" fill="#eef2ff">Concepts &amp; Quotes</text>
<text xml:space="preserve" text-anchor="start" x="2885.4" y="-597" font-family="Arial" font-size="15.00" fill="#c7d2fe">Ideas worth keeping, one per note, linked</text>
<text xml:space="preserve" text-anchor="start" x="2992.98" y="-579" font-family="Arial" font-size="15.00" fill="#c7d2fe">together.</text>
</g>
<!-- memory -->
<g id="node6" class="node">
<title>memory</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M3201.89,-1261.64C3201.89,-1270.67 3121.52,-1278 3022.58,-1278 2923.64,-1278 2843.27,-1270.67 2843.27,-1261.64 2843.27,-1261.64 2843.27,-1114.36 2843.27,-1114.36 2843.27,-1105.33 2923.64,-1098 3022.58,-1098 3121.52,-1098 3201.89,-1105.33 3201.89,-1114.36 3201.89,-1114.36 3201.89,-1261.64 3201.89,-1261.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M3201.89,-1261.64C3201.89,-1252.61 3121.52,-1245.27 3022.58,-1245.27 2923.64,-1245.27 2843.27,-1252.61 2843.27,-1261.64"/>
<text xml:space="preserve" text-anchor="start" x="2950.35" y="-1200" font-family="Arial" font-size="20.00" fill="#eef2ff">System memory</text>
<text xml:space="preserve" text-anchor="start" x="2863.33" y="-1177" font-family="Arial" font-size="15.00" fill="#c7d2fe">What the assistants need to remember between</text>
<text xml:space="preserve" text-anchor="start" x="2991.32" y="-1159" font-family="Arial" font-size="15.00" fill="#c7d2fe">sessions.</text>
</g>
<!-- mission -->
<g id="node7" class="node">
<title>mission</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3737.07,-2334 3402.6,-2334 3402.6,-2154 3737.07,-2154 3737.07,-2334"/>
<text xml:space="preserve" text-anchor="start" x="3500.92" y="-2274.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mission Control</text>
<text xml:space="preserve" text-anchor="start" x="3487.44" y="-2253.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">dashboard screen in the app</text>
<text xml:space="preserve" text-anchor="start" x="3435.61" y="-2232.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The front door. Shows today, mail, texts,</text>
<text xml:space="preserve" text-anchor="start" x="3422.65" y="-2214.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">calendar, and what each project needs next,</text>
<text xml:space="preserve" text-anchor="start" x="3527.3" y="-2196.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">updated live.</text>
</g>
<!-- schedulers -->
<g id="node8" class="node">
<title>schedulers</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="341.09,-1383 0,-1383 0,-1203 341.09,-1203 341.09,-1383"/>
<text xml:space="preserve" text-anchor="start" x="120.52" y="-1314.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Schedulers</text>
<text xml:space="preserve" text-anchor="start" x="95.75" y="-1293.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian plugin · launchd</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1272.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Timers that refresh everything so nobody has</text>
<text xml:space="preserve" text-anchor="start" x="116.36" y="-1254.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">to press refresh.</text>
</g>
<!-- mail -->
<g id="node9" class="node">
<title>mail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="859.68,-1383 505.22,-1383 505.22,-1203 859.68,-1203 859.68,-1383"/>
<text xml:space="preserve" text-anchor="start" x="620.77" y="-1305" font-family="Arial" font-size="20.00" fill="#eff6ff">Email &amp; Texts</text>
<text xml:space="preserve" text-anchor="start" x="525.28" y="-1282" font-family="Arial" font-size="15.00" fill="#bfdbfe">Turns two inboxes and iMessage into one short</text>
<text xml:space="preserve" text-anchor="start" x="600.32" y="-1264" font-family="Arial" font-size="15.00" fill="#bfdbfe">list of what needs action.</text>
</g>
<!-- backups -->
<g id="node10" class="node">
<title>backups</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="854.68,-1673 510.22,-1673 510.22,-1493 854.68,-1493 854.68,-1673"/>
<text xml:space="preserve" text-anchor="start" x="644.1" y="-1604.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Backups</text>
<text xml:space="preserve" text-anchor="start" x="614.18" y="-1583.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">GitHub · Time Machine</text>
<text xml:space="preserve" text-anchor="start" x="530.28" y="-1562.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Hourly copy of the vault and machine setup to</text>
<text xml:space="preserve" text-anchor="start" x="542.39" y="-1544.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">GitHub; Time Machine for everything else.</text>
</g>
<!-- scan -->
<g id="node11" class="node">
<title>scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2047.16,-408 1679.37,-408 1679.37,-228 2047.16,-228 2047.16,-408"/>
<text xml:space="preserve" text-anchor="start" x="1826.02" y="-330" font-family="Arial" font-size="20.00" fill="#eff6ff">Scanner</text>
<text xml:space="preserve" text-anchor="start" x="1699.43" y="-307" font-family="Arial" font-size="15.00" fill="#bfdbfe">Paper in the scanner becomes a searchable PDF</text>
<text xml:space="preserve" text-anchor="start" x="1805.72" y="-289" font-family="Arial" font-size="15.00" fill="#bfdbfe">and a note to file.</text>
</g>
<!-- docs -->
<g id="node12" class="node">
<title>docs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2643.33,-408 2303.88,-408 2303.88,-228 2643.33,-228 2643.33,-408"/>
<text xml:space="preserve" text-anchor="start" x="2412.46" y="-348.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="2417.98" y="-327.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="2351.87" y="-306.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="2323.94" y="-288.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="2467.77" y="-270.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- jt -->
<g id="node13" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1441.29,-1383 1098.53,-1383 1098.53,-1203 1441.29,-1203 1441.29,-1383"/>
<text xml:space="preserve" text-anchor="start" x="1258.8" y="-1305" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="1118.59" y="-1282" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="1243.22" y="-1264" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- assistants -->
<g id="node14" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2023.4,-1559 1703.13,-1559 1703.13,-1379 2023.4,-1379 2023.4,-1559"/>
<text xml:space="preserve" text-anchor="start" x="1806.58" y="-1490.8" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistants</text>
<text xml:space="preserve" text-anchor="start" x="1804.01" y="-1469.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="1723.19" y="-1448.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Two assistants share one vault, one set of</text>
<text xml:space="preserve" text-anchor="start" x="1784.49" y="-1430.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">skills, and one memory.</text>
</g>
<!-- capture -->
<g id="node15" class="node">
<title>capture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2633.63,-1559 2313.59,-1559 2313.59,-1379 2633.63,-1379 2633.63,-1559"/>
<text xml:space="preserve" text-anchor="start" x="2438.03" y="-1472" font-family="Arial" font-size="20.00" fill="#eff6ff">Capture</text>
<text xml:space="preserve" text-anchor="start" x="2337.7" y="-1449" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every way a thought gets into the in&#45;tray.</text>
</g>
<!-- ingest&#45;&gt;triage -->
<g id="edge23" class="edge">
<title>ingest&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2024.1,-898C2108.59,-898 2212.41,-898 2298.88,-898"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2298.81,-900.63 2306.31,-898 2298.81,-895.38 2298.81,-900.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2149.17,-898 2149.17,-920.8 2201.87,-920.8 2201.87,-898 2149.17,-898"/>
<text xml:space="preserve" text-anchor="start" x="2152.17" y="-903.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">read by</text>
</g>
<!-- triage&#45;&gt;para -->
<g id="edge25" class="edge">
<title>triage&#45;&gt;para</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2637.61,-898C2704.99,-898 2783.13,-898 2851.26,-898"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2851.14,-900.63 2858.64,-898 2851.14,-895.38 2851.14,-900.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2706.45,-898 2706.45,-920.8 2780.15,-920.8 2780.15,-898 2706.45,-898"/>
<text xml:space="preserve" text-anchor="start" x="2709.45" y="-903.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">files to&#45;dos</text>
</g>
<!-- triage&#45;&gt;zettel -->
<g id="edge26" class="edge">
<title>triage&#45;&gt;zettel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2637.61,-811.58C2706.16,-775.23 2785.84,-732.99 2854.79,-696.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2855.94,-698.79 2861.34,-692.96 2853.48,-694.15 2855.94,-698.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2709.17,-770.36 2709.17,-793.16 2777.43,-793.16 2777.43,-770.36 2709.17,-770.36"/>
<text xml:space="preserve" text-anchor="start" x="2712.17" y="-776.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">files ideas</text>
</g>
<!-- triage&#45;&gt;memory -->
<g id="edge27" class="edge">
<title>triage&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2637.61,-984.42C2705.25,-1020.29 2783.74,-1061.9 2852.06,-1098.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2850.67,-1100.36 2858.52,-1101.55 2853.13,-1095.72 2850.67,-1100.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2703.72,-1060.36 2703.72,-1083.16 2782.88,-1083.16 2782.88,-1060.36 2703.72,-1060.36"/>
<text xml:space="preserve" text-anchor="start" x="2706.72" y="-1066.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">logs the run</text>
</g>
<!-- triage&#45;&gt;scan -->
<g id="edge24" class="edge">
<title>triage&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2449.31,-808.16C2418.57,-706.8 2354.92,-543.54 2243.88,-447.2 2191.37,-401.63 2122.05,-371.96 2057.03,-352.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2057.9,-350.22 2049.96,-350.66 2056.44,-355.27 2057.9,-350.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2148.41,-447.2 2148.41,-470 2202.64,-470 2202.64,-447.2 2148.41,-447.2"/>
<text xml:space="preserve" text-anchor="start" x="2151.41" y="-453" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
<!-- para&#45;&gt;mission -->
<g id="edge29" class="edge">
<title>para&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3180.68,-981.77C3203.72,-999.5 3225.24,-1019.94 3241.89,-1043 3493.66,-1391.86 3551.57,-1924.48 3564.87,-2144.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3562.23,-2143.91 3565.29,-2151.25 3567.47,-2143.61 3562.23,-2143.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3261.89,-1185.63 3261.89,-1208.43 3342.6,-1208.43 3342.6,-1185.63 3261.89,-1185.63"/>
<text xml:space="preserve" text-anchor="start" x="3264.89" y="-1191.43" font-family="Arial" font-size="14.00" fill="#c9c9c9">next actions</text>
</g>
<!-- para&#45;&gt;capture -->
<g id="edge28" class="edge">
<title>para&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2902.38,-985.57C2881.55,-1003.42 2860.92,-1022.92 2843.27,-1043 2731.8,-1169.8 2763.08,-1246.99 2643.33,-1366 2641.22,-1368.1 2639.06,-1370.17 2636.85,-1372.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2635.27,-1370.11 2631.44,-1377.07 2638.78,-1374.02 2635.27,-1370.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2703.33,-1292.55 2703.33,-1315.35 2783.27,-1315.35 2783.27,-1292.55 2703.33,-1292.55"/>
<text xml:space="preserve" text-anchor="start" x="2706.33" y="-1298.35" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- schedulers&#45;&gt;mission -->
<g id="edge5" class="edge">
<title>schedulers&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M182.74,-1382.74C225.03,-1701.9 387.69,-2763 681.45,-2763 681.45,-2763 681.45,-2763 3023.58,-2763 3264.56,-2763 3441.27,-2493.75 3521.27,-2343.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3523.59,-2344.35 3524.76,-2336.49 3518.95,-2341.9 3523.59,-2344.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1849.77,-2763 1849.77,-2785.8 1876.76,-2785.8 1876.76,-2763 1849.77,-2763"/>
<text xml:space="preserve" text-anchor="start" x="1852.77" y="-2771.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- schedulers&#45;&gt;mail -->
<g id="edge1" class="edge">
<title>schedulers&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M340.98,-1293C390.46,-1293 444.8,-1293 495.26,-1293"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="495.11,-1295.63 502.61,-1293 495.11,-1290.38 495.11,-1295.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="409.66,-1293 409.66,-1315.8 436.66,-1315.8 436.66,-1293 409.66,-1293"/>
<text xml:space="preserve" text-anchor="start" x="412.66" y="-1301.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- schedulers&#45;&gt;backups -->
<g id="edge2" class="edge">
<title>schedulers&#45;&gt;backups</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.74,-1382.97C388.29,-1416.27 454.83,-1454.11 514.16,-1487.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="512.79,-1490.1 520.61,-1491.52 515.39,-1485.53 512.79,-1490.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="401.09,-1446.7 401.09,-1469.5 445.22,-1469.5 445.22,-1446.7 401.09,-1446.7"/>
<text xml:space="preserve" text-anchor="start" x="404.09" y="-1452.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- schedulers&#45;&gt;scan -->
<g id="edge3" class="edge">
<title>schedulers&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M235.53,-1203.28C371.15,-1020.91 707.32,-608.48 1098.53,-422 1278.93,-336.01 1508.77,-314.95 1668.97,-312.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1668.93,-314.96 1676.4,-312.23 1668.86,-309.71 1668.93,-314.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="936.03,-520 936.03,-542.8 1022.18,-542.8 1022.18,-520 936.03,-520"/>
<text xml:space="preserve" text-anchor="start" x="939.03" y="-525.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- schedulers&#45;&gt;docs -->
<g id="edge4" class="edge">
<title>schedulers&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M186.82,-1203.11C239.13,-909.88 422.35,0 681.45,0 681.45,0 681.45,0 1864.26,0 2057.94,0 2250.88,-128.16 2365.97,-221.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2363.97,-223.51 2371.43,-226.23 2367.29,-219.45 2363.97,-223.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1247.84,0 1247.84,-22.8 1291.98,-22.8 1291.98,0 1247.84,0"/>
<text xml:space="preserve" text-anchor="start" x="1250.84" y="-5.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- mail&#45;&gt;ingest -->
<g id="edge7" class="edge">
<title>mail&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M732.63,-1203.14C841.64,-1014.63 1124.11,-581.74 1501.29,-418 1549.43,-397.1 1580.47,-382.78 1619.37,-418 1674.83,-468.21 1614.75,-688.54 1652.72,-753 1664.65,-773.26 1680.67,-791.36 1698.55,-807.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1696.64,-809.14 1704.03,-812.05 1700.07,-805.17 1696.64,-809.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1171.97,-700.48 1171.97,-723.28 1367.85,-723.28 1367.85,-700.48 1171.97,-700.48"/>
<text xml:space="preserve" text-anchor="start" x="1174.97" y="-706.28" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
<!-- mail&#45;&gt;mission -->
<g id="edge8" class="edge">
<title>mail&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M806.28,-1382.78C825.45,-1399.86 844.06,-1418.53 859.68,-1438 1111.06,-1751.38 867.16,-2244 1268.91,-2244 1268.91,-2244 1268.91,-2244 3023.58,-2244 3146.81,-2244 3285.7,-2244 3392.46,-2244"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3392.16,-2246.63 3399.66,-2244 3392.16,-2241.38 3392.16,-2246.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2107.16,-2244 2107.16,-2266.8 2243.88,-2266.8 2243.88,-2244 2107.16,-2244"/>
<text xml:space="preserve" text-anchor="start" x="2110.16" y="-2249.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Email and Texts tabs</text>
</g>
<!-- mail&#45;&gt;jt -->
<g id="edge6" class="edge">
<title>mail&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M859.47,-1224.95C879.53,-1219.33 899.88,-1214.53 919.68,-1211.2 971.77,-1202.44 986.47,-1202.23 1038.53,-1211.2 1055.05,-1214.05 1071.96,-1217.96 1088.74,-1222.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1087.76,-1225 1095.69,-1224.5 1089.18,-1219.94 1087.76,-1225"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="919.68,-1211.2 919.68,-1234 1038.53,-1234 1038.53,-1211.2 919.68,-1211.2"/>
<text xml:space="preserve" text-anchor="start" x="922.68" y="-1217" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- backups&#45;&gt;memory -->
<g id="edge9" class="edge">
<title>backups&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M690.63,-1673C706.95,-1823.95 758.9,-2130.88 919.68,-2327 1032.11,-2464.15 1091.57,-2520 1268.91,-2520 1268.91,-2520 1268.91,-2520 2474.61,-2520 2740.69,-2520 2942.47,-1598.96 3002.9,-1288.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3005.39,-1289.6 3004.24,-1281.74 3000.23,-1288.6 3005.39,-1289.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1809.69,-2520 1809.69,-2542.8 1916.84,-2542.8 1916.84,-2520 1809.69,-2520"/>
<text xml:space="preserve" text-anchor="start" x="1812.69" y="-2525.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">writes setup into</text>
</g>
<!-- scan&#45;&gt;ingest -->
<g id="edge19" class="edge">
<title>scan&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1698.31,-407.88C1681.69,-420.98 1666.05,-435.38 1652.72,-451 1576.09,-540.77 1499.93,-594.67 1556.22,-698.4 1586.45,-754.11 1639.71,-796.71 1693.47,-827.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1692,-830.13 1699.82,-831.56 1694.6,-825.57 1692,-830.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1501.29,-675.6 1501.29,-698.4 1619.37,-698.4 1619.37,-675.6 1501.29,-675.6"/>
<text xml:space="preserve" text-anchor="start" x="1504.29" y="-681.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">one note per scan</text>
</g>
<!-- scan&#45;&gt;docs -->
<g id="edge18" class="edge">
<title>scan&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2046.92,-307.34C2067.24,-306.46 2087.64,-305.71 2107.16,-305.2 2167.9,-303.6 2183.14,-303.5 2243.88,-305.2 2260.02,-305.65 2276.78,-306.28 2293.57,-307.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2293.39,-309.64 2301,-307.36 2293.63,-304.4 2293.39,-309.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2148,-305.2 2148,-328 2203.04,-328 2203.04,-305.2 2148,-305.2"/>
<text xml:space="preserve" text-anchor="start" x="2151" y="-311" font-family="Arial" font-size="14.00" fill="#c9c9c9">indexed</text>
</g>
<!-- docs&#45;&gt;pdftext -->
<g id="edge22" class="edge">
<title>docs&#45;&gt;pdftext</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2358.18,-407.92C2313.9,-441.55 2268.12,-474.61 2243.88,-487 2181.63,-518.81 2109.37,-544.37 2044.7,-563.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2044.16,-561.07 2037.71,-565.71 2045.65,-566.1 2044.16,-561.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2150.35,-541.71 2150.35,-564.51 2200.7,-564.51 2200.7,-541.71 2150.35,-541.71"/>
<text xml:space="preserve" text-anchor="start" x="2153.35" y="-547.51" font-family="Arial" font-size="14.00" fill="#c9c9c9">full text</text>
</g>
<!-- jt&#45;&gt;mission -->
<g id="edge14" class="edge">
<title>jt&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1296.75,-1382.75C1358.96,-1577.61 1536.53,-2022 1862.26,-2022 1862.26,-2022 1862.26,-2022 3023.58,-2022 3166.98,-2022 3316.98,-2088.68 3423.27,-2148.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3421.68,-2151.08 3429.5,-2152.52 3424.29,-2146.52 3421.68,-2151.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2448.82,-2022 2448.82,-2044.8 2498.39,-2044.8 2498.39,-2022 2448.82,-2022"/>
<text xml:space="preserve" text-anchor="start" x="2451.82" y="-2027.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks</text>
</g>
<!-- jt&#45;&gt;mail -->
<g id="edge10" class="edge">
<title>jt&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1098.63,-1293C1026.89,-1293 943.18,-1293 869.79,-1293"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="870.03,-1290.38 862.53,-1293 870.03,-1295.63 870.03,-1290.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="926.69,-1293 926.69,-1315.8 1031.52,-1315.8 1031.52,-1293 926.69,-1293"/>
<text xml:space="preserve" text-anchor="start" x="929.69" y="-1298.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">presses buttons</text>
</g>
<!-- jt&#45;&gt;scan -->
<g id="edge12" class="edge">
<title>jt&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1278.78,-1203.16C1295.92,-1053.41 1348.3,-749.41 1501.29,-548.2 1545.56,-489.97 1609.14,-442.49 1670.63,-406.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1671.92,-408.39 1677.08,-402.34 1669.28,-403.86 1671.92,-408.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1520.75,-548.2 1520.75,-571 1599.91,-571 1599.91,-548.2 1520.75,-548.2"/>
<text xml:space="preserve" text-anchor="start" x="1523.75" y="-554" font-family="Arial" font-size="14.00" fill="#c9c9c9">loads paper</text>
</g>
<!-- jt&#45;&gt;assistants -->
<g id="edge11" class="edge">
<title>jt&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1284.08,-1203.29C1319.6,-984.09 1427.81,-452.18 1619.37,-635.2 1678.14,-691.35 1608.19,-1298 1652.72,-1366 1663.79,-1382.9 1678.49,-1397.13 1694.99,-1409.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1693.07,-1410.94 1700.74,-1413.04 1696.06,-1406.62 1693.07,-1410.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1542.94,-635.2 1542.94,-658 1577.72,-658 1577.72,-635.2 1542.94,-635.2"/>
<text xml:space="preserve" text-anchor="start" x="1545.94" y="-641" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;capture -->
<g id="edge13" class="edge">
<title>jt&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1344.09,-1382.76C1413.97,-1460.75 1527.01,-1568.18 1652.72,-1614 1869.71,-1693.09 2135.2,-1616.98 2304.14,-1548.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2305.12,-1551.02 2311.07,-1545.76 2303.13,-1546.16 2305.12,-1551.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1810.07,-1647.68 1810.07,-1670.48 1916.46,-1670.48 1916.46,-1647.68 1810.07,-1647.68"/>
<text xml:space="preserve" text-anchor="start" x="1813.07" y="-1653.48" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
<!-- assistants&#45;&gt;triage -->
<g id="edge16" class="edge">
<title>assistants&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2023.05,-1383.04C2031.34,-1377.49 2039.43,-1371.79 2047.16,-1366 2190.47,-1258.62 2323.84,-1098.12 2401.79,-995.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2403.73,-997.55 2406.17,-989.99 2399.54,-994.38 2403.73,-997.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2158.9,-1311.93 2158.9,-1334.73 2192.14,-1334.73 2192.14,-1311.93 2158.9,-1311.93"/>
<text xml:space="preserve" text-anchor="start" x="2161.9" y="-1317.73" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- assistants&#45;&gt;memory -->
<g id="edge17" class="edge">
<title>assistants&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2023.03,-1551.59C2185.24,-1624.03 2441.29,-1704.79 2643.33,-1614 2791.25,-1547.52 2904.86,-1391.44 2967.43,-1287.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2969.62,-1289.26 2971.21,-1281.48 2965.11,-1286.57 2969.62,-1289.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2427.82,-1654.36 2427.82,-1677.16 2519.4,-1677.16 2519.4,-1654.36 2427.82,-1654.36"/>
<text xml:space="preserve" text-anchor="start" x="2430.82" y="-1660.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">remembers in</text>
</g>
<!-- assistants&#45;&gt;capture -->
<g id="edge15" class="edge">
<title>assistants&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2023.3,-1469C2109.4,-1469 2215.76,-1469 2303.39,-1469"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2303.18,-1471.63 2310.68,-1469 2303.18,-1466.38 2303.18,-1471.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2158.9,-1469 2158.9,-1491.8 2192.14,-1491.8 2192.14,-1469 2158.9,-1469"/>
<text xml:space="preserve" text-anchor="start" x="2161.9" y="-1474.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- capture&#45;&gt;ingest -->
<g id="edge20" class="edge">
<title>capture&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2314.8,-1379.14C2310.93,-1374.92 2307.27,-1370.54 2303.88,-1366 2241.98,-1283.17 2304.88,-1224.7 2243.88,-1141.2 2190.42,-1068.02 2107.66,-1011.28 2033.03,-971.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2034.5,-968.89 2026.65,-967.69 2032.04,-973.53 2034.5,-968.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2162.03,-1141.2 2162.03,-1164 2189.02,-1164 2189.02,-1141.2 2162.03,-1141.2"/>
<text xml:space="preserve" text-anchor="start" x="2165.03" y="-1149.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- capture&#45;&gt;triage -->
<g id="edge21" class="edge">
<title>capture&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2473.61,-1379.21C2473.61,-1275.63 2473.61,-1105.81 2473.61,-998.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2476.23,-998.37 2473.61,-990.87 2470.98,-998.37 2476.23,-998.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2428.58,-1172.1 2428.58,-1194.9 2489.83,-1194.9 2489.83,-1172.1 2428.58,-1172.1"/>
<text xml:space="preserve" text-anchor="start" x="2431.58" y="-1177.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">swept by</text>
</g>
</g>
</svg>
`;case`captureView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3048pt" height="1729pt"
 viewBox="0.00 0.00 3048.00 1729.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1714.05)">
<g id="clust1" class="cluster">
<title>cluster_assistants</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1560.59,-258 1560.59,-523 1944.63,-523 1944.63,-258 1560.59,-258"/>
<text xml:space="preserve" text-anchor="start" x="1568.59" y="-510.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AI ASSISTANTS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_capture</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="948.2,-250 948.2,-1691 1383.5,-1691 1383.5,-250 948.2,-250"/>
<text xml:space="preserve" text-anchor="start" x="956.2" y="-1678.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CAPTURE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1552.59,-535 1552.59,-836 3009.83,-836 3009.83,-535 1552.59,-535"/>
<text xml:space="preserve" text-anchor="start" x="1560.59" y="-823.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- claude -->
<g id="node1" class="node">
<title>claude</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1912.63,-470 1592.59,-470 1592.59,-290 1912.63,-290 1912.63,-470"/>
<text xml:space="preserve" text-anchor="start" x="1694.24" y="-401.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Claude Code</text>
<text xml:space="preserve" text-anchor="start" x="1669.16" y="-380.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="1635.47" y="-359.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Main assistant. Builds and fixes the</text>
<text xml:space="preserve" text-anchor="start" x="1666.33" y="-341.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">machinery, runs the skills.</text>
</g>
<!-- reminders -->
<g id="node2" class="node">
<title>reminders</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1343.5,-1050 988.2,-1050 988.2,-870 1343.5,-870 1343.5,-1050"/>
<text xml:space="preserve" text-anchor="start" x="1094.16" y="-981.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Reminders sync</text>
<text xml:space="preserve" text-anchor="start" x="1103.71" y="-960.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Remindian · two&#45;way</text>
<text xml:space="preserve" text-anchor="start" x="1008.26" y="-939.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Open to&#45;dos show up as phone reminders; new</text>
<text xml:space="preserve" text-anchor="start" x="1047.46" y="-921.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">reminders come back into the vault.</text>
</g>
<!-- cloudcapture -->
<g id="node3" class="node">
<title>cloudcapture</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1343.07,-1340 988.63,-1340 988.63,-1160 1343.07,-1160 1343.07,-1340"/>
<text xml:space="preserve" text-anchor="start" x="1100.8" y="-1271.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Phone capture</text>
<text xml:space="preserve" text-anchor="start" x="1062.5" y="-1250.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude on the phone · GitHub copy</text>
<text xml:space="preserve" text-anchor="start" x="1008.68" y="-1229.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Away from the Mac, Claude can add new notes</text>
<text xml:space="preserve" text-anchor="start" x="1106.24" y="-1211.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">to the in&#45;tray only.</text>
</g>
<!-- distill -->
<g id="node4" class="node">
<title>distill</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1325.87,-470 1005.83,-470 1005.83,-290 1325.87,-290 1325.87,-470"/>
<text xml:space="preserve" text-anchor="start" x="1119.72" y="-401.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Chat distill</text>
<text xml:space="preserve" text-anchor="start" x="1114.56" y="-380.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">session&#45;distill skill</text>
<text xml:space="preserve" text-anchor="start" x="1041.61" y="-359.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Boils a finished AI chat down to a few</text>
<text xml:space="preserve" text-anchor="start" x="1049.52" y="-341.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">lasting notes, then the chat can go.</text>
</g>
<!-- quick -->
<g id="node5" class="node">
<title>quick</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1339.74,-760 991.95,-760 991.95,-580 1339.74,-580 1339.74,-760"/>
<text xml:space="preserve" text-anchor="start" x="1104.15" y="-691.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Quick capture</text>
<text xml:space="preserve" text-anchor="start" x="1100.44" y="-670.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Obsidian ribbon button</text>
<text xml:space="preserve" text-anchor="start" x="1012.01" y="-649.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Type a thought, press save, it becomes a note</text>
<text xml:space="preserve" text-anchor="start" x="1122.5" y="-631.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">in the in&#45;tray.</text>
</g>
<!-- journal -->
<g id="node6" class="node">
<title>journal</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1325.87,-1630 1005.83,-1630 1005.83,-1450 1325.87,-1450 1325.87,-1630"/>
<text xml:space="preserve" text-anchor="start" x="1102.48" y="-1561.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Journal to&#45;dos</text>
<text xml:space="preserve" text-anchor="start" x="1138.02" y="-1540.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">daily note</text>
<text xml:space="preserve" text-anchor="start" x="1027.44" y="-1519.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">To&#45;dos jotted in the day’s journal. Triage</text>
<text xml:space="preserve" text-anchor="start" x="1060.8" y="-1501.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">moves them to the right project.</text>
</g>
<!-- ingest -->
<g id="node7" class="node">
<title>ingest</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1912.63,-758.64C1912.63,-767.67 1840.91,-775 1752.61,-775 1664.32,-775 1592.59,-767.67 1592.59,-758.64 1592.59,-758.64 1592.59,-611.36 1592.59,-611.36 1592.59,-602.33 1664.32,-595 1752.61,-595 1840.91,-595 1912.63,-602.33 1912.63,-611.36 1912.63,-611.36 1912.63,-758.64 1912.63,-758.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1912.63,-758.64C1912.63,-749.61 1840.91,-742.27 1752.61,-742.27 1664.32,-742.27 1592.59,-749.61 1592.59,-758.64"/>
<text xml:space="preserve" text-anchor="start" x="1717.03" y="-688" font-family="Arial" font-size="20.00" fill="#eef2ff">0 Ingest</text>
<text xml:space="preserve" text-anchor="start" x="1612.97" y="-665" font-family="Arial" font-size="15.00" fill="#c7d2fe">The in&#45;tray. Every capture lands here first.</text>
</g>
<!-- triage -->
<g id="node8" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2456.1,-775 2127.5,-775 2127.5,-595 2456.1,-595 2456.1,-775"/>
<text xml:space="preserve" text-anchor="start" x="2241.21" y="-706.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault triage</text>
<text xml:space="preserve" text-anchor="start" x="2235.09" y="-685.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok skill</text>
<text xml:space="preserve" text-anchor="start" x="2147.56" y="-664.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="2257.61" y="-646.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- para -->
<g id="node9" class="node">
<title>para</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2969.83,-758.64C2969.83,-767.67 2898.11,-775 2809.81,-775 2721.52,-775 2649.79,-767.67 2649.79,-758.64 2649.79,-758.64 2649.79,-611.36 2649.79,-611.36 2649.79,-602.33 2721.52,-595 2809.81,-595 2898.11,-595 2969.83,-602.33 2969.83,-611.36 2969.83,-611.36 2969.83,-758.64 2969.83,-758.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2969.83,-758.64C2969.83,-749.61 2898.11,-742.27 2809.81,-742.27 2721.52,-742.27 2649.79,-749.61 2649.79,-758.64"/>
<text xml:space="preserve" text-anchor="start" x="2735.34" y="-697" font-family="Arial" font-size="20.00" fill="#eef2ff">Projects &amp; Areas</text>
<text xml:space="preserve" text-anchor="start" x="2681.4" y="-674" font-family="Arial" font-size="15.00" fill="#c7d2fe">Life admin: things with a finish line and</text>
<text xml:space="preserve" text-anchor="start" x="2758.94" y="-656" font-family="Arial" font-size="15.00" fill="#c7d2fe">ongoing duties.</text>
</g>
<!-- appleapps -->
<g id="node10" class="node">
<title>appleapps</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-895 0,-895 0,-715 320.04,-715 320.04,-895"/>
<text xml:space="preserve" text-anchor="start" x="30.51" y="-817" font-family="Arial" font-size="20.00" fill="#f8fafc">Apple Calendar &amp; Reminders</text>
<text xml:space="preserve" text-anchor="start" x="32.02" y="-794" font-family="Arial" font-size="15.00" fill="#cbd5e1">The calendar and the to&#45;do lists on the</text>
<text xml:space="preserve" text-anchor="start" x="137.08" y="-776" font-family="Arial" font-size="15.00" fill="#cbd5e1">phone.</text>
</g>
<!-- github -->
<g id="node11" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1927.56,-1340 1577.67,-1340 1577.67,-1160 1927.56,-1160 1927.56,-1340"/>
<text xml:space="preserve" text-anchor="start" x="1721.49" y="-1262" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1601.68" y="-1239" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the vault backup and the website code;</text>
<text xml:space="preserve" text-anchor="start" x="1659.23" y="-1221" font-family="Arial" font-size="15.00" fill="#cbd5e1">builds and hosts embry.dev.</text>
</g>
<!-- iphone -->
<g id="node12" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="784.38,-740 461.61,-740 461.61,-560 784.38,-560 784.38,-740"/>
<text xml:space="preserve" text-anchor="start" x="591.86" y="-653" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="481.67" y="-630" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders, the Field Agent app.</text>
</g>
<!-- jt -->
<g id="node13" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1337.23,-180 994.47,-180 994.47,0 1337.23,0 1337.23,-180"/>
<text xml:space="preserve" text-anchor="start" x="1154.74" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="1014.53" y="-79" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="1139.16" y="-61" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- claude&#45;&gt;distill -->
<g id="edge1" class="edge">
<title>claude&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1592.78,-370.14C1567.66,-368.92 1541.96,-367.86 1517.67,-367.2 1466.94,-365.81 1454.22,-365.83 1403.5,-367.2 1381.65,-367.79 1358.68,-368.69 1336,-369.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1335.99,-367.11 1328.62,-370.09 1336.24,-372.35 1335.99,-367.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1443.96,-367.2 1443.96,-390 1477.2,-390 1477.2,-367.2 1443.96,-367.2"/>
<text xml:space="preserve" text-anchor="start" x="1446.96" y="-373" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- claude&#45;&gt;triage -->
<g id="edge2" class="edge">
<title>claude&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1911.88,-469.86C1978.52,-507.7 2056.13,-551.76 2123.7,-590.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2122.29,-592.34 2130.1,-593.76 2124.88,-587.77 2122.29,-592.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2010.92,-550.76 2010.92,-573.56 2044.15,-573.56 2044.15,-550.76 2010.92,-550.76"/>
<text xml:space="preserve" text-anchor="start" x="2013.92" y="-556.56" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- reminders&#45;&gt;ingest -->
<g id="edge4" class="edge">
<title>reminders&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1333.45,-870.07C1356.82,-858.06 1380.66,-846.13 1403.5,-835.2 1461.15,-807.61 1525.14,-779.35 1582.38,-754.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1583.22,-757.38 1589.09,-752.02 1581.16,-752.55 1583.22,-757.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1411.68,-835.2 1411.68,-858 1509.49,-858 1509.49,-835.2 1411.68,-835.2"/>
<text xml:space="preserve" text-anchor="start" x="1414.68" y="-841" font-family="Arial" font-size="14.00" fill="#c9c9c9">new reminders</text>
</g>
<!-- reminders&#45;&gt;appleapps -->
<g id="edge3" class="edge">
<title>reminders&#45;&gt;appleapps</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M988.27,-932.73C802.67,-904.08 512.77,-859.31 330.05,-831.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.61,-828.53 322.79,-829.98 329.81,-833.72 330.61,-828.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="583.02,-900.44 583.02,-923.24 662.97,-923.24 662.97,-900.44 583.02,-900.44"/>
<text xml:space="preserve" text-anchor="start" x="586.02" y="-906.24" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- cloudcapture&#45;&gt;ingest -->
<g id="edge6" class="edge">
<title>cloudcapture&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1312.63,-1160.11C1337.11,-1142.87 1361.64,-1124.18 1383.5,-1105 1496.02,-1006.21 1606.74,-873.77 1676.89,-784.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1678.93,-785.89 1681.48,-778.36 1674.79,-782.65 1678.93,-785.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1425.67,-1084.93 1425.67,-1107.73 1495.49,-1107.73 1495.49,-1084.93 1425.67,-1084.93"/>
<text xml:space="preserve" text-anchor="start" x="1428.67" y="-1090.73" font-family="Arial" font-size="14.00" fill="#c9c9c9">new notes</text>
</g>
<!-- cloudcapture&#45;&gt;github -->
<g id="edge5" class="edge">
<title>cloudcapture&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1342.69,-1250C1413.62,-1250 1495.49,-1250 1567.26,-1250"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1567.25,-1252.63 1574.75,-1250 1567.25,-1247.38 1567.25,-1252.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1403.5,-1250 1403.5,-1272.8 1517.67,-1272.8 1517.67,-1250 1403.5,-1250"/>
<text xml:space="preserve" text-anchor="start" x="1406.5" y="-1255.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">via the vault copy</text>
</g>
<!-- distill&#45;&gt;ingest -->
<g id="edge7" class="edge">
<title>distill&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1325.87,-462.94C1405.33,-504.38 1501.51,-554.55 1582.34,-596.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1581.07,-599.01 1588.93,-600.15 1583.49,-594.35 1581.07,-599.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1417.9,-559.82 1417.9,-582.62 1503.27,-582.62 1503.27,-559.82 1417.9,-559.82"/>
<text xml:space="preserve" text-anchor="start" x="1420.9" y="-565.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">atomic notes</text>
</g>
<!-- quick&#45;&gt;ingest -->
<g id="edge8" class="edge">
<title>quick&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1339.53,-674.43C1415.93,-676.39 1505.51,-678.69 1581.6,-680.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1581.18,-683.25 1588.74,-680.82 1581.31,-678.01 1581.18,-683.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1429.17,-678.84 1429.17,-701.64 1491.99,-701.64 1491.99,-678.84 1429.17,-678.84"/>
<text xml:space="preserve" text-anchor="start" x="1432.17" y="-684.64" font-family="Arial" font-size="14.00" fill="#c9c9c9">new note</text>
</g>
<!-- journal&#45;&gt;triage -->
<g id="edge9" class="edge">
<title>journal&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1325.78,-1550.14C1495.79,-1552.65 1765.13,-1531.67 1944.63,-1395 2145.75,-1241.88 2236.72,-941.16 2271.89,-784.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2274.41,-785.54 2273.47,-777.65 2269.28,-784.41 2274.41,-785.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1721.99,-1536.54 1721.99,-1559.34 1783.24,-1559.34 1783.24,-1536.54 1721.99,-1536.54"/>
<text xml:space="preserve" text-anchor="start" x="1724.99" y="-1542.34" font-family="Arial" font-size="14.00" fill="#c9c9c9">swept by</text>
</g>
<!-- ingest&#45;&gt;triage -->
<g id="edge12" class="edge">
<title>ingest&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1913.33,-685C1977.48,-685 2051.59,-685 2117.08,-685"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2116.98,-687.63 2124.48,-685 2116.98,-682.38 2116.98,-687.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2001.18,-685 2001.18,-707.8 2053.88,-707.8 2053.88,-685 2001.18,-685"/>
<text xml:space="preserve" text-anchor="start" x="2004.18" y="-690.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">read by</text>
</g>
<!-- triage&#45;&gt;para -->
<g id="edge15" class="edge">
<title>triage&#45;&gt;para</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2456.07,-685C2514.15,-685 2579.66,-685 2638.32,-685"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2638.28,-687.63 2645.78,-685 2638.28,-682.38 2638.28,-687.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2516.1,-685 2516.1,-707.8 2589.79,-707.8 2589.79,-685 2516.1,-685"/>
<text xml:space="preserve" text-anchor="start" x="2519.1" y="-690.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">files to&#45;dos</text>
</g>
<!-- para&#45;&gt;reminders -->
<g id="edge16" class="edge">
<title>para&#45;&gt;reminders</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2648.82,-762.24C2589.55,-787.77 2520.96,-813.76 2456.1,-830 2072.28,-926.07 1607.33,-951.5 1353.88,-958"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1353.93,-955.37 1346.49,-958.18 1354.06,-960.62 1353.93,-955.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1987.56,-911.86 1987.56,-934.66 2067.5,-934.66 2067.5,-911.86 1987.56,-911.86"/>
<text xml:space="preserve" text-anchor="start" x="1990.56" y="-917.66" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- appleapps&#45;&gt;iphone -->
<g id="edge10" class="edge">
<title>appleapps&#45;&gt;iphone</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.98,-751.55C362.58,-737.23 408.8,-721.69 451.97,-707.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="452.57,-709.74 458.84,-704.86 450.89,-704.76 452.57,-709.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="380.04,-727.5 380.04,-750.3 401.61,-750.3 401.61,-727.5 380.04,-727.5"/>
<text xml:space="preserve" text-anchor="start" x="383.04" y="-733.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">on</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge11" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M678.1,-560.08C736.61,-467.89 836.61,-324.07 948.2,-223 962.55,-210.01 978.33,-197.56 994.65,-185.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="996.14,-188.02 1000.75,-181.55 993.11,-183.73 996.14,-188.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="844.38,-328.83 844.38,-351.63 928.2,-351.63 928.2,-328.83 844.38,-328.83"/>
<text xml:space="preserve" text-anchor="start" x="847.38" y="-334.63" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- jt&#45;&gt;claude -->
<g id="edge13" class="edge">
<title>jt&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1337.17,-174.46C1404.17,-207.69 1481.6,-246.09 1551.26,-280.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1550,-282.94 1557.88,-283.92 1552.33,-278.24 1550,-282.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1413.98,-207.01 1413.98,-229.81 1448.77,-229.81 1448.77,-207.01 1413.98,-207.01"/>
<text xml:space="preserve" text-anchor="start" x="1416.98" y="-212.81" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;reminders -->
<g id="edge14" class="edge">
<title>jt&#45;&gt;reminders</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M994.75,-156.88C943.84,-185.93 894.23,-225.58 866.29,-278 765.52,-467.04 765.52,-570.96 866.29,-760 884.18,-793.56 910.47,-822.46 940.16,-847.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="938.36,-848.93 945.85,-851.6 941.66,-844.85 938.36,-848.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="685.86,-464.81 685.86,-487.61 792.25,-487.61 792.25,-464.81 685.86,-464.81"/>
<text xml:space="preserve" text-anchor="start" x="688.86" y="-470.61" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
</g>
</svg>
`;case`assistantsView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2036pt" height="942pt"
 viewBox="0.00 0.00 2036.00 942.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 927.05)">
<g id="clust1" class="cluster">
<title>cluster_fieldagent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-627 8,-892 435.63,-892 435.63,-627 8,-627"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-879.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FIELD AGENT</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_assistants</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="625.82,-329 625.82,-900 1518.22,-900 1518.22,-329 625.82,-329"/>
<text xml:space="preserve" text-anchor="start" x="633.82" y="-887.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AI ASSISTANTS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_capture</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1126.18,-8 1126.18,-273 1510.22,-273 1510.22,-8 1126.18,-8"/>
<text xml:space="preserve" text-anchor="start" x="1134.18" y="-260.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CAPTURE</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1559.22,-310 1559.22,-904 1997.83,-904 1997.83,-310 1559.22,-310"/>
<text xml:space="preserve" text-anchor="start" x="1567.22" y="-891.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- relay -->
<g id="node1" class="node">
<title>relay</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="403.63,-839 40,-839 40,-659 403.63,-659 403.63,-839"/>
<text xml:space="preserve" text-anchor="start" x="170.68" y="-779.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home base</text>
<text xml:space="preserve" text-anchor="start" x="149.92" y="-758.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node service on the Mac</text>
<text xml:space="preserve" text-anchor="start" x="60.06" y="-737.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Passes each phone message to Claude or Grok,</text>
<text xml:space="preserve" text-anchor="start" x="72.16" y="-719.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">streams the answer back, and keeps Mission</text>
<text xml:space="preserve" text-anchor="start" x="134.7" y="-701.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Control live from the vault.</text>
</g>
<!-- claude -->
<g id="node2" class="node">
<title>claude</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="987.63,-549 667.59,-549 667.59,-369 987.63,-369 987.63,-549"/>
<text xml:space="preserve" text-anchor="start" x="769.23" y="-480.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Claude Code</text>
<text xml:space="preserve" text-anchor="start" x="744.15" y="-459.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="710.46" y="-438.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Main assistant. Builds and fixes the</text>
<text xml:space="preserve" text-anchor="start" x="741.33" y="-420.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">machinery, runs the skills.</text>
</g>
<!-- grok -->
<g id="node3" class="node">
<title>grok</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="989.39,-839 665.82,-839 665.82,-659 989.39,-659 989.39,-839"/>
<text xml:space="preserve" text-anchor="start" x="805.94" y="-770.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Grok</text>
<text xml:space="preserve" text-anchor="start" x="744.15" y="-749.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="685.88" y="-728.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Second assistant. Same vault, same skills,</text>
<text xml:space="preserve" text-anchor="start" x="788.84" y="-710.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">same rules.</text>
</g>
<!-- skills -->
<g id="node4" class="node">
<title>skills</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1478.22,-736.64C1478.22,-745.67 1406.5,-753 1318.2,-753 1229.91,-753 1158.18,-745.67 1158.18,-736.64 1158.18,-736.64 1158.18,-589.36 1158.18,-589.36 1158.18,-580.33 1229.91,-573 1318.2,-573 1406.5,-573 1478.22,-580.33 1478.22,-589.36 1478.22,-589.36 1478.22,-736.64 1478.22,-736.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1478.22,-736.64C1478.22,-727.61 1406.5,-720.27 1318.2,-720.27 1229.91,-720.27 1158.18,-727.61 1158.18,-736.64"/>
<text xml:space="preserve" text-anchor="start" x="1261.51" y="-684.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Shared skills</text>
<text xml:space="preserve" text-anchor="start" x="1279.56" y="-663.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">System/Skills</text>
<text xml:space="preserve" text-anchor="start" x="1179.39" y="-642.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Written procedures both assistants follow:</text>
<text xml:space="preserve" text-anchor="start" x="1225.25" y="-624.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">triage, distill, lint, plain style.</text>
</g>
<!-- distill -->
<g id="node5" class="node">
<title>distill</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1478.22,-220 1158.18,-220 1158.18,-40 1478.22,-40 1478.22,-220"/>
<text xml:space="preserve" text-anchor="start" x="1272.07" y="-151.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Chat distill</text>
<text xml:space="preserve" text-anchor="start" x="1266.91" y="-130.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">session&#45;distill skill</text>
<text xml:space="preserve" text-anchor="start" x="1193.96" y="-109.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Boils a finished AI chat down to a few</text>
<text xml:space="preserve" text-anchor="start" x="1201.87" y="-91.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">lasting notes, then the chat can go.</text>
</g>
<!-- triage -->
<g id="node6" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1942.82,-530 1614.23,-530 1614.23,-350 1942.82,-350 1942.82,-530"/>
<text xml:space="preserve" text-anchor="start" x="1727.94" y="-461.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault triage</text>
<text xml:space="preserve" text-anchor="start" x="1721.82" y="-440.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok skill</text>
<text xml:space="preserve" text-anchor="start" x="1634.29" y="-419.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="1744.34" y="-401.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- memory -->
<g id="node7" class="node">
<title>memory</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1957.83,-826.64C1957.83,-835.67 1877.47,-843 1778.53,-843 1679.59,-843 1599.22,-835.67 1599.22,-826.64 1599.22,-826.64 1599.22,-679.36 1599.22,-679.36 1599.22,-670.33 1679.59,-663 1778.53,-663 1877.47,-663 1957.83,-670.33 1957.83,-679.36 1957.83,-679.36 1957.83,-826.64 1957.83,-826.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1957.83,-826.64C1957.83,-817.61 1877.47,-810.27 1778.53,-810.27 1679.59,-810.27 1599.22,-817.61 1599.22,-826.64"/>
<text xml:space="preserve" text-anchor="start" x="1706.3" y="-765" font-family="Arial" font-size="20.00" fill="#eef2ff">System memory</text>
<text xml:space="preserve" text-anchor="start" x="1619.28" y="-742" font-family="Arial" font-size="15.00" fill="#c7d2fe">What the assistants need to remember between</text>
<text xml:space="preserve" text-anchor="start" x="1747.27" y="-724" font-family="Arial" font-size="15.00" fill="#c7d2fe">sessions.</text>
</g>
<!-- iphone -->
<g id="node8" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="383.2,-549 60.43,-549 60.43,-369 383.2,-369 383.2,-549"/>
<text xml:space="preserve" text-anchor="start" x="190.68" y="-462" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="80.49" y="-439" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders, the Field Agent app.</text>
</g>
<!-- jt -->
<g id="node9" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="393.19,-236 50.44,-236 50.44,-56 393.19,-56 393.19,-236"/>
<text xml:space="preserve" text-anchor="start" x="210.71" y="-158" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="70.49" y="-135" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="195.13" y="-117" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- relay&#45;&gt;claude -->
<g id="edge4" class="edge">
<title>relay&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M403.56,-662.19C484.44,-623.34 579.22,-577.82 658.54,-539.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="659.29,-542.27 664.91,-536.66 657.02,-537.54 659.29,-542.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="463.63,-629.97 463.63,-652.77 605.82,-652.77 605.82,-629.97 463.63,-629.97"/>
<text xml:space="preserve" text-anchor="start" x="466.63" y="-635.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- relay&#45;&gt;grok -->
<g id="edge5" class="edge">
<title>relay&#45;&gt;grok</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M403.56,-749C483.36,-749 576.7,-749 655.37,-749"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="655.35,-751.63 662.85,-749 655.35,-746.38 655.35,-751.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="463.63,-749 463.63,-771.8 605.82,-771.8 605.82,-749 463.63,-749"/>
<text xml:space="preserve" text-anchor="start" x="466.63" y="-754.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- claude&#45;&gt;skills -->
<g id="edge6" class="edge">
<title>claude&#45;&gt;skills</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M987.58,-525.37C1038.84,-546.78 1095.85,-570.58 1147.84,-592.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1146.76,-594.68 1154.69,-595.15 1148.78,-589.84 1146.76,-594.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1049.39,-567.12 1049.39,-589.92 1098.18,-589.92 1098.18,-567.12 1049.39,-567.12"/>
<text xml:space="preserve" text-anchor="start" x="1052.39" y="-572.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">follows</text>
</g>
<!-- claude&#45;&gt;distill -->
<g id="edge7" class="edge">
<title>claude&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M962.12,-369.1C1028.23,-324.58 1108.08,-270.81 1175.3,-225.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1176.59,-227.85 1181.34,-221.48 1173.65,-223.49 1176.59,-227.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1057.17,-304.36 1057.17,-327.16 1090.4,-327.16 1090.4,-304.36 1057.17,-304.36"/>
<text xml:space="preserve" text-anchor="start" x="1060.17" y="-310.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- claude&#45;&gt;triage -->
<g id="edge8" class="edge">
<title>claude&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M987.43,-455.82C1158.01,-452.4 1428.21,-446.99 1604.2,-443.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1604.13,-446.1 1611.58,-443.32 1604.02,-440.85 1604.13,-446.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1301.58,-452.91 1301.58,-475.71 1334.82,-475.71 1334.82,-452.91 1301.58,-452.91"/>
<text xml:space="preserve" text-anchor="start" x="1304.58" y="-458.71" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- grok&#45;&gt;skills -->
<g id="edge9" class="edge">
<title>grok&#45;&gt;skills</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M989.27,-720.72C1039.85,-711.82 1095.88,-701.96 1147.1,-692.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1147.37,-695.56 1154.3,-691.67 1146.46,-690.39 1147.37,-695.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1049.39,-708.58 1049.39,-731.38 1098.18,-731.38 1098.18,-708.58 1049.39,-708.58"/>
<text xml:space="preserve" text-anchor="start" x="1052.39" y="-714.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">follows</text>
</g>
<!-- grok&#45;&gt;triage -->
<g id="edge10" class="edge">
<title>grok&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M989.37,-820.95C1142.54,-877.33 1370.99,-928.11 1518.22,-808 1588.53,-750.64 1511.14,-684.95 1559.22,-608 1575.8,-581.47 1598.16,-557.53 1622.27,-536.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1623.83,-538.7 1627.85,-531.85 1620.43,-534.7 1623.83,-538.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1301.58,-881.39 1301.58,-904.19 1334.82,-904.19 1334.82,-881.39 1301.58,-881.39"/>
<text xml:space="preserve" text-anchor="start" x="1304.58" y="-887.19" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- skills&#45;&gt;memory -->
<g id="edge11" class="edge">
<title>skills&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1518.22,-702.08C1541.43,-706.64 1565.06,-711.28 1588.13,-715.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1587.46,-718.35 1595.33,-717.22 1588.48,-713.2 1587.46,-718.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1466.58,-687.12 1466.58,-709.92 1558.16,-709.92 1558.16,-687.12 1466.58,-687.12"/>
<text xml:space="preserve" text-anchor="start" x="1469.58" y="-692.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">remembers in</text>
</g>
<!-- triage&#45;&gt;memory -->
<g id="edge12" class="edge">
<title>triage&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1778.53,-529.69C1778.53,-567.83 1778.53,-612.49 1778.53,-651.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1775.9,-651.68 1778.53,-659.18 1781.15,-651.68 1775.9,-651.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1724.55,-585.1 1724.55,-607.9 1803.71,-607.9 1803.71,-585.1 1724.55,-585.1"/>
<text xml:space="preserve" text-anchor="start" x="1727.55" y="-590.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">logs the run</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge1" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M221.82,-369.02C221.82,-330.6 221.82,-285.61 221.82,-246.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="224.44,-246.22 221.82,-238.72 219.19,-246.22 224.44,-246.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="165.5,-291.1 165.5,-313.9 249.33,-313.9 249.33,-291.1 165.5,-291.1"/>
<text xml:space="preserve" text-anchor="start" x="168.5" y="-296.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- jt&#45;&gt;claude -->
<g id="edge2" class="edge">
<title>jt&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M393.01,-234.23C462.44,-270.22 543.43,-312.21 616.5,-350.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="615.27,-352.4 623.14,-353.52 617.69,-347.74 615.27,-352.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="474.41,-271.66 474.41,-294.46 509.19,-294.46 509.19,-271.66 474.41,-271.66"/>
<text xml:space="preserve" text-anchor="start" x="477.41" y="-277.46" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;distill -->
<g id="edge3" class="edge">
<title>jt&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M392.91,-143.51C588.19,-140.66 908.2,-135.98 1115.77,-132.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1115.69,-135.57 1123.16,-132.84 1115.62,-130.32 1115.69,-135.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="653.27,-115.35 653.27,-138.15 759.66,-138.15 759.66,-115.35 653.27,-115.35"/>
<text xml:space="preserve" text-anchor="start" x="656.27" y="-121.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
</g>
</svg>
`;case`fieldAgentView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2707pt" height="1798pt"
 viewBox="0.00 0.00 2707.00 1798.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1782.85)">
<g id="clust1" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-1449.8 8,-1714.8 392.04,-1714.8 392.04,-1449.8 8,-1449.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1701.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-1159.8 8,-1424.8 392.04,-1424.8 392.04,-1159.8 8,-1159.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1411.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_fieldagent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="588.12,-972.8 588.12,-1759.8 2668.9,-1759.8 2668.9,-972.8 588.12,-972.8"/>
<text xml:space="preserve" text-anchor="start" x="596.12" y="-1746.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FIELD AGENT</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_assistants</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2254.48,-108.8 2254.48,-679.8 2658.04,-679.8 2658.04,-108.8 2254.48,-108.8"/>
<text xml:space="preserve" text-anchor="start" x="2262.48" y="-666.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AI ASSISTANTS</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_mail</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="591.89,-370.8 591.89,-964.8 998.82,-964.8 998.82,-370.8 591.89,-370.8"/>
<text xml:space="preserve" text-anchor="start" x="599.89" y="-951.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMAIL &amp; TEXTS</text>
</g>
<!-- para -->
<g id="node1" class="node">
<title>para</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M360.04,-1645.44C360.04,-1654.47 288.32,-1661.8 200.02,-1661.8 111.72,-1661.8 40,-1654.47 40,-1645.44 40,-1645.44 40,-1498.16 40,-1498.16 40,-1489.13 111.72,-1481.8 200.02,-1481.8 288.32,-1481.8 360.04,-1489.13 360.04,-1498.16 360.04,-1498.16 360.04,-1645.44 360.04,-1645.44"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M360.04,-1645.44C360.04,-1636.41 288.32,-1629.07 200.02,-1629.07 111.72,-1629.07 40,-1636.41 40,-1645.44"/>
<text xml:space="preserve" text-anchor="start" x="125.55" y="-1583.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Projects &amp; Areas</text>
<text xml:space="preserve" text-anchor="start" x="71.61" y="-1560.8" font-family="Arial" font-size="15.00" fill="#c7d2fe">Life admin: things with a finish line and</text>
<text xml:space="preserve" text-anchor="start" x="149.15" y="-1542.8" font-family="Arial" font-size="15.00" fill="#c7d2fe">ongoing duties.</text>
</g>
<!-- calendar -->
<g id="node2" class="node">
<title>calendar</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.04,-1371.8 40,-1371.8 40,-1191.8 360.04,-1191.8 360.04,-1371.8"/>
<text xml:space="preserve" text-anchor="start" x="130.56" y="-1303.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Calendar mirror</text>
<text xml:space="preserve" text-anchor="start" x="163.89" y="-1282.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="77.86" y="-1261" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the calendar into the vault for</text>
<text xml:space="preserve" text-anchor="start" x="146.25" y="-1243" font-family="Arial" font-size="15.00" fill="#b6ecf7">Mission Control.</text>
</g>
<!-- mission -->
<g id="node3" class="node">
<title>mission</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="962.59,-1522.8 628.12,-1522.8 628.12,-1342.8 962.59,-1342.8 962.59,-1522.8"/>
<text xml:space="preserve" text-anchor="start" x="726.45" y="-1463.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mission Control</text>
<text xml:space="preserve" text-anchor="start" x="712.97" y="-1442.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">dashboard screen in the app</text>
<text xml:space="preserve" text-anchor="start" x="661.13" y="-1421" font-family="Arial" font-size="15.00" fill="#b6ecf7">The front door. Shows today, mail, texts,</text>
<text xml:space="preserve" text-anchor="start" x="648.18" y="-1403" font-family="Arial" font-size="15.00" fill="#b6ecf7">calendar, and what each project needs next,</text>
<text xml:space="preserve" text-anchor="start" x="752.83" y="-1385" font-family="Arial" font-size="15.00" fill="#b6ecf7">updated live.</text>
</g>
<!-- app -->
<g id="node4" class="node">
<title>app</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="956.73,-1212.8 633.99,-1212.8 633.99,-1032.8 956.73,-1032.8 956.73,-1212.8"/>
<text xml:space="preserve" text-anchor="start" x="725.31" y="-1144.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Field Agent app</text>
<text xml:space="preserve" text-anchor="start" x="747.31" y="-1123.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">SwiftUI · iPhone</text>
<text xml:space="preserve" text-anchor="start" x="654.04" y="-1102" font-family="Arial" font-size="15.00" fill="#b6ecf7">Two chats, Claude and Grok. Replies fill in</text>
<text xml:space="preserve" text-anchor="start" x="732" y="-1084" font-family="Arial" font-size="15.00" fill="#b6ecf7">as they are written.</text>
</g>
<!-- tailnet -->
<g id="node5" class="node">
<title>tailnet</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1489.8,-1212.8 1152.4,-1212.8 1152.4,-1032.8 1489.8,-1032.8 1489.8,-1212.8"/>
<text xml:space="preserve" text-anchor="start" x="1252.18" y="-1144.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Private network</text>
<text xml:space="preserve" text-anchor="start" x="1295.45" y="-1123.6" font-family="Arial" font-size="13.00" fill="#cbd5e1">Tailscale</text>
<text xml:space="preserve" text-anchor="start" x="1176.42" y="-1102" font-family="Arial" font-size="15.00" fill="#cbd5e1">Links the phone to the Mac without opening</text>
<text xml:space="preserve" text-anchor="start" x="1211.45" y="-1084" font-family="Arial" font-size="15.00" fill="#cbd5e1">the home network to the internet.</text>
</g>
<!-- relay -->
<g id="node6" class="node">
<title>relay</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2021.43,-1212.8 1657.8,-1212.8 1657.8,-1032.8 2021.43,-1032.8 2021.43,-1212.8"/>
<text xml:space="preserve" text-anchor="start" x="1788.48" y="-1153.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home base</text>
<text xml:space="preserve" text-anchor="start" x="1767.72" y="-1132.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node service on the Mac</text>
<text xml:space="preserve" text-anchor="start" x="1677.86" y="-1111" font-family="Arial" font-size="15.00" fill="#b6ecf7">Passes each phone message to Claude or Grok,</text>
<text xml:space="preserve" text-anchor="start" x="1689.97" y="-1093" font-family="Arial" font-size="15.00" fill="#b6ecf7">streams the answer back, and keeps Mission</text>
<text xml:space="preserve" text-anchor="start" x="1752.5" y="-1075" font-family="Arial" font-size="15.00" fill="#b6ecf7">Control live from the vault.</text>
</g>
<!-- approval -->
<g id="node7" class="node">
<title>approval</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2628.9,-1212.8 2283.63,-1212.8 2283.63,-1032.8 2628.9,-1032.8 2628.9,-1212.8"/>
<text xml:space="preserve" text-anchor="start" x="2378.45" y="-1144.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Allow / Deny card</text>
<text xml:space="preserve" text-anchor="start" x="2427.71" y="-1123.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">in the app</text>
<text xml:space="preserve" text-anchor="start" x="2303.68" y="-1102" font-family="Arial" font-size="15.00" fill="#b6ecf7">Before Claude edits a file or runs a command,</text>
<text xml:space="preserve" text-anchor="start" x="2362.86" y="-1084" font-family="Arial" font-size="15.00" fill="#b6ecf7">the phone buzzes and asks.</text>
</g>
<!-- claude -->
<g id="node8" class="node">
<title>claude</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2616.28,-328.8 2296.24,-328.8 2296.24,-148.8 2616.28,-148.8 2616.28,-328.8"/>
<text xml:space="preserve" text-anchor="start" x="2397.89" y="-260.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Claude Code</text>
<text xml:space="preserve" text-anchor="start" x="2372.8" y="-239.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="2339.12" y="-218" font-family="Arial" font-size="15.00" fill="#b6ecf7">Main assistant. Builds and fixes the</text>
<text xml:space="preserve" text-anchor="start" x="2369.98" y="-200" font-family="Arial" font-size="15.00" fill="#b6ecf7">machinery, runs the skills.</text>
</g>
<!-- grok -->
<g id="node9" class="node">
<title>grok</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2618.04,-618.8 2294.48,-618.8 2294.48,-438.8 2618.04,-438.8 2618.04,-618.8"/>
<text xml:space="preserve" text-anchor="start" x="2434.59" y="-550.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Grok</text>
<text xml:space="preserve" text-anchor="start" x="2372.8" y="-529.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="2314.53" y="-508" font-family="Arial" font-size="15.00" fill="#b6ecf7">Second assistant. Same vault, same skills,</text>
<text xml:space="preserve" text-anchor="start" x="2417.5" y="-490" font-family="Arial" font-size="15.00" fill="#b6ecf7">same rules.</text>
</g>
<!-- mailtriage -->
<g id="node10" class="node">
<title>mailtriage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="958.82,-590.8 631.89,-590.8 631.89,-410.8 958.82,-410.8 958.82,-590.8"/>
<text xml:space="preserve" text-anchor="start" x="720.89" y="-522.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mail &amp; text triage</text>
<text xml:space="preserve" text-anchor="start" x="667.44" y="-501.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI · once per Obsidian launch and when the</text>
<text xml:space="preserve" text-anchor="start" x="651.95" y="-480" font-family="Arial" font-size="15.00" fill="#b6ecf7">Archives the noise and lists everything else</text>
<text xml:space="preserve" text-anchor="start" x="728.23" y="-462" font-family="Arial" font-size="15.00" fill="#b6ecf7">under Needs action.</text>
</g>
<!-- fold -->
<g id="node11" class="node">
<title>fold</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="955.38,-903.8 635.34,-903.8 635.34,-723.8 955.38,-723.8 955.38,-903.8"/>
<text xml:space="preserve" text-anchor="start" x="721.99" y="-844.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Needs action list</text>
<text xml:space="preserve" text-anchor="start" x="750.57" y="-823.6" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mission Control</text>
<text xml:space="preserve" text-anchor="start" x="666.13" y="-802" font-family="Arial" font-size="15.00" fill="#b6ecf7">One list per inbox. Tap a row to read it;</text>
<text xml:space="preserve" text-anchor="start" x="664.87" y="-784" font-family="Arial" font-size="15.00" fill="#b6ecf7">swipe or press to open, archive, delete,</text>
<text xml:space="preserve" text-anchor="start" x="678.62" y="-766" font-family="Arial" font-size="15.00" fill="#b6ecf7">triage, add to calendar, or respond.</text>
</g>
<!-- iphone -->
<g id="node12" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="361.4,-1081.8 38.64,-1081.8 38.64,-901.8 361.4,-901.8 361.4,-1081.8"/>
<text xml:space="preserve" text-anchor="start" x="168.88" y="-994.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="58.69" y="-971.8" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders, the Field Agent app.</text>
</g>
<!-- jt -->
<g id="node13" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="371.4,-768.8 28.64,-768.8 28.64,-588.8 371.4,-588.8 371.4,-768.8"/>
<text xml:space="preserve" text-anchor="start" x="188.91" y="-690.8" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="48.7" y="-667.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="173.33" y="-649.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- para&#45;&gt;mission -->
<g id="edge7" class="edge">
<title>para&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M360.8,-1534.37C440.38,-1515.73 536.77,-1493.14 618.45,-1474.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="618.68,-1476.65 625.39,-1472.38 617.49,-1471.54 618.68,-1476.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="459.4,-1514.75 459.4,-1537.55 540.11,-1537.55 540.11,-1514.75 459.4,-1514.75"/>
<text xml:space="preserve" text-anchor="start" x="462.4" y="-1520.55" font-family="Arial" font-size="14.00" fill="#c9c9c9">next actions</text>
</g>
<!-- calendar&#45;&gt;mission -->
<g id="edge8" class="edge">
<title>calendar&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M360.02,-1322.27C439.68,-1342.54 536.36,-1367.14 618.26,-1387.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="617.33,-1390.46 625.24,-1389.76 618.62,-1385.37 617.33,-1390.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="447.73,-1370.82 447.73,-1393.62 551.79,-1393.62 551.79,-1370.82 447.73,-1370.82"/>
<text xml:space="preserve" text-anchor="start" x="450.73" y="-1376.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">today’s events</text>
</g>
<!-- mission&#45;&gt;relay -->
<g id="edge9" class="edge">
<title>mission&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M962.28,-1490.39C1135.48,-1539.44 1407.82,-1584.28 1597.8,-1460.8 1687.06,-1402.79 1753.5,-1299.16 1793.73,-1221.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1796.03,-1223.16 1797.13,-1215.29 1791.36,-1220.76 1796.03,-1223.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1283.46,-1540.41 1283.46,-1563.21 1358.74,-1563.21 1358.74,-1540.41 1283.46,-1540.41"/>
<text xml:space="preserve" text-anchor="start" x="1286.46" y="-1546.21" font-family="Arial" font-size="14.00" fill="#c9c9c9">button taps</text>
</g>
<!-- app&#45;&gt;tailnet -->
<g id="edge10" class="edge">
<title>app&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M956.7,-1122.8C1015.41,-1122.8 1082.18,-1122.8 1142.32,-1122.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1142.16,-1125.43 1149.66,-1122.8 1142.16,-1120.18 1142.16,-1125.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1022.59,-1122.8 1022.59,-1145.6 1092.4,-1145.6 1092.4,-1122.8 1022.59,-1122.8"/>
<text xml:space="preserve" text-anchor="start" x="1025.59" y="-1128.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">messages</text>
</g>
<!-- tailnet&#45;&gt;relay -->
<g id="edge11" class="edge">
<title>tailnet&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1489.44,-1122.8C1539.99,-1122.8 1595.87,-1122.8 1647.83,-1122.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1647.65,-1125.43 1655.14,-1122.8 1647.64,-1120.18 1647.65,-1125.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1549.8,-1122.8 1549.8,-1145.6 1597.8,-1145.6 1597.8,-1122.8 1549.8,-1122.8"/>
<text xml:space="preserve" text-anchor="start" x="1552.8" y="-1128.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">carries</text>
</g>
<!-- relay&#45;&gt;mission -->
<g id="edge12" class="edge">
<title>relay&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1657.84,-1204.41C1604.39,-1226.77 1545.32,-1249.78 1489.8,-1267.8 1316.8,-1323.94 1113.88,-1370 972.42,-1399.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="972.13,-1396.44 965.31,-1400.51 973.18,-1401.58 972.13,-1396.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1280.74,-1358.86 1280.74,-1381.66 1361.46,-1381.66 1361.46,-1358.86 1280.74,-1358.86"/>
<text xml:space="preserve" text-anchor="start" x="1283.74" y="-1364.66" font-family="Arial" font-size="14.00" fill="#c9c9c9">live updates</text>
</g>
<!-- relay&#45;&gt;approval -->
<g id="edge13" class="edge">
<title>relay&#45;&gt;approval</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2021.38,-1112.15C2041.64,-1111.27 2061.97,-1110.52 2081.43,-1110 2144.61,-1108.32 2160.45,-1108.26 2223.63,-1110 2239.8,-1110.45 2256.6,-1111.07 2273.43,-1111.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2273.27,-1114.42 2280.88,-1112.13 2273.5,-1109.17 2273.27,-1114.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2121.92,-1110 2121.92,-1132.8 2183.14,-1132.8 2183.14,-1110 2121.92,-1110"/>
<text xml:space="preserve" text-anchor="start" x="2124.92" y="-1115.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks first</text>
</g>
<!-- relay&#45;&gt;claude -->
<g id="edge14" class="edge">
<title>relay&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1875.71,-1033.06C1936.49,-885.58 2072.51,-587.99 2254.48,-383.8 2269.81,-366.6 2287.52,-350.24 2305.95,-335.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2307.33,-337.39 2311.52,-330.63 2304.04,-333.3 2307.33,-337.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2081.43,-607.94 2081.43,-630.74 2223.63,-630.74 2223.63,-607.94 2081.43,-607.94"/>
<text xml:space="preserve" text-anchor="start" x="2084.43" y="-613.74" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- relay&#45;&gt;grok -->
<g id="edge15" class="edge">
<title>relay&#45;&gt;grok</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1933.64,-1032.91C2047.13,-923.23 2238.25,-738.52 2354.95,-625.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2356.44,-627.95 2360.01,-620.86 2352.79,-624.18 2356.44,-627.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2081.43,-879 2081.43,-901.8 2223.63,-901.8 2223.63,-879 2081.43,-879"/>
<text xml:space="preserve" text-anchor="start" x="2084.43" y="-884.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- relay&#45;&gt;mailtriage -->
<g id="edge16" class="edge">
<title>relay&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1687.89,-1032.85C1492.97,-916.53 1154.96,-714.81 955.86,-595.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="957.46,-593.89 949.68,-592.3 954.77,-598.39 957.46,-593.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1238.71,-913.76 1238.71,-936.56 1403.49,-936.56 1403.49,-913.76 1238.71,-913.76"/>
<text xml:space="preserve" text-anchor="start" x="1241.71" y="-919.56" font-family="Arial" font-size="14.00" fill="#c9c9c9">phone attaches, 3 h apart</text>
</g>
<!-- approval&#45;&gt;relay -->
<g id="edge17" class="edge">
<title>approval&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2283.7,-1142.58C2263.47,-1144.31 2243.11,-1145.79 2223.63,-1146.8 2160.51,-1150.06 2144.55,-1149.94 2081.43,-1146.8 2065.28,-1146 2048.53,-1144.89 2031.74,-1143.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2031.98,-1140.98 2024.3,-1143 2031.57,-1146.21 2031.98,-1140.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2106.35,-1149.2 2106.35,-1172 2198.71,-1172 2198.71,-1149.2 2106.35,-1149.2"/>
<text xml:space="preserve" text-anchor="start" x="2109.35" y="-1155" font-family="Arial" font-size="14.00" fill="#c9c9c9">Allow or Deny</text>
</g>
<!-- mailtriage&#45;&gt;fold -->
<g id="edge18" class="edge">
<title>mailtriage&#45;&gt;fold</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M795.36,-590.49C795.36,-628.88 795.36,-673.87 795.36,-713.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="792.73,-713.3 795.36,-720.8 797.98,-713.3 792.73,-713.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="721.53,-645.9 721.53,-668.7 840.39,-668.7 840.39,-645.9 721.53,-645.9"/>
<text xml:space="preserve" text-anchor="start" x="724.53" y="-651.7" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- fold&#45;&gt;mission -->
<g id="edge20" class="edge">
<title>fold&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M635.5,-875.48C576.03,-907.17 514.89,-952.25 481.29,-1013.4 415.92,-1132.41 533.55,-1255.22 643,-1336.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="641.18,-1338.85 648.77,-1341.2 644.3,-1334.63 641.18,-1338.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="431.4,-1013.4 431.4,-1036.2 568.12,-1036.2 568.12,-1013.4 431.4,-1013.4"/>
<text xml:space="preserve" text-anchor="start" x="434.4" y="-1019.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Email and Texts tabs</text>
</g>
<!-- fold&#45;&gt;jt -->
<g id="edge19" class="edge">
<title>fold&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M663.21,-723.86C633.2,-707.54 600.55,-692.89 568.12,-684 508.7,-667.71 441.82,-662.98 381.58,-663.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="381.69,-660.78 374.22,-663.5 381.75,-666.03 381.69,-660.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="440.33,-684 440.33,-706.8 559.19,-706.8 559.19,-684 440.33,-684"/>
<text xml:space="preserve" text-anchor="start" x="443.33" y="-689.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- iphone&#45;&gt;app -->
<g id="edge2" class="edge">
<title>iphone&#45;&gt;app</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.69,-1081.77C351.04,-1098.1 372.56,-1115.47 392.04,-1132.8 411.16,-1149.8 407.93,-1164.63 431.4,-1174.8 491.41,-1200.81 561.73,-1197.56 624.4,-1184.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="624.68,-1186.98 631.44,-1182.8 623.55,-1181.85 624.68,-1186.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="483.14,-1194.38 483.14,-1217.18 516.38,-1217.18 516.38,-1194.38 483.14,-1194.38"/>
<text xml:space="preserve" text-anchor="start" x="486.14" y="-1200.18" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge1" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M200.02,-901.82C200.02,-863.4 200.02,-818.41 200.02,-778.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="202.65,-779.02 200.02,-771.52 197.4,-779.02 202.65,-779.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="143.71,-823.9 143.71,-846.7 227.53,-846.7 227.53,-823.9 143.71,-823.9"/>
<text xml:space="preserve" text-anchor="start" x="146.71" y="-829.7" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- jt&#45;&gt;mission -->
<g id="edge3" class="edge">
<title>jt&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M326.99,-768.6C351.78,-791.54 375.27,-817.98 392.04,-846.8 435.4,-921.34 384.94,-964.15 431.4,-1036.8 472.13,-1100.49 529.04,-1073.28 568.12,-1138 598.29,-1187.97 558.89,-1217.28 588.12,-1267.8 602.7,-1293.01 622.75,-1315.86 644.64,-1335.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="642.86,-1337.92 650.2,-1340.97 646.36,-1334.01 642.86,-1337.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="474.97,-1138 474.97,-1160.8 524.55,-1160.8 524.55,-1138 474.97,-1138"/>
<text xml:space="preserve" text-anchor="start" x="477.97" y="-1143.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks</text>
</g>
<!-- jt&#45;&gt;approval -->
<g id="edge4" class="edge">
<title>jt&#45;&gt;approval</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M271.26,-589.11C341.4,-507.48 457.37,-392.52 588.12,-343.8 960.86,-204.91 1888.8,-90.35 2223.63,-408.8 2271.87,-454.68 2236.31,-642.75 2254.48,-706.8 2286.89,-821.06 2349,-942.35 2395.6,-1024.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2393.13,-1025.25 2399.13,-1030.46 2397.68,-1022.65 2393.13,-1025.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1304.87,-221.37 1304.87,-244.17 1337.33,-244.17 1337.33,-221.37 1304.87,-221.37"/>
<text xml:space="preserve" text-anchor="start" x="1307.87" y="-227.17" font-family="Arial" font-size="14.00" fill="#c9c9c9">taps</text>
</g>
<!-- jt&#45;&gt;claude -->
<g id="edge5" class="edge">
<title>jt&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M218.83,-588.87C245.83,-474.87 307.66,-279.09 431.4,-161.8 556.76,-42.96 621.62,-22.8 794.36,-22.8 794.36,-22.8 794.36,-22.8 1840.62,-22.8 1980.76,-22.8 2129.23,-73.4 2245.14,-125.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2243.81,-127.9 2251.73,-128.61 2245.98,-123.12 2243.81,-127.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="890.35,0 890.35,-22.8 925.14,-22.8 925.14,0 890.35,0"/>
<text xml:space="preserve" text-anchor="start" x="893.35" y="-5.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;fold -->
<g id="edge6" class="edge">
<title>jt&#45;&gt;fold</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M371.05,-717.49C450.85,-735.64 545.7,-757.22 625.37,-775.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="624.66,-777.88 632.55,-776.98 625.82,-772.76 624.66,-777.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="447.34,-758.39 447.34,-781.19 552.18,-781.19 552.18,-758.39 447.34,-758.39"/>
<text xml:space="preserve" text-anchor="start" x="450.34" y="-764.19" font-family="Arial" font-size="14.00" fill="#c9c9c9">presses buttons</text>
</g>
</g>
</svg>
`;case`schedulersView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2615pt" height="3367pt"
 viewBox="0.00 0.00 2615.00 3367.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3352.05)">
<g id="clust1" class="cluster">
<title>cluster_pi</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1032.5,-2869 1032.5,-3134 1420.11,-3134 1420.11,-2869 1032.5,-2869"/>
<text xml:space="preserve" text-anchor="start" x="1040.5" y="-3121.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BRAINPI</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="478.04,-2281 478.04,-2852 2012.27,-2852 2012.27,-2281 478.04,-2281"/>
<text xml:space="preserve" text-anchor="start" x="486.04" y="-2839.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_mail</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1607.94,-8 1607.94,-579 2576.73,-579 2576.73,-8 1607.94,-8"/>
<text xml:space="preserve" text-anchor="start" x="1615.94" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMAIL &amp; TEXTS</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1620.23,-1756 1620.23,-2021 2004.27,-2021 2004.27,-1756 1620.23,-1756"/>
<text xml:space="preserve" text-anchor="start" x="1628.23" y="-2008.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCANNER</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_backups</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1611.38,-886 1611.38,-1151 2013.12,-1151 2013.12,-886 1611.38,-886"/>
<text xml:space="preserve" text-anchor="start" x="1619.38" y="-1138.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKUPS</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_printing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1610.45,-1168 1610.45,-1739 2014.05,-1739 2014.05,-1168 1610.45,-1168"/>
<text xml:space="preserve" text-anchor="start" x="1618.45" y="-1726.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">3D PRINTING</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_fieldagent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2174.03,-2434 2174.03,-2699 2572.5,-2699 2572.5,-2434 2174.03,-2434"/>
<text xml:space="preserve" text-anchor="start" x="2182.03" y="-2686.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FIELD AGENT</text>
</g>
<!-- heartbeat -->
<g id="node1" class="node">
<title>heartbeat</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1388.11,-3081 1064.5,-3081 1064.5,-2901 1388.11,-2901 1388.11,-3081"/>
<text xml:space="preserve" text-anchor="start" x="1182.39" y="-3012.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Heartbeat</text>
<text xml:space="preserve" text-anchor="start" x="1186.93" y="-2991.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 6 hours</text>
<text xml:space="preserve" text-anchor="start" x="1084.56" y="-2970.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reports disk space and drive health so the</text>
<text xml:space="preserve" text-anchor="start" x="1127.09" y="-2952.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Health Report notices trouble.</text>
</g>
<!-- chiprelay -->
<g id="node2" class="node">
<title>chiprelay</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="838.08,-2791 518.04,-2791 518.04,-2611 838.08,-2611 838.08,-2791"/>
<text xml:space="preserve" text-anchor="start" x="594.11" y="-2722.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Phone button relay</text>
<text xml:space="preserve" text-anchor="start" x="622.43" y="-2701.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">iCloud · every 15 s</text>
<text xml:space="preserve" text-anchor="start" x="538.38" y="-2680.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">A button tapped on the phone is carried to</text>
<text xml:space="preserve" text-anchor="start" x="602.6" y="-2662.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">the Mac and run there.</text>
</g>
<!-- launchd -->
<g id="node3" class="node">
<title>launchd</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="838.08,-2501 518.04,-2501 518.04,-2321 838.08,-2321 838.08,-2501"/>
<text xml:space="preserve" text-anchor="start" x="571.33" y="-2432.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mac background agents</text>
<text xml:space="preserve" text-anchor="start" x="623.13" y="-2411.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">launchd · 2 agents</text>
<text xml:space="preserve" text-anchor="start" x="546.32" y="-2390.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The unread mail list, and a doorbell that</text>
<text xml:space="preserve" text-anchor="start" x="550.07" y="-2372.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">wakes Obsidian when the phone asks.</text>
</g>
<!-- brainengine -->
<g id="node4" class="node">
<title>brainengine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1386.33,-2791 1066.29,-2791 1066.29,-2611 1386.33,-2611 1386.33,-2791"/>
<text xml:space="preserve" text-anchor="start" x="1169.05" y="-2722.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Brain Engine</text>
<text xml:space="preserve" text-anchor="start" x="1181.5" y="-2701.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Obsidian plugin</text>
<text xml:space="preserve" text-anchor="start" x="1092.1" y="-2680.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs most timers: every minute, every 5</text>
<text xml:space="preserve" text-anchor="start" x="1139.18" y="-2662.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">minutes, hourly, and daily.</text>
</g>
<!-- calendar -->
<g id="node5" class="node">
<title>calendar</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1972.27,-2791 1652.23,-2791 1652.23,-2611 1972.27,-2611 1972.27,-2791"/>
<text xml:space="preserve" text-anchor="start" x="1742.79" y="-2722.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Calendar mirror</text>
<text xml:space="preserve" text-anchor="start" x="1776.12" y="-2701.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1690.09" y="-2680.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the calendar into the vault for</text>
<text xml:space="preserve" text-anchor="start" x="1758.48" y="-2662.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Mission Control.</text>
</g>
<!-- health -->
<g id="node6" class="node">
<title>health</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1972.27,-2501 1652.23,-2501 1652.23,-2321 1972.27,-2321 1972.27,-2501"/>
<text xml:space="preserve" text-anchor="start" x="1754.44" y="-2432.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Health check</text>
<text xml:space="preserve" text-anchor="start" x="1780.46" y="-2411.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">daily · free</text>
<text xml:space="preserve" text-anchor="start" x="1674.26" y="-2390.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Looks for broken links, stale projects, and</text>
<text xml:space="preserve" text-anchor="start" x="1675.1" y="-2372.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">quiet machines; writes the Health Report.</text>
</g>
<!-- unread -->
<g id="node7" class="node">
<title>unread</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1972.27,-228 1652.23,-228 1652.23,-48 1972.27,-48 1972.27,-228"/>
<text xml:space="preserve" text-anchor="start" x="1764.45" y="-159.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Unread list</text>
<text xml:space="preserve" text-anchor="start" x="1740.73" y="-138.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="1686.79" y="-117.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads new mail straight from the mail</text>
<text xml:space="preserve" text-anchor="start" x="1785.58" y="-99.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">servers.</text>
</g>
<!-- texts -->
<g id="node8" class="node">
<title>texts</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1976.56,-518 1647.94,-518 1647.94,-338 1976.56,-338 1976.56,-518"/>
<text xml:space="preserve" text-anchor="start" x="1758.92" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Texts mirror</text>
<text xml:space="preserve" text-anchor="start" x="1740.73" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="1668" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies new iMessages into the vault. Login</text>
<text xml:space="preserve" text-anchor="start" x="1749.29" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">codes are skipped.</text>
</g>
<!-- mailtriage -->
<g id="node9" class="node">
<title>mailtriage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2536.73,-518 2209.8,-518 2209.8,-338 2536.73,-338 2536.73,-518"/>
<text xml:space="preserve" text-anchor="start" x="2298.79" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mail &amp; text triage</text>
<text xml:space="preserve" text-anchor="start" x="2245.35" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI · once per Obsidian launch and when the</text>
<text xml:space="preserve" text-anchor="start" x="2229.86" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Archives the noise and lists everything else</text>
<text xml:space="preserve" text-anchor="start" x="2306.14" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">under Needs action.</text>
</g>
<!-- ocr -->
<g id="node10" class="node">
<title>ocr</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1972.27,-1968 1652.23,-1968 1652.23,-1788 1972.27,-1788 1972.27,-1968"/>
<text xml:space="preserve" text-anchor="start" x="1732.5" y="-1908.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Scan sync + OCR</text>
<text xml:space="preserve" text-anchor="start" x="1737.11" y="-1887.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1692.61" y="-1866.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls each raw scan, makes the text</text>
<text xml:space="preserve" text-anchor="start" x="1683.84" y="-1848.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">searchable, deletes the Pi copy once it</text>
<text xml:space="preserve" text-anchor="start" x="1774.31" y="-1830.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">checks out.</text>
</g>
<!-- machine -->
<g id="node11" class="node">
<title>machine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1981.12,-1098 1643.38,-1098 1643.38,-918 1981.12,-918 1981.12,-1098"/>
<text xml:space="preserve" text-anchor="start" x="1731.09" y="-1029.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Machine snapshot</text>
<text xml:space="preserve" text-anchor="start" x="1776.12" y="-1008.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1663.44" y="-987.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the Mac’s setup (scripts, schedules,</text>
<text xml:space="preserve" text-anchor="start" x="1683.02" y="-969.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">settings) into the vault. Secrets left out.</text>
</g>
<!-- printlog -->
<g id="node12" class="node">
<title>printlog</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1974.05,-1388 1650.45,-1388 1650.45,-1208 1974.05,-1208 1974.05,-1388"/>
<text xml:space="preserve" text-anchor="start" x="1775.57" y="-1319.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Print log</text>
<text xml:space="preserve" text-anchor="start" x="1737.11" y="-1298.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1670.51" y="-1277.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Notes each start and finish in the model’s</text>
<text xml:space="preserve" text-anchor="start" x="1687.17" y="-1259.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">folder, the print log, and a notification.</text>
</g>
<!-- publish -->
<g id="node13" class="node">
<title>publish</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1972.27,-1678 1652.23,-1678 1652.23,-1498 1972.27,-1498 1972.27,-1678"/>
<text xml:space="preserve" text-anchor="start" x="1746.11" y="-1609.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gallery publish</text>
<text xml:space="preserve" text-anchor="start" x="1694.84" y="-1588.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min and right after a finish</text>
<text xml:space="preserve" text-anchor="start" x="1680.1" y="-1567.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls the drafted card, fills in the details,</text>
<text xml:space="preserve" text-anchor="start" x="1730.95" y="-1549.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">and pushes it to the site.</text>
</g>
<!-- mission -->
<g id="node14" class="node">
<title>mission</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2540.5,-2646 2206.03,-2646 2206.03,-2466 2540.5,-2466 2540.5,-2646"/>
<text xml:space="preserve" text-anchor="start" x="2304.35" y="-2586.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mission Control</text>
<text xml:space="preserve" text-anchor="start" x="2290.87" y="-2565.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">dashboard screen in the app</text>
<text xml:space="preserve" text-anchor="start" x="2239.04" y="-2544.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The front door. Shows today, mail, texts,</text>
<text xml:space="preserve" text-anchor="start" x="2226.08" y="-2526.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">calendar, and what each project needs next,</text>
<text xml:space="preserve" text-anchor="start" x="2330.73" y="-2508.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">updated live.</text>
</g>
<!-- appleapps -->
<g id="node15" class="node">
<title>appleapps</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="321.4,-3337 1.36,-3337 1.36,-3157 321.4,-3157 321.4,-3337"/>
<text xml:space="preserve" text-anchor="start" x="31.87" y="-3259" font-family="Arial" font-size="20.00" fill="#f8fafc">Apple Calendar &amp; Reminders</text>
<text xml:space="preserve" text-anchor="start" x="33.39" y="-3236" font-family="Arial" font-size="15.00" fill="#cbd5e1">The calendar and the to&#45;do lists on the</text>
<text xml:space="preserve" text-anchor="start" x="138.44" y="-3218" font-family="Arial" font-size="15.00" fill="#cbd5e1">phone.</text>
</g>
<!-- iphone -->
<g id="node16" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="322.77,-3024 0,-3024 0,-2844 322.77,-2844 322.77,-3024"/>
<text xml:space="preserve" text-anchor="start" x="130.25" y="-2937" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-2914" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders, the Field Agent app.</text>
</g>
<!-- docs -->
<g id="node17" class="node">
<title>docs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1981.97,-808 1642.53,-808 1642.53,-628 1981.97,-628 1981.97,-808"/>
<text xml:space="preserve" text-anchor="start" x="1751.1" y="-748.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="1756.62" y="-727.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1690.52" y="-706.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="1662.58" y="-688.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="1806.42" y="-670.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- heartbeat&#45;&gt;health -->
<g id="edge4" class="edge">
<title>heartbeat&#45;&gt;health</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1386.26,-2901.09C1397.83,-2893.81 1409.23,-2886.4 1420.11,-2879 1496.13,-2827.34 1537.14,-2830.92 1582.53,-2751 1625.69,-2675 1562.98,-2630.94 1607.94,-2556 1618.49,-2538.43 1632.07,-2522.4 1647.2,-2507.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1648.8,-2510.05 1652.53,-2503.04 1645.24,-2506.19 1648.8,-2510.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1448.11,-2860.17 1448.11,-2882.97 1582.53,-2882.97 1582.53,-2860.17 1448.11,-2860.17"/>
<text xml:space="preserve" text-anchor="start" x="1451.11" y="-2865.97" font-family="Arial" font-size="14.00" fill="#c9c9c9">disk and drive health</text>
</g>
<!-- chiprelay&#45;&gt;brainengine -->
<g id="edge5" class="edge">
<title>chiprelay&#45;&gt;brainengine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M837.79,-2701C906.4,-2701 986.75,-2701 1056.45,-2701"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1056.13,-2703.63 1063.63,-2701 1056.13,-2698.38 1056.13,-2703.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="898.08,-2701 898.08,-2723.8 1004.5,-2723.8 1004.5,-2701 898.08,-2701"/>
<text xml:space="preserve" text-anchor="start" x="901.08" y="-2706.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queues a button</text>
</g>
<!-- launchd&#45;&gt;unread -->
<g id="edge6" class="edge">
<title>launchd&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M712.8,-2321.1C814.64,-2051.98 1131.4,-1230.7 1448.11,-574 1512.21,-441.09 1509.9,-393.27 1607.94,-283 1623.32,-265.71 1641.12,-249.32 1659.67,-234.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1661.08,-236.45 1665.3,-229.71 1657.8,-232.35 1661.08,-236.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1187.13,-1512.24 1187.13,-1535.04 1265.49,-1535.04 1265.49,-1512.24 1187.13,-1512.24"/>
<text xml:space="preserve" text-anchor="start" x="1190.13" y="-1518.04" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- brainengine&#45;&gt;calendar -->
<g id="edge7" class="edge">
<title>brainengine&#45;&gt;calendar</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1386.1,-2701C1465.37,-2701 1561.31,-2701 1641.97,-2701"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1641.71,-2703.63 1649.21,-2701 1641.71,-2698.38 1641.71,-2703.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1493.26,-2701 1493.26,-2723.8 1537.39,-2723.8 1537.39,-2701 1493.26,-2701"/>
<text xml:space="preserve" text-anchor="start" x="1496.26" y="-2706.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- brainengine&#45;&gt;health -->
<g id="edge8" class="edge">
<title>brainengine&#45;&gt;health</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1386.1,-2622.14C1465.69,-2582.61 1562.09,-2534.74 1642.96,-2494.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1643.97,-2497 1649.52,-2491.32 1641.64,-2492.3 1643.97,-2497"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1497.92,-2590.5 1497.92,-2613.3 1532.72,-2613.3 1532.72,-2590.5 1497.92,-2590.5"/>
<text xml:space="preserve" text-anchor="start" x="1500.92" y="-2596.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">daily</text>
</g>
<!-- brainengine&#45;&gt;texts -->
<g id="edge10" class="edge">
<title>brainengine&#45;&gt;texts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1232.9,-2611.08C1253.91,-2285.91 1332.83,-1172.7 1448.11,-837.2 1492.71,-707.41 1514.63,-673.63 1607.94,-573 1623.87,-555.82 1642.13,-539.44 1661.03,-524.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1662.53,-526.44 1666.79,-519.73 1659.28,-522.32 1662.53,-526.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1476.14,-837.2 1476.14,-860 1554.5,-860 1554.5,-837.2 1476.14,-837.2"/>
<text xml:space="preserve" text-anchor="start" x="1479.14" y="-843" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- brainengine&#45;&gt;mailtriage -->
<g id="edge15" class="edge">
<title>brainengine&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1284.6,-2611.08C1352.06,-2510.88 1472.26,-2349.07 1607.94,-2243.2 1765.82,-2120 1889.66,-2204.94 2014.05,-2048 2204.92,-1807.17 2326.46,-842.4 2361.65,-527.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2364.21,-528.5 2362.43,-520.76 2358.99,-527.92 2364.21,-528.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1759.44,-2243.2 1759.44,-2266 1865.06,-2266 1865.06,-2243.2 1759.44,-2243.2"/>
<text xml:space="preserve" text-anchor="start" x="1762.44" y="-2249" font-family="Arial" font-size="14.00" fill="#c9c9c9">once per launch</text>
</g>
<!-- brainengine&#45;&gt;ocr -->
<g id="edge11" class="edge">
<title>brainengine&#45;&gt;ocr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1239.14,-2611.27C1260.36,-2481.31 1315.74,-2239.15 1448.11,-2082.2 1499.77,-2020.95 1574.72,-1974.47 1643.13,-1941.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1643.92,-1943.98 1649.56,-1938.39 1641.66,-1939.24 1643.92,-1943.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1472.25,-2082.2 1472.25,-2105 1558.39,-2105 1558.39,-2082.2 1472.25,-2082.2"/>
<text xml:space="preserve" text-anchor="start" x="1475.25" y="-2088" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- brainengine&#45;&gt;machine -->
<g id="edge12" class="edge">
<title>brainengine&#45;&gt;machine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1232.12,-2611.02C1245.78,-2398.2 1294.34,-1849.61 1448.11,-1421.2 1496.55,-1286.26 1509.7,-1245.42 1607.94,-1141 1620.14,-1128.04 1633.83,-1115.74 1648.2,-1104.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1649.59,-1106.49 1653.87,-1099.79 1646.35,-1102.35 1649.59,-1106.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1493.26,-1421.2 1493.26,-1444 1537.39,-1444 1537.39,-1421.2 1493.26,-1421.2"/>
<text xml:space="preserve" text-anchor="start" x="1496.26" y="-1427" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- brainengine&#45;&gt;printlog -->
<g id="edge13" class="edge">
<title>brainengine&#45;&gt;printlog</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1237.12,-2611.07C1258.75,-2432.68 1319.18,-2023.7 1448.11,-1704.2 1499.05,-1577.99 1515.15,-1542.56 1607.94,-1443 1623.91,-1425.86 1642.2,-1409.5 1661.11,-1394.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1662.61,-1396.51 1666.87,-1389.81 1659.36,-1392.39 1662.61,-1396.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1472.25,-1704.2 1472.25,-1727 1558.39,-1727 1558.39,-1704.2 1472.25,-1704.2"/>
<text xml:space="preserve" text-anchor="start" x="1475.25" y="-1710" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- brainengine&#45;&gt;publish -->
<g id="edge14" class="edge">
<title>brainengine&#45;&gt;publish</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1240.79,-2611.27C1265.77,-2462.27 1327.96,-2157.34 1448.11,-1926.2 1500.15,-1826.1 1525.25,-1805.74 1607.94,-1729 1624.61,-1713.54 1643.07,-1698.44 1661.87,-1684.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1663.38,-1686.38 1667.81,-1679.79 1660.23,-1682.17 1663.38,-1686.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1476.14,-1926.2 1476.14,-1949 1554.5,-1949 1554.5,-1926.2 1476.14,-1926.2"/>
<text xml:space="preserve" text-anchor="start" x="1479.14" y="-1932" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- brainengine&#45;&gt;docs -->
<g id="edge9" class="edge">
<title>brainengine&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1227.26,-2611.09C1229.76,-2364.99 1254.66,-1662.67 1448.11,-1121.2 1494.03,-992.68 1514.33,-958.31 1607.94,-859 1622.83,-843.21 1639.75,-828.16 1657.34,-814.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1658.78,-816.38 1663.07,-809.7 1655.55,-812.25 1658.78,-816.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1493.26,-1121.2 1493.26,-1144 1537.39,-1144 1537.39,-1121.2 1493.26,-1121.2"/>
<text xml:space="preserve" text-anchor="start" x="1496.26" y="-1127" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- calendar&#45;&gt;mission -->
<g id="edge16" class="edge">
<title>calendar&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1971.95,-2659.84C2041.93,-2641.68 2124.42,-2620.29 2196.28,-2601.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2196.82,-2604.22 2203.42,-2599.8 2195.5,-2599.14 2196.82,-2604.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2041.97,-2641.49 2041.97,-2664.29 2146.03,-2664.29 2146.03,-2641.49 2041.97,-2641.49"/>
<text xml:space="preserve" text-anchor="start" x="2044.97" y="-2647.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">today’s events</text>
</g>
<!-- health&#45;&gt;mission -->
<g id="edge17" class="edge">
<title>health&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1971.95,-2452.16C2041.93,-2470.32 2124.42,-2491.71 2196.28,-2510.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2195.5,-2512.86 2203.42,-2512.2 2196.82,-2507.78 2195.5,-2512.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2047.81,-2496.49 2047.81,-2519.29 2140.19,-2519.29 2140.19,-2496.49 2047.81,-2496.49"/>
<text xml:space="preserve" text-anchor="start" x="2050.81" y="-2502.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">Health Report</text>
</g>
<!-- unread&#45;&gt;mailtriage -->
<g id="edge18" class="edge">
<title>unread&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1971.95,-220.33C2043.45,-257.42 2128.02,-301.29 2200.96,-339.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2199.7,-341.44 2207.57,-342.56 2202.12,-336.78 2199.7,-341.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2063.38,-308.97 2063.38,-331.77 2124.62,-331.77 2124.62,-308.97 2063.38,-308.97"/>
<text xml:space="preserve" text-anchor="start" x="2066.38" y="-314.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- texts&#45;&gt;mailtriage -->
<g id="edge19" class="edge">
<title>texts&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1976.44,-428C2046.48,-428 2128.37,-428 2199.43,-428"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2199.31,-430.63 2206.81,-428 2199.31,-425.38 2199.31,-430.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2061.43,-428 2061.43,-450.8 2126.57,-450.8 2126.57,-428 2061.43,-428"/>
<text xml:space="preserve" text-anchor="start" x="2064.43" y="-433.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">new texts</text>
</g>
<!-- appleapps&#45;&gt;calendar -->
<g id="edge2" class="edge">
<title>appleapps&#45;&gt;calendar</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M321.34,-3273.7C570.46,-3307.62 1061.41,-3341.95 1420.11,-3161 1576.69,-3082.01 1695.66,-2909.81 1759.31,-2799.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1761.58,-2801.28 1763.04,-2793.47 1757.03,-2798.67 1761.58,-2801.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="927.67,-3293.17 927.67,-3315.97 974.92,-3315.97 974.92,-3293.17 927.67,-3293.17"/>
<text xml:space="preserve" text-anchor="start" x="930.67" y="-3298.97" font-family="Arial" font-size="14.00" fill="#c9c9c9">events</text>
</g>
<!-- appleapps&#45;&gt;iphone -->
<g id="edge1" class="edge">
<title>appleapps&#45;&gt;iphone</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M161.38,-3157.02C161.38,-3118.6 161.38,-3073.61 161.38,-3034.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="164.01,-3034.22 161.38,-3026.72 158.76,-3034.22 164.01,-3034.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="136.2,-3079.1 136.2,-3101.9 157.77,-3101.9 157.77,-3079.1 136.2,-3079.1"/>
<text xml:space="preserve" text-anchor="start" x="139.2" y="-3084.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">on</text>
</g>
<!-- iphone&#45;&gt;chiprelay -->
<g id="edge3" class="edge">
<title>iphone&#45;&gt;chiprelay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M322.76,-2861.4C381.85,-2834.65 448.93,-2804.28 508.7,-2777.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="509.72,-2779.64 515.47,-2774.16 507.55,-2774.86 509.72,-2779.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="382.77,-2831.45 382.77,-2854.25 458.04,-2854.25 458.04,-2831.45 382.77,-2831.45"/>
<text xml:space="preserve" text-anchor="start" x="385.77" y="-2837.25" font-family="Arial" font-size="14.00" fill="#c9c9c9">button taps</text>
</g>
</g>
</svg>
`;case`email`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2746pt" height="1750pt"
 viewBox="0.00 0.00 2746.00 1750.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1735.05)">
<g id="clust1" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-579 408.04,-579 408.04,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_mail</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="526.4,-533 526.4,-1104 2686.41,-1104 2686.41,-533 526.4,-533"/>
<text xml:space="preserve" text-anchor="start" x="534.4" y="-1091.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMAIL &amp; TEXTS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_fieldagent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2264.58,-1118 2264.58,-1712 2708.21,-1712 2708.21,-1118 2264.58,-1118"/>
<text xml:space="preserve" text-anchor="start" x="2272.58" y="-1699.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FIELD AGENT</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2294.37,-260 2294.37,-525 2678.41,-525 2678.41,-260 2294.37,-260"/>
<text xml:space="preserve" text-anchor="start" x="2302.37" y="-512.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- launchd -->
<g id="node1" class="node">
<title>launchd</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.04,-518 48,-518 48,-338 368.04,-338 368.04,-518"/>
<text xml:space="preserve" text-anchor="start" x="101.29" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mac background agents</text>
<text xml:space="preserve" text-anchor="start" x="153.09" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">launchd · 2 agents</text>
<text xml:space="preserve" text-anchor="start" x="76.28" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The unread mail list, and a doorbell that</text>
<text xml:space="preserve" text-anchor="start" x="80.03" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">wakes Obsidian when the phone asks.</text>
</g>
<!-- brainengine -->
<g id="node2" class="node">
<title>brainengine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.04,-228 48,-228 48,-48 368.04,-48 368.04,-228"/>
<text xml:space="preserve" text-anchor="start" x="150.76" y="-159.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Brain Engine</text>
<text xml:space="preserve" text-anchor="start" x="163.21" y="-138.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Obsidian plugin</text>
<text xml:space="preserve" text-anchor="start" x="73.81" y="-117.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs most timers: every minute, every 5</text>
<text xml:space="preserve" text-anchor="start" x="120.89" y="-99.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">minutes, hourly, and daily.</text>
</g>
<!-- unread -->
<g id="node3" class="node">
<title>unread</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="890.72,-753 570.68,-753 570.68,-573 890.72,-573 890.72,-753"/>
<text xml:space="preserve" text-anchor="start" x="682.91" y="-684.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Unread list</text>
<text xml:space="preserve" text-anchor="start" x="659.18" y="-663.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="605.24" y="-642.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads new mail straight from the mail</text>
<text xml:space="preserve" text-anchor="start" x="704.03" y="-624.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">servers.</text>
</g>
<!-- texts -->
<g id="node4" class="node">
<title>texts</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="895.01,-1043 566.4,-1043 566.4,-863 895.01,-863 895.01,-1043"/>
<text xml:space="preserve" text-anchor="start" x="677.37" y="-974.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Texts mirror</text>
<text xml:space="preserve" text-anchor="start" x="659.18" y="-953.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="586.45" y="-932.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies new iMessages into the vault. Login</text>
<text xml:space="preserve" text-anchor="start" x="667.75" y="-914.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">codes are skipped.</text>
</g>
<!-- mailtriage -->
<g id="node5" class="node">
<title>mailtriage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1407.08,-792 1080.15,-792 1080.15,-612 1407.08,-612 1407.08,-792"/>
<text xml:space="preserve" text-anchor="start" x="1169.14" y="-723.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mail &amp; text triage</text>
<text xml:space="preserve" text-anchor="start" x="1115.7" y="-702.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI · once per Obsidian launch and when the</text>
<text xml:space="preserve" text-anchor="start" x="1100.21" y="-681.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Archives the noise and lists everything else</text>
<text xml:space="preserve" text-anchor="start" x="1176.49" y="-663.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">under Needs action.</text>
</g>
<!-- fold -->
<g id="node6" class="node">
<title>fold</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1977.33,-792 1657.29,-792 1657.29,-612 1977.33,-612 1977.33,-792"/>
<text xml:space="preserve" text-anchor="start" x="1743.94" y="-732.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Needs action list</text>
<text xml:space="preserve" text-anchor="start" x="1772.52" y="-711.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mission Control</text>
<text xml:space="preserve" text-anchor="start" x="1688.08" y="-690.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">One list per inbox. Tap a row to read it;</text>
<text xml:space="preserve" text-anchor="start" x="1686.82" y="-672.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">swipe or press to open, archive, delete,</text>
<text xml:space="preserve" text-anchor="start" x="1700.57" y="-654.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">triage, add to calendar, or respond.</text>
</g>
<!-- mailarchive -->
<g id="node7" class="node">
<title>mailarchive</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2646.41,-775.64C2646.41,-784.67 2574.69,-792 2486.39,-792 2398.1,-792 2326.37,-784.67 2326.37,-775.64 2326.37,-775.64 2326.37,-628.36 2326.37,-628.36 2326.37,-619.33 2398.1,-612 2486.39,-612 2574.69,-612 2646.41,-619.33 2646.41,-628.36 2646.41,-628.36 2646.41,-775.64 2646.41,-775.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2646.41,-775.64C2646.41,-766.61 2574.69,-759.27 2486.39,-759.27 2398.1,-759.27 2326.37,-766.61 2326.37,-775.64"/>
<text xml:space="preserve" text-anchor="start" x="2433.04" y="-723.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Mail archive</text>
<text xml:space="preserve" text-anchor="start" x="2416.68" y="-702.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">Documents/mail&#45;archive</text>
<text xml:space="preserve" text-anchor="start" x="2348.41" y="-681.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">The raw copy of every thread JT chose to</text>
<text xml:space="preserve" text-anchor="start" x="2468.04" y="-663.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">keep.</text>
</g>
<!-- mission -->
<g id="node8" class="node">
<title>mission</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2653.63,-1338 2319.16,-1338 2319.16,-1158 2653.63,-1158 2653.63,-1338"/>
<text xml:space="preserve" text-anchor="start" x="2417.48" y="-1278.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mission Control</text>
<text xml:space="preserve" text-anchor="start" x="2404" y="-1257.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">dashboard screen in the app</text>
<text xml:space="preserve" text-anchor="start" x="2352.16" y="-1236.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The front door. Shows today, mail, texts,</text>
<text xml:space="preserve" text-anchor="start" x="2339.21" y="-1218.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">calendar, and what each project needs next,</text>
<text xml:space="preserve" text-anchor="start" x="2443.86" y="-1200.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">updated live.</text>
</g>
<!-- relay -->
<g id="node9" class="node">
<title>relay</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2668.21,-1651 2304.58,-1651 2304.58,-1471 2668.21,-1471 2668.21,-1651"/>
<text xml:space="preserve" text-anchor="start" x="2435.25" y="-1591.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home base</text>
<text xml:space="preserve" text-anchor="start" x="2414.49" y="-1570.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node service on the Mac</text>
<text xml:space="preserve" text-anchor="start" x="2324.63" y="-1549.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Passes each phone message to Claude or Grok,</text>
<text xml:space="preserve" text-anchor="start" x="2336.74" y="-1531.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">streams the answer back, and keeps Mission</text>
<text xml:space="preserve" text-anchor="start" x="2399.27" y="-1513.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Control live from the vault.</text>
</g>
<!-- ingest -->
<g id="node10" class="node">
<title>ingest</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2646.41,-455.64C2646.41,-464.67 2574.69,-472 2486.39,-472 2398.1,-472 2326.37,-464.67 2326.37,-455.64 2326.37,-455.64 2326.37,-308.36 2326.37,-308.36 2326.37,-299.33 2398.1,-292 2486.39,-292 2574.69,-292 2646.41,-299.33 2646.41,-308.36 2646.41,-308.36 2646.41,-455.64 2646.41,-455.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2646.41,-455.64C2646.41,-446.61 2574.69,-439.27 2486.39,-439.27 2398.1,-439.27 2326.37,-446.61 2326.37,-455.64"/>
<text xml:space="preserve" text-anchor="start" x="2450.81" y="-385" font-family="Arial" font-size="20.00" fill="#eef2ff">0 Ingest</text>
<text xml:space="preserve" text-anchor="start" x="2346.75" y="-362" font-family="Arial" font-size="15.00" fill="#c7d2fe">The in&#45;tray. Every capture lands here first.</text>
</g>
<!-- jt -->
<g id="node11" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1988.69,-1344 1645.93,-1344 1645.93,-1164 1988.69,-1164 1988.69,-1344"/>
<text xml:space="preserve" text-anchor="start" x="1806.2" y="-1266" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="1665.99" y="-1243" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="1790.62" y="-1225" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- gmail -->
<g id="node12" class="node">
<title>gmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2646.41,-182 2326.37,-182 2326.37,-2 2646.41,-2 2646.41,-182"/>
<text xml:space="preserve" text-anchor="start" x="2460.28" y="-95" font-family="Arial" font-size="20.00" fill="#f8fafc">Gmail</text>
<text xml:space="preserve" text-anchor="start" x="2440.12" y="-72" font-family="Arial" font-size="15.00" fill="#cbd5e1">Main mailbox.</text>
</g>
<!-- icloudmail -->
<g id="node13" class="node">
<title>icloudmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="368.04,-808 48,-808 48,-628 368.04,-628 368.04,-808"/>
<text xml:space="preserve" text-anchor="start" x="158.56" y="-721" font-family="Arial" font-size="20.00" fill="#f8fafc">iCloud Mail</text>
<text xml:space="preserve" text-anchor="start" x="152.57" y="-698" font-family="Arial" font-size="15.00" fill="#cbd5e1">Second mailbox.</text>
</g>
<!-- launchd&#45;&gt;unread -->
<g id="edge5" class="edge">
<title>launchd&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.72,-499.62C429.03,-527.3 499.27,-559 561.46,-587.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="560.3,-589.42 568.21,-590.11 562.46,-584.64 560.3,-589.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="428.04,-559.57 428.04,-582.37 506.4,-582.37 506.4,-559.57 428.04,-559.57"/>
<text xml:space="preserve" text-anchor="start" x="431.04" y="-565.37" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- brainengine&#45;&gt;texts -->
<g id="edge6" class="edge">
<title>brainengine&#45;&gt;texts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M350.76,-227.95C371.45,-244.71 391.36,-263.23 408.04,-283 471.46,-358.16 481.03,-386.19 506.4,-481.2 525.17,-551.5 491.12,-744.37 526.4,-808 536.24,-825.76 549.29,-841.87 564.04,-856.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="561.96,-858 569.21,-861.24 565.57,-854.18 561.96,-858"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="428.04,-481.2 428.04,-504 506.4,-504 506.4,-481.2 428.04,-481.2"/>
<text xml:space="preserve" text-anchor="start" x="431.04" y="-487" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- brainengine&#45;&gt;mailtriage -->
<g id="edge7" class="edge">
<title>brainengine&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M368.02,-212.45C413.01,-234.06 461.84,-258.03 506.4,-281 709.94,-385.93 937.89,-518.75 1085.48,-606.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1083.82,-608.91 1091.6,-610.5 1086.51,-604.4 1083.82,-608.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="677.89,-491.64 677.89,-514.44 783.52,-514.44 783.52,-491.64 677.89,-491.64"/>
<text xml:space="preserve" text-anchor="start" x="680.89" y="-497.44" font-family="Arial" font-size="14.00" fill="#c9c9c9">once per launch</text>
</g>
<!-- unread&#45;&gt;mailtriage -->
<g id="edge8" class="edge">
<title>unread&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M890.56,-675.13C947.48,-679.47 1011.91,-684.39 1069.95,-688.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1069.64,-691.43 1077.32,-689.38 1070.04,-686.19 1069.64,-691.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="956.96,-684.84 956.96,-707.64 1018.2,-707.64 1018.2,-684.84 956.96,-684.84"/>
<text xml:space="preserve" text-anchor="start" x="959.96" y="-690.64" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- texts&#45;&gt;mailtriage -->
<g id="edge9" class="edge">
<title>texts&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M894.76,-872.89C950.92,-845.3 1013.96,-814.33 1070.79,-786.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1071.94,-788.78 1077.51,-783.11 1069.62,-784.06 1071.94,-788.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="955.01,-842.53 955.01,-865.33 1020.15,-865.33 1020.15,-842.53 955.01,-842.53"/>
<text xml:space="preserve" text-anchor="start" x="958.01" y="-848.33" font-family="Arial" font-size="14.00" fill="#c9c9c9">new texts</text>
</g>
<!-- mailtriage&#45;&gt;fold -->
<g id="edge10" class="edge">
<title>mailtriage&#45;&gt;fold</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1406.91,-702C1482.1,-702 1571.42,-702 1647.41,-702"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1647.03,-704.63 1654.53,-702 1647.03,-699.38 1647.03,-704.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1467.08,-702 1467.08,-724.8 1585.93,-724.8 1585.93,-702 1467.08,-702"/>
<text xml:space="preserve" text-anchor="start" x="1470.08" y="-707.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- fold&#45;&gt;mailarchive -->
<g id="edge13" class="edge">
<title>fold&#45;&gt;mailarchive</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1977.25,-702C2079.15,-702 2211.35,-702 2315.36,-702"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2315.12,-704.63 2322.62,-702 2315.12,-699.38 2315.12,-704.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2072.82,-702 2072.82,-724.8 2220.45,-724.8 2220.45,-702 2072.82,-702"/>
<text xml:space="preserve" text-anchor="start" x="2075.82" y="-707.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: raw copy</text>
</g>
<!-- fold&#45;&gt;mission -->
<g id="edge14" class="edge">
<title>fold&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1977.21,-736.42C2070.81,-765.39 2182.67,-816.94 2244.58,-906.2 2301.74,-988.62 2209.09,-1047.44 2264.58,-1131 2276.8,-1149.41 2292.91,-1165.13 2310.87,-1178.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2309.15,-1180.5 2316.77,-1182.72 2312.2,-1176.22 2309.15,-1180.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2078.27,-906.2 2078.27,-929 2214.99,-929 2214.99,-906.2 2078.27,-906.2"/>
<text xml:space="preserve" text-anchor="start" x="2081.27" y="-912" font-family="Arial" font-size="14.00" fill="#c9c9c9">Email and Texts tabs</text>
</g>
<!-- fold&#45;&gt;ingest -->
<g id="edge15" class="edge">
<title>fold&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1977.25,-625.76C2079.46,-576.72 2212.15,-513.08 2316.3,-463.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2317.3,-465.55 2322.92,-459.94 2315.02,-460.81 2317.3,-465.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2048.69,-589.36 2048.69,-612.16 2244.58,-612.16 2244.58,-589.36 2048.69,-589.36"/>
<text xml:space="preserve" text-anchor="start" x="2051.69" y="-595.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
<!-- fold&#45;&gt;jt -->
<g id="edge11" class="edge">
<title>fold&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1657.3,-790.53C1559.12,-857.28 1461.68,-954.19 1515.55,-1054.4 1542.76,-1105.03 1589.07,-1144.96 1637.36,-1175.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1635.73,-1177.47 1643.49,-1179.17 1638.49,-1173 1635.73,-1177.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1467.08,-1031.6 1467.08,-1054.4 1585.93,-1054.4 1585.93,-1031.6 1467.08,-1031.6"/>
<text xml:space="preserve" text-anchor="start" x="1470.08" y="-1037.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- fold&#45;&gt;gmail -->
<g id="edge12" class="edge">
<title>fold&#45;&gt;gmail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1894.11,-612.28C1937.28,-563.35 1993.61,-502.98 2048.69,-454.2 2129.22,-382.87 2184.24,-401.07 2244.58,-312 2264.89,-282.01 2243.38,-262.37 2264.58,-233 2279.32,-212.57 2298.03,-194.38 2318.29,-178.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2319.67,-180.66 2324.03,-174.02 2316.48,-176.49 2319.67,-180.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2098.11,-454.2 2098.11,-477 2195.16,-477 2195.16,-454.2 2098.11,-454.2"/>
<text xml:space="preserve" text-anchor="start" x="2101.11" y="-460" font-family="Arial" font-size="14.00" fill="#c9c9c9">archive, delete</text>
</g>
<!-- mission&#45;&gt;relay -->
<g id="edge16" class="edge">
<title>mission&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2508.01,-1337.88C2509.72,-1347.61 2511.18,-1357.41 2512.19,-1366.86 2515.76,-1400.13 2515.76,-1408.87 2512.19,-1442.14 2511.53,-1448.34 2510.67,-1454.69 2509.68,-1461.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2507.15,-1460.31 2508.51,-1468.13 2512.33,-1461.16 2507.15,-1460.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2463.15,-1393.1 2463.15,-1415.9 2538.43,-1415.9 2538.43,-1393.1 2463.15,-1393.1"/>
<text xml:space="preserve" text-anchor="start" x="2466.15" y="-1398.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">button taps</text>
</g>
<!-- relay&#45;&gt;mailtriage -->
<g id="edge17" class="edge">
<title>relay&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2332.68,-1471.13C2306.07,-1448.85 2281.53,-1422.7 2264.58,-1393 2226.86,-1326.93 2287.44,-1285.85 2244.58,-1223 2143.5,-1074.78 1674.52,-871.71 1416.3,-768.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1417.57,-766.01 1409.63,-765.67 1415.62,-770.89 1417.57,-766.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1734.92,-1026.95 1734.92,-1049.75 1899.7,-1049.75 1899.7,-1026.95 1734.92,-1026.95"/>
<text xml:space="preserve" text-anchor="start" x="1737.92" y="-1032.75" font-family="Arial" font-size="14.00" fill="#c9c9c9">phone attaches, 3 h apart</text>
</g>
<!-- relay&#45;&gt;mission -->
<g id="edge18" class="edge">
<title>relay&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2486.39,-1471.02C2486.39,-1432.6 2486.39,-1387.61 2486.39,-1348.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2489.02,-1348.22 2486.39,-1340.72 2483.77,-1348.22 2489.02,-1348.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2431.63,-1393.1 2431.63,-1415.9 2512.35,-1415.9 2512.35,-1393.1 2431.63,-1393.1"/>
<text xml:space="preserve" text-anchor="start" x="2434.63" y="-1398.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">live updates</text>
</g>
<!-- jt&#45;&gt;fold -->
<g id="edge1" class="edge">
<title>jt&#45;&gt;fold</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1646.36,-1188.85C1564.47,-1146.18 1490.43,-1083.5 1522.56,-1003.6 1555.23,-922.34 1621.74,-851.16 1683.32,-798.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1684.86,-800.53 1688.88,-793.68 1681.46,-796.52 1684.86,-800.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1474.09,-1003.6 1474.09,-1026.4 1578.92,-1026.4 1578.92,-1003.6 1474.09,-1003.6"/>
<text xml:space="preserve" text-anchor="start" x="1477.09" y="-1009.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">presses buttons</text>
</g>
<!-- jt&#45;&gt;mission -->
<g id="edge2" class="edge">
<title>jt&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1988.37,-1252.47C2086.51,-1251.59 2209.75,-1250.48 2308.95,-1249.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2308.89,-1252.21 2316.37,-1249.52 2308.84,-1246.96 2308.89,-1252.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2121.85,-1251.89 2121.85,-1274.69 2171.42,-1274.69 2171.42,-1251.89 2121.85,-1251.89"/>
<text xml:space="preserve" text-anchor="start" x="2124.85" y="-1257.69" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks</text>
</g>
<!-- gmail&#45;&gt;unread -->
<g id="edge3" class="edge">
<title>gmail&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2326.4,-143.77C1996.17,-251.29 1238.66,-497.94 900.31,-608.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="899.62,-605.57 893.3,-610.38 901.25,-610.56 899.62,-605.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1495.88,-423.44 1495.88,-446.24 1557.13,-446.24 1557.13,-423.44 1495.88,-423.44"/>
<text xml:space="preserve" text-anchor="start" x="1498.88" y="-429.24" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- icloudmail&#45;&gt;unread -->
<g id="edge4" class="edge">
<title>icloudmail&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.72,-701.24C428.78,-694.79 498.7,-687.4 560.7,-680.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="560.78,-683.48 567.96,-680.08 560.23,-678.26 560.78,-683.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="436.6,-693.79 436.6,-716.59 497.84,-716.59 497.84,-693.79 436.6,-693.79"/>
<text xml:space="preserve" text-anchor="start" x="439.6" y="-699.59" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
</g>
</svg>
`;case`scanner`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2651pt" height="1700pt"
 viewBox="0.00 0.00 2651.00 1700.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1685.05)">
<g id="clust1" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1085.02,-818 1085.02,-1083 1469.06,-1083 1469.06,-818 1085.02,-818"/>
<text xml:space="preserve" text-anchor="start" x="1093.02" y="-1070.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="501.92,-1091 501.92,-1662 2611.12,-1662 2611.12,-1091 501.92,-1091"/>
<text xml:space="preserve" text-anchor="start" x="509.92" y="-1649.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCANNER</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_pi</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1065.66,-8 1065.66,-579 1488.42,-579 1488.42,-8 1065.66,-8"/>
<text xml:space="preserve" text-anchor="start" x="1073.66" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BRAINPI</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2192.09,-222 2192.09,-1083 2613.19,-1083 2613.19,-222 2192.09,-222"/>
<text xml:space="preserve" text-anchor="start" x="2200.09" y="-1070.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- brainengine -->
<g id="node1" class="node">
<title>brainengine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1437.06,-1030 1117.02,-1030 1117.02,-850 1437.06,-850 1437.06,-1030"/>
<text xml:space="preserve" text-anchor="start" x="1219.78" y="-961.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Brain Engine</text>
<text xml:space="preserve" text-anchor="start" x="1232.23" y="-940.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Obsidian plugin</text>
<text xml:space="preserve" text-anchor="start" x="1142.83" y="-919.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs most timers: every minute, every 5</text>
<text xml:space="preserve" text-anchor="start" x="1189.91" y="-901.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">minutes, hourly, and daily.</text>
</g>
<!-- scanner -->
<g id="node2" class="node">
<title>scanner</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="873.33,-1311 553.29,-1311 553.29,-1131 873.33,-1131 873.33,-1311"/>
<text xml:space="preserve" text-anchor="start" x="622.16" y="-1233" font-family="Arial" font-size="20.00" fill="#ffe0c2">Brother ADS&#45;1350W</text>
<text xml:space="preserve" text-anchor="start" x="587.82" y="-1210" font-family="Arial" font-size="15.00" fill="#f9b27c">Feeds paper. A blank sheet splits one</text>
<text xml:space="preserve" text-anchor="start" x="632.44" y="-1192" font-family="Arial" font-size="15.00" fill="#f9b27c">document from the next.</text>
</g>
<!-- raw -->
<g id="node3" class="node">
<title>raw</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1437.06,-1314.64C1437.06,-1323.67 1365.34,-1331 1277.04,-1331 1188.75,-1331 1117.02,-1323.67 1117.02,-1314.64 1117.02,-1314.64 1117.02,-1167.36 1117.02,-1167.36 1117.02,-1158.33 1188.75,-1151 1277.04,-1151 1365.34,-1151 1437.06,-1158.33 1437.06,-1167.36 1437.06,-1167.36 1437.06,-1314.64 1437.06,-1314.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1437.06,-1314.64C1437.06,-1305.61 1365.34,-1298.27 1277.04,-1298.27 1188.75,-1298.27 1117.02,-1305.61 1117.02,-1314.64"/>
<text xml:space="preserve" text-anchor="start" x="1228.14" y="-1253.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Raw scans</text>
<text xml:space="preserve" text-anchor="start" x="1214.53" y="-1232.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">brainpi · holding area</text>
<text xml:space="preserve" text-anchor="start" x="1152" y="-1211.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Image&#45;only PDFs waiting for the Mac.</text>
</g>
<!-- ocr -->
<g id="node4" class="node">
<title>ocr</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1984.31,-1331 1664.27,-1331 1664.27,-1151 1984.31,-1151 1984.31,-1331"/>
<text xml:space="preserve" text-anchor="start" x="1744.54" y="-1271.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Scan sync + OCR</text>
<text xml:space="preserve" text-anchor="start" x="1749.15" y="-1250.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1704.65" y="-1229.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls each raw scan, makes the text</text>
<text xml:space="preserve" text-anchor="start" x="1695.88" y="-1211.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">searchable, deletes the Pi copy once it</text>
<text xml:space="preserve" text-anchor="start" x="1786.35" y="-1193.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">checks out.</text>
</g>
<!-- rename -->
<g id="node5" class="node">
<title>rename</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="884.7,-1601 541.92,-1601 541.92,-1421 884.7,-1421 884.7,-1601"/>
<text xml:space="preserve" text-anchor="start" x="646.04" y="-1532.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Rename dialog</text>
<text xml:space="preserve" text-anchor="start" x="677.18" y="-1511.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">during triage</text>
<text xml:space="preserve" text-anchor="start" x="561.98" y="-1490.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Proposes a real file name from what the page</text>
<text xml:space="preserve" text-anchor="start" x="592.41" y="-1472.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">says. Ignore it to keep the old name.</text>
</g>
<!-- pdf -->
<g id="node6" class="node">
<title>pdf</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2571.12,-1314.64C2571.12,-1323.67 2495.6,-1331 2402.64,-1331 2309.67,-1331 2234.16,-1323.67 2234.16,-1314.64 2234.16,-1314.64 2234.16,-1167.36 2234.16,-1167.36 2234.16,-1158.33 2309.67,-1151 2402.64,-1151 2495.6,-1151 2571.12,-1158.33 2571.12,-1167.36 2571.12,-1167.36 2571.12,-1314.64 2571.12,-1314.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2571.12,-1314.64C2571.12,-1305.61 2495.6,-1298.27 2402.64,-1298.27 2309.67,-1298.27 2234.16,-1305.61 2234.16,-1314.64"/>
<text xml:space="preserve" text-anchor="start" x="2335.38" y="-1262.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Scanned PDFs</text>
<text xml:space="preserve" text-anchor="start" x="2328.94" y="-1241.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">Documents/scans/&lt;year&gt;</text>
<text xml:space="preserve" text-anchor="start" x="2254.21" y="-1220.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">The keeper copy. Opens on the Mac and the</text>
<text xml:space="preserve" text-anchor="start" x="2379.7" y="-1202.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">phone.</text>
</g>
<!-- scanwatch -->
<g id="node7" class="node">
<title>scanwatch</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1440.1,-228 1113.99,-228 1113.99,-48 1440.1,-48 1440.1,-228"/>
<text xml:space="preserve" text-anchor="start" x="1216.46" y="-159.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Scan watcher</text>
<text xml:space="preserve" text-anchor="start" x="1229.71" y="-138.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 2 seconds</text>
<text xml:space="preserve" text-anchor="start" x="1134.04" y="-117.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Notices paper in the scanner and starts the</text>
<text xml:space="preserve" text-anchor="start" x="1259.12" y="-99.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">scan.</text>
</g>
<!-- ocrfallback -->
<g id="node8" class="node">
<title>ocrfallback</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1448.42,-518 1105.66,-518 1105.66,-338 1448.42,-338 1448.42,-518"/>
<text xml:space="preserve" text-anchor="start" x="1218.69" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Backup OCR</text>
<text xml:space="preserve" text-anchor="start" x="1243.45" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 2 min</text>
<text xml:space="preserve" text-anchor="start" x="1125.72" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Makes a scan searchable itself if the Mac has</text>
<text xml:space="preserve" text-anchor="start" x="1175.73" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">not picked it up within an hour.</text>
</g>
<!-- ingest -->
<g id="node9" class="node">
<title>ingest</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2562.66,-1005.64C2562.66,-1014.67 2490.94,-1022 2402.64,-1022 2314.34,-1022 2242.62,-1014.67 2242.62,-1005.64 2242.62,-1005.64 2242.62,-858.36 2242.62,-858.36 2242.62,-849.33 2314.34,-842 2402.64,-842 2490.94,-842 2562.66,-849.33 2562.66,-858.36 2562.66,-858.36 2562.66,-1005.64 2562.66,-1005.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2562.66,-1005.64C2562.66,-996.61 2490.94,-989.27 2402.64,-989.27 2314.34,-989.27 2242.62,-996.61 2242.62,-1005.64"/>
<text xml:space="preserve" text-anchor="start" x="2367.06" y="-935" font-family="Arial" font-size="20.00" fill="#eef2ff">0 Ingest</text>
<text xml:space="preserve" text-anchor="start" x="2263" y="-912" font-family="Arial" font-size="15.00" fill="#c7d2fe">The in&#45;tray. Every capture lands here first.</text>
</g>
<!-- triage -->
<g id="node10" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2566.93,-442 2238.34,-442 2238.34,-262 2566.93,-262 2566.93,-442"/>
<text xml:space="preserve" text-anchor="start" x="2352.05" y="-373.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault triage</text>
<text xml:space="preserve" text-anchor="start" x="2345.93" y="-352.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok skill</text>
<text xml:space="preserve" text-anchor="start" x="2258.4" y="-331.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="2368.45" y="-313.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- pdftext -->
<g id="node11" class="node">
<title>pdftext</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2573.19,-715.64C2573.19,-724.67 2496.74,-732 2402.64,-732 2308.53,-732 2232.09,-724.67 2232.09,-715.64 2232.09,-715.64 2232.09,-568.36 2232.09,-568.36 2232.09,-559.33 2308.53,-552 2402.64,-552 2496.74,-552 2573.19,-559.33 2573.19,-568.36 2573.19,-568.36 2573.19,-715.64 2573.19,-715.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2573.19,-715.64C2573.19,-706.61 2496.74,-699.27 2402.64,-699.27 2308.53,-699.27 2232.09,-706.61 2232.09,-715.64"/>
<text xml:space="preserve" text-anchor="start" x="2338.17" y="-663.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Document text</text>
<text xml:space="preserve" text-anchor="start" x="2336.9" y="-642.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">3 Resources/PDF Text</text>
<text xml:space="preserve" text-anchor="start" x="2252.15" y="-621.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Searchable text of every document, with links</text>
<text xml:space="preserve" text-anchor="start" x="2330.5" y="-603.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">that open the original.</text>
</g>
<!-- jt -->
<g id="node12" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="342.76,-1311 0,-1311 0,-1131 342.76,-1131 342.76,-1311"/>
<text xml:space="preserve" text-anchor="start" x="160.27" y="-1233" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1210" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="144.69" y="-1192" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- docs -->
<g id="node13" class="node">
<title>docs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1994.01,-1030 1654.56,-1030 1654.56,-850 1994.01,-850 1994.01,-1030"/>
<text xml:space="preserve" text-anchor="start" x="1763.14" y="-970.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="1768.66" y="-949.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1702.56" y="-928.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="1674.62" y="-910.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="1818.45" y="-892.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- brainengine&#45;&gt;ocr -->
<g id="edge2" class="edge">
<title>brainengine&#45;&gt;ocr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1436.85,-1027.67C1505.59,-1065.61 1586.09,-1110.06 1655.78,-1148.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1654.17,-1150.64 1662.01,-1151.97 1656.71,-1146.04 1654.17,-1150.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1508.42,-1108.52 1508.42,-1131.32 1594.56,-1131.32 1594.56,-1108.52 1508.42,-1108.52"/>
<text xml:space="preserve" text-anchor="start" x="1511.42" y="-1114.32" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- brainengine&#45;&gt;docs -->
<g id="edge3" class="edge">
<title>brainengine&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1437.02,-931.82C1487.4,-930.1 1543.31,-929.1 1594.56,-930.2 1610.69,-930.55 1627.45,-931.03 1644.24,-931.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1644.07,-934.21 1651.66,-931.85 1644.26,-928.97 1644.07,-934.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1529.43,-930.2 1529.43,-953 1573.56,-953 1573.56,-930.2 1529.43,-930.2"/>
<text xml:space="preserve" text-anchor="start" x="1532.43" y="-936" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- scanner&#45;&gt;raw -->
<g id="edge5" class="edge">
<title>scanner&#45;&gt;raw</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M873.03,-1226.65C945.69,-1229.24 1031.9,-1232.31 1105.9,-1234.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1105.64,-1237.56 1113.23,-1235.2 1105.83,-1232.31 1105.64,-1237.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="944.7,-1232.79 944.7,-1255.59 1045.66,-1255.59 1045.66,-1232.79 944.7,-1232.79"/>
<text xml:space="preserve" text-anchor="start" x="947.7" y="-1238.59" font-family="Arial" font-size="14.00" fill="#c9c9c9">scanned pages</text>
</g>
<!-- scanner&#45;&gt;scanwatch -->
<g id="edge4" class="edge">
<title>scanner&#45;&gt;scanwatch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M728.48,-1131.24C760.54,-952.57 853.07,-546.91 1065.66,-283 1079.85,-265.39 1096.72,-249.05 1114.65,-234.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1115.88,-236.55 1120.05,-229.78 1112.57,-232.47 1115.88,-236.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="945.48,-464.77 945.48,-487.57 1044.88,-487.57 1044.88,-464.77 945.48,-464.77"/>
<text xml:space="preserve" text-anchor="start" x="948.48" y="-470.57" font-family="Arial" font-size="14.00" fill="#c9c9c9">paper detected</text>
</g>
<!-- raw&#45;&gt;ocr -->
<g id="edge7" class="edge">
<title>raw&#45;&gt;ocr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1437.95,-1241C1505.8,-1241 1584.95,-1241 1653.8,-1241"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1653.8,-1243.63 1661.3,-1241 1653.8,-1238.38 1653.8,-1243.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1520.47,-1241 1520.47,-1263.8 1582.51,-1263.8 1582.51,-1241 1520.47,-1241"/>
<text xml:space="preserve" text-anchor="start" x="1523.47" y="-1246.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">pulled by</text>
</g>
<!-- raw&#45;&gt;ocrfallback -->
<g id="edge8" class="edge">
<title>raw&#45;&gt;ocrfallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1116.1,-1161.4C1096.95,-1146.49 1079.37,-1129.39 1065.66,-1110 914.9,-896.83 988.88,-852.75 1004.13,-805.6 1038.73,-698.68 1116.16,-596.59 1179.74,-525.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1181.52,-527.52 1184.6,-520.2 1177.63,-524.01 1181.52,-527.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="957.16,-805.6 957.16,-828.4 1033.21,-828.4 1033.21,-805.6 957.16,-805.6"/>
<text xml:space="preserve" text-anchor="start" x="960.16" y="-811.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">left an hour</text>
</g>
<!-- ocr&#45;&gt;pdf -->
<g id="edge10" class="edge">
<title>ocr&#45;&gt;pdf</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1984.3,-1241C2058.36,-1241 2146.77,-1241 2223.12,-1241"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2222.8,-1243.63 2230.3,-1241 2222.8,-1238.38 2222.8,-1243.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2059.86,-1241 2059.86,-1263.8 2166.24,-1263.8 2166.24,-1241 2059.86,-1241"/>
<text xml:space="preserve" text-anchor="start" x="2062.86" y="-1246.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">searchable PDF</text>
</g>
<!-- ocr&#45;&gt;ingest -->
<g id="edge9" class="edge">
<title>ocr&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1984.3,-1155.75C2062.59,-1113.78 2156.9,-1063.21 2236.05,-1020.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2237.1,-1023.19 2242.47,-1017.34 2234.62,-1018.57 2237.1,-1023.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2054.01,-1114.18 2054.01,-1136.98 2172.09,-1136.98 2172.09,-1114.18 2054.01,-1114.18"/>
<text xml:space="preserve" text-anchor="start" x="2057.01" y="-1119.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">one note per scan</text>
</g>
<!-- rename&#45;&gt;pdf -->
<g id="edge13" class="edge">
<title>rename&#45;&gt;pdf</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M884.59,-1507.55C1131.79,-1499.58 1603.21,-1473.21 1994.01,-1386 2070.85,-1368.85 2153.11,-1341.44 2223.46,-1315.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2224.39,-1317.49 2230.48,-1312.39 2222.53,-1312.58 2224.39,-1317.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1521.26,-1463.51 1521.26,-1486.31 1581.73,-1486.31 1581.73,-1463.51 1521.26,-1463.51"/>
<text xml:space="preserve" text-anchor="start" x="1524.26" y="-1469.31" font-family="Arial" font-size="14.00" fill="#c9c9c9">renames</text>
</g>
<!-- pdf&#45;&gt;docs -->
<g id="edge14" class="edge">
<title>pdf&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2234.35,-1157.33C2218.04,-1143.47 2203.39,-1127.73 2192.09,-1110 2172.62,-1079.45 2198.95,-972.51 2172.09,-948.2 2127.25,-907.6 2064.21,-897.6 2004.15,-900.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2004.12,-897.81 1996.79,-900.87 2004.43,-903.05 2004.12,-897.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2085.53,-948.2 2085.53,-971 2140.57,-971 2140.57,-948.2 2085.53,-948.2"/>
<text xml:space="preserve" text-anchor="start" x="2088.53" y="-954" font-family="Arial" font-size="14.00" fill="#c9c9c9">indexed</text>
</g>
<!-- scanwatch&#45;&gt;raw -->
<g id="edge6" class="edge">
<title>scanwatch&#45;&gt;raw</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1114.02,-226.6C1095.12,-243.04 1078.17,-261.83 1065.66,-283 986.62,-416.85 963.91,-828.17 999.86,-979.4 1014.89,-1042.64 1021.77,-1062.06 1065.66,-1110 1079.19,-1124.78 1094.76,-1138.5 1111.19,-1151.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1109.32,-1152.94 1116.89,-1155.33 1112.46,-1148.74 1109.32,-1152.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="952.88,-956.6 952.88,-979.4 1037.48,-979.4 1037.48,-956.6 952.88,-956.6"/>
<text xml:space="preserve" text-anchor="start" x="955.88" y="-962.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">saves pages</text>
</g>
<!-- ingest&#45;&gt;triage -->
<g id="edge11" class="edge">
<title>ingest&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2241.71,-912.44C2200.34,-899.29 2160.38,-877.7 2134.97,-842.4 2044.07,-716.12 2107.93,-627.87 2192.09,-497 2203.54,-479.2 2218.03,-462.99 2234.04,-448.41"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2235.34,-450.76 2239.22,-443.83 2231.86,-446.83 2235.34,-450.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2086.7,-819.6 2086.7,-842.4 2139.4,-842.4 2139.4,-819.6 2086.7,-819.6"/>
<text xml:space="preserve" text-anchor="start" x="2089.7" y="-825.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">read by</text>
</g>
<!-- triage&#45;&gt;rename -->
<g id="edge12" class="edge">
<title>triage&#45;&gt;rename</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2238.4,-397.28C1862.46,-501.88 966,-753.39 944.7,-779 860.85,-879.81 945.69,-1249.92 884.7,-1366 875.7,-1383.13 863.75,-1399.08 850.34,-1413.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="848.55,-1411.74 845.29,-1418.98 852.36,-1415.35 848.55,-1411.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1524.38,-600.68 1524.38,-623.48 1578.61,-623.48 1578.61,-600.68 1524.38,-600.68"/>
<text xml:space="preserve" text-anchor="start" x="1527.38" y="-606.48" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
<!-- jt&#45;&gt;scanner -->
<g id="edge1" class="edge">
<title>jt&#45;&gt;scanner</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M342.47,-1221C406.59,-1221 479.44,-1221 543.44,-1221"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="543.11,-1223.63 550.61,-1221 543.11,-1218.38 543.11,-1223.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="402.76,-1221 402.76,-1243.8 481.92,-1243.8 481.92,-1221 402.76,-1221"/>
<text xml:space="preserve" text-anchor="start" x="405.76" y="-1226.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">loads paper</text>
</g>
<!-- docs&#45;&gt;pdftext -->
<g id="edge15" class="edge">
<title>docs&#45;&gt;pdftext</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1941.75,-850.16C1976.75,-825.38 2015.98,-799.7 2054.01,-779.2 2106.79,-750.75 2166.76,-724.97 2221.85,-703.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2222.48,-706.2 2228.53,-701.06 2220.59,-701.3 2222.48,-706.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2087.88,-779.2 2087.88,-802 2138.23,-802 2138.23,-779.2 2087.88,-779.2"/>
<text xml:space="preserve" text-anchor="start" x="2090.88" y="-785" font-family="Arial" font-size="14.00" fill="#c9c9c9">full text</text>
</g>
</g>
</svg>
`;case`piView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2130pt" height="2630pt"
 viewBox="0.00 0.00 2130.00 2630.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2615.05)">
<g id="clust1" class="cluster">
<title>cluster_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-1725 8,-2319 408.04,-2319 408.04,-1725 8,-1725"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-2306.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCANNER</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_pi</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="552.55,-588 552.55,-2319 1568.76,-2319 1568.76,-588 552.55,-588"/>
<text xml:space="preserve" text-anchor="start" x="560.55" y="-2306.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BRAINPI</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_printing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="552.14,-8 552.14,-579 975.71,-579 975.71,-8 552.14,-8"/>
<text xml:space="preserve" text-anchor="start" x="560.14" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">3D PRINTING</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_backups</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="11.31,-1176 11.31,-1441 404.73,-1441 404.73,-1176 11.31,-1176"/>
<text xml:space="preserve" text-anchor="start" x="19.31" y="-1428.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKUPS</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1167.42,-2327 1167.42,-2592 1551.46,-2592 1551.46,-2327 1167.42,-2327"/>
<text xml:space="preserve" text-anchor="start" x="1175.42" y="-2579.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<!-- scanner -->
<g id="node1" class="node">
<title>scanner</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="368.04,-2258 48,-2258 48,-2078 368.04,-2078 368.04,-2258"/>
<text xml:space="preserve" text-anchor="start" x="116.87" y="-2180" font-family="Arial" font-size="20.00" fill="#ffe0c2">Brother ADS&#45;1350W</text>
<text xml:space="preserve" text-anchor="start" x="82.53" y="-2157" font-family="Arial" font-size="15.00" fill="#f9b27c">Feeds paper. A blank sheet splits one</text>
<text xml:space="preserve" text-anchor="start" x="127.15" y="-2139" font-family="Arial" font-size="15.00" fill="#f9b27c">document from the next.</text>
</g>
<!-- raw -->
<g id="node2" class="node">
<title>raw</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M368.04,-1928.64C368.04,-1937.67 296.32,-1945 208.02,-1945 119.72,-1945 48,-1937.67 48,-1928.64 48,-1928.64 48,-1781.36 48,-1781.36 48,-1772.33 119.72,-1765 208.02,-1765 296.32,-1765 368.04,-1772.33 368.04,-1781.36 368.04,-1781.36 368.04,-1928.64 368.04,-1928.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M368.04,-1928.64C368.04,-1919.61 296.32,-1912.27 208.02,-1912.27 119.72,-1912.27 48,-1919.61 48,-1928.64"/>
<text xml:space="preserve" text-anchor="start" x="159.11" y="-1867.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Raw scans</text>
<text xml:space="preserve" text-anchor="start" x="145.51" y="-1846.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">brainpi · holding area</text>
<text xml:space="preserve" text-anchor="start" x="82.97" y="-1825.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Image&#45;only PDFs waiting for the Mac.</text>
</g>
<!-- mirror -->
<g id="node3" class="node">
<title>mirror</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="923.94,-808 603.9,-808 603.9,-628 923.94,-628 923.94,-808"/>
<text xml:space="preserve" text-anchor="start" x="704.48" y="-739.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Nightly mirror</text>
<text xml:space="preserve" text-anchor="start" x="740.44" y="-718.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">3:30 am</text>
<text xml:space="preserve" text-anchor="start" x="625.1" y="-697.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the Pi’s working files to a second</text>
<text xml:space="preserve" text-anchor="start" x="661.8" y="-679.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">disk. Time Machine is skipped.</text>
</g>
<!-- camera -->
<g id="node4" class="node">
<title>camera</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="928.21,-1098 599.64,-1098 599.64,-918 928.21,-918 928.21,-1098"/>
<text xml:space="preserve" text-anchor="start" x="703.9" y="-1029.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Camera relay</text>
<text xml:space="preserve" text-anchor="start" x="745.86" y="-1008.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">go2rtc</text>
<text xml:space="preserve" text-anchor="start" x="619.69" y="-987.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Takes the printer camera and serves it as a</text>
<text xml:space="preserve" text-anchor="start" x="718.91" y="-969.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">video stream.</text>
</g>
<!-- scanwatch -->
<g id="node5" class="node">
<title>scanwatch</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="926.98,-2258 600.87,-2258 600.87,-2078 926.98,-2078 926.98,-2258"/>
<text xml:space="preserve" text-anchor="start" x="703.34" y="-2189.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Scan watcher</text>
<text xml:space="preserve" text-anchor="start" x="716.59" y="-2168.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 2 seconds</text>
<text xml:space="preserve" text-anchor="start" x="620.93" y="-2147.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Notices paper in the scanner and starts the</text>
<text xml:space="preserve" text-anchor="start" x="746" y="-2129.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">scan.</text>
</g>
<!-- tmshare -->
<g id="node6" class="node">
<title>tmshare</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M923.94,-1371.64C923.94,-1380.67 852.22,-1388 763.92,-1388 675.63,-1388 603.9,-1380.67 603.9,-1371.64 603.9,-1371.64 603.9,-1224.36 603.9,-1224.36 603.9,-1215.33 675.63,-1208 763.92,-1208 852.22,-1208 923.94,-1215.33 923.94,-1224.36 923.94,-1224.36 923.94,-1371.64 923.94,-1371.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M923.94,-1371.64C923.94,-1362.61 852.22,-1355.27 763.92,-1355.27 675.63,-1355.27 603.9,-1362.61 603.9,-1371.64"/>
<text xml:space="preserve" text-anchor="start" x="673.33" y="-1310.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Time Machine share</text>
<text xml:space="preserve" text-anchor="start" x="736.83" y="-1289.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">4 TB disk</text>
<text xml:space="preserve" text-anchor="start" x="624.28" y="-1268.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Where the Mac backs itself up, encrypted.</text>
</g>
<!-- heartbeat -->
<g id="node7" class="node">
<title>heartbeat</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="925.73,-1968 602.12,-1968 602.12,-1788 925.73,-1788 925.73,-1968"/>
<text xml:space="preserve" text-anchor="start" x="720.01" y="-1899.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Heartbeat</text>
<text xml:space="preserve" text-anchor="start" x="724.54" y="-1878.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 6 hours</text>
<text xml:space="preserve" text-anchor="start" x="622.17" y="-1857.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reports disk space and drive health so the</text>
<text xml:space="preserve" text-anchor="start" x="664.7" y="-1839.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Health Report notices trouble.</text>
</g>
<!-- tunnel -->
<g id="node8" class="node">
<title>tunnel</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1519.46,-1098 1199.42,-1098 1199.42,-918 1519.46,-918 1519.46,-1098"/>
<text xml:space="preserve" text-anchor="start" x="1328.87" y="-1029.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Tunnel</text>
<text xml:space="preserve" text-anchor="start" x="1327.65" y="-1008.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">cloudflared</text>
<text xml:space="preserve" text-anchor="start" x="1229.79" y="-987.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Sends that stream out to the public site</text>
<text xml:space="preserve" text-anchor="start" x="1295.65" y="-969.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">through Cloudflare.</text>
</g>
<!-- printwatch -->
<g id="node9" class="node">
<title>printwatch</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1528.76,-808 1190.13,-808 1190.13,-628 1528.76,-628 1528.76,-808"/>
<text xml:space="preserve" text-anchor="start" x="1301.09" y="-739.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Print watcher</text>
<text xml:space="preserve" text-anchor="start" x="1302.72" y="-718.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">listens to the printer</text>
<text xml:space="preserve" text-anchor="start" x="1210.18" y="-697.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">When a print finishes, grabs a bed photo and</text>
<text xml:space="preserve" text-anchor="start" x="1291.5" y="-679.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">drafts a gallery card.</text>
</g>
<!-- ocrfallback -->
<g id="node10" class="node">
<title>ocrfallback</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="935.3,-1678 592.55,-1678 592.55,-1498 935.3,-1498 935.3,-1678"/>
<text xml:space="preserve" text-anchor="start" x="705.57" y="-1609.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Backup OCR</text>
<text xml:space="preserve" text-anchor="start" x="730.33" y="-1588.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 2 min</text>
<text xml:space="preserve" text-anchor="start" x="612.6" y="-1567.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Makes a scan searchable itself if the Mac has</text>
<text xml:space="preserve" text-anchor="start" x="662.61" y="-1549.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">not picked it up within an hour.</text>
</g>
<!-- printer -->
<g id="node11" class="node">
<title>printer</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="935.71,-518 592.14,-518 592.14,-338 935.71,-338 935.71,-518"/>
<text xml:space="preserve" text-anchor="start" x="710.56" y="-440" font-family="Arial" font-size="20.00" fill="#ffe0c2">Bambu P2S</text>
<text xml:space="preserve" text-anchor="start" x="612.19" y="-417" font-family="Arial" font-size="15.00" fill="#f9b27c">The 3D printer. Reports its status and camera</text>
<text xml:space="preserve" text-anchor="start" x="685.55" y="-399" font-family="Arial" font-size="15.00" fill="#f9b27c">over the home network.</text>
</g>
<!-- publish -->
<g id="node12" class="node">
<title>publish</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="923.94,-228 603.9,-228 603.9,-48 923.94,-48 923.94,-228"/>
<text xml:space="preserve" text-anchor="start" x="697.78" y="-159.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gallery publish</text>
<text xml:space="preserve" text-anchor="start" x="646.51" y="-138.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min and right after a finish</text>
<text xml:space="preserve" text-anchor="start" x="631.77" y="-117.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls the drafted card, fills in the details,</text>
<text xml:space="preserve" text-anchor="start" x="682.62" y="-99.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">and pushes it to the site.</text>
</g>
<!-- timemachine -->
<g id="node13" class="node">
<title>timemachine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="372.73,-1388 43.31,-1388 43.31,-1208 372.73,-1208 372.73,-1388"/>
<text xml:space="preserve" text-anchor="start" x="145.22" y="-1310.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Time Machine</text>
<text xml:space="preserve" text-anchor="start" x="186.35" y="-1289.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">macOS</text>
<text xml:space="preserve" text-anchor="start" x="63.37" y="-1268.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Full Mac backup, history included, to the Pi.</text>
</g>
<!-- health -->
<g id="node14" class="node">
<title>health</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1519.46,-2539 1199.42,-2539 1199.42,-2359 1519.46,-2359 1519.46,-2539"/>
<text xml:space="preserve" text-anchor="start" x="1301.64" y="-2470.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Health check</text>
<text xml:space="preserve" text-anchor="start" x="1327.65" y="-2449.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">daily · free</text>
<text xml:space="preserve" text-anchor="start" x="1221.46" y="-2428.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Looks for broken links, stale projects, and</text>
<text xml:space="preserve" text-anchor="start" x="1222.3" y="-2410.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">quiet machines; writes the Health Report.</text>
</g>
<!-- cloudflare -->
<g id="node15" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2099.67,-1098 1748.12,-1098 1748.12,-918 2099.67,-918 2099.67,-1098"/>
<text xml:space="preserve" text-anchor="start" x="1878.32" y="-1020" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="1778.01" y="-997" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="1772.14" y="-979" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- live -->
<g id="node16" class="node">
<title>live</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2083.92,-785 1763.88,-785 1763.88,-605 2083.92,-605 2083.92,-785"/>
<text xml:space="preserve" text-anchor="start" x="1869.43" y="-707.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Live camera</text>
<text xml:space="preserve" text-anchor="start" x="1881.99" y="-686.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">live.embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="1809.24" y="-665.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The video the /printing page plays.</text>
</g>
<!-- scanner&#45;&gt;raw -->
<g id="edge2" class="edge">
<title>scanner&#45;&gt;raw</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208.02,-2078.17C208.02,-2040.11 208.02,-1995.57 208.02,-1956.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="210.65,-1956.48 208.02,-1948.98 205.4,-1956.48 210.65,-1956.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="143.14,-2000.1 143.14,-2022.9 244.1,-2022.9 244.1,-2000.1 143.14,-2000.1"/>
<text xml:space="preserve" text-anchor="start" x="146.14" y="-2005.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">scanned pages</text>
</g>
<!-- scanner&#45;&gt;scanwatch -->
<g id="edge1" class="edge">
<title>scanner&#45;&gt;scanwatch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.75,-2168C437.52,-2168 519.62,-2168 590.86,-2168"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="590.76,-2170.63 598.26,-2168 590.76,-2165.38 590.76,-2170.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="432.73,-2168 432.73,-2190.8 532.14,-2190.8 532.14,-2168 432.73,-2168"/>
<text xml:space="preserve" text-anchor="start" x="435.73" y="-2173.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">paper detected</text>
</g>
<!-- raw&#45;&gt;ocrfallback -->
<g id="edge12" class="edge">
<title>raw&#45;&gt;ocrfallback</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M368.86,-1777.95C435.99,-1745.59 514.37,-1707.81 583.47,-1674.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="584.37,-1676.98 589.99,-1671.36 582.09,-1672.25 584.37,-1676.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="444.41,-1745.41 444.41,-1768.21 520.46,-1768.21 520.46,-1745.41 444.41,-1745.41"/>
<text xml:space="preserve" text-anchor="start" x="447.41" y="-1751.21" font-family="Arial" font-size="14.00" fill="#c9c9c9">left an hour</text>
</g>
<!-- camera&#45;&gt;tunnel -->
<g id="edge6" class="edge">
<title>camera&#45;&gt;tunnel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M927.89,-1008C1009.01,-1008 1107.01,-1008 1189,-1008"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1188.9,-1010.63 1196.4,-1008 1188.9,-1005.38 1188.9,-1010.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1030.74,-1008 1030.74,-1030.8 1095.1,-1030.8 1095.1,-1008 1030.74,-1008"/>
<text xml:space="preserve" text-anchor="start" x="1033.74" y="-1013.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">live video</text>
</g>
<!-- camera&#45;&gt;printwatch -->
<g id="edge7" class="edge">
<title>camera&#45;&gt;printwatch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M927.89,-928.37C1006.37,-890.03 1100.64,-843.97 1180.94,-804.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1181.85,-807.21 1187.44,-801.56 1179.54,-802.49 1181.85,-807.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1028.78,-888.97 1028.78,-911.77 1097.06,-911.77 1097.06,-888.97 1028.78,-888.97"/>
<text xml:space="preserve" text-anchor="start" x="1031.78" y="-894.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">bed photo</text>
</g>
<!-- scanwatch&#45;&gt;raw -->
<g id="edge8" class="edge">
<title>scanwatch&#45;&gt;raw</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M603.99,-2078.19C529.78,-2036.26 441.67,-1986.47 367.52,-1944.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="369.01,-1942.39 361.18,-1940.99 366.42,-1946.96 369.01,-1942.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="440.13,-2030.24 440.13,-2053.04 524.74,-2053.04 524.74,-2030.24 440.13,-2030.24"/>
<text xml:space="preserve" text-anchor="start" x="443.13" y="-2036.04" font-family="Arial" font-size="14.00" fill="#c9c9c9">saves pages</text>
</g>
<!-- heartbeat&#45;&gt;health -->
<g id="edge9" class="edge">
<title>heartbeat&#45;&gt;health</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M913.57,-1967.99C935.73,-1984.77 957.28,-2003.29 975.71,-2023 1089.74,-2144.92 1046.98,-2230.41 1167.42,-2346 1174.94,-2353.22 1183.07,-2360.08 1191.58,-2366.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1189.83,-2368.54 1197.42,-2370.89 1192.95,-2364.32 1189.83,-2368.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="995.71,-2299.04 995.71,-2321.84 1130.13,-2321.84 1130.13,-2299.04 995.71,-2299.04"/>
<text xml:space="preserve" text-anchor="start" x="998.71" y="-2304.84" font-family="Arial" font-size="14.00" fill="#c9c9c9">disk and drive health</text>
</g>
<!-- tunnel&#45;&gt;cloudflare -->
<g id="edge10" class="edge">
<title>tunnel&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1519.37,-1008C1587.48,-1008 1667.49,-1008 1738.22,-1008"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1738.06,-1010.63 1745.56,-1008 1738.06,-1005.38 1738.06,-1010.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1588.76,-1008 1588.76,-1030.8 1688.12,-1030.8 1688.12,-1008 1588.76,-1008"/>
<text xml:space="preserve" text-anchor="start" x="1591.76" y="-1013.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera stream</text>
</g>
<!-- printwatch&#45;&gt;publish -->
<g id="edge11" class="edge">
<title>printwatch&#45;&gt;publish</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1290.16,-628.02C1217.74,-535.74 1097.21,-390.84 975.71,-283 956.72,-266.15 935.7,-249.59 914.51,-234.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="916.12,-231.96 908.51,-229.68 913.04,-236.21 916.12,-231.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1022.56,-428.94 1022.56,-451.74 1103.27,-451.74 1103.27,-428.94 1022.56,-428.94"/>
<text xml:space="preserve" text-anchor="start" x="1025.56" y="-434.74" font-family="Arial" font-size="14.00" fill="#c9c9c9">drafted card</text>
</g>
<!-- printer&#45;&gt;camera -->
<g id="edge3" class="edge">
<title>printer&#45;&gt;camera</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M602.64,-517.95C531.49,-570.77 467.83,-643.93 487.44,-729.4 502.19,-793.7 509.1,-813 552.14,-863 567.21,-880.51 584.86,-896.87 603.43,-911.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="601.55,-913.7 609.06,-916.29 604.81,-909.58 601.55,-913.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="440.52,-706.6 440.52,-729.4 524.34,-729.4 524.34,-706.6 440.52,-706.6"/>
<text xml:space="preserve" text-anchor="start" x="443.52" y="-712.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera feed</text>
</g>
<!-- printer&#45;&gt;printwatch -->
<g id="edge4" class="edge">
<title>printer&#45;&gt;printwatch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M935.4,-511.3C1012.33,-548.89 1103.19,-593.28 1180.94,-631.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1179.74,-633.61 1187.63,-634.54 1182.05,-628.89 1179.74,-633.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1035.79,-598.97 1035.79,-621.77 1090.05,-621.77 1090.05,-598.97 1035.79,-598.97"/>
<text xml:space="preserve" text-anchor="start" x="1038.79" y="-604.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">finished</text>
</g>
<!-- timemachine&#45;&gt;tmshare -->
<g id="edge5" class="edge">
<title>timemachine&#45;&gt;tmshare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M372.59,-1298C441.92,-1298 522.72,-1298 592.76,-1298"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="592.48,-1300.63 599.98,-1298 592.48,-1295.38 592.48,-1300.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.63,-1298 443.63,-1320.8 521.23,-1320.8 521.23,-1298 443.63,-1298"/>
<text xml:space="preserve" text-anchor="start" x="446.63" y="-1303.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">backs up to</text>
</g>
<!-- cloudflare&#45;&gt;live -->
<g id="edge13" class="edge">
<title>cloudflare&#45;&gt;live</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1923.9,-918.02C1923.9,-879.6 1923.9,-834.61 1923.9,-795.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1926.52,-795.22 1923.9,-787.72 1921.27,-795.22 1926.52,-795.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1885.88,-840.1 1885.88,-862.9 1933.11,-862.9 1933.11,-840.1 1885.88,-840.1"/>
<text xml:space="preserve" text-anchor="start" x="1888.88" y="-845.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">serves</text>
</g>
</g>
</svg>
`;case`printingView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2599pt" height="1233pt"
 viewBox="0.00 0.00 2599.00 1233.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1217.56)">
<g id="clust1" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-850 8,-1115 392.04,-1115 392.04,-850 8,-850"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1102.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_printing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="523.86,-587 523.86,-1158 2058.28,-1158 2058.28,-587 523.86,-587"/>
<text xml:space="preserve" text-anchor="start" x="531.86" y="-1145.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">3D PRINTING</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_pi</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="531.36,-8 531.36,-579 1503.12,-579 1503.12,-8 531.36,-8"/>
<text xml:space="preserve" text-anchor="start" x="539.36" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BRAINPI</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_site</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2161.26,-255 2161.26,-826 2561.3,-826 2561.3,-255 2161.26,-255"/>
<text xml:space="preserve" text-anchor="start" x="2169.26" y="-813.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMBRY.DEV</text>
</g>
<!-- brainengine -->
<g id="node1" class="node">
<title>brainengine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.04,-1062 40,-1062 40,-882 360.04,-882 360.04,-1062"/>
<text xml:space="preserve" text-anchor="start" x="142.76" y="-993.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Brain Engine</text>
<text xml:space="preserve" text-anchor="start" x="155.21" y="-972.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Obsidian plugin</text>
<text xml:space="preserve" text-anchor="start" x="65.81" y="-951.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs most timers: every minute, every 5</text>
<text xml:space="preserve" text-anchor="start" x="112.89" y="-933.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">minutes, hourly, and daily.</text>
</g>
<!-- printer -->
<g id="node2" class="node">
<title>printer</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="907.44,-1097 563.86,-1097 563.86,-917 907.44,-917 907.44,-1097"/>
<text xml:space="preserve" text-anchor="start" x="682.28" y="-1019" font-family="Arial" font-size="20.00" fill="#ffe0c2">Bambu P2S</text>
<text xml:space="preserve" text-anchor="start" x="583.92" y="-996" font-family="Arial" font-size="15.00" fill="#f9b27c">The 3D printer. Reports its status and camera</text>
<text xml:space="preserve" text-anchor="start" x="657.28" y="-978" font-family="Arial" font-size="15.00" fill="#f9b27c">over the home network.</text>
</g>
<!-- printlog -->
<g id="node3" class="node">
<title>printlog</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1455.6,-1097 1132.01,-1097 1132.01,-917 1455.6,-917 1455.6,-1097"/>
<text xml:space="preserve" text-anchor="start" x="1257.12" y="-1028.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Print log</text>
<text xml:space="preserve" text-anchor="start" x="1218.67" y="-1007.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1152.06" y="-986.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Notes each start and finish in the model’s</text>
<text xml:space="preserve" text-anchor="start" x="1168.73" y="-968.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">folder, the print log, and a notification.</text>
</g>
<!-- library -->
<g id="node4" class="node">
<title>library</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2018.28,-1080.64C2018.28,-1089.67 1946.55,-1097 1858.26,-1097 1769.96,-1097 1698.24,-1089.67 1698.24,-1080.64 1698.24,-1080.64 1698.24,-933.36 1698.24,-933.36 1698.24,-924.33 1769.96,-917 1858.26,-917 1946.55,-917 2018.28,-924.33 2018.28,-933.36 2018.28,-933.36 2018.28,-1080.64 2018.28,-1080.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2018.28,-1080.64C2018.28,-1071.61 1946.55,-1064.27 1858.26,-1064.27 1769.96,-1064.27 1698.24,-1071.61 1698.24,-1080.64"/>
<text xml:space="preserve" text-anchor="start" x="1779.89" y="-1028.8" font-family="Arial" font-size="20.00" fill="#eef2ff">3D printing library</text>
<text xml:space="preserve" text-anchor="start" x="1791.41" y="-1007.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">Documents/3d_printing</text>
<text xml:space="preserve" text-anchor="start" x="1719.01" y="-986.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">One folder per model: files, notes, photos,</text>
<text xml:space="preserve" text-anchor="start" x="1793.23" y="-968.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">and its print history.</text>
</g>
<!-- publish -->
<g id="node5" class="node">
<title>publish</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="895.67,-807 575.63,-807 575.63,-627 895.67,-627 895.67,-807"/>
<text xml:space="preserve" text-anchor="start" x="669.51" y="-738.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gallery publish</text>
<text xml:space="preserve" text-anchor="start" x="618.24" y="-717.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min and right after a finish</text>
<text xml:space="preserve" text-anchor="start" x="603.5" y="-696.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls the drafted card, fills in the details,</text>
<text xml:space="preserve" text-anchor="start" x="654.35" y="-678.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">and pushes it to the site.</text>
</g>
<!-- camera -->
<g id="node6" class="node">
<title>camera</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="899.94,-517 571.36,-517 571.36,-337 899.94,-337 899.94,-517"/>
<text xml:space="preserve" text-anchor="start" x="675.63" y="-448.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Camera relay</text>
<text xml:space="preserve" text-anchor="start" x="717.58" y="-427.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">go2rtc</text>
<text xml:space="preserve" text-anchor="start" x="591.42" y="-406.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Takes the printer camera and serves it as a</text>
<text xml:space="preserve" text-anchor="start" x="690.63" y="-388.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">video stream.</text>
</g>
<!-- printwatch -->
<g id="node7" class="node">
<title>printwatch</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1463.12,-518 1124.48,-518 1124.48,-338 1463.12,-338 1463.12,-518"/>
<text xml:space="preserve" text-anchor="start" x="1235.45" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Print watcher</text>
<text xml:space="preserve" text-anchor="start" x="1237.08" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">listens to the printer</text>
<text xml:space="preserve" text-anchor="start" x="1144.54" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">When a print finishes, grabs a bed photo and</text>
<text xml:space="preserve" text-anchor="start" x="1225.86" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">drafts a gallery card.</text>
</g>
<!-- tunnel -->
<g id="node8" class="node">
<title>tunnel</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1453.82,-228 1133.78,-228 1133.78,-48 1453.82,-48 1453.82,-228"/>
<text xml:space="preserve" text-anchor="start" x="1263.23" y="-159.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Tunnel</text>
<text xml:space="preserve" text-anchor="start" x="1262.01" y="-138.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">cloudflared</text>
<text xml:space="preserve" text-anchor="start" x="1164.15" y="-117.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Sends that stream out to the public site</text>
<text xml:space="preserve" text-anchor="start" x="1230.01" y="-99.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">through Cloudflare.</text>
</g>
<!-- code -->
<g id="node9" class="node">
<title>code</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2521.3,-748.64C2521.3,-757.67 2449.58,-765 2361.28,-765 2272.99,-765 2201.26,-757.67 2201.26,-748.64 2201.26,-748.64 2201.26,-601.36 2201.26,-601.36 2201.26,-592.33 2272.99,-585 2361.28,-585 2449.58,-585 2521.3,-592.33 2521.3,-601.36 2521.3,-601.36 2521.3,-748.64 2521.3,-748.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2521.3,-748.64C2521.3,-739.61 2449.58,-732.27 2361.28,-732.27 2272.99,-732.27 2201.26,-739.61 2201.26,-748.64"/>
<text xml:space="preserve" text-anchor="start" x="2319.59" y="-696.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Site code</text>
<text xml:space="preserve" text-anchor="start" x="2270.62" y="-675.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">Astro · Projects/embry&#45;dev&#45;site</text>
<text xml:space="preserve" text-anchor="start" x="2222.03" y="-654.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Pages and the print gallery, as files in one</text>
<text xml:space="preserve" text-anchor="start" x="2340.44" y="-636.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">folder.</text>
</g>
<!-- live -->
<g id="node10" class="node">
<title>live</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2521.3,-475 2201.26,-475 2201.26,-295 2521.3,-295 2521.3,-475"/>
<text xml:space="preserve" text-anchor="start" x="2306.82" y="-397.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Live camera</text>
<text xml:space="preserve" text-anchor="start" x="2319.38" y="-376.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">live.embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="2246.63" y="-355.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The video the /printing page plays.</text>
</g>
<!-- cloudflare -->
<g id="node11" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2034.03,-278 1682.48,-278 1682.48,-98 2034.03,-98 2034.03,-278"/>
<text xml:space="preserve" text-anchor="start" x="1812.68" y="-200" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="1712.37" y="-177" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="1706.5" y="-159" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- brainengine&#45;&gt;printlog -->
<g id="edge1" class="edge">
<title>brainengine&#45;&gt;printlog</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M326.9,-1061.86C384.13,-1097.37 454.45,-1133.96 523.86,-1152 688.86,-1194.89 739.71,-1182.51 907.44,-1152 980.17,-1138.77 1057.02,-1112.57 1122.8,-1086.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1123.66,-1088.51 1129.62,-1083.26 1121.69,-1083.65 1123.66,-1088.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="692.58,-1179.72 692.58,-1202.52 778.72,-1202.52 778.72,-1179.72 692.58,-1179.72"/>
<text xml:space="preserve" text-anchor="start" x="695.58" y="-1185.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- brainengine&#45;&gt;publish -->
<g id="edge2" class="edge">
<title>brainengine&#45;&gt;publish</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M359.68,-896.18C424.82,-865.05 500.31,-828.98 566.41,-797.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="567.31,-799.87 572.95,-794.27 565.05,-795.14 567.31,-799.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.77,-859.77 422.77,-882.57 501.13,-882.57 501.13,-859.77 422.77,-859.77"/>
<text xml:space="preserve" text-anchor="start" x="425.77" y="-865.57" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- printer&#45;&gt;printlog -->
<g id="edge3" class="edge">
<title>printer&#45;&gt;printlog</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M907.29,-1007C975.48,-1007 1053.84,-1007 1122.04,-1007"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1121.93,-1009.63 1129.43,-1007 1121.93,-1004.38 1121.93,-1009.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="967.44,-1007 967.44,-1029.8 1064.48,-1029.8 1064.48,-1007 967.44,-1007"/>
<text xml:space="preserve" text-anchor="start" x="970.44" y="-1012.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">start and finish</text>
</g>
<!-- printer&#45;&gt;camera -->
<g id="edge4" class="edge">
<title>printer&#45;&gt;camera</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M580.06,-917.12C559.37,-900.64 539.83,-882.18 523.86,-862 484.37,-812.09 483.97,-790.97 472.32,-728.4 458,-651.45 474.94,-621.1 523.86,-560 535.37,-545.63 548.87,-532.37 563.39,-520.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="565.03,-522.3 569.21,-515.54 561.73,-518.22 565.03,-522.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.04,-705.6 420.04,-728.4 503.86,-728.4 503.86,-705.6 420.04,-705.6"/>
<text xml:space="preserve" text-anchor="start" x="423.04" y="-711.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera feed</text>
</g>
<!-- printer&#45;&gt;printwatch -->
<g id="edge5" class="edge">
<title>printer&#45;&gt;printwatch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M850.47,-917.13C870.25,-899.65 890.03,-880.87 907.44,-862 963.47,-801.25 1067.28,-619.65 1124.48,-560 1136.09,-547.9 1148.83,-535.96 1161.95,-524.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1163.46,-526.68 1167.43,-519.8 1160.03,-522.7 1163.46,-526.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="988.83,-781.25 988.83,-804.05 1043.09,-804.05 1043.09,-781.25 988.83,-781.25"/>
<text xml:space="preserve" text-anchor="start" x="991.83" y="-787.05" font-family="Arial" font-size="14.00" fill="#c9c9c9">finished</text>
</g>
<!-- printlog&#45;&gt;library -->
<g id="edge6" class="edge">
<title>printlog&#45;&gt;library</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1455.23,-1007C1527.79,-1007 1613.61,-1007 1687.28,-1007"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1687.07,-1009.63 1694.57,-1007 1687.07,-1004.38 1687.07,-1009.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1528.96,-1007 1528.96,-1029.8 1616.64,-1029.8 1616.64,-1007 1528.96,-1007"/>
<text xml:space="preserve" text-anchor="start" x="1531.96" y="-1012.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">writes history</text>
</g>
<!-- publish&#45;&gt;code -->
<g id="edge11" class="edge">
<title>publish&#45;&gt;code</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M895.66,-712.89C1202.73,-704.94 1874.82,-687.56 2190.34,-679.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2190.04,-682.03 2197.47,-679.21 2189.9,-676.78 2190.04,-682.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1533.62,-696.48 1533.62,-719.28 1611.99,-719.28 1611.99,-696.48 1533.62,-696.48"/>
<text xml:space="preserve" text-anchor="start" x="1536.62" y="-702.28" font-family="Arial" font-size="14.00" fill="#c9c9c9">gallery card</text>
</g>
<!-- camera&#45;&gt;printwatch -->
<g id="edge7" class="edge">
<title>camera&#45;&gt;printwatch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M899.65,-423.69C952.26,-423 1010.84,-422.64 1064.48,-423.2 1080.65,-423.37 1097.47,-423.61 1114.31,-423.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1114.22,-426.51 1121.76,-424.01 1114.31,-421.26 1114.22,-426.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="981.82,-423.2 981.82,-446 1050.1,-446 1050.1,-423.2 981.82,-423.2"/>
<text xml:space="preserve" text-anchor="start" x="984.82" y="-429" font-family="Arial" font-size="14.00" fill="#c9c9c9">bed photo</text>
</g>
<!-- camera&#45;&gt;tunnel -->
<g id="edge8" class="edge">
<title>camera&#45;&gt;tunnel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M899.76,-342.24C970.61,-305.43 1053.54,-262.33 1124.92,-225.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1125.88,-227.7 1131.33,-221.91 1123.46,-223.04 1125.88,-227.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="983.78,-299.8 983.78,-322.6 1048.14,-322.6 1048.14,-299.8 983.78,-299.8"/>
<text xml:space="preserve" text-anchor="start" x="986.78" y="-305.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">live video</text>
</g>
<!-- printwatch&#45;&gt;publish -->
<g id="edge9" class="edge">
<title>printwatch&#45;&gt;publish</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1124.51,-506.59C1073.67,-531.06 1017.96,-558.61 967.44,-585.2 945.36,-596.82 922.31,-609.41 899.69,-622.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="898.61,-619.64 893.35,-625.6 901.17,-624.22 898.61,-619.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="975.61,-585.2 975.61,-608 1056.32,-608 1056.32,-585.2 975.61,-585.2"/>
<text xml:space="preserve" text-anchor="start" x="978.61" y="-591" font-family="Arial" font-size="14.00" fill="#c9c9c9">drafted card</text>
</g>
<!-- tunnel&#45;&gt;cloudflare -->
<g id="edge10" class="edge">
<title>tunnel&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1453.73,-152.13C1521.84,-158.18 1601.85,-165.3 1672.58,-171.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1672.23,-174.19 1679.93,-172.24 1672.69,-168.96 1672.23,-174.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1523.12,-165.99 1523.12,-188.79 1622.48,-188.79 1622.48,-165.99 1523.12,-165.99"/>
<text xml:space="preserve" text-anchor="start" x="1526.12" y="-171.79" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera stream</text>
</g>
<!-- cloudflare&#45;&gt;live -->
<g id="edge12" class="edge">
<title>cloudflare&#45;&gt;live</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2033.79,-256.62C2084.99,-276.76 2140.88,-298.73 2191.71,-318.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2190.71,-321.15 2198.65,-321.45 2192.63,-316.26 2190.71,-321.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2094.03,-298.29 2094.03,-321.09 2141.26,-321.09 2141.26,-298.29 2094.03,-298.29"/>
<text xml:space="preserve" text-anchor="start" x="2097.03" y="-304.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">serves</text>
</g>
</g>
</svg>
`;case`siteView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1973pt" height="1292pt"
 viewBox="0.00 0.00 1973.00 1292.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1277.05)">
<g id="clust1" class="cluster">
<title>cluster_printing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-760 8,-1025 392.04,-1025 392.04,-760 8,-760"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1012.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">3D PRINTING</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_site</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="534.16,-220 534.16,-831 1935.11,-831 1935.11,-220 534.16,-220"/>
<text xml:space="preserve" text-anchor="start" x="542.16" y="-818.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMBRY.DEV</text>
</g>
<!-- publish -->
<g id="node1" class="node">
<title>publish</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.04,-972 40,-972 40,-792 360.04,-792 360.04,-972"/>
<text xml:space="preserve" text-anchor="start" x="133.88" y="-903.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gallery publish</text>
<text xml:space="preserve" text-anchor="start" x="82.61" y="-882.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min and right after a finish</text>
<text xml:space="preserve" text-anchor="start" x="67.87" y="-861.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls the drafted card, fills in the details,</text>
<text xml:space="preserve" text-anchor="start" x="118.72" y="-843.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">and pushes it to the site.</text>
</g>
<!-- live -->
<g id="node2" class="node">
<title>live</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="894.2,-770 574.16,-770 574.16,-590 894.2,-590 894.2,-770"/>
<text xml:space="preserve" text-anchor="start" x="679.71" y="-692.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Live camera</text>
<text xml:space="preserve" text-anchor="start" x="692.27" y="-671.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">live.embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="619.52" y="-650.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The video the /printing page plays.</text>
</g>
<!-- code -->
<g id="node3" class="node">
<title>code</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M894.2,-443.64C894.2,-452.67 822.48,-460 734.18,-460 645.88,-460 574.16,-452.67 574.16,-443.64 574.16,-443.64 574.16,-296.36 574.16,-296.36 574.16,-287.33 645.88,-280 734.18,-280 822.48,-280 894.2,-287.33 894.2,-296.36 894.2,-296.36 894.2,-443.64 894.2,-443.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M894.2,-443.64C894.2,-434.61 822.48,-427.27 734.18,-427.27 645.88,-427.27 574.16,-434.61 574.16,-443.64"/>
<text xml:space="preserve" text-anchor="start" x="692.48" y="-391.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Site code</text>
<text xml:space="preserve" text-anchor="start" x="643.52" y="-370.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">Astro · Projects/embry&#45;dev&#45;site</text>
<text xml:space="preserve" text-anchor="start" x="594.93" y="-349.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Pages and the print gallery, as files in one</text>
<text xml:space="preserve" text-anchor="start" x="713.33" y="-331.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">folder.</text>
</g>
<!-- deploy -->
<g id="node4" class="node">
<title>deploy</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1374.99,-460 1050.56,-460 1050.56,-280 1374.99,-280 1374.99,-460"/>
<text xml:space="preserve" text-anchor="start" x="1136.61" y="-391.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Build and publish</text>
<text xml:space="preserve" text-anchor="start" x="1169.42" y="-370.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">GitHub Actions</text>
<text xml:space="preserve" text-anchor="start" x="1070.61" y="-349.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Every push rebuilds the site and puts it live</text>
<text xml:space="preserve" text-anchor="start" x="1163.17" y="-331.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">within minutes.</text>
</g>
<!-- pages -->
<g id="node5" class="node">
<title>pages</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1895.11,-615 1575.07,-615 1575.07,-435 1895.11,-435 1895.11,-615"/>
<text xml:space="preserve" text-anchor="start" x="1677.83" y="-546.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Public pages</text>
<text xml:space="preserve" text-anchor="start" x="1704.74" y="-525.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="1613.35" y="-504.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The studio, and /printing with the live</text>
<text xml:space="preserve" text-anchor="start" x="1669.22" y="-486.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">camera and gallery.</text>
</g>
<!-- jt -->
<g id="node6" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="371.4,-1262 28.64,-1262 28.64,-1082 371.4,-1082 371.4,-1262"/>
<text xml:space="preserve" text-anchor="start" x="188.91" y="-1184" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="48.7" y="-1161" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="173.33" y="-1143" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- tunnel -->
<g id="node7" class="node">
<title>tunnel</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.04,-682 40,-682 40,-502 360.04,-502 360.04,-682"/>
<text xml:space="preserve" text-anchor="start" x="169.44" y="-613.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Tunnel</text>
<text xml:space="preserve" text-anchor="start" x="168.22" y="-592.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">cloudflared</text>
<text xml:space="preserve" text-anchor="start" x="70.36" y="-571.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Sends that stream out to the public site</text>
<text xml:space="preserve" text-anchor="start" x="136.23" y="-553.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">through Cloudflare.</text>
</g>
<!-- cloudflare -->
<g id="node8" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="375.79,-369 24.25,-369 24.25,-189 375.79,-189 375.79,-369"/>
<text xml:space="preserve" text-anchor="start" x="154.44" y="-291" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="54.13" y="-268" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="48.26" y="-250" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- github -->
<g id="node9" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1910.03,-180 1560.14,-180 1560.14,0 1910.03,0 1910.03,-180"/>
<text xml:space="preserve" text-anchor="start" x="1703.96" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1584.16" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the vault backup and the website code;</text>
<text xml:space="preserve" text-anchor="start" x="1641.7" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">builds and hosts embry.dev.</text>
</g>
<!-- publish&#45;&gt;code -->
<g id="edge3" class="edge">
<title>publish&#45;&gt;code</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M345.87,-792.35C363.72,-775.91 379.92,-757.4 392.04,-737 458.14,-625.78 349.45,-545.55 435.79,-449.2 468.5,-412.7 515.95,-392.19 563.37,-380.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="563.79,-383.49 570.54,-379.29 562.64,-378.37 563.79,-383.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="435.79,-449.2 435.79,-472 514.16,-472 514.16,-449.2 435.79,-449.2"/>
<text xml:space="preserve" text-anchor="start" x="438.79" y="-455" font-family="Arial" font-size="14.00" fill="#c9c9c9">gallery card</text>
</g>
<!-- live&#45;&gt;pages -->
<g id="edge4" class="edge">
<title>live&#45;&gt;pages</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M894.01,-655.35C1077.25,-626.92 1377.32,-580.36 1564.85,-551.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1565.08,-553.88 1572.09,-550.14 1564.28,-548.69 1565.08,-553.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1183.7,-630.35 1183.7,-653.15 1241.85,-653.15 1241.85,-630.35 1183.7,-630.35"/>
<text xml:space="preserve" text-anchor="start" x="1186.7" y="-636.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">plays on</text>
</g>
<!-- code&#45;&gt;deploy -->
<g id="edge5" class="edge">
<title>code&#45;&gt;deploy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M894.87,-370C941.62,-370 992.92,-370 1040.36,-370"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1040.21,-372.63 1047.71,-370 1040.21,-367.38 1040.21,-372.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="954.2,-370 954.2,-392.8 990.56,-392.8 990.56,-370 954.2,-370"/>
<text xml:space="preserve" text-anchor="start" x="957.2" y="-375.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">push</text>
</g>
<!-- deploy&#45;&gt;pages -->
<g id="edge6" class="edge">
<title>deploy&#45;&gt;pages</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1374.84,-417.98C1435.32,-436 1504.21,-456.52 1565.37,-474.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1564.28,-477.15 1572.22,-476.78 1565.78,-472.12 1564.28,-477.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1434.99,-452.15 1434.99,-474.95 1500.14,-474.95 1500.14,-452.15 1434.99,-452.15"/>
<text xml:space="preserve" text-anchor="start" x="1437.99" y="-457.95" font-family="Arial" font-size="14.00" fill="#c9c9c9">publishes</text>
</g>
<!-- deploy&#45;&gt;github -->
<g id="edge7" class="edge">
<title>deploy&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1374.84,-283.32C1432.89,-252.08 1498.69,-216.68 1557.96,-184.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1559.01,-187.2 1564.37,-181.33 1556.52,-182.57 1559.01,-187.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1441.22,-246.76 1441.22,-269.56 1493.91,-269.56 1493.91,-246.76 1441.22,-246.76"/>
<text xml:space="preserve" text-anchor="start" x="1444.22" y="-252.56" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs on</text>
</g>
<!-- tunnel&#45;&gt;cloudflare -->
<g id="edge1" class="edge">
<title>tunnel&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M200.02,-502.02C200.02,-463.6 200.02,-418.61 200.02,-379.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="202.65,-379.22 200.02,-371.72 197.4,-379.22 202.65,-379.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="135.94,-424.1 135.94,-446.9 235.3,-446.9 235.3,-424.1 135.94,-424.1"/>
<text xml:space="preserve" text-anchor="start" x="138.94" y="-429.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera stream</text>
</g>
<!-- cloudflare&#45;&gt;live -->
<g id="edge2" class="edge">
<title>cloudflare&#45;&gt;live</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M308.7,-368.7C336.61,-393.28 366.1,-420.48 392.04,-447 413.16,-468.59 412.87,-479.33 435.79,-499 475.04,-532.66 521.26,-564.04 565.42,-590.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="563.85,-593.02 571.63,-594.65 566.56,-588.53 563.85,-593.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="451.36,-556.51 451.36,-579.31 498.59,-579.31 498.59,-556.51 451.36,-556.51"/>
<text xml:space="preserve" text-anchor="start" x="454.36" y="-562.31" font-family="Arial" font-size="14.00" fill="#c9c9c9">serves</text>
</g>
</g>
</svg>
`;case`backupsView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2039pt" height="1534pt"
 viewBox="0.00 0.00 2039.00 1534.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1518.87)">
<g id="clust1" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-27.82 8,-292.82 392.04,-292.82 392.04,-27.82 8,-27.82"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-279.92" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_backups</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="484.17,-42.82 484.17,-633.82 1486.44,-633.82 1486.44,-42.82 484.17,-42.82"/>
<text xml:space="preserve" text-anchor="start" x="492.17" y="-620.92" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKUPS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1068.76,-1230.82 1068.76,-1495.82 1491.38,-1495.82 1491.38,-1230.82 1068.76,-1230.82"/>
<text xml:space="preserve" text-anchor="start" x="1076.76" y="-1482.92" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_pi</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1080.05,-642.82 1080.05,-1213.82 1480.09,-1213.82 1480.09,-642.82 1080.05,-642.82"/>
<text xml:space="preserve" text-anchor="start" x="1088.05" y="-1200.92" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BRAINPI</text>
</g>
<!-- brainengine -->
<g id="node1" class="node">
<title>brainengine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.04,-239.82 40,-239.82 40,-59.82 360.04,-59.82 360.04,-239.82"/>
<text xml:space="preserve" text-anchor="start" x="142.76" y="-171.62" font-family="Arial" font-size="20.00" fill="#f0f9ff">Brain Engine</text>
<text xml:space="preserve" text-anchor="start" x="155.21" y="-150.62" font-family="Arial" font-size="13.00" fill="#b6ecf7">Obsidian plugin</text>
<text xml:space="preserve" text-anchor="start" x="65.81" y="-129.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs most timers: every minute, every 5</text>
<text xml:space="preserve" text-anchor="start" x="112.89" y="-111.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">minutes, hourly, and daily.</text>
</g>
<!-- machine -->
<g id="node2" class="node">
<title>machine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="861.91,-282.82 524.17,-282.82 524.17,-102.82 861.91,-102.82 861.91,-282.82"/>
<text xml:space="preserve" text-anchor="start" x="611.88" y="-214.62" font-family="Arial" font-size="20.00" fill="#f0f9ff">Machine snapshot</text>
<text xml:space="preserve" text-anchor="start" x="656.91" y="-193.62" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="544.23" y="-172.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the Mac’s setup (scripts, schedules,</text>
<text xml:space="preserve" text-anchor="start" x="563.81" y="-154.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">settings) into the vault. Secrets left out.</text>
</g>
<!-- timemachine -->
<g id="node3" class="node">
<title>timemachine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="857.75,-572.82 528.33,-572.82 528.33,-392.82 857.75,-392.82 857.75,-572.82"/>
<text xml:space="preserve" text-anchor="start" x="630.24" y="-495.62" font-family="Arial" font-size="20.00" fill="#f0f9ff">Time Machine</text>
<text xml:space="preserve" text-anchor="start" x="671.37" y="-474.62" font-family="Arial" font-size="13.00" fill="#b6ecf7">macOS</text>
<text xml:space="preserve" text-anchor="start" x="548.39" y="-453.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">Full Mac backup, history included, to the Pi.</text>
</g>
<!-- vaultpush -->
<g id="node4" class="node">
<title>vaultpush</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1446.44,-282.82 1113.7,-282.82 1113.7,-102.82 1446.44,-102.82 1446.44,-282.82"/>
<text xml:space="preserve" text-anchor="start" x="1222.25" y="-214.62" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault backup</text>
<text xml:space="preserve" text-anchor="start" x="1243.94" y="-193.62" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1133.76" y="-172.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">Commits the whole vault to a private GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1262.98" y="-154.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">repo.</text>
</g>
<!-- usb -->
<g id="node5" class="node">
<title>usb</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1440.09,-572.82 1120.05,-572.82 1120.05,-392.82 1440.09,-392.82 1440.09,-572.82"/>
<text xml:space="preserve" text-anchor="start" x="1200.03" y="-485.82" font-family="Arial" font-size="20.00" fill="#ffe0c2">USB backup drive</text>
<text xml:space="preserve" text-anchor="start" x="1144.98" y="-462.82" font-family="Arial" font-size="15.00" fill="#f9b27c">A second copy that can leave the house.</text>
</g>
<!-- memory -->
<g id="node6" class="node">
<title>memory</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1459.38,-1426.46C1459.38,-1435.49 1379.01,-1442.82 1280.07,-1442.82 1181.13,-1442.82 1100.76,-1435.49 1100.76,-1426.46 1100.76,-1426.46 1100.76,-1279.19 1100.76,-1279.19 1100.76,-1270.16 1181.13,-1262.82 1280.07,-1262.82 1379.01,-1262.82 1459.38,-1270.16 1459.38,-1279.19 1459.38,-1279.19 1459.38,-1426.46 1459.38,-1426.46"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1459.38,-1426.46C1459.38,-1417.43 1379.01,-1410.1 1280.07,-1410.1 1181.13,-1410.1 1100.76,-1417.43 1100.76,-1426.46"/>
<text xml:space="preserve" text-anchor="start" x="1207.84" y="-1364.82" font-family="Arial" font-size="20.00" fill="#eef2ff">System memory</text>
<text xml:space="preserve" text-anchor="start" x="1120.82" y="-1341.82" font-family="Arial" font-size="15.00" fill="#c7d2fe">What the assistants need to remember between</text>
<text xml:space="preserve" text-anchor="start" x="1248.81" y="-1323.82" font-family="Arial" font-size="15.00" fill="#c7d2fe">sessions.</text>
</g>
<!-- tmshare -->
<g id="node7" class="node">
<title>tmshare</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1440.09,-846.46C1440.09,-855.49 1368.37,-862.82 1280.07,-862.82 1191.77,-862.82 1120.05,-855.49 1120.05,-846.46 1120.05,-846.46 1120.05,-699.19 1120.05,-699.19 1120.05,-690.16 1191.77,-682.82 1280.07,-682.82 1368.37,-682.82 1440.09,-690.16 1440.09,-699.19 1440.09,-699.19 1440.09,-846.46 1440.09,-846.46"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1440.09,-846.46C1440.09,-837.43 1368.37,-830.1 1280.07,-830.1 1191.77,-830.1 1120.05,-837.43 1120.05,-846.46"/>
<text xml:space="preserve" text-anchor="start" x="1189.48" y="-785.62" font-family="Arial" font-size="20.00" fill="#eef2ff">Time Machine share</text>
<text xml:space="preserve" text-anchor="start" x="1252.98" y="-764.62" font-family="Arial" font-size="13.00" fill="#c7d2fe">4 TB disk</text>
<text xml:space="preserve" text-anchor="start" x="1140.42" y="-743.02" font-family="Arial" font-size="15.00" fill="#c7d2fe">Where the Mac backs itself up, encrypted.</text>
</g>
<!-- mirror -->
<g id="node8" class="node">
<title>mirror</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1440.09,-1152.82 1120.05,-1152.82 1120.05,-972.82 1440.09,-972.82 1440.09,-1152.82"/>
<text xml:space="preserve" text-anchor="start" x="1220.62" y="-1084.62" font-family="Arial" font-size="20.00" fill="#f0f9ff">Nightly mirror</text>
<text xml:space="preserve" text-anchor="start" x="1256.58" y="-1063.62" font-family="Arial" font-size="13.00" fill="#b6ecf7">3:30 am</text>
<text xml:space="preserve" text-anchor="start" x="1141.25" y="-1042.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the Pi’s working files to a second</text>
<text xml:space="preserve" text-anchor="start" x="1177.95" y="-1024.02" font-family="Arial" font-size="15.00" fill="#b6ecf7">disk. Time Machine is skipped.</text>
</g>
<!-- github -->
<g id="node9" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2009.2,-282.82 1659.31,-282.82 1659.31,-102.82 2009.2,-102.82 2009.2,-282.82"/>
<text xml:space="preserve" text-anchor="start" x="1803.13" y="-204.82" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1683.32" y="-181.82" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the vault backup and the website code;</text>
<text xml:space="preserve" text-anchor="start" x="1740.87" y="-163.82" font-family="Arial" font-size="15.00" fill="#cbd5e1">builds and hosts embry.dev.</text>
</g>
<!-- brainengine&#45;&gt;machine -->
<g id="edge1" class="edge">
<title>brainengine&#45;&gt;machine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M359.76,-163.73C409.04,-168.04 463.68,-172.83 514.17,-177.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="513.83,-179.85 521.53,-177.89 514.29,-174.62 513.83,-179.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.04,-172.61 420.04,-195.41 464.17,-195.41 464.17,-172.61 420.04,-172.61"/>
<text xml:space="preserve" text-anchor="start" x="423.04" y="-178.41" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- brainengine&#45;&gt;vaultpush -->
<g id="edge2" class="edge">
<title>brainengine&#45;&gt;vaultpush</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M359.99,-66.05C399.51,-49.1 442.51,-33.8 484.17,-25.02 648.45,9.57 697.09,6.88 861.91,-25.02 944.59,-41.03 1031.68,-73.35 1104.76,-105.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1103.37,-107.64 1111.29,-108.27 1105.49,-102.84 1103.37,-107.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="670.97,-25.02 670.97,-47.82 715.11,-47.82 715.11,-25.02 670.97,-25.02"/>
<text xml:space="preserve" text-anchor="start" x="673.97" y="-30.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- machine&#45;&gt;vaultpush -->
<g id="edge3" class="edge">
<title>machine&#45;&gt;vaultpush</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M861.69,-192.82C937.46,-192.82 1027,-192.82 1103.68,-192.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1103.4,-195.45 1110.9,-192.82 1103.4,-190.2 1103.4,-195.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="921.91,-192.82 921.91,-215.62 1040.76,-215.62 1040.76,-192.82 921.91,-192.82"/>
<text xml:space="preserve" text-anchor="start" x="924.91" y="-198.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">one minute before</text>
</g>
<!-- machine&#45;&gt;memory -->
<g id="edge4" class="edge">
<title>machine&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M814.56,-282.74C832.1,-299.62 848.66,-318.19 861.91,-337.82 908.13,-406.34 875.45,-445.48 921.91,-513.82 960.91,-571.2 1010.27,-552.71 1040.76,-615.02 1101.95,-740.06 994.46,-1123.11 1068.76,-1240.82 1075.41,-1251.34 1083.39,-1260.94 1092.31,-1269.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1090.51,-1271.59 1097.79,-1274.77 1094.08,-1267.74 1090.51,-1271.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="927.76,-615.02 927.76,-637.82 1034.92,-637.82 1034.92,-615.02 927.76,-615.02"/>
<text xml:space="preserve" text-anchor="start" x="930.76" y="-620.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">writes setup into</text>
</g>
<!-- timemachine&#45;&gt;usb -->
<g id="edge5" class="edge">
<title>timemachine&#45;&gt;usb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M857.67,-472.52C879.27,-471.49 901.12,-470.61 921.91,-470.02 974.71,-468.54 987.96,-468.61 1040.76,-470.02 1063.13,-470.62 1086.67,-471.54 1109.89,-472.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1109.53,-475.22 1117.14,-472.96 1109.78,-469.98 1109.53,-475.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="939.03,-470.02 939.03,-492.82 1023.64,-492.82 1023.64,-470.02 939.03,-470.02"/>
<text xml:space="preserve" text-anchor="start" x="942.03" y="-475.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">second copy</text>
</g>
<!-- timemachine&#45;&gt;tmshare -->
<g id="edge6" class="edge">
<title>timemachine&#45;&gt;tmshare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M798.13,-572.73C835.41,-601.78 878.89,-632.27 921.91,-654.82 980.52,-685.55 1048.69,-710.44 1109.66,-729.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1108.55,-731.7 1116.49,-731.38 1110.09,-726.68 1108.55,-731.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="942.54,-704.23 942.54,-727.03 1020.14,-727.03 1020.14,-704.23 942.54,-704.23"/>
<text xml:space="preserve" text-anchor="start" x="945.54" y="-710.03" font-family="Arial" font-size="14.00" fill="#c9c9c9">backs up to</text>
</g>
<!-- vaultpush&#45;&gt;github -->
<g id="edge7" class="edge">
<title>vaultpush&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1446.37,-192.82C1510.16,-192.82 1583.41,-192.82 1648.89,-192.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1648.8,-195.45 1656.3,-192.82 1648.8,-190.2 1648.8,-195.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1519.38,-192.82 1519.38,-215.62 1599.31,-215.62 1599.31,-192.82 1519.38,-192.82"/>
<text xml:space="preserve" text-anchor="start" x="1522.38" y="-198.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">private repo</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};