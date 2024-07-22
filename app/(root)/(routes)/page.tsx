"use client"
import { SearchInput } from "@/components/search-input"
import { ModeToggle } from "@/components/mode-toggle"
import { UserButton, UserProfile } from "@clerk/nextjs"

const RootPage = () => {
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
    </div>
  )
}

export default RootPage
