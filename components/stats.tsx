'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  {
    value: "$10M+",
    label: "Total Value Locked",
    suffix: "in agricultural assets"
  },
  {
    value: "1000+",
    label: "Registered Farmers",
    suffix: "across multiple regions"
  },
  {
    value: "500+",
    label: "Active Investors",
    suffix: "supporting agricultural growth"
  },
  {
    value: "95%",
    label: "Success Rate",
    suffix: "in funded projects"
  }
]

export default function Stats() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.suffix}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

