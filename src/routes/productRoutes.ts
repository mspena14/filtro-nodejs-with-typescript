import { Router } from 'express';
import { ProductController } from '../controllers';

export const productRouter = Router();

productRouter.post('/', ProductController.createProduct);
productRouter.put('/:id', ProductController.updateProduct);
productRouter.delete('/:id', ProductController.deleteProduct);
productRouter.get('/', ProductController.getAllProducts);
productRouter.get('/orders/:id', ProductController.getProductsByOrderId);
