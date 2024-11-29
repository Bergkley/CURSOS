import express from 'express';
import http from 'http';

const app = express();
const server = http.Server(app)



app.get('/', (req, res) => {
    res.send('Welcome');
})

server.listen(3333, () => {
    console.log('Server running on port 3333');
})