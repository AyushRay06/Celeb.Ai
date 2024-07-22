"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { UserButton, UserProfile } from "@clerk/nextjs"

const RootPage = () => {
  return (
    <div>
      <UserButton />
      <ModeToggle />
    </div>
  )
}

export default RootPage
