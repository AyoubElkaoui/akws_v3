import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/data';

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
              Websites en maatwerk software voor installatiebedrijven in Midden-Nederland.
              Eén freelancer, korte lijntjes, eerlijke prijzen.
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
              <Link href="/over">Over Ayoub</Link>
              <Link href="/cases">Cases</Link>
              <Link href="/werkwijze">Werkwijze</Link>
              <Link href="/prijzen">Prijzen</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>
          <div>
            <div className="col-t">Contact</div>
            <div className="col-l">
              <a href={`tel:${BRAND.phoneRaw}`}>{BRAND.phone}</a>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`https://wa.me/31${BRAND.phoneRaw.slice(1)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 AK Web Solutions · Ayoub Elkaoui</span>
          <span>{BRAND.domain}</span>
          <span>
            <Link href="/algemene-voorwaarden" style={{ color: 'inherit' }}>Algemene voorwaarden</Link>
            {' · '}
            <Link href="/privacy" style={{ color: 'inherit' }}>Privacy</Link>
          </span>
        </div>
        <div style={{ paddingTop: 16, fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,.25)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
          Foto&apos;s via Unsplash. Mockdata in software-screenshots.
        </div>
      </div>
    </footer>
  );
}
