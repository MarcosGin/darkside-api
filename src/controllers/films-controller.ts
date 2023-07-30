import express from "express";

import * as service from "../services/swapi-service";

export const getAll = async (req: express.Request, res: express.Response) => {
  try {
    const films = await service.getFilms();
    return res.status(200).json(films);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getById = async (req: express.Request, res: express.Response) => {
  try {
    const populate = req.query.populate as string;
    const films = await service.getFilmById(
      req.params.id,
      populate?.split(","),
    );
    return res.status(200).json(films);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
