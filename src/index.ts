import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { config } from "./config";
import router from "./router";

function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", router());

  app.listen(config.port, () => {
    console.log(`Server running at http://localhost:${config.port}`);
  });
}

bootstrap();
