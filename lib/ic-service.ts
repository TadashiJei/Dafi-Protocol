import { AuthClient } from '@dfinity/auth-client'
import { HttpAgent, Identity } from '@dfinity/agent'

export class InternetComputerService {
  private static instance: InternetComputerService
  private authClient: AuthClient | null = null
  private identity: Identity | null = null

  private constructor() {}

  static getInstance(): InternetComputerService {
    if (!InternetComputerService.instance) {
      InternetComputerService.instance = new InternetComputerService()
    }
    return InternetComputerService.instance
  }

  async initialize(): Promise<void> {
    this.authClient = await AuthClient.create()
    const isAuthenticated = await this.authClient.isAuthenticated()
    
    if (isAuthenticated) {
      this.identity = this.authClient.getIdentity()
    }
  }

  async login(): Promise<Identity> {
    if (!this.authClient) {
      await this.initialize()
    }

    if (!this.authClient) {
      throw new Error('Failed to initialize Internet Computer auth client')
    }

    return new Promise((resolve, reject) => {
      this.authClient!.login({
        identityProvider: process.env.NEXT_PUBLIC_INTERNET_IDENTITY_URL || 'https://identity.ic0.app',
        onSuccess: async () => {
          this.identity = this.authClient!.getIdentity()
          resolve(this.identity)
        },
        onError: (error) => {
          reject(new Error(`Failed to login to Internet Computer: ${error}`))
        },
      })
    })
  }

  async logout(): Promise<void> {
    if (this.authClient) {
      await this.authClient.logout()
      this.identity = null
    }
  }

  getIdentity(): Identity | null {
    return this.identity
  }

  getPrincipal(): string | null {
    if (!this.identity) return null
    return this.identity.getPrincipal().toString()
  }

  async createAgent(host: string): Promise<HttpAgent> {
    if (!this.identity) {
      throw new Error('No identity available. Please login first.')
    }

    return new HttpAgent({
      host,
      identity: this.identity,
    })
  }
}
