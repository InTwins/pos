import { z } from "zod"

export const SignUpValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.string().default("user"),
  password: z.string(),
})

export const SignInValidator = z.object({
  email: z.string().email(),
  password: z.string(),
})
