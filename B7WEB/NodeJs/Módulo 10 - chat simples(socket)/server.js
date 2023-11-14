const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io')

const app = express();
const server = http.createServer(app)
const io =socketIO(server)


server.listen(3000)


app.use(express.static(path.join(__dirname,'public')));

let connctedUsers = [];

io.on('connection', (socket) => {
    console.log('Conexão detectada...');
    
    socket.on('join-request', (username) => {
        socket.username = username;
        connctedUsers.push( username)
        console.log(connctedUsers)

        socket.emit('user-ok', connctedUsers)
        socket.broadcast.emit('list-update', {
            joined: username,
            list: connctedUsers
        })

    })

    socket.on('disconnect', () => {
        connctedUsers = connctedUsers.filter(u => u != socket.username)
        console.log(connctedUsers);

        socket.broadcast.emit('list-update',{
            left:socket.username,
            list:connctedUsers
        })
    })

    socket.on("send-message", (message) => {
        let object = {
          username: socket.username,
          message: message,
        }
        socket.broadcast.emit("show-message", object);
    })
  });