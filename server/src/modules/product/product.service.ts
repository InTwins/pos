import { PrismaClient } from "@prisma/client"
import { type CreateProduct, type UpdateProduct } from "./product.validator"

const prisma = new PrismaClient()

export const createProductService = async ({
  name,
  brandId,
  categoryId,
  description,
  imageUrl,
  unitId,
}: CreateProduct) => {
  return await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      brandId,
      categoryId,
      unitId,
    },
  })
}

export const getProductService = async () => {
  return await prisma.product.findMany({
    include: {
      brand: {
        select: {
          name: true,
        },
      },
      category: {
        select: {
          name: true,
        },
      },
      unit: {
        select: {
          name: true,
        },
      },
    },
  })
}

export const updateProductService = async ({
  name,
  id,
  description,
  brandId,
  categoryId,
  imageUrl,
  unitId,
}: UpdateProduct) => {
  return await prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      imageUrl,
      brandId,
      categoryId,
      unitId,
    },
  })
}

export const deleteProductService = async ({ id }: { id: string }) => {
  return await prisma.product.delete({
    where: {
      id,
    },
  })
}
