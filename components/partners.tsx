'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Internet Computer Protocol',
    logo: 'https://internetcomputer.org/img/IC_logo_horizontal_white.svg',
    url: 'https://internetcomputer.org/'
  },
  {
    name: 'Hacktivators',
    logo: '/partners/hacktivators-logo.png',
    url: '#'
  }
]

export default function Partners() {
  return (
    <div className="w-full overflow-hidden">
      <motion.div 
        className="flex items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {partners.map((partner, i) => (
          <a
            key={i}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-w-[160px] h-16 bg-black/30 rounded-lg px-6 hover:bg-black/40 transition-colors"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={45}
              className="w-auto h-6 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
        ))}
      </motion.div>
    </div>
  )
}
