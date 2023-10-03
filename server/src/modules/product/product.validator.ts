import { z } from "zod"

export const createProductValidator = z.object({
  name: z.string().min(2, "Enter minimum 2 characters"),
  description: z.string(),
  imageUrl: z.string(),
  brandId: z.string(),
  categoryId: z.string(),
  unitId: z.string(),
})

export type CreateProduct = z.infer<typeof createProductValidator>

export const updateProductValidator = z.object({
  id: z.string(),
  name: z.string().min(2, "Enter minimum 2 characters").optional(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  brandId: z.string().optional(),
  categoryId: z.string().optional(),
  unitId: z.string().optional(),
})

export type UpdateProduct = z.infer<typeof updateProductValidator>

export const deleteProductValidator = z.object({
  id: z.string(),
})
