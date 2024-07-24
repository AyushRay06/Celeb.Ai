import prismadb from "@/lib/prismadb"
import CompanionForm from "./components/Companion-form"

interface CompanionIdPageProps {
  params: {
    companionId: string
  }
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
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
