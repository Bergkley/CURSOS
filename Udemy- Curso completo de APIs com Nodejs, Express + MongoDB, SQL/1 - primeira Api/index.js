const express = require('express');

const server = express();

server.get('/curso', (req,res)=>{
   const nome = req.query.nome;

   return res.json({curso: `Aprendendo ${nome}`})
})
server.get('/curso/:id', (req,res)=>{
   const id = req.params.id;

   return res.json({Curso: `${id}`})
})

server.listen(3000, () => console.log('rodando'))