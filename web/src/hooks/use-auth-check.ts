import { useMeQuery } from "@/store/features/auth/auth-api"
import { userLoggedIn } from "@/store/features/auth/auth-slice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const useAuthCheck = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useMeQuery("auth")

  useEffect(() => {
    if (data) {
      if (data?.token && data?.user) {
        dispatch(userLoggedIn(data))
      }
    }
    setIsAuthChecked(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, isError])

  return {
    isAuthChecked,
  }
}
