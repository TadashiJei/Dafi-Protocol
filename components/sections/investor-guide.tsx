'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Search, LineChart, Wallet, ArrowRightLeft, BarChart4, ShieldCheck } from 'lucide-react'

const investorSteps = [
  {
    icon: Search,
    title: "Browse Farm Projects",
    description: "Explore verified agricultural projects with detailed metrics and risk assessments",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: LineChart,
    title: "Analyze Performance",
    description: "Review historical yield data, revenue projections, and risk factors",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Wallet,
    title: "Purchase Tokens",
    description: "Invest in farm tokens representing shares in agricultural projects",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: ArrowRightLeft,
    title: "Track Investments",
    description: "Monitor your portfolio performance and farming operations in real-time",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: BarChart4,
    title: "Earn Returns",
    description: "Receive returns from successful harvests and farm operations",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: ShieldCheck,
    title: "Smart Contracts",
    description: "Benefit from automated, secure distribution of returns via smart contracts",
    color: "from-indigo-500 to-violet-500"
  }
]

export function InvestorGuide() {
  return (
    <section className="py-24 relative" id="investor-guide">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-green-950/10 to-black/0" />
      
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Investor's Guide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start your journey in agricultural investments with our simple, secure process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investorSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative group overflow-hidden bg-black/40 border-green-900/50 backdrop-blur-sm hover:border-green-500/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out" style={{
                  backgroundImage: `linear-gradient(to right, ${step.color})`
                }} />
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-lg bg-gradient-to-r w-fit" style={{
                    backgroundImage: `linear-gradient(to right, ${step.color})`
                  }}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

