# AK Web Solutions — akwebsolutions.nl

Marketing site van mijn eigen webbureau [AK Web Solutions](https://akwebsolutions.nl): websites, software en SEO voor vakbedrijven in Midden-Nederland, gebouwd op **Next.js 16 App Router**, **React 19**, **TypeScript**.

## Stack

- Next.js 16 (App Router, Server Components by default)
- React 19
- TypeScript (strict)
- `next/font/google` voor Barlow + Barlow Condensed + JetBrains Mono
- `next/image` voor optimised images
- Vanilla CSS (`app/globals.css`) — geen Tailwind, geen CSS-in-JS bundle

## Aan de slag

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Productie-build:

```bash
npm run build
npm start
```

## Project structuur

```
app/
├── layout.tsx              ← root layout + fonts + metadata
├── globals.css             ← alle styling
├── page.tsx                ← /  (home)
├── diensten/page.tsx       ← /diensten
├── cases/page.tsx          ← /cases
├── over/page.tsx           ← /over
├── contact/page.tsx        ← /contact
└── blog/
    ├── page.tsx            ← /blog (overzicht)
    └── [slug]/page.tsx     ← /blog/{slug} (dynamische post)

components/
├── SiteNav.tsx             ← sticky nav met active state
├── SiteFooter.tsx
├── PageHead.tsx            ← page-head met crumbs + chip + title
└── Cta.tsx                 ← CTA-blok (simple of form variant)

lib/
└── data.ts                 ← alle content: diensten, cases, blogposts, etc.

public/
├── akws-mark.png           ← logo
└── akws-logo.png
```

## Hoe content bewerken

Alle copy, prijzen, blogposts en cases zitten in **`lib/data.ts`** als één bron van waarheid. Wijzig daar en het verandert overal.

- **Nieuwe blogpost:** voeg een entry toe aan de `BLOG_POSTS` array. De route `/blog/[slug]` werkt direct, en `generateStaticParams` pre-rendert hem op de build.
- **Nieuwe dienst:** voeg toe aan `DIENSTEN`. Verschijnt op de home én op `/diensten` met deep dive.
- **Prijzen aanpassen:** edit `PRIJZEN`. Zichtbaar op home + `/diensten`.

## Features

- Volledig statisch gerenderd (SSG) via `generateStaticParams`, geen client-side databundel
- Per pagina OpenGraph-image (`opengraph-image.tsx`), sitemap en robots via de App Router
- FAQ-secties met JSON-LD schema voor rich results
- Content (diensten, cases, prijzen, blog) in één typed datalaag (`lib/data.ts`)
- Contactformulier via een Route Handler (`app/api`)
- Lighthouse-gericht: geen CSS-framework, fonts via `next/font`, images via `next/image`

## Deployen

Werkt out-of-the-box op [Vercel](https://vercel.com/new) — push naar GitHub en koppel de repo.

Of zelf hosten met `npm run build && npm start` achter een reverse proxy (nginx/Caddy).
