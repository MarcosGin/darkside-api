import express from "express";

import * as controller from "../controllers/films-controller";
import { cacheMiddleware } from "../middlewares/cache-middleware";

export default (router: express.Router) => {
  router.get("/films", controller.getAll);
  router.get("/films/:id", cacheMiddleware({}), controller.getById);
};
