const { PrismaClient } = require("@prisma/client")

const db = new PrismaClient()

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "SuperHero" },
        { name: "Movie Stars" },
        { name: "Artist" },
        { name: "Animals" },
        { name: "Philosophy" },
        { name: "Organism" },
        { name: "Food" },
        { name: "Machine" },
        { name: "Anime" },
      ],
    })
  } catch (error) {
    console.error("Error seeding default categories", error)
  } finally {
    await db.$disconnect()
  }
}

main()
