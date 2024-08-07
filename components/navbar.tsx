"use client"

import { Menu, Sparkles } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { MobileSidebar } from "./mobile-sidebar"

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
})

export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            Celeb.Ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm">
          Upgrade
          <Sparkles className=" h-4 w-4 ml-2 fill-white" />
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  )
}
