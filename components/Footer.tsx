'use client'

import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold text-primary">Converso</div>
        <div className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Converso. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="https://github.com/" target="_blank" aria-label="GitHub" className="hover:text-primary transition-colors">
            <FaGithub size={22} />
          </Link>
          <Link href="https://twitter.com/" target="_blank" aria-label="Twitter" className="hover:text-primary transition-colors">
            <FaTwitter size={22} />
          </Link>
          <Link href="https://linkedin.com/" target="_blank" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <FaLinkedin size={22} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 