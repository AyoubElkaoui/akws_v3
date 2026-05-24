# Deploy akwebsolutions.nl — Stappenplan voor vanavond

## Voor je begint
Zorg dat je hebt:
- [ ] Vercel CLI geïnstalleerd (`npm i -g vercel`)
- [ ] Vercel account ingelogd (`vercel login`)
- [ ] Toegang tot je domain-registrar (Versio / TransIP / Plesk)
- [ ] 1 uur ongestoorde tijd

---

## Stap 1: Final lokaal test (5 min)

```bash
cd nextjs
npm run build
npm run start
```

Open http://localhost:3000 en klik door:
- [ ] Homepage laadt
- [ ] /diensten laadt
- [ ] /prijzen laadt
- [ ] /cases laadt
- [ ] /contact formulier invullen en versturen (naar je eigen email)

Werkt alles? Door naar stap 2.

---

## Stap 2: Deploy naar Vercel preview (10 min)

```bash
cd nextjs
vercel
```

Beantwoord vragen:
- Set up and deploy: **Y**
- Which scope: **jouw account**
- Link to existing project: **Y** (als al bestaat) of **N**
- Project name: **akws** of **akwebsolutions**
- Directory: **./nextjs** (of ./ als je al in de nextjs map bent)
- Override settings: **N**

Vercel geeft een preview-URL (bijv. akws-xxx.vercel.app).
Open die URL, test homepage en contactformulier.

Werkt alles? Door naar stap 3.

---

## Stap 3: Environment variables instellen in Vercel (5 min)

Ga naar Vercel dashboard → jouw project → **Settings → Environment Variables**

Voeg toe:
```
RESEND_API_KEY       = re_xxxxxxxxxx        (van resend.com/api-keys)
CONTACT_EMAIL        = info@akwebsolutions.nl
RESEND_FROM          = noreply@akwebsolutions.nl
NEXT_PUBLIC_SITE_URL = https://akwebsolutions.nl
```

**BTW nummer ook invullen in `nextjs/lib/data.ts`:**
```ts
btw: 'NL...',  // jouw BTW-nummer
```

Herdeployment triggeren na het toevoegen van env vars:
```bash
vercel --prod
```

---

## Stap 4: Production deploy (5 min)

```bash
vercel --prod
```

Wacht tot deployment is afgerond. Vercel geeft een productie-URL.

---

## Stap 5: Custom domain koppelen (15–60 min)

### 5a: Domein toevoegen in Vercel
1. Vercel dashboard → project → **Settings → Domains**
2. Add Domain: `akwebsolutions.nl`
3. Add Domain: `www.akwebsolutions.nl`
4. Vercel toont de DNS-records die je moet instellen

### 5b: DNS aanpassen bij je registrar
Log in bij waar je akwebsolutions.nl hebt geregistreerd.

Stel in:
- **A record** voor `akwebsolutions.nl` → Vercel's IP (staat in dashboard)
- **CNAME** voor `www.akwebsolutions.nl` → `cname.vercel-dns.com`

⚠️ **Behoud bestaande MX-records** voor info@ mailhosting. Pas die NIET aan.

### 5c: Wacht op DNS-propagatie (5 min – 24 uur)
Check met:
```bash
dig akwebsolutions.nl
```

---

## Stap 6: SSL certificaat (automatisch)
Vercel maakt automatisch een Let's Encrypt SSL certificaat aan zodra DNS propageert. Wacht 5 minuten extra.

---

## Stap 7: Productie test
Open https://akwebsolutions.nl in **incognito venster**:
- [ ] Homepage laadt
- [ ] HTTPS werkt (groen slotje)
- [ ] /diensten, /prijzen, /contact werken
- [ ] Contactformulier verstuurt mail naar info@akwebsolutions.nl
- [ ] Mobiele weergave op telefoon (open op je telefoon!)

---

## Stap 8: Redirects testen in productie
```bash
curl -I https://akwebsolutions.nl/over-ons    # Verwacht: 308 → /over
curl -I https://akwebsolutions.nl/portfolio    # Verwacht: 308 → /cases
```

---

## Stap 9: Google Search Console (15 min)
1. Open https://search.google.com/search-console
2. Property akwebsolutions.nl → **Sitemaps**
3. Voeg toe: `https://akwebsolutions.nl/sitemap.xml`
4. **URL Inspectie** → plak URL → **Indexering aanvragen** (max 10/dag):
   - https://akwebsolutions.nl/
   - https://akwebsolutions.nl/diensten
   - https://akwebsolutions.nl/prijzen
   - https://akwebsolutions.nl/cases
   - https://akwebsolutions.nl/voor-wie/loodgieters
   - https://akwebsolutions.nl/voor-wie/cv-monteurs
   - https://akwebsolutions.nl/voor-wie/elektriciens
   - https://akwebsolutions.nl/voor-wie/installatiebedrijven
   - https://akwebsolutions.nl/diensten/maatwerk-software
   - https://akwebsolutions.nl/over

---

## Stap 10: Google Bedrijfsprofiel (10 min)
1. Open https://business.google.com
2. Selecteer AK Web Solutions
3. Update **website URL** naar `https://akwebsolutions.nl`
4. Update beschrijving (focus: installatiebedrijven, Midden-Nederland)

---

## ✅ DONE — je bent live

---

## Wat je morgen doet
- Plausible Analytics opzetten (plausible.io, gratis 30 dagen) — privacy-vriendelijk, geen cookiebanner nodig
- LinkedIn-post: "Mijn nieuwe site is live"
- Bel AD Loodgieter, MBA-installaties en MKH Bouw voor onderhoudscontract-gesprek
- **Blog posts uitbreiden** — de 3 geïndexeerde posts (werkbon, lokale-seo, excel) zijn nu ~350 woorden. Breid elk uit naar 600+ woorden voor betere SEO-indexering.

---

## Nog in te vullen in `nextjs/lib/data.ts`
- `btw: 'TODO_BTW'` → BTW-nummer invullen
- KvK staat al op `96245190` ✓
- Telefoon staat al op `06 — 85 72 23 87` ✓
- LinkedIn staat al op https://www.linkedin.com/company/ak-web-solutions-nl/ ✓

---

## Als iets fout gaat
- Vercel deployment: rollback via dashboard → Deployments → vorige deployment → Promote
- DNS terugzetten: je registrar heeft altijd een "herstel naar vorig" optie
- Resend logs: https://resend.com/logs
- Search Console crawl-errors: check 24-48 uur na livegang
