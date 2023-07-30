import express from "express";

import * as controller from "../controllers/planets-controller";

export default (router: express.Router) => {
  router.get("/planets", controller.getAll);
  router.get("/planets/:id", controller.getById);
};
