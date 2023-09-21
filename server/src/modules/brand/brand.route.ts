import { Router } from "express"
import {
  createBrandController,
  deleteBrandController,
  getBrandsController,
  getSingleBrandController,
  updateBrandController,
} from "./brand.controller"

export const brandRouter = Router()

brandRouter.get("/", getBrandsController)

brandRouter.get("/:id", getSingleBrandController)

brandRouter.post("/", createBrandController)

brandRouter.put("/:id", updateBrandController)

brandRouter.delete("/:id", deleteBrandController)
