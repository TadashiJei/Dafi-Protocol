'use client'

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const data = [
  { timestamp: "00:00", price: 2.4, volume: 4000 },
  { timestamp: "04:00", price: 2.8, volume: 3000 },
  { timestamp: "08:00", price: 3.2, volume: 2000 },
  { timestamp: "12:00", price: 3.8, volume: 2780 },
  { timestamp: "16:00", price: 4.2, volume: 1890 },
  { timestamp: "20:00", price: 4.8, volume: 2390 },
  { timestamp: "24:00", price: 5.2, volume: 3490 },
] as const;

export function PriceChart() {
  return (
    <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-green-400">DAFI Token Price</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(147, 197, 153, 0.1)" />
              <XAxis 
                dataKey="timestamp" 
                stroke="#93C599"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#93C599"
                style={{ fontSize: '12px' }}
              />
              <Tooltip content={<ChartTooltip active payload label />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#4ADE80" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="volume" 
                stroke="#2DD4BF" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

