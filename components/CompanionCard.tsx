'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="companion-card transition-colors duration-300 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 shadow-md"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center">
        <div
          className="subject-badge"
          style={{ backgroundColor: color, color: '#222', fontWeight: 600 }}
        >
          {subject}
        </div>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="clock" width={13.5} height={13.5} />
        <p className="text-sm">{duration} mins</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary w-full justify-center"
        >
          Launch Lesson
        </motion.button>
      </Link>
    </motion.article>
  )
}

export default CompanionCard