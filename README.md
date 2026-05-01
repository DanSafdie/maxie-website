# Maxie Safdie

Personal umbrella website for Maxie Safdie, with dedicated sections for art, teaching, and marine science.

Planned production URL: `https://maxie-safdie.com`

## Site Structure

- `index.html` - homepage and overview
- `art.html` - studio art, ceramics, prints, album art, posters, and other work
- `marine-science.html` - biochemistry, coral restoration, diving, and marine science experience
- `teaching.html` - tutoring, classroom teaching, and adjunct teaching experience
- `content/linkedin/experience.md` - saved LinkedIn experience export used as source material
- `content/linkedin/education.md` - saved LinkedIn education export used as source material
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

## Deploying Through GitHub And Vercel

1. Create a GitHub repository for this project.
2. Push the local `main` branch to GitHub.
3. In Vercel, import the GitHub repository as a new project.
4. Use the default static project settings. No build command is required.
5. Add the custom domain `maxie-safdie.com` in Vercel after Maxie confirms the final URL.
6. Follow Vercel's DNS instructions for the domain registrar.

Vercel will create preview deployments for pull requests and deploy production from the main branch.

## Content Notes

The current copy is based on the provided LinkedIn markdown files plus the initial notes for Maxie's art practice. Replace placeholder project descriptions with final artwork titles, images, and contact links when Maxie is ready.

Additional art reference: Shagshop Rooftop band art and release context is visible at `https://www.shagshoprooftop.com/`.

Contact details currently shown on the site:

- Email: `maxiesafdie@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/maxie-safdie-8148882a2/`
