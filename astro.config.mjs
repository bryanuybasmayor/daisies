import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: confirm with owner — add the production domain here once it is known
// (needed for absolute canonical URLs and a sitemap). Do not guess a domain.
export default defineConfig({
  trailingSlash: 'ignore',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  vite: { plugins: [tailwindcss()] },
});
