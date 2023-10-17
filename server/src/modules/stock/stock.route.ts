import { Router } from "express"
import {
  createStockController,
  deleteStockController,
  getStockController,
  updateStockController,
} from "./stock.controller"

export const stockRouter = Router()

stockRouter.get("/", getStockController)
stockRouter.post("/", createStockController)
stockRouter.put("/:id", updateStockController)
stockRouter.delete("/:id", deleteStockController)
