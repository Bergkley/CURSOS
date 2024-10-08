const express = require('express');
const cors = require('cors');
const mongoose = require('./db/conn');

const app = express();

// config json
app.use(express.json());


// Salve cors
app.use(cors({Credentials: true, origin: 'http://localhost:3000'}));

// Routes

// Conexão
app.listen(5000)
