'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface FloatingElement {
  name: string
  value: string
  x: number
  y: number
}

const elements: FloatingElement[] = [
  { name: 'Cortex', value: '20.945', x: 20, y: 20 },
  { name: 'Quant', value: '2.845', x: 80, y: 20 },
  { name: 'Aelf', value: '15.345', x: 20, y: 80 },
  { name: 'Meeton', value: '4.85', x: 80, y: 80 },
]

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={element.name}
          className="absolute flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 text-white/80"
          initial={{ x: `${element.x}%`, y: `${element.y}%`, opacity: 0 }}
          animate={{
            x: `${element.x}%`,
            y: `${element.y}%`,
            opacity: 1,
            transition: { delay: index * 0.2 }
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-medium">{element.name}</span>
          <span className="text-xs opacity-60">{element.value}</span>
        </motion.div>
      ))}
    </div>
  )
}
