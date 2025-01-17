'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { TreesIcon as Plant, Sprout, Users, BarChart3, Shield, Leaf } from 'lucide-react'

const features = [
  {
    icon: Plant,
    title: "Farm Profile Management",
    description: "Create and manage detailed farm profiles with comprehensive metrics and performance indicators"
  },
  {
    icon: Sprout,
    title: "Asset Tokenization",
    description: "Convert agricultural assets into tradeable digital tokens with transparent valuation"
  },
  {
    icon: Users,
    title: "Investor Matching",
    description: "Connect with verified investors interested in supporting sustainable agricultural projects"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track farm performance, investment returns, and market trends with advanced analytics"
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Execute secure, transparent transactions through blockchain technology"
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Support and invest in environmentally conscious farming practices"
  }
]

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Platform Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering farmers and investors with cutting-edge tools and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm hover:border-green-500/50 transition-colors">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

