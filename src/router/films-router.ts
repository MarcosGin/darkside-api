import express from "express";

import * as controller from "../controllers/films-controller";

export default (router: express.Router) => {
  router.get("/films", controller.getAll);
  router.get("/films/:id", controller.getById);
};
