# TODO voor Ayoub — wat jij moet invullen voor de site live gaat

Dit bestand bevat alle acties die jij zelf moet uitvoeren voordat de site live kan.
Zoek in de code naar `TODO_` om placeholders snel te vinden.

---

## Verplicht voor live

### 1. Telefoonnummer
- Open `lib/data.ts`
- Vervang `phone: 'TODO_TELEFOON'` door bijv. `phone: '06 12 34 56 78'`
- Vervang `phoneRaw: 'TODO_TELEFOON_RAW'` door bijv. `phoneRaw: '0612345678'`
- Zoek daarna door de codebase op `TODO_TELEFOON` en verwijder alle comment-regels

### 2. KvK-nummer
- Open `lib/data.ts`
- Vervang `kvk: 'TODO_KVK'` door je echte KvK-nummer

### 3. BTW-nummer
- Open `lib/data.ts`
- Vervang `btw: 'TODO_BTW'` door je echte BTW-nummer

### 4. LinkedIn-URL
- Open `lib/data.ts`
- Vervang `linkedin: 'TODO_LINKEDIN'` door je volledige LinkedIn-URL
  (bijv. `'https://linkedin.com/in/ayoub-elkaoui'`)

### 5. Resend API-key instellen (contactformulier)
- Maak een account op resend.com
- Maak een API-key aan
- Voeg in Vercel (of `.env.local`) toe:
  ```
  RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
  CONTACT_EMAIL=info@akwebsolutions.nl
  RESEND_FROM=noreply@akwebsolutions.nl
  ```
- Verifieer het domein `akwebsolutions.nl` in Resend
- Test het formulier op /contact na deployment

### 6. DNS-records voor productie
Zorg dat de volgende DNS-records kloppen voor akwebsolutions.nl:
- A of CNAME record naar Vercel (zie Vercel dashboard)
- MX-records voor info@akwebsolutions.nl (als je eigen mailhosting hebt)
- SPF/DKIM records voor Resend (zie Resend dashboard)

---

## Aanbevolen voor live

### 7. Foto van jezelf
- Maak een professionele foto (portretfoto, neutraal of werkomgeving)
- Sla op als `public/ayoub.jpg` (min. 800×800px)
- In `app/page.tsx` en `app/over/page.tsx`: vervang het grijze placeholder-vlak door:
  ```tsx
  import Image from 'next/image';
  <Image src="/ayoub.jpg" alt="Ayoub Elkaoui" fill style={{ objectFit: 'cover' }} />
  ```

### 8. OG-image testen
- Ga naar `/opengraph-image` om de automatisch gegenereerde OG-image te zien
- Als je een betere afbeelding wilt: vervang `app/opengraph-image.tsx` of voeg `public/og-image.png` toe (1200×630px)

### 9. Plausible Analytics (optioneel, privacy-vriendelijk)
- Maak account op plausible.io
- Voeg toe in `.env`: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=akwebsolutions.nl`
- Voeg de Plausible script toe in `app/layout.tsx`:
  ```tsx
  <Script defer data-domain="akwebsolutions.nl" src="https://plausible.io/js/script.js" />
  ```
- Geen cookiebanner nodig bij Plausible

---

## Na livegang

### 10. Screenshots voor case-pagina's (GEEN echte klantdata)
- Clockd (`/cases/clockd`): maak screenshots van de app met **nep-data** (fictieve namen, bedragen)
- ITflow (`/cases/itflow`): idem, screenshots met mock-data
- Sla op in `public/cases/` en voeg toe in de betreffende case-pagina's

### 11. Echte testimonials verzamelen
- Vraag klanten om schriftelijke toestemming voor publicatie van hun quote
- Voeg quotes toe aan `lib/data.ts` in de `REVIEWS`-array:
  ```ts
  export const REVIEWS = [
    {
      q: 'De echte quote van de klant.',
      n: 'Naam Klant',
      f: 'Functie, Bedrijfsnaam',
      av: 'NK',
    },
  ];
  ```
- De reviews-sectie op de homepage en cases-pagina verschijnt automatisch zodra `REVIEWS` niet leeg is

### 12. Algemene voorwaarden
- Laat de AV in `app/algemene-voorwaarden/page.tsx` controleren of opstellen door een jurist
- Vul je echte KvK- en BTW-nummer in

### 13. Privacyverklaring
- Laat de privacyverklaring in `app/privacy/page.tsx` controleren door een jurist
- Vul je KvK-nummer in

### 14. Logo-strip (klantlogo's)
- Vraag schriftelijke toestemming aan klanten voor logo-gebruik
- Lever logo's aan als SVG (wit of kleur) en voeg ze toe als `CUSTOMER_LOGOS` in `lib/data.ts`
- Voeg daarna de logo-strip terug toe aan `app/page.tsx`

### 15. WhatsApp-link
- Zodra telefoonnummer ingevuld is, voeg toe aan `app/contact/page.tsx` CHANNELS:
  ```ts
  { ico: 'w', lbl: 'Whatsapp', v: BRAND.phone, href: `https://wa.me/31${BRAND.phoneRaw.slice(1)}`, brand: '#25d366' },
  ```
- Verwijder het TODO-comment erboven

---

## Aandachtspunten voor SEO

- Google Search Console: voeg site toe en verifieer na livegang
- Google Bedrijfsprofiel: controleer of `akwebsolutions.nl` gekoppeld is
- Sitemap is beschikbaar op: https://akwebsolutions.nl/sitemap.xml
- Robots.txt: https://akwebsolutions.nl/robots.txt

---

## SEO Migratie Checklist (na live-gang)

De huidige site had 14 geïndexeerde pagina's, 41 gecrawld-maar-niet-geïndexeerd,
18 404's en 11 redirect-problemen. De nieuwe site pakt dit op via 301-redirects
(behoud van SEO-waarde) en 410 Gone (vertel Google expliciet: vergeet deze URL).

### Direct na deploy (dag 1)

- [ ] Test deze 5 URLs op productie en controleer de statuscodes:
  ```
  curl -I https://akwebsolutions.nl/over-ons
  # Verwacht: 308 Permanent Redirect → /over

  curl -I https://akwebsolutions.nl/website-laten-maken-baarn
  # Verwacht: 308 Permanent Redirect → /voor-wie/installatiebedrijven

  curl -I https://akwebsolutions.nl/diensten/seo-specialist-baarn
  # Verwacht: 410 Gone

  curl -I https://akwebsolutions.nl/blog/lokale-seo-gids
  # Verwacht: 410 Gone

  curl -I https://akwebsolutions.nl/willekeurige-pagina
  # Verwacht: 404 Not Found
  ```
- [ ] Controleer https://akwebsolutions.nl/sitemap.xml — alle 20+ nieuwe pagina's zichtbaar
- [ ] Controleer https://akwebsolutions.nl/robots.txt — sitemap-link aanwezig

### Google Search Console (binnen 1 week na deploy)

- [ ] Login op [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Verifieer eigendom van `akwebsolutions.nl` (HTML-tag of DNS-record methode)
- [ ] Dien nieuwe sitemap in via **Sitemaps** > `https://akwebsolutions.nl/sitemap.xml`
- [ ] Verwijder de oude sitemap NIET — laat Google zelf overstappen
- [ ] Gebruik **URL Inspectie** voor de 10 belangrijkste nieuwe pagina's en klik "Indexering aanvragen":
  - `https://akwebsolutions.nl/`
  - `https://akwebsolutions.nl/diensten`
  - `https://akwebsolutions.nl/voor-wie/loodgieters`
  - `https://akwebsolutions.nl/voor-wie/cv-monteurs`
  - `https://akwebsolutions.nl/voor-wie/elektriciens`
  - `https://akwebsolutions.nl/voor-wie/installatiebedrijven`
  - `https://akwebsolutions.nl/voor-wie/dakdekkers`
  - `https://akwebsolutions.nl/cases`
  - `https://akwebsolutions.nl/over`
  - `https://akwebsolutions.nl/contact`
  > Maximaal 10 aanvragen per dag (Google-limiet)

### Google Business Profile

- [ ] Login op [business.google.com](https://business.google.com)
- [ ] Controleer dat de website-link (`akwebsolutions.nl`) nog werkt na de migratie
- [ ] Update beschrijving: focus op installatiebedrijven in Midden-Nederland
- [ ] Voeg categorie toe: "Webdesign bureau" en eventueel "Softwareontwikkelaar"
- [ ] Voeg nieuwe foto's toe (zodra portretfoto beschikbaar is)

### Monitoring (eerste 4 weken)

- [ ] Wekelijks **Search Console > Pagina's** rapport controleren:
  - Aantal geïndexeerde pagina's stijgt van 14 richting 20+
  - 410-pagina's verschijnen als "Niet gevonden (410)" — dat is goed, Google vergeet ze
  - Geen onverwachte 404-pagina's bij nieuwe URLs
- [ ] Eventuele ranking-dip in week 1-2 is normaal bij een domein-migratie
- [ ] Na 4-6 weken: nieuwe rankings stabiliseren op branche-zoekwoorden
- [ ] Check of `/voor-wie/loodgieters`, `/voor-wie/cv-monteurs` etc. beginnen te ranken
  voor zoekwoorden als "website loodgieter Midden-Nederland"

### Wat er NIET in de redirects zit (bewuste keuze)

De volgende 301-redirects zijn NIET aangemaakt omdat die pagina's buiten de nieuwe
positionering vallen:
- `/webshop-laten-maken-hilversum` → 410 Gone (geen webshops meer)
- `/seo-optimalisatie-baarn` → 410 Gone (generieke SEO, niet branchespecifiek)
- Alle `/categorie/...` pagina's → 410 Gone (WordPress structuur)
- Alle oude blogposts over algemeen webdesign → 410 Gone

Als Google je hierover aanspreekt in Search Console: dat is prima, 410 is de
juiste HTTP-status voor "bestaat voorgoed niet meer".

---

*Gegenereerd door Claude Code — mei 2026*
