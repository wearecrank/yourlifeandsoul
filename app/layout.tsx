import type { Metadata, Viewport } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { DyslexiaProvider } from '@/components/dyslexia-provider'
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
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: '/favicon-256.png',
  },
  title: 'Your Life And Soul | Counselling for Children, Teens & Adults in Surrey',
  description:
    'Your Life And Soul offers professional counselling for children, teenagers and adults in Surrey. BACP registered counsellor Lindsay Salmon provides a safe, collaborative and non-judgemental space for anxiety, depression, family dynamics, HG recovery and more.',
  keywords: [
    'counselling',
    'counselling Surrey',
    'counsellor',
    'Your Life And Soul',
    'Your Life And Soul Counselling',
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
    'counselling Addlestone',
    'counselling Weybridge',
    'counselling Chertsey',
    'counselling Woking',
  ],
  openGraph: {
    title: 'Your Life And Soul | Counselling in Surrey',
    description:
      'Professional counselling for children, teenagers and adults in Surrey. BACP registered counsellor Lindsay Salmon helps you reconnect with yourself in a safe, non-judgemental space.',
    siteName: 'Your Life And Soul Counselling',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Life And Soul | Counselling in Surrey',
    description:
      'Professional counselling for children, teenagers and adults in Surrey by BACP registered counsellor Lindsay Salmon.',
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
        <DyslexiaProvider>
          {children}
        </DyslexiaProvider>
        <Analytics />
      </body>
    </html>
  )
}
