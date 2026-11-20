// admin.embry.dev: private pages for embry.dev. Every request must carry a valid Cloudflare Access login (see access.js).
// GET /            overview: one headline number per section
// GET /traffic     site visits (Cloudflare Web Analytics)      traffic.js
// GET /prints      print stats from the brainpi database       prints.js
// GET /downloads   Home Base downloads (D1, downloads-worker)
// GET /api/stats   download numbers as JSON
// GET /map/        the private LikeC4 system map (static files from map-dist/, built by build-map.sh)
import { verifyAccess } from "./access.js";
import { esc, num, cards, table, bars, lastDays, shell } from "./layout.js";
import { traffic, trafficPage } from "./traffic.js";
import { prints, printsPage } from "./prints.js";

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
  const days = lastDays(Object.fromEntries(byDay.map((r) => [r.day, r.n])));
  return { total: tot[0].n, last7: w7[0].n, last30: w30[0].n, bySource, byFile, days };
}

async function downloadsPage(env) {
  const d = await downloads(env);
  const rows = (list, key) => table(list.map((r) => [esc(r[key]), num(r.n)]), null, [1]);
  return `${cards([[num(d.total), "All time"], [num(d.last7), "Last 7 days"], [num(d.last30), "Last 30 days"]])}
<h2>Per day, last 30 days</h2>${bars(d.days)}
<h2>Where from</h2>${rows(d.bySource, "source")}
<h2>Which file</h2>${rows(d.byFile, "file")}
<p class="note">Counts are completed downloads, not people or installs. "web" is the site and direct links; "brew" is Homebrew. Partial or resumed downloads and bots are not counted. No IP addresses are stored.</p>`;
}

// Each source loads on its own; one that fails or is not connected shows a dash, not an error page.
async function overviewPage(env) {
  const safe = (p) => p.catch(() => undefined);
  const [t, p, d] = await Promise.all([safe(traffic(env)), safe(prints(env)), safe(downloads(env))]);
  const v = (x, f) => (x ? f(x) : "–");
  return `${cards([
    [v(t, (x) => num(x.views7)), "Page views, last 7 days", "/traffic"],
    [v(p, (x) => num(x.totals.finished)), "Prints finished", "/prints"],
    [v(d, (x) => num(x.total)), "Home Base downloads", "/downloads"],
    ["Map", "Private system map", "/map/"],
  ])}
<p class="note">A dash means that source did not answer. Open the card for details.</p>`;
}

const PAGES = { "/": ["Overview", overviewPage], "/traffic": ["Traffic", trafficPage], "/prints": ["Prints", printsPage], "/downloads": ["Downloads", downloadsPage] };

export default {
  async fetch(request, env) {
    const auth = await verifyAccess(request, env);
    if (!auth.ok) return new Response(auth.why, { status: auth.status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
    const url = new URL(request.url);
    const hdr = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer" };
    if (url.pathname === "/map") return Response.redirect(`${url.origin}/map/`, 302);
    if (url.pathname.startsWith("/map/")) {
      const res = await env.ASSETS.fetch(request);
      const out = new Response(res.body, res);
      for (const [k, v] of Object.entries(hdr)) out.headers.set(k, v);
      return out;
    }
    if (url.pathname === "/api/stats") {
      return new Response(JSON.stringify({ downloads: await downloads(env) }), { headers: { ...hdr, "Content-Type": "application/json; charset=utf-8" } });
    }
    const page = PAGES[url.pathname];
    if (!page) return new Response("Not found", { status: 404, headers: hdr });
    const [title, render] = page;
    return new Response(shell(url.pathname, title, auth.email, await render(env)), { headers: { ...hdr, "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'" } });
  },
};
