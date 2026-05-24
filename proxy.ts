import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Pagina's die voorgoed verdwijnen — geen redirect, maar 410 Gone.
// Reden: Google had besloten ze niet te indexeren (dunne content, verkeerde positionering).
// 410 vertelt Google expliciet: vergeet deze URL, hij komt nooit meer terug.
const GONE_URLS = new Set([
  // Stad-specifieke pagina's (niet-geïndexeerd, te dunne content)
  '/website-laten-maken-huizen',
  '/website-laten-maken-naarden',
  '/website-laten-maken-laren',
  '/website-laten-maken-bunschoten-spakenburg',
  '/website-laten-maken-woudenberg',
  '/website-laten-maken-zzp',

  // Branche-pagina's buiten nieuwe positionering
  '/website-voor-retail',
  '/website-voor-coaches',
  '/website-voor-bouw',

  // Webshop-pagina's (geen onderdeel van nieuwe site)
  '/webshop-laten-maken-hilversum',
  '/webshop-laten-maken-amersfoort',
  '/diensten/webshop-laten-maken',
  '/diensten/webshop-laten-maken-baarn',
  '/diensten/webshop-laten-maken-amersfoort',
  '/diensten/webshop-laten-maken-hilversum',

  // Oude SEO-dienstenpagina's (niet passend bij nieuwe focus)
  '/seo-optimalisatie-hilversum',
  '/seo-optimalisatie-baarn',
  '/diensten/seo-specialist-baarn',
  '/diensten/seo-specialist-amersfoort',
  '/diensten/seo-specialist-utrecht',
  '/diensten/seo-optimalisatie',

  // Oude diensten die niet bij nieuwe positionering passen
  '/diensten/landingspagina-laten-maken',
  '/diensten/wordpress-naar-nextjs-migratie',
  '/diensten/website-laten-maken-baarn',
  '/diensten/website-laten-maken-zzp',
  '/diensten/website-laten-maken',

  // Categorie-pagina's (oude WordPress structuur)
  '/categorie/online-marketing',
  '/categorie/conversie-optimalisatie',

  // Oude blogposts (niet relevant voor installatiebranche-positionering)
  '/blog/website-maken-voor-zzp',
  '/blog/website-snelheid-verbeteren',
  '/blog/hoeveel-kost-website-2025',
  '/blog/google-pagespeed-100-score',
  '/blog/seo-tips-kleine-bedrijven',
  '/blog/website-laten-maken-baarn',
  '/blog/wordpress-vs-custom-website',
  '/blog/lokale-seo-gids',
  '/blog/webdesign-trends-2025',
  '/blog/scripts/animations',
  '/blog/hoe-jouw-bedrijf-kan-groeien-met-een-online-aanwezigheid',
  '/blog/de-toekomst-van-websites-trends-die-jouw-online-aanwezigheid-veranderen',
  '/blog/5-essentiele-tips-voor-een-succesvolle-online-onderneming',

  // Portfolio-item (buiten nieuwe niche)
  '/portfolio/loens-collection',
]);

const GONE_HTML = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <title>Pagina niet meer beschikbaar — AK Web Solutions</title>
  <meta name="robots" content="noindex">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body{font-family:system-ui,-apple-system,sans-serif;background:#f7f4f0;color:#14101c;margin:0;padding:0;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center}
    .wrap{max-width:520px;padding:40px 24px}
    .code{font-family:monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#7c3aed;margin-bottom:20px}
    h1{font-size:clamp(32px,8vw,56px);font-weight:900;line-height:.95;letter-spacing:-.02em;text-transform:uppercase;margin:0 0 20px}
    p{font-size:16px;color:#6a6075;line-height:1.6;margin:0 0 32px}
    .links{display:flex;flex-direction:column;gap:10px;max-width:280px;margin:0 auto}
    a{display:block;padding:13px 20px;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;transition:opacity .15s}
    a:hover{opacity:.8}
    .primary{background:#14101c;color:#fff}
    .ghost{border:1.5px solid #14101c;color:#14101c}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="code">410 Gone</div>
    <h1>Pagina bestaat niet meer</h1>
    <p>Deze pagina is verwijderd en wordt niet vervangen. Je kunt hieronder verder.</p>
    <div class="links">
      <a href="/" class="primary">Naar de homepage →</a>
      <a href="/diensten" class="ghost">Bekijk diensten</a>
      <a href="/voor-wie" class="ghost">Voor wie</a>
      <a href="/contact" class="ghost">Plan een gesprek</a>
    </div>
  </div>
</body>
</html>`;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Strip trailing slash voor matching, maar laat root staan
  const clean = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  if (GONE_URLS.has(clean) || GONE_URLS.has(pathname)) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Draai op alle routes behalve Next.js internals en statische assets
    '/((?!api|_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)',
  ],
};
