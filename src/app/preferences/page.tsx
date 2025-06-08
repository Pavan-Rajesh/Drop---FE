'use client'
import React from 'react'
import { useUser, useAuth } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

const PreferencesPage = () => {
  const { user, isLoaded } = useUser()
  const { getToken } = useAuth()

  const runFunction = async () => {
    try {
      const token = await getToken()
      const res = await fetch('http://localhost:3001/private/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (!res.ok) {
        throw new Error('Failed to fetch protected data')
      }
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.error('Error fetching protected data:', error)
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <div>Please sign in to view your preferences</div>
  }

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 pt-16 pb-10">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Preferences</h1>
          <p className="text-muted-foreground mt-2">Manage your account preferences and settings</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">Account Information</h2>
            <div className="space-y-2 text-sm">
              <p>Name: {user.fullName}</p>
              <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
            </div>
          </div>

          <Button onClick={runFunction} variant="outline">
            Test Protected Route
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PreferencesPage
