'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Select } from '@/components/ui/select'
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowUpRight, ArrowDownRight, Wallet, Users, Activity } from 'lucide-react'

// Sample data for the chart
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 1100 },
]

const stats = [
  {
    name: 'Total Balance',
    value: '$78,920.00',
    change: '+$931.12',
    changeType: 'positive',
    icon: Wallet,
  },
  {
    name: 'Active Farms',
    value: '12',
    change: '+2 this month',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'ROI',
    value: '24.5%',
    change: '-2.3% from last month',
    changeType: 'negative',
    icon: Activity,
  },
]

export default function Dashboard() {
  const { address, walletType } = useAuth()
  const [userType, setUserType] = useState<'farmer' | 'investor' | ''>('')

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Dashboard
            </h1>
            <p className="text-gray-400 mt-1">
              Welcome back! Here's your overview.
            </p>
          </div>
          <Select
            value={userType}
            onValueChange={(value: 'farmer' | 'investor') => setUserType(value)}
            placeholder="Select user type"
            options={[
              { value: 'farmer', label: 'Farmer' },
              { value: 'investor', label: 'Investor' },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.name} className="p-6 bg-black/40 backdrop-blur-xl border-gray-800">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.name}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-emerald-500" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.changeType === 'positive' ? (
                  <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={stat.changeType === 'positive' ? 'text-emerald-500' : 'text-red-500'}>
                  {stat.change}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-black/40 backdrop-blur-xl border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">Portfolio Performance</h2>
              <p className="text-sm text-gray-400">Last 7 months</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-700">1D</Button>
              <Button variant="outline" className="border-gray-700">1W</Button>
              <Button variant="outline" className="border-gray-700">1M</Button>
              <Button variant="outline" className="border-gray-700 bg-emerald-500/10 text-emerald-500">
                7M
              </Button>
              <Button variant="outline" className="border-gray-700">1Y</Button>
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  stroke="#6B7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#6B7280"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#111827',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10B981"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-black/40 backdrop-blur-xl border-gray-800">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            {/* Add transaction list here */}
          </Card>
          <Card className="p-6 bg-black/40 backdrop-blur-xl border-gray-800">
            <h2 className="text-lg font-semibold mb-4">Active Investments</h2>
            {/* Add investments list here */}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
