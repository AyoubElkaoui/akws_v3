'use client';

import { useEffect } from 'react';
import { track } from '@/lib/track';

// Eén listener voor de hele site: elke klik op een telefoon-, WhatsApp- of
// maillink wordt een gebeurtenis in Plausible, met de pagina erbij.
export function TrackClicks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') ?? '';
      const pagina = window.location.pathname;
      if (href.startsWith('tel:')) track('Bel-klik', { pagina });
      else if (href.includes('wa.me/')) track('WhatsApp-klik', { pagina });
      else if (href.startsWith('mailto:info@')) track('Mail-klik', { pagina });
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
