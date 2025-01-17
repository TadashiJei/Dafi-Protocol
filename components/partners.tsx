'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Internet Computer Protocol',
    logo: '/partners/icp-logo.svg',
    url: 'https://internetcomputer.org/'
  },
  {
    name: 'Hacktivators',
    logo: '/partners/hacktivators-logo.svg',
    url: '#'
  }
]

export default function Partners() {
  return (
    <div className="w-full py-12 overflow-hidden bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center gap-16 animate-scroll"
          initial={{ x: 0 }}
          animate={{ 
            x: [0, -100],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[200px] h-20 bg-black/30 rounded-lg px-8 hover:bg-black/40 transition-colors"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={40}
                className="w-auto h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
