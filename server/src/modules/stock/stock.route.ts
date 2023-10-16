import { Router } from "express"
import {
  createStockController,
  deleteStockController,
  getStockController,
  updateStockController,
} from "./stock.controller"

export const sotckRouter = Router()

sotckRouter.get("/", getStockController)
sotckRouter.post("/", createStockController)
sotckRouter.put("/:id", updateStockController)
sotckRouter.delete("/:id", deleteStockController)
