import { Router } from "express"

import { userRouter } from "../modules/user/user.route"
import { categoryRouter } from "../modules/category/category.route"
import { brandRouter } from "../modules/brand/brand.route"
import { subCategoryRouter } from "../modules/subCategory/subCategory.route"

export const router = Router()
router.use("/users", userRouter)
router.use("/categories", categoryRouter)
router.use("/brands", brandRouter)
router.use("/subcategory", subCategoryRouter)
