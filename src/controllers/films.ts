import express from 'express'
import * as service from '../services/swapi'

export const getFilms = async (req: express.Request, res: express.Response) => {
  try {
    const films = await service.getFilms()
    return res.status(200).json(films)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}
