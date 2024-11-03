import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

app.listen(config.get<number>("port"), async ()=>{
    console.log(`Servidor online na porta ${config.get<number>("port")}`)
})