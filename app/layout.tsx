import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed, JetBrains_Mono } from 'next/font/google';
import { localBusinessSchema } from '@/lib/seo';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Websites & software voor installateurs | AK Web Solutions Baarn',
    template: '%s | AKWS',
  },
  description:
    'Freelance webdeveloper voor installatiebedrijven in Midden-Nederland. Websites, Google Ads en maatwerk software. Vaste prijzen, geen verrassingen.',
  metadataBase: new URL('https://akwebsolutions.nl'),
  keywords: [
    'website laten maken installateur',
    'webdeveloper installatiebedrijf',
    'website loodgieter',
    'Google Ads installateur',
    'maatwerk software installatie',
    'freelancer Baarn',
    'website Midden-Nederland',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'AK Web Solutions',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AK Web Solutions' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${barlow.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </body>
    </html>
  );
}
