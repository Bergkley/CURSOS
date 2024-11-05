// Env
require("dotenv").config();

// Logger
import Logger from "../config/logger";

import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

// Morgan middleware
import morganMiddleware from "./middleware/morganMiddleware";
app.use(morganMiddleware);

// DB connection
import connect from "../config/db";
connect();

// Routes
import router from "./router";

app.use("/api/", router);

app.listen(config.get<number>("port"), async () => {
  Logger.info(`Servidor online na porta ${config.get<number>("port")}`);
});
