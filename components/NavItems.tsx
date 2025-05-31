'use client'

import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Companions',
        href: '/companions'
    },
    {
        label: 'My Journey',
        href: '/my-journey'
    },
    {
        label: 'Subscription',
        href: '/subscription'
    }
]

interface NavItemsProps {
  column?: boolean;
  className?: string;
}

const NavItems = ({ column = false, className = '' }: NavItemsProps) => {
    const pathname = usePathname();  
    return (
        <nav className={`flex ${column ? 'flex-col gap-4' : 'items-center gap-4'} ${className}`}>
            {navItems.map((item) => (
                <Link 
                    href={item.href} 
                    key={item.label} 
                    className={cn(
                        pathname === item.href && 'text-primary font-semibold'
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems