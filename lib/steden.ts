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
    metaTitle: 'Website laten maken in Baarn | Webdesign, webshop & SEO | AKWS',
    metaDescription:
      'Website laten maken in Baarn? AK Web Solutions zit zelf in Baarn. Snelle websites, lokale SEO en maatwerk software voor vakmensen en MKB. Vanaf €1.495.',
    subtitel: 'Door een webdeveloper die zelf in Baarn woont en werkt.',
    lead: 'AK Web Solutions is gevestigd in Baarn. Zoek je iemand in het dorp die je website bouwt, vindbaar maakt en daarna bereikbaar blijft, dan hoef je niet naar een bureau in Utrecht of Amsterdam. We spreken gewoon af, bij jou op de zaak of aan de keukentafel.',
    lokaal: [
      'Baarn is een dorp waar veel werk via via gaat. Dat is prettig, tot je wilt groeien of tot een vaste klant stopt. Wie dan in Google zoekt op een loodgieter, schilder of boekhouder in Baarn, ziet een handvol bedrijven. Sta je daar niet tussen, dan besta je voor die zoeker niet. Het goede nieuws: in een plaats van deze omvang is de concurrentie in Google te overzien. Met een snelle site, een goed ingevuld Google Bedrijfsprofiel en een paar echte reviews kom je verder dan in een grote stad.',
      'Niet elk Baarns bedrijf heeft hetzelfde nodig. Een winkel in de Laanstraat of op de Brink wil vaak een webshop, zodat klanten ook ’s avonds kunnen bestellen of reserveren. Een vakman wil vooral gebeld worden. Een kantoor wil er betrouwbaar uitzien en vindbaar zijn op zijn specialisme. Ik doe het webdesign, de bouw van de site of webshop en de SEO zelf, dus je hebt één aanspreekpunt in Baarn in plaats van drie partijen.',
      'Veel Baarnse bedrijven werken ook in Soest, Eemnes, Bunschoten en Hilversum. Daar houd ik rekening mee in de opbouw van je site: per dienst en per plaats waar je echt komt een eigen pagina, zodat je ook buiten het dorp gevonden wordt.',
    ],
    gebieden: ['Centrum', 'Eemdal', 'Lage Vuursche', 'Bedrijventerrein Noordschil', 'Eemnes'],
    afstand: 'Ik zit in Baarn zelf.',
    buurt: ['eemnes', 'soest', 'hilversum', 'amersfoort'],
    faq: [
      { q: 'Kunnen we in Baarn persoonlijk afspreken?', a: 'Ja. Ik woon en werk in Baarn, dus langskomen op je bedrijf of ergens koffie drinken kan altijd. Het eerste gesprek duurt ongeveer een half uur en is vrijblijvend.' },
      { q: 'Wat kost een website laten maken in Baarn?', a: 'Dat hangt af van wat je nodig hebt: een compacte site voor een eenmanszaak is iets anders dan een site met offertemodule en koppelingen. Een compacte site begint bij €1.495, een uitgebreide site zit meestal tussen €2.000 en €3.500. Je krijgt vooraf een vaste prijs, zodat je weet waar je aan toe bent.' },
      { q: 'Hoe snel staat mijn website live?', a: 'Reken op drie tot vier weken van akkoord tot livegang, met elke week een demo. Dat lukt als ik je teksten en foto\'s op tijd heb. Maatwerk software gaat in fases en duurt langer.' },
      { q: 'Kan ik in Baarn ook een webshop laten maken?', a: 'Ja. Voor winkels en ondernemers die online verkopen bouw ik webshops met betalen via iDEAL, voorraad en verzendopties. Hoeveel producten je hebt en welke koppelingen je nodig hebt bepaalt de prijs; die hoor je vooraf in een vaste offerte.' },
      { q: 'Doe je ook SEO voor bedrijven in Baarn?', a: 'Ja. Elke site die ik bouw is technisch klaar voor Google. Daarnaast kan ik je Google Bedrijfsprofiel inrichten, pagina’s per dienst en plaats schrijven en je helpen aan reviews. In Baarn is de concurrentie in Google klein, dus dat werkt hier sneller dan in een stad.' },
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
    buurt: ['leusden', 'nijkerk', 'soest', 'bunschoten-spakenburg'],
    faq: [
      { q: 'Is er in Amersfoort niet te veel concurrentie om nog gevonden te worden?', a: 'Op een brede zoekterm is het druk. Op de combinatie van jouw dienst met een wijk of een specifiek probleem veel minder. Daar begin ik: eerst de zoektermen waar je kans maakt, daarna de bredere.' },
      { q: 'Maak je ook websites voor zakelijke dienstverleners in Amersfoort?', a: 'Ja. Ik bouw voor het hele MKB, van vakmensen en transport tot advies- en administratiekantoren. In het eerste gesprek zeg ik eerlijk of ik de juiste partij ben.' },
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
      { q: 'Hoe lang duurt het voordat ik in Google sta?', a: 'De site zelf staat binnen drie tot vier weken live. Vindbaarheid bouwt daarna op en kost meestal maanden, geen dagen. Wil je sneller aanvragen, dan is Google Ads de route die direct werkt.' },
    ],
  },
  {
    slug: 'bussum',
    naam: 'Bussum',
    metaTitle: 'Website laten maken in Bussum en Naarden | AKWS',
    metaDescription:
      'Website laten maken in Bussum of Naarden? Snelle, nette website met lokale SEO voor vakmensen en MKB in Gooise Meren. Vanaf €1.495, vaste prijs vooraf.',
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
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site; met meer pagina\'s of een vacaturemodule meestal €2.000 tot €3.500. Na het eerste gesprek krijg je een vaste prijs, zonder meerwerk achteraf.' },
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
    buurt: ['maarssen', 'de-bilt', 'zeist', 'amersfoort'],
    faq: [
      { q: 'Kan ik in Utrecht nog bovenaan komen in Google?', a: 'Op een brede term als alleen je beroep plus Utrecht is dat een kwestie van lange adem. Op je dienst in combinatie met een wijk of buurgemeente gaat het sneller. Ik beloof geen posities, wel een opbouw die daar de beste kans op geeft.' },
      { q: 'Heb je ervaring met lokale SEO in de regio Utrecht?', a: 'Ja, voor AD Loodgietersbedrijf uit Maarssen. Die site heeft een pagina per dienst en acht plaatspagina\'s voor Utrecht en omgeving. De case staat op deze site.' },
      { q: 'Je zit in Baarn, is dat niet ver?', a: 'Het is een half uur rijden. Voor een kennismaking kom ik langs; daarna gaat het meeste via mail, telefoon en WhatsApp, dat werkt voor de meeste ondernemers het snelst.' },
      { q: 'Bouw je ook maatwerk software voor Utrechtse bedrijven?', a: 'Ja. Urenregistratie, planning, ticketsystemen en koppelingen met boekhoud- of ERP-pakketten. Dat gaat in fases, met na elke fase iets dat je kunt gebruiken.' },
    ],
  },
  {
    slug: 'eemnes',
    naam: 'Eemnes',
    metaTitle: 'Website laten maken in Eemnes | Webdeveloper uit buurdorp Baarn | AKWS',
    metaDescription:
      'Website laten maken in Eemnes? Webdeveloper uit Baarn, vijf minuten verderop. Snelle website, lokale SEO en Google Bedrijfsprofiel voor vakmensen en MKB. Vanaf €1.495.',
    subtitel: 'Vijf minuten van mijn werkplek, dus gewoon even langs.',
    lead: 'Eemnes ligt direct naast Baarn. Veel ondernemers hier werken in het hele Gooi en Eemland, maar worden online alleen gevonden door wie hun naam al kent. Ik bouw sites die laten zien wat je doet en waar je werkt, zodat ook nieuwe klanten je vinden.',
    lokaal: [
      'Eemnes is klein, en dat werkt in je voordeel. Op een zoekopdracht als "schilder Eemnes" of "installateur Eemnes" zijn maar weinig bedrijven echt goed zichtbaar. Een snelle site met een duidelijke pagina per dienst en een volledig Google Bedrijfsprofiel maakt hier al snel het verschil.',
      'Tegelijk zit bijna niemand in Eemnes alleen voor Eemnes te werken. Je klanten wonen ook in Baarn, Laren, Blaricum en Huizen, en een deel zoekt met die plaatsnaam. Die plaatsen krijgen op je site een eigen pagina met eigen tekst, in plaats van een rijtje namen in de footer.',
    ],
    gebieden: ['Eemnes-Dorp', 'Eemnes-Buiten', 'Zuidpolder', 'Laren', 'Blaricum'],
    afstand: 'Ongeveer vijf minuten vanaf Baarn.',
    buurt: ['baarn', 'huizen', 'hilversum'],
    faq: [
      { q: 'Kom je langs in Eemnes?', a: 'Ja, het is vijf minuten rijden. Een eerste gesprek van een half uur bij jou op de zaak is geen enkele moeite.' },
      { q: 'Heeft een website in een klein dorp zin?', a: 'Juist wel. Mensen zoeken ook in een dorp eerst in Google voordat ze bellen. Omdat er minder concurrentie is, kom je met een goede site en een compleet bedrijfsprofiel sneller in beeld dan in een stad.' },
      { q: 'Wat kost een website?', a: 'Een compacte site begint bij €1.495, met meer pagina\'s of een CMS zit je meestal tussen €2.000 en €3.500. Hosting en onderhoud kost €49 per maand. Je krijgt vooraf een vaste prijs.' },
      { q: 'Heb je al klanten in Eemnes?', a: 'Nog niet. Mijn klanten zitten in Soest, Amersfoort, de regio Utrecht en Amsterdam. De cases op deze site laten zien wat je kunt verwachten.' },
    ],
  },
  {
    slug: 'bunschoten-spakenburg',
    naam: 'Bunschoten-Spakenburg',
    metaTitle: 'Website laten maken in Bunschoten-Spakenburg | AKWS',
    metaDescription:
      'Website laten maken in Bunschoten of Spakenburg? Snelle website met lokale SEO voor ondernemers, bouw en installatie. Webdeveloper uit Baarn, vaste prijs vanaf €1.495.',
    subtitel: 'Voor ondernemers die het meeste werk via via krijgen.',
    lead: 'In Bunschoten-Spakenburg kent iedereen elkaar en gaat veel werk via de kerk, de club of de buren. Dat is een sterke basis. Maar wie personeel zoekt, buiten de gemeente wil werken of een nieuwe dienst begint, heeft een website nodig die het verhaal net zo goed vertelt als je klanten.',
    lokaal: [
      'Er zitten hier opvallend veel bedrijven in bouw, installatie, transport en handel, vaak familiebedrijven die al generaties bestaan. Hun website is vaak jaren oud en laat dat ook zien. Een nieuwe site hoeft niet ingewikkeld te zijn: duidelijk wat je doet, foto\'s van echt werk, een makkelijk formulier en een vacaturepagina waar iemand in twee minuten op reageert.',
      'Mensen zoeken op Bunschoten én op Spakenburg, en ook op Eemdijk. Werk je daarnaast veel in Amersfoort, Nijkerk of Baarn, dan krijgen die plaatsen een eigen pagina. Zo word je gevonden door wie nog niet in je netwerk zit.',
    ],
    gebieden: ['Bunschoten', 'Spakenburg', 'Eemdijk', 'Haarbrug', 'Amersfoort-Noord'],
    afstand: 'Ongeveer twintig minuten vanaf Baarn.',
    buurt: ['amersfoort', 'nijkerk', 'baarn'],
    faq: [
      { q: 'Kan je ook een vacaturepagina bouwen?', a: 'Ja. Voor een transportbedrijf in Amersfoort bouwde ik vacatures die ze zelf beheren, met een sollicitatieformulier waar het cv direct in de mailbox binnenkomt.' },
      { q: 'Moet ik dan zelf teksten schrijven?', a: 'Nee. Ik schrijf de teksten op basis van een gesprek met jou. Jij leest mee en past aan waar het niet klopt.' },
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site, meestal €2.000 tot €3.500 met meer pagina\'s of een vacaturemodule. Je krijgt vooraf een vaste prijs.' },
      { q: 'Heb je al klanten in Bunschoten-Spakenburg?', a: 'Nog niet. De dichtstbijzijnde klanten zitten in Amersfoort en Soest.' },
    ],
  },
  {
    slug: 'zeist',
    naam: 'Zeist',
    metaTitle: 'Website laten maken in Zeist | Voor vakmensen en MKB | AKWS',
    metaDescription:
      'Website laten maken in Zeist, Den Dolder of Huis ter Heide? Snelle website, lokale SEO en maatwerk software voor vakmensen en MKB. Vaste prijs vanaf €1.495.',
    subtitel: 'Een nette site voor klanten die eerst rondkijken.',
    lead: 'Zeist heeft veel grotere en oudere woningen, en klanten die eerst rondkijken voordat ze iemand bellen. Ze vergelijken sites, foto\'s en reviews. Ik bouw een website die er verzorgd uitziet, snel laadt en in één oogopslag laat zien waarom ze jou moeten hebben.',
    lokaal: [
      'Rond Zeist zoeken mensen niet alleen op de plaatsnaam. Den Dolder, Huis ter Heide, Austerlitz en Bosch en Duin hebben elk hun eigen zoekers, en die vinden een site die alleen Zeist noemt vaak niet. Werk je in die kernen, dan krijgen ze een eigen pagina met tekst die over die plek gaat.',
      'Veel opdrachten in deze regio gaan over renovatie, verduurzaming, tuin en onderhoud aan grotere huizen. Dat zijn klussen waar een klant meerdere offertes opvraagt. Wat dan helpt: projectfoto\'s met een korte uitleg, een duidelijke werkwijze en een offerteformulier dat de juiste vragen stelt, zodat je niet eerst drie keer hoeft te bellen.',
    ],
    gebieden: ['Zeist-Centrum', 'Kerckebosch', 'Vollenhove', 'Den Dolder', 'Huis ter Heide', 'Austerlitz', 'Bosch en Duin'],
    afstand: 'Ongeveer vijfentwintig minuten vanaf Baarn.',
    buurt: ['de-bilt', 'utrecht', 'soest'],
    faq: [
      { q: 'Maak je ook pagina\'s voor Den Dolder en Huis ter Heide?', a: 'Ja, als je daar werkt. Elke kern krijgt een eigen pagina met eigen tekst. Alleen de plaatsnaam wisselen in dezelfde tekst doe ik niet, dat helpt in Google niet en overtuigt ook je klant niet.' },
      { q: 'Kan ik mijn eigen projectfoto\'s gebruiken?', a: 'Graag. Echte foto\'s van eigen werk doen het beter dan stockbeeld. Ik verklein ze zodat de site snel blijft.' },
      { q: 'Wat kost een website in Zeist?', a: 'Een compacte site begint bij €1.495, een site met pagina\'s per dienst en kern meestal €2.000 tot €3.500. Je weet vooraf wat je betaalt.' },
      { q: 'Heb je al klanten in Zeist?', a: 'Nog niet. Ik werk vanuit Baarn en heb klanten in Soest, Amersfoort, de regio Utrecht en Amsterdam.' },
    ],
  },
  {
    slug: 'leusden',
    naam: 'Leusden',
    metaTitle: 'Website laten maken in Leusden en Achterveld | AKWS',
    metaDescription:
      'Website laten maken in Leusden of Achterveld? Snelle website met lokale SEO voor vakmensen en MKB, naast Amersfoort. Webdeveloper uit Baarn, vanaf €1.495.',
    subtitel: 'Naast Amersfoort, maar met eigen zoekers.',
    lead: 'Leusden ligt tegen Amersfoort aan, en veel bedrijven hier werken in beide plaatsen. Online lopen ze daardoor vaak klanten mis: hun site noemt Amersfoort, maar niet Leusden, of andersom. Ik bouw een site die je hele werkgebied dekt.',
    lokaal: [
      'Wie in Leusden een vakman zoekt, typt meestal gewoon Leusden in, en niet Amersfoort. Omdat de meeste bedrijven uit de regio zich op Amersfoort richten, is er op Leusden zelf vaak weinig concurrentie. Een eigen pagina per dienst met Leusden erin, en een Google Bedrijfsprofiel met het goede werkgebied, levert hier relatief snel iets op.',
      'In het buitengebied rond Achterveld en Stoutenburg zitten veel agrarische en technische bedrijven die vooral zakelijk werken. Voor hen draait een website minder om spoedklussen en meer om vertrouwen en werving: wie ben je, wat heb je gedaan en hoe solliciteer je.',
    ],
    gebieden: ['Leusden-Centrum', 'Leusden-Zuid', 'Princenhof', 'Achterveld', 'Stoutenburg', 'Den Treek'],
    afstand: 'Ongeveer vijfentwintig minuten vanaf Baarn.',
    caseSlug: 'rin-logistiek',
    caseTekst: 'Vlakbij, in Amersfoort, bouwde ik voor koeriers- en transportbedrijf R.I.N. B.V. een zakelijke website met eigen CMS, offerteformulier en vacatures.',
    buurt: ['amersfoort', 'soest', 'zeist'],
    faq: [
      { q: 'Word ik met één site in Leusden én Amersfoort gevonden?', a: 'Ja, als beide plaatsen op je site een eigen pagina hebben en je bedrijfsprofiel het goede werkgebied heeft. Eén pagina die beide plaatsen noemt werkt meestal minder goed.' },
      { q: 'Werk je ook voor bedrijven in het buitengebied?', a: 'Ja. Achterveld, Stoutenburg en de rest van de gemeente horen er gewoon bij. Voor een gesprek kom ik langs of we bellen.' },
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site, meestal €2.000 tot €3.500 met meer pagina\'s. Hosting en onderhoud €49 per maand.' },
      { q: 'Heb je al klanten in de buurt van Leusden?', a: 'Ja, in Amersfoort: R.I.N. B.V. In Leusden zelf nog niet.' },
    ],
  },
  {
    slug: 'huizen',
    naam: 'Huizen',
    metaTitle: 'Website laten maken in Huizen | Voor vakmensen in het Gooi | AKWS',
    metaDescription:
      'Website laten maken in Huizen? Snelle website, lokale SEO en Google Bedrijfsprofiel voor vakmensen en MKB in Huizen, Blaricum en Laren. Vanaf €1.495.',
    subtitel: 'Lokaal vindbaar in het noorden van het Gooi.',
    lead: 'Huizen is een van de grootste plaatsen in het Gooi, met veel woningen uit de jaren zeventig en tachtig waar nu onderhoud, verduurzaming en verbouwing aan zit te komen. Er is werk genoeg. De vraag is of de mensen die zoeken bij jou uitkomen.',
    lokaal: [
      'De woningen in de Huizer wijken zijn op een leeftijd waarop cv-ketels, kozijnen, daken en badkamers aan vervanging toe zijn. Dat zie je terug in wat mensen zoeken: niet alleen een beroep, maar ook een probleem, zoals een lekkend dak of een ketel die vervangen moet worden. Een site die per dienst uitlegt wat je doet en wat het ongeveer kost, sluit daar beter op aan dan een algemene homepage.',
      'Vanuit Huizen werk je al snel in Blaricum, Laren, Eemnes en Naarden. Die plaatsen hebben elk hun eigen zoekers. Ik zet ze op je site als eigen pagina, als je daar echt werkt.',
    ],
    gebieden: ['Huizen-Centrum', 'Oostermeent', 'Huizermaat', 'Haven', 'Blaricum', 'Laren'],
    afstand: 'Ongeveer twintig minuten vanaf Baarn.',
    buurt: ['eemnes', 'bussum', 'hilversum'],
    faq: [
      { q: 'Wat levert een pagina per dienst op?', a: 'Iemand die zoekt op "dakgoot vervangen Huizen" komt dan op een pagina over precies dat, met een belknop. Dat converteert beter dan een homepage waar hij zelf moet zoeken.' },
      { q: 'Richt je ook mijn Google Bedrijfsprofiel in?', a: 'Ja. Categorieën, diensten, werkgebied, foto\'s en een simpele link om reviews te vragen. Los kost dat €195, bij een website zit het erin.' },
      { q: 'Wat kost een website?', a: 'Een compacte site begint bij €1.495, met pagina\'s per dienst en plaats meestal €2.000 tot €3.500. Je krijgt vooraf een vaste prijs.' },
      { q: 'Heb je al klanten in Huizen?', a: 'Nog niet. Huizen ligt op twintig minuten van Baarn en valt in mijn werkgebied.' },
    ],
  },
  {
    slug: 'de-bilt',
    naam: 'De Bilt',
    metaTitle: 'Website laten maken in De Bilt en Bilthoven | AKWS',
    metaDescription:
      'Website laten maken in De Bilt, Bilthoven of Maartensdijk? Snelle website en lokale SEO per kern voor vakmensen en MKB. Webdeveloper uit Baarn, vanaf €1.495.',
    subtitel: 'Eén gemeente, zes kernen, zes soorten zoekers.',
    lead: 'De gemeente De Bilt bestaat uit Bilthoven, De Bilt, Maartensdijk, Groenekan, Westbroek en Hollandsche Rading. Niemand zoekt op de gemeentenaam als hij Bilthoven bedoelt. Een website die dat begrijpt, wordt beter gevonden.',
    lokaal: [
      'Bilthoven is de grootste kern, met veel vrijstaande en oudere woningen en klanten die kwaliteit verwachten. Maartensdijk, Groenekan en Westbroek zijn dorpser, met meer mond-tot-mond. Het zoekgedrag verschilt dus per kern. Werk je in meerdere kernen, dan krijgt elke kern waar je echt komt een eigen pagina.',
      'De gemeente ligt tussen Utrecht en Zeist, en veel bedrijven werken ook daar. Met een pagina per dienst en per plaats bouw je een site die in de hele regio gevonden wordt, zonder dat het een lijst met plaatsnamen wordt die niemand leest.',
    ],
    gebieden: ['Bilthoven', 'De Bilt', 'Maartensdijk', 'Groenekan', 'Westbroek', 'Hollandsche Rading'],
    afstand: 'Ongeveer vijfentwintig minuten vanaf Baarn.',
    buurt: ['zeist', 'utrecht', 'maarssen'],
    faq: [
      { q: 'Moet ik voor elke kern een pagina hebben?', a: 'Alleen voor de kernen waar je echt werkt. Een pagina voor een plek waar je nooit komt levert niets op en maakt je site minder geloofwaardig.' },
      { q: 'Heb je ervaring met lokale SEO in deze regio?', a: 'Ja. Voor AD Loodgietersbedrijf uit Maarssen bouwde ik pagina\'s per dienst en per plaats in de regio Utrecht. Die site staat inmiddels op pagina 1 voor meerdere plaatsen.' },
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site, meestal €2.000 tot €3.500 met pagina\'s per kern. Hosting en onderhoud €49 per maand.' },
      { q: 'Heb je al klanten in De Bilt?', a: 'Nog niet in de gemeente zelf. Wel in Maarssen en de rest van de regio Utrecht.' },
    ],
  },
  {
    slug: 'maarssen',
    naam: 'Maarssen',
    metaTitle: 'Website laten maken in Maarssen | Lokale SEO met bewezen resultaat | AKWS',
    metaDescription:
      'Website laten maken in Maarssen of Breukelen? Ik bouwde de site van AD Loodgietersbedrijf uit Maarssen: nu op pagina 1 voor "loodgieter Maarssen". Vanaf €1.495.',
    subtitel: 'Waar mijn eerste lokale SEO-case vandaan komt.',
    lead: 'Voor AD Loodgietersbedrijf uit Maarssen bouwde ik een nieuwe website met lokale SEO voor Maarssen, Utrecht en omgeving. Inmiddels staan ze op pagina 1 voor onder meer "loodgieter Maarssen". Zo\'n opbouw werkt voor elk bedrijf in de gemeente Stichtse Vecht dat op locatie werkt.',
    lokaal: [
      'Maarssen valt onder de gemeente Stichtse Vecht, samen met Breukelen, Loenen, Nieuwersluis en Oud-Zuilen. Mensen zoeken op die kernen, niet op de gemeente. Maarssenbroek is daarbij bijna een plaats op zich, met veel woningen uit de jaren zeventig en tachtig waar nu onderhoud aan zit te komen.',
      'Omdat Maarssen tegen Utrecht aan ligt, werken de meeste bedrijven hier ook in de stad, in Leidsche Rijn en in Vleuten-De Meern. Bij AD Loodgieters kreeg elke plaats in het werkgebied een eigen pagina met eigen tekst, plus een klachtenkiezer op de homepage die bezoekers direct bij de juiste dienst brengt.',
    ],
    gebieden: ['Maarssen-Dorp', 'Maarssenbroek', 'Breukelen', 'Oud-Zuilen', 'Tienhoven', 'Loenen'],
    afstand: 'Ongeveer half uur tot vijfendertig minuten vanaf Baarn.',
    caseSlug: 'ad-loodgietersbedrijf',
    caseTekst: 'AD Loodgietersbedrijf uit Maarssen: nieuwe site sinds oktober 2026, vertoningen in Google van zo\'n 100 naar ruim 1.300 per dag en op pagina 1 voor onder meer "loodgieter Maarssen" (Search Console, november 2026).',
    buurt: ['utrecht', 'de-bilt', 'zeist'],
    faq: [
      { q: 'Wat heb je precies voor AD Loodgieters gedaan?', a: 'Een volledig nieuwe site met een pagina per dienst en per plaats, structured data, een klachtenkiezer op de homepage, doorverwijzingen van oude URL\'s en een opgeschoond Google Bedrijfsprofiel. De hele case staat met screenshots op deze site.' },
      { q: 'Kan je dat ook voor mijn bedrijf doen?', a: 'Ja, voor elk bedrijf dat op locatie werkt: installatie, bouw, schilderwerk, hoveniers. In het eerste gesprek kijk ik welke diensten en plaatsen voor jou het meeste opleveren.' },
      { q: 'Wat kost dat?', a: 'Een site met pagina\'s per dienst en plaats zit meestal tussen €2.000 en €3.500. Extra plaatspagina\'s later kosten €149 per stuk. Hosting en onderhoud €49 per maand.' },
      { q: 'Hoe snel zie je resultaat in Google?', a: 'Bij AD ging de site in oktober live en waren de vertoningen in november al ruim 13 keer zo hoog, maar dat verschilt per branche en concurrentie. Ik beloof geen posities, wel een opbouw die daar de beste kans op geeft.' },
    ],
  },
  {
    slug: 'laren',
    naam: 'Laren',
    metaTitle: 'Website laten maken in Laren | Verzorgde site voor vakmensen | AKWS',
    metaDescription:
      'Website laten maken in Laren? Een verzorgde, snelle site met lokale SEO voor vakmensen en MKB in Laren en het Gooi. Webdeveloper uit Baarn, vanaf €1.495.',
    subtitel: 'Een site die past bij klanten die kwaliteit verwachten.',
    lead: 'In Laren staan veel villa\'s en karakteristieke woningen, en de klanten weten wat ze willen. Ze kiezen niet de goedkoopste, maar de vakman die vertrouwen wekt. Je website is vaak het eerste wat ze van je zien, dus die moet net zo verzorgd zijn als je werk.',
    lokaal: [
      'Opdrachten in Laren zijn vaak groter en persoonlijker: een complete badkamer, een nieuwe tuin, schilderwerk aan een monumentaal pand. Klanten kijken naar foto\'s van eerder werk en lezen hoe je werkt voordat ze contact opnemen. Een site met echte projecten, een duidelijke werkwijze en een rustig ontwerp doet hier meer dan een schreeuwerige homepage vol aanbiedingen.',
      'Wie in Laren werkt, werkt meestal ook in Blaricum, Eemnes en Hilversum. Ik geef die plaatsen een eigen pagina als je daar echt komt, zodat je ook gevonden wordt door mensen die net over de gemeentegrens wonen.',
    ],
    gebieden: ['Laren-Centrum', 'De Brink', 'Laren-Noord', 'Blaricum', 'Eemnes'],
    afstand: 'Ongeveer een kwartier vanaf Baarn.',
    buurt: ['blaricum', 'eemnes', 'hilversum'],
    faq: [
      { q: 'Kan je mijn projectfoto\'s mooi in beeld brengen?', a: 'Ja. Echte foto\'s van eigen werk zijn in Laren je beste verkoper. Ik zet ze in een projectoverzicht met korte uitleg en zorg dat ze snel laden.' },
      { q: 'Wat kost een website?', a: 'Een compacte site begint bij €1.495, een uitgebreide site met projectpagina\'s meestal €2.000 tot €3.500. Je krijgt vooraf een vaste prijs.' },
      { q: 'Heb je al klanten in Laren?', a: 'Nog niet. Laren ligt op een kwartier van Baarn en valt in mijn werkgebied. De cases op deze site laten zien wat je kunt verwachten.' },
    ],
  },
  {
    slug: 'blaricum',
    naam: 'Blaricum',
    metaTitle: 'Website laten maken in Blaricum | Voor vakmensen en MKB | AKWS',
    metaDescription:
      'Website laten maken in Blaricum of de Blaricummermeent? Snelle website met lokale SEO voor vakmensen en MKB. Webdeveloper uit Baarn, vaste prijs vanaf €1.495.',
    subtitel: 'Van het oude dorp tot de nieuwe Meent.',
    lead: 'Blaricum heeft twee gezichten: het oude dorp met vrijstaande huizen en de Bijvanck en Blaricummermeent met veel jonge gezinnen. Beide groepen zoeken een vakman via Google, maar met andere vragen. Een site die dat snapt, wordt vaker gebeld.',
    lokaal: [
      'In de Blaricummermeent staan nieuwe woningen waar bewoners nog van alles willen: een tuin, een laadpaal, zonnepanelen, een extra stopcontact in de schuur. In het oude dorp gaat het vaker om onderhoud en renovatie aan oudere, grotere huizen. Een pagina per dienst die precies uitlegt wat je doet, sluit op beide aan.',
      'Blaricum is klein, dus de concurrentie op zoekopdrachten met de plaatsnaam is beperkt. Met een compleet Google Bedrijfsprofiel en een paar echte reviews sta je hier sneller in beeld dan in Hilversum of Amersfoort.',
    ],
    gebieden: ['Blaricum-Dorp', 'Bijvanck', 'Blaricummermeent', 'Huizen', 'Laren'],
    afstand: 'Ongeveer twintig minuten vanaf Baarn.',
    buurt: ['laren', 'huizen', 'eemnes'],
    faq: [
      { q: 'Heeft een site voor zo\'n kleine plaats zin?', a: 'Ja. Juist omdat er weinig bedrijven goed vindbaar zijn op Blaricum, kom je met een goede site en een compleet bedrijfsprofiel relatief snel in beeld.' },
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site, meestal €2.000 tot €3.500 met meer pagina\'s. Hosting en onderhoud €49 per maand.' },
      { q: 'Heb je al klanten in Blaricum?', a: 'Nog niet. Blaricum ligt op twintig minuten van Baarn.' },
    ],
  },
  {
    slug: 'nieuwegein',
    naam: 'Nieuwegein',
    metaTitle: 'Website laten maken in Nieuwegein | Lokale SEO per wijk | AKWS',
    metaDescription:
      'Website laten maken in Nieuwegein? Snelle website met lokale SEO voor vakmensen en MKB in Nieuwegein, Vreeswijk en omgeving. Ervaring in de regio Utrecht, vanaf €1.495.',
    subtitel: 'Veel woningen, veel bedrijven, veel zoekers.',
    lead: 'Nieuwegein is gebouwd in de jaren zeventig en tachtig. Die woningen zijn nu toe aan nieuwe badkamers, cv-ketels, kozijnen en daken. Er wordt hier dus veel gezocht naar vakmensen. Ik bouw sites die op die zoekopdrachten gevonden worden.',
    lokaal: [
      'In de zoekcijfers van mijn eigen klant AD Loodgieters zie ik Nieuwegein steeds terugkomen: mensen zoeken op "loodgieter Nieuwegein", "badkamerrenovatie Nieuwegein" en "lekkage plafond Nieuwegein". Dat zijn concrete vragen van mensen die nu iemand nodig hebben. Een pagina per dienst met Nieuwegein erin vangt die zoekers op.',
      'Daarnaast heeft Nieuwegein grote bedrijventerreinen, zoals Plettenburg, De Liesbosch en Het Klooster, met veel zakelijke dienstverlening en techniek. Voor die bedrijven draait een website meer om vertrouwen en werving dan om spoed.',
    ],
    gebieden: ['Jutphaas', 'Vreeswijk', 'Galecop', 'Batau', 'Fokkesteeg', 'Doorslag', 'Plettenburg', 'De Liesbosch'],
    afstand: 'Ongeveer veertig minuten vanaf Baarn.',
    caseSlug: 'ad-loodgietersbedrijf',
    caseTekst: 'Voor AD Loodgietersbedrijf bouwde ik pagina\'s per dienst en plaats in de regio Utrecht. Nieuwegein is daarin een van de plaatsen waar de site steeds vaker in Google verschijnt.',
    buurt: ['utrecht', 'houten', 'ijsselstein'],
    faq: [
      { q: 'Werkt lokale SEO in Nieuwegein?', a: 'Ja. Bij AD Loodgieters verschijnt de site al honderden keren per week op zoekopdrachten met Nieuwegein, zoals "loodgieter Nieuwegein" en "sanitair aanleggen Nieuwegein". Dat komt door pagina\'s per dienst en plaats.' },
      { q: 'Wat kost een website?', a: 'Een compacte site begint bij €1.495, met pagina\'s per dienst en plaats meestal €2.000 tot €3.500. Je krijgt vooraf een vaste prijs.' },
      { q: 'Kom je langs in Nieuwegein?', a: 'Voor een kennismaking kom ik langs; daarna gaat het meeste via telefoon, mail en WhatsApp.' },
    ],
  },
  {
    slug: 'houten',
    naam: 'Houten',
    metaTitle: 'Website laten maken in Houten | Voor vakmensen en MKB | AKWS',
    metaDescription:
      'Website laten maken in Houten, Schalkwijk of \'t Goy? Snelle website met lokale SEO voor vakmensen en MKB. Ervaring in de regio Utrecht, vaste prijs vanaf €1.495.',
    subtitel: 'Een groeiende plaats met eigen zoekers.',
    lead: 'Houten is in korte tijd flink gegroeid, met veel gezinnen in woningen die nu tien tot dertig jaar oud zijn. Badkamers, keukens, tuinen en installaties zijn aan vernieuwing toe. Wie dan zoekt, zoekt op Houten. Ik zorg dat je daar gevonden wordt.',
    lokaal: [
      'Houten is opgedeeld in Noord en Zuid, met daaromheen dorpen als Schalkwijk, \'t Goy en Tull en \'t Waal. Bewoners zoeken vaak gewoon op Houten, maar in de dorpen ook op hun eigen naam. Werk je daar, dan krijgen die kernen een eigen pagina.',
      'Op bedrijventerreinen als De Meerpaal en Doornkade zitten veel technische en logistieke bedrijven. Voor hen is een website vooral een visitekaartje en een plek om personeel te werven. Een vacaturepagina met een kort sollicitatieformulier levert daar vaak meer op dan nog een dienstenpagina.',
    ],
    gebieden: ['Houten-Noord', 'Houten-Zuid', 'Schalkwijk', '\'t Goy', 'Tull en \'t Waal', 'De Meerpaal', 'Doornkade'],
    afstand: 'Ongeveer veertig minuten vanaf Baarn.',
    buurt: ['nieuwegein', 'utrecht', 'zeist'],
    faq: [
      { q: 'Maak je ook pagina\'s voor Schalkwijk en \'t Goy?', a: 'Ja, als je daar werkt. Elke kern krijgt dan een eigen pagina met eigen tekst.' },
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site, meestal €2.000 tot €3.500 met meer pagina\'s of een vacaturemodule.' },
      { q: 'Heb je al klanten in Houten?', a: 'Nog niet in Houten zelf. Wel in de regio Utrecht: AD Loodgieters uit Maarssen, die ook in Houten werkt.' },
    ],
  },
  {
    slug: 'ijsselstein',
    naam: 'IJsselstein',
    metaTitle: 'Website laten maken in IJsselstein | Lokaal gevonden worden | AKWS',
    metaDescription:
      'Website laten maken in IJsselstein? Snelle website met lokale SEO voor vakmensen en MKB in IJsselstein en Lopik. Ervaring in de regio Utrecht, vanaf €1.495.',
    subtitel: 'Lokaal gevonden in een stad die vaak wordt overgeslagen.',
    lead: 'IJsselstein ligt in de schaduw van Utrecht en Nieuwegein, en veel bedrijven richten zich alleen op die grote plaatsen. Daardoor is er op zoekopdrachten met IJsselstein vaak minder concurrentie dan je zou denken.',
    lokaal: [
      'Bij mijn klant AD Loodgieters zie ik dat mensen in IJsselstein heel concreet zoeken: "badkamer installateur IJsselstein", "badkamerrenovatie IJsselstein", "sanitair vernieuwen IJsselstein". Op een paar van die zoektermen staat de site daardoor al in de top 10. Dat laat zien wat een pagina per dienst en plaats hier kan doen.',
      'Zenderpark en Westpoort zijn wijken met veel gezinnen; de oude binnenstad heeft juist oudere panden met andere vragen. Werk je ook in Lopik, Montfoort of Benschop, dan krijgen die een eigen pagina.',
    ],
    gebieden: ['Binnenstad', 'Zenderpark', 'Westpoort', 'Lopik', 'Montfoort', 'Benschop'],
    afstand: 'Ongeveer drie kwartier vanaf Baarn.',
    caseSlug: 'ad-loodgietersbedrijf',
    caseTekst: 'AD Loodgieters staat met pagina\'s per dienst en plaats al in de top 10 voor zoekopdrachten als "sanitair vernieuwen IJsselstein" (Search Console, november 2026).',
    buurt: ['nieuwegein', 'utrecht', 'woerden'],
    faq: [
      { q: 'Is er in IJsselstein genoeg zoekvolume?', a: 'Ja. Bij AD Loodgieters verschijnt de site op zo\'n twintig verschillende zoekopdrachten met IJsselstein, vooral rond badkamers en sanitair. Voor andere vakken is dat vergelijkbaar.' },
      { q: 'Wat kost een website?', a: 'Een compacte site begint bij €1.495, met pagina\'s per dienst en plaats meestal €2.000 tot €3.500.' },
      { q: 'Werk je op afstand?', a: 'Voor een kennismaking kom ik langs, daarna gaat het meeste via telefoon, mail en WhatsApp.' },
    ],
  },
  {
    slug: 'woerden',
    naam: 'Woerden',
    metaTitle: 'Website laten maken in Woerden en Harmelen | AKWS',
    metaDescription:
      'Website laten maken in Woerden, Harmelen of Kamerik? Snelle website met lokale SEO. AD Loodgieters staat dankzij mijn opbouw op positie 2 voor "loodgieter Harmelen". Vanaf €1.495.',
    subtitel: 'Waar een van mijn klanten al op positie 2 staat.',
    lead: 'Harmelen hoort bij de gemeente Woerden, en daar staat AD Loodgieters met de site die ik bouwde gemiddeld op positie 2 voor "loodgieter Harmelen". Dezelfde aanpak werkt voor andere vakmensen en bedrijven in Woerden en de dorpen eromheen.',
    lokaal: [
      'De gemeente Woerden bestaat uit Woerden zelf, Harmelen, Kamerik en Zegveld. Mensen zoeken op die kernen, niet op de gemeente. Juist in de kleinere kernen is de concurrentie in Google laag, waardoor een eigen pagina daar snel scoort, zoals Harmelen bij AD laat zien.',
      'Woerden heeft een oude binnenstad met monumentale panden en wijken als Snel en Polanen en Molenvliet met veel gezinswoningen. Dat betekent vraag naar heel verschillende klussen, van restauratie tot een nieuwe badkamer. Een pagina per dienst laat zien dat je allebei kunt.',
    ],
    gebieden: ['Woerden-Centrum', 'Snel en Polanen', 'Molenvliet', 'Harmelen', 'Kamerik', 'Zegveld'],
    afstand: 'Ongeveer drie kwartier vanaf Baarn.',
    caseSlug: 'ad-loodgietersbedrijf',
    caseTekst: 'AD Loodgietersbedrijf staat gemiddeld op positie 2 voor "loodgieter Harmelen" en zag de vertoningen in Google stijgen van zo\'n 100 naar ruim 1.300 per dag (Search Console, november 2026).',
    buurt: ['ijsselstein', 'utrecht', 'maarssen'],
    faq: [
      { q: 'Hoe kwam AD zo hoog voor Harmelen?', a: 'Door een eigen pagina voor Harmelen met tekst die over die plaats gaat, een pagina per dienst, structured data en een opgeschoond Google Bedrijfsprofiel. Geen trucjes, wel een nette opbouw.' },
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site, meestal €2.000 tot €3.500 met pagina\'s per dienst en kern.' },
      { q: 'Kan dat ook voor mijn vak?', a: 'Ja. De aanpak werkt voor elk bedrijf dat op locatie werkt: installatie, bouw, schilderwerk, hoveniers, schoonmaak.' },
    ],
  },
  {
    slug: 'veenendaal',
    naam: 'Veenendaal',
    metaTitle: 'Website laten maken in Veenendaal | Voor vakmensen en MKB | AKWS',
    metaDescription:
      'Website laten maken in Veenendaal? Snelle website, lokale SEO en maatwerk software voor vakmensen en MKB in Veenendaal en de Gelderse Vallei. Vanaf €1.495.',
    subtitel: 'Een ondernemersstad in de Gelderse Vallei.',
    lead: 'Veenendaal heeft veel MKB, van installatie en bouw tot techniek en handel. Veel bedrijven hebben werk genoeg via hun netwerk, tot ze willen groeien of personeel zoeken. Dan moet de website ineens wel kloppen.',
    lokaal: [
      'Veenendaal ligt tussen Utrecht, Amersfoort en Arnhem, en bedrijven hier werken vaak in de hele Gelderse Vallei: Rhenen, Ede, Scherpenzeel, Renswoude. Een site die alleen Veenendaal noemt, laat werk liggen. Ik breng in kaart waar je werkt en waar mensen zoeken, en maak daar pagina\'s voor.',
      'Wijken als Veenendaal-Oost en Dragonder hebben veel gezinswoningen; in Het Ambacht en Petenbos staan woningen die nu aan onderhoud toe zijn. Voor bedrijven die zakelijk werken is een goede vacaturepagina vaak het belangrijkste onderdeel, want personeel vinden is hier net zo lastig als overal.',
    ],
    gebieden: ['Centrum', 'Veenendaal-Oost', 'Dragonder', 'Petenbos', 'Het Ambacht', 'Rhenen', 'Scherpenzeel'],
    afstand: 'Ongeveer drie kwartier vanaf Baarn.',
    buurt: ['leusden', 'amersfoort', 'barneveld'],
    faq: [
      { q: 'Werk je ook voor bedrijven in de Gelderse Vallei?', a: 'Ja. Veenendaal, Rhenen, Scherpenzeel en Ede liggen allemaal in mijn werkgebied. Voor een gesprek kom ik langs of we bellen.' },
      { q: 'Wat kost een website?', a: 'Een compacte site begint bij €1.495, met meer pagina\'s of een vacaturemodule meestal €2.000 tot €3.500.' },
      { q: 'Heb je al klanten in Veenendaal?', a: 'Nog niet. De dichtstbijzijnde klanten zitten in Amersfoort en Soest.' },
    ],
  },
  {
    slug: 'barneveld',
    naam: 'Barneveld',
    metaTitle: 'Website laten maken in Barneveld en Voorthuizen | AKWS',
    metaDescription:
      'Website laten maken in Barneveld, Voorthuizen of Kootwijkerbroek? Snelle website met lokale SEO voor ondernemers, bouw en techniek. Webdeveloper uit Baarn, vanaf €1.495.',
    subtitel: 'Voor ondernemers die liever werken dan online zitten.',
    lead: 'Barneveld is een ondernemersgemeente met veel familiebedrijven in bouw, techniek, transport en agrarische dienstverlening. Ze hebben het druk en willen een website die gewoon werkt: duidelijk, snel en zonder gedoe.',
    lokaal: [
      'De gemeente Barneveld bestaat uit meerdere kernen: Barneveld, Voorthuizen, Kootwijkerbroek, Garderen en Stroe. Mensen zoeken op hun eigen dorp. Een bedrijf uit Voorthuizen dat alleen Barneveld noemt op zijn site, mist zoekers in zijn eigen dorp. Daarom krijgt elke kern waar je werkt een eigen pagina.',
      'Op terreinen als Harselaar zitten veel bedrijven die vooral zakelijk werken en personeel zoeken. Voor hen draait een website om vertrouwen en werving: wat doe je, voor wie werk je en hoe kan iemand solliciteren.',
    ],
    gebieden: ['Barneveld', 'Voorthuizen', 'Kootwijkerbroek', 'Garderen', 'Stroe', 'Harselaar'],
    afstand: 'Ongeveer drie kwartier vanaf Baarn.',
    buurt: ['nijkerk', 'veenendaal', 'amersfoort'],
    faq: [
      { q: 'Maak je pagina\'s voor Voorthuizen en Kootwijkerbroek?', a: 'Ja, als je daar werkt. Elke kern krijgt een eigen pagina met eigen tekst.' },
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site, meestal €2.000 tot €3.500 met meer pagina\'s of vacatures.' },
      { q: 'Heb je al klanten in Barneveld?', a: 'Nog niet. De dichtstbijzijnde klanten zitten in Amersfoort.' },
    ],
  },
  {
    slug: 'loosdrecht',
    naam: 'Loosdrecht',
    metaTitle: 'Website laten maken in Loosdrecht en Wijdemeren | AKWS',
    metaDescription:
      'Website laten maken in Loosdrecht, Kortenhoef of Nederhorst den Berg? Snelle website met lokale SEO voor vakmensen, watersport en MKB in Wijdemeren. Vanaf €1.495.',
    subtitel: 'Vindbaar in de dorpen van Wijdemeren.',
    lead: 'Loosdrecht en de andere dorpen van Wijdemeren hebben veel vrijstaande huizen, recreatiewoningen en watersportbedrijven. Bewoners zoeken een vakman in de buurt en typen hun dorp in. Wie daar een goede pagina heeft, krijgt het telefoontje.',
    lokaal: [
      'Wijdemeren bestaat uit Loosdrecht, Kortenhoef, Ankeveen, Nederhorst den Berg en \'s-Graveland. Niemand zoekt op de gemeentenaam. Omdat het om kleine kernen gaat, is de concurrentie in Google laag: met een eigen pagina per dorp waar je werkt kom je hier snel in beeld.',
      'Veel woningen liggen aan het water of in het groen, met eigen uitdagingen: vocht, beschoeiing, tuinen, verduurzaming van oudere huizen. Een site die laat zien dat je die klussen kent, met foto\'s van werk in de buurt, overtuigt meer dan een algemene dienstenlijst.',
    ],
    gebieden: ['Oud-Loosdrecht', 'Nieuw-Loosdrecht', 'Kortenhoef', 'Ankeveen', 'Nederhorst den Berg', '\'s-Graveland'],
    afstand: 'Ongeveer twintig minuten vanaf Baarn.',
    buurt: ['hilversum', 'bussum', 'baarn'],
    faq: [
      { q: 'Heeft een website voor een dorp als Loosdrecht zin?', a: 'Ja. Er zijn weinig bedrijven goed vindbaar op deze dorpsnamen, dus met een goede site en een compleet bedrijfsprofiel scoor je relatief snel.' },
      { q: 'Wat kost een website?', a: 'Een compacte site begint bij €1.495, met pagina\'s per dorp meestal €2.000 tot €3.500.' },
      { q: 'Kom je langs?', a: 'Ja, Loosdrecht ligt op twintig minuten van Baarn.' },
    ],
  },
  {
    slug: 'driebergen',
    naam: 'Driebergen',
    metaTitle: 'Website laten maken in Driebergen en de Heuvelrug | AKWS',
    metaDescription:
      'Website laten maken in Driebergen, Doorn, Leersum of Maarn? Snelle website met lokale SEO voor vakmensen en MKB op de Utrechtse Heuvelrug. Vanaf €1.495.',
    subtitel: 'Lokaal vindbaar op de hele Heuvelrug.',
    lead: 'De Utrechtse Heuvelrug heeft veel grotere woningen in het groen en klanten die vergelijken voordat ze kiezen. Een verzorgde site met echte projecten en duidelijke informatie helpt je om in die vergelijking te winnen.',
    lokaal: [
      'De gemeente Utrechtse Heuvelrug bestaat uit Driebergen-Rijsenburg, Doorn, Leersum, Maarn, Amerongen en meer. In de zoekcijfers van AD Loodgieters zie ik zoekopdrachten als "badkamerrenovatie Driebergen-Rijsenburg" en "loodgieter Leersum" terugkomen. Mensen zoeken dus op hun eigen kern, en daar maak je een pagina voor.',
      'Veel woningen hier zijn oud en groot, met vragen rond verduurzaming, onderhoud en tuin. Klanten nemen de tijd voor hun keuze. Laat dus zien wat je eerder deed, hoe je werkt en wat ze kunnen verwachten.',
    ],
    gebieden: ['Driebergen-Rijsenburg', 'Doorn', 'Leersum', 'Maarn', 'Maarsbergen', 'Amerongen'],
    afstand: 'Ongeveer half uur vanaf Baarn.',
    buurt: ['zeist', 'leusden', 'de-bilt'],
    faq: [
      { q: 'Maak je pagina\'s voor alle kernen?', a: 'Alleen voor de kernen waar je echt werkt. Elke pagina krijgt eigen tekst.' },
      { q: 'Wat kost een website?', a: 'Vanaf €1.495 voor een compacte site, meestal €2.000 tot €3.500 met pagina\'s per kern.' },
      { q: 'Heb je ervaring met deze regio?', a: 'De site van AD Loodgieters verschijnt al in Google op zoekopdrachten uit de Heuvelrug. Klanten in Driebergen zelf heb ik nog niet.' },
    ],
  },
];

export function stadBySlug(slug: string): Stad | undefined {
  return STEDEN.find((s) => s.slug === slug);
}
