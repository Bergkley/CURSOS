import express from 'express';
import http from 'http';
import sockeio from 'socket.io';

const app = express();
const server = http.Server(app)
app.use(express.static(__dirname + '/public'));

const io = sockeio(server);

io.on('connect',(socket)=> {
    socket.on('teste', (res)=>{
        console.log(res);
    })
})



app.get('/', (req, res) => {
    res.render('index.html');
})

server.listen(3333, () => {
    console.log('Server running on port 3333');
})