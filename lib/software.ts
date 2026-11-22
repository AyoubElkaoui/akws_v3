import { MKB_DOELGROEPEN } from '@/lib/mkb-doelgroepen';
// Software laten maken: pagina's per soort software (/software-laten-maken/[soort])
// en per vak (/software-voor/[branche]). Alleen echte cases; waar nog geen live
// project is, staat dat er eerlijk bij.

export type SoftwareSoort = {
  slug: string;
  /** Korte naam voor links en kaarten */
  naam: string;
  h1: string;
  subtitel: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Herkenbare problemen zonder deze software */
  problemen: string[];
  /** Wat er in zit */
  functies: { titel: string; tekst: string }[];
  /** Slugs uit CASES */
  cases: string[];
  /** Eerlijke noot als er (nog) geen live case is */
  caseNoot?: string;
  prijzen: { titel: string; prijs: string; tekst: string }[];
  faq: { q: string; a: string }[];
};

const P_PROTO = { titel: 'Klikbaar prototype', prijs: 'vanaf €750', tekst: 'Alle schermen om te proberen met voorbeelddata, in 1 tot 2 weken. Je weet wat je krijgt voordat er gebouwd wordt.' };
const P_TOOL = { titel: 'Kleine tool of koppeling', prijs: '€500 – €1.500', tekst: 'Een export omzetten, twee pakketten aan elkaar knopen of één los hulpprogramma.' };
const P_FASE = { titel: 'Eerste werkende fase', prijs: '€3.500 – €8.000', tekst: 'Eén module met login en database, in 4 tot 8 weken live. Vaste prijs vooraf.' };
const P_HOST = { titel: 'Hosting en onderhoud', prijs: 'vanaf €49 p/m', tekst: 'Servers, back-ups, updates en kleine aanpassingen. Uitbreidingen €85 per uur of per blok.' };

export const SOFTWARE_SOORTEN: SoftwareSoort[] = [
  {
    slug: 'urenregistratie',
    naam: 'Urenregistratie',
    h1: 'Urenregistratie laten maken',
    subtitel: 'Op maat, gekoppeld aan je administratie.',
    metaTitle: 'Urenregistratie laten maken op maat | Koppeling met ERP | AKWS',
    metaDescription: 'Urenregistratie op maat laten maken: uren per klant of project, goedkeuring door de planner en direct door naar je ERP of facturatie. Eerste fase vanaf €3.500.',
    intro: 'Uren worden op papier, in een app en daarna nog eens in Excel ingevoerd, en pas weken later gefactureerd. Een urenregistratie op maat laat monteurs of medewerkers één keer boeken, laat de planner goedkeuren en zet de uren zonder overtypen klaar in je administratie. Voor een installatiebedrijf bouwden we precies dat met Clockd, gekoppeld aan Syntess Atrium.',
    problemen: ['Dezelfde uren worden twee of drie keer ingevoerd', 'Fouten komen pas boven bij de factuur', 'Niemand ziet per week wie wat geboekt heeft', 'Het standaardpakket kent jouw projecten of uursoorten niet'],
    functies: [
      { titel: 'Boeken per klant of project', tekst: 'Op de telefoon of pc, met de uursoorten en projecten uit je eigen administratie. Een timer of handmatig invoeren.' },
      { titel: 'Goedkeuren per week', tekst: 'Medewerker dient in, planner of manager keurt goed of stuurt terug met een opmerking. Alles met een audit-log.' },
      { titel: 'Werkt ook offline', tekst: 'Als Progressive Web App werkt het op de bouwplaats zonder bereik en synct zodra er verbinding is.' },
      { titel: 'Direct naar je ERP', tekst: 'Goedgekeurde uren gaan rechtstreeks naar je ERP- of boekhoudpakket of worden factuurregels.' },
    ],
    cases: ['clockd', 'urenportaal', 'itflow'],
    prijzen: [P_PROTO, P_FASE, P_HOST],
    faq: [
      { q: 'Wat kost een urenregistratie op maat?', a: 'Een klikbaar prototype begint bij €750. Een werkende eerste versie met login, goedkeuring en een export of koppeling ligt meestal tussen €3.500 en €8.000. Hosting en onderhoud vanaf €49 per maand.' },
      { q: 'Kan het koppelen met Syntess, Exact of Moneybird?', a: 'Met Syntess Atrium hebben we al een directe koppeling gebouwd. Exact, Moneybird en Snelstart hebben een API waar we op aansluiten. In de intake checken we wat jouw pakket toelaat.' },
      { q: 'Waarom niet gewoon een bestaande uren-app?', a: 'Als een bestaande app past, raden we die aan. Maatwerk loont als je uursoorten, goedkeuring of koppeling niet in een standaardpakket passen en je daardoor elke week handwerk hebt.' },
    ],
  },
  {
    slug: 'voorraadbeheer',
    naam: 'Voorraadbeheer',
    h1: 'Voorraadbeheer software laten maken',
    subtitel: 'Scannen, afboeken en op tijd bestellen.',
    metaTitle: 'Voorraadbeheer software op maat laten maken | Scannen met QR | AKWS',
    metaDescription: 'Voorraadbeheer op maat: scannen met telefoon of handscanner, minimumvoorraad, bestellijst per leverancier en materiaal koppelen aan projecten. Eerste fase vanaf €3.500.',
    intro: 'Een Excel-lijst voor het magazijn klopt na een week al niet meer. Met voorraadbeheer op maat scan je een artikel met je telefoon of een handscanner, boek je het direct af op een project en krijg je een seintje voordat iets op is. Voor een bedrijf dat groepenkasten bouwt maakten we zo’n app, waarin elke kast ook een eigen QR-paspoort heeft.',
    problemen: ['De voorraadlijst klopt niet met wat er in het magazijn ligt', 'Materiaal wordt niet aan het project toegerekend', 'Er wordt te laat of dubbel besteld', 'Niemand weet welk serienummer bij welke klant zit'],
    functies: [
      { titel: 'Scannen met telefoon of scanner', tekst: 'Barcode of QR-code scannen met de camera of een USB- of bluetoothscanner. Afboeken in één handeling.' },
      { titel: 'Op project of product', tekst: 'Materiaal koppelen aan een project, kast of klant, inclusief kostprijs.' },
      { titel: 'Minimumvoorraad en bestellijst', tekst: 'Per artikel een minimum, een bestellijst per leverancier en een mail als iets bijna op is.' },
      { titel: 'Labels printen', tekst: 'Labels met QR- en barcode direct uit de app.' },
    ],
    cases: ['voorraad-app', 'itflow'],
    prijzen: [P_PROTO, P_FASE, P_HOST],
    faq: [
      { q: 'Wat kost voorraadbeheer op maat?', a: 'Een eerste werkende versie met scannen, afboeken en een bestellijst ligt meestal tussen €3.500 en €8.000. Een prototype om te proberen kan vanaf €750.' },
      { q: 'Heb ik speciale scanners nodig?', a: 'Nee. De camera van een telefoon werkt prima. Een USB- of bluetoothscanner kan erbij als je veel scant.' },
      { q: 'Kan de voorraad koppelen met mijn boekhouding?', a: 'Ja, als je pakket een koppeling toelaat. Kostprijzen per project kunnen dan doorgaan naar je administratie.' },
    ],
  },
  {
    slug: 'dashboard',
    naam: 'Dashboard',
    h1: 'Dashboard laten maken',
    subtitel: 'Je cijfers live, zonder Excel-export.',
    metaTitle: 'Dashboard laten maken | Omzet en marge live uit je ERP | AKWS',
    metaDescription: 'Management- of financieel dashboard laten maken: omzet, marge per project en openstaande facturen live uit je ERP of boekhouding, met doorklikken tot de factuurregel.',
    intro: 'Alle cijfers staan in je ERP of boekhouding, maar een overzicht kost elke maand een middag in Excel. Een dashboard op maat leest die cijfers rechtstreeks uit, zodat je omzet, marge per project en openstaande facturen altijd actueel ziet. Voor een installatiebedrijf bouwden we een dashboard dat live uit de Firebird-database van Syntess Atrium leest, strikt read-only.',
    problemen: ['Maandcijfers kosten handwerk in Excel', 'Marge per project zie je pas achteraf', 'Openstaande facturen vallen buiten beeld', 'Iedereen heeft een eigen versie van de cijfers'],
    functies: [
      { titel: 'Rechtstreeks uit de bron', tekst: 'Live uit je ERP, boekhouding of database. Niets exporteren, niets overtypen.' },
      { titel: 'Doorklikken tot de factuurregel', tekst: 'Van jaar naar klant, naar project, naar de facturen en inkoop eronder.' },
      { titel: 'Debiteuren in één oogopslag', tekst: 'Openstaand per ouderdom en de gemiddelde betaaltermijn.' },
      { titel: 'Alleen lezen', tekst: 'Het dashboard schrijft nooit in je administratie. Veilig binnen je eigen netwerk als dat nodig is.' },
    ],
    cases: ['financieel-dashboard'],
    prijzen: [P_PROTO, P_FASE, P_HOST],
    faq: [
      { q: 'Wat kost een dashboard op maat?', a: 'Een dashboard met een paar schermen uit één bron ligt meestal tussen €3.500 en €8.000. Een klikbaar ontwerp met voorbeeldcijfers kan vanaf €750.' },
      { q: 'Waarom geen Power BI?', a: 'Power BI is prima als je zelf rapporten wilt bouwen. Een dashboard op maat is handig als je vaste schermen wilt die iedereen zonder training snapt en die direct op je ERP aansluiten.' },
      { q: 'Uit welke pakketten kan het lezen?', a: 'Uit alles met een database of API: Syntess Atrium (Firebird), Exact, Moneybird, Snelstart, of je eigen database.' },
    ],
  },
  {
    slug: 'koppeling',
    naam: 'Koppelingen',
    h1: 'Koppeling laten maken',
    subtitel: 'Je pakketten laten samenwerken.',
    metaTitle: 'Koppeling laten maken tussen ERP, boekhouding en apps | AKWS',
    metaDescription: 'Koppeling laten maken tussen je ERP, boekhouding, urenapp of webshop: geen dubbele invoer meer. Directe koppelingen met Syntess Atrium, Exact, Moneybird. Vanaf €500.',
    intro: 'Twee pakketten die niet met elkaar praten betekenen elke week overtypen. Een koppeling laat gegevens automatisch van het ene naar het andere systeem gaan: uren naar je ERP, werkbonnen naar je boekhouding, aanvragen van je site naar je planning. We bouwden onder meer een directe koppeling tussen Clockwise en Syntess Atrium, en een converter die urenexports omzet naar het importformaat van een ERP.',
    problemen: ['Gegevens worden met de hand overgezet', 'Fouten door overtypen', 'Pakketten hebben wel een API, maar niemand die hem aansluit', 'Een export moet elke keer bewerkt worden voor de import'],
    functies: [
      { titel: 'Via API of database', tekst: 'OAuth en REST-API’s, of rechtstreeks op de database als dat de enige weg is.' },
      { titel: 'Export omzetten', tekst: 'Een CSV of Excel uit het ene pakket automatisch omzetten naar het importformaat van het andere.' },
      { titel: 'Controle en log', tekst: 'Elke overdracht gelogd, met een melding als iets niet klopt.' },
      { titel: 'Draait vanzelf', tekst: 'Op een vast moment of direct bij een wijziging, zonder dat iemand iets hoeft te doen.' },
    ],
    cases: ['clockd', 'financieel-dashboard', 'facturatie-app'],
    prijzen: [P_TOOL, P_FASE, P_HOST],
    faq: [
      { q: 'Wat kost een koppeling laten maken?', a: 'Een eenvoudige koppeling of exportconverter kost €500 tot €1.500. Een koppeling met goedkeuring, controle en een eigen scherm valt in een eerste fase van €3.500 tot €8.000.' },
      { q: 'Met welke pakketten koppelen jullie?', a: 'Syntess Atrium, Clockwise, Exact, Moneybird, Snelstart, Mollie en alles met een API. Heeft je pakket geen API, dan kijken we naar export en import of de database.' },
      { q: 'Wat als een pakket een update krijgt?', a: 'Met onderhoud vanaf €49 per maand houden we de koppeling werkend als een pakket iets verandert.' },
    ],
  },
  {
    slug: 'ticketsysteem',
    naam: 'Ticketsysteem',
    h1: 'Ticketsysteem laten maken',
    subtitel: 'Meldingen, uren en voorraad in één.',
    metaTitle: 'Ticketsysteem op maat laten maken | Met uren en klantportaal | AKWS',
    metaDescription: 'Ticketsysteem op maat: meldingen per klant, werktijd, voorraad, assets en een klantportaal in één systeem. Gebouwd ter vervanging van Zoho Desk. Vanaf €3.500 per fase.',
    intro: 'Een standaard helpdesk regelt tickets, maar uren, voorraad en apparatuur staan dan ergens anders. Voor een IT-dienstverlener bouwden we ITflow, dat Zoho Desk verving: tickets per klant, werktijd, voorraad, assets, een kennisbank en een klantportaal in één systeem, met een dagafsluiting die de uren klaarzet voor facturatie.',
    problemen: ['Tickets, uren en voorraad staan in verschillende systemen', 'Niet terug te vinden wat er bij een klant geleverd is', 'Per gebruiker betalen voor features die je niet gebruikt', 'Uren worden na afloop nog eens overgetypt'],
    functies: [
      { titel: 'Tickets per klant', tekst: 'Status, werktijd en wat er gedaan is, met een klantportaal waar klanten zelf melden en meekijken.' },
      { titel: 'Voorraad en assets', tekst: 'Wat naar een klant gaat, gaat uit voorraad en wordt een asset met vaste naamgeving.' },
      { titel: 'Kennisbank', tekst: 'Oplossingen vastleggen zodat het team ze terugvindt.' },
      { titel: 'Uren naar facturatie', tekst: 'Een dagafsluiting zet gewerkte uren klaar in het formaat van je urensysteem.' },
    ],
    cases: ['itflow'],
    prijzen: [P_PROTO, { titel: 'Platform in fases', prijs: 'vanaf €8.000', tekst: 'Tickets, voorraad en portaal in een paar fases, elk met een vaste prijs.' }, P_HOST],
    faq: [
      { q: 'Wat kost een ticketsysteem op maat?', a: 'Een eerste fase met tickets per klant en uren ligt tussen €3.500 en €8.000. Met voorraad, assets en klantportaal erbij bouwen we het in fases, samen vanaf ongeveer €8.000.' },
      { q: 'Kan ik mijn oude tickets meenemen?', a: 'Meestal wel, via een export uit je huidige systeem. Dat bekijken we in de intake.' },
      { q: 'Betaal ik per gebruiker?', a: 'Nee. Je betaalt voor de bouw en een vast bedrag voor hosting en onderhoud, ongeacht het aantal gebruikers.' },
    ],
  },
  {
    slug: 'facturatie',
    naam: 'Facturatiesoftware',
    h1: 'Facturatiesoftware op maat laten maken',
    subtitel: 'Van uren naar betaalde factuur.',
    metaTitle: 'Facturatiesoftware op maat laten maken | Met betaallink | AKWS',
    metaDescription: 'Facturatie op maat: uren automatisch naar factuurregels, offertes omzetten naar facturen, terugkerende facturen en een iDEAL-betaallink op elke factuur.',
    intro: 'Als je facturatie afwijkt van het standaardpakket, ben je elke maand bezig met knippen en plakken. We bouwden onze eigen facturatie-app, die we dagelijks gebruiken: uren uit een export worden factuurregels, offertes worden met één klik een factuur en elke onbetaalde factuur krijgt een betaallink die vanzelf op betaald springt.',
    problemen: ['Uren handmatig omzetten naar factuurregels', 'Terugkerende facturen vergeten', 'Betalingen met de hand afvinken', 'Het boekhoudpakket past niet op hoe jij factureert'],
    functies: [
      { titel: 'Uren naar factuur', tekst: 'Een urenexport wordt automatisch factuurregels, inclusief reiskosten.' },
      { titel: 'Betaallink op de factuur', tekst: 'iDEAL-link en QR-code op de PDF en in de mail. Betaalstatus werkt zichzelf bij.' },
      { titel: 'Offertes en abonnementen', tekst: 'Offerte met één klik naar factuur, terugkerende facturen en herinneringen.' },
      { titel: 'Export voor de boekhouding', tekst: 'Jaaroverzicht met btw en een export voor je boekhouder.' },
    ],
    cases: ['facturatie-app'],
    prijzen: [P_PROTO, P_FASE, P_HOST],
    faq: [
      { q: 'Waarom geen Moneybird of Exact?', a: 'Voor de meeste bedrijven zijn die prima, en dan raden we ze aan. Maatwerk loont als je facturatie uit eigen data komt (uren, projecten, abonnementen) en je anders elke maand handwerk hebt. Vaak is een koppeling met je bestaande pakket genoeg.' },
      { q: 'Wat kost facturatiesoftware op maat?', a: 'Een eerste fase met facturen, PDF en mail ligt tussen €3.500 en €8.000. Een koppeling die uren omzet naar je bestaande pakket kan al vanaf €500.' },
      { q: 'Kan het met Mollie of een andere betaalprovider?', a: 'Ja. We hebben betaallinks gebouwd via een betaal-API; Mollie werkt op dezelfde manier.' },
    ],
  },
  {
    slug: 'klantportaal',
    naam: 'Klantportaal',
    h1: 'Klantportaal laten maken',
    subtitel: 'Klanten zien zelf hun status, documenten en meldingen.',
    metaTitle: 'Klantportaal laten maken | Meldingen, documenten en status | AKWS',
    metaDescription: 'Klantportaal op maat laten maken: klanten melden zelf, volgen de status en zien hun installaties, documenten of cijfers. Minder telefoon en mail. Vanaf €3.500 per fase.',
    intro: 'Elke "hoe staat het ervoor?"-mail kost tijd. In een klantportaal loggen klanten in, doen ze zelf een melding en zien ze de status, hun apparatuur of documenten. In ITflow zit zo’n portaal voor de klanten van een IT-dienstverlener, en voor onze eigen klanten bouwden we een portaal waar ze in gewone taal zien hoe hun website presteert.',
    problemen: ['Klanten bellen en mailen voor de status', 'Documenten en rapporten gaan los per mail', 'Meldingen komen binnen via vijf kanalen', 'Klanten zien niet wat je voor ze doet'],
    functies: [
      { titel: 'Eigen login per klant', tekst: 'Elke klant ziet alleen zijn eigen gegevens.' },
      { titel: 'Zelf melden en volgen', tekst: 'Een melding of aanvraag doen en de status volgen.' },
      { titel: 'Documenten en historie', tekst: 'Rapporten, facturen, installaties of apparatuur op één plek.' },
      { titel: 'Gekoppeld aan je systeem', tekst: 'Het portaal leest uit je eigen software of ERP, dus niets dubbel bijhouden.' },
    ],
    cases: ['itflow'],
    prijzen: [P_PROTO, P_FASE, P_HOST],
    faq: [
      { q: 'Wat kost een klantportaal?', a: 'Een portaal met login, meldingen en documenten ligt meestal tussen €3.500 en €8.000 als eerste fase. Moet het uit je ERP lezen, dan hangt het af van de koppeling.' },
      { q: 'Is het veilig?', a: 'Ja: eigen login per klant, versleutelde verbinding, en elke klant ziet alleen zijn eigen gegevens. Wachtwoorden worden nooit leesbaar opgeslagen.' },
      { q: 'Werkt het op de telefoon?', a: 'Ja, alles wordt mobiel-first gebouwd.' },
    ],
  },
  {
    slug: 'werkbon-app',
    naam: 'Werkbon-app',
    h1: 'Werkbon-app laten maken',
    subtitel: 'Werkbonnen en rapporten op de telefoon.',
    metaTitle: 'Werkbon-app laten maken voor monteurs | Op maat | AKWS',
    metaDescription: 'Digitale werkbon of rapportage-app op maat voor monteurs: foto’s, handtekening, materiaal en een PDF naar de klant, ook offline. Gekoppeld aan je administratie.',
    intro: 'Papieren werkbonnen raken kwijt, zijn onleesbaar en worden op kantoor overgetypt. Met een werkbon-app vult de monteur alles op de telefoon in, met foto’s en een handtekening, en gaat er direct een PDF naar de klant. Op dit moment bouwen we een rapportage-app voor een installatiebedrijf: onderhouds-, F-gassen- en CO-rapporten, vooringevuld met de vorige beurt.',
    problemen: ['Werkbonnen worden op kantoor overgetypt', 'Handschrift onleesbaar, foto’s los in WhatsApp', 'Materiaal wordt vergeten te factureren', 'Rapporten voor de klant kosten extra tijd'],
    functies: [
      { titel: 'Invullen op locatie', tekst: 'Werkzaamheden, uren, materiaal, foto’s en een handtekening van de klant.' },
      { titel: 'Vooringevuld', tekst: 'Klant, adres, installatie en de gegevens van de vorige beurt staan er al.' },
      { titel: 'PDF naar de klant', tekst: 'Na afronden gaat het rapport of de werkbon direct per mail.' },
      { titel: 'Offline en gekoppeld', tekst: 'Werkt zonder bereik en gaat daarna door naar je administratie.' },
    ],
    cases: ['clockd'],
    caseNoot: 'De rapportage-app voor monteurs is in ontwikkeling. Clockd laat zien hoe we eerder een offline app voor de bouwplaats met een ERP-koppeling bouwden.',
    prijzen: [P_PROTO, P_FASE, P_HOST],
    faq: [
      { q: 'Wat kost een werkbon-app?', a: 'Een eerste versie met werkbon, foto’s, handtekening en PDF ligt meestal tussen €3.500 en €8.000. Een klikbaar prototype om met je monteurs te testen kan vanaf €750.' },
      { q: 'Moet de app in de App Store?', a: 'Nee. We bouwen een web-app (PWA) die je op het beginscherm zet en die offline werkt. Geen App Store, geen updates per toestel.' },
      { q: 'Kan het naar Syntess of mijn boekhouding?', a: 'Ja, als je pakket een koppeling of import toelaat. Met Syntess Atrium hebben we al gekoppeld.' },
    ],
  },
  {
    slug: 'webapplicatie',
    naam: 'Webapplicatie',
    h1: 'Webapplicatie laten maken',
    subtitel: 'Software in de browser, voor je hele team.',
    metaTitle: 'Webapplicatie laten maken | Vaste prijs per fase | AKWS',
    metaDescription: 'Webapplicatie laten maken door een webbureau uit Baarn: login, database, rollen en koppelingen, in fases met een vaste prijs. Prototype vanaf €750, eerste fase vanaf €3.500.',
    intro: 'Een webapplicatie draait in de browser, op pc, tablet en telefoon, zonder installatie. Ideaal voor processen die nu in Excel, losse apps of papier zitten. We bouwen ze in fases: eerst een klikbaar prototype, dan een eerste werkende module, en daarna uitbreiden op basis van wat je team echt gebruikt. Alle projecten hieronder zijn webapplicaties die we gebouwd hebben.',
    problemen: ['Processen draaien op Excel-bestanden die vastlopen', 'Losse tools die niet met elkaar praten', 'Een standaardpakket dat net niet past', 'Geen overzicht voor het management'],
    functies: [
      { titel: 'Login en rollen', tekst: 'Medewerker, planner, beheerder: iedereen ziet en doet wat bij zijn rol hoort.' },
      { titel: 'Eigen database', tekst: 'Je gegevens op één plek, met back-ups en een audit-log.' },
      { titel: 'Koppelingen', tekst: 'Met je ERP, boekhouding, betaalprovider of andere software.' },
      { titel: 'Op elk apparaat', tekst: 'Mobiel-first, en waar nodig offline te gebruiken.' },
    ],
    cases: ['clockd', 'itflow', 'voorraad-app', 'financieel-dashboard', 'facturatie-app', 'urenportaal'],
    prijzen: [P_PROTO, P_FASE, { titel: 'Platform in fases', prijs: 'vanaf €8.000', tekst: 'Meerdere gekoppelde modules, elke fase een eigen vaste prijs.' }],
    faq: [
      { q: 'Wat kost een webapplicatie laten maken?', a: 'Een klikbaar prototype vanaf €750, een eerste werkende fase €3.500 tot €8.000 en een groter platform vanaf €8.000, in fases met elk een vaste prijs. Hosting en onderhoud vanaf €49 per maand.' },
      { q: 'Hoe lang duurt het?', a: 'Een prototype 1 tot 2 weken, een eerste fase 4 tot 8 weken. Je ziet elke twee weken wat er gebouwd is.' },
      { q: 'Van wie is de code?', a: 'Van jou. Je krijgt de broncode en documentatie, zodat je nooit aan ons vastzit.' },
    ],
  },
  {
    slug: 'app',
    naam: 'Bedrijfsapp',
    h1: 'App laten maken voor je bedrijf',
    subtitel: 'Op de telefoon, zonder App Store-gedoe.',
    metaTitle: 'App laten maken voor je bedrijf | Web-app op maat | AKWS',
    metaDescription: 'Een app laten maken voor je bedrijf of team: scannen, uren, werkbonnen of voorraad op de telefoon. Als web-app (PWA), werkt offline, geen App Store nodig. Vanaf €3.500.',
    intro: 'Voor een app voor je eigen team hoef je niet in de App Store. Een web-app (PWA) zet je op het beginscherm, werkt offline en krijgt updates zonder dat iemand iets hoeft te installeren. Zo bouwden we een voorraadapp waarmee je met de camera scant, en Clockd, waarmee monteurs op de bouwplaats uren boeken, ook zonder bereik.',
    problemen: ['Medewerkers werken met papier of WhatsApp', 'Een native app is duur en lastig te onderhouden', 'Bestaande apps passen niet op je werkwijze', 'Gegevens komen niet in je administratie terecht'],
    functies: [
      { titel: 'Op het beginscherm', tekst: 'Installeren via de browser, op iPhone en Android.' },
      { titel: 'Camera en scannen', tekst: 'QR- en barcodes scannen, foto’s maken en uploaden.' },
      { titel: 'Offline', tekst: 'Blijft werken zonder bereik en synct later.' },
      { titel: 'Eén versie', tekst: 'Dezelfde app op telefoon, tablet en pc. Updates gaan voor iedereen tegelijk.' },
    ],
    cases: ['voorraad-app', 'clockd', 'urenportaal'],
    prijzen: [P_PROTO, P_FASE, P_HOST],
    faq: [
      { q: 'Wat kost een app laten maken?', a: 'Een web-app met login en een eerste module ligt meestal tussen €3.500 en €8.000. Een klikbaar prototype kan vanaf €750. Een native app voor de App Store is meestal flink duurder en voor intern gebruik zelden nodig.' },
      { q: 'Werkt het op iPhone en Android?', a: 'Ja, een PWA werkt op allebei en ook op pc.' },
      { q: 'Kan het ook in de App Store?', a: 'Als dat echt nodig is, bespreken we het. Voor een app voor je eigen team is een PWA meestal sneller, goedkoper en makkelijker te onderhouden.' },
    ],
  },
];

export function soortBySlug(slug: string) {
  return SOFTWARE_SOORTEN.find((s) => s.slug === slug);
}

// ---------------------------------------------------------------------------
// Software per vak: /software-voor/[branche]

export type SoftwareVak = {
  /** "installateurs", gebruikt in titel: Software voor installateurs */
  meervoud: string;
  intro: string;
  knelpunten: string[];
  /** Slugs uit SOFTWARE_SOORTEN, meest passend eerst */
  soorten: string[];
  cases: string[];
};

const VAKKEN_BOUW: Record<string, SoftwareVak> = {
  loodgieters: {
    meervoud: 'loodgieters',
    intro: 'Een loodgietersbedrijf draait op spoedklussen, werkbonnen en materiaal dat in de bus ligt. Als werkbonnen op papier gaan en uren pas aan het eind van de week worden ingevoerd, glipt er geld tussendoor. Met een werkbon-app en urenregistratie die aansluiten op je administratie factureer je alles wat je doet, zonder avondwerk.',
    knelpunten: ['Werkbonnen op papier die op kantoor worden overgetypt', 'Materiaal uit de bus dat niet gefactureerd wordt', 'Spoedmeldingen via telefoon, mail en WhatsApp door elkaar'],
    soorten: ['werkbon-app', 'urenregistratie', 'voorraadbeheer', 'koppeling'],
    cases: ['clockd', 'voorraad-app'],
  },
  'cv-monteurs': {
    meervoud: 'cv-monteurs en installateurs',
    intro: 'Bij een cv- en klimaatbedrijf draait veel om onderhoudscontracten, periodieke beurten en wettelijke rapporten zoals F-gassen en CO. Dat is precies waar maatwerk loont: een app die de vorige beurt al invult, een rapport als PDF naar de klant stuurt en de uren doorzet naar je ERP. Die rapportage-app bouwen we op dit moment voor een installatiebedrijf.',
    knelpunten: ['Onderhoudsrapporten handmatig invullen en mailen', 'Geen overzicht van welke installatie wanneer aan de beurt is', 'Uren en materiaal dubbel invoeren in het ERP'],
    soorten: ['werkbon-app', 'urenregistratie', 'klantportaal', 'koppeling'],
    cases: ['clockd', 'financieel-dashboard'],
  },
  elektriciens: {
    meervoud: 'elektriciens',
    intro: 'Een elektrotechnisch bedrijf werkt met kasten, componenten, serienummers en keuringen. Voor een bedrijf dat groepenkasten bouwt maakten we een app waarin elke kast een eigen paspoort met QR-code heeft en het magazijn met een scanner wordt bijgehouden. Zo weet je altijd wat erin zit en wat er op voorraad ligt.',
    knelpunten: ['Niet terug te vinden wat er in een kast zit of bij wie hij hangt', 'Voorraad in Excel die nooit klopt', 'Materiaal niet toegerekend aan het project'],
    soorten: ['voorraadbeheer', 'app', 'werkbon-app', 'urenregistratie'],
    cases: ['voorraad-app', 'clockd'],
  },
  installatiebedrijven: {
    meervoud: 'installatiebedrijven',
    intro: 'De meeste installatiebedrijven werken met een ERP zoals Syntess Atrium, met daaromheen losse apps en Excel. Juist daar zit het handwerk. Voor installatiebedrijven bouwden we een urenregistratie die direct in Syntess Atrium schrijft en een financieel dashboard dat live uit dezelfde database leest. Geen vervanging van je ERP, wel de stukken die eromheen ontbreken.',
    knelpunten: ['Uren van monteurs met de hand naar het ERP', 'Marge per project pas achteraf in Excel', 'Losse apps die niet met het ERP praten'],
    soorten: ['urenregistratie', 'dashboard', 'koppeling', 'werkbon-app'],
    cases: ['clockd', 'financieel-dashboard'],
  },
  dakdekkers: {
    meervoud: 'dakdekkers',
    intro: 'Bij een dakdekker bepalen opnames, foto’s en offertes het werk. Een app waarin je op het dak foto’s en maten vastlegt en daar op kantoor direct een offerte of werkbon van maakt, scheelt dubbel werk. We hebben nog geen dakdekker als klant; de opbouw is dezelfde als bij de werkbon- en urenapps die we voor installateurs bouwden.',
    knelpunten: ['Foto’s en maten los op telefoons', 'Offertes opnieuw uittypen na een opname', 'Uren per project niet goed bijgehouden'],
    soorten: ['werkbon-app', 'urenregistratie', 'app'],
    cases: ['clockd'],
  },
  aannemers: {
    meervoud: 'aannemers en bouwbedrijven',
    intro: 'Een bouwbedrijf wil per project weten hoeveel uren en materiaal erin gaan en wat de marge is, terwijl het nog loopt. Met urenregistratie per project, een app voor de bouwplaats die offline werkt en een dashboard met marge per project zie je dat tijdens de bouw, niet pas bij de nacalculatie.',
    knelpunten: ['Uren per project pas bij de nacalculatie bekend', 'Bouwplaats zonder bereik, dus papier', 'Meerwerk dat niet wordt vastgelegd'],
    soorten: ['urenregistratie', 'dashboard', 'app', 'werkbon-app'],
    cases: ['clockd', 'financieel-dashboard'],
  },
  hoveniers: {
    meervoud: 'hoveniers',
    intro: 'Een hoveniersbedrijf combineert aanleg met vast onderhoud bij terugkerende klanten. Wie wanneer langs moet en wat er gefactureerd wordt, staat vaak in een agenda en een spreadsheet. Een eenvoudige app met onderhoudsklanten, uren per tuin en terugkerende facturen houdt dat bij zonder gedoe.',
    knelpunten: ['Onderhoudsklanten bijhouden in een spreadsheet', 'Uren per tuin niet goed gefactureerd', 'Terugkerende facturen met de hand maken'],
    soorten: ['urenregistratie', 'facturatie', 'app'],
    cases: ['facturatie-app', 'urenportaal'],
  },
  schilders: {
    meervoud: 'schilders',
    intro: 'Schildersbedrijven plannen werk ver vooruit en rekenen per project of per m². Met uren en materiaal per project, en een overzicht van wat er nog openstaat, zie je of een klus binnen de begroting blijft. Daarvoor is geen groot pakket nodig: vaak is één module met een koppeling naar je boekhouding genoeg.',
    knelpunten: ['Uren en verf per project niet bijgehouden', 'Geen zicht op of een klus binnen budget blijft', 'Facturen handmatig opgebouwd'],
    soorten: ['urenregistratie', 'dashboard', 'facturatie'],
    cases: ['urenportaal', 'financieel-dashboard'],
  },
  'transport-logistiek': {
    meervoud: 'transport- en koeriersbedrijven',
    intro: 'In transport gaat het om ritten, chauffeurs, aanvragen en snelle facturatie. Voor Zando Transport en R.I.N. bouwden we sites met een offerteflow en vacatures met sollicitaties in een eigen beheeromgeving. De volgende stap is vaak een klantportaal waar opdrachtgevers zelf aanvragen doen en de status volgen.',
    knelpunten: ['Aanvragen via telefoon, mail en WhatsApp door elkaar', 'Ritten en uren handmatig naar facturen', 'Sollicitaties die in de mailbox verdwijnen'],
    soorten: ['klantportaal', 'facturatie', 'urenregistratie', 'koppeling'],
    cases: ['itflow', 'facturatie-app'],
  },
  'zonnepanelen-laadpalen': {
    meervoud: 'zonnepanelen- en laadpaalinstallateurs',
    intro: 'Een installateur van zonnepanelen of laadpalen werkt met veel aanvragen, dakgegevens, serienummers en opleverrapporten. Een systeem dat de aanvraag, de installatie met serienummers en het opleverrapport aan elkaar koppelt, voorkomt zoekwerk bij service en garantie.',
    knelpunten: ['Serienummers en installaties niet terug te vinden', 'Opleverrapporten handmatig', 'Aanvragen uit de site die niet in de planning komen'],
    soorten: ['voorraadbeheer', 'werkbon-app', 'klantportaal', 'koppeling'],
    cases: ['voorraad-app', 'itflow'],
  },
  stukadoors: {
    meervoud: 'stukadoors en afbouwbedrijven',
    intro: 'Stukadoors en afbouwbedrijven rekenen per m² en per project, met ploegen op verschillende adressen. Uren per ploeg, materiaal per project en een eenvoudige offerte- en factuurstroom maken het verschil tussen gokken en weten wat je verdient. We bouwen liever één module die precies past dan een duur pakket waarvan je de helft niet gebruikt.',
    knelpunten: ['Uren per ploeg en per project niet scherp', 'Offertes per m² met de hand uitgerekend', 'Geen zicht op marge per klus'],
    soorten: ['urenregistratie', 'facturatie', 'dashboard', 'app'],
    cases: ['urenportaal', 'facturatie-app', 'financieel-dashboard'],
  },
  autobedrijven: {
    meervoud: 'autobedrijven en garages',
    intro: 'Een garage werkt met afspraken, werkorders, onderdelen en terugkerende klanten. Als je garagepakket niet koppelt met je site of je voorraad, ontstaat dubbel werk. Een koppeling of een kleine module eromheen, zoals online afspraken die direct in je planning komen, levert vaak meer op dan een nieuw pakket.',
    knelpunten: ['Online afspraken die met de hand worden overgenomen', 'Onderdelenvoorraad los van de werkorders', 'Klanten bellen voor de status van hun auto'],
    soorten: ['koppeling', 'voorraadbeheer', 'klantportaal'],
    cases: ['voorraad-app', 'itflow'],
  },
};

export const SOFTWARE_VAKKEN: Record<string, SoftwareVak> = {
  ...VAKKEN_BOUW,
  ...Object.fromEntries(
    MKB_DOELGROEPEN.map((m) => [m.slug, { meervoud: m.meervoud, intro: m.software.intro, knelpunten: m.software.knelpunten, soorten: m.software.soorten, cases: m.software.cases }]),
  ),
};
