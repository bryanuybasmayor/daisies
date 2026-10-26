import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://bryanuybasmayor.github.io/daisies/
// When a custom domain (or a `<user>.github.io` repository) is used instead,
// set BASE_PATH=/ and SITE_URL to that domain — no source changes are needed,
// because every internal link goes through `src/utils/url.ts`.
const base = process.env.BASE_PATH ?? '/daisies';
const site = process.env.SITE_URL ?? 'https://bryanuybasmayor.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  vite: { plugins: [tailwindcss()] },
});
