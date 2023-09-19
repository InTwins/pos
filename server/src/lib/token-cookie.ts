import { createToken } from "./jwt-helper";

export const addTokenInCookie = async (email: string) => {
  const token = await createToken(email);
  const cookie = {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };
  return cookie;
};
