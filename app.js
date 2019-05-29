
let cors = require('cors');
let express = require('express');
let routes = require('./app/routes');
require('dotenv').config()

const { PORT } = process.env

var app = express()
const apiPort = PORT || 12345
const router = express.Router()

app.use('/api', cors({ origin: true, credentials: true }))

// respond with "hello world" when a GET request is made to the homepage
app.use('/api', routes(router))
app.listen(apiPort, () => console.log(`Example app listening on port ${apiPort}!`))
