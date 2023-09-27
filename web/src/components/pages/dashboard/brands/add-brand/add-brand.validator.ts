import { z } from "zod"

export const addBrandSchema = z.object({
  name: z.string().min(2, "Minimum 2 characters required"),
  description: z.string().optional(),
})

export type InputType = z.infer<typeof addBrandSchema>
