const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['NodeJS', 'ReactJS', 'React Native'];

// Middleware Global
server.use((req, res, next) => {
    console.log('Passei por aqui')

    return next()
})

function checkCursos(req, res, next) {
    if(!req.body.name) {
        return res.status(400).json({error: 'Name is required'})
    }
    return next()
}

function checkIndexCurso(req, res, next) {
    const curso = cursos[req.params.index]

    if(!curso) {
        return res.status(400).json({error: 'O curso não existe'})
    }
    return next()
}

server.get('/curso', (req,res)=>{
   const nome = req.query.nome;

   return res.json({curso: `Aprendendo ${nome}`})
})

server.get('/cursos', (req,res)=>{
   return res.json(cursos)
})

server.post('/cursos',checkCursos, (req,res)=>{
   const {name} = req.body;

   cursos.push(name)

   return res.json({cursos})

})

server.put('/cursos/:index',checkCursos,checkIndexCurso, (req,res)=>{
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

server.get('/cursos/:index',checkIndexCurso, (req,res)=>{
   const {index} = req.params;
   

   return res.json(cursos[index])
})


server.listen(3000, () => console.log('rodando'))