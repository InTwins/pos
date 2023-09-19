import { Router } from "express";
import { registerUser } from "./user.controller";

export const userRouter = Router();

userRouter.post("/register", registerUser);
