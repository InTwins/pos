import { Router } from "express"
import { loginUser, registerUser, signOutController } from "./user.controller"

export const userRouter = Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/signout", signOutController)
