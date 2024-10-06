const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rotas 
app.get('/',(req, res) => {
    res.status(200).json({message: 'Hello World'})
})

app.post('/createproduct',(req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if(!name || !price) {
        return res.status(422).json({message: 'Name and price are required'})
    }

    res.status(201).json({message: 'Product created', name, price})

})
app.listen(3000);