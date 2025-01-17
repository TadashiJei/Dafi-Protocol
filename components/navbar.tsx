'use client'

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sprout, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-green-900/50" />
      
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center space-x-2">
          <Sprout className="h-6 w-6 text-green-400" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            DAFI
          </span>
        </Link>

        <button
          className="lg:hidden relative z-10 text-green-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className={`
          fixed inset-0 z-0 bg-black/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none
          flex flex-col lg:flex-row items-center justify-center gap-8
          lg:static lg:translate-x-0 lg:opacity-100
          transition-all duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 translate-x-full lg:opacity-100'}
        `}>
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <Link 
              href="#features" 
              className="text-gray-300 hover:text-green-400 transition-colors relative group"
              onClick={() => setIsOpen(false)}
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full" />
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-gray-300 hover:text-green-400 transition-colors relative group"
              onClick={() => setIsOpen(false)}
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full" />
            </Link>
            <Link 
              href="#team" 
              className="text-gray-300 hover:text-green-400 transition-colors relative group"
              onClick={() => setIsOpen(false)}
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-green-400 hover:text-green-500 hover:bg-green-400/10 relative overflow-hidden group"
            >
              <span className="relative z-10">Connect Wallet</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Button>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
              Launch App
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

