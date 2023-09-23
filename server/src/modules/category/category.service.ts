import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createCategoryService = async ({ name }: { name: string }) => {
  return await prisma.category.create({
    data: { name },
  })
}

export const getCategoryService = async () => {
  return await prisma.category.findMany({})
}

export const updateCategoryService = async ({
  name,
  id,
}: {
  name: string
  id: number
}) => {
  return await prisma.category.update({
    where: {
      id,
    },
    data: {
      name,
    },
  })
}

export const deleteCategoryService = async ({ id }: { id: number }) => {
  const data = await prisma.category.delete({
    where: {
      id,
    },
  })
  return data
}
