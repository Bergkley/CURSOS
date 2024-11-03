// Env
require('dotenv').config();

import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

// DB connection
import connect from "../config/db";
connect();

// Routes
import router from './router';

app.use('/api/', router);



app.listen(config.get<number>("port"), async ()=>{
    console.log(`Servidor online na porta ${config.get<number>("port")}`)
})