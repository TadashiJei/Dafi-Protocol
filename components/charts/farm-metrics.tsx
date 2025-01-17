'use client'

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const data = [
  { month: "Jan", yield: 4000, rainfall: 2400 },
  { month: "Feb", yield: 3000, rainfall: 1398 },
  { month: "Mar", yield: 2000, rainfall: 9800 },
  { month: "Apr", yield: 2780, rainfall: 3908 },
  { month: "May", yield: 1890, rainfall: 4800 },
  { month: "Jun", yield: 2390, rainfall: 3800 },
] as const;

export function FarmMetrics() {
  return (
    <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-green-400">Farm Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(147, 197, 153, 0.1)" />
              <XAxis 
                dataKey="month" 
                stroke="#93C599"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#93C599"
                style={{ fontSize: '12px' }}
              />
              <Tooltip content={<ChartTooltip active payload label />} />
              <Legend />
              <Bar dataKey="yield" fill="#4ADE80" />
              <Bar dataKey="rainfall" fill="#2DD4BF" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

