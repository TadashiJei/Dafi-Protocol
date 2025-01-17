'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Sprout, Coins, LineChart, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: Sprout,
    title: "Create Farm Profile",
    description: "Farmers create detailed profiles with farm metrics, production data, and growth plans"
  },
  {
    icon: Coins,
    title: "Tokenize Assets",
    description: "Agricultural assets are converted into tradeable digital tokens with smart contracts"
  },
  {
    icon: LineChart,
    title: "Attract Investment",
    description: "Investors browse and invest in tokenized farm assets through the platform"
  },
  {
    icon: ShieldCheck,
    title: "Secure Growth",
    description: "Smart contracts automatically manage returns and distribute profits"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple steps to revolutionize agricultural financing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <step.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-green-500/50 h-8 w-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

