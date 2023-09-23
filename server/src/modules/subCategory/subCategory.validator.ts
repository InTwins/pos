import { coerce, z } from "zod"

export const createSubCategoryValidator = z.object({
  name: z.coerce.string().min(2, "Enter minimum 2 characters"),
})

export const updateSubCategoryValidator = z.object({
  id: coerce.number(),
  name: z.string().min(2, "Enter minimum 2 characters"),
})

export const deleteSubCategoryValidator = z.object({
  id: z.coerce.number(),
})
