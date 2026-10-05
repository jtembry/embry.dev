# embry.dev site

Astro 5 static site for Embry Development, LLC, deployed to GitHub Pages (same pattern as `~/Projects/beth-hacker-afc`). See README.md for commands.

- Positioning, offer shapes, open decisions, and the todo list live in the vault Project note `1 Projects/Embry Development LLC.md`. Change copy there first when it's a business decision, not a wording fix.
- The site names no employer, current or past, until JT has read his employment agreement (vault note, *Open questions*). Keep proof descriptive: industry and outcome, no company names.
- Prices are "quote on scope" until the vault note records price bands.
- Contact is `src/data/site.json` → `email` (joel@embry.dev, Cloudflare Email Routing → JT's iCloud). Every `mailto:` link opens the on-screen form in `Base.astro`, which posts to `contactEndpoint` (https://contact.embry.dev) — the Worker in `contact-worker/` (deploy: `npx wrangler deploy` there) emails it through the Email Routing `send_email` binding with Reply-To set to the visitor. The mailto href stays as the no-JS fallback.
- Plain HTML/CSS, no component framework. Client JS in `Base.astro`: nav drawer, contact form, hero-map parallax; `SystemDiagram.astro`: the map dialog.
