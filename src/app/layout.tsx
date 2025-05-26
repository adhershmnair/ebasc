import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const lato = Lato({ 
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EBASC - Edanadu Brothers Arts and Sports Club',
  description: 'Arts and Sports Club promoting cultural and athletic activities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet" />
      </head>      <body className={lato.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/scripts/carousel.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
