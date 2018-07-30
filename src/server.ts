import * as dotenv from "dotenv";
import * as express from "express";
import { IndexController } from "./controller/index";
import { Logger } from "./util/logger";

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const app = express();

app.use("/", IndexController);

app.listen(3000, () => {
  Logger.info("APP running in port 3000!");
});


export { app };
