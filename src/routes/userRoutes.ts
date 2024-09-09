import { Router } from 'express';
import userController from '../controllers/userController';
import { authenticationMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authenticationMiddleware);
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

export default router;