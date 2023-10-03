import { Router } from "express"

import { userRouter } from "../modules/auth/auth.route"
import { categoryRouter } from "../modules/category/category.route"
import { brandRouter } from "../modules/brand/brand.route"
import { unitRouter } from "../modules/unit/unit.route"
import { productRouter } from "../modules/product/product.route"
// import { subCategoryRouter } from "../modules/subCategory/subCategory.route"

export const router = Router()
router.use("/auth", userRouter)
router.use("/categories", categoryRouter)
router.use("/brands", brandRouter)
router.use("/units", unitRouter)
router.use("/products", productRouter)
// router.use("/subcategories", subCategoryRouter)
