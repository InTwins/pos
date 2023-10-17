import { Router } from "express"
import {
  createCustomerController,
  deleteCustomerController,
  getCustomerController,
  updateCustomerController,
} from "./customer.controller"

export const customerRouter = Router()

customerRouter.get("/", getCustomerController)
customerRouter.post("/", createCustomerController)
customerRouter.put("/:id", updateCustomerController)
customerRouter.delete("/:id", deleteCustomerController)
