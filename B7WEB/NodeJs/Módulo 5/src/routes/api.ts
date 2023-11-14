import { Router} from "express";
import * as ApiControllers from '../controllers/apiControllers'
import bodyParser from "body-parser";


const router = Router();

router.get('/ping',ApiControllers.ping)

router.get('/random', ApiControllers.random)
router.get('/nome/:nome',ApiControllers.nome)
router.post('/frases',ApiControllers.createphrases)
router.get('/frases',ApiControllers.listphrases)
router.get('/frases/aleatoria',ApiControllers.randomphrases)
router.get('/frases/:id',ApiControllers.onephrases)
router.put('/frases/:id',ApiControllers.atualizarfrase)
router.delete('/frases/:id',ApiControllers.deletephrases)


export default router