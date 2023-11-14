import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.post('/novoUsuario', HomeController.novoUsuario)
router.get('/usuario/:id/addidade', UserController.incrementAgeAction);
router.get('/usuario/:id/diminuiridade', UserController.diminuiridade);
router.get('/usuario/:id/deletar', UserController.excluir);
router.post('/usuario/:id/atualizar', UserController.usuarioatualizado);
router.post('/usuario/:id/atualizarage', UserController.updateage);

router.post('/novoUsuario', HomeController.novoUsuario)

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);


router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;