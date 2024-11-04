import {Router, Request, Response} from 'express'
import { createMovie } from './controllers/movieController'

const router = Router()

export default router.get('/test', (req: Request, res: Response) => {
    res.status(200).send('Teste')
})
.post("/movie", createMovie)