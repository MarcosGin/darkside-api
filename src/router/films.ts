import express from 'express'

import { getFilms } from '../controllers/films'

export default (router: express.Router) => {
  router.get('/films', getFilms)
}
