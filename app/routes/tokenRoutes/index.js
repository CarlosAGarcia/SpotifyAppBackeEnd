

let express = require('./express')
let getToken = require('./getToken')

const Router = express.Router()
Router.post('/token', getToken)

const tokenRoutes = Router
module.exports = {
  tokenRoutes
}
