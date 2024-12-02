import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const server = http.Server(app);
app.use(express.static(__dirname + '/public'));

const io = socketio(server);
let users = [];  

io.on('connect', (socket) => {
    console.log('Novo cliente conectado', socket.id);

    socket.on('login', (username) => {
        users.push({ id: socket.id, username: username });
        console.log(`${username} entrou no chat.`);

        socket.broadcast.emit('chat-message', { message: `${username} entrou no chat.`, systemMessage: true });
    
        io.emit('updateUsers', users);

    });

    socket.on('disconnect', () => {
        const userExit = users.find(user => user.id === socket.id);
        users = users.filter(user => user.id !== socket.id);
        console.log('User exit', userExit);
        console.log(`Cliente desconectado: ${socket.id}`);
        
        io.emit('updateUsers', users);

        socket.broadcast.emit('chat-message', { message: `${userExit?.username} saiu no chat.`, systemMessage: true });

    });

    socket.on('logout',(username) => {
        users = users.filter(user => user.username !== username);
        console.log('User logout', users);
        socket.broadcast.emit('chat-message', { message: `${username} saiu do chat.`, systemMessage: true });
        io.emit('updateUsers', users);
    })

    socket.on('infoUser',(username) => {
        users = users.filter(user => user.username === username);
        console.log('chegou aqui')
        console.log('socket.id')
        socket.emit('infoUser', {socketId: socket.id, user: users});
    })
    


    socket.on('send-message', (res) => {
        console.log('Mensagem recebida!', res);
        socket.broadcast.emit('send-message', res); 
    });

    
    
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(3333, () => {
    console.log('Server running on port 3333');
});
