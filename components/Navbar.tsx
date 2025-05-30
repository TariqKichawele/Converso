import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import NavItems from './NavItems'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className='navbar'>
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

        <div className='flex items-center gap-8'>
            <NavItems />
            <SignedOut>
                <SignInButton mode="modal">
                    <button className="text-sm font-medium">Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                    <button className="text-sm font-medium">Sign Up</button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar