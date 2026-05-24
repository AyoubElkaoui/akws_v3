import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { PageHead } from '@/components/PageHead';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Algemene voorwaarden | AK Web Solutions',
  description: 'Algemene voorwaarden van AK Web Solutions, Ayoub Elkaoui, Baarn.',
  path: '/algemene-voorwaarden',
  noIndex: true,
});

const Artikel = ({ titel, children }: { titel: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 36 }}>
    <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 20, textTransform: 'uppercase', margin: '0 0 10px', color: 'var(--ink)' }}>{titel}</h2>
    <div style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-soft)' }}>{children}</div>
  </div>
);

const ol: React.CSSProperties = { paddingLeft: 20, margin: '8px 0 0' };
const ul: React.CSSProperties = { paddingLeft: 20, margin: '8px 0 0' };

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <SiteNav />
      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Algemene voorwaarden' }]}
        title="Algemene voorwaarden."
        subtitle="AK Web Solutions, Ayoub Elkaoui, Baarn"
      />
      <section style={{ padding: '60px 0 120px' }}>
        <div className="wrap-narrow">
          <div style={{ background: '#fff', borderRadius: 16, padding: '48px 52px', border: '1px solid var(--rule)' }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mute)', letterSpacing: '.05em', marginBottom: 12 }}>
              Versie 1.0 — Geldig vanaf 24 mei 2026
            </p>

            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 40 }}>
              AK Web Solutions is een eenmanszaak geregistreerd op naam van Ayoub Elkaoui, gevestigd te Baarn.
              KvK: <strong>96245190</strong>. BTW: <strong>NL005197684B40</strong>. Deze algemene voorwaarden zijn van toepassing
              op alle aanbiedingen, offertes, opdrachten en overeenkomsten tussen AK Web Solutions en de
              opdrachtgever.
            </p>

            <Artikel titel="Artikel 1 — Definities">
              <ul style={ul}>
                <li><strong>AK Web Solutions</strong>: eenmanszaak te Baarn, gevoerd door Ayoub Elkaoui.</li>
                <li><strong>Opdrachtgever</strong>: de natuurlijke persoon of rechtspersoon die een opdracht heeft verstrekt.</li>
                <li><strong>Diensten</strong>: het ontwikkelen, ontwerpen, hosten en onderhouden van websites en maatwerk software, alsmede SEO, Google Ads-beheer en consultancy.</li>
                <li><strong>Overeenkomst</strong>: de schriftelijke overeenkomst waarop deze voorwaarden van toepassing zijn.</li>
                <li><strong>Schriftelijk</strong>: per e-mail of via een ondertekend document.</li>
              </ul>
            </Artikel>

            <Artikel titel="Artikel 2 — Toepasselijkheid">
              <ol style={ol}>
                <li>Deze voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van AK Web Solutions.</li>
                <li>Afwijkingen zijn alleen geldig indien uitdrukkelijk schriftelijk overeengekomen.</li>
                <li>De toepasselijkheid van inkoop- of andere voorwaarden van opdrachtgever wordt uitdrukkelijk van de hand gewezen.</li>
                <li>Indien een bepaling nietig is, blijven de overige bepalingen volledig van toepassing.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 3 — Offertes en aanbiedingen">
              <ol style={ol}>
                <li>Offertes zijn vrijblijvend en geldig gedurende 30 dagen na uitbrengen, tenzij anders aangegeven.</li>
                <li>Een offerte bevat een omschrijving van de diensten, de prijs, de geplande oplevertijd en de betalingsvoorwaarden.</li>
                <li>AK Web Solutions kan niet worden gehouden aan een aanbieding met een kennelijke vergissing of verschrijving.</li>
                <li>Vermelde prijzen zijn exclusief BTW, tenzij anders aangegeven.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 4 — Totstandkoming overeenkomst">
              <ol style={ol}>
                <li>De overeenkomst komt tot stand bij schriftelijke acceptatie van de offerte door opdrachtgever, of zodra AK Web Solutions begint met de uitvoering na een akkoord per e-mail.</li>
                <li>Door acceptatie verklaart opdrachtgever deze algemene voorwaarden te kennen en te accepteren.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 5 — Uitvoering van de overeenkomst">
              <ol style={ol}>
                <li>AK Web Solutions voert de opdracht uit naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap.</li>
                <li>AK Web Solutions heeft het recht bepaalde werkzaamheden door derden te laten verrichten, na overleg met opdrachtgever.</li>
                <li>Opdrachtgever draagt zorg voor tijdige aanlevering van alle benodigde gegevens, materialen en content.</li>
                <li>Bij niet-tijdige aanlevering heeft AK Web Solutions het recht de uitvoering op te schorten en extra kosten in rekening te brengen.</li>
                <li>AK Web Solutions is niet aansprakelijk voor schade door onjuiste of onvolledige gegevens van opdrachtgever.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 6 — Levertijd en oplevering">
              <ol style={ol}>
                <li>Opgegeven leveringstermijnen zijn indicatief en geen fatale termijnen, tenzij uitdrukkelijk schriftelijk anders overeengekomen.</li>
                <li>Bij overschrijding dient opdrachtgever AK Web Solutions schriftelijk in gebreke te stellen met een redelijke hersteltermijn.</li>
                <li>Oplevering vindt plaats zodra de website of software beschikbaar is op de productieomgeving of ter goedkeuring is voorgelegd.</li>
                <li>Reageert opdrachtgever niet binnen 14 dagen na oplevering, dan wordt de opdracht geacht stilzwijgend te zijn geaccepteerd.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 7 — Wijzigingen en meerwerk">
              <ol style={ol}>
                <li>Wijzigingen in de oorspronkelijke opdracht worden beschouwd als meerwerk.</li>
                <li>Meerwerk wordt vooraf schriftelijk bevestigd met een indicatie van extra kosten en tijd.</li>
                <li>Kleine wijzigingen die in redelijkheid binnen de oorspronkelijke scope vallen, worden niet als meerwerk beschouwd.</li>
                <li>Wijzigingen die het maandelijkse uren-budget van het onderhoudscontract overschrijden, worden apart gefactureerd.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 8 — Prijzen en betaling">
              <ol style={ol}>
                <li>Prijzen zijn vast, uitgedrukt in euro&apos;s, exclusief 21% BTW, tenzij anders aangegeven.</li>
                <li><strong>Projecten</strong>: 50% bij start (binnen 14 dagen na facturatie), 50% bij oplevering (binnen 14 dagen na facturatie). Boven €10.000 kan in drie of vier termijnen worden betaald.</li>
                <li><strong>Maandelijkse diensten</strong> worden vooraf per maand gefactureerd, betaalbaar binnen 14 dagen.</li>
                <li>Externe kosten (stockfoto&apos;s, premium plugins, advertentiebudget) worden door opdrachtgever vooraf voldaan of schriftelijk gegarandeerd.</li>
                <li>Bij niet-tijdige betaling is opdrachtgever van rechtswege in verzuim en wettelijke handelsrente verschuldigd.</li>
                <li>Blijft betaling uit na herinnering, dan is AK Web Solutions gerechtigd werkzaamheden op te schorten, de website offline te halen (na aankondiging) en incassokosten in rekening te brengen (WIK).</li>
                <li>Betalingen strekken eerst tot voldoening van rente en kosten, dan van de oudste openstaande facturen.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 9 — Intellectueel eigendom">
              <ol style={ol}>
                <li>Alle ontwerpen, broncode en overige materialen blijven eigendom van AK Web Solutions tot het moment van volledige betaling.</li>
                <li>Na volledige betaling verkrijgt opdrachtgever een niet-exclusief gebruiksrecht voor het overeengekomen doel.</li>
                <li>AK Web Solutions behoudt het recht opgedane kennis en oplossingsmethoden voor andere doeleinden te gebruiken, mits geen vertrouwelijke informatie wordt gedeeld.</li>
                <li>AK Web Solutions behoudt het recht opdrachtgever te vermelden in een case-study, tenzij opdrachtgever hier schriftelijk bezwaar tegen maakt.</li>
                <li>Opdrachtgever vrijwaart AK Web Solutions voor aanspraken van derden op door opdrachtgever aangeleverde materialen.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 10 — Hosting en onderhoud">
              <ol style={ol}>
                <li>Hosting verloopt via een externe provider (Vercel of Hetzner). De voorwaarden van die provider zijn aanvullend van toepassing.</li>
                <li>Het onderhoudscontract is een verplicht onderdeel van elk websiteproject. Initiële looptijd: 12 maanden, daarna maandelijks opzegbaar met 1 maand opzegtermijn.</li>
                <li>Onderhoud omvat: hosting, SSL, beveiligingsupdates, dagelijkse back-ups, monitoring, kleine wijzigingen binnen het maandelijkse uren-budget en e-mailsupport binnen 24 uur op werkdagen.</li>
                <li>Onderhoud omvat <strong>niet</strong>: nieuwe functionaliteit, grote design-wijzigingen, herstel van schade door derden of wijzigingen door opdrachtgever zelf, en 24/7-support buiten werkdagen.</li>
                <li>Bij beëindiging van het onderhoudscontract draagt AK Web Solutions de broncode, content en databases over. Hiervoor kan een redelijke vergoeding voor overdrachtswerk worden gerekend.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 11 — Aansprakelijkheid">
              <ol style={ol}>
                <li>AK Web Solutions is uitsluitend aansprakelijk voor directe schade door een toerekenbare tekortkoming.</li>
                <li>Aansprakelijkheid is beperkt tot het bedrag dat de beroepsaansprakelijkheidsverzekering uitkeert. Bij geen uitkering: het factuurbedrag van de betreffende opdracht, met een maximum van €5.000.</li>
                <li>AK Web Solutions is niet aansprakelijk voor: indirecte schade of gevolgschade, uitval door de hostingprovider, schade door eigen wijzigingen van opdrachtgever, cyberaanvallen (mits gebruikelijke beveiligingsmaatregelen zijn getroffen), wijzigingen in zoekmachine-algoritmes of advertentieplatformen.</li>
                <li>De beperking geldt niet bij opzet of bewuste roekeloosheid van AK Web Solutions.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 12 — Overmacht">
              <ol style={ol}>
                <li>AK Web Solutions is niet gehouden verplichtingen na te komen bij overmacht.</li>
                <li>Overmacht omvat onder meer: storingen bij hostingproviders, uitval van het internet, ernstige ziekte, oorlog, terrorisme, natuurrampen en overheidsmaatregelen.</li>
                <li>Duurt de overmacht langer dan 30 dagen, dan hebben beide partijen het recht de overeenkomst te ontbinden zonder schadevergoeding.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 13 — Geheimhouding">
              <ol style={ol}>
                <li>Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij van elkaar hebben verkregen.</li>
                <li>Informatie geldt als vertrouwelijk als dit is medegedeeld of als dit voortvloeit uit de aard van de informatie.</li>
                <li>AK Web Solutions deelt vertrouwelijke informatie met derden uitsluitend voor zover noodzakelijk voor de uitvoering van de overeenkomst.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 14 — Beëindiging">
              <ol style={ol}>
                <li>De overeenkomst kan worden beëindigd met wederzijdse instemming, bij gebleken wanprestatie na schriftelijke ingebrekestelling, of bij faillissement of liquidatie van een van beide partijen.</li>
                <li>Bij voortijdige beëindiging door opdrachtgever zonder geldige reden is opdrachtgever de tot dat moment uitgevoerde werkzaamheden verschuldigd, vermeerderd met 50% van de resterende projectkosten.</li>
                <li>Bij voortijdige beëindiging door AK Web Solutions zonder geldige reden ontvangt opdrachtgever een evenredig deel van reeds betaalde bedragen terug.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 15 — Klachten">
              <ol style={ol}>
                <li>Klachten dienen binnen 14 dagen na ontdekking, doch uiterlijk binnen 30 dagen na voltooiing van de werkzaamheden, schriftelijk te worden gemeld.</li>
                <li>AK Web Solutions reageert binnen 14 dagen na ontvangst van een klacht.</li>
                <li>Bij een gegronde klacht voert AK Web Solutions de werkzaamheden alsnog naar behoren uit zonder extra kosten.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 16 — Toepasselijk recht en geschillen">
              <ol style={ol}>
                <li>Op alle rechtsbetrekkingen is uitsluitend Nederlands recht van toepassing.</li>
                <li>Partijen zullen eerst proberen een geschil in onderling overleg op te lossen.</li>
                <li>Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waarbinnen AK Web Solutions is gevestigd (rechtbank Midden-Nederland), tenzij wettelijke voorschriften anders bepalen.</li>
              </ol>
            </Artikel>

            <Artikel titel="Artikel 17 — Slotbepalingen">
              <ol style={ol}>
                <li>AK Web Solutions behoudt het recht deze voorwaarden eenzijdig te wijzigen. Wijzigingen worden minimaal 30 dagen voor inwerkingtreding gecommuniceerd.</li>
                <li>Bij significante wijzigingen heeft opdrachtgever het recht de overeenkomst binnen 30 dagen na aankondiging te beëindigen.</li>
              </ol>
            </Artikel>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--rule)', fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              <strong>AK Web Solutions</strong><br />
              Ayoub Elkaoui — Baarn, Nederland<br />
              E-mail: <a href="mailto:info@akwebsolutions.nl" style={{ color: 'var(--p1)' }}>info@akwebsolutions.nl</a><br />
              BTW: NL005197684B40<br />
              IBAN: NL70RABO3638721965 t.n.v. AK Web Solutions
            </div>

            <p style={{ marginTop: 24, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em' }}>
              Versie 1.0 — 24 mei 2026
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
