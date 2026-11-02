# admin.embry.dev

Private stats page. Login is Cloudflare Access (one-time code by email); this Worker also checks the signed Access token itself (`src/access.js`), so a misconfigured route cannot expose it. Until `TEAM_DOMAIN`, `POLICY_AUD` and `ADMIN_EMAILS` are set in `wrangler.toml`, every request gets a 503.

Setup: Zero Trust → Access → Applications → Self-hosted, hostname `admin.embry.dev`, policy Allow for the admin email(s), login method One-time PIN. Copy the team domain (Zero Trust → Settings → Custom pages shows `<team>.cloudflareaccess.com`) and the application's Audience tag into `wrangler.toml`, then `npx wrangler deploy`.

Adding a stat: query D1 in `downloads()` style and add a section to `page()`. The Worker already binds the `embry-downloads` database.

Test the login check: `node test/access.test.mjs`.
