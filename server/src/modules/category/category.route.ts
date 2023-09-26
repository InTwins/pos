import { Router } from "express"
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
  updateCategoryController,
} from "./category.controller"
import { verifyUser } from "../../middlewares/verify-user.middleware"

export const categoryRouter = Router()

categoryRouter.get("/", verifyUser, getCategoryController)
categoryRouter.post("/", verifyUser, createCategoryController)
categoryRouter.put("/:id", updateCategoryController)
categoryRouter.delete("/:id", deleteCategoryController)
