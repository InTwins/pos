import { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"

export const createCategoryController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    
  }
)
