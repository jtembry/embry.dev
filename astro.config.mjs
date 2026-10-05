import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://embry.dev',
  trailingSlash: 'never',
  // Inline the CSS: GitHub Pages caches HTML for 10 min, so after a deploy a
  // cached page asked for the old hashed stylesheet, got a 404, and rendered bare.
  build: { format: 'file', inlineStylesheets: 'always' },
  // Live and gallery folded into /printing 2026-10-04; old links still land.
  redirects: { '/live': '/printing#live', '/prints': '/printing#prints', '/work': '/', '/ai-adoption': '/knowledge-assistants/ai-adoption', '/contact': '/about#contact', '/websites': '/software' },
});
