import { z } from "zod"
import { UserRole } from "@prisma/client"

export const SignUpValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.nativeEnum(UserRole).default("SALES_PERSON"),
  password: z.string(),
})

export const SignInValidator = z.object({
  email: z.string().email(),
  password: z.string(),
})
