'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Leaf, MapPin, DollarSign, Search } from 'lucide-react'

// Mock data for farms
const farms = [
  { id: 1, name: 'Green Valley Farm', location: 'California', size: 500, crops: ['Corn', 'Soybeans'], investmentNeeded: 250000 },
  { id: 2, name: 'Sunrise Agricultural Co.', location: 'Iowa', size: 750, crops: ['Wheat', 'Barley'], investmentNeeded: 400000 },
  { id: 3, name: 'Blue Ridge Crops', location: 'Virginia', size: 300, crops: ['Apples', 'Peaches'], investmentNeeded: 150000 },
  // Add more farms as needed
]

export default function FarmsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFarms = farms.filter(farm =>
    farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farm.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farm.crops.some(crop => crop.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Farms</h1>
            <p className="text-white/60">Explore investment opportunities in farms</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <Input
            placeholder="Search farms by name, location, or crop type"
            className="pl-10 bg-white/5 border-white/10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFarms.map(farm => (
            <Card key={farm.id} className="p-6 bg-black/40 backdrop-blur-xl border-white/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{farm.name}</h2>
                  <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-emerald-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-white/60">
                    <MapPin className="h-4 w-4 mr-2" />
                    {farm.location}
                  </div>
                  <div className="flex items-center text-white/60">
                    <Leaf className="h-4 w-4 mr-2" />
                    {farm.size} acres
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {farm.crops.map(crop => (
                      <span
                        key={crop}
                        className="px-2 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-500"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-white/60">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>Investment Needed</span>
                    </div>
                    <span className="text-lg font-semibold">
                      ${farm.investmentNeeded.toLocaleString()}
                    </span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
