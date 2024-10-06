const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rotas 
app.get('/',(req, res) => {
    res.json({message: 'Hello World'})
})

app.post('/createproduct',(req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    res.json({message: 'Product created', name, price})

})
app.listen(3000);