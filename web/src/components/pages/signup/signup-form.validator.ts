import { z } from "zod"

export const signUpSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})

export type InputType = z.infer<typeof signUpSchema>
