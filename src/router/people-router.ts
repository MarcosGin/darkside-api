import express from "express";

import * as controller from "../controllers/people-controller";

export default (router: express.Router) => {
  router.get("/people", controller.getAll);
  router.get("/people/:id", controller.getById);
};
