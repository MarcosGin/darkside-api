import express from "express";

import * as controller from "../controllers/health-controller";

export default (router: express.Router) => {
  router.get("/health", controller.get);
};
