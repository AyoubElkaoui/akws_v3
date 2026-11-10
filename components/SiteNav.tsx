'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BRAND, NAV_LINKS } from '@/lib/data';

export function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-row">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image src="/akws-mark.png" alt="AKWS" width={34} height={34} priority />
          <span className="brand-name">
            AK <span className="light">Web Solutions</span>
          </span>
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={active === l.href ? 'active' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="phone" href={`tel:${BRAND.phoneRaw}`}>{BRAND.phone}</a>
          <Link href="/contact" className="cta-mini">
            Plan gesprek <span className="badge" />
          </Link>
        </div>

        <button
          className="nav-burger"
          type="button"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`burger-icon${open ? ' open' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-mobile-link${active === l.href ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary nav-mobile-cta" onClick={() => setOpen(false)}>
            Plan gesprek <span className="arrow">→</span>
          </Link>
          <a className="nav-mobile-phone" href={`tel:${BRAND.phoneRaw}`} style={{ display: 'block' }}>
            Bel {BRAND.phone}
          </a>
        </div>
      )}
    </header>
  );
}
