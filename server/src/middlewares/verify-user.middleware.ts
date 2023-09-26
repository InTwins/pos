import type { NextFunction, Request, Response } from "express"
import { catchAsyncError } from "../lib/catch-async-error"
import { ErrorHandler } from "../lib/error-handler"
import { verifyToken } from "../lib/jwt-helper"
import { getUserById } from "../modules/auth/auth.service"

export const verifyUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.authToken
    if (token === undefined || typeof token !== "string") {
      next(new ErrorHandler("Unauthorized!", 403))
      return
    }
    try {
      const decoded = await verifyToken(token)

      if (decoded === undefined) {
        next(new ErrorHandler("Unauthorized!", 403))
        return
      }

      const dbUser = await getUserById(decoded.id as string)

      if (dbUser === null) {
        next(new ErrorHandler("Unauthorized!", 403))
        return
      }

      req.user = dbUser
      next()
    } catch (error) {
      console.error(error)
      next(new ErrorHandler("Unauthorized!", 403))
    }
  },
)
