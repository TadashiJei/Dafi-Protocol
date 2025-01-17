'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Droplets, Thermometer, Wind } from 'lucide-react'

const stats = [
  {
    title: "Soil Moisture",
    value: "65%",
    change: "+2%",
    icon: Droplets,
  },
  {
    title: "Temperature",
    value: "24°C",
    change: "-1°C",
    icon: Thermometer,
  },
  {
    title: "Humidity",
    value: "78%",
    change: "+5%",
    icon: Cloud,
  },
  {
    title: "Wind Speed",
    value: "12km/h",
    change: "-2km/h",
    icon: Wind,
  },
]

export function AgriculturalStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-black/40 border-green-900/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-400">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change} from last reading
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

