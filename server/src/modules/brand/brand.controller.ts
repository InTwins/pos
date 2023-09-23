import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import {
  createBrandValidator,
  deleteBrandValidator,
  getSingleBrandValidator,
  updateBrandValidator,
} from "./brand.validator"
import {
  createBrandService,
  deleteBrandServive,
  getBrandsServive,
  getSingleBrandServive,
  updateBrandServive,
} from "./brand.service"
import { ErrorHandler } from "../../lib/error-handler"

export const createBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const brandData = createBrandValidator.parse(req.body)

      try {
        const brand = await createBrandService(brandData)

        res.status(200).json({
          success: true,
          message: "Brand created successfully!",
          data: brand,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Could not create brand!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const getBrandsController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const brandsData = await getBrandsServive()

      res.status(200).json({
        success: true,
        message: "Success",
        data: brandsData,
      })
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Couldn't get brands data!", 500))
    }
  },
)

export const getSingleBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getSingleBrand = getSingleBrandValidator.parse(req.params)

      try {
        const brandData = await getSingleBrandServive(getSingleBrand.id)

        res.status(200).json({
          success: true,
          message: "Success",
          data: brandData,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Counldn't get brand data!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const updateBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateValidate = updateBrandValidator.parse({
        ...req.body,
        ...req.params,
      })

      try {
        const updateData = await updateBrandServive(updateValidate)

        res.status(200).json({
          data: updateData,
          message: "Success",
          success: true,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Could not update brand info!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body.", 400))
    }
  },
)

export const deleteBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteValidate = deleteBrandValidator.parse(req.params)
      try {
        const deleteBrand = await deleteBrandServive(deleteValidate.id)

        res.status(200).json({
          message: "Success",
          success: true,
          data: deleteBrand,
        })
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Could not delete brand!", 500))
      }
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)
