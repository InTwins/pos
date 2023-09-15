import { app } from "./app/app";
import { checkEnvVariables } from "./lib/env";

const main = async () => {
  checkEnvVariables();
  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

main();
