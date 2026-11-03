import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { Dock } from '@/components/Dock';
import { site } from '@/lib/site';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-hanken',
  display: 'swap',
});

const title = 'studio tonton · websites, branding en motion in Hasselt';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: '%s · studio tonton' },
  description: site.description,
  applicationName: 'studio tonton',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: site.url,
    siteName: 'studio tonton',
    title,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title, description: site.description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

// Zet het thema vóór de eerste paint (geen flits)
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'studio tonton',
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: ['Hasselt', 'Limburg', 'Vlaanderen', 'Brussel'],
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.region, addressCountry: 'BE' },
  priceRange: '€€',
  knowsAbout: ['Webdesign', 'Branding', 'Motion design', 'UX/UI design', 'AI-automatisatie'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" className={hanken.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip">
          Naar inhoud
        </a>
        {children}
        <Dock />
      </body>
    </html>
  );
}
