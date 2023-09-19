import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { router } from "./routes";
import cookieParser from "cookie-parser";
import { getEnv } from "../lib/env";
import { errorMiddleware } from "../middlewares/error.middleware";

export const app = express();

// Global Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: getEnv("ORIGIN"),
  }),
);

// Routes
app.use("/api/v1", router);

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working!",
  });
});

app.get("/api/v1/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API is working!",
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route ${req.originalUrl} not found!`) as any;
  error.statusCode = 404;
  next(error);
});

app.use(errorMiddleware);
