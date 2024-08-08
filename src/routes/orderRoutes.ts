import { Router } from "express";
import { OrderController } from "../controllers";
// import authorize from "../middlewares/auth.middleware";

export const orderRouter = Router();

// orderRouter.post('/' , authorize(2, "canCreate") ,OrderController.createOrder);
// orderRouter.put('/:id', authorize(2, "canUpdate") , OrderController.updateOrder);
// orderRouter.delete('/:id', authorize(2, "canDelete") , OrderController.deleteOrder);
// orderRouter.get('/' ,authorize(2, "canRead"), OrderController.getAllOrders);
// orderRouter.get('/users/:id', authorize(2, "canRead") , OrderController.getOrderByUser);