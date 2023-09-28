import { useMeQuery } from "@/store/features/auth/auth-api"
import { useEffect, useState } from "react"

export const useAuthCheck = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const { isLoading } = useMeQuery("auth")

  useEffect(() => {
    if (!isLoading) {
      setIsAuthChecked(true)
    }
  }, [isLoading])

  return {
    isAuthChecked,
  }
}
