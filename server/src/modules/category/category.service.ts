import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createCategoryService = async ({
  name,
  description,
}: {
  name: string
  description: string
}) => {
  return await prisma.category.create({
    data: { name, description },
  })
}

export const getCategoryService = async () => {
  return await prisma.category.findMany({})
}

export const updateCategoryService = async ({
  name,
  id,
  description,
}: {
  name: string
  description: string
  id: string
}) => {
  return await prisma.category.update({
    where: {
      id,
    },
    data: {
      name,
      description,
    },
  })
}

export const deleteCategoryService = async ({ id }: { id: string }) => {
  const data = await prisma.category.delete({
    where: {
      id,
    },
  })
  return data
}
