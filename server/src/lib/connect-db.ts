import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const connectDB = async () => {
  await prisma.$connect();
};

export const disconnectDB = async () => {
  await prisma.$disconnect();
};
