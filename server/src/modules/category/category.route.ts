import { Router } from "express"
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
  updateCategoryController,
} from "./category.controller"

export const categoryRouter = Router()

categoryRouter.get("/", createCategoryController)
categoryRouter.post("/", getCategoryController)
categoryRouter.put("/:id", updateCategoryController)
categoryRouter.delete("/:id", deleteCategoryController)
