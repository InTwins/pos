import { useAuthCheck } from "@/hooks/use-auth-check"
import { router } from "./routes"
import { RouterProvider } from "react-router-dom"

export const RootRouter = () => {
  const { isAuthChecked } = useAuthCheck()

  if (!isAuthChecked) {
    return <div>Loading...</div>
  }
  return <RouterProvider router={router} />
}
