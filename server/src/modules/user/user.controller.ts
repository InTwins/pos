import { type NextFunction, type Request, type Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import { createUser, getUserByEmail } from "./user.service"
import { UserRegistrationValidator } from "./user.validator"

export const registerUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = UserRegistrationValidator.parse(req.body)
      const { name, email, role, password } = user

      // Check for existing user
      const existingUser = await getUserByEmail(email)
      if (existingUser !== null) {
        next(new ErrorHandler("Email already exist!", 400))
        return
      }

      const dbUser = await createUser({ name, email, password, role })
      res.json({
        success: true,
        data: dbUser,
      })
    } catch (error: any) {
      console.error(error)
      next(new ErrorHandler(error.message, 400))
    }
  },
)

export const loginUser = (req: Request, res: Response, next: NextFunction) => {}
