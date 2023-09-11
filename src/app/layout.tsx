import './index.css'
import { Inter } from 'next/font/google'
import { Karantina } from 'next/font/google'
import { Header, Footer } from '@/components'
import { css } from '../../styled-system/css'

const inter = Inter({ subsets: ['latin'] })
const karantina = Karantina({ subsets: ['latin'], display: 'swap', weight: "700" })

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
  gridTemplateRows: 'auto 1fr auto'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${karantina.className} ${appContainer}`}>
        <Header />
        <main className={containerStyles}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
