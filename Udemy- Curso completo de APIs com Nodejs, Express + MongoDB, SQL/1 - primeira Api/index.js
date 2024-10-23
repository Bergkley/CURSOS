const express = require('express');

const server = express();

server.get('/curso', (req,res)=>{
    res.json({curso: 'NodeJs'})
})

server.listen(3000, () => console.log('rodando'))