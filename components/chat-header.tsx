"use client"

import { Companion, Message } from "@prisma/client"

interface ChatHeaderProps {
  companion: Companion & {
    messages: Message[]
    _count: {
      messages: number
    }
  }
}

export const ChatHeader = ({ companion }: ChatHeaderProps) => {
  return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
      Chat Header
    </div>
  )
}