import './index.css'
import { Inter } from 'next/font/google'
import { Karantina } from 'next/font/google'
import { Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })
const karantina = Karantina({ subsets: ['latin'], display: 'swap', weight: "700" })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${karantina.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
