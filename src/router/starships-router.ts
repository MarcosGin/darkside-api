import express from "express";

import * as controller from "../controllers/starships-controller";

export default (router: express.Router) => {
  router.get("/starships", controller.getAll);
  router.get("/starships/:id", controller.getById);
};
