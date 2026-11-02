// node test/access.test.mjs : checks verifyAccess with a locally generated key (no network).
import { verifyAccess } from "../src/access.js";
import assert from "node:assert/strict";
const enc = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
const { publicKey, privateKey } = await crypto.subtle.generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" }, true, ["sign", "verify"]);
const jwk = { ...(await crypto.subtle.exportKey("jwk", publicKey)), kid: "k1" };
const env = { TEAM_DOMAIN: "team.cloudflareaccess.com", POLICY_AUD: "aud123", ADMIN_EMAILS: "joel@example.com" };
const keys = async () => [jwk];
async function token(over = {}, signWith = privateKey) {
  const h = enc({ alg: "RS256", kid: "k1" });
  const p = enc({ aud: ["aud123"], iss: "https://team.cloudflareaccess.com", exp: Math.floor(Date.now() / 1000) + 600, email: "joel@example.com", ...over });
  const sig = Buffer.from(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", signWith, new TextEncoder().encode(`${h}.${p}`))).toString("base64url");
  return `${h}.${p}.${sig}`;
}
const req = (t) => new Request("https://x/", { headers: t ? { "Cf-Access-Jwt-Assertion": t } : {} });
assert.equal((await verifyAccess(req(await token()), env, keys)).ok, true, "valid token passes");
assert.equal((await verifyAccess(req(null), env, keys)).status, 403, "no token refused");
assert.equal((await verifyAccess(req(await token()), {}, keys)).status, 503, "unconfigured refuses everyone");
assert.equal((await verifyAccess(req(await token({ aud: ["other"] })), env, keys)).ok, false, "wrong audience refused");
assert.equal((await verifyAccess(req(await token({ iss: "https://evil.example" })), env, keys)).ok, false, "wrong issuer refused");
assert.equal((await verifyAccess(req(await token({ exp: 1 })), env, keys)).ok, false, "expired refused");
assert.equal((await verifyAccess(req(await token({ email: "other@example.com" })), env, keys)).ok, false, "other email refused");
const other = (await crypto.subtle.generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" }, true, ["sign", "verify"])).privateKey;
assert.equal((await verifyAccess(req(await token({}, other)), env, keys)).ok, false, "forged signature refused");
const t = await token(); const [a, b, c] = t.split(".");
assert.equal((await verifyAccess(req(`${a}.${enc({ aud: ["aud123"], iss: "https://team.cloudflareaccess.com", exp: 9999999999, email: "joel@example.com" })}.${c}`), env, keys)).ok, false, "tampered payload refused");
console.log("access: all checks passed");
