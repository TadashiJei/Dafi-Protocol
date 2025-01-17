'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sprout } from 'lucide-react'
import Partners from './partners'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[80%] h-[80%] rounded-full bg-[#132A13]/20 blur-3xl" />
        <div className="absolute -bottom-[40%] -left-[10%] w-[80%] h-[80%] rounded-full bg-[#132A13]/20 blur-3xl" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Sprout className="w-12 h-12 text-green-400 mr-4" />
              <span className="text-green-400 text-xl font-medium">DAFI Protocol</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
              Decentralized Agricultural Finance Initiative
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Revolutionizing agricultural financing through blockchain technology and DeFi on the Internet Computer Protocol
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Learn More
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-sm text-gray-400 mb-4">Powered by</div>
              <Partners />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
