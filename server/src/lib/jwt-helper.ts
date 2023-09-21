import { SignJWT, jwtVerify } from "jose"
import { getEnv } from "./env"

export const createToken = async <T>(data: T) => {
  const secret = new TextEncoder().encode(getEnv("JWT_SECRET"))
  const issuer = getEnv("JWT_ISSUER")
  const expiration = getEnv("JWT_ACTIVATION_EXPIRATION")

  return await new SignJWT({ data })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(issuer)
    .setExpirationTime(expiration)
    .sign(secret)
}

export const verifyToken = async (token: string) => {
  const secret = new TextEncoder().encode(getEnv("JWT_SECRET"))
  const decoded = await jwtVerify(token, secret)
  return decoded.payload
}
