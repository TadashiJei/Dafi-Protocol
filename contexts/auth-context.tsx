'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { InternetComputerService } from '@/lib/ic-service'

interface AuthContextType {
  address: string | null
  walletType: 'metamask' | 'internetComputer' | null
  isConnecting: boolean
  error: string | null
  connectMetaMask: () => Promise<void>
  connectInternetComputer: () => Promise<void>
  disconnect: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [walletType, setWalletType] = useState<'metamask' | 'internetComputer' | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connectMetaMask = async () => {
    try {
      setIsConnecting(true)
      setError(null)

      if (!window.ethereum) {
        throw new Error('MetaMask is not installed')
      }

      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.send('eth_requestAccounts', [])
      
      if (accounts[0]) {
        setAddress(accounts[0])
        setWalletType('metamask')
        localStorage.setItem('walletType', 'metamask')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to MetaMask')
    } finally {
      setIsConnecting(false)
    }
  }

  const connectInternetComputer = async () => {
    try {
      setIsConnecting(true)
      setError(null)

      const icService = InternetComputerService.getInstance()
      await icService.initialize()
      await icService.login()

      const principal = icService.getPrincipal()
      if (principal) {
        setAddress(principal)
        setWalletType('internetComputer')
        localStorage.setItem('walletType', 'internetComputer')
      } else {
        throw new Error('Failed to get Internet Computer principal')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to Internet Computer')
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnect = async () => {
    try {
      if (walletType === 'internetComputer') {
        const icService = InternetComputerService.getInstance()
        await icService.logout()
      }
      
      setAddress(null)
      setWalletType(null)
      localStorage.removeItem('walletType')
    } catch (err) {
      console.error('Error during disconnect:', err)
    }
  }

  useEffect(() => {
    const initializeWallet = async () => {
      const savedWalletType = localStorage.getItem('walletType') as AuthContextType['walletType']
      
      if (savedWalletType === 'metamask' && window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum)
          const accounts = await provider.send('eth_accounts', [])
          if (accounts[0]) {
            setAddress(accounts[0])
            setWalletType('metamask')
          }
        } catch (err) {
          console.error('Failed to reconnect to MetaMask:', err)
        }
      } else if (savedWalletType === 'internetComputer') {
        try {
          const icService = InternetComputerService.getInstance()
          await icService.initialize()
          const principal = icService.getPrincipal()
          if (principal) {
            setAddress(principal)
            setWalletType('internetComputer')
          }
        } catch (err) {
          console.error('Failed to reconnect to Internet Computer:', err)
        }
      }
    }

    initializeWallet()
  }, [])

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum && walletType === 'metamask') {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnect()
        } else {
          setAddress(accounts[0])
        }
      }

      window.ethereum.on('accountsChanged', handleAccountsChanged)
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [walletType])

  return (
    <AuthContext.Provider
      value={{
        address,
        walletType,
        isConnecting,
        error,
        connectMetaMask,
        connectInternetComputer,
        disconnect,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { useAuth }
