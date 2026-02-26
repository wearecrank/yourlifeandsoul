import type { Metadata, Viewport } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Life And Soul | Integrative Counselling for Children, Teens & Adults',
  description:
    'Your Life And Soul offers professional integrative counselling for children, teenagers and adults. BACP registered counsellor Lindsay Salmon provides a safe, collaborative and non-judgemental space for anxiety, depression, family dynamics, HG recovery and more.',
  keywords: [
    'integrative counselling',
    'Your Life And Soul',
    'Your Life And Soul Counselling',
    'integrative counsellor',
    'BACP counsellor',
    'counselling for children',
    'counselling for teenagers',
    'adult counselling',
    'anxiety counselling',
    'depression counselling',
    'hyperemesis gravidarum counselling',
    'HG recovery support',
    'family counselling',
    'Lindsay Salmon counsellor',
    'BACP registered counsellor',
    'online counselling',
    'pregnancy counselling',
  ],
  openGraph: {
    title: 'Your Life And Soul | Integrative Counselling',
    description:
      'Professional integrative counselling for children, teenagers and adults. BACP registered counsellor Lindsay Salmon helps you reconnect with yourself in a safe, non-judgemental space.',
    siteName: 'Your Life And Soul Counselling',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Life And Soul | Integrative Counselling',
    description:
      'Professional integrative counselling for children, teenagers and adults by BACP registered counsellor Lindsay Salmon.',
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#0091A1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_lora.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
