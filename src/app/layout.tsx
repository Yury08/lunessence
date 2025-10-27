import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Lunessence Parfumes - Премиальные ароматы в одном приложении',
    template: '%s | Lunessence Parfumes',
  },
  description:
    'Откройте мир премиальных ароматов с Lunessence. Более 10000 ароматов от ведущих брендов. Коллекционируй, тестируй и находи свой идеальный аромат.',
  keywords: [
    'парфюмерия',
    'духи',
    'ароматы',
    'премиальная парфюмерия',
    'нишевые духи',
    'коллекция ароматов',
    'купить духи',
    'парфюмерная коллекция',
    'тестер духов',
  ],
  authors: [{ name: 'Lunessence' }],
  creator: 'Lunessence',
  publisher: 'Lunessence',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://lunessence.ru',
    siteName: 'Lunessence Parfumes',
    title: 'Lunessence Parfumes - Премиальные ароматы',
    description:
      'Откройте мир премиальных ароматов с Lunessence. Более 10000 ароматов от ведущих брендов.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lunessence Parfumes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lunessence Parfumes - Премиальные ароматы',
    description:
      'Откройте мир премиальных ароматов с Lunessence. Более 10000 ароматов от ведущих брендов.',
    images: ['/og-image.png'],
    creator: '@lunessence',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://lunessence.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Schema.org JSON-LD для поисковых систем */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Lunessence Parfumes',
              applicationCategory: 'ShoppingApplication',
              description: 'Твоя коллекция премиальных ароматов в одном приложении',
              url: 'https://lunessence.vercel.app',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '1250',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'RUB',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${lato.variable}`}>{children}</body>
    </html>
  );
}
