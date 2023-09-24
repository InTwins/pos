import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import {
  createSubCategoryValidator,
  deleteSubCategoryValidator,
  updateSubCategoryValidator,
} from "./subCategory.validator"
import {
  createSubCategoryService,
  deleteSubCategoryService,
  getSubCategoryService,
  updateSubCategoryService,
} from "./subCategory.service"

export const createSubCategory = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subCategoryValidate = createSubCategoryValidator.parse(req.body)

      try {
        const subCategory = await createSubCategoryService(subCategoryValidate)

        res.status(200).json({
          success: true,
          message: "Sub category created successfully!",
          data: subCategory,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Subcategory couldn't created.", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request!", 400))
    }
  },
)

export const getSubCategory = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getData = await getSubCategoryService()
      res.status(200).json({
        success: true,
        message: "Success",
        data: getData,
      })
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request!", 500))
    }
  },
)

export const updateSubCategory = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateValidate = updateSubCategoryValidator.parse({
        ...req.params,
        ...req.body,
      })
      try {
        const update = await updateSubCategoryService(updateValidate)
        res.status(200).json({
          success: true,
          message: "Success",
          data: update,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Coudn't update subcategory", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request!", 400))
    }
  },
)

export const deleteSubCategory = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteSubCategoryValidate = deleteSubCategoryValidator.parse(
        req.params,
      )
      try {
        const deleteitem = await deleteSubCategoryService(
          deleteSubCategoryValidate,
        )
        res.status(200).json({
          success: true,
          message: "Success",
          data: deleteitem,
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
