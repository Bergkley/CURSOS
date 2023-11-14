import { Router } from 'express';
import { Auth } from '../middlewares.ts/auth';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', Auth.Private,ApiController.list);

export default router;