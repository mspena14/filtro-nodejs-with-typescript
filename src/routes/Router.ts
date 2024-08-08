import { Router } from 'express';
import { userRouter, authRouter, productRouter, productCartRouter, orderRouter } from './';


export const router = Router();

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/productsCarts', productCartRouter);
router.use('/orders', orderRouter);
router.use('/auth', authRouter);