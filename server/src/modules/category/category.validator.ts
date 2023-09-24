import { z } from "zod"

export const createCategoryValidator = z.object({
  name: z.string().min(2, "Enter minimum 2 characters"),
})

export const updateCategoryValidator = z.object({
  id: z.coerce.number(),
  name: z.string().min(2, "Enter minimum 2 characters"),
})

export const deleteCategoryValidator = z.object({
  id: z.coerce.number(),
})
