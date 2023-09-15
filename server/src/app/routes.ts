import { Router } from "express";

import { userRouter } from "../modules/user/user.route";
import { categoryRouter } from "../modules/category/category.route";

export const routes = Router();

routes.use("/users", userRouter);
routes.use("/categories", categoryRouter);
