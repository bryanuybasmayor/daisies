/**
 * Prefixes an internal path with Astro's configured `base` so the site works
 * both at a domain root and under a GitHub Pages project path (`/daisies/`).
 *
 * External URLs, protocol-relative URLs, `tel:`/`mailto:` links and bare
 * hashes are returned untouched.
 */
export const withBase = (path: string): string => {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');

  return clean ? `${base}/${clean}` : `${base}/`;
};
