import { z } from "zod"

export const UserRegistrationValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.string().default("salesperson"),
  password: z.string(),
})

export const UserLoginValidator = z.object({
  email: z.string().email(),
  password: z.string(),
})
