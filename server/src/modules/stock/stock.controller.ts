import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import {
  createStockValidator,
  deleteStockValidator,
  updateStockValidator,
} from "./stock.validator"
import {
  createStockService,
  deleteStockService,
  getStockService,
  updateStockService,
} from "./stock.service"

export const createStockController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const StockData = createStockValidator.parse(req.body)
      try {
        const Stock = await createStockService(StockData)
        res.status(200).json({
          success: true,
          message: "Stock created successfully!",
          data: Stock,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Stock coundn't created!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const getStockController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const StockData = await getStockService()
      res.status(200).json({
        success: true,
        message: "Success",
        data: StockData,
      })
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Couldn't get data!", 500))
    }
  },
)

export const updateStockController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateData = updateStockValidator.parse({
        ...req.params,
        ...req.body,
      })

      try {
        const update = await updateStockService(updateData)
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

export const deleteStockController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteStock = deleteStockValidator.parse(req.params)

      try {
        const deletedata = await deleteStockService(deleteStock)

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
