import "dotenv/config";

const env = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
};

export const checkEnvVariables = () => {
  Object.keys(env).forEach((key) => {
    if (!env[key as keyof typeof env]) {
      throw new Error(`Environment variable ${key} is missing`);
    }
  });
};

export const getEnv = (key: keyof typeof env) => env[key] as string;
