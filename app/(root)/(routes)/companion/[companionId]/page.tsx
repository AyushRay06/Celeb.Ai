import prismadb from "@/lib/prismadb"
import CompanionForm from "./components/Companion-form"
import { auth, redirectToSignIn } from "@clerk/nextjs/server"
import { RedirectToSignIn } from "@clerk/nextjs"

interface CompanionIdPageProps {
  params: {
    companionId: string
  }
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  const { userId } = auth()

  if (!userId) {
    return <RedirectToSignIn />
  }
  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    },
  })

  const categories = await prismadb.category.findMany()

  return (
    <div className="bg-primary/10">
      <CompanionForm initialData={companion} categories={categories} />
    </div>
  )
}

export default CompanionIdPage
