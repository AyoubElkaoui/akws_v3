// Dienst × plaats landingspagina's: /maatwerk-software/[stad] en /lokale-seo/[stad].
// Alleen plaatsen met een eigen lokale alinea krijgen een pagina (geen doorway-pagina's
// waarin alleen de plaatsnaam wisselt). Geen verzonnen klanten of cijfers.

export type DienstKey = 'maatwerk-software' | 'lokale-seo';

export type DienstLocatie = {
  key: DienstKey;
  /** URL-basis, bv. /maatwerk-software */
  base: string;
  naam: string;
  /** Hoofdpagina van de dienst */
  dienstHref: string;
  chip: string;
  h1: (stad: string) => string;
  subtitel: (stad: string) => string;
  metaTitle: (stad: string) => string;
  metaDescription: (stad: string) => string;
  /** Per stad een eigen alinea over deze dienst in die plaats. */
  lokaal: Record<string, string>;
  blokken: { titel: string; tekst: string }[];
  prijzen: { titel: string; prijs: string; tekst: string }[];
  /** Filter voor cases die bij deze dienst passen (op CASES.meta). */
  caseMeta: string[];
  faq: (stad: string) => { q: string; a: string }[];
};

export const MAATWERK_SOFTWARE: DienstLocatie = {
  key: 'maatwerk-software',
  base: '/maatwerk-software',
  naam: 'Maatwerk software',
  dienstHref: '/diensten/maatwerk-software',
  chip: 'Maatwerk software',
  h1: (s) => `Maatwerk software in ${s}`,
  subtitel: () => 'Software die past bij hoe jouw bedrijf werkt.',
  metaTitle: (s) => `Maatwerk software laten maken in ${s} | Freelance developer | AKWS`,
  metaDescription: (s) =>
    `Maatwerk software laten maken in ${s}? Urenregistratie, voorraad, dashboards en koppelingen met je ERP of boekhouding. Prototype vanaf €750, eerste fase vanaf €3.500.`,
  lokaal: {
    baarn:
      'Ik zit zelf in Baarn, dus een procesanalyse doe ik gewoon bij jou op de zaak. Juist bij kleinere bedrijven in het dorp zie ik hetzelfde patroon: uren op briefjes of in Excel, een planning op het whiteboard en een boekhouder die elke maand alles moet overtypen. Daar is vaak geen groot systeem voor nodig, wel een paar slimme schermen die precies doen wat jij nodig hebt.',
    soest:
      'In Soest en Soesterberg zitten veel bedrijven in transport, installatie en bouw, met mensen die de hele dag onderweg zijn. Voor hen moet software werken op een telefoon, met een paar tikken: uren boeken, een werkbon afronden, een foto toevoegen. Dat is precies het soort tool dat ik bouw, en Soest ligt op tien minuten van mijn werkplek.',
    amersfoort:
      'Amersfoort heeft veel groeiende MKB-bedrijven die tegen de grenzen van Excel en losse pakketten aanlopen. Vaak is er al een boekhoudpakket of ERP, maar sluit het niet aan op hoe het team werkt. Dan bouw ik er iets naast dat er rechtstreeks mee praat, zoals een dashboard dat cijfers live uit de database haalt of een urenmodule die direct in het ERP boekt.',
    hilversum:
      'In Hilversum en het Gooi werk ik vooral voor bedrijven die meer willen dan een website: een klantportaal waar klanten zelf meldingen doen, een planning die het hele team ziet of een koppeling tussen twee pakketten die niet met elkaar praten. Je werkt met één developer die het bouwt én onderhoudt, zonder bureau-tarieven.',
    utrecht:
      'In de regio Utrecht zitten veel IT-dienstverleners, installateurs en zakelijke dienstverleners met processen die niet in een standaardpakket passen. Voor een IT-dienstverlener bouwde ik een ticket- en urenplatform dat Zoho Desk verving, met voorraad, assets en een klantportaal in één systeem. Dat soort maatwerk werkt ook voor andere bedrijven in en rond Utrecht.',
    nijkerk:
      'Nijkerk heeft veel familiebedrijven in bouw, techniek en productie. Daar zie ik vaak dat de kennis in een paar hoofden en een paar Excel-bestanden zit. Software die vastlegt wat er per project, kast of klus gebeurt, met een QR-code of barcode op de werkvloer, maakt dat overdraagbaar en scheelt zoekwerk.',
    zeist:
      'In Zeist en omgeving werk ik voor bedrijven die hun administratie, planning of klantcontact slimmer willen regelen zonder een duur softwarepakket met tien modules die ze niet gebruiken. Ik begin met een klikbaar prototype, zodat je eerst ziet hoe het werkt voordat er gebouwd wordt.',
  },
  blokken: [
    { titel: 'Urenregistratie & planning', tekst: 'Uren per klant of project, op telefoon of pc, met goedkeuring door de manager en export naar je ERP of facturatie.' },
    { titel: 'Voorraad & werkbonnen', tekst: 'Materiaal scannen met een barcode of QR-code, werkbonnen met foto\'s en handtekening, minimumvoorraad met een seintje als iets bijna op is.' },
    { titel: 'Dashboards', tekst: 'Omzet, marge en openstaande facturen live uit je bestaande database, met doorklikken tot op factuurregel.' },
    { titel: 'Koppelingen', tekst: 'Met boekhoud- en ERP-pakketten zoals Exact, Snelstart, Moneybird of Syntess, zodat niemand meer hoeft over te typen.' },
  ],
  prijzen: [
    { titel: 'Klikbaar prototype', prijs: 'vanaf €750', tekst: 'Alle schermen om te proberen, voordat er gebouwd wordt.' },
    { titel: 'Eerste fase web-app', prijs: '€3.500 – €8.000', tekst: 'Een werkende module met login en database, in 4 tot 8 weken.' },
    { titel: 'Hosting & onderhoud', prijs: 'vanaf €49 p/m', tekst: 'Database, back-ups, updates en monitoring. Uitbreidingen €85 per uur.' },
  ],
  caseMeta: ['Maatwerk software'],
  faq: (s) => [
    { q: `Kom je voor een procesanalyse langs in ${s}?`, a: 'Ja. Ik kijk het liefst mee op de plek waar het werk gebeurt, want daar zie je waar het vastloopt. Het eerste gesprek is gratis en duurt ongeveer een half uur.' },
    { q: 'Wat kost maatwerk software?', a: 'Een klikbaar prototype begint bij €750, een eerste werkende fase ligt meestal tussen €3.500 en €8.000. Grotere systemen bouw ik in fases met elk een vaste prijs. Hosting en onderhoud vanaf €49 per maand.' },
    { q: 'Is een bestaand pakket niet goedkoper?', a: 'Soms wel, en dan zeg ik dat. Maatwerk loont als je maand na maand tijd verliest aan dubbel invoeren of aan een pakket dat niet past bij hoe je werkt.' },
    { q: 'Ben ik eigenaar van de software?', a: 'Ja. Je krijgt de code en de data. Stop je met mij, dan kan een andere developer verder.' },
  ],
};

export const LOKALE_SEO: DienstLocatie = {
  key: 'lokale-seo',
  base: '/lokale-seo',
  naam: 'Lokale SEO & Google Ads',
  dienstHref: '/diensten/seo-en-google-ads',
  chip: 'Lokale SEO',
  h1: (s) => `Lokale SEO in ${s}`,
  subtitel: (s) => `Gevonden worden door mensen die in ${s} zoeken.`,
  metaTitle: (s) => `SEO in ${s} | Lokaal beter gevonden worden in Google | AKWS`,
  metaDescription: (s) =>
    `Beter gevonden worden in Google in ${s}? Lokale SEO, Google Bedrijfsprofiel en Google Ads voor vakmensen en MKB. Pagina's vanaf €149, Ads-beheer €195 per maand.`,
  lokaal: {
    baarn:
      'In Baarn is de concurrentie in Google te overzien. Voor veel zoekopdrachten, zoals een beroep met Baarn erachter, staan er maar een paar bedrijven met een goede site en een compleet bedrijfsprofiel. Met een pagina per dienst, nette structured data en een handvol echte reviews kom je hier relatief snel in beeld. En omdat ik zelf in Baarn zit, ken ik ook de kernen eromheen, zoals Lage Vuursche en Eemnes.',
    soest:
      'Soest is langgerekt en Soesterberg is een aparte kern. Wie daar zoekt, typt vaak Soesterberg in en niet Soest. Een site die alleen Soest noemt, mist die zoekers. Ik zet per kern waar je werkt een eigen pagina op en richt je bedrijfsprofiel in met het juiste werkgebied, zodat je in beide plaatsen meedoet.',
    amersfoort:
      'In Amersfoort is het druk op brede zoektermen, maar op een dienst met een wijk erbij, zoals Vathorst, Nieuwland of Hoogland, veel minder. Daar begin ik: de zoektermen waar je op korte termijn kans maakt. Wil je sneller aanvragen, dan zet ik daarnaast een Google Ads-campagne op die alleen in jouw werkgebied draait.',
    hilversum:
      'Wie in Hilversum een vakman zoekt, kijkt eerst naar de kaart in Google en belt een van de eerste drie. Wie daar staat, heeft meestal een compleet bedrijfsprofiel, recente reviews en een site die op mobiel snel laadt. Dat zijn precies de dingen die ik inricht, voor Hilversum en voor de plaatsen in het Gooi waar je werkt.',
    bussum:
      'Bussum, Naarden en Muiden vallen onder Gooise Meren, maar niemand zoekt op die gemeentenaam. Ik maak per kern een eigen pagina en zorg dat je bedrijfsprofiel en site hetzelfde werkgebied noemen. Omdat klanten hier vaak vergelijken, krijgen je dienstpagina\'s ook projectfoto\'s en een duidelijke uitleg, zodat ze na het zoeken ook bellen.',
    utrecht:
      'In Utrecht win je niet op de stadsnaam maar op dienst en wijk. Voor AD Loodgietersbedrijf bouwde ik pagina\'s per dienst en per plaats in de regio Utrecht. Na livegang in oktober 2026 gingen de vertoningen in Google van zo’n 100 naar bijna 500 per dag, en de site staat op pagina 1 voor meerdere plaatsen. Diezelfde opbouw gebruik ik voor andere vakmensen in en rond Utrecht.',
    nijkerk:
      'Bedrijven in Nijkerk werken vaak twee kanten op: richting Amersfoort en Hoevelaken, en richting Putten en Barneveld. Een site die alleen Nijkerk noemt, laat de helft liggen. Ik breng in kaart in welke plaatsen je werkt en waar mensen op zoeken, en bouw daar pagina\'s voor met eigen tekst.',
    zeist:
      'Rond Zeist hebben Den Dolder, Huis ter Heide en Austerlitz elk hun eigen zoekers. Voor dure klussen als renovatie of tuinaanleg vergelijken mensen hier meerdere bedrijven. Goede lokale SEO zorgt dat je in die vergelijking zit; projectfoto\'s en reviews op je site zorgen dat ze daarna voor jou kiezen.',
    maarssen:
      'Maarssen is waar mijn bekendste SEO-case vandaan komt: AD Loodgietersbedrijf. Met pagina\'s per dienst en plaats, structured data en een opgeschoond bedrijfsprofiel staat de site nu op pagina 1 voor onder meer "loodgieter Maarssen". Voor andere bedrijven in Stichtse Vecht, van Breukelen tot Maarssenbroek, werkt dezelfde aanpak.',
  },
  blokken: [
    { titel: 'Pagina per dienst en plaats', tekst: 'Een eigen pagina voor elke combinatie die ertoe doet, met eigen tekst. Geen kopie waarin alleen de plaatsnaam wisselt.' },
    { titel: 'Google Bedrijfsprofiel', tekst: 'Categorieën, diensten, werkgebied, foto\'s van echt werk en een simpele manier om reviews te vragen.' },
    { titel: 'Techniek op orde', tekst: 'Snelle laadtijd, structured data, nette titels, een sitemap en doorverwijzingen van oude pagina\'s, zodat Google snapt wat je doet en waar.' },
    { titel: 'Google Ads als het sneller moet', tekst: 'Advertenties alleen in jouw werkgebied, met een landingspagina per dienst en meting van telefoontjes en aanvragen.' },
  ],
  prijzen: [
    { titel: 'Extra dienst- of plaatspagina', prijs: '€149 per pagina', tekst: 'Eigen tekst, structured data en interne links.' },
    { titel: 'Google Bedrijfsprofiel inrichten', prijs: '€195 eenmalig', tekst: 'Compleet ingericht, met reviewlink en werkgebied.' },
    { titel: 'Google Ads beheer', prijs: '€195 p/m', tekst: 'Opzet €395 eenmalig op een bestaande site. Advertentiebudget apart.' },
  ],
  caseMeta: ['Website + lokale SEO'],
  faq: (s) => [
    { q: `Kan je garanderen dat ik bovenaan kom in ${s}?`, a: 'Nee, en wie dat wel belooft, kan het niet waarmaken. Wat ik wel doe: de dingen die daar aantoonbaar voor nodig zijn, en meten wat het oplevert in Search Console.' },
    { q: 'Hoe lang duurt het voordat ik resultaat zie?', a: 'De eerste verbeteringen zie je meestal binnen een paar weken tot maanden. Bij AD Loodgieters (live in oktober) waren de vertoningen in november bijna vervijfvoudigd, maar dat verschilt per branche en concurrentie. Google Ads werkt direct.' },
    { q: 'Wat kost lokale SEO?', a: 'Extra pagina\'s kosten €149 per stuk, een Google Bedrijfsprofiel inrichten €195 eenmalig. Bij een nieuwe website zit een lokale SEO-basis er al in (vanaf €1.495). Google Ads-beheer is €195 per maand plus je advertentiebudget.' },
    { q: 'Kan je ook op mijn bestaande site werken?', a: 'Vaak wel. Ik begin met een audit van snelheid, techniek en inhoud. Soms is aanvullen genoeg, soms is een nieuwe site goedkoper dan blijven repareren. Dat hoor je vooraf.' },
  ],
};

export const DIENST_LOCATIES = [MAATWERK_SOFTWARE, LOKALE_SEO];

export function dienstSteden(d: DienstLocatie): string[] {
  return Object.keys(d.lokaal);
}
