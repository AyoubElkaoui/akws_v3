import Image from 'next/image';
import Link from 'next/link';
import { BRAND, BRANCHES } from '@/lib/data';
import { STEDEN, stadBySlug } from '@/lib/steden';
import { DIENST_LOCATIES, dienstSteden } from '@/lib/dienst-steden';
import { SOFTWARE_SOORTEN } from '@/lib/software';

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="grid">
          <div>
            <Link className="brand brand-foot" href="/">
              <Image src="/akws-mark.png" alt="AKWS" width={34} height={34} />
              <span className="brand-name">
                AK <span className="light">Web Solutions</span>
              </span>
            </Link>
            <p>
              Websites, webshops en software op maat voor het MKB in
              Midden-Nederland. Webbureau uit Baarn: korte lijntjes, eerlijke prijzen.
            </p>
            {/* TODO: Ayoub — KvK- en BTW-nummer invullen in lib/data.ts */}
            {BRAND.kvk !== 'TODO_KVK' && (
              <p style={{ fontSize: 12, marginTop: 8 }}>KvK {BRAND.kvk}</p>
            )}
          </div>
          <div>
            <div className="col-t">Diensten</div>
            <div className="col-l">
              <Link href="/diensten#m01">Websites</Link>
              <Link href="/diensten#m02">SEO & Google Ads</Link>
              <Link href="/diensten#m03">Maatwerk software</Link>
              <Link href="/diensten#m04">Onderhoud & support</Link>
            </div>
          </div>
          <div>
            <div className="col-t">Bedrijf</div>
            <div className="col-l">
              <Link href="/over">Over ons</Link>
              <Link href="/cases">Werk</Link>
              <Link href="/werkwijze">Werkwijze</Link>
              <Link href="/prijzen">Pakketten</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <div className="col-t">Contact</div>
            <div className="col-l">
              <a href={`tel:${BRAND.phoneRaw}`}>{BRAND.phone}</a>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <nav
          aria-label="Branches en plaatsen"
          style={{ display: 'grid', gap: 14, padding: '28px 0', borderTop: '1px solid rgba(255,255,255,.1)', fontSize: 13, lineHeight: 1.9 }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Link href="/voor-wie" style={{ color: '#fff', fontWeight: 600, marginRight: 14 }}>Voor wie</Link>
            {BRANCHES.map((b) => (
              <Link key={b.slug} href={`/voor-wie/${b.slug}`} style={{ color: 'rgba(255,255,255,.6)', marginRight: 14, whiteSpace: 'nowrap' }}>
                {b.naam}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Link href="/website-laten-maken" style={{ color: '#fff', fontWeight: 600, marginRight: 14 }}>Website laten maken</Link>
            {STEDEN.map((st) => (
              <Link key={st.slug} href={`/website-laten-maken/${st.slug}`} style={{ color: 'rgba(255,255,255,.6)', marginRight: 14, whiteSpace: 'nowrap' }}>
                {st.naam}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Link href="/diensten/maatwerk-software" style={{ color: '#fff', fontWeight: 600, marginRight: 14 }}>Software laten maken</Link>
            {SOFTWARE_SOORTEN.map((s) => (
              <Link key={s.slug} href={`/software-laten-maken/${s.slug}`} style={{ color: 'rgba(255,255,255,.6)', marginRight: 14, whiteSpace: 'nowrap' }}>
                {s.naam}
              </Link>
            ))}
          </div>
          {DIENST_LOCATIES.map((d) => (
            <div key={d.key} style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Link href={d.dienstHref} style={{ color: '#fff', fontWeight: 600, marginRight: 14 }}>{d.key === 'lokale-seo' ? 'Lokale SEO' : d.naam}</Link>
              {dienstSteden(d).map((slug) => (
                <Link key={slug} href={`${d.base}/${slug}`} style={{ color: 'rgba(255,255,255,.6)', marginRight: 14, whiteSpace: 'nowrap' }}>
                  {stadBySlug(slug)?.naam}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="bottom">
          <span>© 2026 AK Web Solutions · Baarn</span>
          <span>{BRAND.domain}</span>
          <span>
            <Link href="/algemene-voorwaarden" style={{ color: 'inherit' }}>Algemene voorwaarden</Link>
            {' · '}
            <Link href="/privacy" style={{ color: 'inherit' }}>Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
