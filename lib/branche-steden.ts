// Vak × plaats: /website-laten-maken/[stad]/[branche]
// Elke pagina combineert een eigen invalshoek per vak (hieronder) met de eigen
// plaatstekst uit lib/steden.ts. Geen verzonnen klanten of cijfers.

import type { Stad } from '@/lib/steden';
import { MKB_DOELGROEPEN } from '@/lib/mkb-doelgroepen';

export type BrancheHaak = {
  /** "loodgieters", gebruikt in titels: Website voor loodgieters in X */
  meervoud: string;
  /** Enkelvoud voor zoektermen: "loodgieter" */
  enkelvoud: string;
  /** Eigen intro per vak, met de plaatsnaam erin. */
  intro: (s: Stad) => string;
  /** Wat er op de site moet staan voor dit vak. */
  opSite: string[];
  /** Zoektermen (zonder plaats); de plaats wordt eraan geplakt. */
  zoektermen: string[];
  /** Case die het dichtst bij dit vak ligt. */
  caseSlug?: string;
};

const HAKEN_BOUW: Record<string, BrancheHaak> = {
  loodgieters: {
    meervoud: 'loodgieters',
    enkelvoud: 'loodgieter',
    intro: (s) =>
      `Wie in ${s.naam} water op de vloer heeft, pakt de telefoon en zoekt "loodgieter ${s.naam}". Binnen een paar seconden kiest hij uit de eerste resultaten. Een snelle site met een belknop bovenaan, een pagina per klus en een volledig Google Bedrijfsprofiel bepalen of dat jij bent. Zo heb ik het voor AD Loodgieters aangepakt, en die site groeide van zo'n 100 naar ruim 1.300 vertoningen per dag.`,
    opSite: ['Belknop en WhatsApp altijd in beeld', 'Pagina per klus: lekkage, verstopping, cv, badkamer', 'Spoedlijn en werktijden duidelijk', 'Reviews uit Google', 'Werkgebied met eigen pagina per plaats'],
    zoektermen: ['loodgieter', 'lekkage', 'riool ontstoppen', 'loodgieter spoed', 'badkamer renovatie'],
    caseSlug: 'ad-loodgietersbedrijf',
  },
  'cv-monteurs': {
    meervoud: 'cv-monteurs en installateurs',
    enkelvoud: 'cv monteur',
    intro: (s) =>
      `In ${s.naam} zoeken mensen een cv-monteur op twee momenten: als de ketel het niet doet, en als ze willen verduurzamen. Het eerste is spoed, het tweede een afweging van weken. Je site moet allebei bedienen: een storingsknop voor wie het koud heeft, en duidelijke uitleg over warmtepompen, onderhoud en kosten voor wie nog oriënteert.`,
    opSite: ['Storingspagina met directe belknop', 'Uitleg warmtepomp, hybride en onderhoudscontract', 'Offerteformulier dat de juiste vragen stelt', 'Merken en certificeringen', 'Pagina per plaats in je werkgebied'],
    zoektermen: ['cv monteur', 'cv ketel storing', 'cv ketel vervangen', 'warmtepomp installateur', 'cv onderhoud'],
    caseSlug: 'mba-installaties',
  },
  elektriciens: {
    meervoud: 'elektriciens',
    enkelvoud: 'elektricien',
    intro: (s) =>
      `Een elektricien in ${s.naam} wordt gebeld voor storingen, een nieuwe groepenkast, een laadpaal of een verbouwing. Elk van die klussen heeft andere zoekers en een andere vraag. Een site met een pagina per dienst, foto's van echt werk en een kort formulier zorgt dat je die aanvragen krijgt in plaats van een platform dat provisie rekent.`,
    opSite: ['Pagina per dienst: storing, groepenkast, laadpaal, verbouw', 'Foto\'s van eigen werk', 'Certificeringen en keurmerken', 'Kort offerteformulier', 'Werkgebied per plaats'],
    zoektermen: ['elektricien', 'groepenkast vervangen', 'laadpaal installeren', 'stroomstoring', 'elektra aanleggen'],
    caseSlug: 'voorraad-app',
  },
  installatiebedrijven: {
    meervoud: 'installatiebedrijven',
    enkelvoud: 'installatiebedrijf',
    intro: (s) =>
      `Een installatiebedrijf in ${s.naam} doet vaak van alles: water, warmte, elektra, ventilatie en verduurzaming. Op de site wordt dat al snel een lange lijst waarin niemand vindt wat hij zoekt. Ik bouw een opbouw per dienst, met eigen pagina's voor de plaatsen waar je werkt, zodat zowel particulieren als aannemers snel zien wat je doet.`,
    opSite: ['Duidelijke indeling per dienst', 'Aparte ingang voor particulier en zakelijk', 'Projecten met foto\'s', 'Vacaturepagina met sollicitatieformulier', 'Pagina per plaats in je werkgebied'],
    zoektermen: ['installatiebedrijf', 'installateur', 'warmtepomp', 'zonnepanelen installateur', 'badkamer installateur'],
    caseSlug: 'mba-installaties',
  },
  dakdekkers: {
    meervoud: 'dakdekkers',
    enkelvoud: 'dakdekker',
    intro: (s) =>
      `Bij een dakdekker in ${s.naam} komt werk in golven: na een storm is het spoed, de rest van het jaar gaat het om renovatie en onderhoud. Een site die op beide is ingericht, met een spoedknop én duidelijke pagina's over plat dak, pannendak en dakgoten, vangt beide soorten zoekers op.`,
    opSite: ['Spoedknop voor stormschade en lekkage', 'Pagina per dak-type en dienst', 'Foto\'s voor en na', 'Garantie en werkwijze', 'Werkgebied per plaats'],
    zoektermen: ['dakdekker', 'daklekkage', 'plat dak vervangen', 'dakgoot vervangen', 'dakrenovatie'],
  },
  aannemers: {
    meervoud: 'aannemers en bouwbedrijven',
    enkelvoud: 'aannemer',
    intro: (s) =>
      `Wie in ${s.naam} gaat verbouwen, vraagt meerdere offertes op en kijkt eerst naar je site. Ze willen zien wat je eerder bouwde, hoe je werkt en of je betrouwbaar bent. Voor MKH Bouw bouwde ik daarom een site met een pagina per dienst en per plaats, 70 in totaal, en projectfoto's die laten zien wat het bedrijf kan.`,
    opSite: ['Projecten met foto\'s en uitleg', 'Pagina per dienst: verbouw, renovatie, aanbouw', 'Werkwijze en planning', 'Offerteformulier met projectdetails', 'Pagina per plaats in je werkgebied'],
    zoektermen: ['aannemer', 'verbouwing', 'aanbouw', 'renovatie', 'bouwbedrijf'],
    caseSlug: 'mkh-bouw',
  },
  hoveniers: {
    meervoud: 'hoveniers',
    enkelvoud: 'hovenier',
    intro: (s) =>
      `Een tuin in ${s.naam} laten aanleggen is een flinke beslissing, en mensen kiezen hun hovenier op basis van foto's. Je site moet dus vooral laten zien wat je maakte: voor en na, met een korte uitleg. Daarnaast wil je in het voorjaar gevonden worden op "hovenier ${s.naam}", precies wanneer iedereen aan de tuin begint.`,
    opSite: ['Portfolio met voor- en na-foto\'s', 'Pagina per dienst: aanleg, onderhoud, bestrating', 'Seizoensgebonden aanbod', 'Offerteformulier met foto-upload', 'Werkgebied per plaats'],
    zoektermen: ['hovenier', 'tuinaanleg', 'tuinonderhoud', 'bestrating', 'tuinontwerp'],
  },
  schilders: {
    meervoud: 'schilders',
    enkelvoud: 'schilder',
    intro: (s) =>
      `Schilderwerk in ${s.naam} wordt vaak maanden vooruit gepland, en klanten vragen meerdere offertes op. Wie dan een verzorgde site heeft met echte projectfoto's, een duidelijke werkwijze en reviews, maakt het verschil. Ik bouw een site die je planning vult met de klussen die je wilt.`,
    opSite: ['Projectfoto\'s binnen en buiten', 'Pagina per dienst: buitenschilderwerk, binnen, houtrot', 'Planning en werkwijze', 'Offerteformulier', 'Werkgebied per plaats'],
    zoektermen: ['schilder', 'schildersbedrijf', 'buitenschilderwerk', 'binnenschilderwerk', 'houtrot herstellen'],
  },
  'transport-logistiek': {
    meervoud: 'transport- en koeriersbedrijven',
    enkelvoud: 'koerier',
    intro: (s) =>
      `Een transportbedrijf in ${s.naam} wordt gevonden door bedrijven die vandaag nog iets weg moeten hebben, en door chauffeurs die werk zoeken. Voor Zando Transport uit Soest en R.I.N. uit Amersfoort bouwde ik sites met een spoedlijn, een offerteformulier en vacatures waar sollicitanten direct op reageren.`,
    opSite: ['Spoedlijn en offerteformulier', 'Diensten en voertuigen', 'Vacatures met sollicitatieformulier', 'Zakelijke uitstraling', 'Eigen CMS om zelf te beheren'],
    zoektermen: ['koerier', 'spoedkoerier', 'transportbedrijf', 'spoedtransport', 'chauffeur vacature'],
    caseSlug: 'zando-transport',
  },
  'zonnepanelen-laadpalen': {
    meervoud: 'zonnepanelen- en laadpaalinstallateurs',
    enkelvoud: 'zonnepanelen installateur',
    intro: (s) =>
      `Wie in ${s.naam} zonnepanelen, een thuisbatterij of een laadpaal wil, vergelijkt eerst online. Mensen willen weten wat het kost, wat het oplevert en hoe lang het duurt. Een site die die vragen eerlijk beantwoordt, met een korte aanvraag en echte installaties uit de buurt, wint het van de grote landelijke aanbieders.`,
    opSite: ['Uitleg kosten en terugverdientijd', 'Pagina per product: panelen, batterij, laadpaal', 'Installaties uit de regio', 'Korte aanvraag met dakgegevens', 'Werkgebied per plaats'],
    zoektermen: ['zonnepanelen', 'thuisbatterij', 'laadpaal installeren', 'zonnepanelen installateur', 'laadpaal thuis'],
  },
  stukadoors: {
    meervoud: 'stukadoors en afbouwbedrijven',
    enkelvoud: 'stukadoor',
    intro: (s) =>
      `Een stukadoor in ${s.naam} wordt gekozen op het eindresultaat: strakke muren, mooi sierpleister, een plafond zonder scheuren. Daarom draait je site om foto's en om duidelijke pagina's per soort werk. Voor afbouwbedrijf MKH Bouw bouwde ik zo'n opbouw, met pagina's per dienst en per plaats.`,
    opSite: ['Foto\'s van afgerond werk', 'Pagina per dienst: stucwerk, sierpleister, plafonds', 'Werkwijze en planning', 'Offerteformulier met m²', 'Werkgebied per plaats'],
    zoektermen: ['stukadoor', 'stucwerk', 'sierpleister', 'plafond stucen', 'spachtelputz'],
    caseSlug: 'mkh-bouw',
  },
  autobedrijven: {
    meervoud: 'autobedrijven en garages',
    enkelvoud: 'garage',
    intro: (s) =>
      `Wie in ${s.naam} een APK, onderhoud of reparatie nodig heeft, zoekt een garage in de buurt en wil meteen een afspraak maken. Een site met duidelijke prijzen voor standaardklussen, een afspraakformulier en je openingstijden zorgt dat ze bij jou binnenrijden in plaats van bij de ketens.`,
    opSite: ['Afspraakformulier voor APK en onderhoud', 'Prijzen voor standaardklussen', 'Occasions of diensten overzicht', 'Openingstijden en route', 'Reviews uit Google'],
    zoektermen: ['garage', 'apk', 'auto onderhoud', 'auto reparatie', 'autobedrijf'],
  },
};

export const BRANCHE_HAKEN: Record<string, BrancheHaak> = {
  ...HAKEN_BOUW,
  ...Object.fromEntries(
    MKB_DOELGROEPEN.map((m) => [
      m.slug,
      {
        meervoud: m.meervoud,
        enkelvoud: m.enkelvoud,
        intro: (s: Stad) => m.plaatsIntro.replaceAll('{stad}', s.naam),
        opSite: m.opSite,
        zoektermen: m.zoektermen,
        caseSlug: m.caseSlug,
      } satisfies BrancheHaak,
    ]),
  ),
};
