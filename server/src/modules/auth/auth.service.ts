import type { User } from "@prisma/client"
import { hashPassword } from "../../lib/hash-password"
import { prisma } from "../../lib/prisma-client"

type UserType = Omit<User, "id">

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  })
}

export const createUserService = async ({
  email,
  password,
  role,
  name,
}: UserType) => {
  const hashedPassword = await hashPassword(password)

  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
      name,
    },
  })
}
