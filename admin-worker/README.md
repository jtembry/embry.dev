# admin.embry.dev

Private stats page. Login is Cloudflare Access (one-time code by email); this Worker also checks the signed Access token itself (`src/access.js`), so a misconfigured route cannot expose it. Until `TEAM_DOMAIN`, `POLICY_AUD` and `ADMIN_EMAILS` are set in `wrangler.toml`, every request gets a 503.

Setup (done 2026-11-02): Access application "embry.dev admin" on admin.embry.dev, policy Allow for the admin email, login via the Cloudflare account (the only identity provider on this account). `TEAM_DOMAIN` and `POLICY_AUD` are in `wrangler.toml` (not secret); the allowed emails are the `ADMIN_EMAILS` Worker secret because this repo is public: `npx wrangler secret put ADMIN_EMAILS`. To add a second admin, add the email to the Access policy and to that secret (comma list).

System map and wiki: `/map/` serves the private LikeC4 map and `/wiki/` the private engineering wiki (Astro Starlight, private repo `jtembry/embry-wiki-internal` at `~/Projects/embry-wiki-internal`; the public product wiki is the separate `jtembry/embry-wiki` on GitHub Pages). Both are static assets with `run_worker_first`, so the Access check covers every file. Rebuild and deploy both with `./build-assets.sh` after a map or wiki change (`build-map.sh` now just calls it). `map-dist/` is gitignored; never commit it (this repo is public).

Adding a stat: query D1 in `downloads()` style and add a section to `page()`. The Worker already binds the `embry-downloads` database.

Test the login check: `node test/access.test.mjs`.

## Pages (2026-11-17)

- `/` overview, one number per section. `/traffic` Cloudflare Web Analytics via GraphQL (`traffic.js`, live per page load; secret `CF_API_TOKEN` = account token with Account Analytics Read, no expiry; `CF_SITE_TAG` is the Web Analytics site tag, not the beacon token). `/prints` snapshot in D1 `admin_blobs` (`schema.sql`), pushed by `~/Documents/3d_printing/db/export_admin.py`, which `print_cost.py --save` runs after every print. `/downloads` the old stats page. `/map/` private system map.
- A page with no snapshot yet says which script to run.
