import { Router } from "express"
import {
  signInController,
  signUpController,
  signOutController,
  meController,
} from "./auth.controller"
import { verifyUser } from "../../middlewares/verify-user.middleware"

export const userRouter = Router()

userRouter.post("/signup", signUpController)
userRouter.post("/signin", signInController)
userRouter.get("/signout", verifyUser, signOutController)
userRouter.get("/me", verifyUser, meController)
