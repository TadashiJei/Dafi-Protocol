'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth-context'
import type { UserProfile, UserRole, KYCStatus } from '@/types/user'

interface UserContextType {
  user: UserProfile | null
  isLoading: boolean
  error: string | null
  updateProfile: (data: Partial<UserProfile>) => Promise<void>
  updateRole: (role: UserRole) => Promise<void>
  startKYC: (data: UserProfile['kyc']) => Promise<void>
  logout: () => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const { address, walletType } = useAuth()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load user profile from API on mount
  useEffect(() => {
    if (address) {
      fetch(`/api/user?address=${address}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setUser(data.data)
          } else {
            createNewProfile()
          }
        })
        .catch(() => createNewProfile())
        .finally(() => setIsLoading(false))
    } else {
      setUser(null)
      setIsLoading(false)
    }
  }, [address])

  const createNewProfile = async () => {
    try {
      const newProfile: UserProfile = {
        id: crypto.randomUUID(),
        address,
        walletType,
        name: '',
        email: '',
        phoneNumber: '',
        country: '',
        role: 'farmer',
        kycStatus: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProfile),
      })
      
      if (!response.ok) {
        throw new Error('Failed to create profile')
      }

      setUser(newProfile)
    } catch (err) {
      console.error('Failed to create new profile:', err)
      setError('Failed to create new profile')
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) return

    try {
      const updatedProfile = {
        ...user,
        ...data,
        updatedAt: new Date().toISOString(),
      }

      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProfile),
      })

      if (!response.ok) {
        throw new Error('Failed to update profile')
      }

      setUser(updatedProfile)
    } catch (err) {
      console.error('Failed to update profile:', err)
      throw err
    }
  }

  const updateRole = async (role: UserRole) => {
    try {
      await updateProfile({ role })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update role')
      throw err
    }
  }

  const startKYC = async (data: UserProfile['kyc']) => {
    try {
      await updateProfile({
        kyc: data,
        kycStatus: 'pending',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start KYC')
      throw err
    }
  }

  const logout = async () => {
    setUser(null)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        error,
        updateProfile,
        updateRole,
        startKYC,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
