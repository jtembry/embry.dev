# embry.dev

Site for Embry Development, LLC. Astro static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. Custom domain via `public/CNAME`.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
```

Site-wide facts (name, email, links) live in `src/data/site.json`. Pages are `src/pages/*.astro`; the shared shell is `src/layouts/Base.astro`; styles are `src/styles/global.css`.

The previous site (Create React App + three.js, 2022–2025, k3s-hosted) lives untouched in `~/Projects/embry-dev`.
