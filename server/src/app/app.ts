import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { routes } from "./routes";

export const app = express();

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

app.get("/electron", (req: Request, res: Response, next: NextFunction) => {
  res.send("Let's explore Electron JS");
});
