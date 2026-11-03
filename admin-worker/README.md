# admin.embry.dev

Private stats page. Login is Cloudflare Access (one-time code by email); this Worker also checks the signed Access token itself (`src/access.js`), so a misconfigured route cannot expose it. Until `TEAM_DOMAIN`, `POLICY_AUD` and `ADMIN_EMAILS` are set in `wrangler.toml`, every request gets a 503.

Setup (done 2026-11-02): Access application "embry.dev admin" on admin.embry.dev, policy Allow for the admin email, login via the Cloudflare account (the only identity provider on this account). `TEAM_DOMAIN` and `POLICY_AUD` are in `wrangler.toml` (not secret); the allowed emails are the `ADMIN_EMAILS` Worker secret because this repo is public: `npx wrangler secret put ADMIN_EMAILS`. To add a second admin, add the email to the Access policy and to that secret (comma list).

Adding a stat: query D1 in `downloads()` style and add a section to `page()`. The Worker already binds the `embry-downloads` database.

Test the login check: `node test/access.test.mjs`.
