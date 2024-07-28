import prismadb from "@/lib/prismadb"
import { auth, redirectToSignIn } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ChatClient } from "./components/client"
import { RedirectToSignIn } from "@clerk/nextjs"

interface ChatPageProps {
  params: {
    chatId: string
  }
}

const Chat = async ({ params }: ChatPageProps) => {
  const { userId } = auth()

  if (!userId) {
    return <RedirectToSignIn />
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      },
      _count: {
        select: {
          messages: true,
        },
      },
    },
  })

  if (!companion) {
    return redirect("/")
  }

  return <ChatClient companion={companion} />
}
export default Chat
