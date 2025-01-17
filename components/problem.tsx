'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { DollarSign, Users, Clock, Lock } from 'lucide-react'

const problems = [
  {
    icon: DollarSign,
    title: "Limited Access to Capital",
    description: "Traditional financing options often exclude small-scale farmers, limiting growth potential"
  },
  {
    icon: Users,
    title: "Disconnected Markets",
    description: "Lack of direct connection between farmers and potential investors creates missed opportunities"
  },
  {
    icon: Clock,
    title: "Slow Processing",
    description: "Traditional agricultural financing involves lengthy approval processes and paperwork"
  },
  {
    icon: Lock,
    title: "High Entry Barriers",
    description: "Complex requirements and high minimum investments limit participation in agricultural finance"
  }
]

export default function Problem() {
  return (
    <section className="py-24 relative bg-black/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Problems We Solve
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Addressing key challenges in agricultural financing through blockchain technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-green-900/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/10 rounded-lg p-3">
                      <problem.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-2">{problem.title}</h3>
                      <p className="text-gray-400">{problem.description}</p>
                    </div>
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

