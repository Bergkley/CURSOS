const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const products = require('./products')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/products', products)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
