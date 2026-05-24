import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { PageHead } from '@/components/PageHead';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacyverklaring | AK Web Solutions',
  description: 'Privacyverklaring van AK Web Solutions. Hoe ik omga met persoonsgegevens conform de AVG.',
  path: '/privacy',
  noIndex: true,
});

const Sectie = ({ titel, children }: { titel: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 36 }}>
    <h2 style={{ fontFamily: 'var(--cond)', fontWeight: 800, fontSize: 24, textTransform: 'uppercase', margin: '0 0 12px', color: 'var(--ink)' }}>{titel}</h2>
    <div style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>{children}</div>
  </div>
);

const ul: React.CSSProperties = { paddingLeft: 20, marginTop: 8, marginBottom: 0 };

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <PageHead
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Privacy' }]}
        title="Privacyverklaring."
        subtitle="Hoe AK Web Solutions omgaat met jouw persoonsgegevens"
      />
      <section style={{ padding: '60px 0 120px' }}>
        <div className="wrap-narrow">
          <div style={{ background: '#fff', borderRadius: 16, padding: '48px 52px', border: '1px solid var(--rule)' }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mute)', letterSpacing: '.05em', marginBottom: 40 }}>
              Laatst gewijzigd: 24 mei 2026
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)', marginBottom: 40 }}>
              AK Web Solutions, gevestigd te Baarn, is verantwoordelijk voor de verwerking van
              persoonsgegevens zoals beschreven in deze privacyverklaring.
            </p>

            <Sectie titel="Contactgegevens">
              <p>
                AK Web Solutions<br />
                Ayoub Elkaoui<br />
                Baarn, Nederland<br />
                E-mail: <a href="mailto:info@akwebsolutions.nl" style={{ color: 'var(--p1)' }}>info@akwebsolutions.nl</a><br />
                KvK: 96245190<br />
                BTW: NL005197684B40
              </p>
              <p style={{ marginTop: 12 }}>
                Ayoub Elkaoui is de Functionaris Gegevensbescherming en aanspreekpunt voor alle
                privacy-gerelateerde vragen.
              </p>
            </Sectie>

            <Sectie titel="Welke persoonsgegevens verwerken wij?">
              <p>Wij verwerken alleen persoonsgegevens die je zelf aan ons verstrekt, namelijk:</p>
              <ul style={ul}>
                <li>Voor- en achternaam</li>
                <li>Bedrijfsnaam</li>
                <li>Telefoonnummer</li>
                <li>E-mailadres</li>
                <li>Type bedrijf (branche)</li>
                <li>Inhoud van je bericht of opdracht</li>
                <li>Facturatiegegevens (bij opdracht)</li>
              </ul>
              <p style={{ marginTop: 12 }}>We verwerken deze gegevens uitsluitend wanneer je:</p>
              <ul style={ul}>
                <li>Een contactformulier op de website invult</li>
                <li>Per e-mail of telefoon contact opneemt</li>
                <li>Een opdracht aan ons verstrekt</li>
                <li>Een factuur ontvangt</li>
              </ul>
            </Sectie>

            <Sectie titel="Met welk doel?">
              <ul style={ul}>
                <li>Om contact met je op te nemen naar aanleiding van je aanvraag</li>
                <li>Om een offerte op te stellen</li>
                <li>Om een overeenkomst uit te voeren</li>
                <li>Voor het versturen van facturen en het bijhouden van onze administratie</li>
                <li>Om te voldoen aan wettelijke verplichtingen (zoals fiscale bewaarplicht)</li>
              </ul>
            </Sectie>

            <Sectie titel="Rechtsgronden voor de verwerking">
              <ul style={ul}>
                <li><strong>Toestemming</strong>: bij het versturen van een contactformulier</li>
                <li><strong>Uitvoering van overeenkomst</strong>: bij het uitvoeren van een opdracht</li>
                <li><strong>Wettelijke verplichting</strong>: voor administratie en belastingaangifte</li>
                <li><strong>Gerechtvaardigd belang</strong>: voor het beantwoorden van bedrijfsmatige vragen</li>
              </ul>
            </Sectie>

            <Sectie titel="Geautomatiseerde besluitvorming">
              <p>
                AK Web Solutions neemt geen besluiten op basis van geautomatiseerde verwerkingen
                over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen.
              </p>
            </Sectie>

            <Sectie titel="Bewaartermijn">
              <ul style={ul}>
                <li>Contactaanvragen zonder vervolg: 1 jaar</li>
                <li>Offertes die niet zijn omgezet in opdracht: 2 jaar</li>
                <li>Klantgegevens en facturen: 7 jaar (wettelijke verplichting Belastingdienst)</li>
                <li>Lopende projecten: voor de duur van het project plus 7 jaar voor administratie</li>
              </ul>
            </Sectie>

            <Sectie titel="Delen van persoonsgegevens met derden">
              <p>
                AK Web Solutions verkoopt jouw gegevens niet aan derden. Onze verwerkers:
              </p>
              <ul style={ul}>
                <li><strong>Resend</strong> (e-mailafhandeling contactformulier) — gevestigd in de EU</li>
                <li><strong>Vercel Inc.</strong> (hosting van de website) — VS, verwerkt onder EU-VS Data Privacy Framework</li>
                <li><strong>Plesk / Hetzner</strong> (e-mailhosting en server-infrastructuur) — EU (Duitsland)</li>
              </ul>
            </Sectie>

            <Sectie titel="Cookies en websitestatistieken">
              <p>
                Onze website gebruikt <strong>geen tracking cookies of marketing cookies</strong>.
              </p>
              <p style={{ marginTop: 12 }}>
                Wij maken gebruik van Vercel Analytics, een privacy-vriendelijke dienst die geen cookies
                plaatst en geen persoonsgegevens verwerkt. Alleen geanonimiseerde statistieken worden
                verzameld: aantal bezoekers, bezochte pagina&apos;s, bron van verkeer, land/regio en
                type apparaat. Deze gegevens kunnen niet worden herleid tot individuele personen.
              </p>
            </Sectie>

            <Sectie titel="Beveiliging">
              <ul style={ul}>
                <li>SSL-certificaat op de website</li>
                <li>Tweefactor-authenticatie op administratieve systemen</li>
                <li>Persoonsgegevens worden alleen verwerkt door Ayoub Elkaoui zelf</li>
                <li>Wachtwoorden en API-keys veilig opgeslagen via een wachtwoordmanager</li>
              </ul>
            </Sectie>

            <Sectie titel="Jouw rechten">
              <p>Je hebt het recht om:</p>
              <ul style={ul}>
                <li><strong>Inzage</strong> te krijgen in je persoonsgegevens</li>
                <li>Je gegevens te laten <strong>corrigeren</strong> als deze onjuist zijn</li>
                <li>Je gegevens te laten <strong>verwijderen</strong> (recht op vergetelheid)</li>
                <li>Je <strong>toestemming</strong> in te trekken</li>
                <li><strong>Bezwaar</strong> te maken tegen de verwerking</li>
                <li><strong>Gegevensoverdraagbaarheid</strong> te eisen</li>
                <li>Een <strong>klacht</strong> in te dienen bij de Autoriteit Persoonsgegevens</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                Stuur je verzoek naar{' '}
                <a href="mailto:info@akwebsolutions.nl" style={{ color: 'var(--p1)' }}>info@akwebsolutions.nl</a>.
                Wij reageren binnen vier weken. Voor een inzageverzoek vragen wij om een kopie van je
                identiteitsbewijs (afgeschermd via de KopieID-app van de Rijksoverheid).
              </p>
            </Sectie>

            <Sectie titel="Klachten">
              <p>
                Wanneer je een klacht hebt over de verwerking van je persoonsgegevens, neem dan eerst
                contact op via{' '}
                <a href="mailto:info@akwebsolutions.nl" style={{ color: 'var(--p1)' }}>info@akwebsolutions.nl</a>.
                Komen we er samen niet uit, dan kun je je klacht indienen bij de{' '}
                <a href="https://autoriteitpersoonsgegevens.nl" style={{ color: 'var(--p1)' }} target="_blank" rel="noopener noreferrer">
                  Autoriteit Persoonsgegevens
                </a>.
              </p>
            </Sectie>

            <p style={{ marginTop: 40, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mute)', letterSpacing: '.06em' }}>
              Versie 24 mei 2026 — AK Web Solutions
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
