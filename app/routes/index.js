
let tokenRoutes = require('./tokenRoutes')

module.exports = function (router){
    router.use('/token', tokenRoutes)
  return router
}
