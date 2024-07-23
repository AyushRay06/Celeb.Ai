"use client"

import { Companion, Category } from "@prisma/client"

interface CompanionFormProps {
  initialData: Companion | null
  categories: Category[]
}
const CompanionForm = ({ categories, initialData }: CompanionFormProps) => {
  return <div>Jeloek</div>
}

export default CompanionForm
