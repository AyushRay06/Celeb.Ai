import Sidebar from "@/components/Sidebar"
import { Menu } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
