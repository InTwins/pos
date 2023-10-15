import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createCustomerService = async ({
  name,
  email,
  phoneNumber,
  address,
}: {
  name: string
  email: string
  phoneNumber: string
  address: string
}) => {
  return await prisma.customer.create({
    data: { name, email, phoneNumber, address },
  })
}

export const getCustomerService = async () => {
  return await prisma.customer.findMany({})
}

export const updateCustomerService = async ({
  name,
  id,
  email,
  phoneNumber,
  address,
}: {
  id: string
  name: string
  email: string
  phoneNumber: string
  address: string
}) => {
  return await prisma.customer.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      phoneNumber,
      address,
    },
  })
}

export const deleteCustomerService = async ({ id }: { id: string }) => {
  const data = await prisma.customer.delete({
    where: {
      id,
    },
  })
  return data
}
