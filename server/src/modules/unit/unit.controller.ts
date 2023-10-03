import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import {
  createUnitService,
  deleteUnitService,
  getUnitService,
  updateUnitService,
} from "./unit.service"
import {
  createUnitValidator,
  deleteUnitValidator,
  updateUnitValidator,
} from "./unit.validator"

export const createUnitController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const unitData = createUnitValidator.parse(req.body)

      try {
        const dbUnit = await createUnitService(unitData)
        res.status(200).json({
          success: true,
          message: "Unit created successfully!",
          data: dbUnit,
        })
      } catch (error) {
        next(new ErrorHandler("Unit coundn't created!", 500, error))
      }
    } catch (error) {
      next(new ErrorHandler("Invalid request body!", 400, error))
    }
  },
)

export const getUnitController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dbUnits = await getUnitService()
      res.status(200).json({
        success: true,
        message: "Success",
        data: dbUnits,
      })
    } catch (error) {
      next(new ErrorHandler("Couldn't get data!", 500, error))
    }
  },
)

export const updateUnitController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateData = updateUnitValidator.parse({
        ...req.params,
        ...req.body,
      })

      try {
        const update = await updateUnitService(updateData)
        res.status(200).json({
          success: true,
          message: "Success",
          data: update,
        })
      } catch (error) {
        next(new ErrorHandler("Coudn't update data!", 500, error))
      }
    } catch (error) {
      next(new ErrorHandler("Invalid request body!", 400, error))
    }
  },
)

export const deleteUnitController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const unitId = deleteUnitValidator.parse(req.params)

      try {
        const deletedata = await deleteUnitService(unitId)

        res.status(200).json({
          success: true,
          message: "Success",
          data: deletedata,
        })
      } catch (error) {
        next(new ErrorHandler("Coudn't delete!", 500, error))
      }
    } catch (error) {
      next(new ErrorHandler("Invalid request body!", 400, error))
    }
  },
)
