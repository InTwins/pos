import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import {
  createCustomerValidator,
  deleteCustomerValidator,
  updateCustomerValidator,
} from "./customer.validator"
import {
  createCustomerService,
  deleteCustomerService,
  getCustomerService,
  updateCustomerService,
} from "./customer.service"

export const createCustomerController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerData = createCustomerValidator.parse(req.body)
      try {
        const customer = await createCustomerService(customerData)
        res.status(200).json({
          success: true,
          message: "Customer created successfully!",
          data: customer,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Customer coundn't created!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const getCustomerController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerData = await getCustomerService()
      res.status(200).json({
        success: true,
        message: "Success",
        data: customerData,
      })
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Couldn't get data!", 500))
    }
  },
)

export const updateCustomerController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateData = updateCustomerValidator.parse({
        ...req.params,
        ...req.body,
      })

      try {
        const update = await updateCustomerService(updateData)
        res.status(200).json({
          success: true,
          message: "Success",
          data: update,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Coudn't update data!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const deleteCustomerController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteCustomer = deleteCustomerValidator.parse(req.params)

      try {
        const deletedata = await deleteCustomerService(deleteCustomer)

        res.status(200).json({
          success: true,
          message: "Success",
          data: deletedata,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Coudn't delete!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)
