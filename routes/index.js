/* eslint-disable import/no-import-module-exports */
/* eslint-disable jest/require-hook */
import { Router } from 'express';
import AppController from '../controllers/AppController';

const router = Router();

router.get('/status', AppController.getStatus);

router.get('/stats', AppController.getStats);

router.post('/users', UsersController.postNew);

module.exports = router;
