import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createBrandService = async ({
  name,
  description,
}: {
  name: string
  description: string
}) => {
  const brand = await prisma.brand.create({
    data: { description, name },
  })
  return brand
}
