import { z } from "zod"

export const createCategoryValidator = z.object({
  name: z.string().min(2, "Enter minimum 2 characters"),
  description: z.string(),
})

export const updateCategoryValidator = z.object({
  id: z.string(),
  name: z.string().min(2, "Enter minimum 2 characters"),
  description: z.string(),
})

export const deleteCategoryValidator = z.object({
  id: z.string(),
})
