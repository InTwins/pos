import { type NextFunction, type Request, type Response } from "express"
import { catchAsyncError } from "../../lib/catch-async-error"
import { ErrorHandler } from "../../lib/error-handler"
import { createUserService, getUserByEmail } from "./auth.service"
import { SignInValidator, SignUpValidator } from "./auth.validator"
import { comparePassword } from "../../lib/hash-password"
import { createToken } from "../../lib/jwt-helper"

export const signUpController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = SignUpValidator.parse(req.body)
      const { name, email, role, password } = user

      // Check for existing user
      const existingUser = await getUserByEmail(email)
      if (existingUser !== null) {
        next(new ErrorHandler("Email already exist!", 400))
        return
      }

      try {
        const dbUser = await createUserService({ name, email, password, role })

        try {
          const token = await createToken({
            id: dbUser.id,
            email: dbUser.email,
          })

          res.cookie("authToken", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
          })

          res.status(200).json({
            success: true,
            message: "Sign Up successful!",
            data: {
              token,
              user: dbUser,
            },
          })
        } catch (error) {
          console.error(error)
          next(new ErrorHandler("Token creation failed!", 500))
        }
      } catch (error: any) {
        next(new ErrorHandler("Internal Server Error!", 500))
      }
    } catch (error: any) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const signInController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = SignInValidator.parse(req.body)
      const { email, password } = user

      try {
        const dbUser = await getUserByEmail(email)

        if (dbUser === null) {
          next(new ErrorHandler("Invalid credentials!", 400))
          return
        }

        const matchPassword = await comparePassword(password, dbUser.password)

        if (!matchPassword) {
          next(new ErrorHandler("Invalid credentials!", 400))
          return
        }
        try {
          const token = await createToken({
            id: dbUser.id,
            email: dbUser.email,
          })

          res.cookie("authToken", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
          })

          res.status(200).json({
            success: true,
            message: "Login successful!",
            data: {
              token,
              user: dbUser,
            },
          })
        } catch (error) {
          console.error(error)
          next(new ErrorHandler("Token creation failed!", 500))
        }
      } catch (error) {
        console.error(error)
        next(new ErrorHandler("Internal Server Error!", 500))
      }
    } catch (error: any) {
      console.error(error)
      next(new ErrorHandler("Invalid request body!", 400))
    }
  },
)

export const signOutController = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    res.cookie("authToken", "", {
      httpOnly: true,
      maxAge: 0,
    })
    res.status(200).json({
      success: true,
      message: "Sign Out Successful!",
    })
  },
)

// export const meController = catchAsyncError(
//   async (req: Request, res: Response, next: NextFunction) => {
//     res.status(200).json({
//       success: true,
//       message: "Sign Out Successful!",
//     })
//   },
// )
