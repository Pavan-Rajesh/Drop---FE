'use client'
import React from 'react'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'

const Navbar = () => {
  const { user } = useUser()

  return (
    <nav className="px-6 sticky top-0 flex justify-between items-center min-h-20">
      <div className="text-2xl font-semibold flex items-center">Drop</div>

      <div className="flex items-center gap-5">
        <SignedOut>
          <SignUpButton />
          <SignInButton />
        </SignedOut>

        <SignedIn>
          {/* Optional: Greet user */}
          <div className="text-sm hidden sm:block">Welcome, {user?.firstName || 'User'}!</div>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
