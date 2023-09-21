import { Router } from "express"

export const categoryRouter = Router()

categoryRouter.get("/", (req, res) => {
  res.send("Hello World!")
})
