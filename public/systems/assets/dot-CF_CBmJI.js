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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders.</FONT></TD></TR></TABLE>>,
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
        minlen=1,
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
    jt -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">presses buttons</FONT></TD></TR></TABLE>>,
        likec4_id=qoob6l,
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
    assistants -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1rj2lhz",
        style=dashed];
    assistants -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=nbegqx,
        style=dashed];
    mail -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id="1w0mhfh",
        style=dashed];
    mail -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: note with full text</FONT></TD></TR></TABLE>>,
        likec4_id=o4u72x,
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
    vault -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="1ph5ro4",
        style=dashed];
    vault -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks JT</FONT></TD></TR></TABLE>>,
        likec4_id="1hliz67",
        style=dashed];
    gmail -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id="75n7fx",
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders.</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders.</FONT></TD></TR></TABLE>>,
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">iPhone</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Obsidian, Reminders.</FONT></TD></TR></TABLE>>,
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
<svg width="2651pt" height="2792pt"
 viewBox="0.00 0.00 2651.00 2792.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2777.45)">
<!-- iphone -->
<g id="node1" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1008.04,-2762.4 688,-2762.4 688,-2582.4 1008.04,-2582.4 1008.04,-2762.4"/>
<text xml:space="preserve" text-anchor="start" x="816.88" y="-2675.4" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="775.91" y="-2652.4" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders.</text>
</g>
<!-- jt -->
<g id="node2" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1019.4,-2439.6 676.64,-2439.6 676.64,-2259.6 1019.4,-2259.6 1019.4,-2439.6"/>
<text xml:space="preserve" text-anchor="start" x="836.91" y="-2361.6" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="696.7" y="-2338.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="821.33" y="-2320.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- backups -->
<g id="node3" class="node">
<title>backups</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2437.25,-2762.4 2092.79,-2762.4 2092.79,-2582.4 2437.25,-2582.4 2437.25,-2762.4"/>
<text xml:space="preserve" text-anchor="start" x="2226.67" y="-2694.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Backups</text>
<text xml:space="preserve" text-anchor="start" x="2196.75" y="-2673.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">GitHub · Time Machine</text>
<text xml:space="preserve" text-anchor="start" x="2112.85" y="-2651.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Hourly copy of the vault and machine setup to</text>
<text xml:space="preserve" text-anchor="start" x="2124.96" y="-2633.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">GitHub; Time Machine for everything else.</text>
</g>
<!-- vault -->
<g id="node4" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1618.65,-1794 1293.39,-1794 1293.39,-1614 1618.65,-1614 1618.65,-1794"/>
<text xml:space="preserve" text-anchor="start" x="1395.98" y="-1725.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Second Brain</text>
<text xml:space="preserve" text-anchor="start" x="1414.83" y="-1704.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian vault</text>
<text xml:space="preserve" text-anchor="start" x="1313.44" y="-1683.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Where everything ends up: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1369.29" y="-1665.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">ideas, and the dashboard.</text>
</g>
<!-- pi -->
<g id="node5" class="node">
<title>pi</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2149.98,-1148.4 1808.06,-1148.4 1808.06,-968.4 2149.98,-968.4 2149.98,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1949" y="-1080.2" font-family="Arial" font-size="20.00" fill="#eff6ff">brainpi</text>
<text xml:space="preserve" text-anchor="start" x="1941.45" y="-1059.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">Raspberry Pi</text>
<text xml:space="preserve" text-anchor="start" x="1828.11" y="-1037.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Small always&#45;on box: runs the scanner, holds</text>
<text xml:space="preserve" text-anchor="start" x="1836.05" y="-1019.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Time Machine, streams the printer camera.</text>
</g>
<!-- github -->
<g id="node6" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2126.97,-180 1777.07,-180 1777.07,0 2126.97,0 2126.97,-180"/>
<text xml:space="preserve" text-anchor="start" x="1920.9" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1801.09" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the vault backup and the website code;</text>
<text xml:space="preserve" text-anchor="start" x="1858.64" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">builds and hosts embry.dev.</text>
</g>
<!-- icloudmail -->
<g id="node7" class="node">
<title>icloudmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-2762.4 0,-2762.4 0,-2582.4 320.04,-2582.4 320.04,-2762.4"/>
<text xml:space="preserve" text-anchor="start" x="110.56" y="-2675.4" font-family="Arial" font-size="20.00" fill="#f8fafc">iCloud Mail</text>
<text xml:space="preserve" text-anchor="start" x="104.57" y="-2652.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">Second mailbox.</text>
</g>
<!-- mail -->
<g id="node8" class="node">
<title>mail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="536.25,-2116.8 181.79,-2116.8 181.79,-1936.8 536.25,-1936.8 536.25,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="297.34" y="-2038.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Email &amp; Texts</text>
<text xml:space="preserve" text-anchor="start" x="201.85" y="-2015.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Turns two inboxes and iMessage into one short</text>
<text xml:space="preserve" text-anchor="start" x="276.89" y="-1997.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">list of what needs action.</text>
</g>
<!-- assistants -->
<g id="node9" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1236.15,-2116.8 915.89,-2116.8 915.89,-1936.8 1236.15,-1936.8 1236.15,-2116.8"/>
<text xml:space="preserve" text-anchor="start" x="1019.33" y="-2048.6" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistants</text>
<text xml:space="preserve" text-anchor="start" x="1016.77" y="-2027.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="935.94" y="-2006" font-family="Arial" font-size="15.00" fill="#bfdbfe">Two assistants share one vault, one set of</text>
<text xml:space="preserve" text-anchor="start" x="997.24" y="-1988" font-family="Arial" font-size="15.00" fill="#bfdbfe">skills, and one memory.</text>
</g>
<!-- capture -->
<g id="node10" class="node">
<title>capture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1273.04,-1471.2 953,-1471.2 953,-1291.2 1273.04,-1291.2 1273.04,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1077.44" y="-1384.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Capture</text>
<text xml:space="preserve" text-anchor="start" x="977.12" y="-1361.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every way a thought gets into the in&#45;tray.</text>
</g>
<!-- scan -->
<g id="node11" class="node">
<title>scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2020.92,-1471.2 1653.12,-1471.2 1653.12,-1291.2 2020.92,-1291.2 2020.92,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1799.77" y="-1393.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Scanner</text>
<text xml:space="preserve" text-anchor="start" x="1673.18" y="-1370.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Paper in the scanner becomes a searchable PDF</text>
<text xml:space="preserve" text-anchor="start" x="1779.48" y="-1352.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">and a note to file.</text>
</g>
<!-- gmail -->
<g id="node12" class="node">
<title>gmail</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="485.04,-1794 165,-1794 165,-1614 485.04,-1614 485.04,-1794"/>
<text xml:space="preserve" text-anchor="start" x="298.91" y="-1707" font-family="Arial" font-size="20.00" fill="#f8fafc">Gmail</text>
<text xml:space="preserve" text-anchor="start" x="278.75" y="-1684" font-family="Arial" font-size="15.00" fill="#cbd5e1">Main mailbox.</text>
</g>
<!-- docs -->
<g id="node13" class="node">
<title>docs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1680.74,-1148.4 1341.3,-1148.4 1341.3,-968.4 1680.74,-968.4 1680.74,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="1449.87" y="-1089.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="1455.39" y="-1068.2" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1389.29" y="-1046.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="1361.35" y="-1028.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="1505.19" y="-1010.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- printing -->
<g id="node14" class="node">
<title>printing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2335.56,-825.6 2014.48,-825.6 2014.48,-645.6 2335.56,-645.6 2335.56,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="2126.66" y="-757.4" font-family="Arial" font-size="20.00" fill="#eff6ff">3D printing</text>
<text xml:space="preserve" text-anchor="start" x="2127.68" y="-736.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Bambu Lab P2S</text>
<text xml:space="preserve" text-anchor="start" x="2034.54" y="-714.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Logs every print, streams the camera, and</text>
<text xml:space="preserve" text-anchor="start" x="2072.05" y="-696.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">posts finished prints to the site.</text>
</g>
<!-- cloudflare -->
<g id="node15" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1904.79,-825.6 1553.25,-825.6 1553.25,-645.6 1904.79,-645.6 1904.79,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1683.44" y="-747.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="1583.13" y="-724.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="1577.26" y="-706.6" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- site -->
<g id="node16" class="node">
<title>site</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2112.04,-502.8 1792,-502.8 1792,-322.8 2112.04,-322.8 2112.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1905.34" y="-434.6" font-family="Arial" font-size="20.00" fill="#eff6ff">embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="1873.62" y="-413.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">Astro site on GitHub Pages</text>
<text xml:space="preserve" text-anchor="start" x="1829.87" y="-392" font-family="Arial" font-size="15.00" fill="#bfdbfe">Public site: the studio, the live printer</text>
<text xml:space="preserve" text-anchor="start" x="1854.89" y="-374" font-family="Arial" font-size="15.00" fill="#bfdbfe">camera, and the print gallery.</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge1" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M848.02,-2582.47C848.02,-2541.27 848.02,-2492.16 848.02,-2449.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="850.65,-2449.96 848.02,-2442.46 845.4,-2449.96 850.65,-2449.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="848.02,-2499.6 848.02,-2522.4 931.84,-2522.4 931.84,-2499.6 848.02,-2499.6"/>
<text xml:space="preserve" text-anchor="start" x="851.02" y="-2505.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- jt&#45;&gt;vault -->
<g id="edge8" class="edge">
<title>jt&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1019.34,-2292.2C1110.3,-2254.79 1218.05,-2197.54 1291.02,-2116.8 1371.53,-2027.72 1415.18,-1894.41 1437,-1803.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1439.5,-1804.62 1438.66,-1796.72 1434.39,-1803.41 1439.5,-1804.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1394.97,-2015.4 1394.97,-2038.2 1444.54,-2038.2 1444.54,-2015.4 1394.97,-2015.4"/>
<text xml:space="preserve" text-anchor="start" x="1397.97" y="-2021.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks</text>
</g>
<!-- jt&#45;&gt;mail -->
<g id="edge7" class="edge">
<title>jt&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M676.9,-2275.96C631.9,-2253.94 584.44,-2227.98 543.19,-2199.6 511.11,-2177.53 479.07,-2150.03 450.92,-2123.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="452.91,-2121.82 445.66,-2118.56 449.29,-2125.62 452.91,-2121.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="543.19,-2176.8 543.19,-2199.6 648.02,-2199.6 648.02,-2176.8 543.19,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="546.19" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">presses buttons</text>
</g>
<!-- jt&#45;&gt;assistants -->
<g id="edge6" class="edge">
<title>jt&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M911.23,-2259.67C940.94,-2217.86 976.44,-2167.91 1006.87,-2125.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1008.93,-2126.73 1011.13,-2119.1 1004.65,-2123.69 1008.93,-2126.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="968.86,-2176.8 968.86,-2199.6 1003.64,-2199.6 1003.64,-2176.8 968.86,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="971.86" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;capture -->
<g id="edge9" class="edge">
<title>jt&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M800.34,-2259.73C752.99,-2159.34 693.84,-1991.98 741.63,-1854 793.48,-1704.3 914.66,-1566.06 1004.58,-1478.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1006.35,-1480.38 1009.91,-1473.28 1002.69,-1476.61 1006.35,-1480.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="741.63,-1854 741.63,-1876.8 848.02,-1876.8 848.02,-1854 741.63,-1854"/>
<text xml:space="preserve" text-anchor="start" x="744.63" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
<!-- jt&#45;&gt;scan -->
<g id="edge10" class="edge">
<title>jt&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1019.35,-2317.08C1154.22,-2285.22 1340.69,-2224.79 1472.02,-2116.8 1711.45,-1919.9 1787.7,-1848.65 1884.02,-1554 1891.7,-1530.49 1890,-1504.9 1884.02,-1480.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1886.64,-1480.43 1882.12,-1473.89 1881.57,-1481.82 1886.64,-1480.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1742.76,-1854 1742.76,-1876.8 1821.92,-1876.8 1821.92,-1854 1742.76,-1854"/>
<text xml:space="preserve" text-anchor="start" x="1745.76" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">loads paper</text>
</g>
<!-- backups&#45;&gt;vault -->
<g id="edge2" class="edge">
<title>backups&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2211.98,-2582.57C2201.36,-2563.09 2190.78,-2542.32 2182.02,-2522.4 2121.16,-2384.03 2121,-2343.55 2074.86,-2199.6 2025.79,-2046.5 2082.64,-1966.73 1968.02,-1854 1878.25,-1765.71 1739.36,-1729.18 1628.87,-1714.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1629.38,-1711.75 1621.61,-1713.39 1628.71,-1716.95 1629.38,-1711.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2074.86,-2176.8 2074.86,-2199.6 2182.02,-2199.6 2182.02,-2176.8 2074.86,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="2077.86" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">writes setup into</text>
</g>
<!-- backups&#45;&gt;pi -->
<g id="edge3" class="edge">
<title>backups&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2265.02,-2582.55C2265.02,-2518.15 2265.02,-2428.99 2265.02,-2350.6 2265.02,-2350.6 2265.02,-2350.6 2265.02,-1380.2 2265.02,-1288.24 2198.73,-1210.47 2129.98,-1154.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2131.88,-1152.7 2124.38,-1150.06 2128.6,-1156.8 2131.88,-1152.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2265.02,-1854 2265.02,-1876.8 2342.62,-1876.8 2342.62,-1854 2265.02,-1854"/>
<text xml:space="preserve" text-anchor="start" x="2268.02" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">backs up to</text>
</g>
<!-- backups&#45;&gt;github -->
<g id="edge4" class="edge">
<title>backups&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2401.81,-2582.53C2471.21,-2525.78 2541.02,-2445.19 2541.02,-2350.6 2541.02,-2350.6 2541.02,-2350.6 2541.02,-411.8 2541.02,-225 2309.71,-146.34 2137,-113.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2137.58,-111.08 2129.72,-112.29 2136.62,-116.24 2137.58,-111.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2541.02,-1369.8 2541.02,-1392.6 2620.95,-1392.6 2620.95,-1369.8 2541.02,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="2544.02" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">private repo</text>
</g>
<!-- vault&#45;&gt;capture -->
<g id="edge16" class="edge">
<title>vault&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1293.62,-1634.84C1255.47,-1613.2 1217.43,-1586.3 1188.08,-1554 1168.97,-1532.97 1154.17,-1506.32 1142.96,-1480.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1145.45,-1479.48 1140.15,-1473.56 1140.61,-1481.5 1145.45,-1479.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1188.08,-1531.2 1188.08,-1554 1268.02,-1554 1268.02,-1531.2 1188.08,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1191.08" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- vault&#45;&gt;scan -->
<g id="edge17" class="edge">
<title>vault&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1548.5,-1614.28C1577.81,-1587.03 1610.69,-1557.35 1641.79,-1531.2 1663.01,-1513.36 1686.04,-1494.97 1708.6,-1477.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1710.16,-1479.57 1714.49,-1472.91 1706.95,-1475.42 1710.16,-1479.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1641.79,-1531.2 1641.79,-1554 1696.02,-1554 1696.02,-1531.2 1641.79,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1644.79" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
<!-- pi&#45;&gt;scan -->
<g id="edge25" class="edge">
<title>pi&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1939.7,-1148.23C1921.35,-1189.68 1899.46,-1239.14 1880.61,-1281.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1878.25,-1280.58 1877.61,-1288.5 1883.05,-1282.7 1878.25,-1280.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1912.28,-1208.4 1912.28,-1231.2 1996.88,-1231.2 1996.88,-1208.4 1912.28,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1915.28" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">saves pages</text>
</g>
<!-- pi&#45;&gt;printing -->
<g id="edge26" class="edge">
<title>pi&#45;&gt;printing</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1948.18,-968.55C1943.55,-940.72 1944.06,-910.73 1957.31,-885.6 1969.43,-862.62 1986.86,-842.51 2006.67,-825.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2008.34,-827.15 2012.36,-820.3 2004.94,-823.15 2008.34,-827.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1957.31,-885.6 1957.31,-908.4 2038.02,-908.4 2038.02,-885.6 1957.31,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1960.31" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">drafted card</text>
</g>
<!-- pi&#45;&gt;cloudflare -->
<g id="edge27" class="edge">
<title>pi&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1876.64,-968.71C1857.56,-949.81 1838.64,-929.23 1822.66,-908.4 1805.35,-885.83 1789.35,-859.65 1775.65,-834.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1778.02,-833.5 1772.15,-828.15 1773.4,-835.99 1778.02,-833.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1822.66,-885.6 1822.66,-908.4 1922.02,-908.4 1922.02,-885.6 1822.66,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1825.66" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera stream</text>
</g>
<!-- icloudmail&#45;&gt;mail -->
<g id="edge5" class="edge">
<title>icloudmail&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M187.48,-2582.59C224.44,-2463.06 289.97,-2251.11 328.46,-2126.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.92,-2127.57 330.63,-2119.63 325.9,-2126.02 330.92,-2127.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="285.77,-2338.2 285.77,-2361 347.02,-2361 347.02,-2338.2 285.77,-2338.2"/>
<text xml:space="preserve" text-anchor="start" x="288.77" y="-2344" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- mail&#45;&gt;jt -->
<g id="edge13" class="edge">
<title>mail&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M345.81,-2116.6C346.11,-2145.7 351.96,-2176.46 370.17,-2199.6 407.9,-2247.55 548.02,-2287.73 666.85,-2314.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="665.97,-2316.73 673.86,-2315.78 667.1,-2311.6 665.97,-2316.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="370.17,-2176.8 370.17,-2199.6 489.02,-2199.6 489.02,-2176.8 370.17,-2176.8"/>
<text xml:space="preserve" text-anchor="start" x="373.17" y="-2182.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- mail&#45;&gt;vault -->
<g id="edge14" class="edge">
<title>mail&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M536.19,-1973.99C742.11,-1913.77 1079.67,-1815.06 1283.56,-1755.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1284.1,-1758.01 1290.57,-1753.38 1282.63,-1752.97 1284.1,-1758.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="940.41,-1854 940.41,-1876.8 1136.3,-1876.8 1136.3,-1854 940.41,-1854"/>
<text xml:space="preserve" text-anchor="start" x="943.41" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
<!-- mail&#45;&gt;gmail -->
<g id="edge15" class="edge">
<title>mail&#45;&gt;gmail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M349.59,-1936.87C345.23,-1895.67 340.02,-1846.56 335.53,-1804.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="338.15,-1804.02 334.75,-1796.84 332.93,-1804.57 338.15,-1804.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="343.04,-1854 343.04,-1876.8 440.09,-1876.8 440.09,-1854 343.04,-1854"/>
<text xml:space="preserve" text-anchor="start" x="346.04" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">archive, delete</text>
</g>
<!-- assistants&#45;&gt;vault -->
<g id="edge11" class="edge">
<title>assistants&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1181.37,-1936.87C1231.61,-1894.45 1291.79,-1843.65 1342.99,-1800.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1344.45,-1802.63 1348.48,-1795.78 1341.06,-1798.61 1344.45,-1802.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1277.41,-1854 1277.41,-1876.8 1304.41,-1876.8 1304.41,-1854 1277.41,-1854"/>
<text xml:space="preserve" text-anchor="start" x="1280.41" y="-1862.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- assistants&#45;&gt;capture -->
<g id="edge12" class="edge">
<title>assistants&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1092.31,-1937.02C1095.38,-1917.26 1098.2,-1896.37 1100.02,-1876.8 1112.77,-1740.09 1114.67,-1581.28 1114.29,-1481.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1116.92,-1481.38 1114.26,-1473.89 1111.67,-1481.4 1116.92,-1481.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1113.29,-1692.6 1113.29,-1715.4 1146.52,-1715.4 1146.52,-1692.6 1113.29,-1692.6"/>
<text xml:space="preserve" text-anchor="start" x="1116.29" y="-1698.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- capture&#45;&gt;vault -->
<g id="edge19" class="edge">
<title>capture&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1222.89,-1470.98C1245.81,-1490.38 1269.52,-1511.12 1291.02,-1531.2 1316.46,-1554.96 1343.02,-1581.68 1367.2,-1606.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1365.11,-1608.45 1372.19,-1612.05 1368.9,-1604.81 1365.11,-1608.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1314.44,-1531.2 1314.44,-1554 1341.43,-1554 1341.43,-1531.2 1314.44,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1317.44" y="-1539.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- capture&#45;&gt;github -->
<g id="edge20" class="edge">
<title>capture&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1126.26,-1291.23C1134.68,-1226.97 1144.02,-1138.02 1144.02,-1059.4 1144.02,-1059.4 1144.02,-1059.4 1144.02,-411.8 1144.02,-278.54 1528.48,-176.48 1767.01,-125.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1767.43,-128.58 1774.23,-124.47 1766.35,-123.44 1767.43,-128.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1144.02,-724.2 1144.02,-747 1258.19,-747 1258.19,-724.2 1144.02,-724.2"/>
<text xml:space="preserve" text-anchor="start" x="1147.02" y="-730" font-family="Arial" font-size="14.00" fill="#c9c9c9">via the vault copy</text>
</g>
<!-- scan&#45;&gt;vault -->
<g id="edge21" class="edge">
<title>scan&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1787.23,-1470.8C1768.33,-1499.55 1745.02,-1530.15 1719.02,-1554 1691.77,-1578.99 1659.6,-1601.51 1627.28,-1621.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1626.32,-1618.55 1621.22,-1624.64 1629.01,-1623.06 1626.32,-1618.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1738.91,-1531.2 1738.91,-1554 1857,-1554 1857,-1531.2 1738.91,-1531.2"/>
<text xml:space="preserve" text-anchor="start" x="1741.91" y="-1537" font-family="Arial" font-size="14.00" fill="#c9c9c9">one note per scan</text>
</g>
<!-- scan&#45;&gt;pi -->
<g id="edge23" class="edge">
<title>scan&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1811.7,-1291.49C1808.15,-1263.96 1808.88,-1234.11 1820.03,-1208.4 1828.24,-1189.46 1840.17,-1171.82 1853.87,-1155.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1855.71,-1157.68 1858.72,-1150.32 1851.78,-1154.19 1855.71,-1157.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1820.03,-1208.4 1820.03,-1231.2 1847.02,-1231.2 1847.02,-1208.4 1820.03,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1823.03" y="-1216.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- scan&#45;&gt;docs -->
<g id="edge22" class="edge">
<title>scan&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1746.64,-1291.27C1703.72,-1249.02 1652.34,-1198.47 1608.53,-1155.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1610.63,-1153.74 1603.45,-1150.35 1606.95,-1157.48 1610.63,-1153.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1683.79,-1208.4 1683.79,-1231.2 1738.84,-1231.2 1738.84,-1208.4 1683.79,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="1686.79" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">indexed</text>
</g>
<!-- gmail&#45;&gt;mail -->
<g id="edge18" class="edge">
<title>gmail&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M261.7,-1793.93C250.06,-1820.25 244,-1849.37 252.78,-1876.8 258.42,-1894.42 266.98,-1911.73 276.86,-1927.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="274.63,-1929.35 280.85,-1934.3 279.08,-1926.55 274.63,-1929.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="252.78,-1854 252.78,-1876.8 314.02,-1876.8 314.02,-1854 252.78,-1854"/>
<text xml:space="preserve" text-anchor="start" x="255.78" y="-1859.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- docs&#45;&gt;vault -->
<g id="edge24" class="edge">
<title>docs&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1503.42,-1148.34C1493.21,-1267.8 1475.12,-1479.45 1464.49,-1603.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1461.89,-1603.47 1463.87,-1611.17 1467.12,-1603.92 1461.89,-1603.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1490.78,-1369.8 1490.78,-1392.6 1541.13,-1392.6 1541.13,-1369.8 1490.78,-1369.8"/>
<text xml:space="preserve" text-anchor="start" x="1493.78" y="-1375.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">full text</text>
</g>
<!-- printing&#45;&gt;pi -->
<g id="edge28" class="edge">
<title>printing&#45;&gt;pi</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2120.75,-825.43C2095.27,-867.14 2064.82,-916.97 2038.69,-959.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2036.61,-958.11 2034.93,-965.88 2041.09,-960.85 2036.61,-958.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2082.9,-885.6 2082.9,-908.4 2109.89,-908.4 2109.89,-885.6 2082.9,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="2085.9" y="-893.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- printing&#45;&gt;site -->
<g id="edge29" class="edge">
<title>printing&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2113.2,-645.67C2084.14,-603.86 2049.41,-553.91 2019.65,-511.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2021.93,-509.78 2015.5,-505.12 2017.62,-512.77 2021.93,-509.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2070.21,-562.8 2070.21,-585.6 2148.57,-585.6 2148.57,-562.8 2070.21,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2073.21" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">gallery card</text>
</g>
<!-- cloudflare&#45;&gt;site -->
<g id="edge30" class="edge">
<title>cloudflare&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1790.84,-645.67C1819.9,-603.86 1854.63,-553.91 1884.39,-511.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1886.42,-512.77 1888.54,-505.12 1882.11,-509.78 1886.42,-512.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1847.21,-562.8 1847.21,-585.6 1894.44,-585.6 1894.44,-562.8 1847.21,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1850.21" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">serves</text>
</g>
<!-- site&#45;&gt;github -->
<g id="edge31" class="edge">
<title>site&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1952.02,-322.87C1952.02,-281.67 1952.02,-232.56 1952.02,-190.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1954.65,-190.36 1952.02,-182.86 1949.4,-190.36 1954.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1952.02,-240 1952.02,-262.8 2004.72,-262.8 2004.72,-240 1952.02,-240"/>
<text xml:space="preserve" text-anchor="start" x="1955.02" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs on</text>
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
<svg width="3045pt" height="1729pt"
 viewBox="0.00 0.00 3045.00 1729.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1714.05)">
<g id="clust1" class="cluster">
<title>cluster_assistants</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1557.87,-258 1557.87,-523 1941.91,-523 1941.91,-258 1557.87,-258"/>
<text xml:space="preserve" text-anchor="start" x="1565.87" y="-510.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AI ASSISTANTS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_capture</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="945.47,-250 945.47,-1691 1380.77,-1691 1380.77,-250 945.47,-250"/>
<text xml:space="preserve" text-anchor="start" x="953.47" y="-1678.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CAPTURE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1549.87,-535 1549.87,-836 3007.1,-836 3007.1,-535 1549.87,-535"/>
<text xml:space="preserve" text-anchor="start" x="1557.87" y="-823.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- claude -->
<g id="node1" class="node">
<title>claude</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1909.91,-470 1589.87,-470 1589.87,-290 1909.91,-290 1909.91,-470"/>
<text xml:space="preserve" text-anchor="start" x="1691.51" y="-401.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Claude Code</text>
<text xml:space="preserve" text-anchor="start" x="1666.43" y="-380.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="1632.74" y="-359.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Main assistant. Builds and fixes the</text>
<text xml:space="preserve" text-anchor="start" x="1663.61" y="-341.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">machinery, runs the skills.</text>
</g>
<!-- reminders -->
<g id="node2" class="node">
<title>reminders</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1340.77,-1050 985.47,-1050 985.47,-870 1340.77,-870 1340.77,-1050"/>
<text xml:space="preserve" text-anchor="start" x="1091.43" y="-981.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Reminders sync</text>
<text xml:space="preserve" text-anchor="start" x="1100.99" y="-960.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Remindian · two&#45;way</text>
<text xml:space="preserve" text-anchor="start" x="1005.53" y="-939.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Open to&#45;dos show up as phone reminders; new</text>
<text xml:space="preserve" text-anchor="start" x="1044.73" y="-921.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">reminders come back into the vault.</text>
</g>
<!-- cloudcapture -->
<g id="node3" class="node">
<title>cloudcapture</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1340.34,-1340 985.9,-1340 985.9,-1160 1340.34,-1160 1340.34,-1340"/>
<text xml:space="preserve" text-anchor="start" x="1098.07" y="-1271.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Phone capture</text>
<text xml:space="preserve" text-anchor="start" x="1059.77" y="-1250.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude on the phone · GitHub copy</text>
<text xml:space="preserve" text-anchor="start" x="1005.95" y="-1229.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Away from the Mac, Claude can add new notes</text>
<text xml:space="preserve" text-anchor="start" x="1103.51" y="-1211.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">to the in&#45;tray only.</text>
</g>
<!-- distill -->
<g id="node4" class="node">
<title>distill</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1323.14,-470 1003.1,-470 1003.1,-290 1323.14,-290 1323.14,-470"/>
<text xml:space="preserve" text-anchor="start" x="1116.99" y="-401.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Chat distill</text>
<text xml:space="preserve" text-anchor="start" x="1111.83" y="-380.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">session&#45;distill skill</text>
<text xml:space="preserve" text-anchor="start" x="1038.88" y="-359.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Boils a finished AI chat down to a few</text>
<text xml:space="preserve" text-anchor="start" x="1046.79" y="-341.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">lasting notes, then the chat can go.</text>
</g>
<!-- quick -->
<g id="node5" class="node">
<title>quick</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1337.01,-760 989.23,-760 989.23,-580 1337.01,-580 1337.01,-760"/>
<text xml:space="preserve" text-anchor="start" x="1101.43" y="-691.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Quick capture</text>
<text xml:space="preserve" text-anchor="start" x="1097.71" y="-670.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Obsidian ribbon button</text>
<text xml:space="preserve" text-anchor="start" x="1009.28" y="-649.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Type a thought, press save, it becomes a note</text>
<text xml:space="preserve" text-anchor="start" x="1119.77" y="-631.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">in the in&#45;tray.</text>
</g>
<!-- journal -->
<g id="node6" class="node">
<title>journal</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1323.14,-1630 1003.1,-1630 1003.1,-1450 1323.14,-1450 1323.14,-1630"/>
<text xml:space="preserve" text-anchor="start" x="1099.75" y="-1561.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Journal to&#45;dos</text>
<text xml:space="preserve" text-anchor="start" x="1135.3" y="-1540.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">daily note</text>
<text xml:space="preserve" text-anchor="start" x="1024.71" y="-1519.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">To&#45;dos jotted in the day’s journal. Triage</text>
<text xml:space="preserve" text-anchor="start" x="1058.07" y="-1501.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">moves them to the right project.</text>
</g>
<!-- ingest -->
<g id="node7" class="node">
<title>ingest</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1909.91,-758.64C1909.91,-767.67 1838.18,-775 1749.89,-775 1661.59,-775 1589.87,-767.67 1589.87,-758.64 1589.87,-758.64 1589.87,-611.36 1589.87,-611.36 1589.87,-602.33 1661.59,-595 1749.89,-595 1838.18,-595 1909.91,-602.33 1909.91,-611.36 1909.91,-611.36 1909.91,-758.64 1909.91,-758.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1909.91,-758.64C1909.91,-749.61 1838.18,-742.27 1749.89,-742.27 1661.59,-742.27 1589.87,-749.61 1589.87,-758.64"/>
<text xml:space="preserve" text-anchor="start" x="1714.3" y="-688" font-family="Arial" font-size="20.00" fill="#eef2ff">0 Ingest</text>
<text xml:space="preserve" text-anchor="start" x="1610.25" y="-665" font-family="Arial" font-size="15.00" fill="#c7d2fe">The in&#45;tray. Every capture lands here first.</text>
</g>
<!-- triage -->
<g id="node8" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2453.37,-775 2124.78,-775 2124.78,-595 2453.37,-595 2453.37,-775"/>
<text xml:space="preserve" text-anchor="start" x="2238.49" y="-706.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault triage</text>
<text xml:space="preserve" text-anchor="start" x="2232.36" y="-685.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok skill</text>
<text xml:space="preserve" text-anchor="start" x="2144.83" y="-664.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="2254.88" y="-646.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- para -->
<g id="node9" class="node">
<title>para</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2967.1,-758.64C2967.1,-767.67 2895.38,-775 2807.08,-775 2718.79,-775 2647.06,-767.67 2647.06,-758.64 2647.06,-758.64 2647.06,-611.36 2647.06,-611.36 2647.06,-602.33 2718.79,-595 2807.08,-595 2895.38,-595 2967.1,-602.33 2967.1,-611.36 2967.1,-611.36 2967.1,-758.64 2967.1,-758.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2967.1,-758.64C2967.1,-749.61 2895.38,-742.27 2807.08,-742.27 2718.79,-742.27 2647.06,-749.61 2647.06,-758.64"/>
<text xml:space="preserve" text-anchor="start" x="2732.61" y="-697" font-family="Arial" font-size="20.00" fill="#eef2ff">Projects &amp; Areas</text>
<text xml:space="preserve" text-anchor="start" x="2678.68" y="-674" font-family="Arial" font-size="15.00" fill="#c7d2fe">Life admin: things with a finish line and</text>
<text xml:space="preserve" text-anchor="start" x="2756.21" y="-656" font-family="Arial" font-size="15.00" fill="#c7d2fe">ongoing duties.</text>
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
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1924.83,-1340 1574.94,-1340 1574.94,-1160 1924.83,-1160 1924.83,-1340"/>
<text xml:space="preserve" text-anchor="start" x="1718.76" y="-1262" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1598.96" y="-1239" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the vault backup and the website code;</text>
<text xml:space="preserve" text-anchor="start" x="1656.5" y="-1221" font-family="Arial" font-size="15.00" fill="#cbd5e1">builds and hosts embry.dev.</text>
</g>
<!-- iphone -->
<g id="node12" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="781.65,-740 461.61,-740 461.61,-560 781.65,-560 781.65,-740"/>
<text xml:space="preserve" text-anchor="start" x="590.49" y="-653" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="549.52" y="-630" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders.</text>
</g>
<!-- jt -->
<g id="node13" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1334.5,-180 991.74,-180 991.74,0 1334.5,0 1334.5,-180"/>
<text xml:space="preserve" text-anchor="start" x="1152.01" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="1011.8" y="-79" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="1136.43" y="-61" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- claude&#45;&gt;distill -->
<g id="edge1" class="edge">
<title>claude&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1590.06,-370.14C1564.93,-368.92 1539.23,-367.86 1514.94,-367.2 1464.22,-365.81 1451.49,-365.83 1400.77,-367.2 1378.92,-367.79 1355.95,-368.69 1333.27,-369.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1333.26,-367.11 1325.9,-370.09 1333.51,-372.35 1333.26,-367.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1441.24,-367.2 1441.24,-390 1474.47,-390 1474.47,-367.2 1441.24,-367.2"/>
<text xml:space="preserve" text-anchor="start" x="1444.24" y="-373" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- claude&#45;&gt;triage -->
<g id="edge2" class="edge">
<title>claude&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1909.15,-469.86C1975.8,-507.7 2053.41,-551.76 2120.97,-590.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2119.56,-592.34 2127.38,-593.76 2122.15,-587.77 2119.56,-592.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2008.19,-550.76 2008.19,-573.56 2041.42,-573.56 2041.42,-550.76 2008.19,-550.76"/>
<text xml:space="preserve" text-anchor="start" x="2011.19" y="-556.56" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- reminders&#45;&gt;ingest -->
<g id="edge4" class="edge">
<title>reminders&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1330.72,-870.07C1354.1,-858.06 1377.93,-846.13 1400.77,-835.2 1458.42,-807.61 1522.41,-779.35 1579.65,-754.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1580.49,-757.38 1586.36,-752.02 1578.43,-752.55 1580.49,-757.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1408.95,-835.2 1408.95,-858 1506.76,-858 1506.76,-835.2 1408.95,-835.2"/>
<text xml:space="preserve" text-anchor="start" x="1411.95" y="-841" font-family="Arial" font-size="14.00" fill="#c9c9c9">new reminders</text>
</g>
<!-- reminders&#45;&gt;appleapps -->
<g id="edge3" class="edge">
<title>reminders&#45;&gt;appleapps</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M985.8,-932.7C800.87,-904.07 512.32,-859.39 330.14,-831.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.73,-828.62 322.92,-830.07 329.93,-833.81 330.73,-828.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="581.66,-900.44 581.66,-923.24 661.6,-923.24 661.6,-900.44 581.66,-900.44"/>
<text xml:space="preserve" text-anchor="start" x="584.66" y="-906.24" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- cloudcapture&#45;&gt;ingest -->
<g id="edge6" class="edge">
<title>cloudcapture&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1309.9,-1160.11C1334.38,-1142.87 1358.91,-1124.18 1380.77,-1105 1493.29,-1006.21 1604.02,-873.77 1674.16,-784.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1676.2,-785.89 1678.75,-778.36 1672.06,-782.65 1676.2,-785.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1422.94,-1084.93 1422.94,-1107.73 1492.76,-1107.73 1492.76,-1084.93 1422.94,-1084.93"/>
<text xml:space="preserve" text-anchor="start" x="1425.94" y="-1090.73" font-family="Arial" font-size="14.00" fill="#c9c9c9">new notes</text>
</g>
<!-- cloudcapture&#45;&gt;github -->
<g id="edge5" class="edge">
<title>cloudcapture&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1339.97,-1250C1410.9,-1250 1492.77,-1250 1564.53,-1250"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1564.52,-1252.63 1572.02,-1250 1564.52,-1247.38 1564.52,-1252.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1400.77,-1250 1400.77,-1272.8 1514.94,-1272.8 1514.94,-1250 1400.77,-1250"/>
<text xml:space="preserve" text-anchor="start" x="1403.77" y="-1255.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">via the vault copy</text>
</g>
<!-- distill&#45;&gt;ingest -->
<g id="edge7" class="edge">
<title>distill&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1323.14,-462.94C1402.6,-504.38 1498.78,-554.55 1579.61,-596.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1578.34,-599.01 1586.2,-600.15 1580.76,-594.35 1578.34,-599.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1415.17,-559.82 1415.17,-582.62 1500.54,-582.62 1500.54,-559.82 1415.17,-559.82"/>
<text xml:space="preserve" text-anchor="start" x="1418.17" y="-565.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">atomic notes</text>
</g>
<!-- quick&#45;&gt;ingest -->
<g id="edge8" class="edge">
<title>quick&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1336.8,-674.43C1413.2,-676.39 1502.78,-678.69 1578.87,-680.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1578.45,-683.25 1586.01,-680.82 1578.58,-678.01 1578.45,-683.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1426.44,-678.84 1426.44,-701.64 1489.26,-701.64 1489.26,-678.84 1426.44,-678.84"/>
<text xml:space="preserve" text-anchor="start" x="1429.44" y="-684.64" font-family="Arial" font-size="14.00" fill="#c9c9c9">new note</text>
</g>
<!-- journal&#45;&gt;triage -->
<g id="edge9" class="edge">
<title>journal&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1323.05,-1550.14C1493.06,-1552.65 1762.4,-1531.67 1941.91,-1395 2143.03,-1241.88 2233.99,-941.16 2269.16,-784.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2271.68,-785.54 2270.74,-777.65 2266.55,-784.41 2271.68,-785.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1719.26,-1536.54 1719.26,-1559.34 1780.51,-1559.34 1780.51,-1536.54 1719.26,-1536.54"/>
<text xml:space="preserve" text-anchor="start" x="1722.26" y="-1542.34" font-family="Arial" font-size="14.00" fill="#c9c9c9">swept by</text>
</g>
<!-- ingest&#45;&gt;triage -->
<g id="edge12" class="edge">
<title>ingest&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1910.6,-685C1974.75,-685 2048.87,-685 2114.35,-685"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2114.26,-687.63 2121.76,-685 2114.26,-682.38 2114.26,-687.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1998.46,-685 1998.46,-707.8 2051.15,-707.8 2051.15,-685 1998.46,-685"/>
<text xml:space="preserve" text-anchor="start" x="2001.46" y="-690.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">read by</text>
</g>
<!-- triage&#45;&gt;para -->
<g id="edge15" class="edge">
<title>triage&#45;&gt;para</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2453.34,-685C2511.42,-685 2576.93,-685 2635.59,-685"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2635.56,-687.63 2643.06,-685 2635.56,-682.38 2635.56,-687.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2513.37,-685 2513.37,-707.8 2587.06,-707.8 2587.06,-685 2513.37,-685"/>
<text xml:space="preserve" text-anchor="start" x="2516.37" y="-690.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">files to&#45;dos</text>
</g>
<!-- para&#45;&gt;reminders -->
<g id="edge16" class="edge">
<title>para&#45;&gt;reminders</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2646.09,-762.24C2586.82,-787.77 2518.24,-813.76 2453.37,-830 2069.56,-926.07 1604.61,-951.5 1351.16,-958"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1351.2,-955.37 1343.77,-958.18 1351.33,-960.62 1351.2,-955.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1984.83,-911.86 1984.83,-934.66 2064.78,-934.66 2064.78,-911.86 1984.83,-911.86"/>
<text xml:space="preserve" text-anchor="start" x="1987.83" y="-917.66" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- appleapps&#45;&gt;iphone -->
<g id="edge10" class="edge">
<title>appleapps&#45;&gt;iphone</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.84,-751.44C362.53,-737.04 408.86,-721.42 452.06,-706.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="452.67,-709.41 458.94,-704.53 451,-704.44 452.67,-709.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="380.04,-727.5 380.04,-750.3 401.61,-750.3 401.61,-727.5 380.04,-727.5"/>
<text xml:space="preserve" text-anchor="start" x="383.04" y="-733.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">on</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge11" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M676.43,-560.07C734.63,-467.86 834.16,-324.03 945.47,-223 959.74,-210.05 975.43,-197.66 991.66,-186"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="993.11,-188.19 997.72,-181.72 990.08,-183.9 993.11,-188.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="841.65,-328.81 841.65,-351.61 925.47,-351.61 925.47,-328.81 841.65,-328.81"/>
<text xml:space="preserve" text-anchor="start" x="844.65" y="-334.61" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- jt&#45;&gt;claude -->
<g id="edge13" class="edge">
<title>jt&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1334.44,-174.46C1401.44,-207.69 1478.87,-246.09 1548.53,-280.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1547.27,-282.94 1555.16,-283.92 1549.6,-278.24 1547.27,-282.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1411.25,-207.01 1411.25,-229.81 1446.04,-229.81 1446.04,-207.01 1411.25,-207.01"/>
<text xml:space="preserve" text-anchor="start" x="1414.25" y="-212.81" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;reminders -->
<g id="edge14" class="edge">
<title>jt&#45;&gt;reminders</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M992.02,-156.88C941.11,-185.93 891.51,-225.58 863.56,-278 762.79,-467.04 762.79,-570.96 863.56,-760 881.45,-793.56 907.74,-822.46 937.44,-847.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="935.63,-848.93 943.12,-851.6 938.93,-844.85 935.63,-848.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="683.13,-464.81 683.13,-487.61 789.52,-487.61 789.52,-464.81 683.13,-464.81"/>
<text xml:space="preserve" text-anchor="start" x="686.13" y="-470.61" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
</g>
</svg>
`;case`assistantsView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1834pt" height="942pt"
 viewBox="0.00 0.00 1834.00 942.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 927.05)">
<g id="clust1" class="cluster">
<title>cluster_assistants</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="423.76,-329 423.76,-900 1316.16,-900 1316.16,-329 423.76,-329"/>
<text xml:space="preserve" text-anchor="start" x="431.76" y="-887.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AI ASSISTANTS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_capture</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="924.12,-8 924.12,-273 1308.16,-273 1308.16,-8 924.12,-8"/>
<text xml:space="preserve" text-anchor="start" x="932.12" y="-260.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CAPTURE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1357.16,-310 1357.16,-904 1795.77,-904 1795.77,-310 1357.16,-310"/>
<text xml:space="preserve" text-anchor="start" x="1365.16" y="-891.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- claude -->
<g id="node1" class="node">
<title>claude</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="785.56,-549 465.52,-549 465.52,-369 785.56,-369 785.56,-549"/>
<text xml:space="preserve" text-anchor="start" x="567.17" y="-480.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Claude Code</text>
<text xml:space="preserve" text-anchor="start" x="542.08" y="-459.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="508.4" y="-438.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Main assistant. Builds and fixes the</text>
<text xml:space="preserve" text-anchor="start" x="539.26" y="-420.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">machinery, runs the skills.</text>
</g>
<!-- grok -->
<g id="node2" class="node">
<title>grok</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="787.32,-839 463.76,-839 463.76,-659 787.32,-659 787.32,-839"/>
<text xml:space="preserve" text-anchor="start" x="603.87" y="-770.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Grok</text>
<text xml:space="preserve" text-anchor="start" x="542.08" y="-749.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal tabs inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="483.81" y="-728.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Second assistant. Same vault, same skills,</text>
<text xml:space="preserve" text-anchor="start" x="586.78" y="-710.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">same rules.</text>
</g>
<!-- skills -->
<g id="node3" class="node">
<title>skills</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1276.16,-736.64C1276.16,-745.67 1204.43,-753 1116.14,-753 1027.84,-753 956.12,-745.67 956.12,-736.64 956.12,-736.64 956.12,-589.36 956.12,-589.36 956.12,-580.33 1027.84,-573 1116.14,-573 1204.43,-573 1276.16,-580.33 1276.16,-589.36 1276.16,-589.36 1276.16,-736.64 1276.16,-736.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1276.16,-736.64C1276.16,-727.61 1204.43,-720.27 1116.14,-720.27 1027.84,-720.27 956.12,-727.61 956.12,-736.64"/>
<text xml:space="preserve" text-anchor="start" x="1059.45" y="-684.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Shared skills</text>
<text xml:space="preserve" text-anchor="start" x="1077.49" y="-663.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">System/Skills</text>
<text xml:space="preserve" text-anchor="start" x="977.32" y="-642.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Written procedures both assistants follow:</text>
<text xml:space="preserve" text-anchor="start" x="1023.18" y="-624.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">triage, distill, lint, plain style.</text>
</g>
<!-- distill -->
<g id="node4" class="node">
<title>distill</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1276.16,-220 956.12,-220 956.12,-40 1276.16,-40 1276.16,-220"/>
<text xml:space="preserve" text-anchor="start" x="1070.01" y="-151.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Chat distill</text>
<text xml:space="preserve" text-anchor="start" x="1064.85" y="-130.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">session&#45;distill skill</text>
<text xml:space="preserve" text-anchor="start" x="991.9" y="-109.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Boils a finished AI chat down to a few</text>
<text xml:space="preserve" text-anchor="start" x="999.81" y="-91.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">lasting notes, then the chat can go.</text>
</g>
<!-- triage -->
<g id="node5" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1740.76,-530 1412.17,-530 1412.17,-350 1740.76,-350 1740.76,-530"/>
<text xml:space="preserve" text-anchor="start" x="1525.88" y="-461.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault triage</text>
<text xml:space="preserve" text-anchor="start" x="1519.75" y="-440.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok skill</text>
<text xml:space="preserve" text-anchor="start" x="1432.22" y="-419.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="1542.27" y="-401.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- memory -->
<g id="node6" class="node">
<title>memory</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1755.77,-826.64C1755.77,-835.67 1675.4,-843 1576.46,-843 1477.52,-843 1397.16,-835.67 1397.16,-826.64 1397.16,-826.64 1397.16,-679.36 1397.16,-679.36 1397.16,-670.33 1477.52,-663 1576.46,-663 1675.4,-663 1755.77,-670.33 1755.77,-679.36 1755.77,-679.36 1755.77,-826.64 1755.77,-826.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1755.77,-826.64C1755.77,-817.61 1675.4,-810.27 1576.46,-810.27 1477.52,-810.27 1397.16,-817.61 1397.16,-826.64"/>
<text xml:space="preserve" text-anchor="start" x="1504.23" y="-765" font-family="Arial" font-size="20.00" fill="#eef2ff">System memory</text>
<text xml:space="preserve" text-anchor="start" x="1417.21" y="-742" font-family="Arial" font-size="15.00" fill="#c7d2fe">What the assistants need to remember between</text>
<text xml:space="preserve" text-anchor="start" x="1545.2" y="-724" font-family="Arial" font-size="15.00" fill="#c7d2fe">sessions.</text>
</g>
<!-- iphone -->
<g id="node7" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="331.4,-862 11.36,-862 11.36,-682 331.4,-682 331.4,-862"/>
<text xml:space="preserve" text-anchor="start" x="140.24" y="-775" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="99.26" y="-752" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders.</text>
</g>
<!-- jt -->
<g id="node8" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="342.76,-549 0,-549 0,-369 342.76,-369 342.76,-549"/>
<text xml:space="preserve" text-anchor="start" x="160.27" y="-471" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-448" font-family="Arial" font-size="15.00" fill="#c2f0c2">Captures things, makes the calls, presses the</text>
<text xml:space="preserve" text-anchor="start" x="144.69" y="-430" font-family="Arial" font-size="15.00" fill="#c2f0c2">buttons.</text>
</g>
<!-- claude&#45;&gt;skills -->
<g id="edge4" class="edge">
<title>claude&#45;&gt;skills</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M785.51,-525.37C836.78,-546.78 893.78,-570.58 945.77,-592.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="944.69,-594.68 952.62,-595.15 946.71,-589.84 944.69,-594.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="847.32,-567.12 847.32,-589.92 896.12,-589.92 896.12,-567.12 847.32,-567.12"/>
<text xml:space="preserve" text-anchor="start" x="850.32" y="-572.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">follows</text>
</g>
<!-- claude&#45;&gt;distill -->
<g id="edge5" class="edge">
<title>claude&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M760.05,-369.1C826.16,-324.58 906.01,-270.81 973.23,-225.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="974.52,-227.85 979.28,-221.48 971.59,-223.49 974.52,-227.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="855.1,-304.36 855.1,-327.16 888.34,-327.16 888.34,-304.36 855.1,-304.36"/>
<text xml:space="preserve" text-anchor="start" x="858.1" y="-310.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- claude&#45;&gt;triage -->
<g id="edge6" class="edge">
<title>claude&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M785.37,-455.82C955.95,-452.4 1226.15,-446.99 1402.13,-443.47"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1402.06,-446.1 1409.51,-443.32 1401.96,-440.85 1402.06,-446.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1099.52,-452.91 1099.52,-475.71 1132.75,-475.71 1132.75,-452.91 1099.52,-452.91"/>
<text xml:space="preserve" text-anchor="start" x="1102.52" y="-458.71" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- grok&#45;&gt;skills -->
<g id="edge7" class="edge">
<title>grok&#45;&gt;skills</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M787.2,-720.72C837.79,-711.82 893.81,-701.96 945.03,-692.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="945.3,-695.56 952.23,-691.67 944.39,-690.39 945.3,-695.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="847.32,-708.58 847.32,-731.38 896.12,-731.38 896.12,-708.58 847.32,-708.58"/>
<text xml:space="preserve" text-anchor="start" x="850.32" y="-714.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">follows</text>
</g>
<!-- grok&#45;&gt;triage -->
<g id="edge8" class="edge">
<title>grok&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M787.31,-820.95C940.47,-877.33 1168.93,-928.11 1316.16,-808 1386.46,-750.64 1309.07,-684.95 1357.16,-608 1373.74,-581.47 1396.1,-557.53 1420.21,-536.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1421.76,-538.7 1425.78,-531.85 1418.36,-534.7 1421.76,-538.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1099.52,-881.39 1099.52,-904.19 1132.75,-904.19 1132.75,-881.39 1099.52,-881.39"/>
<text xml:space="preserve" text-anchor="start" x="1102.52" y="-887.19" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- skills&#45;&gt;memory -->
<g id="edge9" class="edge">
<title>skills&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1316.16,-702.08C1339.36,-706.64 1362.99,-711.28 1386.06,-715.81"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1385.4,-718.35 1393.26,-717.22 1386.41,-713.2 1385.4,-718.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1264.51,-687.12 1264.51,-709.92 1356.09,-709.92 1356.09,-687.12 1264.51,-687.12"/>
<text xml:space="preserve" text-anchor="start" x="1267.51" y="-692.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">remembers in</text>
</g>
<!-- triage&#45;&gt;memory -->
<g id="edge10" class="edge">
<title>triage&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1576.46,-529.69C1576.46,-567.83 1576.46,-612.49 1576.46,-651.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1573.84,-651.68 1576.46,-659.18 1579.09,-651.68 1573.84,-651.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1522.48,-585.1 1522.48,-607.9 1601.64,-607.9 1601.64,-585.1 1522.48,-585.1"/>
<text xml:space="preserve" text-anchor="start" x="1525.48" y="-590.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">logs the run</text>
</g>
<!-- iphone&#45;&gt;jt -->
<g id="edge1" class="edge">
<title>iphone&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M171.38,-682.02C171.38,-643.6 171.38,-598.61 171.38,-559.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="174,-559.22 171.38,-551.72 168.75,-559.22 174,-559.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="115.07,-604.1 115.07,-626.9 198.89,-626.9 198.89,-604.1 115.07,-604.1"/>
<text xml:space="preserve" text-anchor="start" x="118.07" y="-609.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">in his pocket</text>
</g>
<!-- jt&#45;&gt;claude -->
<g id="edge2" class="edge">
<title>jt&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M342.68,-459C365.73,-459 389.61,-459 413.27,-459"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="413.23,-461.63 420.73,-459 413.23,-456.38 413.23,-461.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="348.5,-436.2 348.5,-459 383.29,-459 383.29,-436.2 348.5,-436.2"/>
<text xml:space="preserve" text-anchor="start" x="351.5" y="-442" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;distill -->
<g id="edge3" class="edge">
<title>jt&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M298.94,-369.17C337.64,-344.71 381.24,-320.03 423.76,-302 582.41,-234.73 773.15,-189.73 914.06,-162.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="914.27,-165.33 921.14,-161.35 913.28,-160.17 914.27,-165.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="496.54,-215.25 496.54,-238.05 602.93,-238.05 602.93,-215.25 496.54,-215.25"/>
<text xml:space="preserve" text-anchor="start" x="499.54" y="-221.05" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
</g>
</svg>
`;case`schedulersView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2630pt" height="3367pt"
 viewBox="0.00 0.00 2630.00 3367.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3352.05)">
<g id="clust1" class="cluster">
<title>cluster_pi</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1029.78,-2869 1029.78,-3134 1417.39,-3134 1417.39,-2869 1029.78,-2869"/>
<text xml:space="preserve" text-anchor="start" x="1037.78" y="-3121.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BRAINPI</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_schedulers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="475.32,-2281 475.32,-2852 2035.12,-2852 2035.12,-2281 475.32,-2281"/>
<text xml:space="preserve" text-anchor="start" x="483.32" y="-2839.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCHEDULERS</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_mail</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1613.15,-8 1613.15,-579 2591.52,-579 2591.52,-8 1613.15,-8"/>
<text xml:space="preserve" text-anchor="start" x="1621.15" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMAIL &amp; TEXTS</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1625.44,-1756 1625.44,-2021 2009.48,-2021 2009.48,-1756 1625.44,-1756"/>
<text xml:space="preserve" text-anchor="start" x="1633.44" y="-2008.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SCANNER</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_backups</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1616.59,-886 1616.59,-1151 2018.33,-1151 2018.33,-886 1616.59,-886"/>
<text xml:space="preserve" text-anchor="start" x="1624.59" y="-1138.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKUPS</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_printing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1615.66,-1168 1615.66,-1739 2019.26,-1739 2019.26,-1168 1615.66,-1168"/>
<text xml:space="preserve" text-anchor="start" x="1623.66" y="-1726.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">3D PRINTING</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2187.17,-2434 2187.17,-2699 2588.93,-2699 2588.93,-2434 2187.17,-2434"/>
<text xml:space="preserve" text-anchor="start" x="2195.17" y="-2686.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SECOND BRAIN</text>
</g>
<!-- heartbeat -->
<g id="node1" class="node">
<title>heartbeat</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1385.39,-3081 1061.78,-3081 1061.78,-2901 1385.39,-2901 1385.39,-3081"/>
<text xml:space="preserve" text-anchor="start" x="1179.66" y="-3012.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Heartbeat</text>
<text xml:space="preserve" text-anchor="start" x="1184.2" y="-2991.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 6 hours</text>
<text xml:space="preserve" text-anchor="start" x="1081.83" y="-2970.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reports disk space and drive health so the</text>
<text xml:space="preserve" text-anchor="start" x="1124.36" y="-2952.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Health Report notices trouble.</text>
</g>
<!-- chiprelay -->
<g id="node2" class="node">
<title>chiprelay</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="835.36,-2791 515.32,-2791 515.32,-2611 835.36,-2611 835.36,-2791"/>
<text xml:space="preserve" text-anchor="start" x="591.39" y="-2722.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Phone button relay</text>
<text xml:space="preserve" text-anchor="start" x="619.7" y="-2701.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">iCloud · every 15 s</text>
<text xml:space="preserve" text-anchor="start" x="535.65" y="-2680.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">A button tapped on the phone is carried to</text>
<text xml:space="preserve" text-anchor="start" x="599.87" y="-2662.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">the Mac and run there.</text>
</g>
<!-- launchd -->
<g id="node3" class="node">
<title>launchd</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="835.36,-2501 515.32,-2501 515.32,-2321 835.36,-2321 835.36,-2501"/>
<text xml:space="preserve" text-anchor="start" x="568.6" y="-2432.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mac background agents</text>
<text xml:space="preserve" text-anchor="start" x="620.41" y="-2411.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">launchd · 2 agents</text>
<text xml:space="preserve" text-anchor="start" x="543.59" y="-2390.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The unread mail list, and a doorbell that</text>
<text xml:space="preserve" text-anchor="start" x="547.34" y="-2372.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">wakes Obsidian when the phone asks.</text>
</g>
<!-- homeplugin -->
<g id="node4" class="node">
<title>homeplugin</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1383.6,-2791 1063.56,-2791 1063.56,-2611 1383.6,-2611 1383.6,-2791"/>
<text xml:space="preserve" text-anchor="start" x="1135.75" y="-2722.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home Button plugin</text>
<text xml:space="preserve" text-anchor="start" x="1179.14" y="-2701.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="1089.37" y="-2680.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs most timers: every minute, every 5</text>
<text xml:space="preserve" text-anchor="start" x="1136.45" y="-2662.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">minutes, hourly, and daily.</text>
</g>
<!-- calendar -->
<g id="node5" class="node">
<title>calendar</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1995.12,-2791 1639.8,-2791 1639.8,-2611 1995.12,-2611 1995.12,-2791"/>
<text xml:space="preserve" text-anchor="start" x="1747.99" y="-2713.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Calendar mirror</text>
<text xml:space="preserve" text-anchor="start" x="1781.33" y="-2692.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1659.85" y="-2671.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the calendar onto the Home dashboard.</text>
</g>
<!-- health -->
<g id="node6" class="node">
<title>health</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1977.48,-2501 1657.44,-2501 1657.44,-2321 1977.48,-2321 1977.48,-2501"/>
<text xml:space="preserve" text-anchor="start" x="1759.65" y="-2432.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Health check</text>
<text xml:space="preserve" text-anchor="start" x="1785.67" y="-2411.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">daily · free</text>
<text xml:space="preserve" text-anchor="start" x="1679.47" y="-2390.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Looks for broken links, stale projects, and</text>
<text xml:space="preserve" text-anchor="start" x="1680.31" y="-2372.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">quiet machines; writes the Health Report.</text>
</g>
<!-- unread -->
<g id="node7" class="node">
<title>unread</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1977.48,-228 1657.44,-228 1657.44,-48 1977.48,-48 1977.48,-228"/>
<text xml:space="preserve" text-anchor="start" x="1769.66" y="-159.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Unread list</text>
<text xml:space="preserve" text-anchor="start" x="1745.94" y="-138.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="1691.99" y="-117.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads new mail straight from the mail</text>
<text xml:space="preserve" text-anchor="start" x="1790.79" y="-99.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">servers.</text>
</g>
<!-- texts -->
<g id="node8" class="node">
<title>texts</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1981.76,-518 1653.15,-518 1653.15,-338 1981.76,-338 1981.76,-518"/>
<text xml:space="preserve" text-anchor="start" x="1764.13" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Texts mirror</text>
<text xml:space="preserve" text-anchor="start" x="1745.94" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="1673.21" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies new iMessages into the vault. Login</text>
<text xml:space="preserve" text-anchor="start" x="1754.5" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">codes are skipped.</text>
</g>
<!-- mailtriage -->
<g id="node9" class="node">
<title>mailtriage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2551.52,-518 2224.59,-518 2224.59,-338 2551.52,-338 2551.52,-518"/>
<text xml:space="preserve" text-anchor="start" x="2313.58" y="-449.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mail &amp; text triage</text>
<text xml:space="preserve" text-anchor="start" x="2253.27" y="-428.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI · at Obsidian launch and on opening Home,</text>
<text xml:space="preserve" text-anchor="start" x="2244.64" y="-407.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Archives the noise and lists everything else</text>
<text xml:space="preserve" text-anchor="start" x="2320.92" y="-389.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">under Needs action.</text>
</g>
<!-- ocr -->
<g id="node10" class="node">
<title>ocr</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1977.48,-1968 1657.44,-1968 1657.44,-1788 1977.48,-1788 1977.48,-1968"/>
<text xml:space="preserve" text-anchor="start" x="1737.71" y="-1908.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Scan sync + OCR</text>
<text xml:space="preserve" text-anchor="start" x="1742.32" y="-1887.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1697.82" y="-1866.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls each raw scan, makes the text</text>
<text xml:space="preserve" text-anchor="start" x="1689.05" y="-1848.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">searchable, deletes the Pi copy once it</text>
<text xml:space="preserve" text-anchor="start" x="1779.52" y="-1830.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">checks out.</text>
</g>
<!-- machine -->
<g id="node11" class="node">
<title>machine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1986.33,-1098 1648.59,-1098 1648.59,-918 1986.33,-918 1986.33,-1098"/>
<text xml:space="preserve" text-anchor="start" x="1736.3" y="-1029.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Machine snapshot</text>
<text xml:space="preserve" text-anchor="start" x="1781.33" y="-1008.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1668.64" y="-987.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies the Mac’s setup (scripts, schedules,</text>
<text xml:space="preserve" text-anchor="start" x="1688.23" y="-969.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">settings) into the vault. Secrets left out.</text>
</g>
<!-- printlog -->
<g id="node12" class="node">
<title>printlog</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1979.26,-1388 1655.66,-1388 1655.66,-1208 1979.26,-1208 1979.26,-1388"/>
<text xml:space="preserve" text-anchor="start" x="1780.77" y="-1319.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Print log</text>
<text xml:space="preserve" text-anchor="start" x="1742.32" y="-1298.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1675.72" y="-1277.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Notes each start and finish in the model’s</text>
<text xml:space="preserve" text-anchor="start" x="1692.38" y="-1259.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">folder, the print log, and a notification.</text>
</g>
<!-- publish -->
<g id="node13" class="node">
<title>publish</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1977.48,-1678 1657.44,-1678 1657.44,-1498 1977.48,-1498 1977.48,-1678"/>
<text xml:space="preserve" text-anchor="start" x="1751.31" y="-1609.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gallery publish</text>
<text xml:space="preserve" text-anchor="start" x="1700.04" y="-1588.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every 5 min and right after a finish</text>
<text xml:space="preserve" text-anchor="start" x="1685.31" y="-1567.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls the drafted card, fills in the details,</text>
<text xml:space="preserve" text-anchor="start" x="1736.15" y="-1549.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">and pushes it to the site.</text>
</g>
<!-- home -->
<g id="node14" class="node">
<title>home</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2556.93,-2646 2219.17,-2646 2219.17,-2466 2556.93,-2466 2556.93,-2646"/>
<text xml:space="preserve" text-anchor="start" x="2311.34" y="-2568" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home dashboard</text>
<text xml:space="preserve" text-anchor="start" x="2239.23" y="-2545" font-family="Arial" font-size="15.00" fill="#b6ecf7">The front door. Shows today, mail, texts, and</text>
<text xml:space="preserve" text-anchor="start" x="2288.41" y="-2527" font-family="Arial" font-size="15.00" fill="#b6ecf7">what each project needs next.</text>
</g>
<!-- appleapps -->
<g id="node15" class="node">
<title>appleapps</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-3337 0,-3337 0,-3157 320.04,-3157 320.04,-3337"/>
<text xml:space="preserve" text-anchor="start" x="30.51" y="-3259" font-family="Arial" font-size="20.00" fill="#f8fafc">Apple Calendar &amp; Reminders</text>
<text xml:space="preserve" text-anchor="start" x="32.02" y="-3236" font-family="Arial" font-size="15.00" fill="#cbd5e1">The calendar and the to&#45;do lists on the</text>
<text xml:space="preserve" text-anchor="start" x="137.08" y="-3218" font-family="Arial" font-size="15.00" fill="#cbd5e1">phone.</text>
</g>
<!-- iphone -->
<g id="node16" class="node">
<title>iphone</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="320.04,-3024 0,-3024 0,-2844 320.04,-2844 320.04,-3024"/>
<text xml:space="preserve" text-anchor="start" x="128.88" y="-2937" font-family="Arial" font-size="20.00" fill="#ffe0c2">iPhone</text>
<text xml:space="preserve" text-anchor="start" x="87.91" y="-2914" font-family="Arial" font-size="15.00" fill="#f9b27c">Obsidian, Reminders.</text>
</g>
<!-- docs -->
<g id="node17" class="node">
<title>docs</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1987.18,-808 1647.73,-808 1647.73,-628 1987.18,-628 1987.18,-808"/>
<text xml:space="preserve" text-anchor="start" x="1756.31" y="-748.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Find Anything</text>
<text xml:space="preserve" text-anchor="start" x="1761.83" y="-727.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="1695.73" y="-706.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Copies the text of every document in</text>
<text xml:space="preserve" text-anchor="start" x="1667.79" y="-688.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Documents into the vault so one search finds</text>
<text xml:space="preserve" text-anchor="start" x="1811.62" y="-670.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">it.</text>
</g>
<!-- heartbeat&#45;&gt;health -->
<g id="edge4" class="edge">
<title>heartbeat&#45;&gt;health</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1383.53,-2901.09C1395.1,-2893.81 1406.5,-2886.4 1417.39,-2879 1493.4,-2827.34 1532.83,-2830 1579.8,-2751 1624.73,-2675.42 1566.42,-2630.48 1613.15,-2556 1624.24,-2538.33 1638.34,-2522.17 1653.94,-2507.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1655.66,-2509.57 1659.46,-2502.59 1652.14,-2505.68 1655.66,-2509.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1445.39,-2860.13 1445.39,-2882.93 1579.8,-2882.93 1579.8,-2860.13 1445.39,-2860.13"/>
<text xml:space="preserve" text-anchor="start" x="1448.39" y="-2865.93" font-family="Arial" font-size="14.00" fill="#c9c9c9">disk and drive health</text>
</g>
<!-- chiprelay&#45;&gt;homeplugin -->
<g id="edge5" class="edge">
<title>chiprelay&#45;&gt;homeplugin</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M835.07,-2701C903.67,-2701 984.03,-2701 1053.72,-2701"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1053.4,-2703.63 1060.9,-2701 1053.4,-2698.38 1053.4,-2703.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="895.36,-2701 895.36,-2723.8 1001.78,-2723.8 1001.78,-2701 895.36,-2701"/>
<text xml:space="preserve" text-anchor="start" x="898.36" y="-2706.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queues a button</text>
</g>
<!-- launchd&#45;&gt;unread -->
<g id="edge6" class="edge">
<title>launchd&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M710.25,-2321.19C812.24,-2053.26 1128.75,-1237.76 1445.39,-586 1512.65,-447.54 1510.68,-397.86 1613.15,-283 1628.56,-265.73 1646.37,-249.36 1664.93,-234.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1666.34,-236.5 1670.56,-229.77 1663.06,-232.4 1666.34,-236.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1184.4,-1517.97 1184.4,-1540.77 1262.76,-1540.77 1262.76,-1517.97 1184.4,-1517.97"/>
<text xml:space="preserve" text-anchor="start" x="1187.4" y="-1523.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- homeplugin&#45;&gt;calendar -->
<g id="edge7" class="edge">
<title>homeplugin&#45;&gt;calendar</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1383.58,-2701C1459.43,-2701 1550.68,-2701 1629.81,-2701"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1629.36,-2703.63 1636.86,-2701 1629.36,-2698.38 1629.36,-2703.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1490.53,-2701 1490.53,-2723.8 1534.66,-2723.8 1534.66,-2701 1490.53,-2701"/>
<text xml:space="preserve" text-anchor="start" x="1493.53" y="-2706.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- homeplugin&#45;&gt;health -->
<g id="edge8" class="edge">
<title>homeplugin&#45;&gt;health</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1383.58,-2623.09C1465.43,-2582.99 1565.21,-2534.1 1648.33,-2493.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1649.31,-2495.82 1654.89,-2490.16 1647,-2491.11 1649.31,-2495.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1495.2,-2590.5 1495.2,-2613.3 1529.99,-2613.3 1529.99,-2590.5 1495.2,-2590.5"/>
<text xml:space="preserve" text-anchor="start" x="1498.2" y="-2596.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">daily</text>
</g>
<!-- homeplugin&#45;&gt;texts -->
<g id="edge10" class="edge">
<title>homeplugin&#45;&gt;texts</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1230.21,-2611.04C1251.27,-2287.03 1330.15,-1181.32 1445.39,-848.2 1492.22,-712.82 1515.58,-677.87 1613.15,-573 1629.11,-555.85 1647.38,-539.48 1666.29,-524.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1667.79,-526.49 1672.05,-519.78 1664.54,-522.37 1667.79,-526.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1473.41,-848.2 1473.41,-871 1551.77,-871 1551.77,-848.2 1473.41,-848.2"/>
<text xml:space="preserve" text-anchor="start" x="1476.41" y="-854" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- homeplugin&#45;&gt;mailtriage -->
<g id="edge15" class="edge">
<title>homeplugin&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1282.88,-2611.24C1351.81,-2510.8 1474.78,-2348.42 1613.15,-2243.2 1777.63,-2118.12 1905.87,-2209.23 2035.12,-2048 2227.16,-1808.42 2343.56,-842.82 2377,-527.87"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2379.56,-528.59 2377.74,-520.86 2374.34,-528.04 2379.56,-528.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1759.59,-2243.2 1759.59,-2266 1875.33,-2266 1875.33,-2243.2 1759.59,-2243.2"/>
<text xml:space="preserve" text-anchor="start" x="1762.59" y="-2249" font-family="Arial" font-size="14.00" fill="#c9c9c9">launch and Home</text>
</g>
<!-- homeplugin&#45;&gt;ocr -->
<g id="edge11" class="edge">
<title>homeplugin&#45;&gt;ocr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1236.22,-2611.11C1257.2,-2480.95 1312.3,-2238.54 1445.39,-2082.2 1499.1,-2019.1 1577.43,-1971.99 1648.29,-1939.01"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1649.31,-1941.43 1655.04,-1935.92 1647.13,-1936.66 1649.31,-1941.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1469.52,-2082.2 1469.52,-2105 1555.66,-2105 1555.66,-2082.2 1469.52,-2082.2"/>
<text xml:space="preserve" text-anchor="start" x="1472.52" y="-2088" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- homeplugin&#45;&gt;machine -->
<g id="edge12" class="edge">
<title>homeplugin&#45;&gt;machine</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1229.51,-2611.05C1243.37,-2399.6 1292.27,-1856.85 1445.39,-1433.2 1496.29,-1292.37 1510.38,-1249.92 1613.15,-1141 1625.36,-1128.06 1639.07,-1115.77 1653.45,-1104.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1654.83,-1106.52 1659.12,-1099.83 1651.6,-1102.39 1654.83,-1106.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1490.53,-1433.2 1490.53,-1456 1534.66,-1456 1534.66,-1433.2 1490.53,-1433.2"/>
<text xml:space="preserve" text-anchor="start" x="1493.53" y="-1439" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- homeplugin&#45;&gt;printlog -->
<g id="edge13" class="edge">
<title>homeplugin&#45;&gt;printlog</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1234.66,-2611.11C1256.65,-2434.31 1317.53,-2031.16 1445.39,-1716.2 1498.98,-1584.18 1515.92,-1547.16 1613.15,-1443 1629.13,-1425.88 1647.43,-1409.52 1666.34,-1394.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1667.84,-1396.54 1672.11,-1389.83 1664.59,-1392.41 1667.84,-1396.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1469.52,-1716.2 1469.52,-1739 1555.66,-1739 1555.66,-1716.2 1469.52,-1716.2"/>
<text xml:space="preserve" text-anchor="start" x="1472.52" y="-1722" font-family="Arial" font-size="14.00" fill="#c9c9c9">every minute</text>
</g>
<!-- homeplugin&#45;&gt;publish -->
<g id="edge14" class="edge">
<title>homeplugin&#45;&gt;publish</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1237.32,-2611.1C1261.25,-2461.5 1322.01,-2155.19 1445.39,-1925.2 1497.8,-1827.49 1589.92,-1743.54 1669.26,-1683.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1670.52,-1686.17 1674.96,-1679.58 1667.38,-1681.96 1670.52,-1686.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1473.41,-1925.2 1473.41,-1948 1551.77,-1948 1551.77,-1925.2 1473.41,-1925.2"/>
<text xml:space="preserve" text-anchor="start" x="1476.41" y="-1931" font-family="Arial" font-size="14.00" fill="#c9c9c9">every 5 min</text>
</g>
<!-- homeplugin&#45;&gt;docs -->
<g id="edge9" class="edge">
<title>homeplugin&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1224.32,-2611.38C1226.28,-2366.12 1249.95,-1666.3 1445.39,-1128.2 1493.51,-995.69 1515.94,-961.1 1613.15,-859 1628.11,-843.29 1645.09,-828.28 1662.69,-814.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1664.14,-816.53 1668.44,-809.84 1660.91,-812.39 1664.14,-816.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1490.53,-1128.2 1490.53,-1151 1534.66,-1151 1534.66,-1128.2 1490.53,-1128.2"/>
<text xml:space="preserve" text-anchor="start" x="1493.53" y="-1134" font-family="Arial" font-size="14.00" fill="#c9c9c9">hourly</text>
</g>
<!-- calendar&#45;&gt;home -->
<g id="edge16" class="edge">
<title>calendar&#45;&gt;home</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1994.86,-2656.02C2063.08,-2638.62 2141.03,-2618.74 2209.37,-2601.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2209.83,-2603.9 2216.45,-2599.51 2208.53,-2598.82 2209.83,-2603.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2055.12,-2637.18 2055.12,-2659.98 2159.17,-2659.98 2159.17,-2637.18 2055.12,-2637.18"/>
<text xml:space="preserve" text-anchor="start" x="2058.12" y="-2642.98" font-family="Arial" font-size="14.00" fill="#c9c9c9">today’s events</text>
</g>
<!-- health&#45;&gt;home -->
<g id="edge17" class="edge">
<title>health&#45;&gt;home</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1977.22,-2451.49C2049.39,-2469.89 2135.06,-2491.74 2209.36,-2510.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2208.45,-2513.16 2216.37,-2512.47 2209.75,-2508.08 2208.45,-2513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2060.95,-2496.49 2060.95,-2519.29 2153.33,-2519.29 2153.33,-2496.49 2060.95,-2496.49"/>
<text xml:space="preserve" text-anchor="start" x="2063.95" y="-2502.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">Health Report</text>
</g>
<!-- unread&#45;&gt;mailtriage -->
<g id="edge18" class="edge">
<title>unread&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1977.22,-218.97C2051.42,-256.82 2139.89,-301.94 2215.61,-340.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2214.21,-342.79 2222.08,-343.86 2216.59,-338.11 2214.21,-342.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2076.52,-308.97 2076.52,-331.77 2137.76,-331.77 2137.76,-308.97 2076.52,-308.97"/>
<text xml:space="preserve" text-anchor="start" x="2079.52" y="-314.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- texts&#45;&gt;mailtriage -->
<g id="edge19" class="edge">
<title>texts&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1981.39,-428C2054.42,-428 2140.6,-428 2214.7,-428"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2214.55,-430.63 2222.05,-428 2214.55,-425.38 2214.55,-430.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2074.57,-428 2074.57,-450.8 2139.71,-450.8 2139.71,-428 2074.57,-428"/>
<text xml:space="preserve" text-anchor="start" x="2077.57" y="-433.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">new texts</text>
</g>
<!-- appleapps&#45;&gt;calendar -->
<g id="edge2" class="edge">
<title>appleapps&#45;&gt;calendar</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.84,-3273.27C568.48,-3306.53 1058.31,-3339.92 1417.39,-3161 1575.86,-3082.04 1697.77,-2909.54 1763.14,-2799.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1765.24,-2801.28 1766.79,-2793.49 1760.71,-2798.61 1765.24,-2801.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="924.94,-3291.96 924.94,-3314.76 972.19,-3314.76 972.19,-3291.96 924.94,-3291.96"/>
<text xml:space="preserve" text-anchor="start" x="927.94" y="-3297.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">events</text>
</g>
<!-- appleapps&#45;&gt;iphone -->
<g id="edge1" class="edge">
<title>appleapps&#45;&gt;iphone</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-3157.02C160.02,-3118.6 160.02,-3073.61 160.02,-3034.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="162.65,-3034.22 160.02,-3026.72 157.4,-3034.22 162.65,-3034.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="134.83,-3079.1 134.83,-3101.9 156.41,-3101.9 156.41,-3079.1 134.83,-3079.1"/>
<text xml:space="preserve" text-anchor="start" x="137.83" y="-3084.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">on</text>
</g>
<!-- iphone&#45;&gt;chiprelay -->
<g id="edge3" class="edge">
<title>iphone&#45;&gt;chiprelay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.92,-2861.87C379.03,-2835.04 446.28,-2804.52 506.19,-2777.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="507.24,-2779.73 512.99,-2774.24 505.07,-2774.95 507.24,-2779.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="380.04,-2831.45 380.04,-2854.25 455.32,-2854.25 455.32,-2831.45 380.04,-2831.45"/>
<text xml:space="preserve" text-anchor="start" x="383.04" y="-2837.25" font-family="Arial" font-size="14.00" fill="#c9c9c9">button taps</text>
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