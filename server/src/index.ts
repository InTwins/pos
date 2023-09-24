import { app } from "./app/app"
import { connectDB } from "./lib/connect-db"
import { checkEnvVariables, getEnv } from "./lib/env"

const PORT = getEnv("PORT")

const setup = async (): Promise<void> => {
  try {
    checkEnvVariables()
    await connectDB()

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}!`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

setup().catch(error => {
  console.error(error)
})
