import './index.css'
import { Rubik } from 'next/font/google'
import { Header } from '@/components'

const rubik = Rubik({ subsets: ['latin'] })

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
      <body className={rubik.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
