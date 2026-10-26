# Claude Code Prompt — Daisies Dreams and Decor, Melfort, SK

Copy everything below the line and paste it into Claude Code in the project folder.

---

## Project: Daisies Dreams and Decor website — version / rebuild

Build a fresh, modern version of the **Daisies Dreams and Decor** website — a small-town floral, home decor, and gift store in **Melfort, Saskatchewan**.

This is a **prompt for a version of the site, not a copy of the live site**. Keep the live site's page structure and spirit, rebuild it cleanly, and use demo content where the owner has not supplied real content. Do not scrape, hotlink, or reuse the live site's photos, logo file, or long blocks of its text without the owner's permission.

Original site for structure reference only: https://www.daisiesdreamsdecor.com/

### 0. First, look at what is already in this project

1. Explore the current project folder first: existing files, framework, package manager, and any README or config.
2. If a logo file has been supplied in the project folder, use that file as the logo. If no logo file is supplied, use a clean serif text wordmark for "Daisies Dreams and Decor" (see section 1) — do not download the live site's logo file and reuse it.
3. Tech stack is decided (see section 6): Tailwind CSS, modern best practices. If a different stack already exists in the folder, flag that conflict before replacing it — do not silently switch stacks. If the folder is empty, scaffold with the stack in section 6: a clean, fast informational site, no CMS, and no backend unless a contact form needs one.
4. This version is an informational / brochure version, not a full e-commerce rebuild. Do NOT rebuild a shop, cart, checkout, or customer account system unless the owner explicitly confirms it. The conversion path is: visit the store, call, or send a contact/enquiry form — not online checkout.

### Verified business facts — from the live site and public listings, October 2026

Use these facts on the site. Flag anything marked "confirm" to the owner in the final TODO list:

- **Business:** Daisies Dreams and Decor — floral, home decor, and gift store, Melfort, SK.
- **Address (public listings):** 506 Main St, Melfort, SK S0E1A0 — confirm with the owner before publishing.
- **Phone (public listings):** (306) 752-2340 — use as the `tel:` link in the header and contact page, and confirm with the owner.
- **Store story, in your own words (do not copy the live About page verbatim):** A cozy, welcoming small-town store founded by Kyla, built around fantastic customer service, unique floral designs, and one-of-a-kind home decor and gifts. The store has a sitting area and offers complimentary coffee or tea. Its theme is adding a little JOY to people's lives.
- **Business hours (from the live site's About Us page):** Monday to Friday 9:00 a.m. – 5:30 p.m., Saturday 9:00 a.m. – 5:00 p.m., Sunday closed. Note for the owner: some public directories list different hours (Tue–Sat, 10 a.m. – 5/4 p.m.) — the site's own hours above are used here, and the owner must confirm which set is current.
- **Services (from the live site's Our Services page):** Fresh Floral Arrangements; Silk / Permanent Botanical Arrangements; Home Decor; Gift-ware; Bereavement; Wedding (see section 4 for the summaries, paraphrased — do not paste the live page text).

### 1. Brand: teal and purple, warm and cozy — NOT generic, NOT garish

- **Header background: TEAL. This is a hard requirement.** The site header — logo area, navigation, and phone/call button area — must sit on a solid teal background, with white / off-white text and logo on top for contrast. Not white, not cream, not a gradient header.
- **Palette: teal and purple.** Teal is the primary colour (header, primary buttons, key headings and links). Purple is the secondary accent only — soft, muted purple / lavender for small highlights, dividers, and hover states, never for large backgrounds and never as a loud neon purple. The body of the site stays warm and readable: white / soft cream backgrounds, dark charcoal text, with teal and purple doing the accent work.
- **Do NOT use a teal-to-purple gradient** as a background, header, or button fill. Solid teal, solid muted purple accents, and clean neutrals — that restraint is what keeps it elegant instead of looking like a template.
- **Feel:** Cozy, welcoming, feminine without being childish, small-town and personal. Fresh flowers, soft light, a shop you want to walk into — not a big-box florist, not a luxury-brand cold look, and not a cartoon daisy theme. Use daisy/floral touches sparingly (a small motif, a photo, a divider), not daisies everywhere.
- **Copy tone:** Warm, personal, Saskatchewan English. Short, caring sentences. Talk about occasions — thinking of you, anniversary, wedding, new baby, retirement, memorial, just because — in plain words, not sales hype.

### 2. Typography: a serif font close to the logo font

- **Use a serif font that is as close as possible to the serif wordmark used in the Daisies Dreams and Decor logo.** Look at the logo on the live site first: note whether it is an elegant high-contrast serif, a soft rounded serif, or a classic book serif, and match that character — do not default to a generic sans-serif for headings.
- Starting candidates to compare against the logo (pick the closest, do not use all of them): **Playfair Display, Cormorant Garamond, Lora, or EB Garamond**. Use the chosen serif for the wordmark, page headings, and service titles.
- Pair it with one clean, highly readable font for body text and navigation — a simple sans-serif that does not fight the serif. No more than two font families in total.
- Headings should feel like a shop sign and a storybook, not like a tech product: generous sizing, comfortable line height, and real hierarchy, not all-caps everywhere.

### 3. Hard rule: do NOT make it look like a generic AI / template website

**BANNED:**
- Purple/blue gradients, glowing blobs, or glassmorphism cards
- A centred hero with a big gradient headline, a pill button, and three identical feature cards underneath
- Generic icons in coloured circles, emoji bullets, and stock "seamless / elevate / unlock / experience" copy
- Identical rounded cards, identical spacing, and a layout that could belong to any business
- Fake reviews, fake ratings, fake "500+ happy customers," or fake prices
- Lorem ipsum anywhere in the final output
- Copying the live site's photos or long text passages, or hotlinking to the live site's images

**REQUIRED INSTEAD:**
- An editorial, warm layout: a strong serif headline, a thin teal or muted-purple rule, generous cream space, and one clear action per screen (Call, Visit Us, or Enquire)
- Real hierarchy: the phone number and store hours must be easy to find, especially on mobile
- Texture and restraint: solid teal header, cream sections, soft purple accents, real photography — let type and flowers do the work
- Local specificity: Melfort, Saskatchewan, and real occasions and services — only where confirmed, otherwise leave a marked placeholder

If a section starts to look like a template, redesign it. Simpler and warmer beats polished and generic.

### 4. Pages — keep the pages the live site has

Build these pages, with the same names the live site uses, unless the existing project already has a different structure (in which case flag it):

1. **Home**
   - Teal header (see section 1) with logo/wordmark, navigation, and phone number as a `tel:` link.
   - Hero: warm floral/decor photography, a serif headline about a cozy Melfort floral, home decor, and gift store, and two actions: Call Us and Our Services.
   - Short welcome section (paraphrased story, not copied text): welcoming, cozy store, sitting area, complimentary coffee or tea, and the JOY theme.
   - Services preview: the six services below, each with one line and a link to Our Services.
   - Gallery preview: 3–4 demo images only (see section 5), linking to the full Gallery page.
   - Visit us strip: address, phone, and hours, with a link to Contact Us.

2. **About Us**
   - The store story in original, paraphrased copy: small-town Melfort floral, home decor, and gift store; fantastic customer service; gorgeous, unique floral designs; one-of-a-kind decor and gifts; welcoming, friendly, cozy atmosphere; sitting area with complimentary coffee or tea; founded by Kyla as a dream come true, built around adding JOY to people's lives.
   - Business hours (see Verified facts above), with a note to the owner to confirm them.
   - A photo section using demo/free-stock imagery until real store photos are supplied — clearly marked as demo in the TODO list, not presented as real store photos.

3. **Our Services** — all six, each with a short original summary (paraphrase the live page, do not paste it):
   - **Fresh Floral Arrangements:** Flowers as an expression of care, love, friendship, or sympathy — from a small "Thinking of You" arrangement to an anniversary bouquet, made with care for the occasion.
   - **Silk / Permanent Botanical Arrangements:** Longer-lasting arrangements for a home or office — the team can help design one, or design to a customer's brief. Link to the Gallery for past work.
   - **Home Decor:** A constantly refreshed selection — pillows, wall canvas, lamps, candles, and more — with custom ordering if the item is not in store.
   - **Gift-ware:** Journals, pillows, throws, dish cloths, Christian giftware, and specialty items, including pieces from local artisans and craftsmen. Local artisans are invited to bring products to the store.
   - **Bereavement:** Genuine care and compassion during the loss of a loved one, with arrangements coordinated to the person's personality and interests — including personal touches such as favourite colours, a tractor, or sports-team memorabilia where requested.
   - **Wedding:** Starts with a personal consultation about the couple's love story and theme, then flowers to fit their style and colours — bouquets, boutonnieres, corsages, centrepieces, and more. Include a "Book a free wedding consultation" call to action (call, not a fake booking system).

4. **Gallery** — see section 5. Demo only.

5. **Contact Us**
   - Contact form: name, phone/email, occasion, message, and preferred pickup/visit date — with a clear confirmation state ("Thanks — we will get back to you") and no fake instant-booking claim. If no backend/email is configured yet, wire it to a clearly marked placeholder and make Call Us the primary path.
   - Store address, phone, hours, and a map placeholder / link (do not embed a live map with a made-up API key).
   - A note for local artisans (from the Services page) and for wedding consultations, pointing back to the relevant service.

6. **Footer / customer support links**
   - Keep a footer with the same kind of customer-support links the live site's footer has (for example, contact, hours, and store information) — as footer links, not as invented policy pages. Do NOT invent shipping, returns, or refund policies. If a policy page is needed, create it as a clearly marked placeholder for the owner to fill in, and list it in the final TODOs.

### 5. Gallery — LIMITED, demo only

- **Limit the Gallery to demo images only. This is a hard limit.**
- Use **no more than 6–9 images total** in the Gallery, grouped by category: Fresh Floral, Silk / Botanical, Wedding, Bereavement, and Home Decor.
- Use **free stock images from Unsplash, Pexels, and other reputable free stock libraries** for these demo images, or clearly labelled placeholders — never the live site's real gallery photos. Only use images actually free for commercial business use, check the licence per image, and do not use watermarked or paid-only images.
- Download and host the demo images locally in the project (do not hotlink), compress and size them for web, give each one descriptive `alt` text, and keep a short `images-credits.md` listing each demo image, its source, and its photographer/licence.
- Label the Gallery in the build notes (not necessarily on the public page, unless the owner wants it) as DEMO — easy to swap: one folder, one list, so real Daisies photos can replace the demo images without rebuilding the page.
- If a category has no good free-stock match, use a placeholder for that one slot and list it in the TODOs — do not fill it with a random unrelated photo.

### 6. Tech stack — Tailwind CSS, modern best practices

**Use Tailwind CSS. This is not optional.**

- Build the site with **Tailwind CSS** (installed properly via the Tailwind CLI / PostCSS build — not a CDN script in production, and not hand-written CSS for layout). Put the brand tokens in the Tailwind theme/config, not scattered through the markup: teal (header/primary), muted purple (accent), cream/white (backgrounds), charcoal (text), plus the two font families from section 2.
- Use Tailwind's utility classes for layout, spacing, and responsive design. Do not fight Tailwind with large custom stylesheets, inline styles everywhere, or a second CSS framework.
- **Responsive, mobile-first, beautifully done:** Design mobile first, then scale up with Tailwind's `sm:`, `md:`, and `lg:` breakpoints. The site must look intentional at 360px, 768px, and 1280px — not just "not broken." Test the teal header, navigation, gallery grid, and contact form at each width. Touch targets at least 44px, no horizontal scrolling, no text clipped by the teal header.
- **Modern best practices:**
  - Semantic HTML5: `header`, `main`, `section`, `footer`, proper heading order (`h1` once per page, then `h2`/`h3`), real `<label>` elements, and real `<button>` / `<a>` elements — no divs pretending to be buttons.
  - Clean, component-style structure: reusable header, footer, service card, gallery grid, and contact form pieces, not one giant copy-pasted file.
  - Performance: optimised, properly sized images with `alt` text, lazy-loading below the fold, no heavy JavaScript, no unused libraries. Aim for a Lighthouse performance score above 90 on mobile.
  - Accessibility: teal-header text and purple accents must pass contrast checks, visible focus states, keyboard-navigable navigation and forms, and `aria` labels where a control needs one.
  - SEO for a local business: page titles like "Daisies Dreams and Decor — Florist in Melfort, SK", meta descriptions, `LocalBusiness` / `Florist` schema markup, Melfort, Saskatchewan in headings and copy naturally.
  - Clean code: consistent formatting, no dead code, no placeholder comments left in production, and a short README explaining how to run the Tailwind build and swap the demo gallery images for real photos.
- Keep all business facts in one easy-to-edit place at the top of the code or in a config file: phone, address, hours, and services — so the owner can update them without hunting through markup.

### 7. DO NOT invent business facts — placeholders required

**Do not invent, guess, or fill in any of the following.** If a fact is not in the Verified facts above or supplied by the owner, use a visible `[TODO: confirm with owner — ...]` placeholder and list every placeholder at the end of your output:

- Prices for bouquets, arrangements, decor, or giftware (do not copy prices from third-party wedding/directory listings)
- Delivery areas, delivery fees, or same-day cut-off times, unless the owner confirms them
- A website domain, email address, or social-media links beyond what the owner supplies (none are listed in Verified facts above)
- Shipping, returns, or refund policies
- Reviews, ratings, or years in business beyond what is verified
- Real store/gallery photos — the Gallery is demo only (see section 5)

Before finishing, print a short checklist of every TODO placeholder so the owner can fill them in one pass, including: confirm phone and address, confirm which hours set is current, confirm the demo gallery swap, and confirm whether a shop/cart is wanted at all.

### 8. Deliverable and final check

1. Build the site in this project folder, using the teal header, teal-and-purple palette, and serif font from sections 1–2.
2. Run the Tailwind build and the site preview and fix any errors. Do not report success if the Tailwind build fails.
3. Test the responsive view yourself at mobile, tablet, and desktop widths: teal header, navigation, gallery grid (6–9 demo images only), and contact form must all work on a narrow phone screen.
4. Final reply must include: what you built, the pages you kept, where the teal/purple and serif choices came from, how the demo gallery is structured for swapping in real photos, and the full TODO list of unconfirmed business facts.
5. If anything in this prompt conflicts with what is actually in the project folder (for example, a different logo or an existing stack), flag the conflict and follow the project folder, then tell me what you changed and why.
