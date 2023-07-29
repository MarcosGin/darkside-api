import express from "express";

import * as controller from "../controllers/people-controller";
import { cacheMiddleware } from "../middlewares/cache-middleware";

export default (router: express.Router) => {
  router.get("/people", cacheMiddleware({}), controller.getAll);
  router.get("/people/:id", cacheMiddleware({}), controller.getById);
};
