import express from 'express'

import http from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'

import router from './router'

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/', router())

const server = http.createServer(app)

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080')
})
