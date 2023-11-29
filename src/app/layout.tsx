import './index.css'
import { Inter } from 'next/font/google'
import { Knewave } from 'next/font/google'
import { Header, Footer, FirebaseAnalytics } from '@/components'
import { css } from '../../styled-system/css'


const knewave = Knewave({ subsets: ['latin'], display: 'swap', weight: ['400'] });
const inter = Inter({ subsets: ['latin'], display: 'swap', weight: ['100', '300', '400', '500', '700'] });

export const metadata = {
  title: 'Fahad Ahmed',
  description: 'Software Engineer based in Melbourne, Australia',
}

const containerStyles = css({
  padding: '1rem 2rem'
})

const appContainer = css({
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${knewave.className}`}>
      <body className={`${appContainer}`}>
        <FirebaseAnalytics />
        <Header />
        <main className={containerStyles}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
