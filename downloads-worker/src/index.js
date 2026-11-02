// Home Base installers from R2, with a download counter.
// GET /<name>.dmg   streams the file; HEAD works too; byte ranges are honored (resumed downloads).
// A download counts once: a full GET (200, or a 206 that starts at byte 0 and covers the file), not HEAD,
// not a bot, not a partial range. Stored per day, file and source (web or brew); no IP address, no user agent.
const NAME = /^[A-Za-z0-9._-]+\.dmg$/;
const BOT = /bot|crawl|spider|slurp|preview|monitor|scan|check|facebookexternalhit/i;

export default {
  async fetch(request, env, ctx) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
    }
    const key = decodeURIComponent(new URL(request.url).pathname.slice(1));
    if (!NAME.test(key)) return new Response("Not found", { status: 404 });

    const object = await env.BUCKET.get(key, { range: request.headers, onlyIf: request.headers });
    if (!object) return new Response("Not found", { status: 404 });

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    headers.set("accept-ranges", "bytes");
    headers.set("content-disposition", `attachment; filename="${key}"`);
    headers.set("cache-control", "public, max-age=300");

    if (!("body" in object)) return new Response(null, { status: 304, headers }); // If-None-Match etc.

    let status = 200;
    let offset = 0;
    let length = object.size;
    if (object.range && request.headers.has("range")) {   // R2 reports a range even for a plain GET
      status = 206;
      offset = object.range.offset ?? object.size - object.range.suffix;
      length = object.range.length ?? object.range.suffix ?? object.size - offset;
      headers.set("content-range", `bytes ${offset}-${offset + length - 1}/${object.size}`);
    }
    headers.set("content-length", String(length));

    const whole = offset === 0 && length === object.size;
    const ua = request.headers.get("user-agent") || "";
    if (request.method === "GET" && whole && !BOT.test(ua)) {
      const source = /homebrew/i.test(ua) ? "brew" : "web";
      const day = new Date().toISOString().slice(0, 10);
      ctx.waitUntil(
        env.DB.prepare(
          "INSERT INTO downloads (day, file, source, n) VALUES (?, ?, ?, 1) ON CONFLICT (day, file, source) DO UPDATE SET n = n + 1",
        ).bind(day, key, source).run().catch(() => {}),
      );
    }
    return new Response(request.method === "HEAD" ? null : object.body, { status, headers });
  },
};
