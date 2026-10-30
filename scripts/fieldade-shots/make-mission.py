import datetime as dt
import json, time

# Dates follow the day the shots are taken, so nothing reads as weeks overdue.
T = dt.date.today()
D = lambda n=0: (T + dt.timedelta(days=n)).isoformat()
DAY = lambda n=0, f="%a, %b %-d": (T + dt.timedelta(days=n)).strftime(f)
MD = lambda n=0: f"{(T + dt.timedelta(days=n)).month}/{(T + dt.timedelta(days=n)).day}"

now_ms = int(time.time() * 1000)


def chips(kind, key):
    if kind == "email":
        s = {"archive": "brain-email-archive", "delete": "brain-email-delete",
             "triage": "brain-email-triage", "respond with AI": "brain-email-respond"}
    else:
        s = {"archive": "brain-imessage-mark-read", "delete": "brain-imessage-delete",
             "triage": "brain-imessage-triage-item", "respond with AI": "brain-imessage-reply"}
    return [{"label": l, "script": sc, "text": key, "billed": l in ("triage", "respond with AI")} for l, sc in s.items()]


def email(i, title, when, text):
    key = f"<demo-{i}@example.com>"
    return {"id": key, "source": "System/Email.md", "title": title, "when": when, "text": text,
            "open": {"label": "open", "url": "https://mail.example.com/"}, "buttons": chips("email", key)}


def msg(i, title, when, text):
    key = f"chat-demo-{i}"
    return {"id": key, "source": "System/Messages.md", "title": title, "when": when, "text": text,
            "open": None, "buttons": chips("msg", key)}


def todo(path, line, text, mark=" "):
    return {"path": path, "line": line, "raw": f"- [{mark}] {text}", "mark": mark, "text": text}


def card(name, folder, phase, nxt, updated, todos):
    path = f"{folder}/{name}/{name}.md"
    return {"name": name, "path": path, "phase": phase, "next": nxt, "blocked": "", "updated": updated,
            "drift": False, "todos": [todo(path, 20 + i, t) for i, t in enumerate(todos)]}


ev = lambda time, title, cal="Work", loc="": {"time": time, "title": title, "location": loc, "calendar": cal}

today_events = [
    ev("9:00–9:30a", "Crew check-in"),
    ev("1:00–2:00p", "Site walk — Maple St. kitchen", "Jobs", "412 Maple St"),
    ev("5:30–6:15p", "Gym", "Home"),
]

mission = {
    "version": 1530,
    "at": now_ms,
    "counts": {"emailUnread": 5, "emailRows": 5, "textUnread": 2, "textRows": 2},
    "today": {
        "calendar": today_events,
        "due": [
            {**todo("1 Projects/Henderson Kitchen/Henderson Kitchen.md", 31,
                    f"Send the revised quote to the Hendersons 📅 {D()}"),
             "text": "Send the revised quote to the Hendersons", "due": D(),
             "file": "Henderson Kitchen", "overdue": False},
            {**todo("1 Projects/Parker Bathroom/Parker Bathroom.md", 22, f"Price two tile options 📅 {D(1)}"),
             "text": "Price two tile options", "due": D(1), "file": "Parker Bathroom", "overdue": False},
            {**todo("2 Areas/Truck/Truck.md", 19, f"Renew the truck registration 📅 {D(3)}"),
             "text": "Renew the truck registration", "due": D(3), "file": "Truck", "overdue": False},
        ],
        "ingest": {"total": 2, "rows": [
            {"name": f"Text from Dana {D()} 0812", "path": f"0 Ingest/Text from Dana {D()} 0812.md",
             "kind": "text", "age": "2h", "at": now_ms - 2 * 3600e3,
             "gist": "Can we move the cabinet delivery to Friday?"},
            {"name": f"Receipt — lumber yard {D(-1)}", "path": f"0 Ingest/Receipt — lumber yard {D(-1)}.md",
             "kind": "scan", "age": "1d", "at": now_ms - 26 * 3600e3,
             "gist": "Scanned from the truck. $412.60, framing lumber and screws."},
        ]},
        "next": [
            {"name": "Henderson Kitchen", "path": "1 Projects/Henderson Kitchen/Henderson Kitchen.md", "discreet": False,
             "todo": todo("1 Projects/Henderson Kitchen/Henderson Kitchen.md", 24,
                          "Confirm the countertop template date with the fabricator")},
            {"name": "Parker Bathroom", "path": "1 Projects/Parker Bathroom/Parker Bathroom.md", "discreet": False,
             "todo": todo("1 Projects/Parker Bathroom/Parker Bathroom.md", 20, "Measure and photograph the room")},
            {"name": "Truck", "path": "2 Areas/Truck/Truck.md", "discreet": False,
             "todo": todo("2 Areas/Truck/Truck.md", 18, "Book the 60,000-mile service")},
        ],
    },
    "email": [
        email(1, "Dana Reyes", f"{DAY(0, '%a')} {MD()}, 8:40 AM", "Invoice 1042 is approved. When can you start?"),
        email(2, "County Permits", f"{DAY(0, '%a')} {MD()}, 7:55 AM", "Permit 2026-3381 has been approved. Print the card for the job site."),
        email(4, "Parker family", f"{DAY(0, '%a')} {MD()}, 6:58 AM", "Monday at 10 works for us. The side door will be open."),
        email(5, "Tile Outlet", f"{DAY(-1, '%a')} {MD(-1)}, 5:30 PM", "The two samples you asked about are on hold under your name until Friday."),
        email(3, "Supply house", f"{DAY(-1, '%a')} {MD(-1)}, 4:12 PM", "Your order is ready for pickup at the counter."),
    ],
    "messages": [
        msg(1, "Dana", "8:51a", "Can we move the cabinet delivery to Friday?"),
        msg(2, "Mike", "7:30a", "On site. Gate was unlocked, starting on the demo."),
    ],
    "calendar": {
        "upcoming": [
            {"day": f"Today — {DAY()}", "events": today_events},
            {"day": DAY(1), "events": [ev("8:00a", "Cabinet delivery", "Jobs", "412 Maple St")]},
            {"day": DAY(4), "events": [ev("10:00–11:00a", "Estimate — Parker bathroom", "Jobs")]},
        ],
        "calendars": [{"name": "Work", "kind": "Google", "count": 6}, {"name": "Jobs", "kind": "iCloud", "count": 4},
                      {"name": "Home", "kind": "iCloud", "count": 2}],
        "synced": f"{D()}, 9:34 AM · next 7 days",
    },
    "projects": {
        "cards": [
            card("Henderson Kitchen", "1 Projects", "Demo done; cabinets land Friday", "Confirm the countertop template date", D(),
                 ["Confirm the countertop template date with the fabricator", "Order the under-cabinet lights"]),
            card("Parker Bathroom", "1 Projects", "Estimate scheduled for Monday", "Measure and photograph the room", D(-2),
                 ["Measure and photograph the room", "Price two tile options"]),
        ],
        "done": [{"done": D(-1), "file": "Henderson Kitchen", "text": "Pull the electrical permit"}],
    },
    "areas": {
        "cards": [
            card("Truck", "2 Areas", "Running fine; service due", "Book the 60,000-mile service", D(-3),
                 ["Book the 60,000-mile service"]),
            card("Tools", "2 Areas", "Inventory current as of October", "Replace the worn miter blade", D(-6),
                 ["Replace the worn miter blade"]),
        ],
        "done": [],
    },
    "mocs": [{"name": n, "label": n} for n in ["Clients MOC", "Jobs MOC", "Tools MOC"]],
    "skills": [
        {"name": "quote", "text": "Draft a fixed-scope quote from a site-walk note."},
        {"name": "file-notes", "text": "Sort what landed in the ingest folder into the right project or area."},
    ],
    "archives": [{"done": D(-7), "glyph": "◆", "text": "Garage shelving finished and photographed", "file": "Garage Shelving", "line": 12}],
    "ingestLog": [{"stamp": f"{D()} 00:00", "when": D(), "who": "Claude · file-notes",
                   "what": "Lumber receipt filed under Henderson Kitchen",
                   "heading": f"{D()} (Claude · file-notes) — Lumber receipt filed under Henderson Kitchen"}],
    "freshness": {"email": now_ms - 60e3, "messages": now_ms - 120e3, "calendar": now_ms - 300e3},
    "buildMs": 42,
}

json.dump(mission, open("./mission.json", "w"), indent=1)
print("ok")
