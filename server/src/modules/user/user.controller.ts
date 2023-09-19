import { NextFunction, Request, Response } from "express";
import { UserRegistrationValidator } from "./user.validator";
import { catchAsyncError } from "../../lib/catch-async-error";
import { ErrorHandler } from "../../lib/error-handler";
import { createUser, getUserByEmail } from "./user.service";
import { createActivationCode } from "../../lib/activation-code";

export const registerUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = UserRegistrationValidator.parse(req.body);
      const { name, email, role, password } = user;

      // Check for existing user
      const existingUser = await getUserByEmail(email);
      console.log(existingUser);
      if (existingUser) {
        return next(new ErrorHandler("Email already exist!", 400));
      }

      const activationToken = createActivationCode(user);

      const dbUser = await createUser({ name, email, password, role });
      console.log(dbUser);
      res.json({
        success: true,
        data: dbUser,
      });
    } catch (error: any) {
      console.error(error);
      next(new ErrorHandler(error.message, 400));
    }
  }
);

export const loginUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
