'use client'

import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { address, disconnect } = useAuth()
  const router = useRouter()

  const handleDisconnect = async () => {
    await disconnect()
    router.push('/')
  }

  if (!address) {
    router.push('/auth')
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                DAFI
              </Link>
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/farms" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Farms
                </Link>
                <Link href="/investment" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Investment
                </Link>
                <Link href="/admin/monitoring" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Monitoring
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {address.slice(0, 6)}...{address.slice(-4)}
              </span>
              <Button
                onClick={handleDisconnect}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:text-white"
              >
                Disconnect
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
