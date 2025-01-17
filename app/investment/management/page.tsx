'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { FileCheck, DollarSign, AlertCircle, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react'

const investments = [
  {
    id: 1,
    farmName: 'Green Valley Farm',
    amount: 50000,
    status: 'active',
    progress: 65,
    returnRate: 12.5,
    documents: ['contract.pdf', 'terms.pdf'],
    nextPayment: '2024-02-15',
  },
  {
    id: 2,
    farmName: 'Sunrise Agricultural Co.',
    amount: 75000,
    status: 'pending',
    progress: 0,
    returnRate: 15.0,
    documents: ['proposal.pdf'],
    nextPayment: 'Pending Approval',
  },
  // Add more investments as needed
]

export default function InvestmentManagement() {
  const [activeTab, setActiveTab] = useState('active')

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Investment Management</h1>
          <p className="text-white/60">Track and manage your agricultural investments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60">Total Invested</p>
                <p className="text-2xl font-bold">$125,000</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-emerald-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+12.5% from last month</span>
            </div>
          </Card>

          <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60">Active Investments</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-blue-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>1 pending approval</span>
            </div>
          </Card>

          <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60">Required Documents</p>
                <p className="text-2xl font-bold">3/4</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-purple-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-purple-500">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>1 document pending</span>
            </div>
          </Card>
        </div>

        <Card className="bg-black/40 backdrop-blur-xl border-white/10">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="p-6 border-b border-white/10">
              <TabsList className="grid grid-cols-2 gap-4">
                <TabsTrigger value="active" className="flex-1">
                  Active Investments
                </TabsTrigger>
                <TabsTrigger value="pending" className="flex-1">
                  Pending Investments
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="active" className="p-6">
              <div className="space-y-6">
                {investments
                  .filter((inv) => inv.status === 'active')
                  .map((investment) => (
                    <div
                      key={investment.id}
                      className="p-6 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{investment.farmName}</h3>
                          <p className="text-white/60">Investment ID: #{investment.id}</p>
                        </div>
                        <Button variant="outline">View Details</Button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/60">Progress</span>
                            <span>{investment.progress}%</span>
                          </div>
                          <Progress value={investment.progress} />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-white/60 text-sm">Amount</p>
                            <p className="font-semibold">${investment.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">Return Rate</p>
                            <p className="font-semibold">{investment.returnRate}%</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">Next Payment</p>
                            <p className="font-semibold">{investment.nextPayment}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">Documents</p>
                            <p className="font-semibold">{investment.documents.length} files</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="pending" className="p-6">
              <div className="space-y-6">
                {investments
                  .filter((inv) => inv.status === 'pending')
                  .map((investment) => (
                    <div
                      key={investment.id}
                      className="p-6 rounded-lg bg-white/5 border border-white/10"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{investment.farmName}</h3>
                          <p className="text-white/60">Investment ID: #{investment.id}</p>
                        </div>
                        <Button variant="outline">Complete Setup</Button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-white/60 text-sm">Amount</p>
                          <p className="font-semibold">${investment.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Return Rate</p>
                          <p className="font-semibold">{investment.returnRate}%</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Status</p>
                          <p className="font-semibold">Pending Approval</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Documents</p>
                          <p className="font-semibold">{investment.documents.length} files</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  )
}
