'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Decorative SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="200" r="90" fill="#FCCC41" opacity="0.12"/>
        <circle cx="700" cy="150" r="60" fill="#2C2C2C" opacity="0.08"/>
        <ellipse cx="650" cy="600" rx="120" ry="60" fill="#FCCC41" opacity="0.10"/>
        <ellipse cx="200" cy="650" rx="70" ry="30" fill="#2C2C2C" opacity="0.07"/>
        <circle cx="400" cy="400" r="40" fill="#FCCC41" opacity="0.07"/>
        <circle cx="600" cy="400" r="18" fill="#2C2C2C" opacity="0.10"/>
        <circle cx="300" cy="120" r="18" fill="#2C2C2C" opacity="0.10"/>
        <circle cx="500" cy="700" r="12" fill="#FCCC41" opacity="0.13"/>
        <circle cx="100" cy="700" r="8" fill="#2C2C2C" opacity="0.10"/>
      </svg>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Learn with Your
              <span className="text-primary block mt-2">AI Companion</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Experience personalized learning through natural conversations. Your AI companion adapts to your style and pace.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/companions/new">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-3"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="#about">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-signin text-lg px-8 py-3"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/hero-illustration.svg"
                alt="AI Learning Companion"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 