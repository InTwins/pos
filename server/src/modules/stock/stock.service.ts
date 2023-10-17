import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createStockService = async ({
  quantity,
  price,
  purchasePrice,
  productId,
}: {
  quantity: number
  price: number
  purchasePrice: number
  productId: string
}) => {
  return await prisma.stock.create({
    data: { quantity, price, purchasePrice, productId },
  })
}

export const getStockService = async () => {
  return await prisma.stock.findMany({})
}

export const updateStockService = async ({
  id,
  quantity,
  price,
  purchasePrice,
  productId,
}: {
  id: string
  quantity: number
  price: number
  purchasePrice: number
  productId: string
}) => {
  return await prisma.stock.update({
    where: {
      id,
    },
    data: {
      quantity,
      price,
      purchasePrice,
      productId,
    },
  })
}

export const deleteStockService = async ({ id }: { id: string }) => {
  return await prisma.stock.delete({
    where: {
      id,
    },
  })
}
