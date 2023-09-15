import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$connect();
  console.log("Connected to database");
  setTimeout(async () => {
    await prisma.$disconnect();
    console.log("Disconnected from database");
  }, 3000);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
