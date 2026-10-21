# She Drives

Marketing site for She Drives LLC, a women-led chauffeur service in Seal Beach,
California. Built with Astro, deployed to Cloudflare Pages.

## Status

Pitch build. Three money pages plus supporting pages, built on spec before the
client has seen it. **Nothing in this repo may state a fact that has not been
confirmed.** See "Unconfirmed" below.

## Stack

- **Astro** (static output, zero client JavaScript)
- **Fonts** self-hosted via `@fontsource-variable` (no Google Fonts request)
- **Hosting** Cloudflare Pages, built from this repo on push to `main`

## Cloudflare Pages build settings

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 22 or later |

## Where the facts live

`src/data/site.ts` is the single source of truth for NAP, the TCP number, the
airport list and the testimonials. Change a business fact there, not in a page.

`overflowClause` in that same file is the most important paragraph on the site.
It appears verbatim on the homepage, the women-led page and the booking page.
**Do not reword it without Sherri's sign-off.**

## Design system

All brand color lives in the first block of `src/styles/global.css`. The palette
is taken from the logo: black script, white ground, and the brush-stroke pink
sampled at `#fadedf`. Changing those variables restyles the whole site.

## Unconfirmed, must be resolved before launch

- **Pricing.** No rate appears anywhere on the site, deliberately. There is no
  `priceSpecification` in the schema until real numbers are confirmed.
- **Form endpoint.** `FORM_ENDPOINT` in `src/components/BookingForm.astro` is
  empty. Set it to a Web3Forms or Formspree endpoint before launch.
- **LAX drive times.** The table on `/lax-car-service/` uses typical 405
  corridor ranges. Have Sherri check them against her own run times.
- **Reply window.** The booking page describes the process but states no
  response time. Add one only once she commits to a real number.
- **`src/assets/chauffeur-unconfirmed.webp`** is a second headshot whose
  subject has not been identified. It is not referenced by any page.
- **Google Business Profile.** None exists. Highest-priority task outside
  this repo.

## Schema

JSON-LD is generated from the same data that renders the page, so the markup
and the structured data cannot disagree. `BusinessSchema.astro` emits the
sitewide `LimousineService` block; `Faq.astro` renders the questions and their
`FAQPage` block from one array.

## Local development

```
npm install
npm run dev
```
