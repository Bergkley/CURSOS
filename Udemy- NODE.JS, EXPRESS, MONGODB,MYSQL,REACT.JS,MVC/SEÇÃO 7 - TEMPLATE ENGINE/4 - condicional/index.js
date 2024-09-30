const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get("/dashboard", function (req, res) {
  res.render("dashboard");
});

app.get('/', function (req, res) {
  const user = {
    name: 'Berg',
    surname: 'Brasil',
  }

  const palavra = 'teste'

  const auth = true;

  res.render('home', { user: user, palavra: palavra, auth: auth })
})

app.listen(3000)
