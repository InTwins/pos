import { useSelector } from "react-redux"

export const useAuth = () => {
  const auth = useSelector((state: any) => state?.auth)

  if (auth?.token && auth?.user) {
    return true
  }

  return false
}
