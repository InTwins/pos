import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createBrandService = async ({
  name,
  description,
}: {
  name: string
  description: string
}) => {
  return await prisma.brand.create({
    data: { description, name },
  })
}

export const getBrandsServive = async () => {
  return await prisma.brand.findMany({})
}

export const getSingleBrandServive = async (id: number) => {
  return await prisma.brand.findUnique({
    where: {
      id,
    },
  })
}

export const updateBrandServive = async ({
  name,
  description,
  id,
}: {
  name: string
  description: string
  id: number
}) => {
  return await prisma.brand.updateMany({
    where: {
      id,
    },
    data: {
      name,
      description,
    },
  })
}

export const deleteBrandServive = async (id: number) => {
  const data = await prisma.brand.delete({
    where: {
      id,
    },
  })
  return data
}
