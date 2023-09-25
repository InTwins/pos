import { Router } from "express"
import {
  signInController,
  signUpController,
  signOutController,
} from "./auth.controller"

export const userRouter = Router()

userRouter.post("/signup", signUpController)
userRouter.post("/signin", signInController)
userRouter.get("/signout", signOutController)
userRouter.get("/me", (req, res) => {})
