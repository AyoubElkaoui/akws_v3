import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import { localBusinessSchema } from '@/lib/seo';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { TrackClicks } from '@/components/TrackClicks';
import './globals.css';

// Fonts staan lokaal in app/fonts (Inter + Inter Tight, OFL-licentie): geen Google Fonts nodig.
const inter = localFont({
  src: './fonts/inter-latin.woff2',
  weight: '100 900',
  variable: '--font-sans',
  display: 'swap',
});

const interTight = localFont({
  src: './fonts/inter-tight-latin.woff2',
  weight: '100 900',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Website & software laten maken voor het MKB | AK Web Solutions Baarn',
    template: '%s | AKWS',
  },
  description:
    'Freelance developer voor het MKB in Midden-Nederland. Websites, webshops, Google Ads en software op maat. Website vanaf €1.495, vaste prijs vooraf.',
  metadataBase: new URL('https://akwebsolutions.nl'),
  keywords: [
    'website laten maken installateur',
    'website laten maken aannemer',
    'website laten maken hovenier',
    'website laten maken schilder',
    'webdeveloper installatiebedrijf',
    'website loodgieter',
    'website bouwbedrijf',
    'Google Ads installateur',
    'maatwerk software installatie',
    'website voor vakmensen',
    'website laten maken MKB',
    'software laten maken',
    'webshop laten maken',
    'freelancer Baarn',
    'website Midden-Nederland',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'AK Web Solutions',
    // Social-preview wordt gegenereerd door app/opengraph-image.tsx.
  },
  twitter: { card: 'summary_large_image' },
  verification: { google: '3HwRdeI8kKX00Zq06xpm2urRC3KExYES3d-MQ4EkC94' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <TrackClicks />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />

        {/* Privacy-vriendelijke analytics — Plausible (geen cookiebanner nodig) */}
        <Script
          defer
          src="https://plausible.io/js/pa-UrWzaBmn4p0tJC6gPC8s6.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
