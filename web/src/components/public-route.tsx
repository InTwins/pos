import { useAuth } from "@/hooks/use-auth"
import { Navigate, Outlet } from "react-router-dom"

export const PublicRoute = () => {
  const isLoggedIn = useAuth()

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />
  }
  return <Outlet />
}
