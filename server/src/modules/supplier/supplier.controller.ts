import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import {
  createSupplierService,
  deleteSupplierService,
  getSupplierService,
  updateSupplierService,
} from "./supplier.service"
import {
  createSupplierValidator,
  deleteSupplierValidator,
  updateSupplierValidator,
} from "./supplier.validator"

export const createSupplierController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const supplierData = createSupplierValidator.parse(req.body)
      try {
        const supplier = await createSupplierService(supplierData)
        res.status(200).json({
          success: true,
          message: "Supplier created successfully!",
          data: supplier,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Supplier coundn't created!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const getSupplierController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const supplierData = await getSupplierService()
      res.status(200).json({
        success: true,
        message: "Success",
        data: supplierData,
      })
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Couldn't get data!", 500))
    }
  },
)

export const updateSupplierController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateData = updateSupplierValidator.parse({
        ...req.params,
        ...req.body,
      })

      try {
        const update = await updateSupplierService(updateData)
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

export const deleteSupplierController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteSupplier = deleteSupplierValidator.parse(req.params)

      try {
        const deleteData = await deleteSupplierService(deleteSupplier)

        res.status(200).json({
          success: true,
          message: "Success",
          data: deleteData,
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
