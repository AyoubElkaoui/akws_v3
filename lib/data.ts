// Alle content voor akwebsolutions.nl — één bron van waarheid.
// Wijzig hier om overal bij te werken.

export const BRAND = {
  name: 'AK Web Solutions',
  short: 'AKWS',
  domain: 'akwebsolutions.nl',
  phone: '06 — 85 72 23 87',
  phoneRaw: '0685722387',
  email: 'info@akwebsolutions.nl',
  kvk: '96245190',
  btw: 'NL005197684B40',
  linkedin: 'https://www.linkedin.com/company/ak-web-solutions-nl/',
  founder: 'Ayoub Elkaoui',
  location: 'Baarn',
  province: 'Utrecht',
  region: 'Midden-Nederland',
  since: '2024',
};

export const NAV_LINKS = [
  { href: '/diensten', label: 'Diensten' },
  { href: '/cases', label: 'Cases' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/prijzen', label: 'Prijzen' },
  { href: '/over', label: 'Over' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const USPS = [
  { num: '01', k: '4 wkn', v: 'Van kennismaking tot live binnen vier weken voor een Starter-pakket.' },
  { num: '02', k: 'Vast', v: 'Wat we afspreken is wat je betaalt. Geen verrassingen achteraf.' },
  { num: '03', k: '1 partij', v: 'Website en software bij dezelfde freelancer.' },
  { num: '04', k: 'NL', v: 'Nederlandstalige support. Geen ticket-fabriek, geen tijdverschil.' },
];

export const BRANCHES = [
  { naam: 'Loodgieters', sub: 'Sanitair & leidingwerk', slug: 'loodgieters' },
  { naam: 'CV & HVAC', sub: 'Ketels, warmtepompen, klimaat', slug: 'cv-monteurs' },
  { naam: 'Elektriciens', sub: 'Installatie & inspectie', slug: 'elektriciens' },
  { naam: 'Installatiebedrijven', sub: 'Totaalinstallateurs (W & E)', slug: 'installatiebedrijven' },
  { naam: 'Dakdekkers', sub: 'Plat & schuin dak', slug: 'dakdekkers' },
  { naam: 'Aannemers & bouw', sub: 'Verbouw, renovatie, nieuwbouw', slug: 'aannemers' },
  { naam: 'Hoveniers', sub: 'Tuinaanleg & bestrating', slug: 'hoveniers' },
  { naam: 'Schilders', sub: 'Binnen- & buitenschilderwerk', slug: 'schilders' },
];

export const DIENSTEN = [
  {
    n: '01',
    sub: 'Showcase + leads',
    titel: 'Websites die leads opleveren',
    body: 'Snelle, vindbare sites met duidelijke offerteflow. Gebouwd op Next.js voor maximale snelheid en SEO. Mobiel-first, AVG-proof, gemaakt om gevonden te worden in jouw werkgebied.',
    tags: ['Next.js', 'Snel', 'Mobiel-first', 'AVG'],
    deepDeck:
      'Snelle, mobiel-first sites met een duidelijke contactflow. Gebouwd op Next.js voor maximale snelheid en technische SEO. Lokale SEO-fundamenten ingebouwd: gestructureerde data, lokale landingspagina\'s, Google Bedrijfsprofiel. Bewerkbaar CMS dat geen handleiding nodig heeft.',
    features: [
      "Maatwerk ontwerp in jouw huisstijl",
      "Tot 6 pagina's (Starter) of 12 (Pro)",
      "Contactformulier met spamfilter",
      "Basis lokale SEO-setup",
      "Google Bedrijfsprofiel inrichten",
      "Hosting, SSL & updates inbegrepen",
      "Mobiel-first & snel",
      "AVG-proof",
    ],
    price: { v: 'Op maat', m: 'gratis kennismaking', d: '3 tot 4 wkn' },
  },
  {
    n: '02',
    sub: 'Vindbaarheid',
    titel: 'SEO & Google Ads',
    body: "Lokale SEO voor je werkgebied: Google Bedrijfsprofiel, lokale landingspagina's en gerichte Google Ads voor spoedklussen en seizoenswerk. Ik meet leads, niet ijdelheidscijfers.",
    tags: ['Lokaal SEO', 'Google Ads', 'Meten', 'Rapportage'],
    deepDeck:
      "Lokale SEO-optimalisatie, Google Bedrijfsprofiel-beheer en gerichte Google Ads-campagnes voor jouw werkgebied. Maandelijkse rapportage: leads en conversies, geen ijdelheidscijfers. Inbegrepen bij het Pro-pakket.",
    features: [
      "Lokale SEO per stad of regio",
      "Google Bedrijfsprofiel optimalisatie",
      "Lokale landingspagina's",
      "Google Ads campagnes opzetten",
      "Maandelijks beheer en rapportage",
      "Conversie-tracking",
      "Review-strategie",
      "Inbegrepen bij Pro-pakket",
    ],
    price: { v: 'Op maat', m: 'gratis kennismaking', d: 'doorlopend' },
  },
  {
    n: '03',
    sub: 'Op maat gebouwd',
    titel: 'Maatwerk software',
    body: "Urenregistratie, ticketsystemen, koppelingen met je administratie. Geen generieke SaaS, wel software die past bij hoe jouw bedrijf werkt. Vaste prijs per fase, geen uurtje-factuurtje.",
    tags: ['Urenregistratie', 'Koppelingen', 'Maatwerk', 'Vaste prijs'],
    deepDeck:
      "Software die past bij hoe jouw bedrijf werkt: urenregistratie op de bouwplaats, ticketsystemen, koppelingen met administratiepakketten (Snelstart, Exact, Moneybird). Vaste prijs per fase, geen uurtje-factuurtje. Demo's elke week, zodat je ziet wat er gebouwd wordt.",
    features: [
      "Intake en procesanalyse",
      "Urenregistratie en planning",
      "Klantportaal of ticketsysteem",
      "Koppeling met Snelstart, Exact, Moneybird",
      "Mobiel-first voor gebruik op locatie",
      "Wekelijkse demo's tijdens de bouw",
      "Hosting en onderhoud inbegrepen",
      "Maatwerk API-koppelingen",
    ],
    price: { v: 'Op maat', m: 'vaste prijs per fase', d: '4 tot 8 wkn' },
  },
  {
    n: '04',
    sub: 'Doorlopend beheer',
    titel: 'Onderhoud & support',
    body: "Hosting, SSL, updates, beveiliging, kleine wijzigingen. Vast onderdeel van elk traject. Zo blijft je site snel, veilig en actueel zonder dat jij erover hoeft na te denken.",
    tags: ['Hosting', 'Updates', 'Support', 'Monitoring'],
    deepDeck:
      "Verplicht onderdeel van elk traject. Hosting, SSL, CMS-updates, beveiligingsmonitoring en kleine tekstwijzigingen. Reactie binnen 24 uur op werkdagen. Geen ticketstapel, geen vertraagde e-mailservice.",
    features: [
      "Beheerde hosting op Vercel",
      "SSL-certificaat",
      "CMS en plugin-updates",
      "Beveiligingsmonitoring",
      "Uptime-monitoring",
      "Kleine tekstwijzigingen inbegrepen",
      "Reactie binnen 24 uur op werkdagen",
      "Maandelijks, geen jaarcontract",
    ],
    price: { v: 'Inbegrepen', m: 'bij elk traject', d: 'doorlopend' },
  },
];

export const PROCES = [
  {
    n: '01',
    t: 'Kennismaking',
    s: '30 minuten, vrijblijvend. Geen verkooppraat. Wel concrete vragen: wat loopt vast, wat zou beter moeten, en wat levert dit op voor je bedrijf?',
    d: '30 min',
  },
  {
    n: '02',
    t: 'Voorstel',
    s: "Binnen drie werkdagen een vast bod op papier. Inclusief planning, scope en wat er niet in zit. Geen kleine lettertjes, geen 'op nacalculatie'.",
    d: '3 werkdagen',
  },
  {
    n: '03',
    t: 'Bouw',
    s: "Wekelijkse demo. Je ziet vooruitgang, geen rapportages. Wijzigingen binnen scope zijn welkom.",
    d: '3 tot 6 wkn',
  },
  {
    n: '04',
    t: 'Live',
    s: "Site live, Google Business ingericht, eventuele Ads-campagne actief. De eerste maand sta ik extra dicht op de monitoring.",
    d: 'opleverweek',
  },
  {
    n: '05',
    t: 'Doorontwikkeling',
    s: 'Vast aanspreekpunt voor wijzigingen en uitbreidingen. Geen ticketstapel, wel snelle reactie binnen 24 uur op werkdagen.',
    d: 'doorlopend',
  },
];

export const CASES = [
  {
    slug: 'ad-loodgietersbedrijf',
    naam: 'AD Loodgietersbedrijf',
    branche: 'Loodgieters',
    locatie: 'Amsterdam',
    resultaat: '+60%',
    resultaatSub: 'meer aanvragen',
    meta: 'Website + Google Ads',
    gradient: 'linear-gradient(135deg, #2d4a3e 0%, #1a3329 100%)',
    excerpt: 'Van nauwelijks vindbaar online naar structureel meer aanvragen via Google. Nieuwe site, lokale SEO en Google Ads voor spoedklussen.',
  },
  {
    slug: 'mba-installaties',
    naam: 'MBA-installaties',
    branche: 'Installatiebedrijf',
    locatie: 'Midden-Nederland',
    resultaat: 'Live',
    resultaatSub: 'professioneel online',
    meta: 'Website',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e1244 100%)',
    excerpt: 'Eerste professionele website voor een installatiebedrijf dat tot dan toe alleen via mond-tot-mond werkte.',
  },
  {
    slug: 'mkh-bouw',
    naam: 'MKH Bouw',
    branche: 'Bouw & installatie',
    locatie: 'Midden-Nederland',
    resultaat: 'Top 3',
    resultaatSub: 'Google lokaal',
    meta: 'Website',
    gradient: 'linear-gradient(135deg, #c2521b 0%, #4c1d95 100%)',
    excerpt: 'Moderne Next.js website die past bij het vakmanschap van het bedrijf. Goed vindbaar voor stucwerk en renovaties in de regio.',
  },
  {
    slug: 'clockd',
    naam: 'Clockd',
    branche: 'Maatwerk software',
    locatie: 'Midden-Nederland',
    resultaat: 'Live',
    resultaatSub: 'in dagelijks gebruik',
    meta: 'Maatwerk software',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
    excerpt: 'Productie-klaar urenregistratiesysteem dat Excel-exports en handmatig overtypen vervangt. Directe koppeling met bestaand ERP.',
  },
  {
    slug: 'itflow',
    naam: 'ITflow',
    branche: 'Maatwerk software',
    locatie: 'Midden-Nederland',
    resultaat: '3 tools',
    resultaatSub: 'vervangen door één',
    meta: 'Maatwerk software',
    gradient: 'linear-gradient(135deg, #1a0f33 0%, #7c3aed 100%)',
    excerpt: 'Intern ticketsysteem dat Zoho Desk en Clockwise verving. Modules voor tickets, klantbeheer, assets en urenregistratie.',
  },
];

// Gedetailleerde case-content voor /cases/[slug] pagina's
export type CaseDetail = {
  slug: string;
  naam: string;
  sector: string;
  locatie: string;
  liveUrl?: string;
  intro: string;
  meta: string;
  gradient: string;
  situatie: string[];
  aanpak: { titel: string; tekst: string }[];
  resultaat: string[];
  techStack?: string[];
  images?: {
    cover?: string;          // vervangt gradient op cover-afbeelding
    before?: string;         // voor voor/na sectie
    after?: string;
    screens?: string[];      // screenshot-grid (met mock-data label)
    extra?: string[];        // extra sectie-screenshots
  };
  // TODO: Ayoub — voeg echte quote toe zodra klant schriftelijk akkoord geeft voor publicatie
  quote: { tekst: string; naam: string; functie: string } | null;
};

export const CASE_DETAILS: CaseDetail[] = [
  {
    slug: 'ad-loodgietersbedrijf',
    naam: 'AD Loodgietersbedrijf',
    sector: 'Loodgieter',
    locatie: 'Amsterdam',
    liveUrl: 'https://adloodgieters.nl',
    intro: 'Nieuwe website, lokale SEO en Google Ads-beheer voor een loodgietersbedrijf in Amsterdam.',
    meta: 'Website + Google Ads',
    gradient: 'linear-gradient(135deg, #2d4a3e 0%, #1a3329 100%)',
    situatie: [
      'AD Loodgietersbedrijf is een professioneel installatiebedrijf actief in Amsterdam en omgeving. Ze werken voor bedrijven, woningen en kantoren, en zijn gespecialiseerd in renovaties, nieuwbouw en service-installaties. Klanten als Burger King, Starbucks, La Place, BAM en Homij vertrouwen op hun vakmanschap. Ze zijn 24/7 bereikbaar voor spoedklussen.',
      'Voor we begonnen was hun online aanwezigheid niet in lijn met dat vakmanschap. Een verouderde site zorgde voor onvoldoende vindbaarheid bij bedrijven en particulieren die actief zochten op "loodgieter Amsterdam" of "lekkage spoed Amsterdam". De 24/7 spoeddienst was amper online zichtbaar.',
    ],
    aanpak: [
      { titel: 'Nieuwe website', tekst: "Een snelle, mobile-first website opgezet rond de zoekwoorden die spoedklus-klanten daadwerkelijk gebruiken: 'loodgieter spoed Amsterdam', 'lekkage Amsterdam'. Telefoonnummer altijd één tap weg." },
      { titel: 'Lokale SEO', tekst: "Google Bedrijfsprofiel volledig ingericht met categorieën, foto's, openingstijden en spoedlijn. Lokale SEO-fundamenten gelegd voor de wijken waar ze actief zijn." },
      { titel: 'Google Ads', tekst: "Campagne opgezet voor spoedwerk in de avonden en weekenden, met aparte advertentiegroepen per type spoedklus. Conversie-tracking op telefoontjes en formulieren." },
    ],
    resultaat: [
      'Site live sinds 2024.',
      "Klant geeft aan meer telefoontjes te krijgen via Google.",
      "Spoedklus-pagina's ranken op relevante zoekwoorden in Amsterdam en omgeving.",
      'Doorlopende Google Ads-campagne actief en maandelijks geoptimaliseerd.',
    ],
    techStack: ['WordPress', 'Custom theme', 'Google Bedrijfsprofiel', 'Google Ads', 'Conversie-tracking'],
    images: {
      cover: '/ad-loodgietersbedrijf/new.png',
      before: '/ad-loodgietersbedrijf/old.png',
      after: '/ad-loodgietersbedrijf/new.png',
      extra: ['/ad-loodgietersbedrijf/diensten.png'],
    },
    quote: null,
  },
  {
    slug: 'mba-installaties',
    naam: 'MBA-installaties',
    sector: 'Installatiebedrijf',
    locatie: 'Midden-Nederland',
    liveUrl: 'https://mba-installaties.nl',
    intro: 'Professionele eerste website voor een installatiebedrijf dat online nauwelijks zichtbaar was.',
    meta: 'Website',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e1244 100%)',
    situatie: [
      'MBA-installaties had nog geen online aanwezigheid. Klanten en aannemers konden het bedrijf alleen vinden via mond-tot-mond, en serieuze offerteaanvragen liepen mis omdat een professionele eerste indruk online ontbrak.',
      'Ze hadden behoefte aan een eerste professionele website. Een online plek waar klanten en aannemers het bedrijf kunnen vinden, zien wat ze doen, en eenvoudig contact kunnen opnemen.',
    ],
    aanpak: [
      { titel: 'Website', tekst: "Een eenvoudige maar professionele website met heldere dienstenpagina's. Mobile-first, snel, AVG-proof. Focus op duidelijkheid over wat het bedrijf doet en hoe je ze bereikt." },
      { titel: 'Google Bedrijfsprofiel', tekst: "Google Bedrijfsprofiel ingericht zodat de klant direct vindbaar is bij lokale zoekopdrachten en reviews kan ontvangen." },
    ],
    resultaat: [
      'Site live en in gebruik.',
      'Klant heeft een professionele online aanwezigheid om potentiële klanten naartoe te verwijzen.',
      'Google Bedrijfsprofiel actief voor lokale zichtbaarheid.',
    ],
    techStack: ['WordPress', 'Aangepaste templates', 'Google Bedrijfsprofiel'],
    images: {
      cover: '/mba-installaties/home.png',
      screens: ['/mba-installaties/home.png'],
    },
    quote: null,
  },
  {
    slug: 'mkh-bouw',
    naam: 'MKH Bouw',
    sector: 'Bouw & installatie',
    locatie: 'Midden-Nederland',
    liveUrl: 'https://mkhbouw.nl',
    intro: 'Moderne site die past bij het vakmanschap van een bouw- en renovatiebedrijf.',
    meta: 'Website',
    gradient: 'linear-gradient(135deg, #c2521b 0%, #4c1d95 100%)',
    situatie: [
      'MKH Bouw had nog geen eigen online aanwezigheid. Voor we begonnen was er behoefte aan een eerste professionele site die past bij de kwaliteit van hun werk in stukwerk en bouw.',
      'De vorige online aanwezigheid gaf geen goed beeld van het vakmanschap en was nauwelijks vindbaar via Google.',
    ],
    aanpak: [
      { titel: 'Next.js website', tekst: "Moderne site gebouwd op Next.js met heldere structuur: dienstenpagina's per vakgebied, een projectportfolio en een offerteformulier. Snel, mobiel-first en technisch SEO-geoptimaliseerd." },
      { titel: 'Lokale SEO', tekst: "Geoptimaliseerd voor lokale zoekopdrachten rondom stucwerk, badkamer-renovatie en schilderwerk. Google Bedrijfsprofiel ingericht." },
    ],
    resultaat: [
      'Site live, klant ervaart professionelere online uitstraling.',
      'Beter vindbaar voor lokale zoekopdrachten in de regio.',
      'Offerteformulier actief voor directe leads.',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    images: {
      cover: '/mkh-bouw/home.png',
      screens: ['/mkh-bouw/home.png', '/mkh-bouw/contact.png'],
    },
    quote: null,
  },
  {
    slug: 'clockd',
    naam: 'Clockd',
    sector: 'Maatwerk software',
    locatie: 'Midden-Nederland',
    intro: 'Urenregistratie en factuuraanlevering voor een installatiebedrijf — vervangt handmatige Excel-export naar Syntess Atrium.',
    meta: 'Maatwerk software',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
    situatie: [
      'Een installatiebedrijf in Midden-Nederland gebruikte een combinatie van handmatige urenregistratie en Excel-exports voor de koppeling met hun ERP-systeem (Syntess Atrium). Dat leverde veel dubbel werk en fouten op: dezelfde uren werden meerdere keren ingevoerd, foutieve boekingen moesten handmatig gecorrigeerd, en de doorlooptijd van uren naar factuur was te lang.',
      'Ze zochten een systeem dat werkt op de bouwplaats (ook offline), een goedkeuringsflow heeft, en direct koppelt met Syntess Atrium zonder handmatige tussenkomst.',
    ],
    aanpak: [
      { titel: 'Webapplicatie als middleware', tekst: "Een webapplicatie gebouwd die werkt als middleware tussen Clockwise en Syntess Atrium. Multi-role goedkeuringsflow: monteur registreert, planner controleert, administratie keurt goed." },
      { titel: 'Directe database-koppeling', tekst: "Directe schrijfacties naar de Firebird-database van Syntess Atrium via Node-firebird. OAuth 2.0 integratie met de Clockwise REST API. Audit-log voor alle wijzigingen." },
      { titel: 'Mobiel-first voor de bouwplaats', tekst: "Progressive Web App die offline uren kan registreren en synct zodra er verbinding is. Werkt ook zonder stabiel internet." },
    ],
    resultaat: [
      'Productie-klaar systeem in dagelijks gebruik.',
      'Handmatige Excel-export en dubbele invoer geëlimineerd.',
      'Goedkeuringsflow loopt volledig digitaal van monteur naar administratie.',
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Supabase PostgreSQL', 'Clockwise REST API + OAuth 2.0', 'Node-firebird (Syntess Atrium)', 'Tailwind CSS', 'Vercel'],
    images: {
      cover: '/clockd/clockd-1.png',
      screens: [
        '/clockd/clockd-1.png',
        '/clockd/clockd-2.png',
        '/clockd/clockd-3.png',
        '/clockd/clockd-4.png',
      ],
    },
    quote: null,
  },
  {
    slug: 'itflow',
    naam: 'ITflow',
    sector: 'Maatwerk software',
    locatie: 'Midden-Nederland',
    intro: 'Ticketsysteem voor een IT-dienstverlener dat Zoho Desk en Clockwise verving door één geïntegreerd platform.',
    meta: 'Maatwerk software',
    gradient: 'linear-gradient(135deg, #1a0f33 0%, #7c3aed 100%)',
    situatie: [
      'Een IT-dienstverlener gebruikte Zoho Desk voor ticketing en Clockwise voor urenregistratie, met handmatige koppelingen ertussen. Dat leverde versnipperde data op, dubbel werk, en onnodig veel tijd kwijt aan administratie.',
      'Behoefte: één platform voor tickets, klantbeheer, assetregistratie, urenregistratie en kennisbank — specifiek gebouwd op de interne werkwijze.',
    ],
    aanpak: [
      { titel: 'Geïntegreerd platform', tekst: "Eén systeem gebouwd met modules voor ticketing (SLA-tracking), klantbeheer, assetregistratie, urenregistratie gekoppeld aan tickets, en kennisbank." },
      { titel: 'Koppelingen tussen modules', tekst: "Alle modules praten met elkaar: ticket koppelt aan klant en asset, uren via ticket-context, facturatie haalt gewerkte uren op. Eén bron van waarheid." },
    ],
    resultaat: [
      'Platform in dagelijks intern gebruik.',
      'Vervangt drie aparte tools door één geïntegreerd systeem.',
      'Eén bron van waarheid voor klantdata, tickets en uren.',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'NextAuth (role-based permissions)', 'E-mail notificaties', 'Vercel'],
    images: {
      cover: '/itflow/itflow-1.png',
      screens: ['/itflow/itflow-1.png', '/itflow/itflow-2.png'],
    },
    quote: null,
  },
];

// Branche-detail data voor /voor-wie/[branche] pagina's
export type BrancheDetail = {
  slug: string;
  naam: string;
  sectorLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitel: string;
  lead: string;
  overzichtTekst: string;
  pijnpunten: { titel: string; tekst: string }[];
  oplossingen: { titel: string; tekst: string }[];
  zoekwoorden: string[];
  faq: { q: string; a: string }[];
};

export const BRANCHE_DETAILS: BrancheDetail[] = [
  {
    slug: 'loodgieters',
    naam: 'Loodgieters',
    sectorLabel: 'LOODGIETER',
    metaTitle: 'Website laten maken voor loodgieters in Midden-Nederland | AKWS',
    metaDescription: 'Specialistische websites voor loodgieters in Hilversum, Baarn, Soest, Bussum en omgeving. Vindbaar voor spoedklussen, prijzen op maat.',
    h1: 'Website laten maken voor loodgieters',
    subtitel: 'Vindbaar voor spoedklussen, klaar voor de telefoon die dag en nacht rinkelt.',
    lead: "Een loodgieter heeft een ander type website nodig dan een tandarts of architect. Bij jou telt urgentie: als de klant 's avonds water op de vloer ziet, moet hij jou binnen tien seconden vinden. Niet de drie pagina's daarna. Niet de site die niet laadt op mobiel. Niet de adwords-campagne die op kantooruren staat.",
    overzichtTekst: "Sanitair, leidingwerk, lekkages, riool. Vooral spoedklussen waar tijd telt. Je website moet 's nachts gevonden worden, je moet bovenaan staan voor 'loodgieter [stad]', en je telefoon moet rinkelen.",
    pijnpunten: [
      { titel: "Mijn site staat niet bovenaan voor spoedklussen", tekst: "De zoekterm 'loodgieter spoed [stad]' is waar de bellers naartoe gaan. Als je daar niet bovenaan staat, gaan ze naar de concurrent die er wel in heeft geïnvesteerd. Urgentie is je markt — maar alleen als ze je vinden." },
      { titel: "Klanten klikken weg voor de site geladen is", tekst: "Trage sites kosten loodgieters letterlijk klanten. Een bezoeker die 's avonds in paniek zoekt, wacht niet twee seconden op je afbeeldingen. Mijn sites laden in onder één seconde op mobiel." },
      { titel: "Google Ads draaien op de verkeerde momenten", tekst: "Je betaalt voor clicks overdag terwijl je spoedwerk 's avonds en in het weekend binnenkomt. Met slimme dagdeel-instellingen besteed je je budget op het moment dat het loont." },
      { titel: "Geen aanvragen voor onderhoud of vaste klanten", tekst: "Spoedklussen zijn goed, maar onderhoudsabonnementen zijn stabiele omzet. Als je site alleen spoedwerk uitstraalt, mis je die kans. Met de juiste pagina's trek je ook planmatige klanten aan." },
      { titel: "Concurrentie van serviceplatforms neemt mijn leads over", tekst: "Platforms als Werkspot pakken leads af en rekenen provisie. Een eigen vindbare site en Google Ads geeft je directe klanten, zonder platform-afhankelijkheid." },
    ],
    oplossingen: [
      { titel: "Mobiel-first website die snel laadt", tekst: "Een loodgieter-bezoeker is 80% mobiel. Mijn sites laden in onder één seconde, ook op een trage 4G-verbinding. Telefoonnummer altijd één tap weg, contactformulier kort en duidelijk." },
      { titel: "Lokale SEO voor jouw werkgebied", tekst: "Per stad in je werkgebied een eigen landingspagina. Google Bedrijfsprofiel volledig ingericht, openingstijden inclusief spoedlijn, foto's van werk. Je verschijnt in de lokale 3-pack boven aan Google." },
      { titel: "Google Ads die werken op de juiste momenten", tekst: "Spoedklus-campagnes draaien 's avonds, in het weekend, op feestdagen. Onderhoudscampagnes overdag op weekdagen. Gericht op de plaatsen waar je rijdt. Geen verspild budget op mensen ver buiten je werkgebied." },
    ],
    zoekwoorden: [
      "loodgieter spoed [stad]", "lekkage spoed", "loodgieter 24 uur", "riool ontstoppen [stad]",
      "loodgieter in de buurt", "afvoer verstopt spoed", "boiler lekt", "kraan vervangen",
    ],
    faq: [
      { q: "Hoe lang duurt het bouwen van een loodgieter-website?", a: "Drie tot zes weken afhankelijk van het pakket. Een Starter-pakket staat live binnen 3 weken vanaf akkoord op het voorstel. Een Pro-pakket met Google Ads duurt 4 tot 6 weken omdat de campagne tijd nodig heeft om te testen." },
      { q: "Wat kost een Google Ads-campagne voor mijn loodgietersbedrijf?", a: "Het beheer regel ik als onderdeel van je traject; de prijs bespreken we op maat. Het advertentiebudget dat je aan Google betaalt staat daar los van en bepaal je zelf. Realistisch begin je met €300 tot €600 per maand voor lokaal spoedwerk." },
      { q: "Mijn telefoon rinkelt al genoeg, heb ik dit wel nodig?", a: "Misschien niet. Een goede website is een investering in groei, niet een noodgreep. Als je geen ruimte hebt voor meer klussen, zijn er andere prioriteiten. Ik geef je dat eerlijk advies in het kennismakingsgesprek." },
      { q: "Kan ik mijn huidige website houden en alleen Google Ads laten doen?", a: "Soms wel, soms niet. Een Ads-campagne stuurt mensen naar je site — als die slecht converteert verbrand je geld. Ik check eerst je huidige site. Als die qua snelheid en mobiele weergave in orde is, kan ik los Google Ads doen." },
      { q: "Doe je ook 24/7 monitoring van mijn website?", a: "Ja, dat zit standaard in het onderhoudscontract. Als de site eruit ligt, krijg ik een melding en los het op. Je hoeft niet eerst een klant te krijgen die meldt dat hij offline staat." },
    ],
  },
  {
    slug: 'cv-monteurs',
    naam: 'CV & HVAC',
    sectorLabel: 'CV & HVAC',
    metaTitle: 'Website voor CV-monteurs en HVAC-bedrijven | AKWS',
    metaDescription: 'Websites voor CV-monteurs in Midden-Nederland. Vindbaar bij ketels, warmtepompen en storingen. Lokale SEO en Google Ads, prijzen op maat.',
    h1: 'Website laten maken voor CV-monteurs',
    subtitel: 'Klaar voor de winterpiek, vindbaar voor ketels, warmtepompen en storingen.',
    lead: "Een CV-monteur heeft seizoenspieken: de eerste koude week van het jaar is een tsunami aan ketelstoringen. Op andere momenten gaat het om onderhoud, ketelvervanging en steeds vaker warmtepompen. Je website moet beide kunnen: spoed én planmatig werk. En de zoekwoorden voor allebei zijn anders.",
    overzichtTekst: "Ketels, warmtepompen, klimaatsystemen. Seizoensgevoelig, met pieken in herfst en winter. Verduurzaming brengt nieuwe doelgroepen: warmtepompen, hybride systemen, subsidies.",
    pijnpunten: [
      { titel: "Ik mis storingen in de winter omdat klanten me niet vinden", tekst: "De eerste koude week van het jaar is de drukste week van een CV-monteur. Als je dan niet bovenaan staat, gaan die aanvragen naar de concurrent. Je hebt de capaciteit — maar je wordt niet gevonden." },
      { titel: "Mijn site toont alleen storingen, niet warmtepompen", tekst: "De helft van je werk is ketelvervanging en warmtepompen, maar als je site dat niet laat zien, zoeken klanten hiervoor iemand anders. Gemiste omzet op de hoogwaardige klussen." },
      { titel: "Google Ads draait het hele jaar tegen dezelfde kosten", tekst: "Je omzet is seizoensgevoelig maar je advertentiebudget niet. Een campagne die zich aanpast aan het seizoen levert meer op met hetzelfde totaalbudget." },
      { titel: "Warmtepomp-klanten vinden me niet via subsidiezoekwoorden", tekst: "Klanten zoeken nu op 'warmtepomp subsidie' en 'hybride ketel'. Die termen staan niet op mijn site, dus kom ik niet bovenaan. Terwijl dit juist de hoogwaardige klussen zijn." },
    ],
    oplossingen: [
      { titel: "Aparte secties voor spoed en planmatig werk", tekst: "Storingen, onderhoud, ketelvervanging, warmtepompen — elk een eigen pagina met eigen zoekwoorden. Klanten vinden snel wat ze zoeken, Google begrijpt duidelijk wat je aanbiedt." },
      { titel: "Seizoensgerichte Google Ads-campagnes", tekst: "Storingscampagnes maximaal aan in november tot maart. Onderhoud en warmtepompen actiever in voorjaar en zomer. Je advertentiebudget volgt de markt, niet de kalender." },
      { titel: "Subsidie- en verduurzamingscontent die ranked", tekst: "Pagina's over ISDE-subsidie, hybride ketels en warmtepomp-installatie trekken klanten die ver voor een offerte al oriënteren. Je bouwt autoriteit op voordat ze aan een offerte denken." },
    ],
    zoekwoorden: [
      "CV ketel vervangen [stad]", "warmtepomp installateur", "CV storing spoed",
      "hybride warmtepomp", "boiler vervanging", "vloerverwarming aanleggen",
      "ISDE subsidie warmtepomp", "CV onderhoud abonnement",
    ],
    faq: [
      { q: "Welke Ads zou ik draaien in de zomer?", a: "Onderhoudsabonnementen, warmtepompen en ketelvervanging. Storingen lopen door maar pieken in de winter. In juni-augustus verhoog ik de onderhoudscampagnes en zet ik spoedklus-campagnes op een lager budget." },
      { q: "Is het de moeite waard om in warmtepompen te investeren via mijn website?", a: "Voor de meeste CV-monteurs in 2026: ja. De markt verschuift snel. Een goede warmtepomp-pagina trekt klanten die specifiek hierop zoeken, en die zijn vaak hoogwaardiger leads dan een eenvoudige storing." },
      { q: "Kunnen jullie koppelen met mijn planningssysteem?", a: "Sommige tools (Snelstart, Exact, AFAS) hebben open API's. We checken het bij intake. Als het kan, zorg ik dat een aanvraag via je site direct in je planning terechtkomt." },
      { q: "Hoe zit het met de bereikbaarheid van mijn spoedlijn?", a: "Op de site maak ik twee routes: regulier contact (formulier, mail) en spoed (telefoon). De spoedlijn staat altijd prominent. Of die 24/7 is, geef jij aan." },
    ],
  },
  {
    slug: 'elektriciens',
    naam: 'Elektriciens',
    sectorLabel: 'ELEKTRICIEN',
    metaTitle: 'Website laten maken voor elektriciens | AKWS',
    metaDescription: 'Websites voor elektriciens in Midden-Nederland. Vindbaar bij groepenkasten, laadpalen en zonnepanelen. Lokale SEO en Google Ads, prijzen op maat.',
    h1: 'Website laten maken voor elektriciens',
    subtitel: 'Vindbaar voor groepenkasten, laadpalen, zonnepanelen en bedrijfsinstallaties.',
    lead: "De markt voor elektriciens is in vijf jaar onherkenbaar veranderd. Naast traditioneel werk kwamen zonnepanelen, laadpalen, accu-opslag en slimme installaties erbij. Een elektricien anno 2026 heeft de breedste markt van de installatiebranche. Je website moet die breedte laten zien, of je verliest werk aan specialisten die zich beter positioneren.",
    overzichtTekst: "Installatie, inspectie, groepenkasten, zonnepanelen, laadpalen. Brede markt met snelle groei door verduurzaming en elektrificatie.",
    pijnpunten: [
      { titel: "Klanten weten niet dat ik ook laadpalen of zonnepanelen installeer", tekst: "Als je site alleen 'elektricien' zegt en niet wat je daadwerkelijk doet, mis je aanvragen voor je meest waardevolle klussen. Laadpalen en zonnepanelen zijn groeimarkt, maar alleen als klanten weten dat jij dat doet." },
      { titel: "Ik krijg voornamelijk particuliere klantjes terwijl ik zakelijk werk wil doen", tekst: "Particulier en zakelijk werk vragen een andere website. Aannemers zoeken op andere termen, beoordelen anders, en verwachten andere informatie. Een site die beide bedient, trekt beide aan." },
      { titel: "Grote zonnepaneel-installateurs trekken alle online vraag naar zich toe", tekst: "Op landelijke zoekwoorden ben je kansloos tegenover grote spelers. Op lokale zoekwoorden ('elektricien Hilversum laadpaal') win je — mits je website er klaar voor is." },
      { titel: "Laadpaal-aanvragen worden vermengd met kleine klusjes", tekst: "Een laadpaal-klus levert €1.500+ op. Een stopcontact €80. Als je formulier ze niet onderscheidt, kost het je onnodig tijd. Een goed ingedeelde site filtert vooraf." },
    ],
    oplossingen: [
      { titel: "Diensten splitsen in herkenbare specialisaties", tekst: "Niet één pagina 'elektricien' maar aparte pagina's voor groepenkasten, laadpalen, zonnepanelen, accu-installatie, bedrijfsinstallaties. Elk met eigen zoekwoorden, eigen klantgroep, eigen call-to-action." },
      { titel: "Particulier en zakelijk apart aanvliegen", tekst: "Als je beide doet: laat duidelijk zien dat je zakelijk werk aankan. Cases met bedrijfspanden, foto's van grotere installaties. Zakelijke klanten kopen anders dan particulieren." },
      { titel: "Lokale specialisatie versus grote spelers", tekst: "Je wint de offerte aan de keukentafel op persoonlijk contact en lokale kennis. 'Elektricien Hilversum' of 'laadpaal installateur Baarn': hier win je van anonieme grote partijen." },
    ],
    zoekwoorden: [
      "elektricien [stad]", "groepenkast vervangen", "laadpaal thuis installeren",
      "laadpaal bedrijf", "zonnepanelen installateur [stad]", "thuisaccu installatie",
      "bedrijfsinstallatie elektra", "domotica installateur",
    ],
    faq: [
      { q: "Moet ik me specialiseren in laadpalen of zonnepanelen?", a: "Als je beide doet en goed bent: laat beide zien. Wel per dienst een eigen pagina. Specialiseren op je site is anders dan je hele bedrijf afkappen. Een klant zoekt op één term — die ene pagina moet hem overtuigen." },
      { q: "Kan ik leads filteren op grootte?", a: "In het formulier voeg ik een veld toe (Particulier / MKB / Grootzakelijk). Zo zie je vooraf welk type aanvraag binnenkomt. Eventueel aparte formulieren voor laadpaal-thuis versus laadpaal-bedrijf." },
      { q: "Werkt SEO nog voor zonnepanelen, of moet ik vooral Ads draaien?", a: "Beide. Voor algemeen 'zonnepanelen [stad]' is SEO competitief. Voor 'lokale zonnepanelen installateur in Hilversum' is SEO doenlijk en Ads ondersteunend. Hangt af van je werkgebied en concurrenten." },
      { q: "Hoeveel kost een laadpaal-campagne?", a: "Voor lokale laadpaal-campagnes praat je over €400 tot €800 advertentiebudget per maand, plus beheer (prijs op maat). De CPC's zijn hoger dan voor algemene termen, maar de waarde per lead is ook hoger." },
    ],
  },
  {
    slug: 'installatiebedrijven',
    naam: 'Installatiebedrijven',
    sectorLabel: 'INSTALLATIEBEDRIJF',
    metaTitle: 'Website voor installatiebedrijven in Midden-Nederland | AKWS',
    metaDescription: 'Websites voor installatiebedrijven in Midden-Nederland. W- en E-installatie, totaalinstallateurs, lokale SEO en maatwerk software. Prijzen op maat.',
    h1: 'Website laten maken voor installatiebedrijven',
    subtitel: 'Voor totaalinstallateurs die W- en E-installatie combineren, met focus op grotere projecten.',
    lead: "Een installatiebedrijf is iets anders dan een loodgieter of elektricien. Je doet vaak meerdere disciplines, je hebt grotere projecten met langere doorlooptijden, en je klanten zijn vaak anderen: aannemers, projectontwikkelaars, woningcorporaties, VVE's. Dat vraagt om een andere site dan een spoedklus-loodgieter nodig heeft.",
    overzichtTekst: "Totaalinstallateurs (W- en E-installatie). Grotere projecten, langere doorlooptijden, andere klanten (aannemers, woningbouw, utiliteit) dan een loodgieter of CV-monteur.",
    pijnpunten: [
      { titel: "Mijn site wordt door particulieren bezocht, ik wil aannemers", tekst: "Aannemers en projectontwikkelaars beoordelen je site anders dan particulieren. Ze zoeken op andere termen, kijken naar referenties en certificeringen, en willen weten of je vergelijkbare projecten hebt gedaan." },
      { titel: "Mijn brede dienstverlening is moeilijk te presenteren", tekst: "W-installatie, E-installatie, service, onderhoud — op een slechte site staat dat als een opsomming zonder structuur. Een goed ingedeelde site legt de logica achter jouw complete aanbod uit." },
      { titel: "Ik wil onderhoudscontracten met VVE's maar mijn site is daar niet op ingericht", tekst: "Onderhoudscontracten zijn stabiele recurring revenue. Maar als je site daar geen aparte pagina voor heeft, mis je die aanvragen. VVE's zoeken specifiek op onderhoud, niet op installatie." },
      { titel: "Administratie en planning kost te veel tijd bij meerdere monteurs", tekst: "Bij een totaalinstallateur met meerdere disciplines en monteurs is de administratie-last groot. Planning, urenregistratie, werkbonnen: maatwerk software kan dat structureel verlichten." },
    ],
    oplossingen: [
      { titel: "Aparte secties voor B2C en B2B", tekst: "Particulieren en aannemers worden anders aangesproken. Aparte landingspagina's per doelgroep met passende cases, contactformulieren en toon. Aannemers willen referenties en certificeringen. Particulieren willen zekerheid en heldere prijzen." },
      { titel: "Sterke project-portfolio met cijfers", tekst: "Voor B2B-werk is je referentielijst je belangrijkste verkoopinstrument. Per project: opdrachtgever, type installatie, schaal, doorlooptijd. Een aannemer kiest jou omdat hij vergelijkbaar werk terugvindt." },
      { titel: "Onderhoudscontracten als terugkerende dienst", tekst: "Een aparte pagina voor onderhoudscontracten met heldere abonnementsvormen voor particulier, VVE en zakelijk. Dit is recurring revenue die je bedrijf voorspelbaar maakt." },
    ],
    zoekwoorden: [
      "installatiebedrijf [stad]", "W-installatie [stad]", "E-installatie [stad]",
      "totaalinstallateur nieuwbouw", "installatiebedrijf VVE", "onderhoudscontract installatie",
      "renovatie installatie [regio]", "BIM installateur",
    ],
    faq: [
      { q: "Werkt deze aanpak ook als ik vooral B2B werk?", a: "Ja, maar de site ziet er anders uit. Minder spoedformulieren, meer projectreferenties. Andere zoekwoorden in Ads. We stemmen het af op je daadwerkelijke klantenmix in de intake." },
      { q: "Kunnen jullie een offerte-systeem op de site bouwen?", a: "Voor B2C ja, mits de scope eenvoudig is. Voor B2B-werk is een offerte vaak te complex om online te genereren — een uitgebreid aanvraagformulier werkt beter." },
      { q: "Kunt u een klantportaal bouwen voor mijn vaste klanten?", a: "Ja, dat is maatwerk software. Een klantportaal waar klanten hun installatiehistorie, onderhoudsplanning, facturen en service-aanvragen zien. De prijs bepalen we op maat na een korte procesanalyse van wat je nodig hebt." },
      { q: "Hoe gaan we om met meerdere vestigingen?", a: "Per vestiging een eigen landingspagina met lokale SEO. Eén overkoepelende merksite, vestiging-specifieke pagina's voor lokale vindbaarheid." },
    ],
  },
  {
    slug: 'dakdekkers',
    naam: 'Dakdekkers',
    sectorLabel: 'DAKDEKKER',
    metaTitle: 'Website laten maken voor dakdekkers in Midden-Nederland | AKWS',
    metaDescription: 'Websites voor dakdekkers in Midden-Nederland. Vindbaar bij daklekkage, platdak renovatie en spoedklussen. Lokale SEO en Google Ads, prijzen op maat.',
    h1: 'Website laten maken voor dakdekkers',
    subtitel: 'Vindbaar voor daklekkages, renovaties en seizoenspieken.',
    lead: "Een dakdekker heeft een uitgesproken seizoenspatroon: storm in oktober levert in november aanvragen op, eerste vorst in december brengt lekkages, en in de zomer komt het renovatiewerk. Je site moet zowel paniek-bellers als planmatige renovaties bedienen, met heel andere routes door de website.",
    overzichtTekst: "Plat en schuin dak, dakgoten, dakisolatie, dakreparatie. Seizoensgevoelig met pieken in herfst en winter na storm of langdurige regen.",
    pijnpunten: [
      { titel: "Na een storm sta ik niet bovenaan voor daklekkage spoed", tekst: "Zoekpieken na storm zijn kort maar intens. Als je Google Ads campagne dan niet loopt, of je site te traag is, mis je die aanvragen. De concurrent pakt ze, jij niet." },
      { titel: "Mijn renovatiewerk in de zomer komt grotendeels via mond-tot-mond", tekst: "Mond-tot-mond is goed, maar onvoorspelbaar. Met een sterke site en gerichte campagnes voor platdak-renovaties in het voorjaar trek je planmatige klanten die goed betalen." },
      { titel: "Particulieren weten niet dat ik ook bedrijfsdaken doe", tekst: "Als je site dat niet duidelijk zegt, zoeken bedrijven en VVE's iemand anders. Aparte routes voor particulier en zakelijk werk zorgen dat beide doelgroepen jou vinden." },
      { titel: "Mijn portfolio is verouderd of ontbreekt", tekst: "Klanten die €8.000 aan een dakrenovatie uitgeven, willen zien wat je hebt gedaan. Geen portfolio of verouderde foto's is een direct verlies aan leads." },
    ],
    oplossingen: [
      { titel: "Snelle, urgente landingspagina voor spoedwerk", tekst: "Een pagina die razendsnel laadt, het telefoonnummer prominent toont, en duidelijk maakt dat je dezelfde dag uitrukt. Eén pagina, één doel: bellen." },
      { titel: "Renovatiepagina met portfolio en cases", tekst: "Renovaties zijn planmatig werk. Hier past sterke visuele content: foto's voor/na, materiaaluitleg, garantievoorwaarden. Compleet ander soort pagina dan de spoedpagina." },
      { titel: "Apart kanaal voor verzekeraars en VVE's", tekst: "Aparte formulieren met velden voor verzekeringsmaatschappij, schadenummer, type pand. Voor VVE's: onderhoudscontract-pagina met meerjarenoptie." },
    ],
    zoekwoorden: [
      "dakdekker [stad]", "daklekkage spoed", "dak renoveren [stad]", "platdak vervangen",
      "dakgoot reinigen", "dakdekker verzekering", "dakisolatie [stad]", "schuin dak vervangen",
    ],
    faq: [
      { q: "Hoe ga ik om met de seizoensgevoeligheid in mijn Google Ads?", a: "Spoedklus-campagnes op hoger budget in herfst en winter. Renovatie-campagnes hoger in voorjaar en zomer. De campagne past zich aan de markt aan. Ik regel het maandelijks." },
      { q: "Werkt een prijsindicatie op mijn site of schrikt dat klanten af?", a: "Voor renovatiewerk werkt een prijsindicatie ('Platdak vervangen vanaf €X per m²') positief: het filtert prijs-shoppers eruit en trekt serieuze klanten aan. Voor spoedwerk werkt het niet." },
      { q: "Kan ik schade-aanvragen via verzekeraars beter inkanaliseren?", a: "Ja, met een specifiek formulier voor schadegevallen. Als je site op de standaard-werkwijze van grote verzekeraars is ingericht, word je vaker doorverwezen door schade-experts." },
      { q: "Wat doe je met cases waarvan ik geen foto's heb?", a: "Voor renovaties zijn voor/na-foto's cruciaal. Vanaf nu maak je ze bij elk project (telefoon is goed genoeg). Voor oudere projecten: tekstmatige casebeschrijving of weglaten. Geen stockfoto's." },
    ],
  },
  {
    slug: 'aannemers',
    naam: 'Aannemers & bouwbedrijven',
    sectorLabel: 'AANNEMER',
    metaTitle: 'Website laten maken voor aannemers en bouwbedrijven | AKWS',
    metaDescription: 'Websites voor aannemers en bouwbedrijven in Midden-Nederland. Sterk portfolio, vindbaar voor verbouwingen en nieuwbouw. Lokale SEO en Google Ads, prijzen op maat.',
    h1: 'Website laten maken voor aannemers',
    subtitel: 'Een portfolio-site die vertrouwen wekt en serieuze verbouw- en bouwprojecten binnenhaalt.',
    lead: "Een aannemer verkoopt geen spoedklus maar een groot project waar veel geld en vertrouwen in zit. Klanten oriënteren zich weken vooruit, vergelijken meerdere partijen en kijken vooral naar één ding: heb je eerder iets soortgelijks gebouwd? Je website is je showroom. Zonder een sterk, actueel portfolio verlies je het van de aannemer die zijn werk wél goed laat zien.",
    overzichtTekst: "Verbouwingen, aan- en opbouwen, renovaties, nieuwbouw. Grotere projecten met lange oriëntatie, waar referenties en portfolio de doorslag geven.",
    pijnpunten: [
      { titel: "Mijn portfolio staat niet online of is verouderd", tekst: "Klanten die tonnen uitgeven aan een verbouwing willen zien wat je kunt. Geen recente projecten op je site is de snelste manier om een offerteaanvraag te verliezen aan een concurrent die wél laat zien wat hij bouwt." },
      { titel: "Ik krijg kleine klusjes terwijl ik grote projecten wil", tekst: "Als je site niet duidelijk maakt dat je complete verbouwingen en bouwprojecten doet, trek je vooral kleine reparaties aan. De juiste content en cases trekken het type project dat je écht wilt." },
      { titel: "Ik ben afhankelijk van mond-tot-mond en dat droogt soms op", tekst: "Mond-tot-mond is waardevol maar onvoorspelbaar. Een vindbare site met lokale SEO zorgt voor een stabiele stroom aanvragen, ook als het netwerk even stil is." },
      { titel: "Opdrachtgevers vinden me niet terug na een aanbeveling", tekst: "Word je aanbevolen, dan checkt de klant je online. Staat er niks of iets ouds, dan zakt het vertrouwen. Een professionele site bevestigt de aanbeveling in plaats van 'm te ondermijnen." },
    ],
    oplossingen: [
      { titel: "Portfolio-gedreven website met sterke projectcases", tekst: "Je werk staat centraal: voor/na-foto's, projectomschrijvingen, doorlooptijd en type opdracht. Google en klanten zien in één oogopslag waar je goed in bent." },
      { titel: "Lokale SEO voor verbouw- en bouwtermen", tekst: "Vindbaar op 'aannemer [stad]', 'verbouwing [stad]' en 'aanbouw laten bouwen'. Per kernplaats in je werkgebied een eigen landingspagina die lokaal rankt." },
      { titel: "Offerteflow die serieuze projecten filtert", tekst: "Een aanvraagformulier met velden voor type project, budgetindicatie en planning. Je ziet vooraf of een lead bij je past, en bespaart tijd op vrijblijvende prijsvragers." },
    ],
    zoekwoorden: [
      "aannemer [stad]", "verbouwing laten doen [stad]", "aanbouw laten bouwen", "dakkapel plaatsen [stad]",
      "bouwbedrijf [stad]", "renovatie aannemer", "uitbouw laten maken", "verbouwing offerte",
    ],
    faq: [
      { q: "Ik heb weinig goede projectfoto's, wat nu?", a: "Vanaf nu maak je bij elk project foto's met je telefoon — dat is goed genoeg. Voor bestaand werk gebruiken we wat er is en vullen aan met heldere projectbeschrijvingen. Geen stockfoto's; die herkent een klant meteen." },
      { q: "Werken jullie ook voor onderaannemers en zakelijke opdrachtgevers?", a: "Ja. Voor zakelijke opdrachtgevers richten we de site anders in: referenties, certificeringen en type projecten die aansluiten bij aannemers, ontwikkelaars en VVE's." },
      { q: "Hoe snel sta ik bovenaan voor 'aannemer [mijn stad]'?", a: "Lokale SEO is een kwestie van maanden, geen dagen. Met een goede basis en een ingericht Google Bedrijfsprofiel zie je meestal binnen enkele maanden beweging. Voor snellere resultaten combineren we het met Google Ads." },
      { q: "Kan een aanvraag direct in mijn administratie of planning komen?", a: "Als je pakket (bijvoorbeeld Snelstart of Exact) een koppeling toelaat, kan dat. We bekijken het bij de intake en zorgen dat een aanvraag zo min mogelijk overtypwerk oplevert." },
    ],
  },
  {
    slug: 'hoveniers',
    naam: 'Hoveniers & bestrating',
    sectorLabel: 'HOVENIER',
    metaTitle: 'Website laten maken voor hoveniers en tuinbedrijven | AKWS',
    metaDescription: 'Websites voor hoveniers en tuinbedrijven in Midden-Nederland. Visueel portfolio, vindbaar voor tuinaanleg en onderhoud. Lokale SEO en Google Ads, prijzen op maat.',
    h1: 'Website laten maken voor hoveniers',
    subtitel: 'Een visuele site die je mooiste tuinen laat zien en het seizoen vóór is.',
    lead: "Voor een hovenier verkoopt beeld. Een klant kiest de tuinman van wie het werk er het mooist uitziet — dus je website is in de eerste plaats een portfolio. Daarbij ben je seizoensgevoelig: in het voorjaar explodeert de vraag naar tuinaanleg en onderhoud. Wie dan bovenaan Google staat met sterke foto's, vult de agenda voor het hele jaar.",
    overzichtTekst: "Tuinaanleg, tuinonderhoud, bestrating, beschoeiing, groenvoorziening. Sterk visueel en seizoensgebonden, met een piek in het voorjaar.",
    pijnpunten: [
      { titel: "Mijn mooiste tuinen zien mensen alleen op mijn telefoon", tekst: "Je hebt prachtig werk gemaakt, maar niemand ziet het. Zonder een visueel portfolio online mis je de klant die kiest op basis van beeld — en dat is bij tuinen bijna iedereen." },
      { titel: "In het voorjaar zit ik vol, maar dan is het te laat om te sturen", tekst: "De voorjaarspiek bepaalt je jaar. Als je pas in maart aan vindbaarheid denkt, ben je te laat. Een site die het najaar ervoor al goed staat, vangt de vroege boekers." },
      { titel: "Ik krijg vooral kleine onderhoudsklusjes, geen complete aanleg", tekst: "Complete tuinaanleg is je meest waardevolle werk. Als je site dat niet uitstraalt met projecten en ontwerpen, trek je vooral heggen knippen aan in plaats van complete projecten." },
      { titel: "Ik concurreer met klusjesmannen die alles goedkoper doen", tekst: "Op prijs win je nooit van een ZZP'er met een bosmaaier. Op vakmanschap en zichtbaar resultaat wél. Een sterke site verschuift het gesprek van prijs naar kwaliteit." },
    ],
    oplossingen: [
      { titel: "Beeld-gedreven portfolio-website", tekst: "Grote, snelle foto's van je mooiste projecten, ingedeeld per type: tuinaanleg, bestrating, onderhoud. Je werk verkoopt zichzelf, de site zorgt dat mensen het zien." },
      { titel: "Seizoensgerichte lokale SEO en Google Ads", tekst: "Vindbaar op 'hovenier [stad]' en 'tuin laten aanleggen'. Campagnes die opschalen richting het voorjaar zodat je de piek pakt en de agenda vult voor het seizoen begint." },
      { titel: "Offerteflow voor projecten, niet losse klusjes", tekst: "Een aanvraagformulier dat vraagt naar type werk, tuingrootte en wensen. Zo filter je vooraf de complete tuinprojecten van de losse knipbeurten." },
    ],
    zoekwoorden: [
      "hovenier [stad]", "tuin laten aanleggen [stad]", "bestrating laten leggen", "tuinonderhoud abonnement",
      "hovenier in de buurt", "sierbestrating [stad]", "tuinaanleg offerte", "tuinontwerp hovenier",
    ],
    faq: [
      { q: "Hoe belangrijk zijn foto's echt voor een hoveniersite?", a: "Cruciaal. Tuinwerk wordt bijna volledig op beeld verkocht. We zorgen dat je foto's groot, snel en goed geordend op de site staan. Voortaan maak je bij elk project een paar foto's — meer heb je niet nodig." },
      { q: "Wanneer moet ik beginnen om de voorjaarspiek te pakken?", a: "Het najaar ervoor. SEO heeft maanden nodig om te rijpen, en Google Ads bouw je het beste rustig op. Wie in september-oktober start, staat in maart sterk." },
      { q: "Kan ik ook onderhoudsabonnementen via de site verkopen?", a: "Ja. Onderhoudsabonnementen geven je voorspelbare omzet naast de projecten. We maken er een aparte pagina en aanvraagroute voor zodat klanten er makkelijk op intekenen." },
      { q: "Ik doe zowel tuinen als bestrating, hoe presenteer ik dat?", a: "Elk als eigen dienst met eigen pagina en zoekwoorden. Zo vindt de klant die op 'bestrating' zoekt de juiste pagina, en de klant die een complete tuin wil de zijne." },
    ],
  },
  {
    slug: 'schilders',
    naam: 'Schilders & afwerking',
    sectorLabel: 'SCHILDER',
    metaTitle: 'Website laten maken voor schildersbedrijven | AKWS',
    metaDescription: 'Websites voor schilders en schildersbedrijven in Midden-Nederland. Vindbaar voor binnen- en buitenschilderwerk, met sterke reviews. Lokale SEO en Google Ads, prijzen op maat.',
    h1: 'Website laten maken voor schilders',
    subtitel: 'Vindbaar voor binnen- en buitenschilderwerk, met reviews die de klant over de streep trekken.',
    lead: "Schilderwerk is een vertrouwenskwestie: de klant laat iemand wekenlang in en om zijn huis. Reviews en netjes werk wegen zwaarder dan de laagste prijs. Daarnaast ben je seizoensgevoelig — buitenwerk in het warme seizoen, binnenwerk in de winter. Een site die beide bedient en je goede beoordelingen laat zien, houdt je agenda het hele jaar vol.",
    overzichtTekst: "Binnen- en buitenschilderwerk, behang, spuitwerk, houtrotherstel. Vertrouwens- en reviewgedreven, met buitenwerk in het warme seizoen en binnenwerk in de winter.",
    pijnpunten: [
      { titel: "Mijn goede reviews staan verspreid en niemand ziet ze", tekst: "Tevreden klanten zijn je beste verkopers, maar als hun beoordelingen nergens gebundeld staan, doen ze niks voor je. Reviews prominent op je site verlagen de drempel om jou te kiezen." },
      { titel: "In de winter valt het buitenwerk stil en wordt het rustig", tekst: "Zonder plan voor binnenwerk staat de winter voor veel schilders op een laag pitje. Met de juiste pagina's en campagnes voor binnenschilderwerk en behang vul je de rustige maanden." },
      { titel: "Ik krijg vooral prijsvragers die overal offertes opvragen", tekst: "Als je alleen op prijs concurreert, trek je prijs-shoppers aan. Een site die vakmanschap, netheid en garantie uitstraalt trekt klanten die voor kwaliteit betalen." },
      { titel: "Grote schildersketens en platforms pakken de online klanten", tekst: "Op landelijke termen verlies je van grote spelers. Lokaal — 'schilder [stad]' — win je met persoonlijk contact en zichtbaar lokaal werk, mits je site er klaar voor is." },
    ],
    oplossingen: [
      { titel: "Reviews en netjes werk centraal op de site", tekst: "Beoordelingen prominent in beeld, plus foto's van afgerond werk. Vertrouwen is bij schilderwerk het belangrijkste verkoopargument — we zetten het vooraan." },
      { titel: "Aparte routes voor binnen- en buitenwerk", tekst: "Eigen pagina's voor buitenschilderwerk, binnenschilderwerk, behang en houtrotherstel. Elk met eigen zoekwoorden zodat je het hele jaar door op iets vindbaar bent." },
      { titel: "Seizoensgerichte lokale SEO en Google Ads", tekst: "Buitenwerk-campagnes in het voor- en najaar, binnenwerk-campagnes in de winter. Je advertentiebudget volgt de vraag in plaats van de kalender." },
    ],
    zoekwoorden: [
      "schilder [stad]", "buitenschilderwerk [stad]", "binnen schilderen laten doen", "schildersbedrijf in de buurt",
      "behanger [stad]", "houtrot herstellen", "kozijnen schilderen", "schilder offerte [stad]",
    ],
    faq: [
      { q: "Hoe krijg ik meer reviews om op mijn site te zetten?", a: "We richten een simpele review-vraag in na oplevering (Google en op je site). Vraag je er actief naar, dan groeit het snel. Ik help je die routine op te zetten." },
      { q: "Werkt een website als ik het al druk heb in het seizoen?", a: "Juist dan bouw je aan de rustige maanden. Een site die binnenwerk in de winter aantrekt, egaliseert je jaar. En met reviews win je vaker de klus zonder te concurreren op prijs." },
      { q: "Kan ik binnen- en buitenwerk apart adverteren?", a: "Ja. We maken aparte campagnes en pagina's, en schakelen per seizoen. Zo besteed je budget aan het werk dat op dat moment binnenkomt." },
      { q: "Ik werk vooral voor vaste klanten en aannemers, heb ik dit nodig?", a: "Een site bevestigt je professionaliteit richting aannemers én vangt nieuwe particuliere klanten op als het vaste werk terugloopt. Het is spreiding van risico." },
    ],
  },
];


// TODO: Ayoub — voeg hier echte testimonials toe zodra klanten schriftelijk akkoord geven voor publicatie.
// Formaat: { q: string; n: string; f: string; av: string }
export const REVIEWS: { q: string; n: string; f: string; av: string }[] = [
  {
    q: 'Ayoub heeft een prachtige website gebouwd voor ons loodgietersbedrijf. Sinds de lancering krijgen we aanzienlijk meer online aanvragen. Professioneel, snel en altijd bereikbaar.',
    n: 'AD Loodgietersbedrijf',
    f: 'Amsterdam',
    av: 'AD',
  },
  {
    q: 'Top vakman die precies begrijpt wat je nodig hebt. De website ziet er professioneel uit en genereert dagelijks nieuwe leads. Heel tevreden met het resultaat.',
    n: 'MKH Bouw',
    f: 'Midden-Nederland',
    av: 'MK',
  },
  {
    q: 'Ayoub heeft onze complexe webapplicatie van A tot Z gebouwd. Technisch sterk, goede communicatie en altijd op tijd. We werken zeker weer samen.',
    n: 'Clockd',
    f: 'Midden-Nederland',
    av: 'CL',
  },
];

export const PRIJZEN = [
  {
    naam: 'Website',
    sub: 'Online vindbaar & serieuze aanvragen',
    prijs: 'Op maat',
    eenh: 'gratis kennismaking',
    bullets: [
      "Maatwerk ontwerp in jouw huisstijl",
      "Mobiel-first & razendsnel",
      "Basis lokale SEO ingebouwd",
      "Google Bedrijfsprofiel inrichten",
      "Contactformulier met spamfilter",
      "Hosting, SSL & onderhoud",
      "AVG-proof",
      "Vaste prijs, vooraf op papier",
    ],
    cta: 'Plan gratis kennismaking',
    feat: false,
  },
  {
    naam: 'Website + Google Ads',
    sub: 'Actief nieuwe klanten binnenhalen',
    prijs: 'Op maat',
    eenh: 'gratis kennismaking',
    bullets: [
      "Alles uit Website",
      "Lokale landingspagina's per stad",
      "Google Ads opzet & maandelijks beheer",
      "Conversie-tracking: je meet echte leads",
      "Maandelijkse rapportage",
      "Doorlopende optimalisatie",
    ],
    cta: 'Plan gratis kennismaking',
    feat: true,
  },
  {
    naam: 'Maatwerk software',
    sub: 'Automatiseer je administratie & planning',
    prijs: 'Op maat',
    eenh: 'gratis kennismaking',
    bullets: [
      "Intake en procesanalyse",
      "Software op jouw manier van werken",
      "Koppelingen met Snelstart, Exact, Moneybird",
      "Urenregistratie, planning of klantportaal",
      "Hosting en onderhoud inbegrepen",
      "Wekelijkse demo's tijdens de bouw",
    ],
    cta: 'Bespreek je vraagstuk',
    feat: false,
  },
];

export const STATS = [
  { k: '5', v: 'Projecten\nlive in productie' },
  { k: '100%', v: 'Maatwerk, geen\ntemplates' },
  { k: '3 wkn', v: 'Gemiddelde doorlooptijd\nStarter-pakket' },
  { k: '24 uur', v: 'Reactietijd\nop werkdagen' },
];

// ─── Blog ──────────────────────────────────────────────────────────────────

export type BlogPost = {
  slug: string;
  titel: string;
  excerpt: string;
  cat: string;
  date: string;
  readMin: number;
  author: string;
  authorAv: string;
  gradient: string;
  featured?: boolean;
  content?: BlogBlock[];
};

export type BlogBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h2'; text: string; id?: string }
  | { kind: 'h3'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  | { kind: 'quote'; text: string; cite: string }
  | { kind: 'figure'; label: string; caption?: string }
  | { kind: 'callout'; ico: string; titel: string; body: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'werkbon-naar-factuur-in-10-seconden',
    titel: 'Van papieren werkbon naar factuur in tien seconden: zo werkt het.',
    excerpt:
      'De gemiddelde installateur is 32 uur per week kwijt aan administratie. We bouwden een werkbon-app die dat halveert: klant tekent op de telefoon, foto’s en materiaal direct erbij, en de werkbon staat binnen tien seconden in Snelstart.',
    cat: 'Software',
    date: '14 mei 2026',
    readMin: 8,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #2e1065 60%, #7c3aed 100%)',
    featured: true,
    content: [
      {
        kind: 'p',
        text: '**Vraag een willekeurige installateur** hoe zijn week eruit ziet, en je hoort drie dingen: klanten helpen is leuk, monteurs aansturen is dagelijks puzzelen, en de administratie is een sluipmoordenaar. Niet dramatisch, niet onoverkomelijk — maar het vreet uren weg die niemand factureren kan.',
      },
      {
        kind: 'p',
        text: 'Ik heb het bij meerdere installatiebedrijven gemeten. Het gemiddelde: **32 uur per week aan administratie**. Werkbonnen overtypen, foto’s terugzoeken in de WhatsApp van vorige donderdag, materiaal narekenen, en als alles meezit nog een factuur eruit.',
      },
      { kind: 'h2', text: 'Het probleem', id: 'probleem' },
      {
        kind: 'p',
        text: 'De meeste werkbonnen leven nog op papier of in losse appjes. Een monteur schrijft de uren op, fotografeert de oude ketel met zijn telefoon, en stuurt ’s avonds (in het beste geval) een appje naar kantoor. Daar wordt het overgetypt.',
      },
      {
        kind: 'ul',
        items: [
          '**Fouten** — handtekeningen kwijt, foto’s onvindbaar, materiaal niet correct doorberekend.',
          '**Vertraging** — facturen die later versturen, betaaltermijnen die later in beginnen.',
          '**Frustratie** — monteurs die het gevoel hebben dat ze "ook nog dat moeten doen".',
        ],
      },
      { kind: 'h2', text: 'De oplossing', id: 'oplossing' },
      {
        kind: 'p',
        text: 'De oplossing is op zich niet rocket science: de werkbon waar hij hoort, op de telefoon van de monteur, ter plekke, met de klant erbij. Wat lastig is: er een app voor maken die monteurs daadwerkelijk gebruiken.',
      },
      {
        kind: 'ol',
        items: [
          '**Werkt op de bouw** — ook in een kruipruimte zonder bereik, ook met handschoenen aan.',
          '**Niks invullen wat je niet hoeft** — vooringevulde klantgegevens, recente materialen, standaard werkzaamheden.',
          '**Klaar in onder een minuut** — handtekening, foto, klaar. Niet drie schermen, niet vijf bevestigingen.',
        ],
      },
      {
        kind: 'figure',
        label: 'screenshot - werkbon-app, hoofdscherm met handtekening',
        caption: "De werkbon-app in gebruik op locatie. Handtekening en foto's direct vanuit het scherm.",
      },
      { kind: 'h2', text: 'In de praktijk', id: 'voorbeeld' },
      {
        kind: 'callout',
        ico: 'i',
        titel: 'Materiaal scannen, niet typen',
        body: 'Materiaal-scanning via de camera scheelt 3 tot 5 minuten per werkbon. En het voorkomt typfouten waar je achteraf achteraan moet bellen.',
      },
      { kind: 'h2', text: 'Resultaten', id: 'resultaten' },
      {
        kind: 'ul',
        items: [
          '**Fors minder uren** aan administratie per week.',
          '**Facturen sneller de deur uit** — wat de cashflow merkbaar verbetert.',
          '**Minder discussie** met klanten over wat er gedaan is.',
        ],
      },
      {
        kind: 'callout',
        ico: '→',
        titel: 'Wil je weten of dit bij jouw bedrijf past?',
        body: 'Plan een vrijblijvend gesprek van 30 minuten. We kijken naar je huidige werkwijze en wat de overstap zou opleveren.',
      },
    ],
  },
  {
    slug: 'lokale-seo-loodgieter-top-3',
    titel: 'Hoe je als loodgieter top 3 komt in lokale Googleresultaten',
    excerpt:
      'Lokale SEO is geen black magic. Met een Google-bedrijfsprofiel, een paar pagina’s en consistente klantreviews kom je verbazend ver.',
    cat: 'SEO',
    date: '07 mei 2026',
    readMin: 6,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
    content: [
      { kind: 'p', text: 'De meeste loodgieters krijgen hun klanten via mond-tot-mond. Dat werkt, totdat je wilt groeien. Google is de nieuwe mond-tot-mond: mensen zoeken een loodgieter op het moment dat ze iemand nodig hebben, niet als ze toevallig iemand tegenkomen. Top 3 in Google voor jouw stad is niet rocket science. Dit zijn de drie dingen die het meest uitmaken.' },
      { kind: 'h2', text: 'Google Bedrijfsprofiel: de basis die de meeste loodgieters overslaan', id: 'bedrijfsprofiel' },
      { kind: 'p', text: 'Google Bedrijfsprofiel (vroeger Google Mijn Bedrijf) is gratis en bepaalt voor een groot deel of je in de lokale 3-pack verschijnt. De 3-pack is het blok met drie bedrijven dat boven de organische resultaten staat. Hier kijken mensen eerst.' },
      { kind: 'ul', items: [
        '**Categorieën correct instellen** — "Loodgieter" als primaire categorie, eventueel "Loodgietersbedrijf" of "Sanitaire techniek" als secundair.',
        "**Openingstijden inclusief spoedlijn** — als je 24/7 bereikbaar bent, moet dat duidelijk staan. Klanten bellen het bedrijf met de langste bereikbaarheid.",
        '**Minimaal 10 foto\'s** — van je busje, je werkmateriaal, afgeronde klussen. Bedrijven met meer foto\'s scoren hoger.',
        '**Actief reageren op reviews** — ook op negatieve. Google ziet dit als een signaal dat je actief bent.',
      ]},
      { kind: 'h2', text: 'Lokale landingspagina per stad', id: 'landingspaginas' },
      { kind: 'p', text: 'Als je actief bent in meerdere steden, wil je per stad een eigen pagina. "Loodgieter Baarn" en "loodgieter Soest" zijn twee verschillende zoekwoorden. Een pagina die beide probeert te dekken, rankt nergens.' },
      { kind: 'p', text: 'Zo bouw je een landingspagina die rankt: begin met de zoekterm in de H1 ("Loodgieter in Baarn"), schrijf minimaal 300 woorden unieke tekst over wat je in die stad doet, voeg je telefoonnummer en Google Maps toe, en link vanuit je homepage naar de stadspagina.' },
      { kind: 'callout', ico: '!', titel: 'Niet kopiëren en zoekwoord aanpassen', body: 'Google detecteert duplicate content. Schrijf per stad échte, unieke tekst. Noem wijken, kenmerken van de woningbouw in die stad, of specifieke ervaring die je er hebt opgedaan.' },
      { kind: 'h2', text: 'Reviews: het snelste signaal naar Google', id: 'reviews' },
      { kind: 'p', text: 'Bedrijven met meer recente reviews ranken hoger in de lokale 3-pack. Niet het totaalaantal, maar de FREQUENTIE telt het meest. Tien reviews per jaar slaat beter aan dan dertig reviews in één maand en dan niets meer.' },
      { kind: 'p', text: 'Praktische aanpak: stuur elke klant na afloop een WhatsApp-bericht met een directe link naar jouw Google review-pagina. Geen omleiding, geen app, gewoon een link. Conversie is twee tot drie keer hoger dan e-mail.' },
      { kind: 'h2', text: 'Hoe lang duurt het voordat je resultaat ziet?', id: 'tijdlijn' },
      { kind: 'p', text: 'Organische SEO heeft geduld nodig. Reken op twee tot vier maanden voordat je meetbare ranking-verbeteringen ziet. Het effect is duurzaam: anders dan een Google Ads campagne die stopt zodra je stopt met betalen, blijft organische positie bestaan.' },
      { kind: 'p', text: 'Google Bedrijfsprofiel werkt sneller. Als het profiel compleet is en je de eerste reviews ontvangt, zie je binnen drie tot zes weken verbetering in de lokale 3-pack.' },
      { kind: 'h2', text: 'Wat kost het om dit op te zetten?', id: 'kosten' },
      { kind: 'p', text: 'Google Bedrijfsprofiel is gratis. De tijdsinvestering zit in het invullen en het actief bijhouden: reageren op reviews, foto uploaden, openingstijden bijwerken.' },
      { kind: 'p', text: "Lokale landingspagina's maken kost moeite. Per stad minimaal 300 woorden unieke content, correcte title-tags en een interne link vanuit de homepage. Als je vijf steden wilt bedienen, zit je snel op een halve dag werk." },
      { kind: 'p', text: 'Reviews zijn gratis, maar kosten consistentie. Maak een routine van het vragen: elke klus, elke dag. Na drie maanden heb je een reviewprofiel dat concurrenten niet zomaar inhalen.' },
      { kind: 'callout', ico: 'i', titel: 'Wil je dit professioneel laten aanpakken?', body: 'Ik stel de lokale SEO-fundamenten in en bouw de landingspagina voor jouw werkgebied. Plan een gesprek van 30 minuten.' },
      { kind: 'quote', text: 'Lokale SEO is geen eenmalige klus. Het is een lopend proces van Google Bedrijfsprofiel bijhouden, reviews verzamelen en content toevoegen.', cite: 'Ayoub Elkaoui, AK Web Solutions' },
    ],
  },
  {
    slug: '5-fouten-op-installateur-websites',
    titel: '5 fouten op websites van installatiebedrijven (en hoe je ze fikst)',
    excerpt:
      'Ik bekeek 50 willekeurige sites van installateurs. Dit zijn de vijf fouten die ik het vaakst tegenkom en wat het kost aan leads.',
    cat: 'Websites',
    date: '02 mei 2026',
    readMin: 5,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #1a0f33 0%, #4c1d95 100%)',
    content: [
      { kind: 'p', text: 'Ik heb tientallen websites van installatiebedrijven bekeken. Niet om te oordelen, maar om te begrijpen wat er beter kan. Vijf fouten komen keer op keer terug. Samen kosten ze meer leads dan een slechte Google-ranking.' },
      { kind: 'h2', text: 'Fout 1: geen telefoonnummer in beeld op mobiel', id: 'fout-1' },
      { kind: 'p', text: 'Meer dan 70% van de bezoekers van een loodgieter-website komt via mobiel. Veel websites verstoppen het telefoonnummer in de footer of maken het niet klikbaar. Een click-to-call knop die direct bovenaan staat is het meest impactvolle element op de hele site.' },
      { kind: 'h2', text: 'Fout 2: geen aparte spoedpagina', id: 'fout-2' },
      { kind: 'p', text: '"Lekkage spoed" en "loodgieter onderhoud" zijn compleet verschillende zoekopdrachten. Iemand met water op de vloer heeft andere informatie nodig dan iemand die een nieuwe badkamer wil. Eén algemene dienstenpagina bedient beide slecht. Een aparte spoedpagina met de juiste zoekwoorden trekt de hoogst-converterende bezoekers.' },
      { kind: 'h2', text: 'Fout 3: traag op mobiel', id: 'fout-3' },
      { kind: 'p', text: "Google PageSpeed geeft inzicht in je snelheid. Een score onder de 50 kost je rankings. De meeste trage sites hebben hetzelfde probleem: te grote afbeeldingen die niet geoptimaliseerd zijn. Met next/image of een WordPress-plugin als Smush is 80% van het snelheidsprobleem opgelost zonder te programmeren." },
      { kind: 'h2', text: 'Fout 4: geen Google Bedrijfsprofiel gekoppeld', id: 'fout-4' },
      { kind: 'p', text: 'Je website en je Google Bedrijfsprofiel moeten kloppen: zelfde naam, zelfde adres, zelfde telefoonnummer. Google noemt dit NAP-consistentie. Een verschil — ook klein — ondermijnt je lokale SEO. Check het en zorg dat beide profielen identiek zijn.' },
      { kind: 'h2', text: 'Fout 5: geen reviews gevraagd', id: 'fout-5' },
      { kind: 'p', text: 'Reviews komen niet vanzelf. Tevreden klanten zijn blij, maar vergeten om iets te schrijven. Ontevreden klanten schrijven juist wel. Vraag actief om een review na elke klus, het liefst met een directe link. Wie dit structureel doet, heeft na een jaar een veelvoud aan reviews ten opzichte van concurrenten.' },
      { kind: 'callout', ico: '→', titel: 'Zit een van deze fouten op jouw site?', body: 'Plan een gratis gesprek van 30 minuten. Ik kijk mee naar je huidige site en geef concrete feedback, ook als je niks bij mij afneemt.' },
    ],
  },
  {
    slug: 'ad-loodgieter-meer-aanvragen-google-ads',
    titel: 'Hoe AD Loodgietersbedrijf meer aanvragen via Google kreeg',
    excerpt:
      'Een eerlijke case-deepdive. Wat gedaan is, wat werkte, en eerlijk ook wat in eerste instantie niet werkte.',
    cat: 'Cases',
    date: '28 apr 2026',
    readMin: 7,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #d97a2c 0%, #7c3aed 100%)',
    content: [
      { kind: 'p', text: 'Dit is een eerlijke casebeschrijving van hoe AD Loodgietersbedrijf meer aanvragen via Google kreeg na een nieuwe website en Google Ads-campagne. Geen opgeblazen cijfers, wel de werkelijke aanpak.' },
      { kind: 'h2', text: 'De situatie voor we begonnen', id: 'situatie' },
      { kind: 'p', text: 'AD Loodgietersbedrijf werkt voor bedrijven en particulieren in Amsterdam en omgeving. Klanten als Burger King, Starbucks en BAM vertrouwen op hun vakmanschap. Maar online was dat vakmanschap amper zichtbaar. Een verouderde site zonder mobiel-first design, nauwelijks vindbaar voor de zoekwoorden die er toe doen.' },
      { kind: 'h2', text: 'Wat we hebben gedaan', id: 'aanpak' },
      { kind: 'p', text: 'Nieuwe website op WordPress, mobiel-first, met een duidelijke structuur: homepage, spoedservice, diensten (sanitair, leidingwerk, renovaties, nieuwbouw), en een contactpagina. Google Bedrijfsprofiel volledig ingericht voor de Amsterdam-regio.' },
      { kind: 'p', text: 'Google Ads campagne opgezet voor spoedklussen in de avonden en weekenden. Focus op telefoontjes, niet op formulierinzendingen. Met call-tracking hebben we bijgehouden welke advertenties daadwerkelijk tot een telefoontje leidden.' },
      { kind: 'h2', text: 'Wat er niet werkte (eerlijk)', id: 'niet-werkte' },
      { kind: 'p', text: 'De eerste twee weken van de Ads-campagne draaiden we te breed. Te veel zoekwoorden, te weinig focus op spoed. Conversiepercentage was laag. Na bijsturen — striktere zoekwoordenlijst, betere negatieve zoekwoorden, andere advertentieteksten — verbeterde dat snel.' },
      { kind: 'h2', text: 'Het resultaat', id: 'resultaat' },
      { kind: 'p', text: 'Klant geeft aan structureel meer telefoontjes te ontvangen via Google. De spoedklus-pagina\'s ranken voor relevante zoekwoorden in Amsterdam. De Ads-campagne draait doorlopend en wordt maandelijks bijgesteld.' },
      { kind: 'callout', ico: '→', titel: 'Vergelijkbaar project bespreken?', body: 'Plan een gesprek van 30 minuten. Ik kijk naar jouw huidige situatie en geef een eerlijke inschatting van wat realistisch is te bereiken.' },
    ],
  },
  {
    slug: 'excel-planning-vervangen',
    titel: 'Waarom installateurs hun Excel-planning beter kunnen vervangen',
    excerpt:
      'Excel is geweldig, totdat je vijf monteurs hebt. Dan begint het scheuren. Een nuchtere kijk op wanneer je over moet stappen, en op wat.',
    cat: 'Software',
    date: '21 apr 2026',
    readMin: 10,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #2d4a3e 0%, #7c3aed 100%)',
    content: [
      { kind: 'p', text: 'Excel is een geweldig gereedschap. Maar voor de planning van installateurs is het na vijf monteurs ongeschikt. Niet omdat Excel slecht is, maar omdat het nooit is gemaakt voor wat installatiebedrijven er van vragen: realtime inzicht, mobiele toegang, koppelingen met urenregistratie en automatische doorboekingen.' },
      { kind: 'h2', text: 'Wanneer Excel kapot gaat', id: 'wanneer-kapot' },
      { kind: 'p', text: 'Er is een duidelijk breekpunt. Vijf monteurs is het moment waarop de meeste Excel-planning begint te haperen. Niet één grote crash, maar een sluipend probleem: twee monteurs ingepland op hetzelfde adres, een klus die niet is doorgegeven, een uur dat kwijt is in een formulier dat iemand anders ook open had.' },
      { kind: 'ul', items: [
        '**Geen realtime updates** — als iemand de planning aanpast, ziet de monteur dat pas als hij de file opnieuw opent.',
        '**Geen mobiele toegang** — een monteur op locatie kan niet snel checken wat zijn volgende klus is zonder een laptop.',
        '**Geen koppeling met uren** — plannen en uren registreren zijn twee aparte processen die handmatig gesynchroniseerd worden.',
        '**Geen overzicht van beschikbaarheid** — wie is ziek, wie heeft vakantie, wie heeft welke certificering voor welk type klus?',
      ]},
      { kind: 'h2', text: 'Wat alternatieven bieden', id: 'alternatieven' },
      { kind: 'p', text: 'Er zijn twee smaken: generieke SaaS-tools (Simpleplan, Teamleader, AFAS) en maatwerk. Generieke tools werken goed als je bereid bent je werkwijze aan te passen aan de software. Maatwerk werkt beter als je specifieke koppelingen nodig hebt, zoals directe doorboekingen naar Snelstart of Syntess.' },
      { kind: 'p', text: 'Voor de meeste installatiebedrijven met vijf tot vijftien monteurs is een generieke tool de eerste stap. Goedkoper, sneller in gebruik, en dekt 80% van de behoefte. Maatwerk is interessant als die 20% precies de dingen zijn die het meeste tijd kosten.' },
      { kind: 'h2', text: 'Wat de overstap kost', id: 'overstap' },
      { kind: 'p', text: 'Niet alleen geld, maar ook tijd. De overstap naar nieuwe software vraagt drie tot zes weken voor adoptie. Monteurs moeten wennen aan een nieuwe interface, administratie moet de koppeling leren begrijpen. Reken dit mee in de beslissing.' },
      { kind: 'h2', text: 'Hoe maak je de overstap zonder chaos?', id: 'overstap-aanpak' },
      { kind: 'p', text: 'Begin klein. Kies één probleem dat Excel niet goed oplost en zoek daar een oplossing voor. Als dat de planning is: probeer een planningssoftware een maand parallel aan Excel. Als dat de urenregistratie is: test een app die monteurs op hun telefoon kunnen gebruiken.' },
      { kind: 'p', text: 'Forceer de overstap niet te snel. Monteurs die worden overvallen met nieuwe software haken af. Plan een korte demo, laat ze het zelf proberen, verzamel feedback.' },
      { kind: 'ul', items: [
        "**Kies een rustige periode** — niet midden in een piekseizoen.",
        "**Train in kleine groepen** — een monteur per keer werkt beter dan een grote groepstraining.",
        "**Houd Excel erbij** als backup voor de eerste maand.",
        "**Meet het verschil** — hoeveel uur besteed je aan admin na drie maanden?",
      ]},
      { kind: 'h2', text: 'De business case', id: 'business-case' },
      { kind: 'p', text: 'Als je als eigenaar acht uur per week minder kwijt bent aan administratie, en je uurtarief is 60 euro, dan is dat 480 euro waarde per week. In een jaar ruim 25.000 euro aan tijd die je beter besteedt. Een planningssoftware van 150 euro per maand verdient zichzelf terug in minder dan een week.' },
      { kind: 'quote', text: 'De vraag is niet of je Excel moet vervangen, maar wanneer. Hoe langer je wacht, hoe meer je bedrijf is gegroeid rond een systeem dat het niet aankan.', cite: 'Ayoub Elkaoui, AK Web Solutions' },
    ],
  },
  {
    slug: 'snelstart-koppelen-met-werkbon-app',
    titel: 'Snelstart koppelen met je werkbon-app, een praktische gids',
    excerpt:
      'Stap voor stap: hoe je je werkbonnen automatisch in Snelstart laat belanden. Inclusief de valkuilen.',
    cat: 'Software',
    date: '14 apr 2026',
    readMin: 8,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    content: [
      { kind: 'p', text: 'Snelstart is voor veel installatiebedrijven het boekhoudpakket van keuze. Betaalbaar, begrijpelijk, Nederlands. De koppeling tussen Snelstart en een werkbon-app of planningssysteem is technisch mogelijk en voorkomt dat je twee keer dezelfde data invoert.' },
      { kind: 'h2', text: 'Hoe de koppeling werkt', id: 'hoe-werkt-het' },
      { kind: 'p', text: 'Snelstart heeft een REST API die open is voor externe koppelingen. Via deze API kun je klantgegevens ophalen, facturen aanmaken en boekingen wegschrijven. Een werkbon-app die op Snelstart is aangesloten doet het volgende: monteur rondt werkbon af op zijn telefoon, werkbon wordt goedgekeurd in het backoffice-systeem, en een factuur wordt automatisch aangemaakt in Snelstart zonder handmatige tussenkomst.' },
      { kind: 'ul', items: [
        '**Klantgegevens ophalen** — zoek een bestaande klant in Snelstart direct vanuit de werkbon-app.',
        '**Artikelen en tarieven** — haal artikelnummers en prijzen op uit Snelstart zodat de monteur geen codes hoeft in te typen.',
        '**Factuur aanmaken** — na goedkeuring van de werkbon wordt er automatisch een conceptfactuur in Snelstart aangemaakt.',
        '**Betaalstatus terugkoppelen** — als de factuur betaald is in Snelstart, is dat zichtbaar in het CRM van de werkbon-app.',
      ]},
      { kind: 'h2', text: 'Wat er mis kan gaan', id: 'valkuilen' },
      { kind: 'p', text: 'De Snelstart API heeft beperkingen. Niet alle versies ondersteunen alle endpoints. De V2 API (nieuwste) werkt anders dan V1. Als je een oudere Snelstart-installatie hebt, kan een directe koppeling lastiger zijn. Check dit vooraf.' },
      { kind: 'p', text: 'Een ander aandachtspunt: grootboekrekeningen. Een automatisch aangemaakte factuur moet op de juiste grootboekrekening worden geboekt. Dit klinkt technisch, maar is gewoon een instellingenkwestie die je eenmalig met je boekhouder regelt.' },
      { kind: 'callout', ico: 'i', titel: 'Welke versie van Snelstart gebruik je?', body: 'De REST API is beschikbaar vanaf Snelstart 12. Oudere versies gebruiken een SOAP-interface die complexer is om te koppelen. Neem de versie mee in je gesprek met een developer.' },
      { kind: 'h2', text: 'Kosten en doorlooptijd', id: 'kosten' },
      { kind: 'p', text: 'Een solide Snelstart-koppeling bouwen kost gemiddeld twee tot vier weken werk. De kosten zijn afhankelijk van hoeveel data er heen en terug moet en of er een bestaande app is om op aan te sluiten of dat het iets nieuws is. Reken op minimaal 2.000 euro voor een eenvoudige factuurkoppeling tot 8.000 euro voor een volledige bi-directionele synchronisatie.' },
    ],
  },
  {
    slug: 'google-ads-installateur-beginnen',
    titel: 'Google Ads als installateur: zo begin je zonder geld te verspillen',
    excerpt:
      'Google Ads kan effectief zijn voor installateurs, maar ook een geldput. Het verschil zit in de zoekwoorden, de landingspagina en de tracking.',
    cat: 'SEO',
    date: '08 apr 2026',
    readMin: 9,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #0f0a1e 100%)',
    content: [
      { kind: 'p', text: 'Google Ads kan voor een installateur een consistente bron van leads zijn. Het kan ook een geldput zijn. Het verschil zit in drie dingen: de juiste zoekwoorden, een landingspagina die converteert, en correcte tracking. Wie dit niet op orde heeft, verbrand advertentiebudget.' },
      { kind: 'h2', text: 'Welke zoekwoorden werken', id: 'zoekwoorden' },
      { kind: 'p', text: 'Focus op zoekwoorden met koopintentie. "Loodgieter" is te breed. "Loodgieter Amsterdam" is beter. "Loodgieter Amsterdam spoed" is het beste. Hoe specifieker, hoe hoger de conversie en hoe lager de kosten per lead.' },
      { kind: 'ul', items: [
        '**Spoedzoekwoorden** — "loodgieter spoed [stad]", "lekkage verhelpen", "riool verstopt spoed". Hoge urgentie, hoog conversiepercentage.',
        '**Dienst + stad** — "CV ketel vervangen Amsterdam", "warmtepomp installateur Hilversum". Planmatig werk, lagere urgentie maar hogere klantwaarde.',
        '**Negatieve zoekwoorden** — even belangrijk. Zorg dat je niet betaalt voor "loodgieter cursus", "loodgieter worden" of "loodgieter vacature".',
      ]},
      { kind: 'h2', text: 'Landingspagina: waar je campagne op afsterft', id: 'landingspagina' },
      { kind: 'p', text: 'De meeste Google Ads-campagnes voor installateurs leiden naar de homepage. Dat is fout. Een bezoeker die zoekt op "lekkage spoed Amsterdam" wil één ding: bellen. Geen homepage met algemene informatie over het bedrijf. Een specifieke spoedpagina met één doel (bellen) converteert twee tot drie keer beter.' },
      { kind: 'h2', text: 'Tracking: weet wat een lead kost', id: 'tracking' },
      { kind: 'p', text: 'Zonder tracking weet je niet welke advertentie werkt. Minimale tracking: Google Ads conversie voor formulierinzendingen, en click-tracking op het telefoonnummer (Google Ads belt-extensies). Met deze data kun je binnen vier weken beslissen welke campagnes je opschaalt en welke je stopt.' },
      { kind: 'callout', ico: '!', titel: 'Begin klein, meet goed', body: 'Start met 300 tot 500 euro advertentiebudget per maand voor één campagne. Meet vier weken, kijk wat werkt, schaal dan op. Wie met 2.000 euro begint zonder te meten, gooit 1.500 euro weg.' },
      { kind: 'h2', text: 'Wat het kost', id: 'kosten' },
      { kind: 'p', text: 'De klikprijzen voor loodgieter-zoekwoorden liggen in Amsterdam tussen de 3 en 8 euro per klik. Voor een conversiepercentage van 10% (realistisch voor een goede spoedpagina) kost een lead 30 tot 80 euro. Voor een spoedklus van 150 tot 300 euro is dat een gezonde marge. Voor een warmtepomp-installatie van 12.000 euro is 80 euro per lead bijna gratis.' },
    ],
  },
  {
    slug: 'avg-voor-installateurs',
    titel: 'AVG voor installatiebedrijven: wat je moet hebben',
    excerpt:
      'Geen juridisch verhaal, maar de praktische checklist. Cookies, klantgegevens, beveiliging. Wat moet, wat hoort, wat is overdone.',
    cat: 'Websites',
    date: '02 apr 2026',
    readMin: 6,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #c2521b 0%, #4c1d95 100%)',
    content: [
      { kind: 'p', text: 'AVG staat voor Algemene Verordening Gegevensbescherming. Klinkt als iets voor grote bedrijven. Maar ook als installateur verwerk je persoonsgegevens: namen, adressen, telefoonnummers van klanten. Wat moet je echt hebben, wat hoort, en wat is overdone?' },
      { kind: 'h2', text: 'Wat moet (wettelijk verplicht)', id: 'verplicht' },
      { kind: 'ul', items: [
        '**Privacyverklaring op je site** — uitleg over welke gegevens je verzamelt en waarvoor. Eén pagina, gewone taal, geen juridisch jargon.',
        '**Verwerkersovereenkomst met je boekhouder en hostingpartij** — als zij jouw klantgegevens verwerken, is een schriftelijke overeenkomst verplicht.',
        '**Recht op inzage en verwijdering** — klanten kunnen vragen welke gegevens je hebt en je verzoeken die te verwijderen. Zorg dat je weet hoe je daaraan voldoet.',
        '**Beveiligde opslag** — klantgegevens op een oud Excel-bestand op je laptop zonder wachtwoord is een overtreding.',
      ]},
      { kind: 'h2', text: 'Cookies: wanneer wel, wanneer niet', id: 'cookies' },
      { kind: 'p', text: 'Een cookiebanner is alleen verplicht als je tracking-cookies plaatst (Google Analytics, Facebook Pixel). Gebruik je die niet, dan heb je geen cookiebanner nodig. Veel installateur-sites kunnen prima draaien zonder tracking. Plausible Analytics is een privacy-vriendelijk alternatief dat geen cookies plaatst en geen banner vereist.' },
      { kind: 'h2', text: 'Wat overdone is', id: 'overdone' },
      { kind: 'p', text: 'Een privacyverklaring van vijftien pagina\'s vol juridisch jargon is overdone. Een cookiewall die je verplicht toestemming te geven voor je de site kunt bekijken is legally incorrect (en irritant). Drie cookiebanner-pop-ups die je op elke pagina tegenkwam zijn overdone.' },
      { kind: 'p', text: 'De realiteit voor een installatiebedrijf: een duidelijke privacyverklaring van één A4, geen tracking-cookies, en een verwerkersovereenkomst met je boekhouder. Dat is voldoende voor 99% van de installatiebedrijven.' },
      { kind: 'callout', ico: 'i', titel: 'Laat je privacyverklaring checken', body: 'Een jurist kijkt je privacyverklaring na voor 100 tot 200 euro. Dat is een eenmalige investering die je beschermt. Wacht er niet mee tot een klant of de Autoriteit Persoonsgegevens belt.' },
    ],
  },
  {
    slug: 'geen-uurtjes-factuurtjes',
    titel: 'Waarom ik geen uurtje-factuurtjes doe',
    excerpt:
      'Vaste prijs, geen verrassingen. Klinkt logisch, maar bijna geen webbureau doet het. Ik leg uit waarom ik wel.',
    cat: 'Werkwijze',
    date: '26 mrt 2026',
    readMin: 5,
    author: 'Ayoub Elkaoui',
    authorAv: 'AE',
    gradient: 'linear-gradient(135deg, #1e1244 0%, #c2521b 100%)',
    content: [
      { kind: 'p', text: 'Bijna alle webdesignbureaus werken op uurbasis. Je betaalt een uurtarief, de bureau schrijft uren, aan het einde van de maand comes a surprise. Ik doe dit niet. Dit is waarom.' },
      { kind: 'h2', text: 'Het probleem met uurtjes-factuurtjes', id: 'probleem' },
      { kind: 'p', text: 'Uurtarieven zetten de prikkel verkeerd. Hoe meer uur een bureau schrijft, hoe meer ze verdienen. Een klant die vragen stelt, aanpassingen vraagt of extra uitleg nodig heeft: meer uren. Dat is geen samenwerking, dat is een nachtmerrie.' },
      { kind: 'p', text: 'Voor de klant is het ook onaangenaam: je weet niet wat het gaat kosten tot de factuur binnenkomt. Je aarzelt om vragen te stellen omdat je bang bent voor extra uren. Je houdt de discussie over meerwerk permanent in je achterhoofd.' },
      { kind: 'h2', text: 'Hoe vaste prijzen werken', id: 'vaste-prijzen' },
      { kind: 'p', text: 'Vóór het project maak ik een voorstel met een vaste prijs en een duidelijke scope. Wat er in zit, staat erin. Wat er niet in zit, staat er ook in. Als iets meer kost dan ik had ingeschat: pech voor mij, niet voor jou.' },
      { kind: 'p', text: 'Dit dwingt mij om goed na te denken voor ik een prijs noem. Ik kan niet zomaar een laag bedrag zeggen en het later compenseren met uren. Ik moet realistisch zijn, en dat is ook beter voor jou: geen verrassingen achteraf.' },
      { kind: 'h2', text: 'Wanneer kies je dan toch voor uurwerk?', id: 'uurwerk' },
      { kind: 'p', text: 'Bij grote maatwerk-projecten waarbij de scope echt niet van tevoren vast te stellen is, werk ik in fasen met een vaste prijs per fase. Elke fase heeft een duidelijk begin, einde en prijs. Na elke fase beslissen we samen of we doorgaan.' },
      { kind: 'quote', text: 'Een vaste prijs is niet goedkoper of duurder dan uurwerk. Het is eerlijker. Je weet waar je aan toe bent, en je kunt me aanspreken als we afwijken.', cite: 'Ayoub Elkaoui, AK Web Solutions' },
    ],
  },
];

export const BLOG_CATEGORIES = ['Alles', 'Websites', 'Software', 'SEO', 'Werkwijze', 'Cases']
