# Daisies Dreams and Decor — website

A fast, static brochure site for Daisies Dreams and Decor, a floral, home decor and gift shop in
Melfort, Saskatchewan. Built with [Astro](https://astro.build) and
[Tailwind CSS v4](https://tailwindcss.com). No CMS, no database, no shop or cart.

The conversion path is deliberately simple: **call, visit, or send an enquiry**. There is no
checkout, no account system, and no online booking.

## Run it

```bash
npm install
npm run dev      # local dev server, usually http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site
npm run check    # astro check (TypeScript + Astro diagnostics)
```

If `npm install` fails with an npm error mentioning `edgesOut`, it is a known npm/peer-resolution
bug on the Astro dependency tree. Install with:

```bash
npm install --legacy-peer-deps
```

`typescript` is pinned to 6.x because `astro check` in Astro 5 does not yet support TypeScript
7's compiler API. Bump it together with Astro once that lands.

**Tailwind build:** there is no separate CLI step to run. Tailwind v4 is compiled by the Vite plugin
declared in `astro.config.mjs`, so `npm run dev` rebuilds the CSS as you edit and `npm run build`
writes the minified stylesheet into `dist/`. Design tokens live in `src/styles/global.css` inside
`@theme` — teal (`--color-teal`) and its deep and mid tones, a mint tint (`--color-teal-tint`),
cream and a pale sage paper tint (`--color-cream-deep`), daisy yellow (`--color-yellow`, #ebeb33), a
dark olive "gold" (`--color-gold`) for small labels, charcoal, generous corner radii, and the two
typefaces (`--font-serif` = Cormorant Garamond, `--font-sans` = Karla). Both fonts are self-hosted from `@fontsource-variable`, so the
site makes no third-party requests.

The palette is green and yellow only — no pinks or purples, in tokens or in components. The visual
language is a soft, centred boutique one: a solid teal shop-sign header carrying the owner's white
logo lockup with the social icons at its left, of which only the navigation row is sticky; a
full-bleed teal hero whose photo band is contained and sits flush with the section's base; centred serif section headings in brand green
(`--color-teal`) over short olive rules; circular service photos; sage paper bands; a mint green
band for the services; an inner-page masthead with a photograph under a teal wash; and a white
paper card for the visit details. Headings are green (white or yellow when they sit on a teal
panel), body copy is charcoal, and photo captions are small sans-serif text — never serif italic.
Daisy yellow is the accent: the centre of the daisy mark, the word "JOY" in the hero, the "Our
Services" button, the active nav underline, the footer column headings, the sprig ornament, and
primary-button hover — never body text on cream. Section rhythm is `py-16 sm:py-20 lg:py-24` — keep
that, a centred intro, and one clear action when adding sections.

## Pages

| Page | File |
| --- | --- |
| Home | `src/pages/index.astro` |
| About Us | `src/pages/about.astro` |
| Our Services | `src/pages/services.astro` |
| Gallery | `src/pages/gallery.astro` |
| Contact Us | `src/pages/contact.astro` |

Shared pieces: `src/layouts/BaseLayout.astro` (head, SEO, schema, skip link), `src/components/`
(`Header`, `Footer`, `PageHeader`, `SectionIntro`, `ServiceBlock`, `GalleryGrid`, `GalleryPreview`,
`ContactForm`, `VisitStrip`, `SocialLinks`, `Button`, `Eyebrow`, `Todo`, `Wordmark`, `Sprig`,
icons).

## Edit business facts in one place

Phone, address, hours, navigation, and all service copy live in **`src/data/business.ts`**.
Hours are stored as display strings plus machine-readable `opens`/`closes` values so the schema
markup stays in sync. The `LocalBusiness`/`Florist` structured data is generated from the same file
in `src/components/BusinessSchema.astro`.

Gallery categories, captions and alt text live in **`src/data/gallery.ts`**. Service photos are
mapped in `src/data/serviceImages.ts`.

## Swapping the demo gallery for real store photos

The Gallery is demo-only. It is built for a one-folder swap:

1. Put the owner's photos into `src/assets/images/` — ideally portrait-ish, 1200 px on the long
   edge, JPEG or PNG. Reusing the existing filenames (`fresh-floral-mixed-bouquet.jpg`,
   `wedding-bouquet.jpg`, `home-decor-candles.jpg`, …) means **no code changes at all**: Astro
   optimises, resizes and converts them to WebP automatically.
2. If the new files have different names, update the imports and entries in `src/data/gallery.ts`.
   Each entry takes `src`, a descriptive `alt`, and a `caption`. Categories are an array, so a
   category can be added, reordered, or removed there.
3. Home page preview images come from `homePreview` at the bottom of the same file — four entries,
   any categories you like.
4. The About Us page has its own two photos, imported at the top of `src/pages/about.astro`.
5. Update `images-credits.md` (delete the demo rows once real photos are in; credit any new stock
   photos there).
6. Remove the "illustrative photograph" wording on the About Us and Gallery pages once real
   photos are in place.

The hard limit of 6–9 Gallery photos, grouped by category, is currently met with 9 photos across
five categories.

## Deploying to GitHub Pages

The site is set up as a **project site** and deploys automatically on every push to `master`:

- Live URL: `https://bryanuybasmayor.github.io/daisies/`
- `astro.config.mjs` sets `site` and `base: '/daisies'`.
- `.github/workflows/deploy.yml` builds with `withastro/action` and publishes with
  `actions/deploy-pages`.

One-time setup: in the repository, open **Settings → Pages** and set **Source** to
**GitHub Actions**, then push (or run the workflow by hand from the Actions tab).

Every internal link goes through `withBase()` in `src/utils/url.ts`, so paths are prefixed with the
base automatically. If the site later moves to a custom domain (or to a `<user>.github.io`
repository), set `BASE_PATH=/` and `SITE_URL=https://that-domain` in the build environment — no
source changes needed. The canonical and `og:url` tags follow `site` from the same config.

## Accessibility and performance notes

- Semantic landmarks, one `h1` per page, correct heading order, real `<label>`s and `<button>`s.
- Teal header (#11504d) with cream text passes WCAG contrast; cream text on the deep teal panels
  (#0a3a38) does too. The dark olive "gold" (#756a0d) is the accent label colour on light bands,
  teal is used for headings and links on light bands, and yellow (#ebeb33) is decorative or a fill
  behind deep-teal text — it is never used for text on cream.
- Every text run passes WCAG AA contrast at both 390 px and 1280 px (measured against its
  composited background). Nothing functional sits below 11.2 px; uppercase kicker labels are
  0.7 rem at 0.24 em tracking, and captions are 0.86 rem sans-serif rather than serif italic.
- Visible focus rings, a skip link, keyboard-operable mobile menu with `aria-expanded`/`aria-controls`
  and Escape to close, 44 px minimum touch targets.
- Images are served as responsive WebP via `astro:assets` with explicit `widths`/`sizes`, every
  image has `alt` text, and everything below the fold is lazy-loaded.
- No client-side framework ships; the only JavaScript is the mobile menu and the contact form's
  confirmation state.

## Contact form

The form is deliberately **not connected** to anything yet. It validates in the browser and shows a
confirmation panel that says plainly that nothing has been emailed, with the phone number as the
primary path. To connect it, pick a form service or a serverless endpoint and set it in
`src/components/ContactForm.astro` (the `data-form-endpoint` attribute on the form is the marked
hook), then replace the honest "not sent" wording in the confirmation panel with the real result.
Do not claim a booking has been made, and do not add payment collection.

## TODO — business facts to confirm with the owner

These are surfaced as visible `TODO: confirm with owner` chips in the build, and listed here so they
can be handled in one pass:

- [ ] **Phone number** — (306) 752-2340 is from public listings; confirm before publishing.
- [ ] **Address** — 506 Main St, Melfort, SK S0E 1A0 is from public listings; confirm.
- [ ] **Hours** — the site uses Mon–Fri 9:00 a.m.–5:30 p.m., Sat 9:00 a.m.–5:00 p.m., Sun closed.
      Public directories list a different set (Tue–Sat). The owner must confirm which is current.
- [ ] **Email address** — none published. The live site lists one in its footer; it must be
      confirmed by the owner before it goes on this site.
- [x] **Facebook / Instagram links** — taken from the live site footer: Facebook
      `/daisiesdreamsanddecor`, Instagram `/daisies_dreams_and_decor` (set in `socialLinks`).
- [ ] **Prices** — no prices anywhere. Pricing is quoted by phone.
- [ ] **Delivery** — no delivery area, fee, or same-day cut-off is claimed anywhere; confirm and add
      only if the owner wants it.
- [ ] **Shop / cart** — this build is informational only. Confirm whether the owner actually wants a
      shop, cart, or customer accounts before anyone builds one.
- [ ] **Shipping, returns, refunds, privacy** — no policies have been invented. If policy pages are
      wanted, they need owner-written content (and a policy page placeholder should then be created).
- [ ] **Demo gallery swap** — replace the 9 demo Pexels photos with real store/work photos.
- [x] **Logo file** — the owner's logo is in place (`src/assets/images/daisieslogo.png`, a white
      horizontal lockup on transparency) and is rendered by `src/components/Wordmark.astro` in the
      header and footer, capped at 320 px wide. The unused stacked variants
      (`logo.webp` / `logo.jpeg`) can be deleted if the owner does not want them kept.
- [ ] **Domain** — the site currently deploys to `https://bryanuybasmayor.github.io/daisies/`. If
      the owner wants `daisiesdreamsdecor.com` (or similar), add a `CNAME` in `public/`, point the
      domain at GitHub Pages, and set `BASE_PATH=/` with `SITE_URL` set to that domain.
- [ ] **Map** — the Contact page uses a labelled placeholder and a Google Maps search link, because
      no API key was invented. Add an embed only with a real key and the owner's consent.
- [ ] **Reviews / ratings / years in business** — none are claimed on the site.
