import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://embry.dev',
  trailingSlash: 'never',
  build: { format: 'file' },
  // Live and gallery folded into /printing 2026-10-04; old links still land.
  redirects: { '/live': '/printing#live', '/prints': '/printing#prints', '/work': '/' },
});
