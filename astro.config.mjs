import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://embry.dev',
  trailingSlash: 'never',
  build: { format: 'file' },
});
