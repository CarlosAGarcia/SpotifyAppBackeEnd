import cors from 'cors'
import express from 'express'
require('dotenv').config()

var app = express()
const apiPort = PORT || 12345
const router = express.Router()

app.use('/api', cors({ origin: true, credentials: true }))
// respond with "hello world" when a GET request is made to the homepage
app.use('/api', routes(router))