import { app } from "./app/app";
import { checkEnvVariables } from "./lib/env";
import { connectDB } from "./lib/connect-db";

const main = async () => {
  checkEnvVariables();
  await connectDB();
  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

main();
