import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createUnitService = async ({
  name,
  description,
}: {
  name: string
  description: string
}) => {
  return await prisma.unit.create({
    data: { name, description },
  })
}

export const getUnitService = async () => {
  return await prisma.unit.findMany({})
}

export const updateUnitService = async ({
  name,
  id,
  description,
}: {
  name: string
  description: string
  id: string
}) => {
  return await prisma.unit.update({
    where: {
      id,
    },
    data: {
      name,
      description,
    },
  })
}

export const deleteUnitService = async ({ id }: { id: string }) => {
  const data = await prisma.unit.delete({
    where: {
      id,
    },
  })
  return data
}
