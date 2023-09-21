import { NextFunction, Request, Response } from "express"
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

export const createBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const brandData = createBrandValidator.parse(req.body)
      const brand = await createBrandService(brandData)

      res.status(200).json({
        data: brand,
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        error,
      })
    }
  }
)

export const getBrandsController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const brandsdata = await getBrandsServive()

      res.status(200).json({
        data: brandsdata,
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        error,
      })
    }
  }
)

export const getSingleBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getSingleBrand = getSingleBrandValidator.parse(req.body)
      const branddata = await getSingleBrandServive(getSingleBrand.id)

      res.status(200).json({
        data: branddata,
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        error,
      })
    }
  }
)

export const updateBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatevalidate = updateBrandValidator.parse({
        ...req.body,
        ...req.params,
      })

      const updatedata = await updateBrandServive(updatevalidate)

      res.status(200).json({ data: updatedata })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        error,
      })
    }
  }
)

export const deleteBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteValidate = deleteBrandValidator.parse(req.params)
      const deletebrand = await deleteBrandServive(deleteValidate.id)

      res.status(200).json({
        data: "Delete succefull",
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        error,
      })
    }
  }
)
