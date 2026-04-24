# Amphibian Labs

Website for [Amphibian Labs](https://amphibianlabs.com.au) - AI backends, system integration, and workflow automation for small and medium businesses.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- react-i18next (5 languages)
- react-hook-form + zod (contact form)
- next-themes (dark mode)

## Getting started

Requires Node.js 18+.

```sh
git clone https://github.com/pierremontanov/Amphibian-Labs-Webpage.git
cd Amphibian-Labs-Webpage
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Project structure

```
src/
  components/       # UI sections and shared components
  pages/            # Route-level page components
  assets/           # Logo, icons, images
  hooks/            # Custom React hooks
  lib/              # Utility functions
public/
  locales/          # i18n translation files (en, es, pt-BR, zh-Hans, ja)
  sitemap.xml       # SEO sitemap
  llms.txt          # AI engine discovery file
```

## License

All rights reserved. Copyright Amphibian Labs.
