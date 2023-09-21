import type { User } from "@prisma/client"
import { prisma } from "../../lib/prisma-client"

type UserType = Omit<User, "id">

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  })
}

export const createUser = async ({ email, password, role, name }: UserType) => {
  return await prisma.user.create({
    data: {
      email,
      password,
      role,
      name,
    },
  })
}
