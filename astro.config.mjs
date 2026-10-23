import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://embry.dev',
  trailingSlash: 'never',
  // Inline the CSS: GitHub Pages caches HTML for 10 min, so after a deploy a
  // cached page asked for the old hashed stylesheet, got a 404, and rendered bare.
  build: { format: 'file', inlineStylesheets: 'always' },
  // Live and gallery folded into /printing 2026-10-04; old links still land. Work came back 2026-10-11.
  redirects: { '/live': '/printing#live', '/prints': '/printing#prints', '/ai-adoption': '/knowledge-assistants/ai-adoption', '/contact': '/about#contact', '/websites': '/software',
    // The chart pages and the interactive LikeC4 map went private 2026-10-23; /map is the whole public map now.
    '/systems': '/map', '/map/index': '/map', '/map/intakeView': '/map', '/map/email': '/map', '/map/scanner': '/map', '/map/captureView': '/map', '/map/secondBrain': '/map', '/map/assistantsView': '/map', '/map/fieldAgentView': '/map', '/map/backupsView': '/map', '/map/workshopView': '/map', '/map/printingView': '/map', '/map/siteView': '/map' },
});
