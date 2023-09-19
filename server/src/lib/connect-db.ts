import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    console.log(`Connecting to PostgreSQL database...`);
    await prisma.$connect();
    console.log(`Connected to database!`);
  } catch (error) {
    console.error(error);
    setTimeout(connectDB, 5000);
  }
};

export const disconnectDB = async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    throw error;
  }
};
