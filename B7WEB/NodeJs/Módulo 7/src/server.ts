import express, { Request, Response,ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api';
import {MulterError} from 'multer';

dotenv.config();

const server = express();
server.use(express.json());

server.use(cors({
    origin: 'https://resttesttest.com',
    methods: ['GET']
}))

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes)
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

const  errorHandler:ErrorRequestHandler = (err,req,res,next) => {
    res.status(400); //Bad Request

    if(err instanceof MulterError) {
        res.json({err: err.code})
    }else {
        console.log(err);
        res.json({error: 'Ocorreu algum erro.'})
    }
}
server.use(errorHandler)
server.listen(process.env.PORT);