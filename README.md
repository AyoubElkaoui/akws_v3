# AKWS — Next.js 16

Multi-page marketing site voor AK Web Solutions, gebouwd op **Next.js 16 App Router**, **React 19**, **TypeScript**.

## Stack

- Next.js 16 (App Router, Server Components by default)
- React 19
- TypeScript (strict)
- `next/font/google` voor Barlow + Barlow Condensed + JetBrains Mono
- `next/image` voor optimised images
- Vanilla CSS (`app/globals.css`) — geen Tailwind, geen CSS-in-JS bundle

## Aan de slag

```bash
cd nextjs
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

## Wat nog te doen

- Echte foto's i.p.v. placeholders (Ahmad, team, cases)
- Echte klant-logo's (SVG wordmarks zijn nu plaintext)
- Form-submit endpoint (`/contact` POST handler — zie `app/api/contact/route.ts` toevoegen)
- Cookie banner indien nodig (nu geen analytics actief)
- Sitemap + robots.txt
- OpenGraph images per pagina
- Mobile-eerste responsive pass (de css is nu desktop-first met 1440 wrap)

## Deployen

Werkt out-of-the-box op [Vercel](https://vercel.com/new) — push naar GitHub en koppel de repo.

Of zelf hosten met `npm run build && npm start` achter een reverse proxy (nginx/Caddy).
