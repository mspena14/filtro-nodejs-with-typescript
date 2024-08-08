import { Router } from 'express';
import { UserController } from '../controllers';
import authorize from '../middlewares/auth.middleware';

export const userRouter = Router();

userRouter.delete('/:id',authorize(1, 'canDelete') , UserController.deleteUser);
userRouter.put('/:id', UserController.updateUser);
userRouter.get('/', UserController.getAllUsers);
