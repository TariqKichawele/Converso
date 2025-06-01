'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="cta-section"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="cta-badge"
      >
        Start learning your way.
      </motion.div>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold"
      >
        Build and Personalize Learning Companion
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.
      </motion.p>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image 
          src="/images/cta.svg" 
          alt="cta" 
          width={362} 
          height={232} 
          className='w-full'
        />
      </motion.div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary"
      >
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </motion.button>
    </motion.section>
  )
}

export default CTA