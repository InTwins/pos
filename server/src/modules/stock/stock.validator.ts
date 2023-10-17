import { z } from "zod"

export const createStockValidator = z.object({
  quantity: z.coerce.number(),
  price: z.coerce.number(),
  purchasePrice: z.coerce.number(),
  productId: z.string(),
})

export const updateStockValidator = z.object({
  id: z.string(),
  quantity: z.coerce.number(),
  price: z.coerce.number(),
  purchasePrice: z.coerce.number(),
  productId: z.string(),
})

export const deleteStockValidator = z.object({
  id: z.string(),
})
