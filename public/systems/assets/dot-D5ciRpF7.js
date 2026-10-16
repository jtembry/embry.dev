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
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Jots things down, loads the scanner, and taps<BR/>what needs him.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    intake [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">What comes in</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Email, texts, paper, and quick notes. Each<BR/>one lands in the in-tray without being<BR/>retyped.</FONT></TD></TR></TABLE>>,
        likec4_id=intake,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> intake [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">mail, texts, paper, notes</FONT></TD></TR></TABLE>>,
        likec4_id=b8gvk8,
        style=dashed];
    assistants [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">AI assistant</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Claude Code · Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sorts what comes in, drafts replies, and<BR/>builds the machinery itself. Works from<BR/>written procedures, not memory.</FONT></TD></TR></TABLE>>,
        likec4_id=assistants,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    assistants -> intake [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sorts mail and texts</FONT></TD></TR></TABLE>>,
        likec4_id=kn05kh,
        style=dashed];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    assistants -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">files it, remembers it</FONT></TD></TR></TABLE>>,
        likec4_id="1rj2lhz",
        style=dashed];
    workshop [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Workshop</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">3D printer · embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every print is logged, the printer camera<BR/>streams live, and finished prints post<BR/>themselves to the website.</FONT></TD></TR></TABLE>>,
        likec4_id=workshop,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workshop -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">print history</FONT></TD></TR></TABLE>>,
        likec4_id="1j4qs8l",
        minlen=1,
        style=dashed];
    intake -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">lands in the in-tray</FONT></TD></TR></TABLE>>,
        likec4_id=lgc7rg,
        style=dashed];
    fieldagent [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Field Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">iPhone app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JT’s phone app: one screen with what needs<BR/>him today, plus a chat with the assistant<BR/>from anywhere.</FONT></TD></TR></TABLE>>,
        likec4_id=fieldAgent,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vault -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs doing</FONT></TD></TR></TABLE>>,
        likec4_id="1klyicr",
        style=dashed];
    backups [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Backups</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Notes go to GitHub every hour. The whole Mac<BR/>goes to Time Machine on the Pi, with a second<BR/>disk that can leave the house.</FONT></TD></TR></TABLE>>,
        likec4_id=backups,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vault -> backups [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every hour</FONT></TD></TR></TABLE>>,
        likec4_id=ekg4q5,
        minlen=1,
        style=dashed];
    fieldagent -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">on the phone, anywhere</FONT></TD></TR></TABLE>>,
        likec4_id="10fesnj",
        style=dashed];
    fieldagent -> assistants [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">chat, Allow / Deny</FONT></TD></TR></TABLE>>,
        likec4_id=biflw6,
        style=dashed];
}
`;case`intakeView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=intakeView,
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
    subgraph cluster_intake {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>WHAT COMES IN</B></FONT>>,
            likec4_depth=1,
            likec4_id=intake,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        scan [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Paper</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Press Scan on the scanner; the page becomes a<BR/>searchable PDF and a note to file.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.scan",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        capture [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Notes &amp; to-dos</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every way a thought gets written down: a<BR/>quick note, the daily journal, a phone<BR/>reminder, or a finished AI chat.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.capture",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mail [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email &amp; Texts</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Two inboxes and iMessage become one short<BR/>list of what needs action.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.mail",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Jots things down, loads the scanner, and taps<BR/>what needs him.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">loads paper</FONT></TD></TR></TABLE>>,
        likec4_id="194jjll",
        style=dashed];
    jt -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">jots things down</FONT></TD></TR></TABLE>>,
        likec4_id="84kpb6",
        style=dashed];
    mailboxes [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mailboxes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Gmail · iCloud Mail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Two inboxes, read straight from the mail<BR/>servers.</FONT></TD></TR></TABLE>>,
        likec4_id=mailboxes,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    mailboxes -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id="1crmmm3",
        style=dashed];
    appleapps [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Calendar &amp; Reminders</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Apple</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">The calendar and the to-do lists on the<BR/>phone.</FONT></TD></TR></TABLE>>,
        likec4_id=appleApps,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    appleapps -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new reminders</FONT></TD></TR></TABLE>>,
        likec4_id=m7rvpi,
        style=dashed];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vault -> scan [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks JT</FONT></TD></TR></TABLE>>,
        likec4_id=rf3ozh,
        style=dashed];
    vault -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="18dngx2",
        style=dashed];
    assistants [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">AI assistant</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Claude Code · Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sorts what comes in, drafts replies, and<BR/>builds the machinery itself. Works from<BR/>written procedures, not memory.</FONT></TD></TR></TABLE>>,
        likec4_id=assistants,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    assistants -> capture [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=bu6xqz,
        style=dashed];
    assistants -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=ycjeie,
        style=dashed];
    fieldagent [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Field Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">iPhone app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JT’s phone app: one screen with what needs<BR/>him today, plus a chat with the assistant<BR/>from anywhere.</FONT></TD></TR></TABLE>>,
        likec4_id=fieldAgent,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    fieldagent -> mail [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">when the phone opens</FONT></TD></TR></TABLE>>,
        likec4_id=e09s7e,
        style=dashed];
    scan -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=saonwd,
        style=dashed];
    capture -> appleapps [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="2i6286",
        style=dashed];
    capture -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1mzrgrq",
        style=dashed];
    mail -> mailboxes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">archive the noise</FONT></TD></TR></TABLE>>,
        likec4_id="64smuz",
        style=dashed];
    mail -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">lands in the in-tray</FONT></TD></TR></TABLE>>,
        likec4_id="18a68x7",
        style=dashed];
    mail -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">needs action</FONT></TD></TR></TABLE>>,
        likec4_id="1b3adre",
        style=dashed];
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
    subgraph cluster_mail {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EMAIL &amp; TEXTS</B></FONT>>,
            likec4_depth=1,
            likec4_id="intake.mail",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        unread [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="intake.mail",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Unread mail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">every 5 min · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Pulls new mail from both inboxes.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.mail.unread",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        texts [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="intake.mail",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">New texts</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">every 5 min · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Copies new iMessages. Login codes are<BR/>skipped.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.mail.texts",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mailtriage [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="intake.mail",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mail &amp; text triage</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">AI · a few times a day</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Archives the noise and lists everything else<BR/>under Needs action.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.mail.mailTriage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        mailarchive [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group="intake.mail",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mail archive</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">Documents/mail-archive</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">A raw copy of every thread JT chose to keep.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.mail.mailArchive",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    assistants [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">AI assistant</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Claude Code · Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sorts what comes in, drafts replies, and<BR/>builds the machinery itself. Works from<BR/>written procedures, not memory.</FONT></TD></TR></TABLE>>,
        likec4_id=assistants,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    assistants -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1pyizjx",
        minlen=1,
        style=dashed];
    fieldagent [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Field Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">iPhone app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JT’s phone app: one screen with what needs<BR/>him today, plus a chat with the assistant<BR/>from anywhere.</FONT></TD></TR></TABLE>>,
        likec4_id=fieldAgent,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mailboxes [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mailboxes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Gmail · iCloud Mail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Two inboxes, read straight from the mail<BR/>servers.</FONT></TD></TR></TABLE>>,
        likec4_id=mailboxes,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    fieldagent -> mailboxes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">archive, delete</FONT></TD></TR></TABLE>>,
        likec4_id=v59457,
        minlen=0,
        style=dashed,
        weight=3];
    fieldagent -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">when the phone opens</FONT></TD></TR></TABLE>>,
        likec4_id="1bartxd",
        style=dashed];
    mailboxes -> unread [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id=k4k1h8,
        style=dashed];
    unread -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new mail</FONT></TD></TR></TABLE>>,
        likec4_id=j6rz8m,
        style=dashed,
        weight=3];
    texts -> mailtriage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new texts</FONT></TD></TR></TABLE>>,
        likec4_id=b7zo81,
        minlen=1,
        style=dashed,
        weight=3];
    mailtriage -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">needs action</FONT></TD></TR></TABLE>>,
        likec4_id="367eg1",
        style=dashed];
    mailtriage -> mailboxes [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">archive the noise</FONT></TD></TR></TABLE>>,
        likec4_id="188bonk",
        style=dashed];
    mailtriage -> mailarchive [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">kept threads</FONT></TD></TR></TABLE>>,
        likec4_id=v7xzms,
        minlen=1,
        style=dashed,
        weight=3];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mailtriage -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">lands in the in-tray</FONT></TD></TR></TABLE>>,
        likec4_id=jsr5s,
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
    subgraph cluster_scan {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PAPER</B></FONT>>,
            likec4_depth=1,
            likec4_id="intake.scan",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        scanner [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="intake.scan",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Scanner</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Brother ADS-1350W</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Feeds paper. Its Scan button sends the pages<BR/>straight to the Mac.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.scan.scanner",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        rename [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="intake.scan",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Name and file it</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">one dialog, during filing</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Proposes a real file name and a folder from<BR/>what the page says. Ignore it to keep the old<BR/>name.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.scan.rename",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ocr [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="intake.scan",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Make it searchable</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every minute · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reads the text of each new scan and parks the<BR/>PDF in an ingest folder with a note.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.scan.ocr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Jots things down, loads the scanner, and taps<BR/>what needs him.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> scanner [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">loads paper</FONT></TD></TR></TABLE>>,
        likec4_id=vrnbch,
        minlen=1,
        style=dashed];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vault -> rename [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks JT</FONT></TD></TR></TABLE>>,
        likec4_id="1pi775v",
        style=dashed];
    scanner -> ocr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">scanned pages</FONT></TD></TR></TABLE>>,
        likec4_id="1kp8rhu",
        style=dashed,
        weight=3];
    rename -> ocr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">names the PDF</FONT></TD></TR></TABLE>>,
        likec4_id="1dxmves",
        style=dashed,
        weight=3];
    ocr -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1x45ukt",
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
    subgraph cluster_capture {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>NOTES &amp; TO-DOS</B></FONT>>,
            likec4_depth=1,
            likec4_id="intake.capture",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        quick [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Quick note</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">one button in Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Type a thought, press save, it is in the<BR/>in-tray.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.capture.quick",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        journal [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Journal to-dos</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">daily note</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">To-dos jotted in the day’s journal get swept<BR/>to the right project.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.capture.journal",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        reminders [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Phone reminders</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">two-way sync</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Open to-dos show up as phone reminders; new<BR/>reminders come back into the vault.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.capture.reminders",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        distill [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat distill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">AI skill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Boils a finished AI chat down to a few<BR/>lasting notes, then the chat can go.</FONT></TD></TR></TABLE>>,
            likec4_id="intake.capture.distill",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    appleapps [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Calendar &amp; Reminders</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Apple</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">The calendar and the to-do lists on the<BR/>phone.</FONT></TD></TR></TABLE>>,
        likec4_id=appleApps,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    appleapps -> reminders [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">new reminders</FONT></TD></TR></TABLE>>,
        likec4_id="1mzarx1",
        style=dashed];
    assistants [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">AI assistant</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Claude Code · Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sorts what comes in, drafts replies, and<BR/>builds the machinery itself. Works from<BR/>written procedures, not memory.</FONT></TD></TR></TABLE>>,
        likec4_id=assistants,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    assistants -> distill [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=a99f1y,
        minlen=1,
        style=dashed];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    quick -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">lands in the in-tray</FONT></TD></TR></TABLE>>,
        likec4_id=qxmagd,
        style=dashed];
    journal -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">swept by filing</FONT></TD></TR></TABLE>>,
        likec4_id="1qscmuh",
        minlen=1,
        style=dashed];
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Jots things down, loads the scanner, and taps<BR/>what needs him.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> quick [arrowhead=normal,
        lhead=cluster_capture,
        likec4_id="84kpb6",
        minlen=1,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">jots things down</FONT></TD></TR></TABLE>>];
    vault -> reminders [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="14nwgdx",
        style=dashed];
    reminders -> appleapps [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="1stiogl",
        style=dashed];
    reminders -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">lands in the in-tray</FONT></TD></TR></TABLE>>,
        likec4_id="105v8tx",
        style=dashed];
    distill -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">lands in the in-tray</FONT></TD></TR></TABLE>>,
        likec4_id=zpnbuz,
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
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>THE VAULT</B></FONT>>,
            likec4_depth=1,
            likec4_id=vault,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        health [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Health check</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">daily · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Looks for broken links, stale projects, and<BR/>quiet machines; writes the Health Report.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.health",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ingest [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">In-tray</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Every capture lands here first.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.ingest",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        docs [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Documents</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">Mac · hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">The text of every document, so one search<BR/>finds it, with links that open the original.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.docs",
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Filing</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">AI skill</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reads the in-tray and files each item where<BR/>it belongs.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.triage",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        para [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=vault,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Projects &amp; Areas</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Things with a finish line, and ongoing<BR/>duties.</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Ideas</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Ideas worth keeping, one per note, linked<BR/>together.</FONT></TD></TR></TABLE>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Memory</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">What the assistant needs to remember between<BR/>sessions.</FONT></TD></TR></TABLE>>,
            likec4_id="vault.memory",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    intake [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">What comes in</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Email, texts, paper, and quick notes. Each<BR/>one lands in the in-tray without being<BR/>retyped.</FONT></TD></TR></TABLE>>,
        likec4_id=intake,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    intake -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">lands in the in-tray</FONT></TD></TR></TABLE>>,
        likec4_id="1qsb1q8",
        style=dashed];
    intake -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">searchable PDF</FONT></TD></TR></TABLE>>,
        likec4_id="78bazd",
        style=dashed];
    intake -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">swept by filing</FONT></TD></TR></TABLE>>,
        likec4_id="1yxm6pa",
        style=dashed];
    assistants [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">AI assistant</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Claude Code · Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sorts what comes in, drafts replies, and<BR/>builds the machinery itself. Works from<BR/>written procedures, not memory.</FONT></TD></TR></TABLE>>,
        likec4_id=assistants,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    assistants -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs filing</FONT></TD></TR></TABLE>>,
        likec4_id=zlogid,
        style=dashed];
    assistants -> memory [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">remembers in</FONT></TD></TR></TABLE>>,
        likec4_id="150z0d4",
        style=dashed];
    workshop [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Workshop</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">3D printer · embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Every print is logged, the printer camera<BR/>streams live, and finished prints post<BR/>themselves to the website.</FONT></TD></TR></TABLE>>,
        likec4_id=workshop,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workshop -> docs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">print history</FONT></TD></TR></TABLE>>,
        likec4_id=qm8qww,
        minlen=1,
        style=dashed];
    fieldagent [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Field Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">iPhone app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JT’s phone app: one screen with what needs<BR/>him today, plus a chat with the assistant<BR/>from anywhere.</FONT></TD></TR></TABLE>>,
        likec4_id=fieldAgent,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    health -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Health Report</FONT></TD></TR></TABLE>>,
        likec4_id="1to7ou1",
        style=dashed];
    fieldagent -> health [arrowhead=normal,
        lhead=cluster_vault,
        likec4_id=g19w6j,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads</FONT></TD></TR></TABLE>>];
    fieldagent -> ingest [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: note with full text</FONT></TD></TR></TABLE>>,
        likec4_id="2z1c7b",
        style=dashed];
    ingest -> triage [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">read by</FONT></TD></TR></TABLE>>,
        likec4_id="1xi1of8",
        style=dashed,
        weight=2];
    backups [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Backups</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Notes go to GitHub every hour. The whole Mac<BR/>goes to Time Machine on the Pi, with a second<BR/>disk that can leave the house.</FONT></TD></TR></TABLE>>,
        likec4_id=backups,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    triage -> intake [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks JT</FONT></TD></TR></TABLE>>,
        likec4_id=oshnou,
        style=dashed];
    triage -> para [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="1s5a7pg",
        style=dashed,
        weight=2];
    triage -> zettel [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">ideas</FONT></TD></TR></TABLE>>,
        likec4_id=xqzr8w,
        minlen=1,
        style=dashed,
        weight=2];
    triage -> memory [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">logs the run</FONT></TD></TR></TABLE>>,
        likec4_id=o1lhhj,
        style=dashed,
        weight=2];
    para -> intake [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">open to-dos</FONT></TD></TR></TABLE>>,
        likec4_id="6u7fog",
        style=dashed];
    para -> fieldagent [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">next steps</FONT></TD></TR></TABLE>>,
        likec4_id="82nl1j",
        style=dashed];
    memory -> backups [arrowhead=normal,
        likec4_id=ekg4q5,
        ltail=cluster_vault,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every hour</FONT></TD></TR></TABLE>>];
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
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AI ASSISTANT</B></FONT>>,
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
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Claude Code</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">terminal inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Main assistant. Builds and fixes the<BR/>machinery, runs the skills.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.claude",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        grok [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=assistants,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">terminal inside Obsidian</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Second assistant. Same vault, same skills,<BR/>same rules.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.grok",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        skills [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=assistants,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Written procedures</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">System/Skills</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Step-by-step instructions both assistants<BR/>follow: file notes, distill a chat, lint the<BR/>vault, plain style.</FONT></TD></TR></TABLE>>,
            likec4_id="assistants.skills",
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
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Jots things down, loads the scanner, and taps<BR/>what needs him.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> claude [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">works with</FONT></TD></TR></TABLE>>,
        likec4_id=cksah3,
        minlen=1,
        style=dashed];
    fieldagent [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Field Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">iPhone app</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">JT’s phone app: one screen with what needs<BR/>him today, plus a chat with the assistant<BR/>from anywhere.</FONT></TD></TR></TABLE>>,
        likec4_id=fieldAgent,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    fieldagent -> claude [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id="9eo2oy",
        style=dashed];
    fieldagent -> grok [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id="15d3qi1",
        style=dashed];
    intake [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">What comes in</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Email, texts, paper, and quick notes. Each<BR/>one lands in the in-tray without being<BR/>retyped.</FONT></TD></TR></TABLE>>,
        likec4_id=intake,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    claude -> intake [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1h0xnmt",
        minlen=1,
        style=dashed];
    claude -> skills [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">follows</FONT></TD></TR></TABLE>>,
        likec4_id="1118y1e",
        style=dashed,
        weight=2];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    claude -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs filing</FONT></TD></TR></TABLE>>,
        likec4_id="1u6te6b",
        style=dashed];
    grok -> skills [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">follows</FONT></TD></TR></TABLE>>,
        likec4_id="1vmpba1",
        style=dashed,
        weight=2];
    grok -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs filing</FONT></TD></TR></TABLE>>,
        likec4_id="1k42uiw",
        style=dashed];
    skills -> vault [arrowhead=normal,
        likec4_id="1rj2lhz",
        ltail=cluster_assistants,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">remembers in</FONT></TD></TR></TABLE>>];
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
        mission [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mission Control</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">the front screen</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Today’s calendar, mail and texts that need<BR/>action, and the next step for each project.<BR/>Tap a row to act on it.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.mission",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        app [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Claude or Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Ask the assistant anything; the reply fills<BR/>in as it is written.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.app",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        approval [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Allow / Deny</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Before the assistant edits a file or runs a<BR/>command, the phone buzzes and asks.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.approval",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        relay [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=fieldAgent,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Home base</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">small service on the Mac</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Passes each phone message to the assistant,<BR/>streams the answer back, and keeps Mission<BR/>Control live. Phone and Mac talk over a<BR/>private network.</FONT></TD></TR></TABLE>>,
            likec4_id="fieldAgent.relay",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    jt [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">JT</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Jots things down, loads the scanner, and taps<BR/>what needs him.</FONT></TD></TR></TABLE>>,
        likec4_id=jt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    jt -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks</FONT></TD></TR></TABLE>>,
        likec4_id=kyv4r1,
        style=dashed];
    jt -> app [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks</FONT></TD></TR></TABLE>>,
        likec4_id="8fesgw",
        style=dashed];
    jt -> approval [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">taps</FONT></TD></TR></TABLE>>,
        likec4_id="1ri0eiu",
        style=dashed];
    appleapps [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Calendar &amp; Reminders</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Apple</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">The calendar and the to-do lists on the<BR/>phone.</FONT></TD></TR></TABLE>>,
        likec4_id=appleApps,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    appleapps -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">today’s events</FONT></TD></TR></TABLE>>,
        likec4_id=q8284p,
        minlen=1,
        style=dashed];
    intake [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">What comes in</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Email, texts, paper, and quick notes. Each<BR/>one lands in the in-tray without being<BR/>retyped.</FONT></TD></TR></TABLE>>,
        likec4_id=intake,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    intake -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">needs action</FONT></TD></TR></TABLE>>,
        likec4_id=rm2nkf,
        style=dashed];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vault -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1b7jea1",
        style=dashed];
    mission -> jt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">what needs action</FONT></TD></TR></TABLE>>,
        likec4_id="1uj5til",
        style=dashed];
    mission -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">triage button: note with full text</FONT></TD></TR></TABLE>>,
        likec4_id="1xfjqdl",
        style=dashed];
    mission -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">button taps</FONT></TD></TR></TABLE>>,
        likec4_id=ul1urp,
        style=dashed];
    app -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">messages</FONT></TD></TR></TABLE>>,
        likec4_id=cdaa0,
        style=dashed,
        weight=2];
    approval -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Allow or Deny</FONT></TD></TR></TABLE>>,
        likec4_id="1r3tmem",
        style=dashed];
    relay -> intake [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">when the phone opens</FONT></TD></TR></TABLE>>,
        likec4_id=h0siqo,
        style=dashed];
    relay -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads</FONT></TD></TR></TABLE>>,
        likec4_id="1bm4nvq",
        style=dashed];
    relay -> mission [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">live updates</FONT></TD></TR></TABLE>>,
        likec4_id=rsth,
        style=dashed];
    relay -> approval [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">asks first</FONT></TD></TR></TABLE>>,
        likec4_id="1jq5o6m",
        style=dashed];
    assistants [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">AI assistant</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Claude Code · Grok</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sorts what comes in, drafts replies, and<BR/>builds the machinery itself. Works from<BR/>written procedures, not memory.</FONT></TD></TR></TABLE>>,
        likec4_id=assistants,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    relay -> assistants [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">one turn per message</FONT></TD></TR></TABLE>>,
        likec4_id=o3kmuz,
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
        vaultpush [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Vault backup</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">hourly · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Commits the whole vault, plus a snapshot of<BR/>the Mac’s setup, to a private GitHub repo.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.vaultPush",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        timemachine [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=backups,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Time Machine</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">macOS</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Full Mac backup, history included.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.timeMachine",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        tmshare [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group=backups,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Backup disk</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">brainpi · 4 TB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Where the Mac backs itself up, encrypted.<BR/>Mirrored to a second disk every night.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.tmShare",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        usb [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group=backups,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">USB drive</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">A second copy that can leave the house.</FONT></TD></TR></TABLE>>,
            likec4_id="backups.usb",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    vault -> vaultpush [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">every hour</FONT></TD></TR></TABLE>>,
        likec4_id=ga7y4n,
        minlen=1,
        style=dashed];
    github [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">GitHub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Holds the private vault backup and the<BR/>website code; builds and hosts embry.dev.</FONT></TD></TR></TABLE>>,
        likec4_id=github,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    vaultpush -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">private repo</FONT></TD></TR></TABLE>>,
        likec4_id=uer62g,
        minlen=1,
        style=dashed];
    timemachine -> tmshare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">backs up to</FONT></TD></TR></TABLE>>,
        likec4_id="8ggci6",
        minlen=1,
        style=dashed];
    timemachine -> usb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">second copy</FONT></TD></TR></TABLE>>,
        likec4_id="11c86v2",
        minlen=1,
        style=dashed];
}
`;case`workshopView`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=workshopView,
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
    subgraph cluster_workshop {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>WORKSHOP</B></FONT>>,
            likec4_depth=1,
            likec4_id=workshop,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        printing [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">3D printing</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Bambu Lab P2S</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Logs every print and drafts a gallery card<BR/>when one finishes.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.printing",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        site [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Astro site on GitHub Pages</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Public site: the studio, the live printer<BR/>camera, and the print gallery.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.site",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    cloudflare [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cloudflare</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Carries the printer camera from home to the<BR/>public site without opening the home network.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudflare,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    cloudflare -> site [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">serves</FONT></TD></TR></TABLE>>,
        likec4_id=yevmvb,
        style=dashed];
    printing -> cloudflare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera stream</FONT></TD></TR></TABLE>>,
        likec4_id=lvln31,
        style=dashed];
    printing -> site [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gallery card</FONT></TD></TR></TABLE>>,
        likec4_id=g1wle8,
        minlen=0,
        style=dashed,
        weight=2];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    printing -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">print history</FONT></TD></TR></TABLE>>,
        likec4_id="1pxv6ve",
        minlen=1,
        style=dashed];
    github [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">GitHub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Holds the private vault backup and the<BR/>website code; builds and hosts embry.dev.</FONT></TD></TR></TABLE>>,
        likec4_id=github,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    site -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs on</FONT></TD></TR></TABLE>>,
        likec4_id="1ea1csv",
        minlen=1,
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
    subgraph cluster_printing {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>3D PRINTING</B></FONT>>,
            likec4_depth=1,
            likec4_id="workshop.printing",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        printer [color="#7E451D",
            fillcolor="#A35829",
            fontcolor="#FFE0C2",
            group="workshop.printing",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Printer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#f9b27c">Bambu Lab P2S</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f9b27c">Reports its status and camera over the home<BR/>network.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.printing.printer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        printlog [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="workshop.printing",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Print log</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · every minute · free</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Notes each start and finish in the model’s<BR/>folder and sends a notification.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.printing.printLog",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        camera [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="workshop.printing",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Camera relay</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">brainpi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Takes the printer camera and serves it as a<BR/>video stream.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.printing.camera",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        library [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group="workshop.printing",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Print library</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">Documents/3d_printing</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">One folder per model: files, notes, photos,<BR/>and its print history.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.printing.library",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        printwatch [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="workshop.printing",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Finish watcher</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">brainpi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">When a print finishes, grabs a bed photo and<BR/>drafts a gallery card.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.printing.printWatch",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        publish [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="workshop.printing",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gallery publish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Mac · after each finish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Fills in the drafted card and pushes it to<BR/>the website.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.printing.publish",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    printer -> printlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">start and finish</FONT></TD></TR></TABLE>>,
        likec4_id="1lub7eh",
        style=dashed,
        weight=3];
    printer -> camera [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera feed</FONT></TD></TR></TABLE>>,
        likec4_id="13a9qs5",
        style=dashed,
        weight=3];
    printer -> printwatch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">finished</FONT></TD></TR></TABLE>>,
        likec4_id="1ki3nro",
        style=dashed];
    printlog -> library [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">writes history</FONT></TD></TR></TABLE>>,
        likec4_id="1h2r1pc",
        minlen=1,
        style=dashed,
        weight=3];
    vault [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">The vault</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Obsidian · plain text files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">One place for everything: notes, projects,<BR/>documents, and what the assistant remembers.</FONT></TD></TR></TABLE>>,
        likec4_id=vault,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    printlog -> vault [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">print history</FONT></TD></TR></TABLE>>,
        likec4_id="1kq0jgx",
        minlen=1,
        style=dashed];
    camera -> printwatch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">bed photo</FONT></TD></TR></TABLE>>,
        likec4_id="1y3c42z",
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
    camera -> cloudflare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">camera stream</FONT></TD></TR></TABLE>>,
        likec4_id="12dg0a",
        minlen=1,
        style=dashed];
    printwatch -> publish [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">drafted card</FONT></TD></TR></TABLE>>,
        likec4_id=lim06j,
        style=dashed,
        weight=2];
    site [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Astro site on GitHub Pages</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Public site: the studio, the live printer<BR/>camera, and the print gallery.</FONT></TD></TR></TABLE>>,
        likec4_id="workshop.site",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    publish -> site [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gallery card</FONT></TD></TR></TABLE>>,
        likec4_id="1ypv893",
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
    subgraph cluster_site {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EMBRY.DEV</B></FONT>>,
            likec4_depth=1,
            likec4_id="workshop.site",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        live [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="workshop.site",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Live camera</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">live.embry.dev · through Cloudflare</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The video the /printing page plays.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.site.live",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        code [color="#4f46e5",
            fillcolor="#6366f1",
            fontcolor="#eef2ff",
            group="workshop.site",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Site code</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c7d2fe">one folder of files</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Pages and the print gallery.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.site.code",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        deploy [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="workshop.site",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Build and publish</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">GitHub Actions</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Every push rebuilds the site and puts it live<BR/>within minutes.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.site.deploy",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        pages [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group="workshop.site",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Public pages</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">embry.dev</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The studio, and /printing with the live<BR/>camera and gallery.</FONT></TD></TR></TABLE>>,
            likec4_id="workshop.site.pages",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    cloudflare [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cloudflare</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Carries the printer camera from home to the<BR/>public site without opening the home network.</FONT></TD></TR></TABLE>>,
        likec4_id=cloudflare,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    cloudflare -> live [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">serves</FONT></TD></TR></TABLE>>,
        likec4_id=l5rq5b,
        minlen=1,
        style=dashed];
    printing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">3D printing</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Bambu Lab P2S</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Logs every print and drafts a gallery card<BR/>when one finishes.</FONT></TD></TR></TABLE>>,
        likec4_id="workshop.printing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    printing -> code [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gallery card</FONT></TD></TR></TABLE>>,
        likec4_id=nkwl5f,
        minlen=1,
        style=dashed];
    live -> pages [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">plays on</FONT></TD></TR></TABLE>>,
        likec4_id=djnqnw,
        style=dashed,
        weight=3];
    code -> deploy [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">push</FONT></TD></TR></TABLE>>,
        likec4_id="1e3qizw",
        style=dashed,
        weight=3];
    deploy -> pages [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">publishes</FONT></TD></TR></TABLE>>,
        likec4_id="6unbsx",
        style=dashed,
        weight=3];
    github [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">GitHub</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Holds the private vault backup and the<BR/>website code; builds and hosts embry.dev.</FONT></TD></TR></TABLE>>,
        likec4_id=github,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    deploy -> github [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs on</FONT></TD></TR></TABLE>>,
        likec4_id=d7ctyi,
        minlen=1,
        style=dashed];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1240pt" height="1501pt"
 viewBox="0.00 0.00 1240.00 1501.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1486.25)">
<!-- jt -->
<g id="node1" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1204.25,-1471.2 859.79,-1471.2 859.79,-1291.2 1204.25,-1291.2 1204.25,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="1020.91" y="-1393.2" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="879.84" y="-1370.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">Jots things down, loads the scanner, and taps</text>
<text xml:space="preserve" text-anchor="start" x="977.41" y="-1352.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">what needs him.</text>
</g>
<!-- intake -->
<g id="node2" class="node">
<title>intake</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="362.15,-1148.4 41.89,-1148.4 41.89,-968.4 362.15,-968.4 362.15,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="135.89" y="-1079.4" font-family="Arial" font-size="20.00" fill="#eff6ff">What comes in</text>
<text xml:space="preserve" text-anchor="start" x="61.94" y="-1056.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Email, texts, paper, and quick notes. Each</text>
<text xml:space="preserve" text-anchor="start" x="79.86" y="-1038.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">one lands in the in&#45;tray without being</text>
<text xml:space="preserve" text-anchor="start" x="174.92" y="-1020.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">retyped.</text>
</g>
<!-- assistants -->
<g id="node3" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="108.33" y="-120.8" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistant</text>
<text xml:space="preserve" text-anchor="start" x="100.77" y="-99.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="28.71" y="-78.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sorts what comes in, drafts replies, and</text>
<text xml:space="preserve" text-anchor="start" x="31.23" y="-60.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds the machinery itself. Works from</text>
<text xml:space="preserve" text-anchor="start" x="52.48" y="-42.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">written procedures, not memory.</text>
</g>
<!-- vault -->
<g id="node4" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="755.65,-825.6 400.39,-825.6 400.39,-645.6 755.65,-645.6 755.65,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="536.89" y="-757.4" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="505.76" y="-736.4" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="441.28" y="-714.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="420.44" y="-696.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- workshop -->
<g id="node5" class="node">
<title>workshop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="742.04,-1471.2 422,-1471.2 422,-1291.2 742.04,-1291.2 742.04,-1471.2"/>
<text xml:space="preserve" text-anchor="start" x="537.01" y="-1412" font-family="Arial" font-size="20.00" fill="#eff6ff">Workshop</text>
<text xml:space="preserve" text-anchor="start" x="515.91" y="-1391" font-family="Arial" font-size="13.00" fill="#bfdbfe">3D printer · embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="449.04" y="-1369.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every print is logged, the printer camera</text>
<text xml:space="preserve" text-anchor="start" x="460.71" y="-1351.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">streams live, and finished prints post</text>
<text xml:space="preserve" text-anchor="start" x="493.64" y="-1333.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">themselves to the website.</text>
</g>
<!-- fieldagent -->
<g id="node6" class="node">
<title>fieldagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1210.09,-502.8 863.95,-502.8 863.95,-322.8 1210.09,-322.8 1210.09,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="986.43" y="-443.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Field Agent</text>
<text xml:space="preserve" text-anchor="start" x="1004.13" y="-422.6" font-family="Arial" font-size="13.00" fill="#bfdbfe">iPhone app</text>
<text xml:space="preserve" text-anchor="start" x="884.01" y="-401" font-family="Arial" font-size="15.00" fill="#bfdbfe">JT’s phone app: one screen with what needs</text>
<text xml:space="preserve" text-anchor="start" x="904.45" y="-383" font-family="Arial" font-size="15.00" fill="#bfdbfe">him today, plus a chat with the assistant</text>
<text xml:space="preserve" text-anchor="start" x="985.33" y="-365" font-family="Arial" font-size="15.00" fill="#bfdbfe">from anywhere.</text>
</g>
<!-- backups -->
<g id="node7" class="node">
<title>backups</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="754.4,-502.8 401.64,-502.8 401.64,-322.8 754.4,-322.8 754.4,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="539.67" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Backups</text>
<text xml:space="preserve" text-anchor="start" x="421.7" y="-410.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Notes go to GitHub every hour. The whole Mac</text>
<text xml:space="preserve" text-anchor="start" x="422.52" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">goes to Time Machine on the Pi, with a second</text>
<text xml:space="preserve" text-anchor="start" x="478.79" y="-374.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">disk that can leave the house.</text>
</g>
<!-- jt&#45;&gt;intake -->
<g id="edge1" class="edge">
<title>jt&#45;&gt;intake</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M859.79,-1313.63C716.69,-1258.32 514.2,-1180.06 371.79,-1125.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="372.83,-1122.61 364.89,-1122.35 370.94,-1127.5 372.83,-1122.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="641.91,-1208.4 641.91,-1231.2 796.53,-1231.2 796.53,-1208.4 641.91,-1208.4"/>
<text xml:space="preserve" text-anchor="start" x="644.91" y="-1214.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">mail, texts, paper, notes</text>
</g>
<!-- intake&#45;&gt;vault -->
<g id="edge5" class="edge">
<title>intake&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M288.84,-968.56C316.79,-941.17 348.37,-911.43 378.63,-885.6 399.7,-867.61 422.73,-849.28 445.41,-831.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="446.96,-834.03 451.34,-827.4 443.78,-829.85 446.96,-834.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="378.63,-885.6 378.63,-908.4 499.02,-908.4 499.02,-885.6 378.63,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="381.63" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">lands in the in&#45;tray</text>
</g>
<!-- assistants&#45;&gt;intake -->
<g id="edge2" class="edge">
<title>assistants&#45;&gt;intake</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M135.32,-179.85C130.76,-199.51 126.63,-220.35 124.02,-240 103.82,-392.31 101.49,-432.58 115.42,-585.6 127.26,-715.63 157.08,-863.36 178.41,-958.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="175.83,-958.81 180.04,-965.54 180.95,-957.65 175.83,-958.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="115.42,-562.8 115.42,-585.6 242.02,-585.6 242.02,-562.8 115.42,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="118.42" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">sorts mail and texts</text>
</g>
<!-- assistants&#45;&gt;vault -->
<g id="edge3" class="edge">
<title>assistants&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M151.48,-179.83C147.4,-268.54 153.57,-405.34 215.77,-502.8 257.77,-568.6 325.89,-619.32 391.79,-656.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="390.16,-658.4 398,-659.74 392.7,-653.81 390.16,-658.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="215.77,-401.4 215.77,-424.2 347.02,-424.2 347.02,-401.4 215.77,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="218.77" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">files it, remembers it</text>
</g>
<!-- vault&#45;&gt;fieldagent -->
<g id="edge6" class="edge">
<title>vault&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M705.27,-645.67C766.33,-602.99 839.54,-551.82 901.63,-508.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="902.8,-510.81 907.44,-504.36 899.79,-506.51 902.8,-510.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="821.28,-562.8 821.28,-585.6 937.03,-585.6 937.03,-562.8 821.28,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="824.28" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs doing</text>
</g>
<!-- vault&#45;&gt;backups -->
<g id="edge7" class="edge">
<title>vault&#45;&gt;backups</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M578.02,-645.67C578.02,-604.47 578.02,-555.36 578.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="580.65,-513.16 578.02,-505.66 575.4,-513.16 580.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="578.02,-562.8 578.02,-585.6 650.16,-585.6 650.16,-562.8 578.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="581.02" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">every hour</text>
</g>
<!-- workshop&#45;&gt;vault -->
<g id="edge4" class="edge">
<title>workshop&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M581.47,-1291.39C580.73,-1171.98 579.41,-960.33 578.64,-835.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="581.26,-836.05 578.59,-828.56 576.01,-836.08 581.26,-836.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="580.55,-1047 580.55,-1069.8 658.91,-1069.8 658.91,-1047 580.55,-1047"/>
<text xml:space="preserve" text-anchor="start" x="583.55" y="-1052.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">print history</text>
</g>
<!-- fieldagent&#45;&gt;jt -->
<g id="edge8" class="edge">
<title>fieldagent&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1036.56,-502.52C1035.63,-683.04 1033.51,-1091.94 1032.53,-1280.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1029.91,-1280.91 1032.49,-1288.42 1035.16,-1280.93 1029.91,-1280.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1034.58,-885.6 1034.58,-908.4 1190.8,-908.4 1190.8,-885.6 1034.58,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="1037.58" y="-891.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">on the phone, anywhere</text>
</g>
<!-- fieldagent&#45;&gt;assistants -->
<g id="edge9" class="edge">
<title>fieldagent&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M864.18,-343.72C845.59,-336.58 826.93,-329.49 809.02,-322.8 646.92,-262.23 460.83,-196.11 329.6,-150.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.66,-147.64 322.71,-147.63 328.92,-152.59 330.66,-147.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="631.35,-240 631.35,-262.8 749.4,-262.8 749.4,-240 631.35,-240"/>
<text xml:space="preserve" text-anchor="start" x="634.35" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">chat, Allow / Deny</text>
</g>
</g>
</svg>
`;case`intakeView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1588pt" height="1376pt"
 viewBox="0.00 0.00 1588.00 1376.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1361.34)">
<g id="clust1" class="cluster">
<title>cluster_intake</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="530.86,-451.52 530.86,-1312.52 975.34,-1312.52 975.34,-451.52 530.86,-451.52"/>
<text xml:space="preserve" text-anchor="start" x="538.86" y="-1299.62" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WHAT COMES IN</text>
</g>
<!-- scan -->
<g id="node1" class="node">
<title>scan</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="935.34,-1251.52 570.86,-1251.52 570.86,-1071.52 935.34,-1071.52 935.34,-1251.52"/>
<text xml:space="preserve" text-anchor="start" x="726.42" y="-1173.52" font-family="Arial" font-size="20.00" fill="#eff6ff">Paper</text>
<text xml:space="preserve" text-anchor="start" x="590.92" y="-1150.52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Press Scan on the scanner; the page becomes a</text>
<text xml:space="preserve" text-anchor="start" x="639.7" y="-1132.52" font-family="Arial" font-size="15.00" fill="#bfdbfe">searchable PDF and a note to file.</text>
</g>
<!-- capture -->
<g id="node2" class="node">
<title>capture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="913.12,-961.52 593.08,-961.52 593.08,-781.52 913.12,-781.52 913.12,-961.52"/>
<text xml:space="preserve" text-anchor="start" x="686.96" y="-892.52" font-family="Arial" font-size="20.00" fill="#eff6ff">Notes &amp; to&#45;dos</text>
<text xml:space="preserve" text-anchor="start" x="616.36" y="-869.52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every way a thought gets written down: a</text>
<text xml:space="preserve" text-anchor="start" x="630.93" y="-851.52" font-family="Arial" font-size="15.00" fill="#bfdbfe">quick note, the daily journal, a phone</text>
<text xml:space="preserve" text-anchor="start" x="650.97" y="-833.52" font-family="Arial" font-size="15.00" fill="#bfdbfe">reminder, or a finished AI chat.</text>
</g>
<!-- mail -->
<g id="node3" class="node">
<title>mail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="926.16,-671.52 580.04,-671.52 580.04,-491.52 926.16,-491.52 926.16,-671.52"/>
<text xml:space="preserve" text-anchor="start" x="691.42" y="-593.52" font-family="Arial" font-size="20.00" fill="#eff6ff">Email &amp; Texts</text>
<text xml:space="preserve" text-anchor="start" x="600.1" y="-570.52" font-family="Arial" font-size="15.00" fill="#bfdbfe">Two inboxes and iMessage become one short</text>
<text xml:space="preserve" text-anchor="start" x="670.97" y="-552.52" font-family="Arial" font-size="15.00" fill="#bfdbfe">list of what needs action.</text>
</g>
<!-- jt -->
<g id="node4" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="344.47,-1096.52 0,-1096.52 0,-916.52 344.47,-916.52 344.47,-1096.52"/>
<text xml:space="preserve" text-anchor="start" x="161.13" y="-1018.52" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-995.52" font-family="Arial" font-size="15.00" fill="#c2f0c2">Jots things down, loads the scanner, and taps</text>
<text xml:space="preserve" text-anchor="start" x="117.62" y="-977.52" font-family="Arial" font-size="15.00" fill="#c2f0c2">what needs him.</text>
</g>
<!-- mailboxes -->
<g id="node5" class="node">
<title>mailboxes</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1540.67,-181.52 1220.63,-181.52 1220.63,-1.52 1540.67,-1.52 1540.67,-181.52"/>
<text xml:space="preserve" text-anchor="start" x="1335.63" y="-113.32" font-family="Arial" font-size="20.00" fill="#f8fafc">Mailboxes</text>
<text xml:space="preserve" text-anchor="start" x="1324.3" y="-92.32" font-family="Arial" font-size="13.00" fill="#cbd5e1">Gmail · iCloud Mail</text>
<text xml:space="preserve" text-anchor="start" x="1247.26" y="-70.72" font-family="Arial" font-size="15.00" fill="#cbd5e1">Two inboxes, read straight from the mail</text>
<text xml:space="preserve" text-anchor="start" x="1353.98" y="-52.72" font-family="Arial" font-size="15.00" fill="#cbd5e1">servers.</text>
</g>
<!-- appleapps -->
<g id="node6" class="node">
<title>appleapps</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1540.67,-843.52 1220.63,-843.52 1220.63,-663.52 1540.67,-663.52 1540.67,-843.52"/>
<text xml:space="preserve" text-anchor="start" x="1279.49" y="-775.32" font-family="Arial" font-size="20.00" fill="#f8fafc">Calendar &amp; Reminders</text>
<text xml:space="preserve" text-anchor="start" x="1364.03" y="-754.32" font-family="Arial" font-size="13.00" fill="#cbd5e1">Apple</text>
<text xml:space="preserve" text-anchor="start" x="1252.65" y="-732.72" font-family="Arial" font-size="15.00" fill="#cbd5e1">The calendar and the to&#45;do lists on the</text>
<text xml:space="preserve" text-anchor="start" x="1357.71" y="-714.72" font-family="Arial" font-size="15.00" fill="#cbd5e1">phone.</text>
</g>
<!-- vault -->
<g id="node7" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1558.28,-1237.52 1203.02,-1237.52 1203.02,-1057.52 1558.28,-1057.52 1558.28,-1237.52"/>
<text xml:space="preserve" text-anchor="start" x="1339.52" y="-1169.32" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="1308.39" y="-1148.32" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="1243.91" y="-1126.72" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1223.07" y="-1108.72" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- assistants -->
<g id="node8" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="332.25,-775.52 12.21,-775.52 12.21,-595.52 332.25,-595.52 332.25,-775.52"/>
<text xml:space="preserve" text-anchor="start" x="120.55" y="-716.32" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistant</text>
<text xml:space="preserve" text-anchor="start" x="112.98" y="-695.32" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="40.93" y="-673.72" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sorts what comes in, drafts replies, and</text>
<text xml:space="preserve" text-anchor="start" x="43.45" y="-655.72" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds the machinery itself. Works from</text>
<text xml:space="preserve" text-anchor="start" x="64.69" y="-637.72" font-family="Arial" font-size="15.00" fill="#bfdbfe">written procedures, not memory.</text>
</g>
<!-- fieldagent -->
<g id="node9" class="node">
<title>fieldagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1553.72,-526.52 1207.58,-526.52 1207.58,-346.52 1553.72,-346.52 1553.72,-526.52"/>
<text xml:space="preserve" text-anchor="start" x="1330.06" y="-467.32" font-family="Arial" font-size="20.00" fill="#eff6ff">Field Agent</text>
<text xml:space="preserve" text-anchor="start" x="1347.76" y="-446.32" font-family="Arial" font-size="13.00" fill="#bfdbfe">iPhone app</text>
<text xml:space="preserve" text-anchor="start" x="1227.64" y="-424.72" font-family="Arial" font-size="15.00" fill="#bfdbfe">JT’s phone app: one screen with what needs</text>
<text xml:space="preserve" text-anchor="start" x="1248.08" y="-406.72" font-family="Arial" font-size="15.00" fill="#bfdbfe">him today, plus a chat with the assistant</text>
<text xml:space="preserve" text-anchor="start" x="1328.96" y="-388.72" font-family="Arial" font-size="15.00" fill="#bfdbfe">from anywhere.</text>
</g>
<!-- scan&#45;&gt;vault -->
<g id="edge10" class="edge">
<title>scan&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M935.22,-1171.91C1000.72,-1174.15 1075.22,-1174.95 1143.02,-1171.52 1159.15,-1170.71 1175.89,-1169.58 1192.65,-1168.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1192.82,-1170.88 1200.08,-1167.65 1192.39,-1165.64 1192.82,-1170.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1055.68,-1173.84 1055.68,-1196.64 1082.68,-1196.64 1082.68,-1173.84 1055.68,-1173.84"/>
<text xml:space="preserve" text-anchor="start" x="1058.68" y="-1182.04" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- capture&#45;&gt;appleapps -->
<g id="edge11" class="edge">
<title>capture&#45;&gt;appleapps</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M912.76,-841.59C1003.73,-824.43 1117.9,-802.9 1210.56,-785.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1211.03,-788 1217.91,-784.03 1210.06,-782.84 1211.03,-788"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1029.21,-823.09 1029.21,-845.89 1109.15,-845.89 1109.15,-823.09 1029.21,-823.09"/>
<text xml:space="preserve" text-anchor="start" x="1032.21" y="-828.89" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- capture&#45;&gt;vault -->
<g id="edge12" class="edge">
<title>capture&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M912.79,-912.6C984.71,-933.73 1069.84,-962.32 1143.02,-996.72 1176.61,-1012.51 1211.16,-1032.26 1243.14,-1052.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1241.34,-1054.18 1249.08,-1055.95 1244.13,-1049.74 1241.34,-1054.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1055.68,-996.72 1055.68,-1019.52 1082.68,-1019.52 1082.68,-996.72 1055.68,-996.72"/>
<text xml:space="preserve" text-anchor="start" x="1058.68" y="-1004.92" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- mail&#45;&gt;mailboxes -->
<g id="edge13" class="edge">
<title>mail&#45;&gt;mailboxes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M798.39,-491.67C839.94,-415.59 908.61,-308.39 995.34,-240.72 1058.26,-191.63 1139.28,-157 1210.7,-133.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1211.5,-136.04 1217.83,-131.24 1209.88,-131.05 1211.5,-136.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1013.26,-240.72 1013.26,-263.52 1125.1,-263.52 1125.1,-240.72 1013.26,-240.72"/>
<text xml:space="preserve" text-anchor="start" x="1016.26" y="-246.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">archive the noise</text>
</g>
<!-- mail&#45;&gt;vault -->
<g id="edge14" class="edge">
<title>mail&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M925.86,-574.77C1001.33,-580.85 1085.64,-601.35 1143.02,-655.72 1223.7,-732.18 1156.72,-797.47 1203.02,-898.52 1227.44,-951.83 1263.74,-1005.56 1297.08,-1049.39"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1295,-1050.99 1301.65,-1055.34 1299.17,-1047.79 1295,-1050.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1008.98,-655.72 1008.98,-678.52 1129.38,-678.52 1129.38,-655.72 1008.98,-655.72"/>
<text xml:space="preserve" text-anchor="start" x="1011.98" y="-661.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">lands in the in&#45;tray</text>
</g>
<!-- mail&#45;&gt;fieldagent -->
<g id="edge15" class="edge">
<title>mail&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M885.46,-491.65C919.78,-472.57 957.74,-455.07 995.34,-444.72 1059.78,-426.99 1132.61,-421.87 1197.41,-422.22"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1197.18,-424.84 1204.71,-422.29 1197.23,-419.59 1197.18,-424.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1026.48,-444.72 1026.48,-467.52 1111.88,-467.52 1111.88,-444.72 1026.48,-444.72"/>
<text xml:space="preserve" text-anchor="start" x="1029.48" y="-450.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">needs action</text>
</g>
<!-- jt&#45;&gt;scan -->
<g id="edge1" class="edge">
<title>jt&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M344.17,-1052.29C412.33,-1070.54 491.07,-1091.63 561.09,-1110.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="560.06,-1112.82 567.99,-1112.22 561.42,-1107.75 560.06,-1112.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="418.08,-1093.3 418.08,-1116.1 497.25,-1116.1 497.25,-1093.3 418.08,-1093.3"/>
<text xml:space="preserve" text-anchor="start" x="421.08" y="-1099.1" font-family="Arial" font-size="14.00" fill="#c9c9c9">loads paper</text>
</g>
<!-- jt&#45;&gt;capture -->
<g id="edge2" class="edge">
<title>jt&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M344.17,-966.66C419.64,-949.06 508.11,-928.43 583.33,-910.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="583.72,-913.49 590.43,-909.23 582.53,-908.37 583.72,-913.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="404.47,-951.11 404.47,-973.91 510.86,-973.91 510.86,-951.11 404.47,-951.11"/>
<text xml:space="preserve" text-anchor="start" x="407.47" y="-956.91" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
<!-- mailboxes&#45;&gt;mail -->
<g id="edge3" class="edge">
<title>mailboxes&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1220.82,-18.82C1147.09,3.58 1061.35,12.43 995.34,-30.72 842.31,-130.76 785.76,-351.7 765.3,-481.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="762.72,-480.83 764.18,-488.64 767.91,-481.63 762.72,-480.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1038.56,-30.72 1038.56,-53.52 1099.8,-53.52 1099.8,-30.72 1038.56,-30.72"/>
<text xml:space="preserve" text-anchor="start" x="1041.56" y="-36.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- appleapps&#45;&gt;capture -->
<g id="edge4" class="edge">
<title>appleapps&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1221.02,-714.58C1150.74,-703.77 1067.76,-699.95 995.34,-720.72 954.36,-732.48 913.58,-753.46 877.53,-776.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="876.42,-773.69 871.51,-779.94 879.24,-778.12 876.42,-773.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1020.27,-720.72 1020.27,-743.52 1118.09,-743.52 1118.09,-720.72 1020.27,-720.72"/>
<text xml:space="preserve" text-anchor="start" x="1023.27" y="-726.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">new reminders</text>
</g>
<!-- vault&#45;&gt;scan -->
<g id="edge5" class="edge">
<title>vault&#45;&gt;scan</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1277.28,-1237.42C1238.02,-1266.3 1191.05,-1294.66 1143.02,-1309.52 1080.32,-1328.93 1058.51,-1327.35 995.34,-1309.52 955.56,-1298.29 915.88,-1278.46 880.52,-1256.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="881.96,-1254.7 874.2,-1252.98 879.19,-1259.16 881.96,-1254.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1042.07,-1323.49 1042.07,-1346.29 1096.29,-1346.29 1096.29,-1323.49 1042.07,-1323.49"/>
<text xml:space="preserve" text-anchor="start" x="1045.07" y="-1329.29" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
<!-- vault&#45;&gt;capture -->
<g id="edge6" class="edge">
<title>vault&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1203.33,-1111.65C1135.79,-1093.76 1059.59,-1068.33 995.34,-1033.52 985.08,-1027.97 984.68,-1023.51 975.34,-1016.52 953.24,-999.98 929.31,-983.22 905.64,-967.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="907.14,-965.08 899.45,-963.08 904.21,-969.44 907.14,-965.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1029.21,-1092.28 1029.21,-1115.08 1109.15,-1115.08 1109.15,-1092.28 1029.21,-1092.28"/>
<text xml:space="preserve" text-anchor="start" x="1032.21" y="-1098.08" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- assistants&#45;&gt;capture -->
<g id="edge7" class="edge">
<title>assistants&#45;&gt;capture</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M332.18,-736.59C410.25,-761.68 504.35,-791.92 583.67,-817.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="582.44,-819.76 590.38,-819.56 584.04,-814.77 582.44,-819.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="441.05,-789.66 441.05,-812.46 474.28,-812.46 474.28,-789.66 441.05,-789.66"/>
<text xml:space="preserve" text-anchor="start" x="444.05" y="-795.46" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- assistants&#45;&gt;mail -->
<g id="edge8" class="edge">
<title>assistants&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M332.13,-628.88C356.13,-621.85 380.79,-615.48 404.47,-610.72 457.74,-600.02 516.37,-593.23 570.06,-588.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="570.09,-591.56 577.36,-588.36 569.68,-586.32 570.09,-591.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="441.05,-610.72 441.05,-633.52 474.28,-633.52 474.28,-610.72 441.05,-610.72"/>
<text xml:space="preserve" text-anchor="start" x="444.05" y="-616.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- fieldagent&#45;&gt;mail -->
<g id="edge9" class="edge">
<title>fieldagent&#45;&gt;mail</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1254.36,-346.69C1178.05,-303.55 1079.38,-268.67 995.34,-306.72 915.5,-342.87 851.62,-419.95 809.7,-483.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="807.74,-481.49 805.84,-489.21 812.14,-484.36 807.74,-481.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="995.34,-306.72 995.34,-329.52 1143.02,-329.52 1143.02,-306.72 995.34,-306.72"/>
<text xml:space="preserve" text-anchor="start" x="998.34" y="-312.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">when the phone opens</text>
</g>
</g>
</svg>
`;case`email`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1574pt" height="1363pt"
 viewBox="0.00 0.00 1574.00 1363.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1348.05)">
<g id="clust1" class="cluster">
<title>cluster_mail</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-533 8,-1104 1535.96,-1104 1535.96,-533 8,-533"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1091.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMAIL &amp; TEXTS</text>
</g>
<!-- unread -->
<g id="node1" class="node">
<title>unread</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.04,-753 48,-753 48,-573 368.04,-573 368.04,-753"/>
<text xml:space="preserve" text-anchor="start" x="154.11" y="-675.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Unread mail</text>
<text xml:space="preserve" text-anchor="start" x="156" y="-654.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="96.3" y="-633.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Pulls new mail from both inboxes.</text>
</g>
<!-- texts -->
<g id="node2" class="node">
<title>texts</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.04,-1043 48,-1043 48,-863 368.04,-863 368.04,-1043"/>
<text xml:space="preserve" text-anchor="start" x="164.12" y="-974.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">New texts</text>
<text xml:space="preserve" text-anchor="start" x="156" y="-953.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">every 5 min · free</text>
<text xml:space="preserve" text-anchor="start" x="73.36" y="-932.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Copies new iMessages. Login codes are</text>
<text xml:space="preserve" text-anchor="start" x="180.09" y="-914.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">skipped.</text>
</g>
<!-- mailtriage -->
<g id="node3" class="node">
<title>mailtriage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="880.11,-783 553.18,-783 553.18,-603 880.11,-603 880.11,-783"/>
<text xml:space="preserve" text-anchor="start" x="642.17" y="-714.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mail &amp; text triage</text>
<text xml:space="preserve" text-anchor="start" x="652.7" y="-693.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI · a few times a day</text>
<text xml:space="preserve" text-anchor="start" x="573.23" y="-672.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Archives the noise and lists everything else</text>
<text xml:space="preserve" text-anchor="start" x="649.52" y="-654.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">under Needs action.</text>
</g>
<!-- mailarchive -->
<g id="node4" class="node">
<title>mailarchive</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1495.96,-766.64C1495.96,-775.67 1419.52,-783 1325.41,-783 1231.31,-783 1154.87,-775.67 1154.87,-766.64 1154.87,-766.64 1154.87,-619.36 1154.87,-619.36 1154.87,-610.33 1231.31,-603 1325.41,-603 1419.52,-603 1495.96,-610.33 1495.96,-619.36 1495.96,-619.36 1495.96,-766.64 1495.96,-766.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1495.96,-766.64C1495.96,-757.61 1419.52,-750.27 1325.41,-750.27 1231.31,-750.27 1154.87,-757.61 1154.87,-766.64"/>
<text xml:space="preserve" text-anchor="start" x="1272.06" y="-705.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Mail archive</text>
<text xml:space="preserve" text-anchor="start" x="1255.7" y="-684.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">Documents/mail&#45;archive</text>
<text xml:space="preserve" text-anchor="start" x="1174.92" y="-663.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">A raw copy of every thread JT chose to keep.</text>
</g>
<!-- assistants -->
<g id="node5" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.04,-1333 48,-1333 48,-1153 368.04,-1153 368.04,-1333"/>
<text xml:space="preserve" text-anchor="start" x="156.33" y="-1273.8" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistant</text>
<text xml:space="preserve" text-anchor="start" x="148.77" y="-1252.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="76.71" y="-1231.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sorts what comes in, drafts replies, and</text>
<text xml:space="preserve" text-anchor="start" x="79.23" y="-1213.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds the machinery itself. Works from</text>
<text xml:space="preserve" text-anchor="start" x="100.48" y="-1195.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">written procedures, not memory.</text>
</g>
<!-- fieldagent -->
<g id="node6" class="node">
<title>fieldagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1498.48,-493 1152.35,-493 1152.35,-313 1498.48,-313 1498.48,-493"/>
<text xml:space="preserve" text-anchor="start" x="1274.83" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Field Agent</text>
<text xml:space="preserve" text-anchor="start" x="1292.52" y="-412.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">iPhone app</text>
<text xml:space="preserve" text-anchor="start" x="1172.4" y="-391.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">JT’s phone app: one screen with what needs</text>
<text xml:space="preserve" text-anchor="start" x="1192.85" y="-373.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">him today, plus a chat with the assistant</text>
<text xml:space="preserve" text-anchor="start" x="1273.73" y="-355.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">from anywhere.</text>
</g>
<!-- mailboxes -->
<g id="node7" class="node">
<title>mailboxes</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1485.43,-180 1165.39,-180 1165.39,0 1485.43,0 1485.43,-180"/>
<text xml:space="preserve" text-anchor="start" x="1280.39" y="-111.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Mailboxes</text>
<text xml:space="preserve" text-anchor="start" x="1269.07" y="-90.8" font-family="Arial" font-size="13.00" fill="#cbd5e1">Gmail · iCloud Mail</text>
<text xml:space="preserve" text-anchor="start" x="1192.03" y="-69.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">Two inboxes, read straight from the mail</text>
<text xml:space="preserve" text-anchor="start" x="1298.74" y="-51.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">servers.</text>
</g>
<!-- vault -->
<g id="node8" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1503.05,-1324 1147.78,-1324 1147.78,-1144 1503.05,-1144 1503.05,-1324"/>
<text xml:space="preserve" text-anchor="start" x="1284.28" y="-1255.8" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="1253.16" y="-1234.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="1188.67" y="-1213.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1167.84" y="-1195.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- unread&#45;&gt;mailtriage -->
<g id="edge5" class="edge">
<title>unread&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.93,-672.41C423.52,-675.7 486.19,-679.41 542.86,-682.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="542.71,-685.39 550.35,-683.21 543.02,-680.15 542.71,-685.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="429.99,-679.8 429.99,-702.6 491.23,-702.6 491.23,-679.8 429.99,-679.8"/>
<text xml:space="preserve" text-anchor="start" x="432.99" y="-685.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
<!-- texts&#45;&gt;mailtriage -->
<g id="edge6" class="edge">
<title>texts&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.93,-871.45C423.98,-842.68 487.23,-810.22 544.27,-780.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="545.2,-783.42 550.68,-777.66 542.81,-778.75 545.2,-783.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="428.04,-838.57 428.04,-861.37 493.18,-861.37 493.18,-838.57 428.04,-838.57"/>
<text xml:space="preserve" text-anchor="start" x="431.04" y="-844.37" font-family="Arial" font-size="14.00" fill="#c9c9c9">new texts</text>
</g>
<!-- mailtriage&#45;&gt;mailarchive -->
<g id="edge9" class="edge">
<title>mailtriage&#45;&gt;mailarchive</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M879.85,-693C961.15,-693 1059.86,-693 1143.59,-693"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1143.46,-695.63 1150.96,-693 1143.46,-690.38 1143.46,-695.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="972.42,-693 972.42,-715.8 1055.47,-715.8 1055.47,-693 972.42,-693"/>
<text xml:space="preserve" text-anchor="start" x="975.42" y="-698.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">kept threads</text>
</g>
<!-- mailtriage&#45;&gt;fieldagent -->
<g id="edge7" class="edge">
<title>mailtriage&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M879.85,-615.48C960.97,-576.7 1059.43,-529.65 1143.05,-489.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1144.02,-492.13 1149.66,-486.52 1141.76,-487.39 1144.02,-492.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="971.25,-582.5 971.25,-605.3 1056.64,-605.3 1056.64,-582.5 971.25,-582.5"/>
<text xml:space="preserve" text-anchor="start" x="974.25" y="-588.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">needs action</text>
</g>
<!-- mailtriage&#45;&gt;mailboxes -->
<g id="edge8" class="edge">
<title>mailtriage&#45;&gt;mailboxes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M754.03,-603.05C791.16,-519.83 855.32,-396.6 940.11,-312.2 1001.78,-250.8 1083.82,-200.34 1156.26,-163.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1157.31,-165.52 1162.8,-159.77 1154.93,-160.84 1157.31,-165.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="958.02,-312.2 958.02,-335 1069.86,-335 1069.86,-312.2 958.02,-312.2"/>
<text xml:space="preserve" text-anchor="start" x="961.02" y="-318" font-family="Arial" font-size="14.00" fill="#c9c9c9">archive the noise</text>
</g>
<!-- mailtriage&#45;&gt;vault -->
<g id="edge10" class="edge">
<title>mailtriage&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M792.79,-782.61C874.2,-876.38 1010.88,-1024.49 1147.78,-1131 1150.83,-1133.37 1153.94,-1135.73 1157.1,-1138.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1155.52,-1140.16 1163.13,-1142.44 1158.6,-1135.91 1155.52,-1140.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="953.75,-1078.02 953.75,-1100.82 1074.14,-1100.82 1074.14,-1078.02 953.75,-1078.02"/>
<text xml:space="preserve" text-anchor="start" x="956.75" y="-1083.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">lands in the in&#45;tray</text>
</g>
<!-- assistants&#45;&gt;mailtriage -->
<g id="edge1" class="edge">
<title>assistants&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M342.76,-1153.19C351.55,-1145.96 360.06,-1138.54 368.04,-1131 479.09,-1026.13 584.94,-884.72 650.03,-791.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="652.16,-792.83 654.28,-785.17 647.85,-789.84 652.16,-792.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.99,-1066.02 443.99,-1088.82 477.23,-1088.82 477.23,-1066.02 443.99,-1066.02"/>
<text xml:space="preserve" text-anchor="start" x="446.99" y="-1071.82" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- fieldagent&#45;&gt;mailtriage -->
<g id="edge3" class="edge">
<title>fieldagent&#45;&gt;mailtriage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1152.63,-364.52C1083.32,-357.47 1004.64,-360.72 940.11,-393.2 857.27,-434.88 797.54,-523.62 760.96,-593.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="758.64,-592.56 757.55,-600.43 763.31,-594.96 758.64,-592.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="940.11,-393.2 940.11,-416 1087.78,-416 1087.78,-393.2 940.11,-393.2"/>
<text xml:space="preserve" text-anchor="start" x="943.11" y="-399" font-family="Arial" font-size="14.00" fill="#c9c9c9">when the phone opens</text>
</g>
<!-- fieldagent&#45;&gt;mailboxes -->
<g id="edge2" class="edge">
<title>fieldagent&#45;&gt;mailboxes</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1325.41,-313.02C1325.41,-274.6 1325.41,-229.61 1325.41,-190.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1328.04,-190.22 1325.41,-182.72 1322.79,-190.22 1328.04,-190.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1262.49,-235.1 1262.49,-257.9 1359.54,-257.9 1359.54,-235.1 1262.49,-235.1"/>
<text xml:space="preserve" text-anchor="start" x="1265.49" y="-240.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">archive, delete</text>
</g>
<!-- mailboxes&#45;&gt;unread -->
<g id="edge4" class="edge">
<title>mailboxes&#45;&gt;unread</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1165.61,-112.01C1094.72,-125.23 1011.31,-145.57 940.11,-176 703.78,-277 461.79,-456.06 324,-566.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="322.45,-564.52 318.25,-571.27 325.74,-568.61 322.45,-564.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="686.02,-392.11 686.02,-414.91 747.26,-414.91 747.26,-392.11 686.02,-392.11"/>
<text xml:space="preserve" text-anchor="start" x="689.02" y="-397.91" font-family="Arial" font-size="14.00" fill="#c9c9c9">new mail</text>
</g>
</g>
</svg>
`;case`scanner`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1999pt" height="617pt"
 viewBox="0.00 0.00 1999.00 617.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 602.05)">
<g id="clust1" class="cluster">
<title>cluster_scan</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="503.63,-8 503.63,-579 1506.68,-579 1506.68,-8 503.63,-8"/>
<text xml:space="preserve" text-anchor="start" x="511.63" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PAPER</text>
</g>
<!-- scanner -->
<g id="node1" class="node">
<title>scanner</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="890.62,-518 543.63,-518 543.63,-338 890.62,-338 890.62,-518"/>
<text xml:space="preserve" text-anchor="start" x="679.88" y="-449.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Scanner</text>
<text xml:space="preserve" text-anchor="start" x="657.88" y="-428.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Brother ADS&#45;1350W</text>
<text xml:space="preserve" text-anchor="start" x="563.69" y="-407.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Feeds paper. Its Scan button sends the pages</text>
<text xml:space="preserve" text-anchor="start" x="653.35" y="-389.2" font-family="Arial" font-size="15.00" fill="#f9b27c">straight to the Mac.</text>
</g>
<!-- rename -->
<g id="node2" class="node">
<title>rename</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="884.36,-228 549.89,-228 549.89,-48 884.36,-48 884.36,-228"/>
<text xml:space="preserve" text-anchor="start" x="647.65" y="-168.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Name and file it</text>
<text xml:space="preserve" text-anchor="start" x="650.27" y="-147.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">one dialog, during filing</text>
<text xml:space="preserve" text-anchor="start" x="573.3" y="-126.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Proposes a real file name and a folder from</text>
<text xml:space="preserve" text-anchor="start" x="569.95" y="-108.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">what the page says. Ignore it to keep the old</text>
<text xml:space="preserve" text-anchor="start" x="696.28" y="-90.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">name.</text>
</g>
<!-- ocr -->
<g id="node3" class="node">
<title>ocr</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1466.68,-432 1113.88,-432 1113.88,-252 1466.68,-252 1466.68,-432"/>
<text xml:space="preserve" text-anchor="start" x="1206.35" y="-363.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Make it searchable</text>
<text xml:space="preserve" text-anchor="start" x="1215.14" y="-342.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="1133.93" y="-321.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the text of each new scan and parks the</text>
<text xml:space="preserve" text-anchor="start" x="1173.55" y="-303.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">PDF in an ingest folder with a note.</text>
</g>
<!-- jt -->
<g id="node4" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="344.47,-518 0,-518 0,-338 344.47,-338 344.47,-518"/>
<text xml:space="preserve" text-anchor="start" x="161.13" y="-440" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-417" font-family="Arial" font-size="15.00" fill="#c2f0c2">Jots things down, loads the scanner, and taps</text>
<text xml:space="preserve" text-anchor="start" x="117.62" y="-399" font-family="Arial" font-size="15.00" fill="#c2f0c2">what needs him.</text>
</g>
<!-- vault -->
<g id="node5" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1968.94,-294 1613.68,-294 1613.68,-114 1968.94,-114 1968.94,-294"/>
<text xml:space="preserve" text-anchor="start" x="1750.18" y="-225.8" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="1719.05" y="-204.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="1654.57" y="-183.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1633.73" y="-165.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- scanner&#45;&gt;ocr -->
<g id="edge3" class="edge">
<title>scanner&#45;&gt;ocr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M890.27,-402.08C957.73,-391.92 1035.28,-380.25 1103.97,-369.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1104.02,-372.55 1111.04,-368.84 1103.24,-367.36 1104.02,-372.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="951.77,-392.7 951.77,-415.5 1052.73,-415.5 1052.73,-392.7 951.77,-392.7"/>
<text xml:space="preserve" text-anchor="start" x="954.77" y="-398.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">scanned pages</text>
</g>
<!-- rename&#45;&gt;ocr -->
<g id="edge4" class="edge">
<title>rename&#45;&gt;ocr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M884.09,-197.28C953.13,-221.94 1033.54,-250.66 1104.45,-275.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1103.14,-278.3 1111.09,-278.35 1104.91,-273.36 1103.14,-278.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="950.62,-252.21 950.62,-275.01 1053.88,-275.01 1053.88,-252.21 950.62,-252.21"/>
<text xml:space="preserve" text-anchor="start" x="953.62" y="-258.01" font-family="Arial" font-size="14.00" fill="#c9c9c9">names the PDF</text>
</g>
<!-- ocr&#45;&gt;vault -->
<g id="edge5" class="edge">
<title>ocr&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1466.52,-293.54C1510.9,-281.27 1558.74,-268.04 1603.67,-255.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1604.36,-258.15 1610.89,-253.62 1602.96,-253.08 1604.36,-258.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1526.68,-273 1526.68,-295.8 1553.68,-295.8 1553.68,-273 1526.68,-273"/>
<text xml:space="preserve" text-anchor="start" x="1529.68" y="-281.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- jt&#45;&gt;scanner -->
<g id="edge1" class="edge">
<title>jt&#45;&gt;scanner</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M344.26,-428C404.62,-428 472.68,-428 533.93,-428"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="533.56,-430.63 541.06,-428 533.56,-425.38 533.56,-430.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="404.47,-428 404.47,-450.8 483.63,-450.8 483.63,-428 404.47,-428"/>
<text xml:space="preserve" text-anchor="start" x="407.47" y="-433.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">loads paper</text>
</g>
<!-- vault&#45;&gt;rename -->
<g id="edge2" class="edge">
<title>vault&#45;&gt;rename</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1613.82,-183.83C1578.37,-180.24 1541.37,-176.82 1506.68,-174.2 1296.57,-158.35 1054.41,-148.48 894.48,-143.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="894.67,-140.51 887.09,-142.88 894.5,-145.75 894.67,-140.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1263.17,-174.2 1263.17,-197 1317.39,-197 1317.39,-174.2 1263.17,-174.2"/>
<text xml:space="preserve" text-anchor="start" x="1266.17" y="-180" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
</g>
</svg>
`;case`captureView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1479pt" height="1218pt"
 viewBox="0.00 0.00 1479.00 1218.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1203.05)">
<g id="clust1" class="cluster">
<title>cluster_capture</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="457.7,-29 457.7,-1180 893,-1180 893,-29 457.7,-29"/>
<text xml:space="preserve" text-anchor="start" x="465.7" y="-1167.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NOTES &amp; TO&#45;DOS</text>
</g>
<!-- quick -->
<g id="node1" class="node">
<title>quick</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="835.37,-1119 515.33,-1119 515.33,-939 835.37,-939 835.37,-1119"/>
<text xml:space="preserve" text-anchor="start" x="627.55" y="-1050.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Quick note</text>
<text xml:space="preserve" text-anchor="start" x="610.3" y="-1029.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">one button in Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="549.03" y="-1008.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Type a thought, press save, it is in the</text>
<text xml:space="preserve" text-anchor="start" x="652.43" y="-990.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">in&#45;tray.</text>
</g>
<!-- journal -->
<g id="node2" class="node">
<title>journal</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="842.57,-829 508.13,-829 508.13,-649 842.57,-649 842.57,-829"/>
<text xml:space="preserve" text-anchor="start" x="611.98" y="-760.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Journal to&#45;dos</text>
<text xml:space="preserve" text-anchor="start" x="647.53" y="-739.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">daily note</text>
<text xml:space="preserve" text-anchor="start" x="528.19" y="-718.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">To&#45;dos jotted in the day’s journal get swept</text>
<text xml:space="preserve" text-anchor="start" x="613.24" y="-700.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">to the right project.</text>
</g>
<!-- reminders -->
<g id="node3" class="node">
<title>reminders</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="853,-249 497.7,-249 497.7,-69 853,-69 853,-249"/>
<text xml:space="preserve" text-anchor="start" x="599.2" y="-180.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Phone reminders</text>
<text xml:space="preserve" text-anchor="start" x="636.34" y="-159.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">two&#45;way sync</text>
<text xml:space="preserve" text-anchor="start" x="517.76" y="-138.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Open to&#45;dos show up as phone reminders; new</text>
<text xml:space="preserve" text-anchor="start" x="556.96" y="-120.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">reminders come back into the vault.</text>
</g>
<!-- distill -->
<g id="node4" class="node">
<title>distill</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="835.37,-539 515.33,-539 515.33,-359 835.37,-359 835.37,-539"/>
<text xml:space="preserve" text-anchor="start" x="629.22" y="-470.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Chat distill</text>
<text xml:space="preserve" text-anchor="start" x="656.57" y="-449.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI skill</text>
<text xml:space="preserve" text-anchor="start" x="551.11" y="-428.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Boils a finished AI chat down to a few</text>
<text xml:space="preserve" text-anchor="start" x="559.02" y="-410.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">lasting notes, then the chat can go.</text>
</g>
<!-- appleapps -->
<g id="node5" class="node">
<title>appleapps</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1431.04,-180 1111,-180 1111,0 1431.04,0 1431.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1169.87" y="-111.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Calendar &amp; Reminders</text>
<text xml:space="preserve" text-anchor="start" x="1254.4" y="-90.8" font-family="Arial" font-size="13.00" fill="#cbd5e1">Apple</text>
<text xml:space="preserve" text-anchor="start" x="1143.03" y="-69.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">The calendar and the to&#45;do lists on the</text>
<text xml:space="preserve" text-anchor="start" x="1248.09" y="-51.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">phone.</text>
</g>
<!-- assistants -->
<g id="node6" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="332.25,-539 12.21,-539 12.21,-359 332.25,-359 332.25,-539"/>
<text xml:space="preserve" text-anchor="start" x="120.55" y="-479.8" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistant</text>
<text xml:space="preserve" text-anchor="start" x="112.98" y="-458.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="40.93" y="-437.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sorts what comes in, drafts replies, and</text>
<text xml:space="preserve" text-anchor="start" x="43.45" y="-419.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds the machinery itself. Works from</text>
<text xml:space="preserve" text-anchor="start" x="64.69" y="-401.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">written procedures, not memory.</text>
</g>
<!-- vault -->
<g id="node7" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1448.66,-663 1093.39,-663 1093.39,-483 1448.66,-483 1448.66,-663"/>
<text xml:space="preserve" text-anchor="start" x="1229.89" y="-594.8" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="1198.77" y="-573.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="1134.29" y="-552.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1113.45" y="-534.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- jt -->
<g id="node8" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="344.47,-1119 0,-1119 0,-939 344.47,-939 344.47,-1119"/>
<text xml:space="preserve" text-anchor="start" x="161.13" y="-1041" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1018" font-family="Arial" font-size="15.00" fill="#c2f0c2">Jots things down, loads the scanner, and taps</text>
<text xml:space="preserve" text-anchor="start" x="117.62" y="-1000" font-family="Arial" font-size="15.00" fill="#c2f0c2">what needs him.</text>
</g>
<!-- quick&#45;&gt;vault -->
<g id="edge3" class="edge">
<title>quick&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M815.03,-939.18C841.25,-921.36 868.22,-902.44 893,-884 985.11,-815.45 1085.19,-732.47 1159.07,-669.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1160.74,-671.5 1164.74,-664.64 1157.33,-667.51 1160.74,-671.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="913,-868.21 913,-891.01 1033.39,-891.01 1033.39,-868.21 913,-868.21"/>
<text xml:space="preserve" text-anchor="start" x="916" y="-874.01" font-family="Arial" font-size="14.00" fill="#c9c9c9">lands in the in&#45;tray</text>
</g>
<!-- journal&#45;&gt;vault -->
<g id="edge4" class="edge">
<title>journal&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M842.51,-692.54C917.51,-671.57 1006.42,-646.71 1083.68,-625.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1084.1,-627.71 1090.61,-623.17 1082.68,-622.66 1084.1,-627.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="926.23,-670.87 926.23,-693.67 1020.16,-693.67 1020.16,-670.87 926.23,-670.87"/>
<text xml:space="preserve" text-anchor="start" x="929.23" y="-676.67" font-family="Arial" font-size="14.00" fill="#c9c9c9">swept by filing</text>
</g>
<!-- reminders&#45;&gt;appleapps -->
<g id="edge7" class="edge">
<title>reminders&#45;&gt;appleapps</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M852.97,-83.28C872.93,-77.12 893.2,-71.87 913,-68.2 973.75,-56.95 1041.21,-57.73 1100.98,-62.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1100.55,-65.5 1108.26,-63.56 1101.03,-60.27 1100.55,-65.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="933.22,-68.2 933.22,-91 1013.17,-91 1013.17,-68.2 933.22,-68.2"/>
<text xml:space="preserve" text-anchor="start" x="936.22" y="-74" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- reminders&#45;&gt;vault -->
<g id="edge8" class="edge">
<title>reminders&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M852.57,-199.84C913.33,-219.18 979.58,-246.53 1033.39,-284.2 1105.28,-334.53 1167.31,-412.4 1209.81,-474.6"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1207.6,-476.02 1213.98,-480.76 1211.95,-473.08 1207.6,-476.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="913,-284.2 913,-307 1033.39,-307 1033.39,-284.2 913,-284.2"/>
<text xml:space="preserve" text-anchor="start" x="916" y="-290" font-family="Arial" font-size="14.00" fill="#c9c9c9">lands in the in&#45;tray</text>
</g>
<!-- distill&#45;&gt;vault -->
<g id="edge9" class="edge">
<title>distill&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M835.06,-482.15C911.47,-498.11 1003.61,-517.35 1083.38,-534.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1082.7,-536.56 1090.58,-535.52 1083.77,-531.42 1082.7,-536.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="913,-522.11 913,-544.91 1033.39,-544.91 1033.39,-522.11 913,-522.11"/>
<text xml:space="preserve" text-anchor="start" x="916" y="-527.91" font-family="Arial" font-size="14.00" fill="#c9c9c9">lands in the in&#45;tray</text>
</g>
<!-- appleapps&#45;&gt;reminders -->
<g id="edge1" class="edge">
<title>appleapps&#45;&gt;reminders</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1111.37,-108.44C1034.95,-117.32 942.81,-128.03 863.03,-137.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="863.02,-134.66 855.87,-138.14 863.63,-139.88 863.02,-134.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="924.29,-130.68 924.29,-153.48 1022.1,-153.48 1022.1,-130.68 924.29,-130.68"/>
<text xml:space="preserve" text-anchor="start" x="927.29" y="-136.48" font-family="Arial" font-size="14.00" fill="#c9c9c9">new reminders</text>
</g>
<!-- assistants&#45;&gt;distill -->
<g id="edge2" class="edge">
<title>assistants&#45;&gt;distill</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M332.14,-449C387.32,-449 449.39,-449 505.37,-449"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="505.22,-451.63 512.72,-449 505.22,-446.38 505.22,-451.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="404.47,-449 404.47,-471.8 437.7,-471.8 437.7,-449 404.47,-449"/>
<text xml:space="preserve" text-anchor="start" x="407.47" y="-454.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- vault&#45;&gt;reminders -->
<g id="edge6" class="edge">
<title>vault&#45;&gt;reminders</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1136.56,-483.02C1068.58,-436.14 985.25,-377.02 913,-321 903.78,-313.85 902.31,-311.03 893,-304 871.21,-287.53 847.66,-270.78 824.38,-254.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="825.99,-252.7 818.32,-250.63 823.03,-257.03 825.99,-252.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="933.22,-407.07 933.22,-429.87 1013.17,-429.87 1013.17,-407.07 933.22,-407.07"/>
<text xml:space="preserve" text-anchor="start" x="936.22" y="-412.87" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- jt&#45;&gt;quick -->
<g id="edge5" class="edge">
<title>jt&#45;&gt;quick</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M344.29,-1029C377.5,-1029 412.78,-1029 447.46,-1029"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="447.18,-1031.63 454.68,-1029 447.18,-1026.38 447.18,-1031.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="401.01,-1006.2 401.01,-1029 507.4,-1029 507.4,-1006.2 401.01,-1006.2"/>
<text xml:space="preserve" text-anchor="start" x="404.01" y="-1012" font-family="Arial" font-size="14.00" fill="#c9c9c9">jots things down</text>
</g>
</g>
</svg>
`;case`secondBrain`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2591pt" height="1894pt"
 viewBox="0.00 0.00 2591.00 1894.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1879.14)">
<g id="clust1" class="cluster">
<title>cluster_vault</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="622.02,-374.09 622.02,-1525.09 2126.74,-1525.09 2126.74,-374.09 622.02,-374.09"/>
<text xml:space="preserve" text-anchor="start" x="630.02" y="-1512.19" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">THE VAULT</text>
</g>
<!-- health -->
<g id="node1" class="node">
<title>health</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="984.26,-1174.09 664.22,-1174.09 664.22,-994.09 984.26,-994.09 984.26,-1174.09"/>
<text xml:space="preserve" text-anchor="start" x="766.43" y="-1105.89" font-family="Arial" font-size="20.00" fill="#f0f9ff">Health check</text>
<text xml:space="preserve" text-anchor="start" x="792.44" y="-1084.89" font-family="Arial" font-size="13.00" fill="#b6ecf7">daily · free</text>
<text xml:space="preserve" text-anchor="start" x="686.25" y="-1063.29" font-family="Arial" font-size="15.00" fill="#b6ecf7">Looks for broken links, stale projects, and</text>
<text xml:space="preserve" text-anchor="start" x="687.09" y="-1045.29" font-family="Arial" font-size="15.00" fill="#b6ecf7">quiet machines; writes the Health Report.</text>
</g>
<!-- ingest -->
<g id="node2" class="node">
<title>ingest</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M984.26,-867.73C984.26,-876.76 912.53,-884.09 824.24,-884.09 735.94,-884.09 664.22,-876.76 664.22,-867.73 664.22,-867.73 664.22,-720.45 664.22,-720.45 664.22,-711.43 735.94,-704.09 824.24,-704.09 912.53,-704.09 984.26,-711.43 984.26,-720.45 984.26,-720.45 984.26,-867.73 984.26,-867.73"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M984.26,-867.73C984.26,-858.7 912.53,-851.36 824.24,-851.36 735.94,-851.36 664.22,-858.7 664.22,-867.73"/>
<text xml:space="preserve" text-anchor="start" x="795.9" y="-797.09" font-family="Arial" font-size="20.00" fill="#eef2ff">In&#45;tray</text>
<text xml:space="preserve" text-anchor="start" x="724.61" y="-774.09" font-family="Arial" font-size="15.00" fill="#c7d2fe">Every capture lands here first.</text>
</g>
<!-- docs -->
<g id="node3" class="node">
<title>docs</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M986.45,-1447.73C986.45,-1456.76 913.74,-1464.09 824.24,-1464.09 734.73,-1464.09 662.02,-1456.76 662.02,-1447.73 662.02,-1447.73 662.02,-1300.45 662.02,-1300.45 662.02,-1291.43 734.73,-1284.09 824.24,-1284.09 913.74,-1284.09 986.45,-1291.43 986.45,-1300.45 986.45,-1300.45 986.45,-1447.73 986.45,-1447.73"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M986.45,-1447.73C986.45,-1438.7 913.74,-1431.36 824.24,-1431.36 734.73,-1431.36 662.02,-1438.7 662.02,-1447.73"/>
<text xml:space="preserve" text-anchor="start" x="773.66" y="-1395.89" font-family="Arial" font-size="20.00" fill="#eef2ff">Documents</text>
<text xml:space="preserve" text-anchor="start" x="768.61" y="-1374.89" font-family="Arial" font-size="13.00" fill="#c7d2fe">Mac · hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="682.08" y="-1353.29" font-family="Arial" font-size="15.00" fill="#c7d2fe">The text of every document, so one search</text>
<text xml:space="preserve" text-anchor="start" x="693.75" y="-1335.29" font-family="Arial" font-size="15.00" fill="#c7d2fe">finds it, with links that open the original.</text>
</g>
<!-- triage -->
<g id="node4" class="node">
<title>triage</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1528.97,-884.09 1200.38,-884.09 1200.38,-704.09 1528.97,-704.09 1528.97,-884.09"/>
<text xml:space="preserve" text-anchor="start" x="1340.78" y="-815.89" font-family="Arial" font-size="20.00" fill="#f0f9ff">Filing</text>
<text xml:space="preserve" text-anchor="start" x="1345.9" y="-794.89" font-family="Arial" font-size="13.00" fill="#b6ecf7">AI skill</text>
<text xml:space="preserve" text-anchor="start" x="1220.44" y="-773.29" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reads the in&#45;tray and files each item where</text>
<text xml:space="preserve" text-anchor="start" x="1330.49" y="-755.29" font-family="Arial" font-size="15.00" fill="#b6ecf7">it belongs.</text>
</g>
<!-- para -->
<g id="node5" class="node">
<title>para</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2067.46,-867.73C2067.46,-876.76 1995.73,-884.09 1907.44,-884.09 1819.14,-884.09 1747.42,-876.76 1747.42,-867.73 1747.42,-867.73 1747.42,-720.45 1747.42,-720.45 1747.42,-711.43 1819.14,-704.09 1907.44,-704.09 1995.73,-704.09 2067.46,-711.43 2067.46,-720.45 2067.46,-720.45 2067.46,-867.73 2067.46,-867.73"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2067.46,-867.73C2067.46,-858.7 1995.73,-851.36 1907.44,-851.36 1819.14,-851.36 1747.42,-858.7 1747.42,-867.73"/>
<text xml:space="preserve" text-anchor="start" x="1832.97" y="-806.09" font-family="Arial" font-size="20.00" fill="#eef2ff">Projects &amp; Areas</text>
<text xml:space="preserve" text-anchor="start" x="1784.44" y="-783.09" font-family="Arial" font-size="15.00" fill="#c7d2fe">Things with a finish line, and ongoing</text>
<text xml:space="preserve" text-anchor="start" x="1885.34" y="-765.09" font-family="Arial" font-size="15.00" fill="#c7d2fe">duties.</text>
</g>
<!-- zettel -->
<g id="node6" class="node">
<title>zettel</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2067.46,-1157.73C2067.46,-1166.76 1995.73,-1174.09 1907.44,-1174.09 1819.14,-1174.09 1747.42,-1166.76 1747.42,-1157.73 1747.42,-1157.73 1747.42,-1010.45 1747.42,-1010.45 1747.42,-1001.43 1819.14,-994.09 1907.44,-994.09 1995.73,-994.09 2067.46,-1001.43 2067.46,-1010.45 2067.46,-1010.45 2067.46,-1157.73 2067.46,-1157.73"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2067.46,-1157.73C2067.46,-1148.7 1995.73,-1141.36 1907.44,-1141.36 1819.14,-1141.36 1747.42,-1148.7 1747.42,-1157.73"/>
<text xml:space="preserve" text-anchor="start" x="1882.98" y="-1096.09" font-family="Arial" font-size="20.00" fill="#eef2ff">Ideas</text>
<text xml:space="preserve" text-anchor="start" x="1770.26" y="-1073.09" font-family="Arial" font-size="15.00" fill="#c7d2fe">Ideas worth keeping, one per note, linked</text>
<text xml:space="preserve" text-anchor="start" x="1877.83" y="-1055.09" font-family="Arial" font-size="15.00" fill="#c7d2fe">together.</text>
</g>
<!-- memory -->
<g id="node7" class="node">
<title>memory</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M2086.74,-577.73C2086.74,-586.76 2006.38,-594.09 1907.44,-594.09 1808.5,-594.09 1728.13,-586.76 1728.13,-577.73 1728.13,-577.73 1728.13,-430.45 1728.13,-430.45 1728.13,-421.43 1808.5,-414.09 1907.44,-414.09 2006.38,-414.09 2086.74,-421.43 2086.74,-430.45 2086.74,-430.45 2086.74,-577.73 2086.74,-577.73"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M2086.74,-577.73C2086.74,-568.7 2006.38,-561.36 1907.44,-561.36 1808.5,-561.36 1728.13,-568.7 1728.13,-577.73"/>
<text xml:space="preserve" text-anchor="start" x="1871.33" y="-516.09" font-family="Arial" font-size="20.00" fill="#eef2ff">Memory</text>
<text xml:space="preserve" text-anchor="start" x="1748.19" y="-493.09" font-family="Arial" font-size="15.00" fill="#c7d2fe">What the assistant needs to remember between</text>
<text xml:space="preserve" text-anchor="start" x="1876.17" y="-475.09" font-family="Arial" font-size="15.00" fill="#c7d2fe">sessions.</text>
</g>
<!-- intake -->
<g id="node8" class="node">
<title>intake</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="984.37,-1864.09 664.1,-1864.09 664.1,-1684.09 984.37,-1684.09 984.37,-1864.09"/>
<text xml:space="preserve" text-anchor="start" x="758.1" y="-1795.09" font-family="Arial" font-size="20.00" fill="#eff6ff">What comes in</text>
<text xml:space="preserve" text-anchor="start" x="684.16" y="-1772.09" font-family="Arial" font-size="15.00" fill="#bfdbfe">Email, texts, paper, and quick notes. Each</text>
<text xml:space="preserve" text-anchor="start" x="702.08" y="-1754.09" font-family="Arial" font-size="15.00" fill="#bfdbfe">one lands in the in&#45;tray without being</text>
<text xml:space="preserve" text-anchor="start" x="797.14" y="-1736.09" font-family="Arial" font-size="15.00" fill="#bfdbfe">retyped.</text>
</g>
<!-- assistants -->
<g id="node9" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="984.26,-334.09 664.22,-334.09 664.22,-154.09 984.26,-154.09 984.26,-334.09"/>
<text xml:space="preserve" text-anchor="start" x="772.55" y="-274.89" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistant</text>
<text xml:space="preserve" text-anchor="start" x="764.98" y="-253.89" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="692.93" y="-232.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sorts what comes in, drafts replies, and</text>
<text xml:space="preserve" text-anchor="start" x="695.45" y="-214.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds the machinery itself. Works from</text>
<text xml:space="preserve" text-anchor="start" x="716.7" y="-196.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">written procedures, not memory.</text>
</g>
<!-- workshop -->
<g id="node10" class="node">
<title>workshop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="333.09,-1464.09 13.05,-1464.09 13.05,-1284.09 333.09,-1284.09 333.09,-1464.09"/>
<text xml:space="preserve" text-anchor="start" x="128.05" y="-1404.89" font-family="Arial" font-size="20.00" fill="#eff6ff">Workshop</text>
<text xml:space="preserve" text-anchor="start" x="106.96" y="-1383.89" font-family="Arial" font-size="13.00" fill="#bfdbfe">3D printer · embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="40.09" y="-1362.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">Every print is logged, the printer camera</text>
<text xml:space="preserve" text-anchor="start" x="51.76" y="-1344.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">streams live, and finished prints post</text>
<text xml:space="preserve" text-anchor="start" x="84.69" y="-1326.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">themselves to the website.</text>
</g>
<!-- fieldagent -->
<g id="node11" class="node">
<title>fieldagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="346.13,-1003.09 0,-1003.09 0,-823.09 346.13,-823.09 346.13,-1003.09"/>
<text xml:space="preserve" text-anchor="start" x="122.48" y="-943.89" font-family="Arial" font-size="20.00" fill="#eff6ff">Field Agent</text>
<text xml:space="preserve" text-anchor="start" x="140.18" y="-922.89" font-family="Arial" font-size="13.00" fill="#bfdbfe">iPhone app</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-901.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">JT’s phone app: one screen with what needs</text>
<text xml:space="preserve" text-anchor="start" x="40.5" y="-883.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">him today, plus a chat with the assistant</text>
<text xml:space="preserve" text-anchor="start" x="121.38" y="-865.29" font-family="Arial" font-size="15.00" fill="#bfdbfe">from anywhere.</text>
</g>
<!-- backups -->
<g id="node12" class="node">
<title>backups</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2560.51,-594.09 2207.74,-594.09 2207.74,-414.09 2560.51,-414.09 2560.51,-594.09"/>
<text xml:space="preserve" text-anchor="start" x="2345.77" y="-525.09" font-family="Arial" font-size="20.00" fill="#eff6ff">Backups</text>
<text xml:space="preserve" text-anchor="start" x="2227.8" y="-502.09" font-family="Arial" font-size="15.00" fill="#bfdbfe">Notes go to GitHub every hour. The whole Mac</text>
<text xml:space="preserve" text-anchor="start" x="2228.62" y="-484.09" font-family="Arial" font-size="15.00" fill="#bfdbfe">goes to Time Machine on the Pi, with a second</text>
<text xml:space="preserve" text-anchor="start" x="2284.89" y="-466.09" font-family="Arial" font-size="15.00" fill="#bfdbfe">disk that can leave the house.</text>
</g>
<!-- health&#45;&gt;fieldagent -->
<g id="edge7" class="edge">
<title>health&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M664.45,-1042.27C571.15,-1017.69 452.85,-986.53 355.82,-960.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="356.75,-958.5 348.83,-959.13 355.41,-963.58 356.75,-958.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="457.89,-1023.9 457.89,-1046.7 550.27,-1046.7 550.27,-1023.9 457.89,-1023.9"/>
<text xml:space="preserve" text-anchor="start" x="460.89" y="-1029.7" font-family="Arial" font-size="14.00" fill="#c9c9c9">Health Report</text>
</g>
<!-- ingest&#45;&gt;triage -->
<g id="edge10" class="edge">
<title>ingest&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M984.98,-783.75C1005.66,-782.73 1026.55,-781.87 1046.45,-781.29 1093.16,-779.94 1143.73,-780.89 1190.47,-782.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1190.06,-785.37 1197.67,-783.06 1190.28,-780.13 1190.06,-785.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1067.07,-781.29 1067.07,-804.09 1119.77,-804.09 1119.77,-781.29 1067.07,-781.29"/>
<text xml:space="preserve" text-anchor="start" x="1070.07" y="-787.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">read by</text>
</g>
<!-- triage&#45;&gt;para -->
<g id="edge12" class="edge">
<title>triage&#45;&gt;para</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1528.66,-794.09C1594.32,-794.09 1670.08,-794.09 1736.44,-794.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1736.06,-796.72 1743.56,-794.09 1736.06,-791.47 1736.06,-796.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1606.1,-794.09 1606.1,-816.89 1651.01,-816.89 1651.01,-794.09 1606.1,-794.09"/>
<text xml:space="preserve" text-anchor="start" x="1609.1" y="-799.89" font-family="Arial" font-size="14.00" fill="#c9c9c9">to&#45;dos</text>
</g>
<!-- triage&#45;&gt;zettel -->
<g id="edge13" class="edge">
<title>triage&#45;&gt;zettel</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1528.66,-881.49C1595.92,-917.57 1673.77,-959.32 1741.26,-995.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1739.77,-997.69 1747.62,-998.92 1742.25,-993.06 1739.77,-997.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1608.82,-947.79 1608.82,-970.59 1648.29,-970.59 1648.29,-947.79 1608.82,-947.79"/>
<text xml:space="preserve" text-anchor="start" x="1611.82" y="-953.59" font-family="Arial" font-size="14.00" fill="#c9c9c9">ideas</text>
</g>
<!-- triage&#45;&gt;memory -->
<g id="edge14" class="edge">
<title>triage&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1528.66,-706.69C1595.03,-671.1 1671.71,-629.97 1738.57,-594.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1739.48,-596.61 1744.84,-590.75 1736.99,-591.98 1739.48,-596.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1588.97,-666.45 1588.97,-689.25 1668.13,-689.25 1668.13,-666.45 1588.97,-666.45"/>
<text xml:space="preserve" text-anchor="start" x="1591.97" y="-672.25" font-family="Arial" font-size="14.00" fill="#c9c9c9">logs the run</text>
</g>
<!-- triage&#45;&gt;intake -->
<g id="edge11" class="edge">
<title>triage&#45;&gt;intake</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1200.77,-825.48C1143.13,-844.88 1083.47,-876.12 1046.45,-926.29 963.5,-1038.7 1035.91,-1421.43 986.45,-1552.09 969.72,-1596.3 941.73,-1639.6 913.73,-1676.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="911.78,-1674.28 909.24,-1681.81 915.92,-1677.5 911.78,-1674.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1066.3,-926.29 1066.3,-949.09 1120.53,-949.09 1120.53,-926.29 1066.3,-926.29"/>
<text xml:space="preserve" text-anchor="start" x="1069.3" y="-932.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks JT</text>
</g>
<!-- para&#45;&gt;intake -->
<g id="edge15" class="edge">
<title>para&#45;&gt;intake</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1794.87,-882.37C1772.48,-900.77 1749.32,-920.29 1728.13,-939.09 1700.39,-963.7 1695.1,-971.63 1668.13,-997.09 1405.82,-1244.71 1092.43,-1531.19 931.77,-1677.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="930.26,-1675.2 926.48,-1682.19 933.79,-1679.08 930.26,-1675.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1324.71,-1421.69 1324.71,-1444.49 1404.65,-1444.49 1404.65,-1421.69 1324.71,-1421.69"/>
<text xml:space="preserve" text-anchor="start" x="1327.71" y="-1427.49" font-family="Arial" font-size="14.00" fill="#c9c9c9">open to&#45;dos</text>
</g>
<!-- para&#45;&gt;fieldagent -->
<g id="edge16" class="edge">
<title>para&#45;&gt;fieldagent</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1786.37,-706.47C1765.74,-688.69 1745.41,-669.23 1728.13,-649.09 1614.12,-516.16 1662.34,-422.6 1528.97,-309.09 1213.88,-40.93 978.2,111.45 622.02,-99.09 356.44,-256.08 237.66,-632.84 194.57,-813.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="192.06,-812.54 192.9,-820.44 197.17,-813.75 192.06,-812.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1058.51,-41.25 1058.51,-64.05 1128.32,-64.05 1128.32,-41.25 1058.51,-41.25"/>
<text xml:space="preserve" text-anchor="start" x="1061.51" y="-47.05" font-family="Arial" font-size="14.00" fill="#c9c9c9">next steps</text>
</g>
<!-- memory&#45;&gt;backups -->
<g id="edge17" class="edge">
<title>memory&#45;&gt;backups</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2126.74,-504.09C2150.47,-504.09 2174.44,-504.09 2197.72,-504.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2197.36,-506.72 2204.86,-504.09 2197.36,-501.47 2197.36,-506.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2095.26,-481.29 2095.26,-504.09 2167.4,-504.09 2167.4,-481.29 2095.26,-481.29"/>
<text xml:space="preserve" text-anchor="start" x="2098.26" y="-487.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">every hour</text>
</g>
<!-- intake&#45;&gt;ingest -->
<g id="edge1" class="edge">
<title>intake&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M726.36,-1684.13C689.62,-1646.24 650.03,-1599.88 622.02,-1552.09 538.02,-1408.78 530.5,-1361.46 503.91,-1197.49 483.39,-1070.97 586.25,-959.68 680.77,-886.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="682.26,-888.38 686.61,-881.73 679.06,-884.22 682.26,-888.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="443.88,-1174.69 443.88,-1197.49 564.27,-1197.49 564.27,-1174.69 443.88,-1174.69"/>
<text xml:space="preserve" text-anchor="start" x="446.88" y="-1180.49" font-family="Arial" font-size="14.00" fill="#c9c9c9">lands in the in&#45;tray</text>
</g>
<!-- intake&#45;&gt;docs -->
<g id="edge2" class="edge">
<title>intake&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M824.24,-1684.37C824.24,-1622.25 824.24,-1539.47 824.24,-1475.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="826.86,-1475.38 824.24,-1467.88 821.61,-1475.38 826.86,-1475.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="756.65,-1562.69 756.65,-1585.49 863.03,-1585.49 863.03,-1562.69 756.65,-1562.69"/>
<text xml:space="preserve" text-anchor="start" x="759.65" y="-1568.49" font-family="Arial" font-size="14.00" fill="#c9c9c9">searchable PDF</text>
</g>
<!-- intake&#45;&gt;triage -->
<g id="edge3" class="edge">
<title>intake&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M906.5,-1684.21C936.52,-1646.07 967.76,-1599.5 986.45,-1552.09 1066.1,-1350.12 943.99,-1258.7 1046.45,-1067.29 1069.67,-1023.92 1157.01,-950.04 1234.18,-890.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1235.38,-892.43 1239.7,-885.76 1232.17,-888.28 1235.38,-892.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1046.45,-1067.29 1046.45,-1090.09 1140.38,-1090.09 1140.38,-1067.29 1046.45,-1067.29"/>
<text xml:space="preserve" text-anchor="start" x="1049.45" y="-1073.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">swept by filing</text>
</g>
<!-- assistants&#45;&gt;triage -->
<g id="edge4" class="edge">
<title>assistants&#45;&gt;triage</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M973.22,-333.96C977.83,-338.22 982.26,-342.6 986.45,-347.09 1024.44,-387.81 1013.77,-412 1046.45,-457.09 1109.69,-544.32 1193.7,-632.62 1259.39,-696.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1257.53,-698.8 1264.73,-702.16 1261.2,-695.04 1257.53,-698.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1060.46,-565.72 1060.46,-588.52 1126.38,-588.52 1126.38,-565.72 1060.46,-565.72"/>
<text xml:space="preserve" text-anchor="start" x="1063.46" y="-571.52" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs filing</text>
</g>
<!-- assistants&#45;&gt;memory -->
<g id="edge5" class="edge">
<title>assistants&#45;&gt;memory</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M984.19,-282.32C1179.25,-329.22 1509.6,-408.66 1717.46,-458.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1716.73,-461.17 1724.63,-460.37 1717.95,-456.07 1716.73,-461.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1318.89,-412.57 1318.89,-435.37 1410.47,-435.37 1410.47,-412.57 1318.89,-412.57"/>
<text xml:space="preserve" text-anchor="start" x="1321.89" y="-418.37" font-family="Arial" font-size="14.00" fill="#c9c9c9">remembers in</text>
</g>
<!-- workshop&#45;&gt;docs -->
<g id="edge6" class="edge">
<title>workshop&#45;&gt;docs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M332.87,-1374.09C429.21,-1374.09 552.19,-1374.09 650.89,-1374.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="650.75,-1376.72 658.25,-1374.09 650.75,-1371.47 650.75,-1376.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="464.9,-1374.09 464.9,-1396.89 543.26,-1396.89 543.26,-1374.09 464.9,-1374.09"/>
<text xml:space="preserve" text-anchor="start" x="467.9" y="-1379.89" font-family="Arial" font-size="14.00" fill="#c9c9c9">print history</text>
</g>
<!-- fieldagent&#45;&gt;health -->
<g id="edge8" class="edge">
<title>fieldagent&#45;&gt;health</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M346.09,-924.33C425.34,-932.76 519.83,-947.47 602.02,-973.09 605.44,-974.16 608.87,-975.27 612.31,-976.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="611.22,-978.83 619.17,-978.81 612.94,-973.87 611.22,-978.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="444.77,-921.85 444.77,-944.65 485.79,-944.65 485.79,-921.85 444.77,-921.85"/>
<text xml:space="preserve" text-anchor="start" x="447.77" y="-927.65" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads</text>
</g>
<!-- fieldagent&#45;&gt;ingest -->
<g id="edge9" class="edge">
<title>fieldagent&#45;&gt;ingest</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M345.99,-825.79C365.88,-818.39 386.19,-811.95 406.13,-807.29 485.97,-788.62 576.73,-783.88 653.16,-784.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="652.81,-787.02 660.34,-784.47 652.86,-781.77 652.81,-787.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="406.13,-807.29 406.13,-830.09 602.02,-830.09 602.02,-807.29 406.13,-807.29"/>
<text xml:space="preserve" text-anchor="start" x="409.13" y="-813.09" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
</g>
</svg>
`;case`assistantsView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1927pt" height="1141pt"
 viewBox="0.00 0.00 1927.00 1141.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1126.05)">
<g id="clust1" class="cluster">
<title>cluster_assistants</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="568.32,-532 568.32,-1103 1460.84,-1103 1460.84,-532 568.32,-532"/>
<text xml:space="preserve" text-anchor="start" x="576.32" y="-1090.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AI ASSISTANT</text>
</g>
<!-- claude -->
<g id="node1" class="node">
<title>claude</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="930.13,-752 610.09,-752 610.09,-572 930.13,-572 930.13,-752"/>
<text xml:space="preserve" text-anchor="start" x="711.73" y="-683.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Claude Code</text>
<text xml:space="preserve" text-anchor="start" x="700.74" y="-662.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="652.96" y="-641.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Main assistant. Builds and fixes the</text>
<text xml:space="preserve" text-anchor="start" x="683.83" y="-623.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">machinery, runs the skills.</text>
</g>
<!-- grok -->
<g id="node2" class="node">
<title>grok</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="931.89,-1042 608.32,-1042 608.32,-862 931.89,-862 931.89,-1042"/>
<text xml:space="preserve" text-anchor="start" x="748.44" y="-973.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Grok</text>
<text xml:space="preserve" text-anchor="start" x="700.74" y="-952.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">terminal inside Obsidian</text>
<text xml:space="preserve" text-anchor="start" x="628.38" y="-931.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Second assistant. Same vault, same skills,</text>
<text xml:space="preserve" text-anchor="start" x="731.34" y="-913.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">same rules.</text>
</g>
<!-- skills -->
<g id="node3" class="node">
<title>skills</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1420.84,-939.64C1420.84,-948.67 1349.11,-956 1260.82,-956 1172.52,-956 1100.8,-948.67 1100.8,-939.64 1100.8,-939.64 1100.8,-792.36 1100.8,-792.36 1100.8,-783.33 1172.52,-776 1260.82,-776 1349.11,-776 1420.84,-783.33 1420.84,-792.36 1420.84,-792.36 1420.84,-939.64 1420.84,-939.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1420.84,-939.64C1420.84,-930.61 1349.11,-923.27 1260.82,-923.27 1172.52,-923.27 1100.8,-930.61 1100.8,-939.64"/>
<text xml:space="preserve" text-anchor="start" x="1176.34" y="-896.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Written procedures</text>
<text xml:space="preserve" text-anchor="start" x="1222.17" y="-875.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">System/Skills</text>
<text xml:space="preserve" text-anchor="start" x="1126.17" y="-854.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Step&#45;by&#45;step instructions both assistants</text>
<text xml:space="preserve" text-anchor="start" x="1137.84" y="-836.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">follow: file notes, distill a chat, lint the</text>
<text xml:space="preserve" text-anchor="start" x="1205.37" y="-818.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">vault, plain style.</text>
</g>
<!-- jt -->
<g id="node4" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="345.3,-752 0.83,-752 0.83,-572 345.3,-572 345.3,-752"/>
<text xml:space="preserve" text-anchor="start" x="161.96" y="-674" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="20.89" y="-651" font-family="Arial" font-size="15.00" fill="#c2f0c2">Jots things down, loads the scanner, and taps</text>
<text xml:space="preserve" text-anchor="start" x="118.45" y="-633" font-family="Arial" font-size="15.00" fill="#c2f0c2">what needs him.</text>
</g>
<!-- fieldagent -->
<g id="node5" class="node">
<title>fieldagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="346.13,-1042 0,-1042 0,-862 346.13,-862 346.13,-1042"/>
<text xml:space="preserve" text-anchor="start" x="122.48" y="-982.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Field Agent</text>
<text xml:space="preserve" text-anchor="start" x="140.18" y="-961.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">iPhone app</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-940.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">JT’s phone app: one screen with what needs</text>
<text xml:space="preserve" text-anchor="start" x="40.5" y="-922.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">him today, plus a chat with the assistant</text>
<text xml:space="preserve" text-anchor="start" x="121.38" y="-904.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">from anywhere.</text>
</g>
<!-- intake -->
<g id="node6" class="node">
<title>intake</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1420.95,-180 1100.68,-180 1100.68,0 1420.95,0 1420.95,-180"/>
<text xml:space="preserve" text-anchor="start" x="1194.68" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">What comes in</text>
<text xml:space="preserve" text-anchor="start" x="1120.74" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Email, texts, paper, and quick notes. Each</text>
<text xml:space="preserve" text-anchor="start" x="1138.66" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">one lands in the in&#45;tray without being</text>
<text xml:space="preserve" text-anchor="start" x="1233.72" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">retyped.</text>
</g>
<!-- vault -->
<g id="node7" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1897.21,-791 1541.95,-791 1541.95,-611 1897.21,-611 1897.21,-791"/>
<text xml:space="preserve" text-anchor="start" x="1678.45" y="-722.8" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="1647.32" y="-701.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="1582.84" y="-680.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1562" y="-662.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- claude&#45;&gt;skills -->
<g id="edge5" class="edge">
<title>claude&#45;&gt;skills</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M930.12,-728.37C981.4,-749.78 1038.41,-773.58 1090.41,-795.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1089.33,-797.68 1097.27,-798.15 1091.36,-792.84 1089.33,-797.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="991.89,-770.12 991.89,-792.92 1040.68,-792.92 1040.68,-770.12 991.89,-770.12"/>
<text xml:space="preserve" text-anchor="start" x="994.89" y="-775.92" font-family="Arial" font-size="14.00" fill="#c9c9c9">follows</text>
</g>
<!-- claude&#45;&gt;intake -->
<g id="edge4" class="edge">
<title>claude&#45;&gt;intake</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M812.86,-572.14C852.09,-493.52 916.02,-378.96 991.89,-294.2 1027.27,-254.67 1071.21,-217.52 1113.21,-186.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1114.7,-188.19 1119.15,-181.61 1111.57,-183.98 1114.7,-188.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="999.67,-294.2 999.67,-317 1032.91,-317 1032.91,-294.2 999.67,-294.2"/>
<text xml:space="preserve" text-anchor="start" x="1002.67" y="-300" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- claude&#45;&gt;vault -->
<g id="edge6" class="edge">
<title>claude&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M901.13,-572C959.38,-536.95 1030.65,-500.97 1100.68,-483.2 1255.83,-443.83 1310.52,-428.19 1460.84,-483.2 1527.55,-507.61 1588.89,-557.77 1634.98,-603.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1632.98,-605.51 1640.12,-608.99 1636.71,-601.81 1632.98,-605.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1227.86,-483.2 1227.86,-506 1293.77,-506 1293.77,-483.2 1227.86,-483.2"/>
<text xml:space="preserve" text-anchor="start" x="1230.86" y="-489" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs filing</text>
</g>
<!-- grok&#45;&gt;skills -->
<g id="edge7" class="edge">
<title>grok&#45;&gt;skills</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M931.81,-923.72C982.4,-914.82 1038.44,-904.96 1089.68,-895.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1089.94,-898.56 1096.87,-894.67 1089.03,-893.39 1089.94,-898.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="991.89,-911.58 991.89,-934.38 1040.68,-934.38 1040.68,-911.58 991.89,-911.58"/>
<text xml:space="preserve" text-anchor="start" x="994.89" y="-917.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">follows</text>
</g>
<!-- grok&#45;&gt;vault -->
<g id="edge8" class="edge">
<title>grok&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M876.04,-862.05C895.17,-844.35 914.55,-825.52 931.89,-807 961.31,-775.59 956.32,-755.22 991.89,-731 1149.57,-623.67 1374.18,-632.56 1531.84,-657.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1531.32,-660.46 1539.14,-659.08 1532.17,-655.28 1531.32,-660.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1227.86,-677.05 1227.86,-699.85 1293.77,-699.85 1293.77,-677.05 1227.86,-677.05"/>
<text xml:space="preserve" text-anchor="start" x="1230.86" y="-682.85" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs filing</text>
</g>
<!-- skills&#45;&gt;vault -->
<g id="edge9" class="edge">
<title>skills&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1460.83,-794.11C1484.59,-785.53 1508.78,-776.79 1532.35,-768.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1533.15,-770.77 1539.32,-765.76 1531.37,-765.84 1533.15,-770.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1410.13,-756.54 1410.13,-779.34 1501.71,-779.34 1501.71,-756.54 1410.13,-756.54"/>
<text xml:space="preserve" text-anchor="start" x="1413.13" y="-762.34" font-family="Arial" font-size="14.00" fill="#c9c9c9">remembers in</text>
</g>
<!-- jt&#45;&gt;claude -->
<g id="edge1" class="edge">
<title>jt&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M345.11,-651.5C365.67,-650.55 386.37,-649.74 406.13,-649.2 469.31,-647.46 485.15,-647.37 548.32,-649.2 565.09,-649.69 582.56,-650.38 600.01,-651.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="599.63,-653.8 607.25,-651.54 599.88,-648.56 599.63,-653.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="441.56,-649.2 441.56,-672 512.9,-672 512.9,-649.2 441.56,-649.2"/>
<text xml:space="preserve" text-anchor="start" x="444.56" y="-655" font-family="Arial" font-size="14.00" fill="#c9c9c9">works with</text>
</g>
<!-- fieldagent&#45;&gt;claude -->
<g id="edge2" class="edge">
<title>fieldagent&#45;&gt;claude</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M345.78,-868.31C426.02,-829.21 521.22,-782.81 601.01,-743.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="601.85,-746.44 607.44,-740.79 599.55,-741.72 601.85,-746.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="406.13,-832.97 406.13,-855.77 548.32,-855.77 548.32,-832.97 406.13,-832.97"/>
<text xml:space="preserve" text-anchor="start" x="409.13" y="-838.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- fieldagent&#45;&gt;grok -->
<g id="edge3" class="edge">
<title>fieldagent&#45;&gt;grok</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M345.78,-952C425.12,-952 519.09,-952 598.31,-952"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="597.87,-954.63 605.37,-952 597.87,-949.38 597.87,-954.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="406.13,-952 406.13,-974.8 548.32,-974.8 548.32,-952 406.13,-952"/>
<text xml:space="preserve" text-anchor="start" x="409.13" y="-957.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
</g>
</svg>
`;case`fieldAgentView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2252pt" height="1182pt"
 viewBox="0.00 0.00 2252.00 1182.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1167.27)">
<g id="clust1" class="cluster">
<title>cluster_fieldagent</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="543.32,-510 543.32,-1087 2213.42,-1087 2213.42,-510 543.32,-510"/>
<text xml:space="preserve" text-anchor="start" x="551.32" y="-1074.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FIELD AGENT</text>
</g>
<!-- mission -->
<g id="node1" class="node">
<title>mission</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="914.43,-736 583.32,-736 583.32,-556 914.43,-556 914.43,-736"/>
<text xml:space="preserve" text-anchor="start" x="679.97" y="-676.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mission Control</text>
<text xml:space="preserve" text-anchor="start" x="703.72" y="-655.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">the front screen</text>
<text xml:space="preserve" text-anchor="start" x="603.38" y="-634.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Today’s calendar, mail and texts that need</text>
<text xml:space="preserve" text-anchor="start" x="611.29" y="-616.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">action, and the next step for each project.</text>
<text xml:space="preserve" text-anchor="start" x="676.76" y="-598.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Tap a row to act on it.</text>
</g>
<!-- app -->
<g id="node2" class="node">
<title>app</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="908.9,-1026 588.86,-1026 588.86,-846 908.9,-846 908.9,-1026"/>
<text xml:space="preserve" text-anchor="start" x="727.76" y="-957.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Chat</text>
<text xml:space="preserve" text-anchor="start" x="704.8" y="-936.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Claude or Grok</text>
<text xml:space="preserve" text-anchor="start" x="615.9" y="-915.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Ask the assistant anything; the reply fills</text>
<text xml:space="preserve" text-anchor="start" x="693.45" y="-897.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">in as it is written.</text>
</g>
<!-- approval -->
<g id="node3" class="node">
<title>approval</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2173.42,-1026 1853.38,-1026 1853.38,-846 2173.42,-846 2173.42,-1026"/>
<text xml:space="preserve" text-anchor="start" x="1957.82" y="-948" font-family="Arial" font-size="20.00" fill="#f0f9ff">Allow / Deny</text>
<text xml:space="preserve" text-anchor="start" x="1879.58" y="-925" font-family="Arial" font-size="15.00" fill="#b6ecf7">Before the assistant edits a file or runs a</text>
<text xml:space="preserve" text-anchor="start" x="1882.9" y="-907" font-family="Arial" font-size="15.00" fill="#b6ecf7">command, the phone buzzes and asks.</text>
</g>
<!-- relay -->
<g id="node4" class="node">
<title>relay</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1581.02,-888 1234.89,-888 1234.89,-708 1581.02,-708 1581.02,-888"/>
<text xml:space="preserve" text-anchor="start" x="1356.82" y="-837.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Home base</text>
<text xml:space="preserve" text-anchor="start" x="1336.43" y="-816.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">small service on the Mac</text>
<text xml:space="preserve" text-anchor="start" x="1254.95" y="-795.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Passes each phone message to the assistant,</text>
<text xml:space="preserve" text-anchor="start" x="1258.3" y="-777.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">streams the answer back, and keeps Mission</text>
<text xml:space="preserve" text-anchor="start" x="1277.05" y="-759.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Control live. Phone and Mac talk over a</text>
<text xml:space="preserve" text-anchor="start" x="1355.02" y="-741.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">private network.</text>
</g>
<!-- jt -->
<g id="node5" class="node">
<title>jt</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="344.47,-964 0,-964 0,-784 344.47,-784 344.47,-964"/>
<text xml:space="preserve" text-anchor="start" x="161.13" y="-886" font-family="Arial" font-size="20.00" fill="#f8fafc">JT</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-863" font-family="Arial" font-size="15.00" fill="#c2f0c2">Jots things down, loads the scanner, and taps</text>
<text xml:space="preserve" text-anchor="start" x="117.62" y="-845" font-family="Arial" font-size="15.00" fill="#c2f0c2">what needs him.</text>
</g>
<!-- appleapps -->
<g id="node6" class="node">
<title>appleapps</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="332.25,-612 12.21,-612 12.21,-432 332.25,-432 332.25,-612"/>
<text xml:space="preserve" text-anchor="start" x="71.08" y="-543.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Calendar &amp; Reminders</text>
<text xml:space="preserve" text-anchor="start" x="155.61" y="-522.8" font-family="Arial" font-size="13.00" fill="#cbd5e1">Apple</text>
<text xml:space="preserve" text-anchor="start" x="44.24" y="-501.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">The calendar and the to&#45;do lists on the</text>
<text xml:space="preserve" text-anchor="start" x="149.3" y="-483.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">phone.</text>
</g>
<!-- intake -->
<g id="node7" class="node">
<title>intake</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2173.53,-180 1853.26,-180 1853.26,0 2173.53,0 2173.53,-180"/>
<text xml:space="preserve" text-anchor="start" x="1947.26" y="-111" font-family="Arial" font-size="20.00" fill="#eff6ff">What comes in</text>
<text xml:space="preserve" text-anchor="start" x="1873.32" y="-88" font-family="Arial" font-size="15.00" fill="#bfdbfe">Email, texts, paper, and quick notes. Each</text>
<text xml:space="preserve" text-anchor="start" x="1891.24" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">one lands in the in&#45;tray without being</text>
<text xml:space="preserve" text-anchor="start" x="1986.3" y="-52" font-family="Arial" font-size="15.00" fill="#bfdbfe">retyped.</text>
</g>
<!-- vault -->
<g id="node8" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1585.59,-470 1230.32,-470 1230.32,-290 1585.59,-290 1585.59,-470"/>
<text xml:space="preserve" text-anchor="start" x="1366.82" y="-401.8" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="1335.7" y="-380.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="1271.22" y="-359.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1250.38" y="-341.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- assistants -->
<g id="node9" class="node">
<title>assistants</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2173.42,-470 1853.38,-470 1853.38,-290 2173.42,-290 2173.42,-470"/>
<text xml:space="preserve" text-anchor="start" x="1961.71" y="-410.8" font-family="Arial" font-size="20.00" fill="#eff6ff">AI assistant</text>
<text xml:space="preserve" text-anchor="start" x="1954.14" y="-389.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Claude Code · Grok</text>
<text xml:space="preserve" text-anchor="start" x="1882.09" y="-368.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sorts what comes in, drafts replies, and</text>
<text xml:space="preserve" text-anchor="start" x="1884.61" y="-350.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">builds the machinery itself. Works from</text>
<text xml:space="preserve" text-anchor="start" x="1905.85" y="-332.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">written procedures, not memory.</text>
</g>
<!-- mission&#45;&gt;relay -->
<g id="edge9" class="edge">
<title>mission&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M914.4,-625.45C993.3,-620.86 1088.28,-623.15 1170.32,-647.2 1210.68,-659.03 1250.73,-680.03 1286.09,-702.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1284.24,-704.6 1291.96,-706.49 1287.11,-700.2 1284.24,-704.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1034.74,-647.2 1034.74,-670 1110.02,-670 1110.02,-647.2 1034.74,-647.2"/>
<text xml:space="preserve" text-anchor="start" x="1037.74" y="-653" font-family="Arial" font-size="14.00" fill="#c9c9c9">button taps</text>
</g>
<!-- mission&#45;&gt;jt -->
<g id="edge7" class="edge">
<title>mission&#45;&gt;jt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M583.6,-711.18C511.7,-739.71 427.11,-773.27 353.48,-802.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="352.91,-799.89 346.91,-805.09 354.84,-804.77 352.91,-799.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="404.47,-780.42 404.47,-803.22 523.32,-803.22 523.32,-780.42 404.47,-780.42"/>
<text xml:space="preserve" text-anchor="start" x="407.47" y="-786.22" font-family="Arial" font-size="14.00" fill="#c9c9c9">what needs action</text>
</g>
<!-- mission&#45;&gt;vault -->
<g id="edge8" class="edge">
<title>mission&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M914.42,-579.39C1007.58,-541.68 1124.42,-494.38 1220.91,-455.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1221.71,-457.83 1227.67,-452.58 1219.74,-452.96 1221.71,-457.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="974.43,-552.37 974.43,-575.17 1170.32,-575.17 1170.32,-552.37 974.43,-552.37"/>
<text xml:space="preserve" text-anchor="start" x="977.43" y="-558.17" font-family="Arial" font-size="14.00" fill="#c9c9c9">triage button: note with full text</text>
</g>
<!-- app&#45;&gt;relay -->
<g id="edge10" class="edge">
<title>app&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M908.52,-902.68C1003.89,-882.65 1125.62,-857.09 1224.9,-836.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1225.29,-838.84 1232.09,-834.73 1224.21,-833.7 1225.29,-838.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1037.48,-887.42 1037.48,-910.22 1107.28,-910.22 1107.28,-887.42 1037.48,-887.42"/>
<text xml:space="preserve" text-anchor="start" x="1040.48" y="-893.22" font-family="Arial" font-size="14.00" fill="#c9c9c9">messages</text>
</g>
<!-- approval&#45;&gt;relay -->
<g id="edge11" class="edge">
<title>approval&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1853.55,-899.67C1772.88,-881.22 1674.49,-858.72 1590.8,-839.59"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1591.51,-837.06 1583.62,-837.94 1590.34,-842.17 1591.51,-837.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1673.24,-883.42 1673.24,-906.22 1765.61,-906.22 1765.61,-883.42 1673.24,-883.42"/>
<text xml:space="preserve" text-anchor="start" x="1676.24" y="-889.22" font-family="Arial" font-size="14.00" fill="#c9c9c9">Allow or Deny</text>
</g>
<!-- relay&#45;&gt;mission -->
<g id="edge14" class="edge">
<title>relay&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1235.12,-758.25C1139.46,-736.12 1020.64,-708.64 924.53,-686.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="925.26,-683.88 917.37,-684.74 924.08,-688.99 925.26,-683.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1032.02,-740.08 1032.02,-762.88 1112.74,-762.88 1112.74,-740.08 1032.02,-740.08"/>
<text xml:space="preserve" text-anchor="start" x="1035.02" y="-745.88" font-family="Arial" font-size="14.00" fill="#c9c9c9">live updates</text>
</g>
<!-- relay&#45;&gt;approval -->
<g id="edge15" class="edge">
<title>relay&#45;&gt;approval</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1580.59,-782.49C1648.04,-781.2 1725.41,-785.8 1793.26,-805.2 1822.06,-813.43 1850.94,-826.44 1877.83,-841.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1876.4,-843.33 1884.23,-844.69 1878.96,-838.75 1876.4,-843.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1688.81,-805.2 1688.81,-828 1750.04,-828 1750.04,-805.2 1688.81,-805.2"/>
<text xml:space="preserve" text-anchor="start" x="1691.81" y="-811" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks first</text>
</g>
<!-- relay&#45;&gt;intake -->
<g id="edge12" class="edge">
<title>relay&#45;&gt;intake</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1470.68,-708.48C1552.02,-593.33 1702.51,-389.74 1853.26,-235 1868.76,-219.1 1885.63,-202.77 1902.4,-187.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1904.19,-188.99 1907.88,-181.96 1900.61,-185.15 1904.19,-188.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1645.59,-472.41 1645.59,-495.21 1793.26,-495.21 1793.26,-472.41 1645.59,-472.41"/>
<text xml:space="preserve" text-anchor="start" x="1648.59" y="-478.21" font-family="Arial" font-size="14.00" fill="#c9c9c9">when the phone opens</text>
</g>
<!-- relay&#45;&gt;vault -->
<g id="edge13" class="edge">
<title>relay&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1407.96,-708.23C1407.96,-641.28 1407.96,-549.81 1407.96,-480.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1410.58,-480.46 1407.96,-472.96 1405.33,-480.46 1410.58,-480.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1373.05,-577.6 1373.05,-600.4 1414.07,-600.4 1414.07,-577.6 1373.05,-577.6"/>
<text xml:space="preserve" text-anchor="start" x="1376.05" y="-583.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads</text>
</g>
<!-- relay&#45;&gt;assistants -->
<g id="edge16" class="edge">
<title>relay&#45;&gt;assistants</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1532.46,-708.33C1621.07,-644.51 1743.68,-557.26 1853.26,-483 1856.87,-480.56 1860.52,-478.1 1864.21,-475.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1865.59,-477.85 1870.37,-471.5 1862.67,-473.49 1865.59,-477.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1648.33,-619.4 1648.33,-642.2 1790.52,-642.2 1790.52,-619.4 1648.33,-619.4"/>
<text xml:space="preserve" text-anchor="start" x="1651.33" y="-625.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">one turn per message</text>
</g>
<!-- jt&#45;&gt;mission -->
<g id="edge1" class="edge">
<title>jt&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M236.52,-784.02C277.82,-733.46 336.59,-675.07 404.47,-647.2 456.78,-625.72 517.47,-619.99 573.14,-621.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="572.88,-623.91 580.45,-621.52 573.04,-618.66 572.88,-623.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="439.11,-647.2 439.11,-670 488.68,-670 488.68,-647.2 439.11,-647.2"/>
<text xml:space="preserve" text-anchor="start" x="442.11" y="-653" font-family="Arial" font-size="14.00" fill="#c9c9c9">checks</text>
</g>
<!-- jt&#45;&gt;app -->
<g id="edge2" class="edge">
<title>jt&#45;&gt;app</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M344.09,-892.43C418.19,-900.43 504.72,-909.77 578.64,-917.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="578.23,-920.34 585.97,-918.53 578.8,-915.12 578.23,-920.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="446.5,-910.55 446.5,-933.35 481.29,-933.35 481.29,-910.55 446.5,-910.55"/>
<text xml:space="preserve" text-anchor="start" x="449.5" y="-916.35" font-family="Arial" font-size="14.00" fill="#c9c9c9">asks</text>
</g>
<!-- jt&#45;&gt;approval -->
<g id="edge3" class="edge">
<title>jt&#45;&gt;approval</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M296.49,-963.98C365.4,-1008.69 454.99,-1057.97 543.32,-1081 1003.18,-1200.87 1567.61,-1071.02 1843.86,-990.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1844.2,-992.95 1850.66,-988.32 1842.72,-987.91 1844.2,-992.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1056.15,-1129.42 1056.15,-1152.22 1088.61,-1152.22 1088.61,-1129.42 1056.15,-1129.42"/>
<text xml:space="preserve" text-anchor="start" x="1059.15" y="-1135.22" font-family="Arial" font-size="14.00" fill="#c9c9c9">taps</text>
</g>
<!-- appleapps&#45;&gt;mission -->
<g id="edge4" class="edge">
<title>appleapps&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M332.09,-495.78C392.89,-491.01 462.28,-492.07 523.32,-509.2 556.03,-518.38 588.69,-533.78 618.57,-551"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="616.93,-553.08 624.73,-554.62 619.59,-548.56 616.93,-553.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="411.87,-509.2 411.87,-532 515.92,-532 515.92,-509.2 411.87,-509.2"/>
<text xml:space="preserve" text-anchor="start" x="414.87" y="-515" font-family="Arial" font-size="14.00" fill="#c9c9c9">today’s events</text>
</g>
<!-- intake&#45;&gt;mission -->
<g id="edge5" class="edge">
<title>intake&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1853.56,-81.47C1632.73,-78.04 1231.23,-103.44 974.43,-307 893.76,-370.95 832.14,-472.04 794.03,-547.21"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="791.87,-545.65 790.86,-553.54 796.57,-548.01 791.87,-545.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1365.26,-166.68 1365.26,-189.48 1450.65,-189.48 1450.65,-166.68 1365.26,-166.68"/>
<text xml:space="preserve" text-anchor="start" x="1368.26" y="-172.48" font-family="Arial" font-size="14.00" fill="#c9c9c9">needs action</text>
</g>
<!-- vault&#45;&gt;mission -->
<g id="edge6" class="edge">
<title>vault&#45;&gt;mission</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1230.4,-339.52C1148.83,-329.56 1052.9,-330.73 974.43,-368.2 897.07,-405.14 837.77,-483.2 799.6,-547.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="797.42,-545.72 795.88,-553.51 801.95,-548.38 797.42,-545.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1058.88,-368.2 1058.88,-391 1085.88,-391 1085.88,-368.2 1058.88,-368.2"/>
<text xml:space="preserve" text-anchor="start" x="1061.88" y="-376.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
</g>
</svg>
`;case`backupsView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1489pt" height="859pt"
 viewBox="0.00 0.00 1489.00 859.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 844.05)">
<g id="clust1" class="cluster">
<title>cluster_backups</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="507.41,-250 507.41,-821 1450.97,-821 1450.97,-250 507.41,-250"/>
<text xml:space="preserve" text-anchor="start" x="515.41" y="-808.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKUPS</text>
</g>
<!-- vaultpush -->
<g id="node1" class="node">
<title>vaultpush</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="881,-470 547.41,-470 547.41,-290 881,-290 881,-470"/>
<text xml:space="preserve" text-anchor="start" x="656.39" y="-401.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Vault backup</text>
<text xml:space="preserve" text-anchor="start" x="678.08" y="-380.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">hourly · free</text>
<text xml:space="preserve" text-anchor="start" x="567.47" y="-359.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Commits the whole vault, plus a snapshot of</text>
<text xml:space="preserve" text-anchor="start" x="571.22" y="-341.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">the Mac’s setup, to a private GitHub repo.</text>
</g>
<!-- timemachine -->
<g id="node2" class="node">
<title>timemachine</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="874.23,-760 554.19,-760 554.19,-580 874.23,-580 874.23,-760"/>
<text xml:space="preserve" text-anchor="start" x="651.41" y="-682.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Time Machine</text>
<text xml:space="preserve" text-anchor="start" x="692.54" y="-661.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">macOS</text>
<text xml:space="preserve" text-anchor="start" x="601.24" y="-640.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Full Mac backup, history included.</text>
</g>
<!-- tmshare -->
<g id="node3" class="node">
<title>tmshare</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1410.97,-453.64C1410.97,-462.67 1339.25,-470 1250.95,-470 1162.66,-470 1090.93,-462.67 1090.93,-453.64 1090.93,-453.64 1090.93,-306.36 1090.93,-306.36 1090.93,-297.33 1162.66,-290 1250.95,-290 1339.25,-290 1410.97,-297.33 1410.97,-306.36 1410.97,-306.36 1410.97,-453.64 1410.97,-453.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1410.97,-453.64C1410.97,-444.61 1339.25,-437.27 1250.95,-437.27 1162.66,-437.27 1090.93,-444.61 1090.93,-453.64"/>
<text xml:space="preserve" text-anchor="start" x="1197.04" y="-401.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Backup disk</text>
<text xml:space="preserve" text-anchor="start" x="1210.49" y="-380.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">brainpi · 4 TB</text>
<text xml:space="preserve" text-anchor="start" x="1111.31" y="-359.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Where the Mac backs itself up, encrypted.</text>
<text xml:space="preserve" text-anchor="start" x="1125.9" y="-341.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Mirrored to a second disk every night.</text>
</g>
<!-- usb -->
<g id="node4" class="node">
<title>usb</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="1410.97,-760 1090.93,-760 1090.93,-580 1410.97,-580 1410.97,-760"/>
<text xml:space="preserve" text-anchor="start" x="1205.94" y="-673" font-family="Arial" font-size="20.00" fill="#ffe0c2">USB drive</text>
<text xml:space="preserve" text-anchor="start" x="1115.86" y="-650" font-family="Arial" font-size="15.00" fill="#f9b27c">A second copy that can leave the house.</text>
</g>
<!-- vault -->
<g id="node5" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="355.27,-470 0,-470 0,-290 355.27,-290 355.27,-470"/>
<text xml:space="preserve" text-anchor="start" x="136.5" y="-401.8" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="105.37" y="-380.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="40.89" y="-359.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-341.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- github -->
<g id="node6" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1416.3,-180 1085.61,-180 1085.61,0 1416.3,0 1416.3,-180"/>
<text xml:space="preserve" text-anchor="start" x="1219.83" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1123.37" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the private vault backup and the</text>
<text xml:space="preserve" text-anchor="start" x="1109.63" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">website code; builds and hosts embry.dev.</text>
</g>
<!-- vaultpush&#45;&gt;github -->
<g id="edge2" class="edge">
<title>vaultpush&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M880.74,-290.23C942.87,-256.54 1013.62,-218.17 1076.45,-184.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1077.66,-186.42 1083,-180.54 1075.15,-181.81 1077.66,-186.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="943.34,-252.36 943.34,-275.16 1023.27,-275.16 1023.27,-252.36 943.34,-252.36"/>
<text xml:space="preserve" text-anchor="start" x="946.34" y="-258.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">private repo</text>
</g>
<!-- timemachine&#45;&gt;tmshare -->
<g id="edge3" class="edge">
<title>timemachine&#45;&gt;tmshare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M874.2,-583.78C941.08,-547.5 1018.86,-505.33 1086.24,-468.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1087.25,-471.22 1092.59,-465.34 1084.75,-466.61 1087.25,-471.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="944.51,-542.36 944.51,-565.16 1022.11,-565.16 1022.11,-542.36 944.51,-542.36"/>
<text xml:space="preserve" text-anchor="start" x="947.51" y="-548.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">backs up to</text>
</g>
<!-- timemachine&#45;&gt;usb -->
<g id="edge4" class="edge">
<title>timemachine&#45;&gt;usb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M874.2,-670C939.22,-670 1014.54,-670 1080.59,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1080.58,-672.63 1088.08,-670 1080.58,-667.38 1080.58,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="941,-670 941,-692.8 1025.61,-692.8 1025.61,-670 941,-670"/>
<text xml:space="preserve" text-anchor="start" x="944" y="-675.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">second copy</text>
</g>
<!-- vault&#45;&gt;vaultpush -->
<g id="edge1" class="edge">
<title>vault&#45;&gt;vaultpush</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.15,-380C413.68,-380 478.8,-380 537.28,-380"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="537.21,-382.63 544.71,-380 537.21,-377.38 537.21,-382.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="415.27,-380 415.27,-402.8 487.41,-402.8 487.41,-380 415.27,-380"/>
<text xml:space="preserve" text-anchor="start" x="418.27" y="-385.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">every hour</text>
</g>
</g>
</svg>
`;case`workshopView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="973pt" height="795pt"
 viewBox="0.00 0.00 973.00 795.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 780.05)">
<g id="clust1" class="cluster">
<title>cluster_workshop</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-163 8,-757 408.04,-757 408.04,-163 8,-163"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-744.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WORKSHOP</text>
</g>
<!-- printing -->
<g id="node1" class="node">
<title>printing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.04,-383 48,-383 48,-203 368.04,-203 368.04,-383"/>
<text xml:space="preserve" text-anchor="start" x="159.66" y="-314.8" font-family="Arial" font-size="20.00" fill="#eff6ff">3D printing</text>
<text xml:space="preserve" text-anchor="start" x="160.68" y="-293.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Bambu Lab P2S</text>
<text xml:space="preserve" text-anchor="start" x="72.12" y="-272.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Logs every print and drafts a gallery card</text>
<text xml:space="preserve" text-anchor="start" x="145.9" y="-254.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">when one finishes.</text>
</g>
<!-- site -->
<g id="node2" class="node">
<title>site</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.04,-696 48,-696 48,-516 368.04,-516 368.04,-696"/>
<text xml:space="preserve" text-anchor="start" x="161.34" y="-627.8" font-family="Arial" font-size="20.00" fill="#eff6ff">embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="129.62" y="-606.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Astro site on GitHub Pages</text>
<text xml:space="preserve" text-anchor="start" x="85.87" y="-585.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Public site: the studio, the live printer</text>
<text xml:space="preserve" text-anchor="start" x="110.89" y="-567.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">camera, and the print gallery.</text>
</g>
<!-- cloudflare -->
<g id="node3" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="940.81,-470 589.26,-470 589.26,-290 940.81,-290 940.81,-470"/>
<text xml:space="preserve" text-anchor="start" x="719.45" y="-392" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="619.14" y="-369" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="613.27" y="-351" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- vault -->
<g id="node4" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="942.66,-180 587.4,-180 587.4,0 942.66,0 942.66,-180"/>
<text xml:space="preserve" text-anchor="start" x="723.9" y="-111.8" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="692.77" y="-90.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="628.29" y="-69.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="607.45" y="-51.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- github -->
<g id="node5" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="930.38,-760 599.69,-760 599.69,-580 930.38,-580 930.38,-760"/>
<text xml:space="preserve" text-anchor="start" x="733.91" y="-682" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="637.45" y="-659" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the private vault backup and the</text>
<text xml:space="preserve" text-anchor="start" x="623.7" y="-641" font-family="Arial" font-size="15.00" fill="#cbd5e1">website code; builds and hosts embry.dev.</text>
</g>
<!-- printing&#45;&gt;site -->
<g id="edge3" class="edge">
<title>printing&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M208.02,-382.69C208.02,-421.08 208.02,-466.07 208.02,-505.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="205.4,-505.5 208.02,-513 210.65,-505.5 205.4,-505.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="154.44,-438.1 154.44,-460.9 232.8,-460.9 232.8,-438.1 154.44,-438.1"/>
<text xml:space="preserve" text-anchor="start" x="157.44" y="-443.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">gallery card</text>
</g>
<!-- printing&#45;&gt;cloudflare -->
<g id="edge2" class="edge">
<title>printing&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.71,-308.66C418.83,-314.48 475.63,-321.75 527.4,-330.2 544.2,-332.94 561.61,-336.07 579.02,-339.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="578.43,-341.94 586.29,-340.78 579.43,-336.79 578.43,-341.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="428.04,-330.2 428.04,-353 527.4,-353 527.4,-330.2 428.04,-330.2"/>
<text xml:space="preserve" text-anchor="start" x="431.04" y="-336" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera stream</text>
</g>
<!-- printing&#45;&gt;vault -->
<g id="edge4" class="edge">
<title>printing&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.69,-234.96C433.32,-210.96 509.89,-182.96 578.13,-158"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="578.71,-160.58 584.86,-155.53 576.91,-155.65 578.71,-160.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="438.54,-209.68 438.54,-232.48 516.9,-232.48 516.9,-209.68 438.54,-209.68"/>
<text xml:space="preserve" text-anchor="start" x="441.54" y="-215.48" font-family="Arial" font-size="14.00" fill="#c9c9c9">print history</text>
</g>
<!-- site&#45;&gt;github -->
<g id="edge5" class="edge">
<title>site&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.69,-624.3C437.01,-632.29 518.51,-641.69 589.53,-649.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="589.17,-652.48 596.92,-650.73 589.77,-647.26 589.17,-652.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="451.37,-641.83 451.37,-664.63 504.07,-664.63 504.07,-641.83 451.37,-641.83"/>
<text xml:space="preserve" text-anchor="start" x="454.37" y="-647.63" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs on</text>
</g>
<!-- cloudflare&#45;&gt;site -->
<g id="edge1" class="edge">
<title>cloudflare&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M589.67,-451C521.81,-478.63 444.36,-510.17 377.11,-537.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="376.45,-534.99 370.5,-540.25 378.43,-539.85 376.45,-534.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="454.1,-513.24 454.1,-536.04 501.34,-536.04 501.34,-513.24 454.1,-513.24"/>
<text xml:space="preserve" text-anchor="start" x="457.1" y="-519.04" font-family="Arial" font-size="14.00" fill="#c9c9c9">serves</text>
</g>
</g>
</svg>
`;case`printingView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2577pt" height="1392pt"
 viewBox="0.00 0.00 2577.00 1392.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1377.05)">
<g id="clust1" class="cluster">
<title>cluster_printing</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-520 8,-1354 2068.42,-1354 2068.42,-520 8,-520"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1341.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">3D PRINTING</text>
</g>
<!-- printer -->
<g id="node1" class="node">
<title>printer</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="387.42,-1050 48,-1050 48,-870 387.42,-870 387.42,-1050"/>
<text xml:space="preserve" text-anchor="start" x="188.26" y="-981.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Printer</text>
<text xml:space="preserve" text-anchor="start" x="170.37" y="-960.8" font-family="Arial" font-size="13.00" fill="#f9b27c">Bambu Lab P2S</text>
<text xml:space="preserve" text-anchor="start" x="68.06" y="-939.2" font-family="Arial" font-size="15.00" fill="#f9b27c">Reports its status and camera over the home</text>
<text xml:space="preserve" text-anchor="start" x="189.37" y="-921.2" font-family="Arial" font-size="15.00" fill="#f9b27c">network.</text>
</g>
<!-- printlog -->
<g id="node2" class="node">
<title>printlog</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="930.56,-760 606.96,-760 606.96,-580 930.56,-580 930.56,-760"/>
<text xml:space="preserve" text-anchor="start" x="732.07" y="-691.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Print log</text>
<text xml:space="preserve" text-anchor="start" x="693.62" y="-670.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · every minute · free</text>
<text xml:space="preserve" text-anchor="start" x="627.02" y="-649.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Notes each start and finish in the model’s</text>
<text xml:space="preserve" text-anchor="start" x="667.03" y="-631.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">folder and sends a notification.</text>
</g>
<!-- camera -->
<g id="node3" class="node">
<title>camera</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="933.05,-1050 604.47,-1050 604.47,-870 933.05,-870 933.05,-1050"/>
<text xml:space="preserve" text-anchor="start" x="708.74" y="-981.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Camera relay</text>
<text xml:space="preserve" text-anchor="start" x="749.25" y="-960.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">brainpi</text>
<text xml:space="preserve" text-anchor="start" x="624.53" y="-939.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Takes the printer camera and serves it as a</text>
<text xml:space="preserve" text-anchor="start" x="723.74" y="-921.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">video stream.</text>
</g>
<!-- library -->
<g id="node4" class="node">
<title>library</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M1490.06,-743.64C1490.06,-752.67 1418.34,-760 1330.04,-760 1241.74,-760 1170.02,-752.67 1170.02,-743.64 1170.02,-743.64 1170.02,-596.36 1170.02,-596.36 1170.02,-587.33 1241.74,-580 1330.04,-580 1418.34,-580 1490.06,-587.33 1490.06,-596.36 1490.06,-596.36 1490.06,-743.64 1490.06,-743.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M1490.06,-743.64C1490.06,-734.61 1418.34,-727.27 1330.04,-727.27 1241.74,-727.27 1170.02,-734.61 1170.02,-743.64"/>
<text xml:space="preserve" text-anchor="start" x="1279.47" y="-691.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Print library</text>
<text xml:space="preserve" text-anchor="start" x="1263.2" y="-670.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">Documents/3d_printing</text>
<text xml:space="preserve" text-anchor="start" x="1190.79" y="-649.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">One folder per model: files, notes, photos,</text>
<text xml:space="preserve" text-anchor="start" x="1265.01" y="-631.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">and its print history.</text>
</g>
<!-- printwatch -->
<g id="node5" class="node">
<title>printwatch</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1499.36,-1050 1160.72,-1050 1160.72,-870 1499.36,-870 1499.36,-1050"/>
<text xml:space="preserve" text-anchor="start" x="1265.57" y="-981.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Finish watcher</text>
<text xml:space="preserve" text-anchor="start" x="1310.53" y="-960.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">brainpi</text>
<text xml:space="preserve" text-anchor="start" x="1180.78" y="-939.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">When a print finishes, grabs a bed photo and</text>
<text xml:space="preserve" text-anchor="start" x="1262.09" y="-921.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">drafts a gallery card.</text>
</g>
<!-- publish -->
<g id="node6" class="node">
<title>publish</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2028.42,-1050 1708.38,-1050 1708.38,-870 2028.42,-870 2028.42,-1050"/>
<text xml:space="preserve" text-anchor="start" x="1802.26" y="-981.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gallery publish</text>
<text xml:space="preserve" text-anchor="start" x="1803.01" y="-960.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Mac · after each finish</text>
<text xml:space="preserve" text-anchor="start" x="1737.5" y="-939.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Fills in the drafted card and pushes it to</text>
<text xml:space="preserve" text-anchor="start" x="1828.38" y="-921.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">the website.</text>
</g>
<!-- vault -->
<g id="node7" class="node">
<title>vault</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1507.67,-180 1152.41,-180 1152.41,0 1507.67,0 1507.67,-180"/>
<text xml:space="preserve" text-anchor="start" x="1288.91" y="-111.8" font-family="Arial" font-size="20.00" fill="#eff6ff">The vault</text>
<text xml:space="preserve" text-anchor="start" x="1257.78" y="-90.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Obsidian · plain text files</text>
<text xml:space="preserve" text-anchor="start" x="1193.3" y="-69.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">One place for everything: notes, projects,</text>
<text xml:space="preserve" text-anchor="start" x="1172.46" y="-51.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">documents, and what the assistant remembers.</text>
</g>
<!-- cloudflare -->
<g id="node8" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1505.81,-470 1154.27,-470 1154.27,-290 1505.81,-290 1505.81,-470"/>
<text xml:space="preserve" text-anchor="start" x="1284.46" y="-392" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="1184.15" y="-369" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="1178.28" y="-351" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- site -->
<g id="node9" class="node">
<title>site</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2546.83,-1050 2226.79,-1050 2226.79,-870 2546.83,-870 2546.83,-1050"/>
<text xml:space="preserve" text-anchor="start" x="2340.12" y="-981.8" font-family="Arial" font-size="20.00" fill="#eff6ff">embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="2308.41" y="-960.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Astro site on GitHub Pages</text>
<text xml:space="preserve" text-anchor="start" x="2264.66" y="-939.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Public site: the studio, the live printer</text>
<text xml:space="preserve" text-anchor="start" x="2289.67" y="-921.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">camera, and the print gallery.</text>
</g>
<!-- printer&#45;&gt;printlog -->
<g id="edge1" class="edge">
<title>printer&#45;&gt;printlog</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M387.18,-871.02C454.15,-835.65 531.07,-795.01 598.16,-759.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="599.05,-762.08 604.46,-756.25 596.6,-757.44 599.05,-762.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="447.42,-832.36 447.42,-855.16 544.47,-855.16 544.47,-832.36 447.42,-832.36"/>
<text xml:space="preserve" text-anchor="start" x="450.42" y="-838.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">start and finish</text>
</g>
<!-- printer&#45;&gt;camera -->
<g id="edge2" class="edge">
<title>printer&#45;&gt;camera</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M387.18,-960C452.99,-960 528.41,-960 594.66,-960"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="594.27,-962.63 601.77,-960 594.27,-957.38 594.27,-962.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="454.04,-960 454.04,-982.8 537.86,-982.8 537.86,-960 454.04,-960"/>
<text xml:space="preserve" text-anchor="start" x="457.04" y="-965.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera feed</text>
</g>
<!-- printer&#45;&gt;printwatch -->
<g id="edge3" class="edge">
<title>printer&#45;&gt;printwatch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M387.3,-1038.39C453.5,-1065.14 531.09,-1091.66 604.47,-1105 748.15,-1131.11 789.26,-1130.5 933.05,-1105 1006.72,-1091.94 1084.67,-1066.2 1151.75,-1039.98"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1152.31,-1042.58 1158.33,-1037.39 1150.39,-1037.7 1152.31,-1042.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="741.63,-1124.35 741.63,-1147.15 795.89,-1147.15 795.89,-1124.35 741.63,-1124.35"/>
<text xml:space="preserve" text-anchor="start" x="744.63" y="-1130.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">finished</text>
</g>
<!-- printlog&#45;&gt;library -->
<g id="edge4" class="edge">
<title>printlog&#45;&gt;library</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M930.4,-670C1002.07,-670 1086.55,-670 1159.26,-670"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1158.91,-672.63 1166.41,-670 1158.91,-667.38 1158.91,-672.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="998.89,-670 998.89,-692.8 1086.57,-692.8 1086.57,-670 998.89,-670"/>
<text xml:space="preserve" text-anchor="start" x="1001.89" y="-675.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">writes history</text>
</g>
<!-- printlog&#45;&gt;vault -->
<g id="edge5" class="edge">
<title>printlog&#45;&gt;vault</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M792.97,-580.3C823.26,-479.86 885.52,-318.36 993.05,-220.2 1035.13,-181.79 1089.8,-154.23 1142.77,-134.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1143.63,-137.14 1149.79,-132.12 1141.85,-132.2 1143.63,-137.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1003.55,-220.2 1003.55,-243 1081.91,-243 1081.91,-220.2 1003.55,-220.2"/>
<text xml:space="preserve" text-anchor="start" x="1006.55" y="-226" font-family="Arial" font-size="14.00" fill="#c9c9c9">print history</text>
</g>
<!-- camera&#45;&gt;printwatch -->
<g id="edge6" class="edge">
<title>camera&#45;&gt;printwatch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M933.03,-960C1001.41,-960 1081.08,-960 1150.96,-960"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1150.67,-962.63 1158.17,-960 1150.67,-957.38 1150.67,-962.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1008.59,-960 1008.59,-982.8 1076.87,-982.8 1076.87,-960 1008.59,-960"/>
<text xml:space="preserve" text-anchor="start" x="1011.59" y="-965.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">bed photo</text>
</g>
<!-- camera&#45;&gt;cloudflare -->
<g id="edge7" class="edge">
<title>camera&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M887.46,-870.04C904.45,-853.16 920.43,-834.61 933.05,-815 982.06,-738.82 942.05,-695.07 993.05,-620.2 1044.06,-545.3 1078.72,-545.76 1152.41,-493 1160.51,-487.2 1168.9,-481.35 1177.42,-475.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1178.75,-477.79 1183.48,-471.4 1175.8,-473.45 1178.75,-477.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="993.05,-620.2 993.05,-643 1092.41,-643 1092.41,-620.2 993.05,-620.2"/>
<text xml:space="preserve" text-anchor="start" x="996.05" y="-626" font-family="Arial" font-size="14.00" fill="#c9c9c9">camera stream</text>
</g>
<!-- printwatch&#45;&gt;publish -->
<g id="edge8" class="edge">
<title>printwatch&#45;&gt;publish</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1499.28,-960C1562.57,-960 1634.54,-960 1697.95,-960"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1697.93,-962.63 1705.43,-960 1697.93,-957.38 1697.93,-962.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1567.67,-960 1567.67,-982.8 1648.38,-982.8 1648.38,-960 1567.67,-960"/>
<text xml:space="preserve" text-anchor="start" x="1570.67" y="-965.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">drafted card</text>
</g>
<!-- publish&#45;&gt;site -->
<g id="edge9" class="edge">
<title>publish&#45;&gt;site</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2028.2,-960C2087.89,-960 2155.93,-960 2216.53,-960"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2216.45,-962.63 2223.95,-960 2216.45,-957.38 2216.45,-962.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2088.42,-960 2088.42,-982.8 2166.79,-982.8 2166.79,-960 2088.42,-960"/>
<text xml:space="preserve" text-anchor="start" x="2091.42" y="-965.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">gallery card</text>
</g>
</g>
</svg>
`;case`siteView`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1939pt" height="869pt"
 viewBox="0.00 0.00 1939.00 869.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 854.05)">
<g id="clust1" class="cluster">
<title>cluster_site</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="509.91,-220 509.91,-831 1901.26,-831 1901.26,-220 509.91,-220"/>
<text xml:space="preserve" text-anchor="start" x="517.91" y="-818.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EMBRY.DEV</text>
</g>
<!-- live -->
<g id="node1" class="node">
<title>live</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="869.95,-770 549.91,-770 549.91,-590 869.95,-590 869.95,-770"/>
<text xml:space="preserve" text-anchor="start" x="655.47" y="-692.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Live camera</text>
<text xml:space="preserve" text-anchor="start" x="607.33" y="-671.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">live.embry.dev · through Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="595.28" y="-650.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The video the /printing page plays.</text>
</g>
<!-- code -->
<g id="node2" class="node">
<title>code</title>
<path fill="#6366f1" stroke="#4f46e5" stroke-width="2" d="M869.95,-443.64C869.95,-452.67 798.23,-460 709.93,-460 621.64,-460 549.91,-452.67 549.91,-443.64 549.91,-443.64 549.91,-296.36 549.91,-296.36 549.91,-287.33 621.64,-280 709.93,-280 798.23,-280 869.95,-287.33 869.95,-296.36 869.95,-296.36 869.95,-443.64 869.95,-443.64"/>
<path fill="none" stroke="#4f46e5" stroke-width="2" d="M869.95,-443.64C869.95,-434.61 798.23,-427.27 709.93,-427.27 621.64,-427.27 549.91,-434.61 549.91,-443.64"/>
<text xml:space="preserve" text-anchor="start" x="668.24" y="-382.8" font-family="Arial" font-size="20.00" fill="#eef2ff">Site code</text>
<text xml:space="preserve" text-anchor="start" x="660.43" y="-361.8" font-family="Arial" font-size="13.00" fill="#c7d2fe">one folder of files</text>
<text xml:space="preserve" text-anchor="start" x="618.63" y="-340.2" font-family="Arial" font-size="15.00" fill="#c7d2fe">Pages and the print gallery.</text>
</g>
<!-- deploy -->
<g id="node3" class="node">
<title>deploy</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1350.74,-460 1026.31,-460 1026.31,-280 1350.74,-280 1350.74,-460"/>
<text xml:space="preserve" text-anchor="start" x="1112.36" y="-391.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Build and publish</text>
<text xml:space="preserve" text-anchor="start" x="1145.18" y="-370.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">GitHub Actions</text>
<text xml:space="preserve" text-anchor="start" x="1046.37" y="-349.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Every push rebuilds the site and puts it live</text>
<text xml:space="preserve" text-anchor="start" x="1138.92" y="-331.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">within minutes.</text>
</g>
<!-- pages -->
<g id="node4" class="node">
<title>pages</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1861.26,-615 1541.22,-615 1541.22,-435 1861.26,-435 1861.26,-615"/>
<text xml:space="preserve" text-anchor="start" x="1643.98" y="-546.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Public pages</text>
<text xml:space="preserve" text-anchor="start" x="1670.89" y="-525.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">embry.dev</text>
<text xml:space="preserve" text-anchor="start" x="1579.5" y="-504.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">The studio, and /printing with the live</text>
<text xml:space="preserve" text-anchor="start" x="1635.37" y="-486.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">camera and gallery.</text>
</g>
<!-- cloudflare -->
<g id="node5" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="351.55,-770 0,-770 0,-590 351.55,-590 351.55,-770"/>
<text xml:space="preserve" text-anchor="start" x="130.19" y="-692" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="29.88" y="-669" font-family="Arial" font-size="15.00" fill="#cbd5e1">Carries the printer camera from home to the</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-651" font-family="Arial" font-size="15.00" fill="#cbd5e1">public site without opening the home network.</text>
</g>
<!-- printing -->
<g id="node6" class="node">
<title>printing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="335.79,-460 15.75,-460 15.75,-280 335.79,-280 335.79,-460"/>
<text xml:space="preserve" text-anchor="start" x="127.41" y="-391.8" font-family="Arial" font-size="20.00" fill="#eff6ff">3D printing</text>
<text xml:space="preserve" text-anchor="start" x="128.44" y="-370.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Bambu Lab P2S</text>
<text xml:space="preserve" text-anchor="start" x="39.87" y="-349.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Logs every print and drafts a gallery card</text>
<text xml:space="preserve" text-anchor="start" x="113.65" y="-331.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">when one finishes.</text>
</g>
<!-- github -->
<g id="node7" class="node">
<title>github</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1866.58,-180 1535.89,-180 1535.89,0 1866.58,0 1866.58,-180"/>
<text xml:space="preserve" text-anchor="start" x="1670.11" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">GitHub</text>
<text xml:space="preserve" text-anchor="start" x="1573.66" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Holds the private vault backup and the</text>
<text xml:space="preserve" text-anchor="start" x="1559.91" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">website code; builds and hosts embry.dev.</text>
</g>
<!-- live&#45;&gt;pages -->
<g id="edge3" class="edge">
<title>live&#45;&gt;pages</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M869.88,-655.1C1050.94,-626.73 1345.61,-580.56 1530.88,-551.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1531.28,-554.13 1538.28,-550.37 1530.47,-548.94 1531.28,-554.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1159.45,-630.35 1159.45,-653.15 1217.6,-653.15 1217.6,-630.35 1159.45,-630.35"/>
<text xml:space="preserve" text-anchor="start" x="1162.45" y="-636.15" font-family="Arial" font-size="14.00" fill="#c9c9c9">plays on</text>
</g>
<!-- code&#45;&gt;deploy -->
<g id="edge4" class="edge">
<title>code&#45;&gt;deploy</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M870.63,-370C917.38,-370 968.67,-370 1016.12,-370"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1015.97,-372.63 1023.47,-370 1015.97,-367.38 1015.97,-372.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="929.95,-370 929.95,-392.8 966.31,-392.8 966.31,-370 929.95,-370"/>
<text xml:space="preserve" text-anchor="start" x="932.95" y="-375.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">push</text>
</g>
<!-- deploy&#45;&gt;pages -->
<g id="edge5" class="edge">
<title>deploy&#45;&gt;pages</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1350.42,-418.83C1408.05,-436.32 1473.15,-456.08 1531.42,-473.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1530.63,-476.27 1538.57,-475.93 1532.16,-471.24 1530.63,-476.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1410.74,-456.78 1410.74,-479.58 1475.89,-479.58 1475.89,-456.78 1410.74,-456.78"/>
<text xml:space="preserve" text-anchor="start" x="1413.74" y="-462.58" font-family="Arial" font-size="14.00" fill="#c9c9c9">publishes</text>
</g>
<!-- deploy&#45;&gt;github -->
<g id="edge6" class="edge">
<title>deploy&#45;&gt;github</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1350.42,-281.79C1406.62,-250.98 1469.93,-216.27 1527.08,-184.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1528.23,-187.3 1533.55,-181.39 1525.71,-182.69 1528.23,-187.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1416.97,-246.76 1416.97,-269.56 1469.67,-269.56 1469.67,-246.76 1416.97,-246.76"/>
<text xml:space="preserve" text-anchor="start" x="1419.97" y="-252.56" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs on</text>
</g>
<!-- cloudflare&#45;&gt;live -->
<g id="edge1" class="edge">
<title>cloudflare&#45;&gt;live</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M351.39,-680C411.98,-680 479.77,-680 539.89,-680"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="539.72,-682.63 547.22,-680 539.72,-677.38 539.72,-682.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="427.11,-680 427.11,-702.8 474.35,-702.8 474.35,-680 427.11,-680"/>
<text xml:space="preserve" text-anchor="start" x="430.11" y="-685.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">serves</text>
</g>
<!-- printing&#45;&gt;code -->
<g id="edge2" class="edge">
<title>printing&#45;&gt;code</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M335.72,-370C399.68,-370 473.55,-370 538.61,-370"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="538.44,-372.63 545.94,-370 538.44,-367.38 538.44,-372.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="411.55,-370 411.55,-392.8 489.91,-392.8 489.91,-370 411.55,-370"/>
<text xml:space="preserve" text-anchor="start" x="414.55" y="-375.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">gallery card</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};