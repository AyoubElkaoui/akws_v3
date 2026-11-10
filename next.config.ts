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
      { source: '/website-laten-maken/', destination: '/website-laten-maken', permanent: true },
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

      // ─── Oude stad-URL's (geïndexeerd) → nieuwe stadspagina's ──────
      { source: '/website-laten-maken-baarn', destination: '/website-laten-maken/baarn', permanent: true },
      { source: '/website-laten-maken-nijkerk', destination: '/website-laten-maken/nijkerk', permanent: true },
      { source: '/website-laten-maken-soest', destination: '/website-laten-maken/soest', permanent: true },
      { source: '/website-laten-maken-bussum', destination: '/website-laten-maken/bussum', permanent: true },

      // ─── Webshop-pagina (geïndexeerd) → diensten ───────────────────
      // We doen geen pure webshops meer; /diensten/websites bestaat niet
      { source: '/webshop-laten-maken-baarn', destination: '/diensten', permanent: true },

      // ─── Blog slug hernoemed
      { source: '/blog/van-dijk-218-procent-meer-aanvragen', destination: '/blog/ad-loodgietersbedrijf-nieuwe-website-lokale-seo', permanent: true },
      { source: '/blog/ad-loodgieter-meer-aanvragen-google-ads', destination: '/blog/ad-loodgietersbedrijf-nieuwe-website-lokale-seo', permanent: true },

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
