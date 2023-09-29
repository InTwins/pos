import { z } from "zod"

export const addCategorySchema = z.object({
  name: z.string().min(2, "Minimum 2 characters required"),
  description: z.string(),
})

export type InputType = z.infer<typeof addCategorySchema>
