'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { MetaMaskInstructions } from '@/components/metamask-instructions'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AuthPage() {
  const { connectMetaMask, connectInternetComputer, isConnecting, error } = useAuth()
  const [showMetaMaskInstructions, setShowMetaMaskInstructions] = useState(false)

  const handleMetaMaskConnect = async () => {
    if (!window.ethereum) {
      setShowMetaMaskInstructions(true)
      return
    }
    await connectMetaMask()
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-900 via-gray-900 to-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-black/40 backdrop-blur-xl border-gray-800">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              DAFI
            </Link>
            <Link 
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Back to website
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            Connect Wallet
          </h1>
          <p className="text-gray-400 mb-8">
            Choose your preferred wallet to connect with DAFI platform
          </p>

          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleMetaMaskConnect}
                disabled={isConnecting}
                className="w-full h-14 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl flex items-center justify-between px-4"
              >
                <span className="text-lg font-medium">MetaMask</span>
                <Icons.metamask className="h-8 w-8" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={connectInternetComputer}
                disabled={isConnecting}
                className="w-full h-14 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl flex items-center justify-between px-4"
              >
                <span className="text-lg font-medium">Internet Computer</span>
                <Icons.icp className="h-8 w-8" />
              </Button>
            </motion.div>
          </div>

          {error && (
            <p className="mt-4 text-red-500 text-sm">
              {error}
            </p>
          )}
        </div>
      </Card>

      <MetaMaskInstructions
        isOpen={showMetaMaskInstructions}
        onClose={() => setShowMetaMaskInstructions(false)}
      />
    </div>
  )
}
