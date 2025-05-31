'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItems from './NavItems'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className='navbar relative'>
      <Link href='/'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image
            src='/images/logo.svg'
            alt='logo'
            width={46}
            height={44}
          />
          <h1 className='text-2xl font-bold'>Companion</h1>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className='hidden md:flex items-center gap-8'>
        <ThemeToggle />
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Hamburger Icon */}
      <button
        className='md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-auto'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen ? <X className='w-7 h-7' /> : <Menu className='w-7 h-7' />}
      </button>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className='fixed inset-0 z-50 bg-black/60 flex justify-end md:hidden'>
          <div className='w-3/4 max-w-xs bg-background h-full shadow-lg flex flex-col p-6'>
            <div className='flex justify-between items-center mb-6'>
              <span className='text-xl font-bold'>Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} aria-label='Close menu'>
                <X className='w-7 h-7' />
              </button>
            </div>
            <nav className="flex flex-col gap-6 mb-6">
              <NavItems column />
            </nav>
            <div className="flex flex-col gap-4 mt-auto">
              <ThemeToggle />
              <SignedOut>
                <SignInButton>
                  <button className="btn-signin w-full">Sign In</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar