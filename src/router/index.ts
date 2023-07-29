import express from "express";

import films from "./films-router";
import health from "./health-router";
import people from "./people-router";
import planets from "./planets-router";
import starships from "./starships-router";

const router = express.Router();

export default (): express.Router => {
  health(router);
  films(router);
  people(router);
  planets(router);
  starships(router);

  return router;
};
