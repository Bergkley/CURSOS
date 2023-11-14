import { Router } from 'express';
import {PrivateRoute} from '../config/Passport';
import * as ApiController from '../controllers/apiController';


const router = Router();

router.post('/register', ApiController.register);
router.post('/login', PrivateRoute,ApiController.login);

router.get('/list',PrivateRoute ,ApiController.list);

export default router;