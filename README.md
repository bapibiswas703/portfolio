# bapi-biswas-portfolio

Personal portfolio site for [bapibiswas703](https://github.com/bapibiswas703).

Built with **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**, configured for static export so it deploys in one click to Vercel, Netlify, or GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build
# output is generated in ./out
```

The build emits a fully static site — no Node server needed at runtime.

## Deploy

### Vercel (recommended — zero config)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**.

### GitHub Pages / Netlify

1. Run `npm run build`.
2. Upload the contents of `out/` to your host of choice.

## Project structure

```
app/
├── layout.tsx               # Root layout + metadata
├── page.tsx                 # Home page (composes all sections)
├── globals.css              # Tailwind base + design tokens
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Experience.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Editing content

All copy lives inside the components in `app/components/`. There is no CMS — edit the TSX files directly and redeploy.

## Customizing theme

- **Colors:** edit `tailwind.config.ts` (look for the `colors` extension)
- **Fonts:** change the `fontFamily` in `tailwind.config.ts` and add the link in `app/layout.tsx`
- **Layout / new sections:** add a new component in `app/components/` and import it in `app/page.tsx`

## License

MIT — see [LICENSE](./LICENSE).
