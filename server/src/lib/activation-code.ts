import { createToken } from "./jwt-helper";

export const createActivationCode = <T>(user: T) => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const activationToken = createToken<{ user: T; activationCode: string }>({
    user,
    activationCode,
  });
};
