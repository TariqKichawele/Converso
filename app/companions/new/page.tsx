import CompanionForm from '@/components/CompanionForm'
import { newCompanionPermissions } from '@/lib/actions/companion.action';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const NewCompanion = async () => {

  const { userId } = await auth();

  const hasPermission = await newCompanionPermissions();
  if(!userId) {
    redirect('/sign-in');
  }

  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      {hasPermission ? (
        <article className='w-full gap-4 flex flex-col'>
          <h1>Companion Builder</h1>

          <CompanionForm />
        </article>
      ) : (
        <article className='companion-limit'>
          <Image 
            src={'/images/limit.svg'}
            alt='limit'
            width={360}
            height={230}
          />

          <div className='cta-badge'>
            Upgrade your plan
          </div>

          <h1>You&apos;ve reached the limit of your plan</h1>
          <p>
            Upgrade your plan to create more companions and access premimum features.
          </p>

          <Link href="/subscription" className='btn-primary w-full justify-center'>
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  )
}

export default NewCompanion