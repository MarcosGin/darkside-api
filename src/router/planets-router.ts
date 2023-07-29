import express from "express";

import * as controller from "../controllers/planets-controller";
import { cacheMiddleware } from "../middlewares/cache-middleware";

export default (router: express.Router) => {
  router.get("/planets", cacheMiddleware({}), controller.getAll);
  router.get("/planets/:id", cacheMiddleware({}), controller.getById);
};
