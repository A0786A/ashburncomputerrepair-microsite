# Ashburn Computer Repair — SEO Microsite

A fast, static microsite for **AZ Tech IT Repair** in Ashburn, VA, built with
[Astro](https://astro.build) for local SEO and AI answer engines (AEO):
plain static HTML, per-page meta and canonical URLs, JSON-LD schema
(LocalBusiness, Service, FAQPage), a sitemap, and an `llms.txt` file.

## What it is

- Homepage plus six service pages (computer, laptop, virus removal, data
  recovery, phone, gaming console), a general FAQ page, and a contact page.
- No CSS framework — one small stylesheet, so pages stay fast.
- No backend. A contact/quote form can be added later via Cloudflare Pages
  Functions if needed.

## Build

```bash
npm install
npm run build    # output in dist/
npm run preview  # serve the built site locally
```

## Deployment target (not done yet)

Cloudflare Pages with the custom domain **ashburncomputerrepair.com**
(apex). Nothing in this repo is published anywhere — this scaffold is local
only until deployment is set up.

## TODO before launch

1. **NAP details** — done: the real street address, phone number, and
   hours are now in `src/config.ts` and appear on the site and in JSON-LD.
   A contact email is still not listed — add one only if the shop wants it
   published.
2. **Review the copy** — service descriptions, turnaround wording, and
   warranty wording are written generically; confirm they match how the shop
   actually works before launch.
3. **Google Business Profile** — make sure its name, address, and phone match
   the site exactly once NAP details are added.
4. **Deploy** — create the Cloudflare Pages project, connect this repo, and
   attach the apex domain.
