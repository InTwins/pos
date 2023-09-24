import { type NextFunction, type Request, type Response } from "express"
import { ErrorHandler } from "../lib/error-handler"

export const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Need to understand this section flow.
  error.statusCode = error.statusCode ?? 500
  error.message = error.message ?? "Internal Server Error!"

  // Wrong database id error
  if (error.name === "CastError") {
    const message = `Resource not found!`
    error = new ErrorHandler(message, 400)
  }
  if (error.statusCode === 11000) {
    const message = `Duplicate values entered!`
    error = new ErrorHandler(message, 400)
  }

  if (error.name === "JsonWebTokenError") {
    const message = `Json web token is invalid! Try again!`
    error = new ErrorHandler(message, 400)
  }
  if (error.name === "TokenExpiredError") {
    const message = "JWT token expired! Try again!"
    error = new ErrorHandler(message, 400)
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  })
}
