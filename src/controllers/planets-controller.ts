import express from "express";

import { getPagination } from "../helpers/pagination";
import * as service from "../services/swapi-service";

export const getAll = async (req: express.Request, res: express.Response) => {
  try {
    const planets = await service.getPlanets();

    const limit = req.query.limit
      ? parseInt(req.query.limit as string)
      : undefined;
    const page = parseInt((req.query.page as string) ?? "1");

    const pagination = getPagination(planets, { page, limit });
    return res.status(200).json({ ...pagination });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getById = async (req: express.Request, res: express.Response) => {
  try {
    const populate = req.query.populate as string;
    const planets = await service.getPlanetById(
      req.params.id,
      populate?.split(","),
    );
    return res.status(200).json(planets);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
