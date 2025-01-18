import { Inter } from 'next/font/google'
import './globals.css'
import metadata from './metadata'
import ClientRootLayout from './root-layout'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ClientRootLayout>
          {children}
        </ClientRootLayout>
      </body>
    </html>
  )
}
