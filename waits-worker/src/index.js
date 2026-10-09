// Relays Queue-Times.com's Magic Kingdom feed (park 6) with a CORS header.
const SOURCE = "https://queue-times.com/parks/6/queue_times.json";
const ORIGINS = [/^https:\/\/(www\.)?embry\.dev$/, /^http:\/\/localhost:\d+$/];

export default {
  async fetch(request) {
    const origin = request.headers.get("Origin") || "";
    const allow = ORIGINS.some((re) => re.test(origin)) ? origin : "https://embry.dev";
    const headers = {
      "Access-Control-Allow-Origin": allow,
      "Vary": "Origin",
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    };
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (request.method !== "GET") return new Response("Method not allowed", { status: 405, headers });

    const upstream = await fetch(SOURCE, { cf: { cacheTtl: 60, cacheEverything: true } });
    if (!upstream.ok) return new Response(JSON.stringify({ error: "upstream " + upstream.status }), { status: 502, headers });
    const data = await upstream.json();
    // Flatten to {rides: [{id, wait, open, updated}]} so the page stays small.
    const rides = [];
    for (const land of data.lands || []) for (const r of land.rides) rides.push(r);
    for (const r of data.rides || []) rides.push(r);
    const body = rides.map((r) => ({ id: r.id, wait: r.wait_time, open: r.is_open, updated: r.last_updated }));
    return new Response(JSON.stringify({ rides: body }), { headers });
  },
};
