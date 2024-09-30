const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  const user = {
    name: 'Berg',
    surname: 'Brasil',
  }

  res.render('home', { user: user })
})

app.listen(3000)
