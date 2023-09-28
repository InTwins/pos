import { z } from "zod"

export const createBrandValidator = z.object({
  name: z.string().min(2, "Enter minimun 2 characters"),
  description: z.string().min(5),
})

export const getSingleBrandValidator = z.object({
  id: z.string(),
})

export const updateBrandValidator = z.object({
  id: z.string(),
  name: z.string().min(2, "Enter minimun 2 characters"),
  description: z.string().min(5, "Enter minimun 5 characters"),
})

export const deleteBrandValidator = z.object({
  id: z.string(),
})
