import express from "express";

import * as controller from "../controllers/starships-controller";
import { cacheMiddleware } from "../middlewares/cache-middleware";

export default (router: express.Router) => {
  router.get("/starships", cacheMiddleware({}), controller.getAll);
  router.get("/starships/:id", cacheMiddleware({}), controller.getById);
};
