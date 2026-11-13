# Shamir Hasan — Developer Portfolio

A responsive React + Vite portfolio starter with an editorial layout, warm neutral palette, restrained accent color, project case studies, skill categories, journey section, and a contact form that prepares an email without pretending to send it through a backend.

## Requirements

- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Personalize first

Edit `src/data/portfolio.js`:
- Set `email` to your real email address.
- Add your GitHub and LinkedIn profile URLs.
- Replace all project descriptions, technologies, contributions, demos, and source URLs with verified information.
- Remove any project entry that you do not want to feature.

Edit `src/main.jsx` to update the about copy, skills, and journey milestones. The skills and journey starter entries are clearly marked placeholders.

## Contact form behavior

The form validates required fields and opens the visitor's default email app using a `mailto:` link when a valid email is configured. It does **not** send data to a server. For a true server-backed contact form, connect a backend or form provider and implement server-side validation and spam protection.

## Design notes

- Responsive desktop/tablet/mobile layouts
- Keyboard-visible focus styles and semantic sections
- Reduced-motion preference support
- Lightweight IntersectionObserver reveal transitions
- No fake testimonials, stats, customer logos, or claims of measurable outcomes
- Project previews are illustrative UI concepts, not screenshots of completed products

## Deployment

Build with `npm run build`, then deploy the `dist/` directory to a static host such as Vercel, Netlify, or Cloudflare Pages. For Vercel, the default Vite preset should work.
# shamir-hasan-portfolio
