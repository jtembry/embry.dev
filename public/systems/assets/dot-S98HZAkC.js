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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Field Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">iPhone app · Swift · Node</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A custom iPhone app for talking to Claude and<BR/>Grok on the Mac from anywhere.</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Second Brain</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Where everything ends up: notes, projects,<BR/>ideas, and the dashboard.</FONT></TD></TR></TABLE>>,
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
    jt -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">taps</FONT></TD></TR></TABLE>>,
        likec4_id="1271r5b",
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
        style=dashed];
    jt -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks</FONT></TD></TR></TABLE>>,
        likec4_id=rravbi,
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
    fieldagent -> assistants [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id=biflw6,
        style=dashed];
    mail -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id="1w0mhfh",
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
    mail -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: note with full text</FONT></TD></TR></TABLE>>,
        likec4_id=o4u72x,
        style=dashed];
    assistants -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1rj2lhz",
        style=dashed];
    assistants -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=nbegqx,
        style=dashed];
    gmail -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id="75n7fx",
        style=dashed];
    vault -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="1ph5ro4",
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
        home [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home dashboard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The front door. Shows today, mail, texts, and<BR/>what each project needs next.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.home",
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
    schedulers -> home [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1fkz6t1",
        style=dashed];
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
    jt -> home [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks</FONT></TD></TR></TABLE>>,
        likec4_id="70pojz",
        style=dashed];
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
        weight=2];
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
        style=dashed];
    para -> home [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">next actions</FONT></TD></TR></TABLE>>,
        likec4_id=mmisx3,
        style=dashed,
        weight=2];
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home base</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node service on the Mac</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Passes each phone message to Claude or Grok<BR/>and streams the answer back.</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home base</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node service on the Mac</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Passes each phone message to Claude or Grok<BR/>and streams the answer back.</FONT></TD></TR></TABLE>>,
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
    approval -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Allow or Deny</FONT></TD></TR></TABLE>>,
        likec4_id="1r3tmem",
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
        homeplugin [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=schedulers,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home Button plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.homePlugin",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        calendar [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=schedulers,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Calendar mirror</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies the calendar onto the Home dashboard.</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mail &amp; text triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">AI · at Obsidian launch and on opening Home,</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Archives the noise and lists everything else<BR/>under Needs action.</FONT></TD></TR></TABLE>>,
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
        home [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home dashboard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The front door. Shows today, mail, texts, and<BR/>what each project needs next.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.home",
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
    chiprelay -> homeplugin [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queues a button</FONT></TD></TR></TABLE>>,
        likec4_id=alanfh,
        style=dashed,
        weight=3];
    launchd -> unread [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id=x53wgn,
        minlen=1,
        style=dashed];
    homeplugin -> calendar [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id="1gj982m",
        style=dashed,
        weight=3];
    homeplugin -> health [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">daily</FONT></TD></TR></TABLE>>,
        likec4_id="1y49ghc",
        style=dashed,
        weight=3];
    docs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Find Anything</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Mac · hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copies the text of every document in<BR/>Documents into the vault so one search finds<BR/>it.</FONT></TD></TR></TABLE>>,
        likec4_id=docs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    homeplugin -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id=ebaw3h,
        minlen=1,
        style=dashed,
        weight=2];
    homeplugin -> texts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id="143xwq7",
        style=dashed];
    homeplugin -> ocr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id=e1d0a1,
        minlen=1,
        style=dashed];
    homeplugin -> machine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id=f3g6vk,
        minlen=1,
        style=dashed];
    homeplugin -> printlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id=h301ak,
        minlen=1,
        style=dashed];
    homeplugin -> publish [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id="1dnpb8g",
        minlen=1,
        style=dashed];
    homeplugin -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">launch and Home</FONT></TD></TR></TABLE>>,
        likec4_id="1dl6quc",
        style=dashed];
    calendar -> home [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">today’s events</FONT></TD></TR></TABLE>>,
        likec4_id=yar4w9,
        style=dashed];
    health -> home [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Health Report</FONT></TD></TR></TABLE>>,
        likec4_id="1nir6ef",
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
        homeplugin [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home Button plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.homePlugin",
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mail &amp; text triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">AI · at Obsidian launch and on opening Home,</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Archives the noise and lists everything else<BR/>under Needs action.</FONT></TD></TR></TABLE>>,
            likec4_id="mail.mailTriage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        fold [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=mail,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Needs action list</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Home dashboard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">One list per inbox. Every row has the same<BR/>buttons: open, archive, delete, triage, add<BR/>to calendar, respond.</FONT></TD></TR></TABLE>>,
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
    homeplugin -> texts [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id="143xwq7",
        style=dashed];
    homeplugin -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">launch and Home</FONT></TD></TR></TABLE>>,
        likec4_id="1dl6quc",
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
    fold -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: note with full text</FONT></TD></TR></TABLE>>,
        likec4_id="7smwey",
        minlen=1,
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
        homeplugin [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home Button plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.homePlugin",
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
    homeplugin -> ocr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id=e1d0a1,
        style=dashed];
    docs [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Find Anything</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Mac · hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Copies the text of every document in<BR/>Documents into the vault so one search finds<BR/>it.</FONT></TD></TR></TABLE>>,
        likec4_id=docs,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    homeplugin -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id=ebaw3h,
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
        homeplugin [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home Button plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.homePlugin",
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
    homeplugin -> printlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every minute</FONT></TD></TR></TABLE>>,
        likec4_id=h301ak,
        style=dashed];
    homeplugin -> publish [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every 5 min</FONT></TD></TR></TABLE>>,
        likec4_id="1dnpb8g",
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
        homeplugin [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home Button plugin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs most timers: every minute, every 5<BR/>minutes, hourly, and daily.</FONT></TD></TR></TABLE>>,
            likec4_id="schedulers.homePlugin",
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
    homeplugin -> machine [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id=f3g6vk,
        style=dashed];
    homeplugin -> vaultpush [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hourly</FONT></TD></TR></TABLE>>,
        likec4_id=ncevgx,
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
<svg width="2949pt" height="3115pt"
 viewBox="0.00 0.00 2949.00 3115.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3100.25)">
<!-- iphone -->
<g id="node1" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="470.38,-3085.2 147.62,-3085.2 147.62,-2905.2 470.38,-2905.2 470.38,-3085.2"/>
<text xml:space="preserve" text-anchor="start" x="277.86" y="-2998.2" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="167.67" y="-2975.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders, the Field Agent app.</text>
</g>
<!-- jt -->
<g id="node2" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1007.38,-2762.4 664.62,-2762.4 664.62,-2582.4 1007.38,-2582.4 1007.38,-2762.4"/>
<text xml:space="preserve" text-anchor="start" x="824.89" y="-2684.4" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="684.68" y="-2661.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="809.31" y="-2643.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- fieldagent -->
<g id="node3" class="node">
<title>fieldagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="515.74,-2439.6 166.26,-2439.6 166.26,-2259.6 515.74,-2259.6 515.74,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="290.41" y="-2371.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Field Agent</text>
<text xml:space="preserve" text-anchor="start" x="264.04" y="-2350.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">iPhone app · Swift · Node</text>
<text xml:space="preserve" text-anchor="start" x="186.32" y="-2328.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">A custom iPhone app for talking to Claude and</text>
<text xml:space="preserve" text-anchor="start" x="231.79" y="-2310.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Grok on the Mac from anywhere.</text>
</g>
<!-- backups -->
<g id="node4" class="node">
<title>backups</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2767.23,-3085.2 2422.77,-3085.2 2422.77,-2905.2 2767.23,-2905.2 2767.23,-3085.2"/>
<text xml:space="preserve" text-anchor="start" x="2556.65" y="-3017" font-family="Arial" font-size="20.00" fill="#eff6ff">Backups</text>
<text xml:space="preserve" text-anchor="start" x="2526.73" y="-2996" font-family="Arial" font-size="13.00" fill="#bfdbfe">GitHub · Time Machine</text>
<text xml:space="preserve" text-anchor="start" x="2442.83" y="-2974.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Hourly copy of the vault and machine setup to</text>
<text xml:space="preserve" text-anchor="start" x="2454.94" y="-2956.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">GitHub; Time Machine for everything else.</text>
</g>
<!-- vault -->
<g id="node5" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1375.63,-1794 1050.37,-1794 1050.37,-1614 1375.63,-1614 1375.63,-1794"/>
<text xml:space="preserve" text-anchor="start" x="1152.96" y="-1725.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Second Brain</text>
<text xml:space="preserve" text-anchor="start" x="1171.81" y="-1704.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian vault</text>
<text xml:space="preserve" text-anchor="start" x="1070.42" y="-1683.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Where everything ends up: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1126.27" y="-1665.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">ideas, and the dashboard.</text>
</g>
<!-- pi -->
<g id="node6" class="node">
<title>pi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1984.96,-1148.4 1643.04,-1148.4 1643.04,-968.4 1984.96,-968.4 1984.96,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1783.98" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">brainpi</text>
<text xml:space="preserve" text-anchor="start" x="1776.43" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">Raspberry Pi</text>
<text xml:space="preserve" text-anchor="start" x="1663.09" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Small always&#45;on box: runs the scanner, holds</text>
<text xml:space="preserve" text-anchor="start" x="1671.03" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Time Machine, streams the printer camera.</text>
</g>
<!-- github -->
<g id="node7" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1907.95,-180 1558.05,-180 1558.05,0 1907.95,0 1907.95,-180"/>
<text xml:space="preserve" text-anchor="start" x="1701.88" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1582.07" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the vault backup and the website code;</text>
<text xml:space="preserve" text-anchor="start" x="1639.62" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">builds and hosts embry.dev.</text>
</g>
<!-- icloudmail -->
<g id="node8" class="node">
<title>icloudmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1668.02,-3085.2 1347.98,-3085.2 1347.98,-2905.2 1668.02,-2905.2 1668.02,-3085.2"/>
<text xml:space="preserve" text-anchor="start" x="1458.54" y="-2998.2" font-family="Arial" font-size="20.00" fill="#f8fafc">iCloud Mail</text>
<text xml:space="preserve" text-anchor="start" x="1452.55" y="-2975.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">Second mailbox.</text>
</g>
<!-- mail -->
<g id="node9" class="node">
<title>mail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1555.23,-2439.6 1200.77,-2439.6 1200.77,-2259.6 1555.23,-2259.6 1555.23,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="1316.32" y="-2361.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Email &amp; Texts</text>
<text xml:space="preserve" text-anchor="start" x="1220.83" y="-2338.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Turns two inboxes and iMessage into one short</text>
<text xml:space="preserve" text-anchor="start" x="1295.87" y="-2320.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">list of what needs action.</text>
</g>
<!-- assistants -->
<g id="node10" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="771.13,-2116.8 450.87,-2116.8 450.87,-1936.8 771.13,-1936.8 771.13,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="554.31" y="-2048.6" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistants</text>
<text xml:space="preserve" text-anchor="start" x="551.75" y="-2027.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="470.92" y="-2006" font-family="Arial" font-size="15.00" fill="#bfdbfe">Two assistants share one vault, one set of</text>
<text xml:space="preserve" text-anchor="start" x="532.22" y="-1988" font-family="Arial" font-size="15.00" fill="#bfdbfe">skills, and one memory.</text>
</g>
<!-- capture -->
<g id="node11" class="node">
<title>capture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1050.02,-1471.2 729.98,-1471.2 729.98,-1291.2 1050.02,-1291.2 1050.02,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="854.42" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Capture</text>
<text xml:space="preserve" text-anchor="start" x="754.1" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every way a thought gets into the in&#45;tray.</text>
</g>
<!-- scan -->
<g id="node12" class="node">
<title>scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1797.9,-1471.2 1430.1,-1471.2 1430.1,-1291.2 1797.9,-1291.2 1797.9,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1576.75" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Scanner</text>
<text xml:space="preserve" text-anchor="start" x="1450.16" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Paper in the scanner becomes a searchable PDF</text>
<text xml:space="preserve" text-anchor="start" x="1556.46" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">and a note to file.</text>
</g>
<!-- gmail -->
<g id="node13" class="node">
<title>gmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1839.02,-2116.8 1518.98,-2116.8 1518.98,-1936.8 1839.02,-1936.8 1839.02,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="1652.89" y="-2029.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Gmail</text>
<text xml:space="preserve" text-anchor="start" x="1632.73" y="-2006.8" font-family="Arial" font-size="15.00" fill="#cbd5e1">Main mailbox.</text>
</g>
<!-- docs -->
<g id="node14" class="node">
<title>docs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1498.72,-1148.4 1159.28,-1148.4 1159.28,-968.4 1498.72,-968.4 1498.72,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1267.85" y="-1089.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="1273.37" y="-1068.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1207.27" y="-1046.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="1179.33" y="-1028.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="1323.17" y="-1010.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- printing -->
<g id="node15" class="node">
<title>printing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2116.54,-825.6 1795.46,-825.6 1795.46,-645.6 2116.54,-645.6 2116.54,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1907.64" y="-757.4" font-family="Arial" font-size="20.00" fill="#eff6ff">3D printing</text>
<text xml:space="preserve" text-anchor="start" x="1908.66" y="-736.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Bambu Lab P2S</text>
<text xml:space="preserve" text-anchor="start" x="1815.52" y="-714.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Logs every print, streams the camera, and</text>
<text xml:space="preserve" text-anchor="start" x="1853.03" y="-696.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">posts finished prints to the site.</text>
</g>
<!-- cloudflare -->
<g id="node16" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1685.77,-825.6 1334.23,-825.6 1334.23,-645.6 1685.77,-645.6 1685.77,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1464.42" y="-747.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="1364.11" y="-724.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="1358.24" y="-706.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- site -->
<g id="node17" class="node">
<title>site</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1893.02,-502.8 1572.98,-502.8 1572.98,-322.8 1893.02,-322.8 1893.02,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1686.32" y="-434.6" font-family="Arial" font-size="20.00" fill="#eff6ff">embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="1654.6" y="-413.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Astro site on GitHub Pages</text>
<text xml:space="preserve" text-anchor="start" x="1610.85" y="-392" font-family="Arial" font-size="15.00" fill="#bfdbfe">Public site: the studio, the live printer</text>
<text xml:space="preserve" text-anchor="start" x="1635.87" y="-374" font-family="Arial" font-size="15.00" fill="#bfdbfe">camera, and the print gallery.</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge1" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M455.1,-2905.27C525.5,-2862.41 609.95,-2811 681.42,-2767.5"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="682.45,-2769.95 687.49,-2763.8 679.72,-2765.46 682.45,-2769.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="588.3,-2822.4 588.3,-2845.2 672.12,-2845.2 672.12,-2822.4 588.3,-2822.4"/>
<text xml:space="preserve" text-anchor="start" x="591.3" y="-2828.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- iphone&#45;&gt;fieldagent -->
<g id="edge2" class="edge">
<title>iphone&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M313.42,-2905.39C319.35,-2785.98 329.88,-2574.33 336.07,-2449.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="338.68,-2450.18 336.43,-2442.56 333.43,-2449.92 338.68,-2450.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="329.22,-2661 329.22,-2683.8 362.46,-2683.8 362.46,-2661 329.22,-2661"/>
<text xml:space="preserve" text-anchor="start" x="332.22" y="-2666.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- jt&#45;&gt;fieldagent -->
<g id="edge7" class="edge">
<title>jt&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M698.77,-2582.47C632.78,-2539.7 553.65,-2488.41 486.6,-2444.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="488.33,-2442.95 480.61,-2441.08 485.47,-2447.36 488.33,-2442.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="603.34,-2499.6 603.34,-2522.4 635.8,-2522.4 635.8,-2499.6 603.34,-2499.6"/>
<text xml:space="preserve" text-anchor="start" x="606.34" y="-2505.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">taps</text>
</g>
<!-- jt&#45;&gt;vault -->
<g id="edge10" class="edge">
<title>jt&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M870.62,-2582.65C941.16,-2401.83 1101.05,-1991.97 1174.63,-1803.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1177.01,-1804.48 1177.29,-1796.54 1172.12,-1802.57 1177.01,-1804.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1028.85,-2176.8 1028.85,-2199.6 1078.42,-2199.6 1078.42,-2176.8 1028.85,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="1031.85" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks</text>
</g>
<!-- jt&#45;&gt;mail -->
<g id="edge8" class="edge">
<title>jt&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1006.98,-2626.58C1079.17,-2602.72 1161.67,-2568.57 1228,-2522.4 1257.43,-2501.91 1284.81,-2474.42 1307.9,-2447.45"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1309.84,-2449.22 1312.67,-2441.79 1305.83,-2445.84 1309.84,-2449.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1252.42,-2499.6 1252.42,-2522.4 1357.25,-2522.4 1357.25,-2499.6 1252.42,-2499.6"/>
<text xml:space="preserve" text-anchor="start" x="1255.42" y="-2505.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">presses buttons</text>
</g>
<!-- jt&#45;&gt;assistants -->
<g id="edge9" class="edge">
<title>jt&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M804.95,-2582.59C763.17,-2463.06 689.07,-2251.11 645.56,-2126.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="648.04,-2125.81 643.09,-2119.59 643.09,-2127.54 648.04,-2125.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="753.18,-2338.2 753.18,-2361 787.97,-2361 787.97,-2338.2 753.18,-2338.2"/>
<text xml:space="preserve" text-anchor="start" x="756.18" y="-2344" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;capture -->
<g id="edge11" class="edge">
<title>jt&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M664.81,-2641.55C420.22,-2593.96 0,-2491.68 0,-2350.6 0,-2350.6 0,-2350.6 0,-1703 0,-1551.61 461.52,-1451.9 719.87,-1407.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="720.17,-1410.56 727.13,-1406.72 719.3,-1405.38 720.17,-1410.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="0,-2015.4 0,-2038.2 106.39,-2038.2 106.39,-2015.4 0,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="3" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
<!-- jt&#45;&gt;scan -->
<g id="edge12" class="edge">
<title>jt&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1007.06,-2650.85C1173.15,-2624.2 1426.39,-2565.28 1610,-2439.6 1767.69,-2331.67 1826.55,-2295.59 1894,-2116.8 1980.35,-1887.92 1808.53,-1619.44 1697.72,-1479"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1700.11,-1477.79 1693.39,-1473.55 1696,-1481.05 1700.11,-1477.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1917.44,-2015.4 1917.44,-2038.2 1996.61,-2038.2 1996.61,-2015.4 1917.44,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="1920.44" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">loads paper</text>
</g>
<!-- fieldagent&#45;&gt;assistants -->
<g id="edge13" class="edge">
<title>fieldagent&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M415.85,-2259.67C451.19,-2217.68 493.43,-2167.49 529.56,-2124.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="531.47,-2126.37 534.29,-2118.95 527.45,-2122.99 531.47,-2126.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="484.1,-2176.8 484.1,-2199.6 626.29,-2199.6 626.29,-2176.8 484.1,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="487.1" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- backups&#45;&gt;vault -->
<g id="edge3" class="edge">
<title>backups&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2545.18,-2905.29C2534.2,-2885.54 2522.66,-2864.68 2512,-2845.2 2292.04,-2443.13 2380.91,-2224.3 2024,-1936.8 1839.14,-1787.89 1563.21,-1734.62 1385.67,-1715.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1386.19,-1712.99 1378.45,-1714.82 1385.64,-1718.21 1386.19,-1712.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2347.99,-2338.2 2347.99,-2361 2455.15,-2361 2455.15,-2338.2 2347.99,-2338.2"/>
<text xml:space="preserve" text-anchor="start" x="2350.99" y="-2344" font-family="Arial" font-size="14.00" fill="#c9c9c9">writes setup into</text>
</g>
<!-- backups&#45;&gt;pi -->
<g id="edge4" class="edge">
<title>backups&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2595,-2905.35C2595,-2840.95 2595,-2751.79 2595,-2673.4 2595,-2673.4 2595,-2673.4 2595,-1380.2 2595,-1251.2 2225.82,-1147.94 1995.11,-1096.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1995.76,-1093.46 1987.86,-1094.38 1994.61,-1098.58 1995.76,-1093.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2595,-2015.4 2595,-2038.2 2672.6,-2038.2 2672.6,-2015.4 2595,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="2598" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">backs up to</text>
</g>
<!-- backups&#45;&gt;github -->
<g id="edge5" class="edge">
<title>backups&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2712.35,-2905.33C2774.86,-2847.23 2839,-2765.24 2839,-2673.4 2839,-2673.4 2839,-2673.4 2839,-411.8 2839,-222.36 2232.94,-137.6 1918.1,-106.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1918.68,-103.76 1910.96,-105.64 1918.16,-108.99 1918.68,-103.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2839,-1531.2 2839,-1554 2918.93,-1554 2918.93,-1531.2 2839,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="2842" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">private repo</text>
</g>
<!-- vault&#45;&gt;capture -->
<g id="edge20" class="edge">
<title>vault&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1050.62,-1641.21C1009.74,-1619.03 969.24,-1590.29 940.06,-1554 923.22,-1533.07 912.05,-1506.68 904.64,-1480.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="907.26,-1480.55 902.76,-1474 902.19,-1481.92 907.26,-1480.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="940.06,-1531.2 940.06,-1554 1020,-1554 1020,-1531.2 940.06,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="943.06" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- vault&#45;&gt;scan -->
<g id="edge21" class="edge">
<title>vault&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1319.2,-1614.02C1351.62,-1587.17 1387.49,-1557.78 1420.77,-1531.2 1442.76,-1513.64 1466.34,-1495.17 1489.22,-1477.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1490.56,-1479.71 1494.88,-1473.04 1487.34,-1475.56 1490.56,-1479.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1420.77,-1531.2 1420.77,-1554 1475,-1554 1475,-1531.2 1420.77,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1423.77" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
<!-- pi&#45;&gt;scan -->
<g id="edge28" class="edge">
<title>pi&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1645.23,-1148.37C1625.64,-1165.65 1608.41,-1185.62 1596.39,-1208.4 1584.78,-1230.43 1582.55,-1256.25 1584.85,-1281.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1582.21,-1281.12 1585.69,-1288.27 1587.43,-1280.51 1582.21,-1281.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1596.39,-1208.4 1596.39,-1231.2 1681,-1231.2 1681,-1208.4 1596.39,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1599.39" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">saves pages</text>
</g>
<!-- pi&#45;&gt;printing -->
<g id="edge29" class="edge">
<title>pi&#45;&gt;printing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1853.37,-968.47C1871.72,-927.01 1893.61,-877.54 1912.46,-834.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1914.82,-836.12 1915.45,-828.2 1910.02,-833.99 1914.82,-836.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1889.26,-885.6 1889.26,-908.4 1969.97,-908.4 1969.97,-885.6 1889.26,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1892.26" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">drafted card</text>
</g>
<!-- pi&#45;&gt;cloudflare -->
<g id="edge30" class="edge">
<title>pi&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1729.72,-968.47C1689.77,-926.31 1641.98,-875.87 1601.18,-832.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1603.32,-831.27 1596.26,-827.63 1599.51,-834.88 1603.32,-831.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1671.12,-885.6 1671.12,-908.4 1770.47,-908.4 1770.47,-885.6 1671.12,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1674.12" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera stream</text>
</g>
<!-- icloudmail&#45;&gt;mail -->
<g id="edge6" class="edge">
<title>icloudmail&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1490.06,-2905.39C1465.94,-2785.98 1423.19,-2574.33 1398.04,-2449.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1400.62,-2449.33 1396.56,-2442.5 1395.48,-2450.37 1400.62,-2449.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1460.15,-2661 1460.15,-2683.8 1521.39,-2683.8 1521.39,-2661 1460.15,-2661"/>
<text xml:space="preserve" text-anchor="start" x="1463.15" y="-2666.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- mail&#45;&gt;jt -->
<g id="edge14" class="edge">
<title>mail&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1200.95,-2434.59C1161.28,-2454.83 1119.8,-2477.13 1082.15,-2499.6 1042.93,-2523 1001.73,-2550.5 964.48,-2576.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="963.21,-2574.25 958.58,-2580.71 966.23,-2578.55 963.21,-2574.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1082.15,-2499.6 1082.15,-2522.4 1201,-2522.4 1201,-2499.6 1082.15,-2499.6"/>
<text xml:space="preserve" text-anchor="start" x="1085.15" y="-2505.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- mail&#45;&gt;vault -->
<g id="edge16" class="edge">
<title>mail&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1327.95,-2259.8C1306.3,-2217.67 1282.65,-2165.91 1268.11,-2116.8 1237.3,-2012.73 1223.67,-1888.73 1217.67,-1804.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1220.29,-1804.13 1217.16,-1796.83 1215.06,-1804.49 1220.29,-1804.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1268.11,-2015.4 1268.11,-2038.2 1464,-2038.2 1464,-2015.4 1268.11,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="1271.11" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
<!-- mail&#45;&gt;gmail -->
<g id="edge15" class="edge">
<title>mail&#45;&gt;gmail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1461.45,-2259.67C1500.92,-2217.6 1548.13,-2167.28 1588.46,-2124.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1590.36,-2126.1 1593.58,-2118.84 1586.54,-2122.51 1590.36,-2126.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1537.53,-2176.8 1537.53,-2199.6 1634.58,-2199.6 1634.58,-2176.8 1537.53,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="1540.53" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">archive, delete</text>
</g>
<!-- assistants&#45;&gt;vault -->
<g id="edge17" class="edge">
<title>assistants&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M709.71,-1936.92C745.05,-1907.98 786.26,-1877.34 827.01,-1854 893.83,-1815.73 972.38,-1783.38 1041.11,-1758.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1041.71,-1761.28 1047.89,-1756.29 1039.95,-1756.33 1041.71,-1761.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="827.01,-1854 827.01,-1876.8 854,-1876.8 854,-1854 827.01,-1854"/>
<text xml:space="preserve" text-anchor="start" x="830.01" y="-1862.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- assistants&#45;&gt;capture -->
<g id="edge18" class="edge">
<title>assistants&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M649.5,-1936.99C701.37,-1817.34 793.38,-1605.08 847.31,-1480.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="849.67,-1481.84 850.24,-1473.91 844.85,-1479.75 849.67,-1481.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="787.31,-1692.6 787.31,-1715.4 820.54,-1715.4 820.54,-1692.6 787.31,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="790.31" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- capture&#45;&gt;vault -->
<g id="edge22" class="edge">
<title>capture&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M981.69,-1470.96C1001.95,-1490.72 1023.26,-1511.62 1043,-1531.2 1067.67,-1555.68 1094.17,-1582.3 1118.74,-1607.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1116.68,-1608.77 1123.83,-1612.25 1120.42,-1605.08 1116.68,-1608.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1061.58,-1531.2 1061.58,-1554 1088.57,-1554 1088.57,-1531.2 1061.58,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1064.58" y="-1539.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- capture&#45;&gt;github -->
<g id="edge23" class="edge">
<title>capture&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M904.94,-1291.29C914.46,-1227.06 925,-1138.12 925,-1059.4 925,-1059.4 925,-1059.4 925,-411.8 925,-278.54 1309.46,-176.48 1547.99,-125.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1548.41,-128.58 1555.21,-124.47 1547.33,-123.44 1548.41,-128.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="925,-724.2 925,-747 1039.17,-747 1039.17,-724.2 925,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="928" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">via the vault copy</text>
</g>
<!-- scan&#45;&gt;vault -->
<g id="edge24" class="edge">
<title>scan&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1566.03,-1470.89C1547.46,-1499.81 1524.3,-1530.5 1498,-1554 1464.69,-1583.77 1424.36,-1609.49 1384.65,-1630.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1383.47,-1628.43 1378.06,-1634.26 1385.92,-1633.07 1383.47,-1628.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1517.94,-1531.2 1517.94,-1554 1636.02,-1554 1636.02,-1531.2 1517.94,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1520.94" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">one note per scan</text>
</g>
<!-- scan&#45;&gt;pi -->
<g id="edge26" class="edge">
<title>scan&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1669.45,-1291.27C1695.46,-1249.54 1726.52,-1199.71 1753.18,-1156.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1755.28,-1158.55 1757.02,-1150.8 1750.82,-1155.77 1755.28,-1158.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1720,-1208.4 1720,-1231.2 1746.99,-1231.2 1746.99,-1208.4 1720,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1723" y="-1216.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- scan&#45;&gt;docs -->
<g id="edge25" class="edge">
<title>scan&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1534.99,-1291.27C1497.62,-1249.2 1452.92,-1198.88 1414.72,-1155.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1416.87,-1154.36 1409.93,-1150.49 1412.95,-1157.84 1416.87,-1154.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1480.05,-1208.4 1480.05,-1231.2 1535.09,-1231.2 1535.09,-1208.4 1480.05,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1483.05" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">indexed</text>
</g>
<!-- gmail&#45;&gt;mail -->
<g id="edge19" class="edge">
<title>gmail&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1519.29,-2099.97C1486.37,-2120.86 1454.54,-2146.42 1430.76,-2176.8 1414.22,-2197.93 1402.84,-2224.26 1395.01,-2249.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1392.59,-2248.84 1393.03,-2256.78 1397.63,-2250.3 1392.59,-2248.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1430.76,-2176.8 1430.76,-2199.6 1492,-2199.6 1492,-2176.8 1430.76,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="1433.76" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- docs&#45;&gt;vault -->
<g id="edge27" class="edge">
<title>docs&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1312.97,-1148.34C1291.44,-1267.8 1253.29,-1479.45 1230.86,-1603.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1228.29,-1603.36 1229.54,-1611.21 1233.46,-1604.29 1228.29,-1603.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1286.3,-1369.8 1286.3,-1392.6 1336.66,-1392.6 1336.66,-1369.8 1286.3,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="1289.3" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">full text</text>
</g>
<!-- printing&#45;&gt;pi -->
<g id="edge31" class="edge">
<title>printing&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1863.62,-825.31C1849.05,-843.84 1835.88,-864.28 1827.01,-885.6 1817.6,-908.19 1812.88,-933.89 1810.81,-958.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1808.19,-958.14 1810.29,-965.8 1813.43,-958.5 1808.19,-958.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1827.01,-885.6 1827.01,-908.4 1854,-908.4 1854,-885.6 1827.01,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1830.01" y="-893.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- printing&#45;&gt;site -->
<g id="edge32" class="edge">
<title>printing&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1894.18,-645.67C1865.12,-603.86 1830.39,-553.91 1800.63,-511.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1802.91,-509.78 1796.48,-505.12 1798.6,-512.77 1802.91,-509.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1851.19,-562.8 1851.19,-585.6 1929.55,-585.6 1929.55,-562.8 1851.19,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1854.19" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">gallery card</text>
</g>
<!-- cloudflare&#45;&gt;site -->
<g id="edge33" class="edge">
<title>cloudflare&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1571.82,-645.67C1600.88,-603.86 1635.61,-553.91 1665.37,-511.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1667.4,-512.77 1669.52,-505.12 1663.09,-509.78 1667.4,-512.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1628.19,-562.8 1628.19,-585.6 1675.42,-585.6 1675.42,-562.8 1628.19,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1631.19" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">serves</text>
</g>
<!-- site&#45;&gt;github -->
<g id="edge34" class="edge">
<title>site&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1733,-322.87C1733,-281.67 1733,-232.56 1733,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1735.63,-190.36 1733,-182.86 1730.38,-190.36 1735.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1733,-240 1733,-262.8 1785.7,-262.8 1785.7,-240 1733,-240"/>
<text xml:space="preserve" text-anchor="start" x="1736" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs on</text>
</g>
</g>
</svg>
`;case`secondBrain`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="4419pt" height="2646pt"
 viewBox="0.00 0.00 4419.00 2646.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2630.85)">
<g id="clust1" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2323.05,-126 2323.05,-987 4380.55,-987 4380.55,-126 2323.05,-126"/>
<text xml:space="preserve" text-anchor="start" x="2331.05" y="-974.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- ingest -->
<g id="node1" class="node">
<title>ingest</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2693.62,-619.64C2693.62,-628.67 2621.89,-636 2533.6,-636 2445.3,-636 2373.58,-628.67 2373.58,-619.64 2373.58,-619.64 2373.58,-472.36 2373.58,-472.36 2373.58,-463.33 2445.3,-456 2533.6,-456 2621.89,-456 2693.62,-463.33 2693.62,-472.36 2693.62,-472.36 2693.62,-619.64 2693.62,-619.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2693.62,-619.64C2693.62,-610.61 2621.89,-603.27 2533.6,-603.27 2445.3,-603.27 2373.58,-610.61 2373.58,-619.64"/>
<text xml:space="preserve" text-anchor="start" x="2498.01" y="-549" font-family="Arial" font-size="20.00" fill="#eef2ff">0 Ingest</text>
<text xml:space="preserve" text-anchor="start" x="2393.96" y="-526" font-family="Arial" font-size="15.00" fill="#c7d2fe">The in&#45;tray. Every capture lands here first.</text>
</g>
<!-- pdftext -->
<g id="node2" class="node">
<title>pdftext</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2704.14,-329.64C2704.14,-338.67 2627.7,-346 2533.6,-346 2439.49,-346 2363.05,-338.67 2363.05,-329.64 2363.05,-329.64 2363.05,-182.36 2363.05,-182.36 2363.05,-173.33 2439.49,-166 2533.6,-166 2627.7,-166 2704.14,-173.33 2704.14,-182.36 2704.14,-182.36 2704.14,-329.64 2704.14,-329.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2704.14,-329.64C2704.14,-320.61 2627.7,-313.27 2533.6,-313.27 2439.49,-313.27 2363.05,-320.61 2363.05,-329.64"/>
<text xml:space="preserve" text-anchor="start" x="2469.12" y="-277.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Document text</text>
<text xml:space="preserve" text-anchor="start" x="2467.85" y="-256.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">3 Resources/PDF Text</text>
<text xml:space="preserve" text-anchor="start" x="2383.1" y="-235.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Searchable text of every document, with links</text>
<text xml:space="preserve" text-anchor="start" x="2461.46" y="-217.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">that open the original.</text>
</g>
<!-- triage -->
<g id="node3" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3244.31,-636 2915.72,-636 2915.72,-456 3244.31,-456 3244.31,-636"/>
<text xml:space="preserve" text-anchor="start" x="3029.43" y="-567.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault triage</text>
<text xml:space="preserve" text-anchor="start" x="3023.3" y="-546.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok skill</text>
<text xml:space="preserve" text-anchor="start" x="2935.78" y="-525.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="3045.83" y="-507.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- para -->
<g id="node4" class="node">
<title>para</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M3782.8,-619.64C3782.8,-628.67 3711.07,-636 3622.78,-636 3534.48,-636 3462.76,-628.67 3462.76,-619.64 3462.76,-619.64 3462.76,-472.36 3462.76,-472.36 3462.76,-463.33 3534.48,-456 3622.78,-456 3711.07,-456 3782.8,-463.33 3782.8,-472.36 3782.8,-472.36 3782.8,-619.64 3782.8,-619.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M3782.8,-619.64C3782.8,-610.61 3711.07,-603.27 3622.78,-603.27 3534.48,-603.27 3462.76,-610.61 3462.76,-619.64"/>
<text xml:space="preserve" text-anchor="start" x="3548.3" y="-558" font-family="Arial" font-size="20.00" fill="#eef2ff">Projects &amp; Areas</text>
<text xml:space="preserve" text-anchor="start" x="3494.37" y="-535" font-family="Arial" font-size="15.00" fill="#c7d2fe">Life admin: things with a finish line and</text>
<text xml:space="preserve" text-anchor="start" x="3571.9" y="-517" font-family="Arial" font-size="15.00" fill="#c7d2fe">ongoing duties.</text>
</g>
<!-- zettel -->
<g id="node5" class="node">
<title>zettel</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M3782.8,-329.64C3782.8,-338.67 3711.07,-346 3622.78,-346 3534.48,-346 3462.76,-338.67 3462.76,-329.64 3462.76,-329.64 3462.76,-182.36 3462.76,-182.36 3462.76,-173.33 3534.48,-166 3622.78,-166 3711.07,-166 3782.8,-173.33 3782.8,-182.36 3782.8,-182.36 3782.8,-329.64 3782.8,-329.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M3782.8,-329.64C3782.8,-320.61 3711.07,-313.27 3622.78,-313.27 3534.48,-313.27 3462.76,-320.61 3462.76,-329.64"/>
<text xml:space="preserve" text-anchor="start" x="3536.06" y="-268" font-family="Arial" font-size="20.00" fill="#eef2ff">Concepts &amp; Quotes</text>
<text xml:space="preserve" text-anchor="start" x="3485.6" y="-245" font-family="Arial" font-size="15.00" fill="#c7d2fe">Ideas worth keeping, one per note, linked</text>
<text xml:space="preserve" text-anchor="start" x="3593.17" y="-227" font-family="Arial" font-size="15.00" fill="#c7d2fe">together.</text>
</g>
<!-- memory -->
<g id="node6" class="node">
<title>memory</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M3802.08,-909.64C3802.08,-918.67 3721.72,-926 3622.78,-926 3523.84,-926 3443.47,-918.67 3443.47,-909.64 3443.47,-909.64 3443.47,-762.36 3443.47,-762.36 3443.47,-753.33 3523.84,-746 3622.78,-746 3721.72,-746 3802.08,-753.33 3802.08,-762.36 3802.08,-762.36 3802.08,-909.64 3802.08,-909.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M3802.08,-909.64C3802.08,-900.61 3721.72,-893.27 3622.78,-893.27 3523.84,-893.27 3443.47,-900.61 3443.47,-909.64"/>
<text xml:space="preserve" text-anchor="start" x="3550.55" y="-848" font-family="Arial" font-size="20.00" fill="#eef2ff">System memory</text>
<text xml:space="preserve" text-anchor="start" x="3463.53" y="-825" font-family="Arial" font-size="15.00" fill="#c7d2fe">What the assistants need to remember between</text>
<text xml:space="preserve" text-anchor="start" x="3591.51" y="-807" font-family="Arial" font-size="15.00" fill="#c7d2fe">sessions.</text>
</g>
<!-- home -->
<g id="node7" class="node">
<title>home</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="4340.55,-636 4002.79,-636 4002.79,-456 4340.55,-456 4340.55,-636"/>
<text xml:space="preserve" text-anchor="start" x="4094.96" y="-558" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home dashboard</text>
<text xml:space="preserve" text-anchor="start" x="4022.85" y="-535" font-family="Arial" font-size="15.00" fill="#b6ecf7">The front door. Shows today, mail, texts, and</text>
<text xml:space="preserve" text-anchor="start" x="4072.03" y="-517" font-family="Arial" font-size="15.00" fill="#b6ecf7">what each project needs next.</text>
</g>
<!-- schedulers -->
<g id="node8" class="node">
<title>schedulers</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="341.09,-1329 0,-1329 0,-1149 341.09,-1149 341.09,-1329"/>
<text xml:space="preserve" text-anchor="start" x="120.52" y="-1260.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Schedulers</text>
<text xml:space="preserve" text-anchor="start" x="95.75" y="-1239.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian plugin · launchd</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1218.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Timers that refresh everything so nobody has</text>
<text xml:space="preserve" text-anchor="start" x="116.36" y="-1200.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">to press refresh.</text>
</g>
<!-- mail -->
<g id="node9" class="node">
<title>mail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="859.68,-1585 505.22,-1585 505.22,-1405 859.68,-1405 859.68,-1585"/>
<text xml:space="preserve" text-anchor="start" x="620.77" y="-1507" font-family="Arial" font-size="20.00" fill="#eff6ff">Email &amp; Texts</text>
<text xml:space="preserve" text-anchor="start" x="525.28" y="-1484" font-family="Arial" font-size="15.00" fill="#bfdbfe">Turns two inboxes and iMessage into one short</text>
<text xml:space="preserve" text-anchor="start" x="600.32" y="-1466" font-family="Arial" font-size="15.00" fill="#bfdbfe">list of what needs action.</text>
</g>
<!-- backups -->
<g id="node10" class="node">
<title>backups</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="854.68,-1875 510.22,-1875 510.22,-1695 854.68,-1695 854.68,-1875"/>
<text xml:space="preserve" text-anchor="start" x="644.1" y="-1806.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Backups</text>
<text xml:space="preserve" text-anchor="start" x="614.18" y="-1785.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">GitHub · Time Machine</text>
<text xml:space="preserve" text-anchor="start" x="530.28" y="-1764.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Hourly copy of the vault and machine setup to</text>
<text xml:space="preserve" text-anchor="start" x="542.39" y="-1746.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">GitHub; Time Machine for everything else.</text>
</g>
<!-- scan -->
<g id="node11" class="node">
<title>scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2124.97,-1330 1757.18,-1330 1757.18,-1150 2124.97,-1150 2124.97,-1330"/>
<text xml:space="preserve" text-anchor="start" x="1903.83" y="-1252" font-family="Arial" font-size="20.00" fill="#eff6ff">Scanner</text>
<text xml:space="preserve" text-anchor="start" x="1777.23" y="-1229" font-family="Arial" font-size="15.00" fill="#bfdbfe">Paper in the scanner becomes a searchable PDF</text>
<text xml:space="preserve" text-anchor="start" x="1883.53" y="-1211" font-family="Arial" font-size="15.00" fill="#bfdbfe">and a note to file.</text>
</g>
<!-- docs -->
<g id="node12" class="node">
<title>docs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2703.32,-1207 2363.87,-1207 2363.87,-1027 2703.32,-1027 2703.32,-1207"/>
<text xml:space="preserve" text-anchor="start" x="2472.45" y="-1147.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="2477.96" y="-1126.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="2411.86" y="-1105.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="2383.93" y="-1087.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="2527.76" y="-1069.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- jt -->
<g id="node13" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1441.29,-1877 1098.53,-1877 1098.53,-1697 1441.29,-1697 1441.29,-1877"/>
<text xml:space="preserve" text-anchor="start" x="1258.8" y="-1799" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="1118.59" y="-1776" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="1243.22" y="-1758" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- assistants -->
<g id="node14" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2101.2,-2100 1780.94,-2100 1780.94,-1920 2101.2,-1920 2101.2,-2100"/>
<text xml:space="preserve" text-anchor="start" x="1884.38" y="-2031.8" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistants</text>
<text xml:space="preserve" text-anchor="start" x="1881.82" y="-2010.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="1801" y="-1989.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Two assistants share one vault, one set of</text>
<text xml:space="preserve" text-anchor="start" x="1862.29" y="-1971.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">skills, and one memory.</text>
</g>
<!-- capture -->
<g id="node15" class="node">
<title>capture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2693.62,-1983 2373.58,-1983 2373.58,-1803 2693.62,-1803 2693.62,-1983"/>
<text xml:space="preserve" text-anchor="start" x="2498.02" y="-1896" font-family="Arial" font-size="20.00" fill="#eff6ff">Capture</text>
<text xml:space="preserve" text-anchor="start" x="2397.69" y="-1873" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every way a thought gets into the in&#45;tray.</text>
</g>
<!-- ingest&#45;&gt;triage -->
<g id="edge22" class="edge">
<title>ingest&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2694.26,-546C2760.66,-546 2837.91,-546 2905.69,-546"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2905.52,-548.63 2913.02,-546 2905.52,-543.38 2905.52,-548.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2783.58,-546 2783.58,-568.8 2836.28,-568.8 2836.28,-546 2783.58,-546"/>
<text xml:space="preserve" text-anchor="start" x="2786.58" y="-551.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">read by</text>
</g>
<!-- triage&#45;&gt;para -->
<g id="edge24" class="edge">
<title>triage&#45;&gt;para</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3244,-546C3309.66,-546 3385.42,-546 3451.78,-546"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3451.4,-548.63 3458.9,-546 3451.4,-543.38 3451.4,-548.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3307.04,-546 3307.04,-568.8 3380.74,-568.8 3380.74,-546 3307.04,-546"/>
<text xml:space="preserve" text-anchor="start" x="3310.04" y="-551.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">files to&#45;dos</text>
</g>
<!-- triage&#45;&gt;zettel -->
<g id="edge25" class="edge">
<title>triage&#45;&gt;zettel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3244,-458.6C3311.26,-422.53 3389.11,-380.78 3456.6,-344.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3457.59,-347.03 3462.96,-341.17 3455.11,-342.4 3457.59,-347.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3309.76,-418.36 3309.76,-441.16 3378.02,-441.16 3378.02,-418.36 3309.76,-418.36"/>
<text xml:space="preserve" text-anchor="start" x="3312.76" y="-424.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">files ideas</text>
</g>
<!-- triage&#45;&gt;memory -->
<g id="edge26" class="edge">
<title>triage&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3244,-633.4C3310.37,-669 3387.04,-710.12 3453.91,-745.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3452.33,-748.11 3460.18,-749.34 3454.81,-743.48 3452.33,-748.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3304.31,-699.7 3304.31,-722.5 3383.47,-722.5 3383.47,-699.7 3304.31,-699.7"/>
<text xml:space="preserve" text-anchor="start" x="3307.31" y="-705.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">logs the run</text>
</g>
<!-- triage&#45;&gt;scan -->
<g id="edge23" class="edge">
<title>triage&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3062.8,-635.77C3028.62,-795.13 2932.67,-1123.69 2704.14,-1262 2533.06,-1365.54 2298.47,-1339.2 2134.94,-1300.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2135.61,-1297.69 2127.7,-1298.47 2134.37,-1302.79 2135.61,-1297.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2506.48,-1334.64 2506.48,-1357.44 2560.71,-1357.44 2560.71,-1334.64 2506.48,-1334.64"/>
<text xml:space="preserve" text-anchor="start" x="2509.48" y="-1340.44" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
<!-- para&#45;&gt;home -->
<g id="edge28" class="edge">
<title>para&#45;&gt;home</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3783.43,-546C3849.11,-546 3925.44,-546 3992.89,-546"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3992.68,-548.63 4000.18,-546 3992.68,-543.38 3992.68,-548.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3862.08,-546 3862.08,-568.8 3942.79,-568.8 3942.79,-546 3862.08,-546"/>
<text xml:space="preserve" text-anchor="start" x="3865.08" y="-551.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">next actions</text>
</g>
<!-- para&#45;&gt;capture -->
<g id="edge27" class="edge">
<title>para&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3500.21,-633.16C3479.84,-650.92 3459.99,-670.49 3443.47,-691 3080.21,-1142.06 3329.8,-1521.34 2855.72,-1854 2811.98,-1884.7 2756.38,-1897.96 2703.79,-1902.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2703.62,-1899.89 2696.34,-1903.08 2704.02,-1905.13 2703.62,-1899.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3040.04,-1798.12 3040.04,-1820.92 3119.99,-1820.92 3119.99,-1798.12 3040.04,-1798.12"/>
<text xml:space="preserve" text-anchor="start" x="3043.04" y="-1803.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- schedulers&#45;&gt;home -->
<g id="edge5" class="edge">
<title>schedulers&#45;&gt;home</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M188.22,-1149.4C243.69,-864.79 432.71,0 681.45,0 681.45,0 681.45,0 3623.78,0 3873.88,0 4049.73,-289.51 4126.85,-446.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4124.38,-447.82 4130.02,-453.42 4129.1,-445.53 4124.38,-447.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2230.51,0 2230.51,-22.8 2257.5,-22.8 2257.5,0 2230.51,0"/>
<text xml:space="preserve" text-anchor="start" x="2233.51" y="-8.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- schedulers&#45;&gt;mail -->
<g id="edge1" class="edge">
<title>schedulers&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M340.98,-1324.07C390.88,-1349.12 445.71,-1376.65 496.53,-1402.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="495.05,-1404.35 502.93,-1405.37 497.4,-1399.66 495.05,-1404.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="409.66,-1374.68 409.66,-1397.48 436.66,-1397.48 436.66,-1374.68 409.66,-1374.68"/>
<text xml:space="preserve" text-anchor="start" x="412.66" y="-1382.88" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- schedulers&#45;&gt;backups -->
<g id="edge2" class="edge">
<title>schedulers&#45;&gt;backups</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M238.35,-1328.75C302.72,-1412.85 404.88,-1540.21 505.22,-1640 521.69,-1656.38 539.86,-1672.86 558.09,-1688.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="556.19,-1690.37 563.59,-1693.24 559.59,-1686.37 556.19,-1690.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="401.09,-1567.84 401.09,-1590.64 445.22,-1590.64 445.22,-1567.84 401.09,-1567.84"/>
<text xml:space="preserve" text-anchor="start" x="404.09" y="-1573.64" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- schedulers&#45;&gt;scan -->
<g id="edge3" class="edge">
<title>schedulers&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M340.72,-1239.1C670.76,-1239.28 1398.65,-1239.69 1746.97,-1239.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1746.89,-1242.52 1754.39,-1239.89 1746.9,-1237.27 1746.89,-1242.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="936.03,-1239.49 936.03,-1262.29 1022.18,-1262.29 1022.18,-1239.49 936.03,-1239.49"/>
<text xml:space="preserve" text-anchor="start" x="939.03" y="-1245.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- schedulers&#45;&gt;docs -->
<g id="edge4" class="edge">
<title>schedulers&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M278.25,-1149.1C376.46,-1075.68 529.52,-984 681.45,-984 681.45,-984 681.45,-984 1942.07,-984 2082.86,-984 2238.02,-1020.42 2353.95,-1055.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2353.15,-1057.65 2361.08,-1057.31 2354.66,-1052.62 2353.15,-1057.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1247.84,-984 1247.84,-1006.8 1291.98,-1006.8 1291.98,-984 1247.84,-984"/>
<text xml:space="preserve" text-anchor="start" x="1250.84" y="-989.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- mail&#45;&gt;ingest -->
<g id="edge7" class="edge">
<title>mail&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M858.66,-1405.08C1213.63,-1222.91 2013.57,-812.37 2363.42,-632.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2364.45,-635.24 2369.93,-629.48 2362.06,-630.57 2364.45,-635.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1501.29,-1075.14 1501.29,-1097.94 1697.18,-1097.94 1697.18,-1075.14 1501.29,-1075.14"/>
<text xml:space="preserve" text-anchor="start" x="1504.29" y="-1080.94" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
<!-- mail&#45;&gt;jt -->
<g id="edge6" class="edge">
<title>mail&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M859.43,-1548.63C917.85,-1569.14 982.3,-1594.77 1038.53,-1624.2 1074.93,-1643.25 1112.22,-1667.29 1145.9,-1691.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1144.28,-1693.09 1151.91,-1695.29 1147.31,-1688.8 1144.28,-1693.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="919.68,-1624.2 919.68,-1647 1038.53,-1647 1038.53,-1624.2 919.68,-1624.2"/>
<text xml:space="preserve" text-anchor="start" x="922.68" y="-1630" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- backups&#45;&gt;memory -->
<g id="edge8" class="edge">
<title>backups&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M703.22,-1874.95C755.36,-2085.56 917.47,-2593 1268.91,-2593 1268.91,-2593 1268.91,-2593 2810.93,-2593 3545.66,-2593 3616.81,-1310.68 3621.95,-937.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3624.57,-937.32 3622.03,-929.79 3619.32,-937.26 3624.57,-937.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2190.43,-2593 2190.43,-2615.8 2297.59,-2615.8 2297.59,-2593 2190.43,-2593"/>
<text xml:space="preserve" text-anchor="start" x="2193.43" y="-2598.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">writes setup into</text>
</g>
<!-- scan&#45;&gt;ingest -->
<g id="edge18" class="edge">
<title>scan&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1988.45,-1150.2C2032.91,-1068.52 2104.94,-946.92 2184.97,-854.2 2230.13,-801.88 2251.14,-798.64 2303.05,-753 2343.67,-717.29 2387.88,-677.62 2426.56,-642.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2428.18,-644.71 2431.98,-637.73 2424.65,-640.82 2428.18,-644.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2184.97,-854.2 2184.97,-877 2303.05,-877 2303.05,-854.2 2184.97,-854.2"/>
<text xml:space="preserve" text-anchor="start" x="2187.97" y="-860" font-family="Arial" font-size="14.00" fill="#c9c9c9">one note per scan</text>
</g>
<!-- scan&#45;&gt;docs -->
<g id="edge17" class="edge">
<title>scan&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2124.87,-1201.92C2197.83,-1186.73 2281.55,-1169.29 2354.07,-1154.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2354.46,-1156.79 2361.26,-1152.69 2353.38,-1151.65 2354.46,-1156.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2216.49,-1185.86 2216.49,-1208.66 2271.53,-1208.66 2271.53,-1185.86 2216.49,-1185.86"/>
<text xml:space="preserve" text-anchor="start" x="2219.49" y="-1191.66" font-family="Arial" font-size="14.00" fill="#c9c9c9">indexed</text>
</g>
<!-- docs&#45;&gt;pdftext -->
<g id="edge21" class="edge">
<title>docs&#45;&gt;pdftext</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2364,-1046.7C2349.25,-1036.94 2335.31,-1026.05 2323.05,-1014 2288.68,-980.21 2285.03,-964.26 2273.76,-917.4 2219.88,-693.23 2205.78,-599.5 2323.05,-401 2334.85,-381.02 2350.61,-363.16 2368.23,-347.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2369.65,-349.62 2373.6,-342.72 2366.21,-345.65 2369.65,-349.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2218.83,-894.6 2218.83,-917.4 2269.18,-917.4 2269.18,-894.6 2218.83,-894.6"/>
<text xml:space="preserve" text-anchor="start" x="2221.83" y="-900.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">full text</text>
</g>
<!-- jt&#45;&gt;home -->
<g id="edge13" class="edge">
<title>jt&#45;&gt;home</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1319.21,-1876.97C1414.45,-2040.79 1643.25,-2371 1940.07,-2371 1940.07,-2371 1940.07,-2371 2810.93,-2371 3678.69,-2371 4058.31,-1027.81 4148.67,-646.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4151.22,-646.73 4150.38,-638.83 4146.11,-645.53 4151.22,-646.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2785.15,-2371 2785.15,-2393.8 2834.72,-2393.8 2834.72,-2371 2785.15,-2371"/>
<text xml:space="preserve" text-anchor="start" x="2788.15" y="-2376.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks</text>
</g>
<!-- jt&#45;&gt;mail -->
<g id="edge9" class="edge">
<title>jt&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1098.86,-1741.83C1040.43,-1723.26 975.67,-1699.18 919.68,-1670 877.81,-1648.18 835.35,-1619.28 798.2,-1591.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="799.84,-1589.21 792.28,-1586.76 796.66,-1593.39 799.84,-1589.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="926.69,-1718.44 926.69,-1741.24 1031.52,-1741.24 1031.52,-1718.44 926.69,-1718.44"/>
<text xml:space="preserve" text-anchor="start" x="929.69" y="-1724.24" font-family="Arial" font-size="14.00" fill="#c9c9c9">presses buttons</text>
</g>
<!-- jt&#45;&gt;scan -->
<g id="edge11" class="edge">
<title>jt&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1380.66,-1697.29C1502.11,-1598.01 1697.13,-1438.59 1821.87,-1336.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1823.49,-1338.68 1827.64,-1331.91 1820.17,-1334.62 1823.49,-1338.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1559.65,-1594.46 1559.65,-1617.26 1638.81,-1617.26 1638.81,-1594.46 1559.65,-1594.46"/>
<text xml:space="preserve" text-anchor="start" x="1562.65" y="-1600.26" font-family="Arial" font-size="14.00" fill="#c9c9c9">loads paper</text>
</g>
<!-- jt&#45;&gt;assistants -->
<g id="edge10" class="edge">
<title>jt&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1441.13,-1849.13C1461.37,-1856.27 1481.76,-1863.37 1501.29,-1870 1590.05,-1900.14 1689.54,-1932.03 1771.31,-1957.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1770.36,-1960.21 1778.3,-1959.95 1771.94,-1955.2 1770.36,-1960.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1581.84,-1933.05 1581.84,-1955.85 1616.63,-1955.85 1616.63,-1933.05 1581.84,-1933.05"/>
<text xml:space="preserve" text-anchor="start" x="1584.84" y="-1938.85" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;capture -->
<g id="edge12" class="edge">
<title>jt&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1440.89,-1795C1613.41,-1803.83 1888.1,-1819.81 2124.97,-1842.2 2203.46,-1849.62 2290.17,-1860.11 2363.37,-1869.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2362.83,-1872.2 2370.61,-1870.57 2363.51,-1867 2362.83,-1872.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1887.88,-1842.2 1887.88,-1865 1994.27,-1865 1994.27,-1842.2 1887.88,-1842.2"/>
<text xml:space="preserve" text-anchor="start" x="1890.88" y="-1848" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
<!-- assistants&#45;&gt;triage -->
<g id="edge15" class="edge">
<title>assistants&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2085.73,-1920.18C2099.18,-1910.92 2112.45,-1901.44 2124.97,-1892 2168.05,-1859.51 2826.2,-1297.17 2855.72,-1252 2857.87,-1248.72 2986.61,-839.84 3047.61,-645.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3050.07,-646.82 3049.82,-638.88 3045.06,-645.24 3050.07,-646.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2516.98,-1721.67 2516.98,-1744.47 2550.21,-1744.47 2550.21,-1721.67 2516.98,-1721.67"/>
<text xml:space="preserve" text-anchor="start" x="2519.98" y="-1727.47" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- assistants&#45;&gt;memory -->
<g id="edge16" class="edge">
<title>assistants&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2101.19,-2044.74C2375.51,-2094.35 2937.5,-2149.1 3244.31,-1848 3505.43,-1591.74 3587.79,-1138.26 3612.19,-937.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3614.77,-937.53 3613.05,-929.78 3609.56,-936.91 3614.77,-937.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2764.14,-2065.31 2764.14,-2088.11 2855.72,-2088.11 2855.72,-2065.31 2764.14,-2065.31"/>
<text xml:space="preserve" text-anchor="start" x="2767.14" y="-2071.11" font-family="Arial" font-size="14.00" fill="#c9c9c9">remembers in</text>
</g>
<!-- assistants&#45;&gt;capture -->
<g id="edge14" class="edge">
<title>assistants&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2101.1,-1978.49C2182.26,-1962.41 2281.01,-1942.85 2363.56,-1926.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2363.98,-1929.08 2370.83,-1925.05 2362.96,-1923.93 2363.98,-1929.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2227.39,-1958.51 2227.39,-1981.31 2260.62,-1981.31 2260.62,-1958.51 2227.39,-1958.51"/>
<text xml:space="preserve" text-anchor="start" x="2230.39" y="-1964.31" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- capture&#45;&gt;ingest -->
<g id="edge19" class="edge">
<title>capture&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2390.55,-1803.03C2363.72,-1779.38 2339.09,-1751.52 2323.05,-1720 2189.47,-1457.62 2225.55,-1346.87 2285.44,-1058.6 2317.31,-905.19 2404.81,-745.29 2466.86,-645.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2469.04,-647.18 2470.8,-639.43 2464.59,-644.4 2469.04,-647.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2230.51,-1058.6 2230.51,-1081.4 2257.5,-1081.4 2257.5,-1058.6 2230.51,-1058.6"/>
<text xml:space="preserve" text-anchor="start" x="2233.51" y="-1066.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- capture&#45;&gt;triage -->
<g id="edge20" class="edge">
<title>capture&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2693.55,-1844.49C2752.92,-1818.69 2815.6,-1780.85 2855.72,-1727 2983.75,-1555.14 3050.08,-898.77 3071.3,-646.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3073.9,-646.46 3071.91,-638.77 3068.67,-646.02 3073.9,-646.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2779.31,-1804.68 2779.31,-1827.48 2840.56,-1827.48 2840.56,-1804.68 2779.31,-1804.68"/>
<text xml:space="preserve" text-anchor="start" x="2782.31" y="-1810.48" font-family="Arial" font-size="14.00" fill="#c9c9c9">swept by</text>
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
<svg width="2032pt" height="942pt"
 viewBox="0.00 0.00 2032.00 942.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 927.05)">
<g id="clust1" class="cluster">
<title>cluster_fieldagent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-627 8,-892 431.46,-892 431.46,-627 8,-627"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-879.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FIELD AGENT</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_assistants</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="621.65,-329 621.65,-900 1514.05,-900 1514.05,-329 621.65,-329"/>
<text xml:space="preserve" text-anchor="start" x="629.65" y="-887.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AI ASSISTANTS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_capture</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1122.01,-8 1122.01,-273 1506.05,-273 1506.05,-8 1122.01,-8"/>
<text xml:space="preserve" text-anchor="start" x="1130.01" y="-260.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CAPTURE</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1555.05,-310 1555.05,-904 1993.67,-904 1993.67,-310 1555.05,-310"/>
<text xml:space="preserve" text-anchor="start" x="1563.05" y="-891.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- relay -->
<g id="node1" class="node">
<title>relay</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="399.46,-839 40,-839 40,-659 399.46,-659 399.46,-839"/>
<text xml:space="preserve" text-anchor="start" x="168.59" y="-770.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home base</text>
<text xml:space="preserve" text-anchor="start" x="147.83" y="-749.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node service on the Mac</text>
<text xml:space="preserve" text-anchor="start" x="60.06" y="-728.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Passes each phone message to Claude or Grok</text>
<text xml:space="preserve" text-anchor="start" x="119.68" y="-710.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">and streams the answer back.</text>
</g>
<!-- claude -->
<g id="node2" class="node">
<title>claude</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="983.46,-549 663.42,-549 663.42,-369 983.46,-369 983.46,-549"/>
<text xml:space="preserve" text-anchor="start" x="765.06" y="-480.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Claude Code</text>
<text xml:space="preserve" text-anchor="start" x="739.98" y="-459.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="706.29" y="-438.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Main assistant. Builds and fixes the</text>
<text xml:space="preserve" text-anchor="start" x="737.16" y="-420.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">machinery, runs the skills.</text>
</g>
<!-- grok -->
<g id="node3" class="node">
<title>grok</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="985.22,-839 661.65,-839 661.65,-659 985.22,-659 985.22,-839"/>
<text xml:space="preserve" text-anchor="start" x="801.77" y="-770.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Grok</text>
<text xml:space="preserve" text-anchor="start" x="739.98" y="-749.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="681.71" y="-728.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Second assistant. Same vault, same skills,</text>
<text xml:space="preserve" text-anchor="start" x="784.67" y="-710.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">same rules.</text>
</g>
<!-- skills -->
<g id="node4" class="node">
<title>skills</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1474.05,-736.64C1474.05,-745.67 1402.33,-753 1314.03,-753 1225.74,-753 1154.01,-745.67 1154.01,-736.64 1154.01,-736.64 1154.01,-589.36 1154.01,-589.36 1154.01,-580.33 1225.74,-573 1314.03,-573 1402.33,-573 1474.05,-580.33 1474.05,-589.36 1474.05,-589.36 1474.05,-736.64 1474.05,-736.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1474.05,-736.64C1474.05,-727.61 1402.33,-720.27 1314.03,-720.27 1225.74,-720.27 1154.01,-727.61 1154.01,-736.64"/>
<text xml:space="preserve" text-anchor="start" x="1257.35" y="-684.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Shared skills</text>
<text xml:space="preserve" text-anchor="start" x="1275.39" y="-663.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">System/Skills</text>
<text xml:space="preserve" text-anchor="start" x="1175.22" y="-642.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Written procedures both assistants follow:</text>
<text xml:space="preserve" text-anchor="start" x="1221.08" y="-624.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">triage, distill, lint, plain style.</text>
</g>
<!-- distill -->
<g id="node5" class="node">
<title>distill</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1474.05,-220 1154.01,-220 1154.01,-40 1474.05,-40 1474.05,-220"/>
<text xml:space="preserve" text-anchor="start" x="1267.91" y="-151.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Chat distill</text>
<text xml:space="preserve" text-anchor="start" x="1262.75" y="-130.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">session&#45;distill skill</text>
<text xml:space="preserve" text-anchor="start" x="1189.8" y="-109.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Boils a finished AI chat down to a few</text>
<text xml:space="preserve" text-anchor="start" x="1197.7" y="-91.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">lasting notes, then the chat can go.</text>
</g>
<!-- triage -->
<g id="node6" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1938.66,-530 1610.07,-530 1610.07,-350 1938.66,-350 1938.66,-530"/>
<text xml:space="preserve" text-anchor="start" x="1723.78" y="-461.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault triage</text>
<text xml:space="preserve" text-anchor="start" x="1717.65" y="-440.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok skill</text>
<text xml:space="preserve" text-anchor="start" x="1630.12" y="-419.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="1740.17" y="-401.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- memory -->
<g id="node7" class="node">
<title>memory</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1953.67,-826.64C1953.67,-835.67 1873.3,-843 1774.36,-843 1675.42,-843 1595.05,-835.67 1595.05,-826.64 1595.05,-826.64 1595.05,-679.36 1595.05,-679.36 1595.05,-670.33 1675.42,-663 1774.36,-663 1873.3,-663 1953.67,-670.33 1953.67,-679.36 1953.67,-679.36 1953.67,-826.64 1953.67,-826.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1953.67,-826.64C1953.67,-817.61 1873.3,-810.27 1774.36,-810.27 1675.42,-810.27 1595.05,-817.61 1595.05,-826.64"/>
<text xml:space="preserve" text-anchor="start" x="1702.13" y="-765" font-family="Arial" font-size="20.00" fill="#eef2ff">System memory</text>
<text xml:space="preserve" text-anchor="start" x="1615.11" y="-742" font-family="Arial" font-size="15.00" fill="#c7d2fe">What the assistants need to remember between</text>
<text xml:space="preserve" text-anchor="start" x="1743.1" y="-724" font-family="Arial" font-size="15.00" fill="#c7d2fe">sessions.</text>
</g>
<!-- iphone -->
<g id="node8" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="381.12,-549 58.35,-549 58.35,-369 381.12,-369 381.12,-549"/>
<text xml:space="preserve" text-anchor="start" x="188.59" y="-462" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="78.4" y="-439" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders, the Field Agent app.</text>
</g>
<!-- jt -->
<g id="node9" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="391.11,-236 48.35,-236 48.35,-56 391.11,-56 391.11,-236"/>
<text xml:space="preserve" text-anchor="start" x="208.62" y="-158" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="68.41" y="-135" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="193.05" y="-117" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- relay&#45;&gt;claude -->
<g id="edge4" class="edge">
<title>relay&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M399.23,-662.97C479.96,-624.06 574.87,-578.32 654.33,-540.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="655.1,-542.56 660.72,-536.94 652.82,-537.83 655.1,-542.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="459.46,-629.97 459.46,-652.77 601.65,-652.77 601.65,-629.97 459.46,-629.97"/>
<text xml:space="preserve" text-anchor="start" x="462.46" y="-635.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- relay&#45;&gt;grok -->
<g id="edge5" class="edge">
<title>relay&#45;&gt;grok</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M399.23,-749C478.89,-749 572.35,-749 651.16,-749"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="651.15,-751.63 658.65,-749 651.15,-746.38 651.15,-751.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="459.46,-749 459.46,-771.8 601.65,-771.8 601.65,-749 459.46,-749"/>
<text xml:space="preserve" text-anchor="start" x="462.46" y="-754.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- claude&#45;&gt;skills -->
<g id="edge6" class="edge">
<title>claude&#45;&gt;skills</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M983.41,-525.37C1034.68,-546.78 1091.68,-570.58 1143.67,-592.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1142.59,-594.68 1150.52,-595.15 1144.61,-589.84 1142.59,-594.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1045.22,-567.12 1045.22,-589.92 1094.01,-589.92 1094.01,-567.12 1045.22,-567.12"/>
<text xml:space="preserve" text-anchor="start" x="1048.22" y="-572.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">follows</text>
</g>
<!-- claude&#45;&gt;distill -->
<g id="edge7" class="edge">
<title>claude&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M957.95,-369.1C1024.06,-324.58 1103.91,-270.81 1171.13,-225.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1172.42,-227.85 1177.17,-221.48 1169.49,-223.49 1172.42,-227.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1053,-304.36 1053,-327.16 1086.24,-327.16 1086.24,-304.36 1053,-304.36"/>
<text xml:space="preserve" text-anchor="start" x="1056" y="-310.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- claude&#45;&gt;triage -->
<g id="edge8" class="edge">
<title>claude&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M983.27,-455.82C1153.85,-452.4 1424.04,-446.99 1600.03,-443.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1599.96,-446.1 1607.41,-443.32 1599.86,-440.85 1599.96,-446.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1297.42,-452.91 1297.42,-475.71 1330.65,-475.71 1330.65,-452.91 1297.42,-452.91"/>
<text xml:space="preserve" text-anchor="start" x="1300.42" y="-458.71" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- grok&#45;&gt;skills -->
<g id="edge9" class="edge">
<title>grok&#45;&gt;skills</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M985.1,-720.72C1035.69,-711.82 1091.71,-701.96 1142.93,-692.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1143.2,-695.56 1150.13,-691.67 1142.29,-690.39 1143.2,-695.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1045.22,-708.58 1045.22,-731.38 1094.01,-731.38 1094.01,-708.58 1045.22,-708.58"/>
<text xml:space="preserve" text-anchor="start" x="1048.22" y="-714.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">follows</text>
</g>
<!-- grok&#45;&gt;triage -->
<g id="edge10" class="edge">
<title>grok&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M985.2,-820.95C1138.37,-877.33 1366.83,-928.11 1514.05,-808 1584.36,-750.64 1506.97,-684.95 1555.05,-608 1571.63,-581.47 1594,-557.53 1618.1,-536.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1619.66,-538.7 1623.68,-531.85 1616.26,-534.7 1619.66,-538.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1297.42,-881.39 1297.42,-904.19 1330.65,-904.19 1330.65,-881.39 1297.42,-881.39"/>
<text xml:space="preserve" text-anchor="start" x="1300.42" y="-887.19" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- skills&#45;&gt;memory -->
<g id="edge11" class="edge">
<title>skills&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1514.05,-702.08C1537.26,-706.64 1560.89,-711.28 1583.96,-715.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1583.3,-718.35 1591.16,-717.22 1584.31,-713.2 1583.3,-718.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1462.41,-687.12 1462.41,-709.92 1553.99,-709.92 1553.99,-687.12 1462.41,-687.12"/>
<text xml:space="preserve" text-anchor="start" x="1465.41" y="-692.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">remembers in</text>
</g>
<!-- triage&#45;&gt;memory -->
<g id="edge12" class="edge">
<title>triage&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1774.36,-529.69C1774.36,-567.83 1774.36,-612.49 1774.36,-651.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1771.74,-651.68 1774.36,-659.18 1776.99,-651.68 1771.74,-651.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1720.38,-585.1 1720.38,-607.9 1799.54,-607.9 1799.54,-585.1 1720.38,-585.1"/>
<text xml:space="preserve" text-anchor="start" x="1723.38" y="-590.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">logs the run</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge1" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M219.73,-369.02C219.73,-330.6 219.73,-285.61 219.73,-246.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="222.36,-246.22 219.73,-238.72 217.11,-246.22 222.36,-246.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="163.42,-291.1 163.42,-313.9 247.24,-313.9 247.24,-291.1 163.42,-291.1"/>
<text xml:space="preserve" text-anchor="start" x="166.42" y="-296.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- jt&#45;&gt;claude -->
<g id="edge2" class="edge">
<title>jt&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M390.74,-234.44C459.64,-270.28 539.9,-312.03 612.4,-349.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="611.11,-352.03 618.97,-353.16 613.53,-347.37 611.11,-352.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="471.63,-271.81 471.63,-294.61 506.42,-294.61 506.42,-271.81 471.63,-271.81"/>
<text xml:space="preserve" text-anchor="start" x="474.63" y="-277.61" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;distill -->
<g id="edge3" class="edge">
<title>jt&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M391.1,-143.5C585.95,-140.65 904.66,-135.98 1111.63,-132.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1111.53,-135.58 1118.99,-132.84 1111.45,-130.33 1111.53,-135.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="650.33,-115.35 650.33,-138.15 756.72,-138.15 756.72,-115.35 650.33,-115.35"/>
<text xml:space="preserve" text-anchor="start" x="653.33" y="-121.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
</g>
</svg>
`;case`fieldAgentView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2553pt" height="997pt"
 viewBox="0.00 0.00 2553.00 997.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 982.05)">
<g id="clust1" class="cluster">
<title>cluster_fieldagent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="436,-587 436,-959 2514.89,-959 2514.89,-587 436,-587"/>
<text xml:space="preserve" text-anchor="start" x="444" y="-946.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FIELD AGENT</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_assistants</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2100.47,-8 2100.47,-579 2504.04,-579 2504.04,-8 2100.47,-8"/>
<text xml:space="preserve" text-anchor="start" x="2108.47" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AI ASSISTANTS</text>
</g>
<!-- app -->
<g id="node1" class="node">
<title>app</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.74,-827 476,-827 476,-647 798.74,-647 798.74,-827"/>
<text xml:space="preserve" text-anchor="start" x="567.32" y="-758.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Field Agent app</text>
<text xml:space="preserve" text-anchor="start" x="589.32" y="-737.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">SwiftUI · iPhone</text>
<text xml:space="preserve" text-anchor="start" x="496.06" y="-716.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Two chats, Claude and Grok. Replies fill in</text>
<text xml:space="preserve" text-anchor="start" x="574.01" y="-698.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">as they are written.</text>
</g>
<!-- tailnet -->
<g id="node2" class="node">
<title>tailnet</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1339.96,-827 1002.56,-827 1002.56,-647 1339.96,-647 1339.96,-827"/>
<text xml:space="preserve" text-anchor="start" x="1102.34" y="-758.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Private network</text>
<text xml:space="preserve" text-anchor="start" x="1145.61" y="-737.8" font-family="Arial" font-size="13.00" fill="#cbd5e1">Tailscale</text>
<text xml:space="preserve" text-anchor="start" x="1026.58" y="-716.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">Links the phone to the Mac without opening</text>
<text xml:space="preserve" text-anchor="start" x="1061.61" y="-698.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">the home network to the internet.</text>
</g>
<!-- relay -->
<g id="node3" class="node">
<title>relay</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1867.43,-827 1507.97,-827 1507.97,-647 1867.43,-647 1867.43,-827"/>
<text xml:space="preserve" text-anchor="start" x="1636.56" y="-758.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home base</text>
<text xml:space="preserve" text-anchor="start" x="1615.8" y="-737.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node service on the Mac</text>
<text xml:space="preserve" text-anchor="start" x="1528.02" y="-716.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Passes each phone message to Claude or Grok</text>
<text xml:space="preserve" text-anchor="start" x="1587.65" y="-698.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">and streams the answer back.</text>
</g>
<!-- approval -->
<g id="node4" class="node">
<title>approval</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2474.89,-827 2129.62,-827 2129.62,-647 2474.89,-647 2474.89,-827"/>
<text xml:space="preserve" text-anchor="start" x="2224.45" y="-758.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Allow / Deny card</text>
<text xml:space="preserve" text-anchor="start" x="2273.7" y="-737.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">in the app</text>
<text xml:space="preserve" text-anchor="start" x="2149.68" y="-716.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Before Claude edits a file or runs a command,</text>
<text xml:space="preserve" text-anchor="start" x="2208.86" y="-698.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">the phone buzzes and asks.</text>
</g>
<!-- claude -->
<g id="node5" class="node">
<title>claude</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2462.28,-228 2142.24,-228 2142.24,-48 2462.28,-48 2462.28,-228"/>
<text xml:space="preserve" text-anchor="start" x="2243.88" y="-159.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Claude Code</text>
<text xml:space="preserve" text-anchor="start" x="2218.8" y="-138.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="2185.11" y="-117.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Main assistant. Builds and fixes the</text>
<text xml:space="preserve" text-anchor="start" x="2215.98" y="-99.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">machinery, runs the skills.</text>
</g>
<!-- grok -->
<g id="node6" class="node">
<title>grok</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2464.04,-518 2140.47,-518 2140.47,-338 2464.04,-338 2464.04,-518"/>
<text xml:space="preserve" text-anchor="start" x="2280.59" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Grok</text>
<text xml:space="preserve" text-anchor="start" x="2218.8" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="2160.53" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Second assistant. Same vault, same skills,</text>
<text xml:space="preserve" text-anchor="start" x="2263.49" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">same rules.</text>
</g>
<!-- iphone -->
<g id="node7" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="322.77,-320 0,-320 0,-140 322.77,-140 322.77,-320"/>
<text xml:space="preserve" text-anchor="start" x="130.25" y="-233" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-210" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders, the Field Agent app.</text>
</g>
<!-- jt -->
<g id="node8" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1859.08,-320 1516.32,-320 1516.32,-140 1859.08,-140 1859.08,-320"/>
<text xml:space="preserve" text-anchor="start" x="1676.59" y="-242" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="1536.38" y="-219" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="1661.01" y="-201" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- app&#45;&gt;tailnet -->
<g id="edge5" class="edge">
<title>app&#45;&gt;tailnet</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M798.68,-737C859.81,-737 929.85,-737 992.51,-737"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="992.38,-739.63 999.88,-737 992.38,-734.38 992.38,-739.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="865.75,-737 865.75,-759.8 935.56,-759.8 935.56,-737 865.75,-737"/>
<text xml:space="preserve" text-anchor="start" x="868.75" y="-742.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">messages</text>
</g>
<!-- tailnet&#45;&gt;relay -->
<g id="edge6" class="edge">
<title>tailnet&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1339.64,-737C1390.23,-737 1446.13,-737 1498.01,-737"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1497.81,-739.63 1505.31,-737 1497.81,-734.38 1497.81,-739.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1399.96,-737 1399.96,-759.8 1447.97,-759.8 1447.97,-737 1399.96,-737"/>
<text xml:space="preserve" text-anchor="start" x="1402.96" y="-742.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">carries</text>
</g>
<!-- relay&#45;&gt;approval -->
<g id="edge7" class="edge">
<title>relay&#45;&gt;approval</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1867.25,-726.38C1887.54,-725.48 1907.93,-724.72 1927.43,-724.2 1990.6,-722.51 2006.45,-722.46 2069.62,-724.2 2085.79,-724.65 2102.59,-725.27 2119.42,-726"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2119.26,-728.62 2126.87,-726.33 2119.5,-723.37 2119.26,-728.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1967.91,-724.2 1967.91,-747 2029.14,-747 2029.14,-724.2 1967.91,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1970.91" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks first</text>
</g>
<!-- relay&#45;&gt;claude -->
<g id="edge8" class="edge">
<title>relay&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1777.24,-647.29C1886,-536.88 2057.69,-361.84 2069.62,-345 2087.41,-319.89 2080.56,-306.47 2100.47,-283 2115.2,-265.64 2132.42,-249.26 2150.47,-234.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2151.77,-236.53 2155.91,-229.74 2148.45,-232.46 2151.77,-236.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1927.43,-493.69 1927.43,-516.49 2069.62,-516.49 2069.62,-493.69 1927.43,-493.69"/>
<text xml:space="preserve" text-anchor="start" x="1930.43" y="-499.49" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- relay&#45;&gt;grok -->
<g id="edge9" class="edge">
<title>relay&#45;&gt;grok</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1867.11,-647C1950.51,-604.93 2049.34,-555.08 2131.61,-513.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2132.32,-516.16 2137.83,-510.44 2129.96,-511.47 2132.32,-516.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1927.43,-610.18 1927.43,-632.98 2069.62,-632.98 2069.62,-610.18 1927.43,-610.18"/>
<text xml:space="preserve" text-anchor="start" x="1930.43" y="-615.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- approval&#45;&gt;relay -->
<g id="edge10" class="edge">
<title>approval&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2129.69,-756.78C2109.47,-758.51 2089.1,-759.99 2069.62,-761 2006.51,-764.26 1990.55,-764.16 1927.43,-761 1911.24,-760.19 1894.45,-759.07 1877.62,-757.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1877.85,-755.14 1870.16,-757.15 1877.43,-760.37 1877.85,-755.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1952.34,-763.41 1952.34,-786.21 2044.71,-786.21 2044.71,-763.41 1952.34,-763.41"/>
<text xml:space="preserve" text-anchor="start" x="1955.34" y="-769.21" font-family="Arial" font-size="14.00" fill="#c9c9c9">Allow or Deny</text>
</g>
<!-- iphone&#45;&gt;app -->
<g id="edge2" class="edge">
<title>iphone&#45;&gt;app</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M246.3,-319.77C330.23,-409.53 458.92,-547.18 545.28,-639.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="543.36,-641.35 550.4,-645.04 547.19,-637.77 543.36,-641.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="382.77,-498.7 382.77,-521.5 416,-521.5 416,-498.7 382.77,-498.7"/>
<text xml:space="preserve" text-anchor="start" x="385.77" y="-504.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge1" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M322.63,-230C608.89,-230 1206.16,-230 1506.33,-230"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1505.91,-232.63 1513.41,-230 1505.91,-227.38 1505.91,-232.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="858.74,-230 858.74,-252.8 942.56,-252.8 942.56,-230 858.74,-230"/>
<text xml:space="preserve" text-anchor="start" x="861.74" y="-235.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- jt&#45;&gt;approval -->
<g id="edge3" class="edge">
<title>jt&#45;&gt;approval</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1858.64,-221.51C1933.84,-227.25 2016.99,-248.32 2069.62,-306.2 2114.68,-355.75 2065.6,-548.82 2100.47,-606 2107.95,-618.27 2117.07,-629.61 2127.25,-640.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2125.11,-641.64 2132.3,-645.02 2128.79,-637.89 2125.11,-641.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1982.29,-306.2 1982.29,-329 2014.76,-329 2014.76,-306.2 1982.29,-306.2"/>
<text xml:space="preserve" text-anchor="start" x="1985.29" y="-312" font-family="Arial" font-size="14.00" fill="#c9c9c9">taps</text>
</g>
<!-- jt&#45;&gt;claude -->
<g id="edge4" class="edge">
<title>jt&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1858.92,-204.43C1930.61,-193.67 2014.78,-181.03 2090.35,-169.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2090.45,-172.31 2097.48,-168.6 2089.68,-167.12 2090.45,-172.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1944.87,-163.5 1944.87,-186.3 1979.66,-186.3 1979.66,-163.5 1944.87,-163.5"/>
<text xml:space="preserve" text-anchor="start" x="1947.87" y="-169.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
</g>
</svg>
`;case`schedulersView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2632pt" height="3367pt"
 viewBox="0.00 0.00 2632.00 3367.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3352.05)">
<g id="clust1" class="cluster">
<title>cluster_pi</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1032.5,-2869 1032.5,-3134 1420.11,-3134 1420.11,-2869 1032.5,-2869"/>
<text xml:space="preserve" text-anchor="start" x="1040.5" y="-3121.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BRAINPI</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="478.04,-2281 478.04,-2852 2037.84,-2852 2037.84,-2281 478.04,-2281"/>
<text xml:space="preserve" text-anchor="start" x="486.04" y="-2839.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_mail</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1615.88,-8 1615.88,-579 2594.24,-579 2594.24,-8 1615.88,-8"/>
<text xml:space="preserve" text-anchor="start" x="1623.88" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMAIL &amp; TEXTS</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1628.17,-1756 1628.17,-2021 2012.21,-2021 2012.21,-1756 1628.17,-1756"/>
<text xml:space="preserve" text-anchor="start" x="1636.17" y="-2008.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCANNER</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_backups</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1619.32,-886 1619.32,-1151 2021.06,-1151 2021.06,-886 1619.32,-886"/>
<text xml:space="preserve" text-anchor="start" x="1627.32" y="-1138.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKUPS</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_printing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1618.39,-1168 1618.39,-1739 2021.98,-1739 2021.98,-1168 1618.39,-1168"/>
<text xml:space="preserve" text-anchor="start" x="1626.39" y="-1726.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">3D PRINTING</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2189.9,-2434 2189.9,-2699 2591.66,-2699 2591.66,-2434 2189.9,-2434"/>
<text xml:space="preserve" text-anchor="start" x="2197.9" y="-2686.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
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
<!-- homeplugin -->
<g id="node4" class="node">
<title>homeplugin</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1386.33,-2791 1066.29,-2791 1066.29,-2611 1386.33,-2611 1386.33,-2791"/>
<text xml:space="preserve" text-anchor="start" x="1138.48" y="-2722.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home Button plugin</text>
<text xml:space="preserve" text-anchor="start" x="1181.87" y="-2701.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="1092.1" y="-2680.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs most timers: every minute, every 5</text>
<text xml:space="preserve" text-anchor="start" x="1139.18" y="-2662.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">minutes, hourly, and daily.</text>
</g>
<!-- calendar -->
<g id="node5" class="node">
<title>calendar</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1997.84,-2791 1642.53,-2791 1642.53,-2611 1997.84,-2611 1997.84,-2791"/>
<text xml:space="preserve" text-anchor="start" x="1750.72" y="-2713.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Calendar mirror</text>
<text xml:space="preserve" text-anchor="start" x="1784.06" y="-2692.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1662.58" y="-2671.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the calendar onto the Home dashboard.</text>
</g>
<!-- health -->
<g id="node6" class="node">
<title>health</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1980.21,-2501 1660.17,-2501 1660.17,-2321 1980.21,-2321 1980.21,-2501"/>
<text xml:space="preserve" text-anchor="start" x="1762.38" y="-2432.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Health check</text>
<text xml:space="preserve" text-anchor="start" x="1788.39" y="-2411.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">daily · free</text>
<text xml:space="preserve" text-anchor="start" x="1682.2" y="-2390.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Looks for broken links, stale projects, and</text>
<text xml:space="preserve" text-anchor="start" x="1683.04" y="-2372.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">quiet machines; writes the Health Report.</text>
</g>
<!-- unread -->
<g id="node7" class="node">
<title>unread</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1980.21,-228 1660.17,-228 1660.17,-48 1980.21,-48 1980.21,-228"/>
<text xml:space="preserve" text-anchor="start" x="1772.39" y="-159.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Unread list</text>
<text xml:space="preserve" text-anchor="start" x="1748.66" y="-138.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="1694.72" y="-117.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads new mail straight from the mail</text>
<text xml:space="preserve" text-anchor="start" x="1793.51" y="-99.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">servers.</text>
</g>
<!-- texts -->
<g id="node8" class="node">
<title>texts</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1984.49,-518 1655.88,-518 1655.88,-338 1984.49,-338 1984.49,-518"/>
<text xml:space="preserve" text-anchor="start" x="1766.86" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Texts mirror</text>
<text xml:space="preserve" text-anchor="start" x="1748.66" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="1675.94" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies new iMessages into the vault. Login</text>
<text xml:space="preserve" text-anchor="start" x="1757.23" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">codes are skipped.</text>
</g>
<!-- mailtriage -->
<g id="node9" class="node">
<title>mailtriage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2554.24,-518 2227.32,-518 2227.32,-338 2554.24,-338 2554.24,-518"/>
<text xml:space="preserve" text-anchor="start" x="2316.31" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mail &amp; text triage</text>
<text xml:space="preserve" text-anchor="start" x="2256" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI · at Obsidian launch and on opening Home,</text>
<text xml:space="preserve" text-anchor="start" x="2247.37" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Archives the noise and lists everything else</text>
<text xml:space="preserve" text-anchor="start" x="2323.65" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">under Needs action.</text>
</g>
<!-- ocr -->
<g id="node10" class="node">
<title>ocr</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1980.21,-1968 1660.17,-1968 1660.17,-1788 1980.21,-1788 1980.21,-1968"/>
<text xml:space="preserve" text-anchor="start" x="1740.43" y="-1908.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Scan sync + OCR</text>
<text xml:space="preserve" text-anchor="start" x="1745.05" y="-1887.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1700.55" y="-1866.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls each raw scan, makes the text</text>
<text xml:space="preserve" text-anchor="start" x="1691.77" y="-1848.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">searchable, deletes the Pi copy once it</text>
<text xml:space="preserve" text-anchor="start" x="1782.25" y="-1830.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">checks out.</text>
</g>
<!-- machine -->
<g id="node11" class="node">
<title>machine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1989.06,-1098 1651.32,-1098 1651.32,-918 1989.06,-918 1989.06,-1098"/>
<text xml:space="preserve" text-anchor="start" x="1739.02" y="-1029.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Machine snapshot</text>
<text xml:space="preserve" text-anchor="start" x="1784.06" y="-1008.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1671.37" y="-987.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the Mac’s setup (scripts, schedules,</text>
<text xml:space="preserve" text-anchor="start" x="1690.95" y="-969.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">settings) into the vault. Secrets left out.</text>
</g>
<!-- printlog -->
<g id="node12" class="node">
<title>printlog</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1981.98,-1388 1658.39,-1388 1658.39,-1208 1981.98,-1208 1981.98,-1388"/>
<text xml:space="preserve" text-anchor="start" x="1783.5" y="-1319.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Print log</text>
<text xml:space="preserve" text-anchor="start" x="1745.05" y="-1298.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1678.44" y="-1277.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Notes each start and finish in the model’s</text>
<text xml:space="preserve" text-anchor="start" x="1695.11" y="-1259.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">folder, the print log, and a notification.</text>
</g>
<!-- publish -->
<g id="node13" class="node">
<title>publish</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1980.21,-1678 1660.17,-1678 1660.17,-1498 1980.21,-1498 1980.21,-1678"/>
<text xml:space="preserve" text-anchor="start" x="1754.04" y="-1609.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gallery publish</text>
<text xml:space="preserve" text-anchor="start" x="1702.77" y="-1588.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min and right after a finish</text>
<text xml:space="preserve" text-anchor="start" x="1688.03" y="-1567.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls the drafted card, fills in the details,</text>
<text xml:space="preserve" text-anchor="start" x="1738.88" y="-1549.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">and pushes it to the site.</text>
</g>
<!-- home -->
<g id="node14" class="node">
<title>home</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2559.66,-2646 2221.9,-2646 2221.9,-2466 2559.66,-2466 2559.66,-2646"/>
<text xml:space="preserve" text-anchor="start" x="2314.07" y="-2568" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home dashboard</text>
<text xml:space="preserve" text-anchor="start" x="2241.95" y="-2545" font-family="Arial" font-size="15.00" fill="#b6ecf7">The front door. Shows today, mail, texts, and</text>
<text xml:space="preserve" text-anchor="start" x="2291.13" y="-2527" font-family="Arial" font-size="15.00" fill="#b6ecf7">what each project needs next.</text>
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
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1989.91,-808 1650.46,-808 1650.46,-628 1989.91,-628 1989.91,-808"/>
<text xml:space="preserve" text-anchor="start" x="1759.04" y="-748.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="1764.55" y="-727.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1698.45" y="-706.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="1670.52" y="-688.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="1814.35" y="-670.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- heartbeat&#45;&gt;health -->
<g id="edge4" class="edge">
<title>heartbeat&#45;&gt;health</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1386.26,-2901.09C1397.83,-2893.81 1409.23,-2886.4 1420.11,-2879 1496.13,-2827.34 1535.56,-2830 1582.53,-2751 1627.46,-2675.42 1569.15,-2630.48 1615.88,-2556 1626.97,-2538.33 1641.07,-2522.17 1656.67,-2507.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1658.39,-2509.57 1662.19,-2502.59 1654.87,-2505.68 1658.39,-2509.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1448.11,-2860.13 1448.11,-2882.93 1582.53,-2882.93 1582.53,-2860.13 1448.11,-2860.13"/>
<text xml:space="preserve" text-anchor="start" x="1451.11" y="-2865.93" font-family="Arial" font-size="14.00" fill="#c9c9c9">disk and drive health</text>
</g>
<!-- chiprelay&#45;&gt;homeplugin -->
<g id="edge5" class="edge">
<title>chiprelay&#45;&gt;homeplugin</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M837.79,-2701C906.4,-2701 986.75,-2701 1056.45,-2701"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1056.13,-2703.63 1063.63,-2701 1056.13,-2698.38 1056.13,-2703.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="898.08,-2701 898.08,-2723.8 1004.5,-2723.8 1004.5,-2701 898.08,-2701"/>
<text xml:space="preserve" text-anchor="start" x="901.08" y="-2706.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queues a button</text>
</g>
<!-- launchd&#45;&gt;unread -->
<g id="edge6" class="edge">
<title>launchd&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M712.97,-2321.19C814.97,-2053.26 1131.47,-1237.76 1448.11,-586 1515.38,-447.54 1513.4,-397.86 1615.88,-283 1631.28,-265.73 1649.1,-249.36 1667.66,-234.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1669.07,-236.5 1673.29,-229.77 1665.79,-232.4 1669.07,-236.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1187.13,-1517.97 1187.13,-1540.77 1265.49,-1540.77 1265.49,-1517.97 1187.13,-1517.97"/>
<text xml:space="preserve" text-anchor="start" x="1190.13" y="-1523.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- homeplugin&#45;&gt;calendar -->
<g id="edge7" class="edge">
<title>homeplugin&#45;&gt;calendar</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1386.31,-2701C1462.16,-2701 1553.41,-2701 1632.53,-2701"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1632.09,-2703.63 1639.59,-2701 1632.09,-2698.38 1632.09,-2703.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1493.26,-2701 1493.26,-2723.8 1537.39,-2723.8 1537.39,-2701 1493.26,-2701"/>
<text xml:space="preserve" text-anchor="start" x="1496.26" y="-2706.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- homeplugin&#45;&gt;health -->
<g id="edge8" class="edge">
<title>homeplugin&#45;&gt;health</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1386.31,-2623.09C1468.16,-2582.99 1567.94,-2534.1 1651.06,-2493.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1652.04,-2495.82 1657.62,-2490.16 1649.73,-2491.11 1652.04,-2495.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1497.92,-2590.5 1497.92,-2613.3 1532.72,-2613.3 1532.72,-2590.5 1497.92,-2590.5"/>
<text xml:space="preserve" text-anchor="start" x="1500.92" y="-2596.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">daily</text>
</g>
<!-- homeplugin&#45;&gt;texts -->
<g id="edge10" class="edge">
<title>homeplugin&#45;&gt;texts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1232.94,-2611.04C1254,-2287.03 1332.88,-1181.32 1448.11,-848.2 1494.94,-712.82 1518.3,-677.87 1615.88,-573 1631.84,-555.85 1650.11,-539.48 1669.02,-524.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1670.52,-526.49 1674.78,-519.78 1667.27,-522.37 1670.52,-526.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1476.14,-848.2 1476.14,-871 1554.5,-871 1554.5,-848.2 1476.14,-848.2"/>
<text xml:space="preserve" text-anchor="start" x="1479.14" y="-854" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- homeplugin&#45;&gt;mailtriage -->
<g id="edge15" class="edge">
<title>homeplugin&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1285.61,-2611.24C1354.54,-2510.8 1477.51,-2348.42 1615.88,-2243.2 1780.36,-2118.12 1908.6,-2209.23 2037.84,-2048 2229.89,-1808.42 2346.29,-842.82 2379.73,-527.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2382.29,-528.59 2380.47,-520.86 2377.07,-528.04 2382.29,-528.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1762.32,-2243.2 1762.32,-2266 1878.05,-2266 1878.05,-2243.2 1762.32,-2243.2"/>
<text xml:space="preserve" text-anchor="start" x="1765.32" y="-2249" font-family="Arial" font-size="14.00" fill="#c9c9c9">launch and Home</text>
</g>
<!-- homeplugin&#45;&gt;ocr -->
<g id="edge11" class="edge">
<title>homeplugin&#45;&gt;ocr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1238.95,-2611.11C1259.93,-2480.95 1315.02,-2238.54 1448.11,-2082.2 1501.83,-2019.1 1580.16,-1971.99 1651.02,-1939.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1652.04,-1941.43 1657.77,-1935.92 1649.85,-1936.66 1652.04,-1941.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1472.25,-2082.2 1472.25,-2105 1558.39,-2105 1558.39,-2082.2 1472.25,-2082.2"/>
<text xml:space="preserve" text-anchor="start" x="1475.25" y="-2088" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- homeplugin&#45;&gt;machine -->
<g id="edge12" class="edge">
<title>homeplugin&#45;&gt;machine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1232.24,-2611.05C1246.1,-2399.6 1295,-1856.85 1448.11,-1433.2 1499.01,-1292.37 1513.11,-1249.92 1615.88,-1141 1628.09,-1128.06 1641.8,-1115.77 1656.18,-1104.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1657.56,-1106.52 1661.85,-1099.83 1654.32,-1102.39 1657.56,-1106.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1493.26,-1433.2 1493.26,-1456 1537.39,-1456 1537.39,-1433.2 1493.26,-1433.2"/>
<text xml:space="preserve" text-anchor="start" x="1496.26" y="-1439" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- homeplugin&#45;&gt;printlog -->
<g id="edge13" class="edge">
<title>homeplugin&#45;&gt;printlog</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1237.39,-2611.11C1259.38,-2434.31 1320.25,-2031.16 1448.11,-1716.2 1501.71,-1584.18 1518.65,-1547.16 1615.88,-1443 1631.86,-1425.88 1650.16,-1409.52 1669.07,-1394.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1670.57,-1396.54 1674.83,-1389.83 1667.32,-1392.41 1670.57,-1396.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1472.25,-1716.2 1472.25,-1739 1558.39,-1739 1558.39,-1716.2 1472.25,-1716.2"/>
<text xml:space="preserve" text-anchor="start" x="1475.25" y="-1722" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- homeplugin&#45;&gt;publish -->
<g id="edge14" class="edge">
<title>homeplugin&#45;&gt;publish</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1240.05,-2611.1C1263.97,-2461.5 1324.74,-2155.19 1448.11,-1925.2 1500.53,-1827.49 1592.65,-1743.54 1671.99,-1683.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1673.25,-1686.17 1677.69,-1679.58 1670.11,-1681.96 1673.25,-1686.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1476.14,-1925.2 1476.14,-1948 1554.5,-1948 1554.5,-1925.2 1476.14,-1925.2"/>
<text xml:space="preserve" text-anchor="start" x="1479.14" y="-1931" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- homeplugin&#45;&gt;docs -->
<g id="edge9" class="edge">
<title>homeplugin&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1227.05,-2611.38C1229.01,-2366.12 1252.67,-1666.3 1448.11,-1128.2 1496.24,-995.69 1518.67,-961.1 1615.88,-859 1630.84,-843.29 1647.81,-828.28 1665.42,-814.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1666.86,-816.53 1671.16,-809.84 1663.64,-812.39 1666.86,-816.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1493.26,-1128.2 1493.26,-1151 1537.39,-1151 1537.39,-1128.2 1493.26,-1128.2"/>
<text xml:space="preserve" text-anchor="start" x="1496.26" y="-1134" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- calendar&#45;&gt;home -->
<g id="edge16" class="edge">
<title>calendar&#45;&gt;home</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1997.59,-2656.02C2065.81,-2638.62 2143.76,-2618.74 2212.1,-2601.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2212.56,-2603.9 2219.17,-2599.51 2211.26,-2598.82 2212.56,-2603.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2057.84,-2637.18 2057.84,-2659.98 2161.9,-2659.98 2161.9,-2637.18 2057.84,-2637.18"/>
<text xml:space="preserve" text-anchor="start" x="2060.84" y="-2642.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">today’s events</text>
</g>
<!-- health&#45;&gt;home -->
<g id="edge17" class="edge">
<title>health&#45;&gt;home</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1979.95,-2451.49C2052.11,-2469.89 2137.78,-2491.74 2212.09,-2510.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2211.18,-2513.16 2219.1,-2512.47 2212.48,-2508.08 2211.18,-2513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2063.68,-2496.49 2063.68,-2519.29 2156.06,-2519.29 2156.06,-2496.49 2063.68,-2496.49"/>
<text xml:space="preserve" text-anchor="start" x="2066.68" y="-2502.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">Health Report</text>
</g>
<!-- unread&#45;&gt;mailtriage -->
<g id="edge18" class="edge">
<title>unread&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1979.95,-218.97C2054.15,-256.82 2142.62,-301.94 2218.34,-340.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2216.94,-342.79 2224.81,-343.86 2219.32,-338.11 2216.94,-342.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2079.25,-308.97 2079.25,-331.77 2140.49,-331.77 2140.49,-308.97 2079.25,-308.97"/>
<text xml:space="preserve" text-anchor="start" x="2082.25" y="-314.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- texts&#45;&gt;mailtriage -->
<g id="edge19" class="edge">
<title>texts&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1984.12,-428C2057.15,-428 2143.33,-428 2217.43,-428"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2217.28,-430.63 2224.78,-428 2217.28,-425.38 2217.28,-430.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2077.3,-428 2077.3,-450.8 2142.44,-450.8 2142.44,-428 2077.3,-428"/>
<text xml:space="preserve" text-anchor="start" x="2080.3" y="-433.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">new texts</text>
</g>
<!-- appleapps&#45;&gt;calendar -->
<g id="edge2" class="edge">
<title>appleapps&#45;&gt;calendar</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M321.38,-3273.31C570.29,-3306.63 1060.64,-3340.1 1420.11,-3161 1578.59,-3082.04 1700.5,-2909.54 1765.87,-2799.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1767.96,-2801.28 1769.52,-2793.49 1763.44,-2798.61 1767.96,-2801.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="927.67,-3292.07 927.67,-3314.87 974.92,-3314.87 974.92,-3292.07 927.67,-3292.07"/>
<text xml:space="preserve" text-anchor="start" x="930.67" y="-3297.87" font-family="Arial" font-size="14.00" fill="#c9c9c9">events</text>
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
<svg width="2697pt" height="1720pt"
 viewBox="0.00 0.00 2697.00 1720.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1705.05)">
<g id="clust1" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-1111 8,-1682 408.04,-1682 408.04,-1111 8,-1111"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1669.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_mail</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="526.4,-821 526.4,-1392 2659.29,-1392 2659.29,-821 526.4,-821"/>
<text xml:space="preserve" text-anchor="start" x="534.4" y="-1379.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMAIL &amp; TEXTS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2267.25,-548 2267.25,-813 2651.29,-813 2651.29,-548 2267.25,-548"/>
<text xml:space="preserve" text-anchor="start" x="2275.25" y="-800.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- launchd -->
<g id="node1" class="node">
<title>launchd</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.04,-1331 48,-1331 48,-1151 368.04,-1151 368.04,-1331"/>
<text xml:space="preserve" text-anchor="start" x="101.29" y="-1262.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mac background agents</text>
<text xml:space="preserve" text-anchor="start" x="153.09" y="-1241.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">launchd · 2 agents</text>
<text xml:space="preserve" text-anchor="start" x="76.28" y="-1220.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The unread mail list, and a doorbell that</text>
<text xml:space="preserve" text-anchor="start" x="80.03" y="-1202.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">wakes Obsidian when the phone asks.</text>
</g>
<!-- homeplugin -->
<g id="node2" class="node">
<title>homeplugin</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.04,-1621 48,-1621 48,-1441 368.04,-1441 368.04,-1621"/>
<text xml:space="preserve" text-anchor="start" x="120.19" y="-1552.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home Button plugin</text>
<text xml:space="preserve" text-anchor="start" x="163.58" y="-1531.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="73.81" y="-1510.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs most timers: every minute, every 5</text>
<text xml:space="preserve" text-anchor="start" x="120.89" y="-1492.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">minutes, hourly, and daily.</text>
</g>
<!-- unread -->
<g id="node3" class="node">
<title>unread</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="890.72,-1041 570.68,-1041 570.68,-861 890.72,-861 890.72,-1041"/>
<text xml:space="preserve" text-anchor="start" x="682.91" y="-972.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Unread list</text>
<text xml:space="preserve" text-anchor="start" x="659.18" y="-951.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="605.24" y="-930.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads new mail straight from the mail</text>
<text xml:space="preserve" text-anchor="start" x="704.03" y="-912.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">servers.</text>
</g>
<!-- texts -->
<g id="node4" class="node">
<title>texts</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="895.01,-1331 566.4,-1331 566.4,-1151 895.01,-1151 895.01,-1331"/>
<text xml:space="preserve" text-anchor="start" x="677.37" y="-1262.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Texts mirror</text>
<text xml:space="preserve" text-anchor="start" x="659.18" y="-1241.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="586.45" y="-1220.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies new iMessages into the vault. Login</text>
<text xml:space="preserve" text-anchor="start" x="667.75" y="-1202.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">codes are skipped.</text>
</g>
<!-- mailtriage -->
<g id="node5" class="node">
<title>mailtriage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1407.08,-1061 1080.15,-1061 1080.15,-881 1407.08,-881 1407.08,-1061"/>
<text xml:space="preserve" text-anchor="start" x="1169.14" y="-992.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mail &amp; text triage</text>
<text xml:space="preserve" text-anchor="start" x="1108.83" y="-971.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI · at Obsidian launch and on opening Home,</text>
<text xml:space="preserve" text-anchor="start" x="1100.21" y="-950.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Archives the noise and lists everything else</text>
<text xml:space="preserve" text-anchor="start" x="1176.49" y="-932.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">under Needs action.</text>
</g>
<!-- fold -->
<g id="node6" class="node">
<title>fold</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1972,-1061 1645.93,-1061 1645.93,-881 1972,-881 1972,-1061"/>
<text xml:space="preserve" text-anchor="start" x="1735.6" y="-1001.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Needs action list</text>
<text xml:space="preserve" text-anchor="start" x="1759.1" y="-980.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Home dashboard</text>
<text xml:space="preserve" text-anchor="start" x="1665.99" y="-959.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">One list per inbox. Every row has the same</text>
<text xml:space="preserve" text-anchor="start" x="1670.96" y="-941.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">buttons: open, archive, delete, triage, add</text>
<text xml:space="preserve" text-anchor="start" x="1738.51" y="-923.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">to calendar, respond.</text>
</g>
<!-- mailarchive -->
<g id="node7" class="node">
<title>mailarchive</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2619.29,-1044.64C2619.29,-1053.67 2547.57,-1061 2459.27,-1061 2370.97,-1061 2299.25,-1053.67 2299.25,-1044.64 2299.25,-1044.64 2299.25,-897.36 2299.25,-897.36 2299.25,-888.33 2370.97,-881 2459.27,-881 2547.57,-881 2619.29,-888.33 2619.29,-897.36 2619.29,-897.36 2619.29,-1044.64 2619.29,-1044.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2619.29,-1044.64C2619.29,-1035.61 2547.57,-1028.27 2459.27,-1028.27 2370.97,-1028.27 2299.25,-1035.61 2299.25,-1044.64"/>
<text xml:space="preserve" text-anchor="start" x="2405.92" y="-992.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Mail archive</text>
<text xml:space="preserve" text-anchor="start" x="2389.55" y="-971.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">Documents/mail&#45;archive</text>
<text xml:space="preserve" text-anchor="start" x="2321.29" y="-950.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">The raw copy of every thread JT chose to</text>
<text xml:space="preserve" text-anchor="start" x="2440.92" y="-932.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">keep.</text>
</g>
<!-- ingest -->
<g id="node8" class="node">
<title>ingest</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2619.29,-743.64C2619.29,-752.67 2547.57,-760 2459.27,-760 2370.97,-760 2299.25,-752.67 2299.25,-743.64 2299.25,-743.64 2299.25,-596.36 2299.25,-596.36 2299.25,-587.33 2370.97,-580 2459.27,-580 2547.57,-580 2619.29,-587.33 2619.29,-596.36 2619.29,-596.36 2619.29,-743.64 2619.29,-743.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2619.29,-743.64C2619.29,-734.61 2547.57,-727.27 2459.27,-727.27 2370.97,-727.27 2299.25,-734.61 2299.25,-743.64"/>
<text xml:space="preserve" text-anchor="start" x="2423.69" y="-673" font-family="Arial" font-size="20.00" fill="#eef2ff">0 Ingest</text>
<text xml:space="preserve" text-anchor="start" x="2319.63" y="-650" font-family="Arial" font-size="15.00" fill="#c7d2fe">The in&#45;tray. Every capture lands here first.</text>
</g>
<!-- jt -->
<g id="node9" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2630.65,-470 2287.89,-470 2287.89,-290 2630.65,-290 2630.65,-470"/>
<text xml:space="preserve" text-anchor="start" x="2448.16" y="-392" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="2307.95" y="-369" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="2432.58" y="-351" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- gmail -->
<g id="node10" class="node">
<title>gmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2619.29,-180 2299.25,-180 2299.25,0 2619.29,0 2619.29,-180"/>
<text xml:space="preserve" text-anchor="start" x="2433.16" y="-93" font-family="Arial" font-size="20.00" fill="#f8fafc">Gmail</text>
<text xml:space="preserve" text-anchor="start" x="2413" y="-70" font-family="Arial" font-size="15.00" fill="#cbd5e1">Main mailbox.</text>
</g>
<!-- icloudmail -->
<g id="node11" class="node">
<title>icloudmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="368.04,-1041 48,-1041 48,-861 368.04,-861 368.04,-1041"/>
<text xml:space="preserve" text-anchor="start" x="158.56" y="-954" font-family="Arial" font-size="20.00" fill="#f8fafc">iCloud Mail</text>
<text xml:space="preserve" text-anchor="start" x="152.57" y="-931" font-family="Arial" font-size="15.00" fill="#cbd5e1">Second mailbox.</text>
</g>
<!-- launchd&#45;&gt;unread -->
<g id="edge4" class="edge">
<title>launchd&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.72,-1152.61C429.16,-1118.39 499.56,-1079.18 561.85,-1044.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="563.05,-1046.82 568.33,-1040.88 560.5,-1042.24 563.05,-1046.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="428.04,-1113.36 428.04,-1136.16 506.4,-1136.16 506.4,-1113.36 428.04,-1113.36"/>
<text xml:space="preserve" text-anchor="start" x="431.04" y="-1119.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- homeplugin&#45;&gt;texts -->
<g id="edge5" class="edge">
<title>homeplugin&#45;&gt;texts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.72,-1442.61C428.3,-1408.87 497.6,-1370.27 559.24,-1335.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="560.36,-1338.32 565.63,-1332.38 557.8,-1333.74 560.36,-1338.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="428.04,-1403.36 428.04,-1426.16 506.4,-1426.16 506.4,-1403.36 428.04,-1403.36"/>
<text xml:space="preserve" text-anchor="start" x="431.04" y="-1409.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- homeplugin&#45;&gt;mailtriage -->
<g id="edge6" class="edge">
<title>homeplugin&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.81,-1526.6C514.16,-1516.08 732.62,-1483.55 895.01,-1386 1023.92,-1308.57 1127.48,-1165.81 1187.02,-1069.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1189.19,-1071.11 1190.88,-1063.34 1184.72,-1068.36 1189.19,-1071.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="672.84,-1508 672.84,-1530.8 788.57,-1530.8 788.57,-1508 672.84,-1508"/>
<text xml:space="preserve" text-anchor="start" x="675.84" y="-1513.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">launch and Home</text>
</g>
<!-- unread&#45;&gt;mailtriage -->
<g id="edge7" class="edge">
<title>unread&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M890.56,-957.22C947.48,-959.45 1011.91,-961.97 1069.95,-964.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1069.71,-966.86 1077.31,-964.53 1069.92,-961.61 1069.71,-966.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="956.96,-962.2 956.96,-985 1018.2,-985 1018.2,-962.2 956.96,-962.2"/>
<text xml:space="preserve" text-anchor="start" x="959.96" y="-968" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- texts&#45;&gt;mailtriage -->
<g id="edge8" class="edge">
<title>texts&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M894.76,-1154.83C951.04,-1125.09 1014.22,-1091.7 1071.15,-1061.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1072.15,-1064.06 1077.55,-1058.23 1069.69,-1059.41 1072.15,-1064.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="955.01,-1122.17 955.01,-1144.97 1020.15,-1144.97 1020.15,-1122.17 955.01,-1122.17"/>
<text xml:space="preserve" text-anchor="start" x="958.01" y="-1127.97" font-family="Arial" font-size="14.00" fill="#c9c9c9">new texts</text>
</g>
<!-- mailtriage&#45;&gt;fold -->
<g id="edge9" class="edge">
<title>mailtriage&#45;&gt;fold</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1406.8,-971C1478.52,-971 1562.91,-971 1635.75,-971"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1635.42,-973.63 1642.92,-971 1635.42,-968.38 1635.42,-973.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1467.08,-971 1467.08,-993.8 1585.93,-993.8 1585.93,-971 1467.08,-971"/>
<text xml:space="preserve" text-anchor="start" x="1470.08" y="-976.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- fold&#45;&gt;mailarchive -->
<g id="edge12" class="edge">
<title>fold&#45;&gt;mailarchive</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1971.89,-971C2068.24,-971 2190.36,-971 2288.13,-971"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2287.88,-973.63 2295.38,-971 2287.88,-968.38 2287.88,-973.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2056.13,-971 2056.13,-993.8 2203.76,-993.8 2203.76,-971 2056.13,-971"/>
<text xml:space="preserve" text-anchor="start" x="2059.13" y="-976.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: raw copy</text>
</g>
<!-- fold&#45;&gt;ingest -->
<g id="edge13" class="edge">
<title>fold&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1971.89,-895.82C2068.53,-850.95 2191.1,-794.04 2289.02,-748.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2289.97,-751.03 2295.67,-745.5 2287.76,-746.27 2289.97,-751.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2032,-865.05 2032,-887.85 2227.89,-887.85 2227.89,-865.05 2032,-865.05"/>
<text xml:space="preserve" text-anchor="start" x="2035" y="-870.85" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
<!-- fold&#45;&gt;jt -->
<g id="edge10" class="edge">
<title>fold&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1832.31,-881.04C1861.76,-780.5 1923.05,-619.35 2032,-524.2 2070.26,-490.79 2179.63,-454.11 2278.01,-426.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2278.68,-428.65 2285.19,-424.08 2277.25,-423.6 2278.68,-428.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2070.52,-524.2 2070.52,-547 2189.38,-547 2189.38,-524.2 2070.52,-524.2"/>
<text xml:space="preserve" text-anchor="start" x="2073.52" y="-530" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- fold&#45;&gt;gmail -->
<g id="edge11" class="edge">
<title>fold&#45;&gt;gmail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1827.19,-881.18C1854.04,-759.79 1915.34,-541.31 2032,-391.2 2033.39,-389.42 2197.93,-273.35 2322.15,-185.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2323.55,-188.06 2328.17,-181.59 2320.53,-183.77 2323.55,-188.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2081.42,-391.2 2081.42,-414 2178.48,-414 2178.48,-391.2 2081.42,-391.2"/>
<text xml:space="preserve" text-anchor="start" x="2084.42" y="-397" font-family="Arial" font-size="14.00" fill="#c9c9c9">archive, delete</text>
</g>
<!-- jt&#45;&gt;fold -->
<g id="edge1" class="edge">
<title>jt&#45;&gt;fold</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2326.54,-469.94C2305.93,-486.05 2285.45,-503.35 2267.25,-521 2246.94,-540.69 2247.58,-550.7 2227.89,-571 2148.81,-652.55 2114.62,-657.22 2032,-735.2 1985.71,-778.89 1936.94,-830.05 1896.94,-873.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1895.02,-871.75 1891.88,-879.05 1898.89,-875.3 1895.02,-871.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2077.53,-735.2 2077.53,-758 2182.36,-758 2182.36,-735.2 2077.53,-735.2"/>
<text xml:space="preserve" text-anchor="start" x="2080.53" y="-741" font-family="Arial" font-size="14.00" fill="#c9c9c9">presses buttons</text>
</g>
<!-- gmail&#45;&gt;unread -->
<g id="edge2" class="edge">
<title>gmail&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2299.48,-134.34C2218.12,-159 2118.29,-192.31 2032,-230 1597.98,-419.57 1118.15,-707.78 881.13,-855.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="879.99,-853.47 875.02,-859.67 882.77,-857.92 879.99,-853.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1495.88,-509.79 1495.88,-532.59 1557.13,-532.59 1557.13,-509.79 1495.88,-509.79"/>
<text xml:space="preserve" text-anchor="start" x="1498.88" y="-515.59" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- icloudmail&#45;&gt;unread -->
<g id="edge3" class="edge">
<title>icloudmail&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.78,-940.63C388.05,-939.62 408.53,-938.77 428.04,-938.2 470.97,-936.95 517.32,-937.81 560.5,-939.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="560.2,-942.17 567.8,-939.86 560.42,-936.92 560.2,-942.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="436.6,-938.2 436.6,-961 497.84,-961 497.84,-938.2 436.6,-938.2"/>
<text xml:space="preserve" text-anchor="start" x="439.6" y="-944" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
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
<!-- homeplugin -->
<g id="node1" class="node">
<title>homeplugin</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1437.06,-1030 1117.02,-1030 1117.02,-850 1437.06,-850 1437.06,-1030"/>
<text xml:space="preserve" text-anchor="start" x="1189.21" y="-961.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home Button plugin</text>
<text xml:space="preserve" text-anchor="start" x="1232.6" y="-940.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">inside Obsidian</text>
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
<!-- homeplugin&#45;&gt;ocr -->
<g id="edge2" class="edge">
<title>homeplugin&#45;&gt;ocr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1436.85,-1027.67C1505.59,-1065.61 1586.09,-1110.06 1655.78,-1148.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1654.17,-1150.64 1662.01,-1151.97 1656.71,-1146.04 1654.17,-1150.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1508.42,-1108.52 1508.42,-1131.32 1594.56,-1131.32 1594.56,-1108.52 1508.42,-1108.52"/>
<text xml:space="preserve" text-anchor="start" x="1511.42" y="-1114.32" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- homeplugin&#45;&gt;docs -->
<g id="edge3" class="edge">
<title>homeplugin&#45;&gt;docs</title>
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
<!-- homeplugin -->
<g id="node1" class="node">
<title>homeplugin</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.04,-1062 40,-1062 40,-882 360.04,-882 360.04,-1062"/>
<text xml:space="preserve" text-anchor="start" x="112.19" y="-993.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home Button plugin</text>
<text xml:space="preserve" text-anchor="start" x="155.58" y="-972.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">inside Obsidian</text>
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
<!-- homeplugin&#45;&gt;printlog -->
<g id="edge1" class="edge">
<title>homeplugin&#45;&gt;printlog</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M326.9,-1061.86C384.13,-1097.37 454.45,-1133.96 523.86,-1152 688.86,-1194.89 739.71,-1182.51 907.44,-1152 980.17,-1138.77 1057.02,-1112.57 1122.8,-1086.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1123.66,-1088.51 1129.62,-1083.26 1121.69,-1083.65 1123.66,-1088.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="692.58,-1179.72 692.58,-1202.52 778.72,-1202.52 778.72,-1179.72 692.58,-1179.72"/>
<text xml:space="preserve" text-anchor="start" x="695.58" y="-1185.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- homeplugin&#45;&gt;publish -->
<g id="edge2" class="edge">
<title>homeplugin&#45;&gt;publish</title>
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
<!-- homeplugin -->
<g id="node1" class="node">
<title>homeplugin</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="360.04,-239.82 40,-239.82 40,-59.82 360.04,-59.82 360.04,-239.82"/>
<text xml:space="preserve" text-anchor="start" x="112.19" y="-171.62" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home Button plugin</text>
<text xml:space="preserve" text-anchor="start" x="155.58" y="-150.62" font-family="Arial" font-size="13.00" fill="#b6ecf7">inside Obsidian</text>
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
<!-- homeplugin&#45;&gt;machine -->
<g id="edge1" class="edge">
<title>homeplugin&#45;&gt;machine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M359.76,-163.73C409.04,-168.04 463.68,-172.83 514.17,-177.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="513.83,-179.85 521.53,-177.89 514.29,-174.62 513.83,-179.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.04,-172.61 420.04,-195.41 464.17,-195.41 464.17,-172.61 420.04,-172.61"/>
<text xml:space="preserve" text-anchor="start" x="423.04" y="-178.41" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- homeplugin&#45;&gt;vaultpush -->
<g id="edge2" class="edge">
<title>homeplugin&#45;&gt;vaultpush</title>
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