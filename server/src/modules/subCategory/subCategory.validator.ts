import { z } from "zod"

export const createSubCategoryValidator = z.object({
  name: z.string().min(2, "Enter minimum 2 characters"),
})

export const updateSubCategoryValidator = z.object({
  id: z.string(),
  name: z.string().min(2, "Enter minimum 2 characters"),
})

export const deleteSubCategoryValidator = z.object({
  id: z.string(),
})
