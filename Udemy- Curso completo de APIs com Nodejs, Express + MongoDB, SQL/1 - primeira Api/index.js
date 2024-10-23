const express = require('express');

const server = express();

const cursos = ['NodeJS', 'ReactJS', 'React Native'];

server.get('/curso', (req,res)=>{
   const nome = req.query.nome;

   return res.json({curso: `Aprendendo ${nome}`})
})

server.get('/curso/:id', (req,res)=>{
   const id = req.params.id;

   return res.json({Curso: `${id}`})
})

server.get('/curso/:index', (req,res)=>{
   const {index} = req.params;
   

   return res.json(cursos[index])
})


server.listen(3000, () => console.log('rodando'))