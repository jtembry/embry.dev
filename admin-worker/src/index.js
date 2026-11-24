// admin.embry.dev: private pages for embry.dev. Every request must carry a valid Cloudflare Access login (see access.js).
// GET /            overview: one headline number per section
// GET /traffic     site visits (Cloudflare Web Analytics)      traffic.js
// GET /prints      print stats from the brainpi database       prints.js
// GET /downloads   HomeADE installer links + download counts (D1, downloads-worker). The public site has no download
//                  links since 2026-11-24 (JT: "turn off the public facing download links ... but allow it in admin").
// GET /api/stats   download numbers as JSON
// GET /map/        the private LikeC4 system map (static files from map-dist/map, built by build-assets.sh)
// GET /wiki/       the private engineering wiki (static files from map-dist/wiki, built from ~/Projects/embry-wiki-internal
//                  by build-assets.sh; 2026-11-21, JT: "build the private site, make it accessible from the admin site")
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
  return `<h2>Installers</h2>
<p><a href="https://downloads.embry.dev/HomeADE-latest.dmg">HomeADE for Mac (.dmg)</a> &middot; <a href="https://downloads.embry.dev/HomeADE-latest-windows-x64-setup.exe">HomeADE for Windows beta (.exe)</a></p>
<p class="note">The public site no longer links these. The files still download from downloads.embry.dev for anyone with the link, Homebrew, and app updates.</p>
${cards([[num(d.total), "All time"], [num(d.last7), "Last 7 days"], [num(d.last30), "Last 30 days"]])}
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
    ["Wiki", "Private engineering wiki", "/wiki/"],
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
    // Static sites under the Access check: the system map and the engineering wiki (run_worker_first, so no file is served
    // without a login). A bare /map or /wiki gets its slash so relative links inside resolve.
    if (url.pathname === "/map" || url.pathname === "/wiki") return Response.redirect(`${url.origin}${url.pathname}/`, 302);
    if (url.pathname.startsWith("/map/") || url.pathname.startsWith("/wiki/")) {
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
