// admin.embry.dev: private stats page. Every request must carry a valid Cloudflare Access login (see access.js).
// GET /            the page
// GET /api/stats   the same numbers as JSON
import { verifyAccess } from "./access.js";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

async function downloads(env) {
  const one = async (sql) => (await env.DB.prepare(sql).all()).results;
  const [tot, w7, w30, bySource, byFile, byDay] = await Promise.all([
    one("SELECT COALESCE(SUM(n),0) AS n FROM downloads"),
    one("SELECT COALESCE(SUM(n),0) AS n FROM downloads WHERE day >= date('now','-6 day')"),
    one("SELECT COALESCE(SUM(n),0) AS n FROM downloads WHERE day >= date('now','-29 day')"),
    one("SELECT source, SUM(n) AS n FROM downloads GROUP BY source ORDER BY n DESC"),
    one("SELECT file, SUM(n) AS n FROM downloads GROUP BY file ORDER BY n DESC"),
    one("SELECT day, SUM(n) AS n FROM downloads WHERE day >= date('now','-29 day') GROUP BY day"),
  ]);
  const map = Object.fromEntries(byDay.map((r) => [r.day, r.n]));
  const days = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400_000).toISOString().slice(0, 10);
    days.push({ day: d, n: map[d] || 0 });
  }
  return { total: tot[0].n, last7: w7[0].n, last30: w30[0].n, bySource, byFile, days };
}

function page(d, email) {
  const max = Math.max(1, ...d.days.map((x) => x.n));
  const bars = d.days.map((x) => `<div class="bar" title="${esc(x.day)}: ${x.n}"><i style="height:${Math.round((x.n / max) * 100)}%"></i><span>${x.n || ""}</span></div>`).join("");
  const rows = (list, key) => (list.length ? list.map((r) => `<tr><td>${esc(r[key])}</td><td class="num">${r.n}</td></tr>`).join("") : '<tr><td colspan="2" class="dim">None yet</td></tr>');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Stats · embry.dev</title>
<style>
:root{--bg:#fff;--ink:#1d1f24;--dim:#5c616b;--line:#dcdfe4;--accent:#e8702a;color-scheme:light dark}
@media (prefers-color-scheme:dark){:root{--bg:#15171b;--ink:#eceef2;--dim:#9aa0ab;--line:#2c3038}}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.5 system-ui,sans-serif}
main{max-width:860px;margin:0 auto;padding:2rem 1.25rem 4rem}
header{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;flex-wrap:wrap;border-bottom:1px solid var(--line);padding-bottom:.75rem}
h1{margin:0;font-size:1.4rem} h2{font-size:1rem;margin:2rem 0 .5rem;text-transform:uppercase;letter-spacing:.06em;color:var(--dim)}
.who{color:var(--dim);font-size:.9rem} a{color:var(--accent)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:1.25rem}
.card{border:1px solid var(--line);padding:.9rem 1rem}.card b{display:block;font-size:2rem;line-height:1.1}.card span{color:var(--dim);font-size:.85rem}
.chart{display:flex;align-items:flex-end;gap:3px;height:140px;border-bottom:1px solid var(--line);padding-top:1rem}
.bar{flex:1;height:100%;position:relative;display:flex;align-items:flex-end}.bar i{display:block;width:100%;background:var(--accent);min-height:1px}
.bar span{position:absolute;top:-1.1rem;left:0;right:0;text-align:center;font-size:.7rem;color:var(--dim)}
table{border-collapse:collapse;width:100%}td{padding:.35rem 0;border-bottom:1px solid var(--line)}.num{text-align:right;font-variant-numeric:tabular-nums}.dim{color:var(--dim)}
.note{color:var(--dim);font-size:.85rem;margin-top:2rem}
@media (max-width:560px){.cards{grid-template-columns:1fr}}
</style></head><body><main>
<header><h1>Stats</h1><span class="who">${esc(email)} · <a href="/cdn-cgi/access/logout">Sign out</a></span></header>
<h2>Home Base downloads</h2>
<div class="cards"><div class="card"><b>${d.total}</b><span>All time</span></div><div class="card"><b>${d.last7}</b><span>Last 7 days</span></div><div class="card"><b>${d.last30}</b><span>Last 30 days</span></div></div>
<h2>Per day, last 30 days</h2><div class="chart">${bars}</div>
<h2>Where from</h2><table>${rows(d.bySource, "source")}</table>
<h2>Which file</h2><table>${rows(d.byFile, "file")}</table>
<p class="note">Counts are completed downloads, not people or installs. "web" is the site and direct links; "brew" is Homebrew. Partial or resumed downloads and bots are not counted. No IP addresses are stored.</p>
</main></body></html>`;
}

export default {
  async fetch(request, env) {
    const auth = await verifyAccess(request, env);
    if (!auth.ok) return new Response(auth.why, { status: auth.status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
    const url = new URL(request.url);
    const hdr = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer" };
    if (url.pathname === "/api/stats") {
      return new Response(JSON.stringify({ downloads: await downloads(env) }), { headers: { ...hdr, "Content-Type": "application/json; charset=utf-8" } });
    }
    if (url.pathname !== "/") return new Response("Not found", { status: 404, headers: hdr });
    return new Response(page(await downloads(env), auth.email), { headers: { ...hdr, "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'" } });
  },
};
