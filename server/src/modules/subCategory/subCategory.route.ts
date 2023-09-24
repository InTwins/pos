import { Router } from "express"
import {
  createSubCategory,
  deleteSubCategory,
  getSubCategory,
  updateSubCategory,
} from "./subCategory.controller"

export const subCategoryRouter = Router()

subCategoryRouter.post("/", createSubCategory)
subCategoryRouter.get("/", getSubCategory)
subCategoryRouter.put("/:id", updateSubCategory)
subCategoryRouter.delete("/:id", deleteSubCategory)
