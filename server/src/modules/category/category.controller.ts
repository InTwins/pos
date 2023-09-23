import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import {
  createCategoryService,
  deleteCategoryService,
  getCategoryService,
  updateCategoryService,
} from "./category.service"
import {
  createCategoryValidator,
  deleteCategoryValidator,
  updateCategoryValidator,
} from "./category.validator"

export const createCategoryController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData = createCategoryValidator.parse(req.body)

      try {
        const category = await createCategoryService(categoryData)
        res.status(200).json({
          success: true,
          message: "Category created successfully!",
          data: category,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Category coundn't created!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const getCategoryController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData = await getCategoryService()
      res.status(200).json({
        success: true,
        message: "Success",
        data: categoryData,
      })
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Couldn't get data!", 500))
    }
  },
)

export const updateCategoryController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateData = updateCategoryValidator.parse({
        ...req.params,
        ...req.body,
      })

      try {
        const update = await updateCategoryService(updateData)
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

export const deleteCategoryController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteCategory = deleteCategoryValidator.parse(req.params)

      try {
        const deletedata = await deleteCategoryService(deleteCategory)

        res.status(200).json({
          success: true,
          message: "Success",
          data: deletedata,
        })
      } catch (error) {}
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)
