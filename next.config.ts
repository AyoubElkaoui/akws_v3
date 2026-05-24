import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      // ─── Homepage varianten ─────────────────────────────────────────
      { source: '/index.html', destination: '/', permanent: true },

      // ─── Trailing slash canonicalisatie ────────────────────────────
      { source: '/diensten/', destination: '/diensten', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/over/', destination: '/over', permanent: true },
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/cases/', destination: '/cases', permanent: true },
      { source: '/voor-wie/', destination: '/voor-wie', permanent: true },
      { source: '/privacy/', destination: '/privacy', permanent: true },

      // ─── Over pagina (oude URL /over-ons) ──────────────────────────
      { source: '/over-ons', destination: '/over', permanent: true },
      { source: '/over-ons/', destination: '/over', permanent: true },

      // ─── Privacy en voorwaarden ────────────────────────────────────
      { source: '/voorwaarden', destination: '/algemene-voorwaarden', permanent: true },
      { source: '/voorwaarden/', destination: '/algemene-voorwaarden', permanent: true },
      { source: '/terms', destination: '/algemene-voorwaarden', permanent: true },
      { source: '/terms/', destination: '/algemene-voorwaarden', permanent: true },
      { source: '/cookies', destination: '/privacy', permanent: true },
      { source: '/cookies/', destination: '/privacy', permanent: true },

      // ─── Portfolio → cases ──────────────────────────────────────────
      { source: '/portfolio', destination: '/cases', permanent: true },
      { source: '/portfolio/', destination: '/cases', permanent: true },
      // Loens Collection valt niet binnen nieuwe niche, geen individuele case
      { source: '/portfolio/loens-collection', destination: '/cases', permanent: true },

      // ─── Stad-specifieke pagina's (geïndexeerd) → branche-pagina ───
      { source: '/website-laten-maken-baarn', destination: '/voor-wie/installatiebedrijven', permanent: true },
      { source: '/website-laten-maken-nijkerk', destination: '/voor-wie/installatiebedrijven', permanent: true },
      { source: '/website-laten-maken-soest', destination: '/voor-wie/installatiebedrijven', permanent: true },
      { source: '/website-laten-maken-bussum', destination: '/voor-wie/installatiebedrijven', permanent: true },

      // ─── Webshop-pagina (geïndexeerd) → diensten ───────────────────
      // We doen geen pure webshops meer; /diensten/websites bestaat niet
      { source: '/webshop-laten-maken-baarn', destination: '/diensten', permanent: true },

      // ─── Oude blog posts (geïndexeerd maar buiten nieuwe positionering)
      { source: '/blog/webshop-starten-complete-gids', destination: '/blog', permanent: true },
      { source: '/blog/waarom-professionele-website-essentieel', destination: '/blog', permanent: true },

      // ─── Bedankt pagina → homepage ─────────────────────────────────
      { source: '/bedankt', destination: '/', permanent: true },
      { source: '/bedankt/', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
