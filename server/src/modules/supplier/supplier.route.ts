import { Router } from "express"
import {
  createSupplierController,
  deleteSupplierController,
  getSupplierController,
  updateSupplierController,
} from "./supplier.controller"

export const supplierRouter = Router()

supplierRouter.get("/", getSupplierController)
supplierRouter.post("/", createSupplierController)
supplierRouter.put("/:id", updateSupplierController)
supplierRouter.delete("/:id", deleteSupplierController)
