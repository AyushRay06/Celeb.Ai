"use client"

import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { useRouter, useSearchParams } from "next/navigation"

export const SearchInput = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-10 bg-primary/10" />
    </div>
  )
}
