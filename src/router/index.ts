import express from 'express'

import films from './films'

const router = express.Router()

export default (): express.Router => {
  films(router)
  return router
}
