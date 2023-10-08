import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import {
  createProductValidator,
  deleteProductValidator,
  updateProductValidator,
} from "./product.validator"
import {
  createProductService,
  deleteProductService,
  getProductService,
  updateProductService,
} from "./product.service"

export const createProductController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req?.file?.filename === undefined) {
        next(new ErrorHandler("Image is required!", 400))
        return
      }

      const url = new URL(
        `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`,
      )

      const productData = createProductValidator.parse({
        ...req.body,
        imageUrl: url.toString(),
      })

      try {
        const product = await createProductService(productData)
        res.status(200).json({
          success: true,
          message: "Product created successfully!",
          data: product,
        })
      } catch (error) {
        next(new ErrorHandler("Product coundn't created!", 500, error))
      }
    } catch (error) {
      next(new ErrorHandler("Invalid request body!", 400, error))
    }
  },
)

export const getProductController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dbProducts = await getProductService()
      res.status(200).json({
        success: true,
        message: "Success",
        data: dbProducts,
      })
    } catch (error) {
      next(new ErrorHandler("Couldn't get data!", 500, error))
    }
  },
)

export const updateProductController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateData = updateProductValidator.parse({
        ...req.params,
        ...req.body,
      })

      try {
        const update = await updateProductService(updateData)
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

export const deleteProductController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = deleteProductValidator.parse(req.params)

      try {
        const deletedProduct = await deleteProductService(productId)

        res.status(200).json({
          success: true,
          message: "Success",
          data: deletedProduct,
        })
      } catch (error) {
        next(new ErrorHandler("Coudn't delete!", 500, error))
      }
    } catch (error) {
      next(new ErrorHandler("Invalid request body!", 400, error))
    }
  },
)
