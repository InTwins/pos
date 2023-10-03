import { Router } from "express"
import {
  createUnitController,
  deleteUnitController,
  getUnitController,
  updateUnitController,
} from "./unit.controller"
import { verifyUser } from "../../middlewares/verify-user.middleware"

export const unitRouter = Router()

unitRouter.get("/", verifyUser, getUnitController)
unitRouter.post("/", verifyUser, createUnitController)
unitRouter.put("/:id", verifyUser, updateUnitController)
unitRouter.delete("/:id", verifyUser, deleteUnitController)
