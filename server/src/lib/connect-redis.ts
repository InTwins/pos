import { Redis } from "ioredis";
import { getEnv } from "./env";

export const connectRedis = () => {
  try {
    console.log(`Connecting to redis...`);
    const redis = new Redis(getEnv("REDIS_URL"));
    console.log(`Connected to redis!`);
    return redis;
  } catch (error) {
    throw error;
  }
};

export const redis = new Redis(getEnv("REDIS_URL"));
