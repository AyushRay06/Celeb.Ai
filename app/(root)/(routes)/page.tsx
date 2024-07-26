import { Categories } from "@/components/Categories"
import { SearchInput } from "@/components/search-input"
import prismadb from "@/lib/prismadb"

interface RootPageprops {
  searchParams: {
    categoryId: string
    name: string
  }
}

const RootPage = async ({ searchParams }: RootPageprops) => {
  const categories = await prismadb.category.findMany()
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  })
  return (
    <div className="h-full p-4 space-y-2 ">
      <SearchInput />
      <Categories data={categories} />
    </div>
  )
}

export default RootPage
