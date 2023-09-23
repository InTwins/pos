import { Router } from "express"
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
  updateCategoryController,
} from "./category.controller"

export const categoryRouter = Router()

categoryRouter.get("/", getCategoryController)
categoryRouter.post("/", createCategoryController)
categoryRouter.put("/:id", updateCategoryController)
categoryRouter.delete("/:id", deleteCategoryController)
