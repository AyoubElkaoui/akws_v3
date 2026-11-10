// Lokale landingspagina's: /website-laten-maken/[stad]
// Elke stad heeft eigen tekst. Geen kopie met alleen de plaatsnaam gewisseld —
// dat herkent Google als doorway-pagina en het helpt een bezoeker ook niet.
// Zet hier alleen dingen in die kloppen: geen verzonnen klanten of cijfers.

export type Stad = {
  slug: string;
  naam: string;
  metaTitle: string;
  metaDescription: string;
  subtitel: string;
  lead: string;
  /** Twee alinea's over deze plaats en wat dat voor een website betekent. */
  lokaal: string[];
  /** Wijken, kernen en bedrijventerreinen: komen terug als chips. */
  gebieden: string[];
  /** Afstand vanaf Baarn, in gewone woorden. */
  afstand: string;
  /** Slug van een eigen case in of bij deze plaats (optioneel). */
  caseSlug?: string;
  caseTekst?: string;
  buurt: string[];
  faq: { q: string; a: string }[];
};

export const STEDEN: Stad[] = [
  {
    slug: 'baarn',
    naam: 'Baarn',
    metaTitle: 'Website laten maken in Baarn | Webdeveloper uit Baarn | AKWS',
    metaDescription:
      'Website laten maken in Baarn? AK Web Solutions zit zelf in Baarn. Snelle websites, lokale SEO en maatwerk software voor vakmensen en MKB. Binnen 2 weken live.',
    subtitel: 'Door een webdeveloper die zelf in Baarn woont en werkt.',
    lead: 'AK Web Solutions is gevestigd in Baarn. Zoek je iemand in het dorp die je website bouwt, vindbaar maakt en daarna bereikbaar blijft, dan hoef je niet naar een bureau in Utrecht of Amsterdam. We spreken gewoon af, bij jou op de zaak of aan de keukentafel.',
    lokaal: [
      'Baarn is een dorp waar veel werk via via gaat. Dat is prettig, tot je wilt groeien of tot een vaste klant stopt. Wie dan in Google zoekt op een loodgieter, schilder of boekhouder in Baarn, ziet een handvol bedrijven. Sta je daar niet tussen, dan besta je voor die zoeker niet. Het goede nieuws: in een plaats van deze omvang is de concurrentie in Google te overzien. Met een snelle site, een goed ingevuld Google Bedrijfsprofiel en een paar echte reviews kom je verder dan in een grote stad.',
      'Veel Baarnse bedrijven werken ook in Soest, Eemnes, Bunschoten en Hilversum. Daar houd ik rekening mee in de opbouw van je site: per dienst en per plaats waar je echt komt een eigen pagina, zodat je ook buiten het dorp gevonden wordt.',
    ],
    gebieden: ['Centrum', 'Eemdal', 'Lage Vuursche', 'Bedrijventerrein Noordschil', 'Eemnes'],
    afstand: 'Ik zit in Baarn zelf.',
    buurt: ['soest', 'hilversum', 'amersfoort'],
    faq: [
      { q: 'Kunnen we in Baarn persoonlijk afspreken?', a: 'Ja. Ik woon en werk in Baarn, dus langskomen op je bedrijf of ergens koffie drinken kan altijd. Het eerste gesprek duurt ongeveer een half uur en is vrijblijvend.' },
      { q: 'Wat kost een website laten maken in Baarn?', a: 'Dat hangt af van wat je nodig hebt: een compacte site voor een eenmanszaak is iets anders dan een site met offertemodule en koppelingen. Je krijgt vooraf een vaste prijs op maat, zodat je weet waar je aan toe bent.' },
      { q: 'Hoe snel staat mijn website live?', a: 'Een website staat binnen twee weken na akkoord op het voorstel live, mits ik je teksten en foto\'s op tijd heb. Maatwerk software gaat in fases en duurt langer.' },
      { q: 'Werk je alleen voor bedrijven uit Baarn?', a: 'Nee. De meeste klanten zitten in Midden-Nederland: Baarn, Soest, Amersfoort, het Gooi en Utrecht. Verder weg kan ook, dan overleggen we via videobellen.' },
    ],
  },
  {
    slug: 'soest',
    naam: 'Soest',
    metaTitle: 'Website laten maken in Soest | Snel live en lokaal vindbaar | AKWS',
    metaDescription:
      'Website laten maken in Soest of Soesterberg? Webdeveloper uit buurdorp Baarn. Snelle site, lokale SEO en eigen CMS. Bekijk de case van Zando Transport uit Soest.',
    subtitel: 'Vanuit buurdorp Baarn, met een klant om de hoek.',
    lead: 'Soest ligt op tien minuten van mijn werkplek in Baarn. Ik bouwde er de website van Zando Transport en ken de regio. Zoek je een website die snel laadt, goed vindbaar is in Soest en Soesterberg en die je zelf kunt bijwerken, dan zit je hier goed.',
    lokaal: [
      'Soest is langgerekt: van Soest-Zuid tot Soestdijk en daarnaast Soesterberg als aparte kern. Voor lokale vindbaarheid maakt dat uit. Iemand in Soesterberg zoekt vaak met die plaatsnaam erbij en niet met Soest. Een site die alleen Soest noemt, mist die zoekers. Daarom bouw ik per kern waar je werkt een eigen pagina met eigen tekst.',
      'Er zit veel bedrijvigheid op de terreinen langs de Koningsweg en in Soesterberg, van transport tot installatie en bouw. Veel van die bedrijven hebben een site van jaren terug die op mobiel niet meer lekker werkt. Dat is zonde, want het grootste deel van je bezoekers komt via de telefoon.',
    ],
    gebieden: ['Soest-Zuid', 'Soestdijk', 'Overhees', 'Smitsveen', 'Soesterberg', 'Soestduinen'],
    afstand: 'Ongeveer tien minuten rijden vanaf Baarn.',
    caseSlug: 'zando-transport',
    caseTekst: 'Voor spoedkoerier Zando Transport uit Soest bouwde ik een snelle website met eigen CMS, offerteflow en spoedlijn. Ze beheren diensten en teksten nu zelf.',
    buurt: ['baarn', 'amersfoort', 'hilversum'],
    faq: [
      { q: 'Heb je al eerder voor een bedrijf in Soest gewerkt?', a: 'Ja, voor Zando Transport, een spoedkoerier uit Soest. Die case staat met screenshots op deze site, zodat je kunt zien wat je krijgt.' },
      { q: 'Word ik ook gevonden in Soesterberg?', a: 'Alleen als je site daar iets over zegt. Ik maak een eigen pagina voor Soesterberg als je daar werkt, en zet je werkgebied goed in je Google Bedrijfsprofiel. Garanties op een positie geeft niemand eerlijk, maar dit is wat ervoor nodig is.' },
      { q: 'Kan ik de website daarna zelf aanpassen?', a: 'Ja, als je dat wilt bouw ik er een CMS bij. Dan pas je teksten, foto\'s en diensten zelf aan, zonder dat je mij daarvoor nodig hebt.' },
      { q: 'Kom je langs in Soest?', a: 'Ja. Het is tien minuten rijden, dus een afspraak op locatie is geen moeite.' },
    ],
  },
  {
    slug: 'amersfoort',
    naam: 'Amersfoort',
    metaTitle: 'Website laten maken in Amersfoort | Voor vakmensen en MKB | AKWS',
    metaDescription:
      'Website laten maken in Amersfoort? Freelance webdeveloper uit de regio. Snelle websites, lokale SEO per wijk en maatwerk software. Vaste prijs op maat.',
    subtitel: 'Opvallen in een stad waar je niet de enige bent.',
    lead: 'Amersfoort is groot genoeg om veel concurrenten te hebben en klein genoeg om lokaal echt het verschil te maken. Ik bouw websites voor bedrijven in Amersfoort die gevonden willen worden door mensen die nu zoeken, en niet alleen door wie je naam al kent.',
    lokaal: [
      'In Amersfoort zoek je niet alleen op de stad. Mensen typen ook Vathorst, Nieuwland of Hoogland in. Vooral in de nieuwere wijken wonen veel huishoudens die nog geen vaste installateur, schilder of hovenier hebben en alles via Google regelen. Een pagina per wijk waar je veel werkt, met tekst die over die wijk gaat, levert daar meer op dan één algemene pagina over Amersfoort.',
      'Zit je op De Isselt, De Hoef of Calveen en werk je vooral zakelijk, dan is het verhaal anders. Dan gaat het minder om spoed en meer om vertrouwen: wie ben je, voor wie werk je, hoe snel reageer je. Voor R.I.N. B.V., een koeriers- en transportbedrijf uit Amersfoort, bouwde ik daarom een zakelijke site met offerteformulier en een vacaturepagina.',
    ],
    gebieden: ['Vathorst', 'Nieuwland', 'Kattenbroek', 'Schothorst', 'Hoogland', 'Hooglanderveen', 'De Isselt', 'De Hoef', 'Calveen', 'Leusden'],
    afstand: 'Ongeveer een kwartier tot twintig minuten vanaf Baarn.',
    caseSlug: 'rin-logistiek',
    caseTekst: 'Voor R.I.N. B.V. uit Amersfoort bouwde ik een zakelijke website met eigen CMS, een offerteformulier en vacatures waar sollicitanten direct op kunnen reageren.',
    buurt: ['nijkerk', 'soest', 'baarn', 'utrecht'],
    faq: [
      { q: 'Is er in Amersfoort niet te veel concurrentie om nog gevonden te worden?', a: 'Op een brede zoekterm is het druk. Op de combinatie van jouw dienst met een wijk of een specifiek probleem veel minder. Daar begin ik: eerst de zoektermen waar je kans maakt, daarna de bredere.' },
      { q: 'Maak je ook websites voor zakelijke dienstverleners in Amersfoort?', a: 'Ja. Mijn focus ligt op vakmensen en installatiebedrijven, maar ik bouw ook voor transport, zakelijke dienstverlening en ander lokaal MKB. In het eerste gesprek zeg ik eerlijk of ik de juiste partij ben.' },
      { q: 'Kan je mijn bestaande website overnemen?', a: 'Vaak wel. Ik kijk eerst naar snelheid, mobiele weergave en techniek. Soms is opknappen genoeg, soms is opnieuw bouwen goedkoper dan blijven repareren. Dat hoor je vooraf.' },
      { q: 'Doe je ook Google Ads voor Amersfoort?', a: 'Ja. Advertenties gericht op Amersfoort en de plaatsen eromheen, met een landingspagina die bij de advertentie past. Het advertentiebudget betaal je rechtstreeks aan Google.' },
    ],
  },
  {
    slug: 'hilversum',
    naam: 'Hilversum',
    metaTitle: 'Website laten maken in Hilversum | Voor vakmensen en MKB | AKWS',
    metaDescription:
      'Website laten maken in Hilversum? Geen duur mediabureau nodig. Snelle website, lokale SEO en Google Ads voor vakmensen en MKB in Hilversum en het Gooi.',
    subtitel: 'Geen mediabureau-tarief, wel een site die werk oplevert.',
    lead: 'Hilversum zit vol bureaus, maar de meeste richten zich op media en grote merken. Heb je een installatiebedrijf, een schildersbedrijf of een andere zaak waar de telefoon moet gaan, dan heb je iets anders nodig: een snelle site, lokaal vindbaar, zonder poespas.',
    lokaal: [
      'Wie in Hilversum een vakman zoekt, kijkt naar de eerste paar resultaten in Google Maps en belt. In een plaats met zoveel huishoudens en veel oudere woningen is er het hele jaar vraag naar onderhoud, verbouw en installatiewerk. De bedrijven die bovenaan staan, zijn zelden de beste vakmensen. Het zijn degene met een compleet Google Bedrijfsprofiel, recente reviews en een site die op de telefoon direct laadt.',
      'Vanuit Hilversum werk je al snel in het hele Gooi: Bussum, Laren, Blaricum, Huizen, Loosdrecht. Dat zijn plaatsen met eigen zoekgedrag. Ik zet je site zo op dat elke plaats waar je echt werkt een eigen pagina krijgt, in plaats van één lijstje plaatsnamen onderaan.',
    ],
    gebieden: ['Centrum', 'Hilversumse Meent', 'Kerkelanden', 'Havenkwartier', 'Trompenberg', 'Loosdrecht', 'Laren', 'Blaricum'],
    afstand: 'Ongeveer een kwartier vanaf Baarn.',
    buurt: ['bussum', 'baarn', 'soest'],
    faq: [
      { q: 'Heb je al klanten in Hilversum?', a: 'Nog niet. Mijn klanten zitten nu in Soest, Amersfoort, de regio Utrecht en Amsterdam. Hilversum ligt op een kwartier van Baarn en valt gewoon in mijn werkgebied. De cases op deze site laten zien wat je kunt verwachten.' },
      { q: 'Wat is het verschil met een bureau in Hilversum?', a: 'Je werkt met één persoon die bouwt, meedenkt en zelf de telefoon opneemt. Geen accountmanager ertussen en geen uurtje-factuurtje: je krijgt vooraf een vaste prijs.' },
      { q: 'Kan je ook mijn Google Bedrijfsprofiel inrichten?', a: 'Ja. Categorieën, diensten, werkgebied, foto\'s en een simpele manier om reviews te vragen. Voor lokaal werk is dat profiel minstens zo belangrijk als de site zelf.' },
      { q: 'Hoe lang duurt het voordat ik in Google sta?', a: 'De site zelf staat binnen twee weken live. Vindbaarheid bouwt daarna op en kost meestal maanden, geen dagen. Wil je sneller aanvragen, dan is Google Ads de route die direct werkt.' },
    ],
  },
  {
    slug: 'bussum',
    naam: 'Bussum',
    metaTitle: 'Website laten maken in Bussum en Naarden | AKWS',
    metaDescription:
      'Website laten maken in Bussum of Naarden? Snelle, nette website met lokale SEO voor vakmensen en MKB in Gooise Meren. Vaste prijs op maat, binnen 2 weken live.',
    subtitel: 'Een site die past bij klanten die kritisch kijken.',
    lead: 'In Bussum en Naarden vergelijken klanten voor ze bellen. Ze bekijken je site, je foto\'s en je reviews. Een verouderde website kost je dan werk, hoe goed je ook bent. Ik bouw sites die er verzorgd uitzien, snel laden en duidelijk maken waarom iemand jou moet bellen.',
    lokaal: [
      'Bussum hoort sinds de fusie met Naarden en Muiden bij de gemeente Gooise Meren, maar niemand zoekt op die gemeentenaam. Mensen zoeken op Bussum, Naarden of Muiden. Staat op je site alleen de gemeente, of alleen één van de drie kernen, dan loop je zoekers mis. Dat los je op met eigen pagina\'s per kern.',
      'In deze plaatsen staan veel oudere en grotere woningen. Dat betekent vraag naar renovatie, schilderwerk, verduurzaming en tuinaanleg, en vaak opdrachten waar een klant meerdere offertes voor opvraagt. Laat op je site dus werk zien: foto\'s van afgeronde projecten, wat je deed en hoe het is geworden. Dat overtuigt meer dan een lijst diensten.',
    ],
    gebieden: ['Bussum-Zuid', 'Het Spiegel', 'Brediuskwartier', 'Naarden-Vesting', 'Naarden', 'Muiden'],
    afstand: 'Ongeveer twintig minuten vanaf Baarn.',
    buurt: ['hilversum', 'baarn', 'amersfoort'],
    faq: [
      { q: 'Maak je ook een pagina voor Naarden en Muiden?', a: 'Ja, als je daar werkt. Elke kern krijgt dan een eigen pagina met eigen tekst. Alleen plaatsnamen wisselen in dezelfde tekst doe ik niet, dat werkt niet in Google en ook niet bij je klant.' },
      { q: 'Kan je mijn eigen projectfoto\'s gebruiken?', a: 'Graag zelfs. Echte foto\'s van eigen werk doen het altijd beter dan stockbeeld. Ik verklein en optimaliseer ze zodat de site snel blijft.' },
      { q: 'Heb je al klanten in Bussum?', a: 'Nog niet. Ik werk vanuit Baarn en mijn huidige klanten zitten in Soest, Amersfoort, de regio Utrecht en Amsterdam. Bussum ligt op twintig minuten.' },
      { q: 'Wat als ik al een website heb?', a: 'Dan kijk ik eerst of die te redden is. Laadt hij snel, werkt hij op mobiel en kun je hem zelf bijwerken? Zo ja, dan is verbeteren vaak genoeg.' },
    ],
  },
  {
    slug: 'nijkerk',
    naam: 'Nijkerk',
    metaTitle: 'Website laten maken in Nijkerk en Hoevelaken | AKWS',
    metaDescription:
      'Website laten maken in Nijkerk, Hoevelaken of Nijkerkerveen? Snelle website en lokale SEO voor ondernemers en vakmensen. Vaste prijs op maat, korte lijnen.',
    subtitel: 'Voor ondernemers die gewoon willen dat het werkt.',
    lead: 'Nijkerk is een ondernemersplaats met veel familiebedrijven in bouw, techniek en transport. De meeste hebben werk genoeg via hun netwerk, tot ze personeel zoeken of een nieuwe markt in willen. Dan moet de website ineens wel kloppen.',
    lokaal: [
      'Nijkerk ligt op de grens van Gelderland en Utrecht, tussen Amersfoort en de Veluwe. Bedrijven hier werken daardoor in twee richtingen: Amersfoort, Bunschoten en Hoevelaken aan de ene kant, Putten, Ermelo en Barneveld aan de andere. Een site die alleen Nijkerk noemt, laat de helft van dat werkgebied liggen.',
      'Op terreinen als Arkerpoort en De Flier zitten veel bedrijven die vooral zakelijk werken. Voor hen is de website minder een aanvragenmachine en meer een visitekaartje en een wervingskanaal. Een goede vacaturepagina, met een formulier waar iemand in twee minuten op reageert, levert in deze regio vaak meer op dan nog een dienstenpagina.',
    ],
    gebieden: ['Nijkerk', 'Hoevelaken', 'Nijkerkerveen', 'Corlaer', 'Arkerpoort', 'De Flier', 'Bunschoten-Spakenburg'],
    afstand: 'Ongeveer vijfentwintig minuten vanaf Baarn.',
    buurt: ['amersfoort', 'baarn', 'soest'],
    faq: [
      { q: 'Kan je een vacaturepagina met sollicitatieformulier bouwen?', a: 'Ja. Dat heb ik voor een transportbedrijf in Amersfoort gedaan: vacatures die ze zelf beheren en sollicitaties met cv die direct in de mailbox komen.' },
      { q: 'Werk je ook voor bedrijven in Hoevelaken en Nijkerkerveen?', a: 'Ja, de hele gemeente Nijkerk en de plaatsen eromheen. Voor een gesprek kom ik langs of we bellen, wat jou het beste uitkomt.' },
      { q: 'Heb je al klanten in Nijkerk?', a: 'Nog niet. De dichtstbijzijnde klanten zitten in Amersfoort en Soest. Nijkerk ligt op ongeveer vijfentwintig minuten van Baarn.' },
      { q: 'Wat kost een website?', a: 'Dat hangt af van de omvang. Je krijgt na het eerste gesprek een voorstel met een vaste prijs, zonder meerwerk achteraf.' },
    ],
  },
  {
    slug: 'utrecht',
    naam: 'Utrecht',
    metaTitle: 'Website laten maken in Utrecht | Lokale SEO per wijk | AKWS',
    metaDescription:
      'Website laten maken in Utrecht? Freelance webdeveloper met ervaring in lokale SEO voor de regio Utrecht. Snelle websites voor vakmensen en MKB. Vaste prijs op maat.',
    subtitel: 'In een grote stad win je op wijk en dienst, niet op de stadsnaam.',
    lead: 'In Utrecht is de concurrentie in Google stevig. Wie op een brede term bovenaan wil staan, heeft een lange adem nodig. Slimmer is beginnen waar je kans maakt: jouw dienst, in de wijken en plaatsen waar je echt rijdt. Zo heb ik het ook voor een loodgieter uit de regio aangepakt.',
    lokaal: [
      'Utrecht is geen enkele markt. Leidsche Rijn en Vleuten-De Meern zijn jonge wijken met andere vragen dan Wittevrouwen of Lombok, waar oude huizen staan met oude leidingen en houten kozijnen. En rond de stad liggen Maarssen, Nieuwegein, Houten, De Bilt en Zeist, elk met eigen zoekgedrag. Een site die dat onderscheid maakt, wordt beter gevonden en spreekt de bezoeker ook beter aan.',
      'Voor AD Loodgietersbedrijf uit Maarssen bouwde ik een site met een pagina per dienst en acht lokale plaatspagina\'s voor Utrecht en omgeving. Op de homepage kiest een bezoeker zijn klacht en komt direct bij de juiste dienst uit. Dat soort opbouw werkt voor elk bedrijf dat in en rond Utrecht op locatie werkt.',
    ],
    gebieden: ['Leidsche Rijn', 'Vleuten-De Meern', 'Overvecht', 'Zuilen', 'Lombok', 'Wittevrouwen', 'Lage Weide', 'Maarssen', 'Nieuwegein', 'De Bilt'],
    afstand: 'Ongeveer een half uur vanaf Baarn.',
    caseSlug: 'ad-loodgietersbedrijf',
    caseTekst: 'Voor AD Loodgietersbedrijf uit Maarssen bouwde ik een nieuwe site met klachtenkiezer, een pagina per dienst en lokale pagina\'s voor Utrecht en de plaatsen eromheen.',
    buurt: ['amersfoort', 'baarn', 'hilversum'],
    faq: [
      { q: 'Kan ik in Utrecht nog bovenaan komen in Google?', a: 'Op een brede term als alleen je beroep plus Utrecht is dat een kwestie van lange adem. Op je dienst in combinatie met een wijk of buurgemeente gaat het sneller. Ik beloof geen posities, wel een opbouw die daar de beste kans op geeft.' },
      { q: 'Heb je ervaring met lokale SEO in de regio Utrecht?', a: 'Ja, voor AD Loodgietersbedrijf uit Maarssen. Die site heeft een pagina per dienst en acht plaatspagina\'s voor Utrecht en omgeving. De case staat op deze site.' },
      { q: 'Je zit in Baarn, is dat niet ver?', a: 'Het is een half uur rijden. Voor een kennismaking kom ik langs; daarna gaat het meeste via mail, telefoon en WhatsApp, dat werkt voor de meeste ondernemers het snelst.' },
      { q: 'Bouw je ook maatwerk software voor Utrechtse bedrijven?', a: 'Ja. Urenregistratie, planning, ticketsystemen en koppelingen met boekhoud- of ERP-pakketten. Dat gaat in fases, met na elke fase iets dat je kunt gebruiken.' },
    ],
  },
];

export function stadBySlug(slug: string): Stad | undefined {
  return STEDEN.find((s) => s.slug === slug);
}
