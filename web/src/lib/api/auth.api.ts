import { Api } from "./api"

const authApi = new Api("/auth")

export const signIn = async (data: { email: string; password: string }) => {
  return await authApi.post(data, "signin")
}

export const signUp = async (data: { email: string; password: string; name: string }) => {
  return await authApi.post(data, "signup")
}

export const signOut = async () => {
  return await authApi.get("signout")
}
