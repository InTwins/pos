import { userLoggedIn } from "@/store/features/auth/auth-slice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const useAuthCheck = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const localData = localStorage?.getItem("userAuth")

    if (localData) {
      const data = JSON.parse(localData)
      if (data?.token && data?.user) {
        dispatch(userLoggedIn(data))
      }
    }
    setIsAuthChecked(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isAuthChecked,
  }
}
