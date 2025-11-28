import type { Metadata } from 'next'
import { IBM_Plex_Sans_Condensed } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-ibm-plex-sans-condensed',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vantaranetwork.com'), // REPLACE with your actual domain
  title: {
    default: 'Vantara Network Solutions - Enterprise IT & Network Infrastructure',
    template: '%s | Vantara Network Solutions'
  },
  description: 'Empowering businesses with reliable network & IT solutions. Enterprise networking, data center, cloud services, cybersecurity, and IT infrastructure.',
  keywords: ['network solutions', 'IT infrastructure', 'enterprise networking', 'data center', 'cybersecurity', 'cloud services', 'hardware sales', 'telecom solutions'],
  authors: [{ name: 'Vantara Network Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vantaranetwork.com',
    siteName: 'Vantara Network Solutions',
    title: 'Vantara Network Solutions - Enterprise IT & Network Infrastructure',
    description: 'Empowering businesses with reliable network & IT solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vantara Network Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantara Network Solutions',
    description: 'Empowering businesses with reliable network & IT solutions.',
    images: ['/images/og-image.jpg'],
  },
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
  icons: {
    icon: '/images/logo/vantara-logo.svg',
    shortcut: '/images/logo/vantara-logo.svg',
    apple: '/images/logo/vantara-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vantara Network Solutions',
    url: 'https://vantaranetwork.com',
    logo: 'https://vantaranetwork.com/images/logo.svg',
    description: 'Enterprise IT and Network Infrastructure Solutions Provider',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      // Add full address here
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX', // REPLACE with actual phone
      contactType: 'Customer Service',
      email: 'info@vantaranetwork.com', // REPLACE with actual email
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      // Add social media URLs here
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${ibmPlexSansCondensed.variable} font-ibm antialiased`}>
        <Header />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
