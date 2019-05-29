let getToken = require('./getToken')

const getToken = function(req, res){ 
    console.log('ROUTE GET TOKEN')
    return res.status(200)
}

module.exports = {
    getToken
  }