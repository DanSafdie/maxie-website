# Maxie Safdie

Personal umbrella website for Maxie Safdie, with dedicated sections for art, teaching, and marine science.

Production URL: `https://maxie-website.vercel.app`

Planned custom domain: `https://maxie-safdie.com`

GitHub repository: `https://github.com/DanSafdie/maxie-website`

## Site Structure

- `index.html` - homepage and overview
- `art.html` - studio art, ceramics, prints, album art, posters, and other work
- `marine-science.html` - biochemistry, coral restoration, diving, and marine science experience
- `teaching.html` - tutoring, classroom teaching, and adjunct teaching experience
- `content/linkedin/experience.md` - saved LinkedIn experience export used as source material
- `content/linkedin/education.md` - saved LinkedIn education export used as source material
- `assets/art/` - web-ready art documentation images used on the art page
- `styles.css` - shared visual system

## Local Development

Run a local static server:

```bash
npm run dev
```

Then open:

```text
http://localhost:4173
```

Run the lightweight content check:

```bash
npm run check
```

## Deployment

The site is deployed on Vercel as `maxie-website`.

Current production alias:

```text
https://maxie-website.vercel.app
```

The Vercel project has `maxie-safdie.com` and `www.maxie-safdie.com` attached, but DNS still needs to be configured at the registrar.

Vercel requested these DNS records:

```text
A maxie-safdie.com 76.76.21.21
A www.maxie-safdie.com 76.76.21.21
```

After DNS is configured and verified, the custom domain should resolve to this site.

## GitHub And Vercel Integration

The GitHub repository is pushed to `main`.

```text
https://github.com/DanSafdie/maxie-website
```

The Vercel CLI attempted to connect the GitHub repository, but Vercel returned an access error. To finish automatic GitHub deployments, open the Vercel dashboard, connect the project to `DanSafdie/maxie-website`, and make sure the Vercel GitHub app has access to that repository.

## Content Notes

The current copy is based on the provided LinkedIn markdown files plus the initial notes for Maxie's art practice. Replace placeholder project descriptions with final artwork titles, images, and contact links when Maxie is ready.

Additional art reference: Shagshop Rooftop band art and release context is visible at `https://www.shagshoprooftop.com/`.

Etsy shop: `https://www.etsy.com/shop/bymaxie`

- Shop name: `bymaxie`
- Owner shown on Etsy: Maxie Safdie
- Current fit for site integration: outbound "Shop prints on Etsy" links from the art page.
- Notes from May 1, 2026: the shop appears focused on handmade linocut prints, including animal, marine, landscape, and figure subjects. Etsy showed 11 active items, 5 sales, 2 reviews, and 4 years on Etsy at the time this was added.

Contact details currently shown on the site:

- Email: `maxiesafdie@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/maxie-safdie-8148882a2/`
