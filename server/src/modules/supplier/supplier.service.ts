import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createSupplierService = async ({
  firstName,
  lastName,
  phoneNumber,
  company,
  description,
}: {
  firstName: string
  lastName: string
  phoneNumber: string
  company: string
  description: string
}) => {
  return await prisma.supplier.create({
    data: { firstName, lastName, phoneNumber, company, description },
  })
}

export const getSupplierService = async () => {
  return await prisma.supplier.findMany({})
}

export const updateSupplierService = async ({
  id,
  firstName,
  lastName,
  phoneNumber,
  company,
  description,
}: {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  company: string
  description: string
}) => {
  return await prisma.supplier.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      phoneNumber,
      company,
      description,
    },
  })
}

export const deleteSupplierService = async ({ id }: { id: string }) => {
  return await prisma.supplier.delete({
    where: {
      id,
    },
  })
}
