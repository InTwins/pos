import { useMutation } from "@tanstack/react-query"
import { signIn, signOut, signUp } from "@/lib/api/auth.api"

export const useSignIn = () => {
  const { mutate, isLoading, error, isError } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      console.log("Success!")
    },
  })

  return {
    mutate,
    isLoading,
    error,
    isError,
  }
}

export const useSignUp = () => {
  const { mutate, isLoading, error, isError, data } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      console.log("Success!")
    },
  })

  return {
    mutate,
    isLoading,
    error,
    isError,
    data,
  }
}

export const useSignOut = () => {
  const { mutate, isLoading, error, isError } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      console.log("Success!")
    },
  })

  return {
    mutate,
    isLoading,
    error,
    isError,
  }
}

// export const useAuth = () => {

// const
