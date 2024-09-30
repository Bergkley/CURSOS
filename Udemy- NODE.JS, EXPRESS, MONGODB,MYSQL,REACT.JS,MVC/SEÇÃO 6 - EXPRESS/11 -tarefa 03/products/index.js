var express = require('express')
var router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')


router.get('/', function (req, res) {
  res.sendFile(`${basePath}/index.html`)
})

router.get('/product', function (req, res) {
  res.sendFile(`${basePath}/product.html`)
})


module.exports = router