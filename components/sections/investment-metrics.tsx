'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { ChartContainer, ChartTooltip } from '@/components/ui/chart'

const performanceData = [
  { month: 'Jan', roi: 5.2, benchmark: 4.1 },
  { month: 'Feb', roi: 5.8, benchmark: 4.3 },
  { month: 'Mar', roi: 6.1, benchmark: 4.2 },
  { month: 'Apr', roi: 5.9, benchmark: 4.4 },
  { month: 'May', roi: 6.3, benchmark: 4.5 },
  { month: 'Jun', roi: 6.8, benchmark: 4.6 },
] as const;

const portfolioData = [
  { name: 'Grain Farms', value: 40 },
  { name: 'Vegetable Farms', value: 25 },
  { name: 'Fruit Orchards', value: 20 },
  { name: 'Sustainable Farms', value: 15 },
] as const;

const COLORS = ['#4ADE80', '#2DD4BF', '#22D3EE', '#818CF8']

export function InvestmentMetrics() {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-400">Investment Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(147, 197, 153, 0.1)" />
                      <XAxis dataKey="month" stroke="#93C599" />
                      <YAxis stroke="#93C599" />
                      <Tooltip content={<ChartTooltip active payload label />} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="roi" 
                        name="DAFI ROI" 
                        stroke="#4ADE80" 
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="benchmark" 
                        name="Market Benchmark" 
                        stroke="#22D3EE" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-green-400">Portfolio Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={portfolioData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {portfolioData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip content={<ChartTooltip active payload label />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

