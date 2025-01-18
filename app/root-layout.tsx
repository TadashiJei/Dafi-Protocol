'use client'

import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { AuthProvider } from '@/contexts/auth-context'

const inter = Inter({ subsets: ['latin'] })

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
    </AuthProvider>
  )
}
