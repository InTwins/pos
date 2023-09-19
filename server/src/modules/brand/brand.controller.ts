import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../../lib/catch-async-error";
import { createBrandValidator } from "./brand.validator";
import { createBrandService } from "./brand.service";

export const createBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const brandData = createBrandValidator.parse(req.body);
      const brand = await createBrandService(brandData);

      res.status(200).json({
        data: brand,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        error,
      });
    }
  }
);

export const getBrandsController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const getSingleBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const updateBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {}
);

export const deleteBrandController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {}
);
