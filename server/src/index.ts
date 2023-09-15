import { app } from "./app";

const main = async () => {
  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

main();
