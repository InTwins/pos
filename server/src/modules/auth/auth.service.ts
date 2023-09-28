import type { User } from "@prisma/client"
import { hashPassword } from "../../lib/hash-password"
import { prisma } from "../../lib/prisma-client"

type UserType = Pick<User, "email" | "name" | "password" | "role">

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  })
}

export const getUserById = async (id: string) => {
  return await prisma.user.findFirst({
    where: { id },
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
