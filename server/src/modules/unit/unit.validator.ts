import { z } from "zod"

export const createUnitValidator = z.object({
  name: z.string().min(2, "Enter minimum 2 characters"),
  description: z.string(),
})

export const updateUnitValidator = z.object({
  id: z.string(),
  name: z.string().min(2, "Enter minimum 2 characters"),
  description: z.string(),
})

export const deleteUnitValidator = z.object({
  id: z.string(),
})
