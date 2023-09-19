import { app } from "./app/app";
import { connectDB } from "./lib/connect-db";
import { connectRedis } from "./lib/connect-redis";
import { checkEnvVariables, getEnv } from "./lib/env";

const PORT = getEnv("PORT");

const setup = async () => {
  try {
    checkEnvVariables();
    await connectDB();
    // connectRedis();

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

setup();
