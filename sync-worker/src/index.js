// Shared state for the Magic Kingdom Planner: per-ride priority and done flags, keyed by trip code.
// GET  /state?trip=CODE           -> { rides: { [id]: {pri, pt, done, dt} } }
// POST /state?trip=CODE  {changes:[{id, field:"pri"|"done", value, t}]} -> same as GET, after applying
const ORIGINS = [/^https:\/\/(www\.)?embry\.dev$/, /^http:\/\/(localhost|127\.0\.0\.1):\d+$/];
const PRI = new Set(["must", "opt", "wont"]);

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const headers = {
      "Access-Control-Allow-Origin": ORIGINS.some((re) => re.test(origin)) ? origin : "https://embry.dev",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    };
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    const url = new URL(request.url);
    const trip = url.searchParams.get("trip") || "";
    if (url.pathname !== "/state" || !/^[a-z0-9-]{6,40}$/.test(trip)) {
      return new Response(JSON.stringify({ error: "bad request" }), { status: 400, headers });
    }

    if (request.method === "POST") {
      let body;
      try { body = await request.json(); } catch { return new Response(JSON.stringify({ error: "bad json" }), { status: 400, headers }); }
      const changes = Array.isArray(body.changes) ? body.changes.slice(0, 200) : [];
      const stmts = [];
      for (const c of changes) {
        const id = Number(c.id), t = Number(c.t);
        if (!Number.isInteger(id) || id <= 0 || !Number.isFinite(t)) continue;
        if (c.field === "pri" && PRI.has(c.value)) {
          stmts.push(env.DB.prepare(
            "INSERT INTO rides (trip,id,pri,pt) VALUES (?1,?2,?3,?4) ON CONFLICT(trip,id) DO UPDATE SET pri=excluded.pri, pt=excluded.pt WHERE excluded.pt > rides.pt"
          ).bind(trip, id, c.value, t));
        } else if (c.field === "done") {
          stmts.push(env.DB.prepare(
            "INSERT INTO rides (trip,id,done,dt) VALUES (?1,?2,?3,?4) ON CONFLICT(trip,id) DO UPDATE SET done=excluded.done, dt=excluded.dt WHERE excluded.dt > rides.dt"
          ).bind(trip, id, c.value ? 1 : 0, t));
        }
      }
      if (stmts.length) await env.DB.batch(stmts);
    } else if (request.method !== "GET") {
      return new Response(JSON.stringify({ error: "method" }), { status: 405, headers });
    }

    const { results } = await env.DB.prepare("SELECT id,pri,pt,done,dt FROM rides WHERE trip=?1").bind(trip).all();
    const rides = {};
    for (const r of results) rides[r.id] = { pri: r.pri, pt: r.pt, done: r.done, dt: r.dt };
    return new Response(JSON.stringify({ rides }), { headers });
  },
};
