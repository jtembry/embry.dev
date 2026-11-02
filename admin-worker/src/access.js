// Verifies the Cloudflare Access login on a request. Fails closed: anything missing or wrong is a refusal.
// Access puts a signed token (RS256 JWT) in the Cf-Access-Jwt-Assertion header after the visitor signs in.
// We check the signature against the team's published keys, plus audience, issuer, expiry and allowed email.
const b64 = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(s.length / 4) * 4, "=")), (c) => c.charCodeAt(0));
const json = (s) => JSON.parse(new TextDecoder().decode(b64(s)));

let keyCache = { at: 0, keys: null };
export async function teamKeys(env, fetcher = fetch) {
  if (keyCache.keys && Date.now() - keyCache.at < 3600_000) return keyCache.keys;
  const res = await fetcher(`https://${env.TEAM_DOMAIN}/cdn-cgi/access/certs`);
  if (!res.ok) throw new Error("could not load Access keys");
  keyCache = { at: Date.now(), keys: (await res.json()).keys };
  return keyCache.keys;
}

/** @returns {Promise<{ok: true, email: string} | {ok: false, status: number, why: string}>} */
export async function verifyAccess(request, env, getKeys = teamKeys) {
  if (!env.TEAM_DOMAIN || !env.POLICY_AUD || !env.ADMIN_EMAILS) return { ok: false, status: 503, why: "Admin login is not set up yet." };
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token) return { ok: false, status: 403, why: "Sign in required." };
  try {
    const [h, p, s] = token.split(".");
    const header = json(h), payload = json(p);
    if (header.alg !== "RS256") throw new Error("alg");
    const jwk = (await getKeys(env)).find((k) => k.kid === header.kid);
    if (!jwk) throw new Error("kid");
    const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
    const good = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64(s), new TextEncoder().encode(`${h}.${p}`));
    if (!good) throw new Error("signature");
    const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
    if (!aud.includes(env.POLICY_AUD)) throw new Error("aud");
    if (payload.iss !== `https://${env.TEAM_DOMAIN}`) throw new Error("iss");
    if (!payload.exp || payload.exp * 1000 < Date.now()) throw new Error("exp");
    const email = String(payload.email || "").toLowerCase();
    const allowed = env.ADMIN_EMAILS.toLowerCase().split(",").map((e) => e.trim());
    if (!allowed.includes(email)) throw new Error("email");
    return { ok: true, email };
  } catch {
    return { ok: false, status: 403, why: "Not allowed." };
  }
}
