import express from "express"

export const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/electron", (req, res) => {
  res.send("Let's explore Electron JS")
})
