// Shared page shell for admin.embry.dev: header, nav, styles and small render helpers.
export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
export const money = (cents) => `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
export const num = (n) => Number(n || 0).toLocaleString("en-US");

const NAV = [["/", "Overview"], ["/traffic", "Traffic"], ["/prints", "Prints"], ["/downloads", "Downloads"], ["/map/", "System map"], ["/wiki/", "Wiki"]];

export const cards = (list) => `<div class="cards">${list.map(([v, label, href]) => (href ? `<a class="card" href="${href}"><b>${v}</b><span>${esc(label)}</span></a>` : `<div class="card"><b>${v}</b><span>${esc(label)}</span></div>`)).join("")}</div>`;

// rows: array of arrays of cell HTML (already escaped). head: optional header labels. num: index set of right-aligned columns.
export function table(rows, head = null, numCols = []) {
  const cell = (c, i, tag = "td") => `<${tag}${numCols.includes(i) ? ' class="num"' : ""}>${c}</${tag}>`;
  const th = head ? `<tr>${head.map((h, i) => cell(esc(h), i, "th")).join("")}</tr>` : "";
  const body = rows.length ? rows.map((r) => `<tr>${r.map((c, i) => cell(c, i)).join("")}</tr>`).join("") : `<tr><td colspan="${head ? head.length : 2}" class="dim">None yet</td></tr>`;
  return `<table>${th}${body}</table>`;
}

// days: [{ day: "YYYY-MM-DD", n }]
export function bars(days, fmt = (n) => (n ? String(n) : "")) {
  const max = Math.max(1, ...days.map((x) => x.n));
  return `<div class="chart">${days.map((x) => `<div class="bar" title="${esc(x.day)}: ${esc(fmt(x.n) || 0)}"><i style="height:${Math.round((x.n / max) * 100)}%"></i><span>${esc(fmt(x.n))}</span></div>`).join("")}</div>`;
}

// The last `count` UTC days, oldest first, filled from a { day: n } map.
export function lastDays(map, count = 30) {
  const out = [];
  for (let i = count - 1; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400_000).toISOString().slice(0, 10);
    out.push({ day: d, n: map[d] || 0 });
  }
  return out;
}

export const failed = (what, err) => `<div class="setup"><b>${esc(what)} could not load.</b> <span class="dim">${esc(err)}</span></div>`;

export function shell(path, title, email, body) {
  const nav = NAV.map(([href, label]) => `<a href="${href}"${href === path ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)} · embry.dev admin</title>
<style>
:root{--bg:#fff;--ink:#1d1f24;--dim:#5c616b;--line:#dcdfe4;--accent:#e8702a;color-scheme:light dark}
@media (prefers-color-scheme:dark){:root{--bg:#15171b;--ink:#eceef2;--dim:#9aa0ab;--line:#2c3038}}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.5 system-ui,sans-serif}
main{max-width:860px;margin:0 auto;padding:2rem 1.25rem 4rem}
header{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;flex-wrap:wrap}
h1{margin:0;font-size:1.4rem} h2{font-size:1rem;margin:2rem 0 .5rem;text-transform:uppercase;letter-spacing:.06em;color:var(--dim)}
.who{color:var(--dim);font-size:.9rem} a{color:var(--accent)}
nav{display:flex;gap:1rem;flex-wrap:wrap;border-bottom:1px solid var(--line);padding:.75rem 0;margin-top:.5rem}
nav a{text-decoration:none;color:var(--dim)} nav a[aria-current]{color:var(--ink);font-weight:600}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:.75rem;margin-top:1.25rem}
.card{border:1px solid var(--line);padding:.9rem 1rem;color:inherit;text-decoration:none}.card b{display:block;font-size:2rem;line-height:1.1}.card span{color:var(--dim);font-size:.85rem}
a.card:hover{border-color:var(--accent)}
.chart{display:flex;align-items:flex-end;gap:3px;height:140px;border-bottom:1px solid var(--line);padding-top:1rem}
.bar{flex:1;height:100%;position:relative;display:flex;align-items:flex-end}.bar i{display:block;width:100%;background:var(--accent);min-height:1px}
.bar span{position:absolute;top:-1.1rem;left:0;right:0;text-align:center;font-size:.7rem;color:var(--dim)}
table{border-collapse:collapse;width:100%}td,th{padding:.35rem .5rem .35rem 0;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}th{font-weight:600;font-size:.85rem;color:var(--dim)}
.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.dim{color:var(--dim)}
.note{color:var(--dim);font-size:.85rem;margin-top:2rem}
.setup{border:1px dashed var(--line);padding:1rem;margin-top:1.25rem}.setup ol{margin:.5rem 0 0;padding-left:1.25rem}
code{font-size:.85em}
.wide{overflow-x:auto}
</style></head><body><main>
<header><h1>${esc(title)}</h1><span class="who">${esc(email)} · <a href="/cdn-cgi/access/logout">Sign out</a></span></header>
<nav>${nav}</nav>
${body}
</main></body></html>`;
}
