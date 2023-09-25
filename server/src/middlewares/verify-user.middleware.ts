import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../lib/catch-async-error"
import { ErrorHandler } from "../lib/error-handler"
import { verifyToken } from "../lib/jwt-helper"

export const verifyUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.authToken
    if (token === undefined || typeof token !== "string") {
      next(new ErrorHandler("Unauthorized!", 403))
      return
    }
    try {
      const decoded = await verifyToken(token)
      req.user = decoded
      next()
    } catch (error) {
      next(new ErrorHandler("Unauthorized!", 403))
    }
  },
)
