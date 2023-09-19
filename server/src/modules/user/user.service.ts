import { User } from "@prisma/client";
import { prisma } from "../../lib/prisma-client";

type UserType = Omit<User, "id">;

export const getUserByEmail = async (email: string) => {
  try {
    const dbUser = prisma.user.findUnique({
      where: { email },
    });
    return dbUser;
  } catch (error) {
    throw error;
  }
};

export const createUser = async ({ email, password, role, name }: UserType) => {
  try {
    const dbUser = await prisma.user.create({
      data: {
        email,
        password,
        role,
        name,
      },
    });
    return dbUser;
  } catch (error) {
    throw error;
  }
};
