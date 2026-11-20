// Site traffic from Cloudflare Web Analytics (the beacon in Base.astro), read through the GraphQL API.
// Live on every page load with the CF_API_TOKEN secret (account token, Account Analytics Read, no expiry, made 2026-11-20).
// Cloudflare samples page views, so small counts come in steps of 10.
import { esc, num, cards, table, bars, lastDays, failed } from "./layout.js";

const QUERY = `query($a:String!,$s:String!,$d:Date!,$w:Date!){viewer{accounts(filter:{accountTag:$a}){
days:rumPageloadEventsAdaptiveGroups(limit:40,filter:{siteTag:$s,date_geq:$d},orderBy:[date_ASC]){count sum{visits} dimensions{date}}
week:rumPageloadEventsAdaptiveGroups(limit:1,filter:{siteTag:$s,date_geq:$w}){count sum{visits}}
paths:rumPageloadEventsAdaptiveGroups(limit:15,filter:{siteTag:$s,date_geq:$d},orderBy:[count_DESC]){count dimensions{requestPath}}
refs:rumPageloadEventsAdaptiveGroups(limit:10,filter:{siteTag:$s,date_geq:$d},orderBy:[count_DESC]){count dimensions{refererHost}}
countries:rumPageloadEventsAdaptiveGroups(limit:8,filter:{siteTag:$s,date_geq:$d},orderBy:[count_DESC]){count dimensions{countryName}}
devices:rumPageloadEventsAdaptiveGroups(limit:5,filter:{siteTag:$s,date_geq:$d},orderBy:[count_DESC]){count dimensions{deviceType}}}}}`;

const ago = (n) => new Date(Date.now() - n * 86400_000).toISOString().slice(0, 10);

export async function fetchTraffic(token, accountId, siteTag) {
  const res = await fetch("https://api.cloudflare.com/client/v4/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY, variables: { a: accountId, s: siteTag, d: ago(29), w: ago(6) } }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data || data.errors?.length) throw new Error(data?.errors?.[0]?.message || `HTTP ${res.status}`);
  const a = data.data.viewer.accounts[0];
  const views30 = a.days.reduce((s, r) => s + r.count, 0);
  const visits30 = a.days.reduce((s, r) => s + (r.sum?.visits || 0), 0);
  return {
    views30, visits30,
    views7: a.week[0]?.count || 0, visits7: a.week[0]?.sum?.visits || 0,
    days: lastDays(Object.fromEntries(a.days.map((r) => [r.dimensions.date, r.count]))),
    paths: a.paths.map((r) => [r.dimensions.requestPath, r.count]),
    refs: a.refs.map((r) => [r.dimensions.refererHost || "(typed or bookmarked)", r.count]),
    countries: a.countries.map((r) => [r.dimensions.countryName, r.count]),
    devices: a.devices.map((r) => [r.dimensions.deviceType, r.count]),
  };
}

export const traffic = (env) => (env.CF_API_TOKEN ? fetchTraffic(env.CF_API_TOKEN, env.CF_ACCOUNT_ID, env.CF_SITE_TAG) : null);

export async function trafficPage(env) {
  let t;
  try { t = await traffic(env); } catch (e) { return failed("Traffic", e.message); }
  if (!t) return `<div class="setup"><b>Traffic is not connected.</b> The <code>CF_API_TOKEN</code> secret is missing: <code>npx wrangler secret put CF_API_TOKEN</code> in admin-worker.</div>`;
  const list = (rows) => table(rows.map(([k, n]) => [esc(k), num(n)]), null, [1]);
  return `${cards([[num(t.views7), "Page views, last 7 days"], [num(t.visits7), "Visits, last 7 days"], [num(t.views30), "Page views, last 30 days"], [num(t.visits30), "Visits, last 30 days"]])}
<h2>Page views per day, last 30 days</h2>${bars(t.days)}
<h2>Top pages</h2>${list(t.paths)}
<h2>Where visitors came from</h2>${list(t.refs)}
<h2>Countries</h2>${list(t.countries)}
<h2>Devices</h2>${list(t.devices)}
<p class="note">From Cloudflare Web Analytics: no cookies, no IP addresses kept. A visit is a page view that arrived from another site or was typed in. Cloudflare samples, so small numbers come in steps of 10. Visitors with ad blockers are not counted.</p>`;
}
