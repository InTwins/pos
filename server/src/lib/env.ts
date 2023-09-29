import path from "path"

const developmentEnvPath = path.join(__dirname, "../../.env.development")
const productionEnvPath = path.join(__dirname, "../../.env.production")

let envPath

if (process.env.NODE_ENV === "production") {
  envPath = productionEnvPath
} else {
  envPath = developmentEnvPath
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
  path: envPath,
})

const env = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
  ORIGIN: process.env.ORIGIN,
  REDIS_URL: process.env.REDIS_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ISSUER: process.env.JWT_ISSUER,
  JWT_ACTIVATION_EXPIRATION: process.env.JWT_ACTIVATION_EXPIRATION,
  HOSTNAME: process.env.HOSTNAME,
}

type EnvKey = keyof typeof env

export const checkEnvVariables = () => {
  Object.keys(env).forEach(key => {
    if (env[key as EnvKey] === undefined) {
      throw new Error(`Environment variable ${key} is missing`)
    }
  })
}

export const getEnv = (key: EnvKey) => env[key] as string
