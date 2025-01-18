export type UserRole = 'farmer' | 'investor' | 'admin'

export type KYCStatus = 'pending' | 'verified' | 'rejected'

export type Gender = 'male' | 'female' | 'prefer_not_to_say'

export interface UserProfile {
  id: string
  address: string
  walletType: 'metamask' | 'internetComputer'
  role?: UserRole
  kycStatus: KYCStatus
  name?: string
  email?: string
  phoneNumber?: string
  country?: string
  gender?: Gender
  createdAt: Date
  updatedAt: Date
  // Farmer specific fields
  farmName?: string
  farmLocation?: string
  farmSize?: number
  farmType?: string[]
  // Investor specific fields
  investmentPreferences?: {
    minAmount?: number
    maxAmount?: number
    preferredFarmTypes?: string[]
    riskTolerance?: 'low' | 'medium' | 'high'
  }
  // KYC verification fields
  kyc?: {
    idType?: 'passport' | 'nationalId' | 'driverLicense'
    idNumber?: string
    idExpiryDate?: Date
    idFrontImage?: string
    idBackImage?: string
    selfieImage?: string
    proofOfAddressImage?: string
    verificationDate?: Date
    rejectionReason?: string
  }
}
