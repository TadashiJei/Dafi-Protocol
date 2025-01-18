import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import type { UserProfile } from '@/types/user'

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("dafi")
    const data = await request.json()

    const result = await db.collection('users').updateOne(
      { address: data.address },
      { $set: data },
      { upsert: true }
    )

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to save user data' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const address = searchParams.get('address')

    if (!address) {
      return NextResponse.json(
        { error: 'Address is required' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("dafi")
    
    const user = await db.collection('users').findOne({ address })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: user })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    )
  }
}
