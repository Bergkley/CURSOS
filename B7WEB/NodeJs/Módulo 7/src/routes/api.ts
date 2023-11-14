import { Router} from "express";
import multer from "multer";
import * as ApiControllers from '../controllers/apiControllers'
import bodyParser from "body-parser";

// const storageConfig = multer.diskStorage({
//     destination: (req,file,cb) => {
//         cb(null,'./tmp')
//     },
//     filename: (req,file,cb) => {
//         let randomName= Math.floor(Math.random() * 999999)
//         cb(null,`${randomName+Date.now()+'-'+file.originalname+'.jpg'}`)
//     },
// })


const upload =  multer({
    dest:'./tmp',
    fileFilter: (req,file,cb) => {
        const allowed : string [] = ['image/jpg','image/jpeg', 'image/png']
        cb(null,allowed.includes(file.mimetype))
    },
    limits: {fieldSize: 100000000  }
})


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


router.post('/upload',upload.single('Avatar'),ApiControllers.uploadFile)

export default router