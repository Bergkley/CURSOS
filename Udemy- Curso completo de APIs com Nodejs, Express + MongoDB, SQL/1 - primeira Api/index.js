const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['NodeJS', 'ReactJS', 'React Native'];

server.get('/curso', (req,res)=>{
   const nome = req.query.nome;

   return res.json({curso: `Aprendendo ${nome}`})
})

server.get('/cursos', (req,res)=>{
   return res.json(cursos)
})

server.post('/cursos', (req,res)=>{
   const {name} = req.body;

   cursos.push(name)

   return res.json({cursos})

})

server.put('/cursos/:index', (req,res)=>{
  const {index} = req.params;
  const {name} = req.body;

  cursos[index] = name;

  return res.json({cursos})

})

server.delete('/cursos/:index', (req,res)=>{
  const {index} = req.params;

  cursos.splice(index, 1);

  return res.json({cursos})

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