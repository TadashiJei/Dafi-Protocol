import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'DAFI - Decentralized Agricultural Finance Initiative',
  description: 'Revolutionizing agricultural financing through blockchain technology and DeFi on the Internet Computer Protocol. DAFI connects farmers with global investors using smart contracts.',
  keywords: [
    'DeFi',
    'Agriculture',
    'Blockchain',
    'Internet Computer',
    'ICP',
    'Smart Contracts',
    'Agricultural Finance',
    'Farming',
    'Cryptocurrency',
    'Decentralized Finance'
  ],
  authors: [
    { name: 'DAFI Team' }
  ],
  creator: 'DAFI Protocol',
  publisher: 'DAFI Protocol',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dafi.hacktivators.com',
    siteName: 'DAFI Protocol',
    title: 'DAFI - Decentralized Agricultural Finance Initiative',
    description: 'Revolutionizing agricultural financing through blockchain technology and DeFi on the Internet Computer Protocol',
    images: [
      {
        url: '/meta/Dafi-technical.png',
        width: 1200,
        height: 630,
        alt: 'DAFI Protocol Technical Overview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAFI - Decentralized Agricultural Finance Initiative',
    description: 'Revolutionizing agricultural financing through blockchain technology and DeFi on the Internet Computer Protocol',
    images: ['/meta/Dafi-technical.png']
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  themeColor: '#132A13',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default metadata
