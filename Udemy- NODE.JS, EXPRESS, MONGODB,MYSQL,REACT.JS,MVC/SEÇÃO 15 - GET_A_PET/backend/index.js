const express = require('express');
const cors = require('cors');
const mongoose = require('./db/conn');

const app = express();

// config json
app.use(express.json());


// Salve cors
app.use(cors({Credentials: true, origin: 'http://localhost:3000'}));

// Routes
const UserRoutes = require('./routes/UserRouter');

app.use('/users', UserRoutes);

// Conexão
app.listen(5000)
