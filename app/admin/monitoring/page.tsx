'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TransactionMonitor } from '@/lib/monitoring/transactionMonitoring'
import { AuditLogger } from '@/lib/monitoring/auditLogging'
import { ComplianceReporter } from '@/lib/monitoring/complianceReporting'

const transactionMonitor = new TransactionMonitor()
const auditLogger = new AuditLogger()
const complianceReporter = new ComplianceReporter()

export default function MonitoringPage() {
  const [userId, setUserId] = useState('')
  const [action, setAction] = useState('')
  const [details, setDetails] = useState('')

  const handleLogAction = () => {
    auditLogger.logAction(userId, action, details)
    setUserId('')
    setAction('')
    setDetails('')
  }

  const handleGenerateReport = (reportType: 'KYC' | 'AML' | 'Transaction' | 'UserActivity') => {
    switch (reportType) {
      case 'KYC':
        complianceReporter.generateKYCReport(userId, { verified: true })
        break
      case 'AML':
        complianceReporter.generateAMLReport(transactionMonitor.getTransaction('') ? [transactionMonitor.getTransaction('')!] : [])
        break
      case 'Transaction':
        complianceReporter.generateTransactionReport(new Date(), new Date(), transactionMonitor.getTransaction('') ? [transactionMonitor.getTransaction('')!] : [])
        break
      case 'UserActivity':
        complianceReporter.generateUserActivityReport(userId, auditLogger.getLogs(userId))
        break
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Monitoring & Compliance
        </h1>

        <Tabs defaultValue="audit">
          <TabsList>
            <TabsTrigger value="audit">Audit Logging</TabsTrigger>
            <TabsTrigger value="reports">Compliance Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="audit">
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="userId">User ID</Label>
                  <Input
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter user ID"
                  />
                </div>
                <div>
                  <Label htmlFor="action">Action</Label>
                  <Input
                    id="action"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    placeholder="Enter action"
                  />
                </div>
                <div>
                  <Label htmlFor="details">Details</Label>
                  <Input
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Enter details"
                  />
                </div>
                <Button onClick={handleLogAction}>Log Action</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => handleGenerateReport('KYC')}
                  className="bg-gradient-to-r from-green-400 to-emerald-500"
                >
                  Generate KYC Report
                </Button>
                <Button
                  onClick={() => handleGenerateReport('AML')}
                  className="bg-gradient-to-r from-blue-400 to-indigo-500"
                >
                  Generate AML Report
                </Button>
                <Button
                  onClick={() => handleGenerateReport('Transaction')}
                  className="bg-gradient-to-r from-purple-400 to-pink-500"
                >
                  Generate Transaction Report
                </Button>
                <Button
                  onClick={() => handleGenerateReport('UserActivity')}
                  className="bg-gradient-to-r from-orange-400 to-red-500"
                >
                  Generate User Activity Report
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
