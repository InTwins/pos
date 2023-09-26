import { useAuth } from "@/hooks/use-auth"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
  const isLoggedIn = useAuth()

  if (!isLoggedIn) {
    return <Navigate to="/signin" />
  }
  return <Outlet />
}
