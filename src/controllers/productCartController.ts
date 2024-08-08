import { ProductCartModel } from './../models';
import { CartService, ProductCartService, ProductService } from '../services';
import { container } from "tsyringe";
import { Request , Response} from "express";


export class ProductCartController {


	static async createProductCart(req: Request, res: Response) {
		try {
			const productCartService = container.resolve(ProductCartService);
			const cartService = container.resolve(CartService);
            const productService = container.resolve(ProductService);
			const cart = await cartService.findById(req.body.cartId);
			const product = await productService.findById(req.body.productId);
			if(product && cart){
				const productCart = await productCartService.createProductCart(req.body);
				res.status(201).json({status: 201,
                    productcart: productCart});
			}
		} catch (error: any) {
            res.status(500).json({
                status: 500,
                message: error.message
            })
		}
	}

	static async updateProductCartProductsQty(req: Request, res: Response) {
		try {
			const productCartService = container.resolve(ProductCartService);
			const productCart = await productCartService.updateProductCartProductsQty(parseInt(req.params.id), parseInt(req.params.productId), parseInt(req.body.quantity));
			res.status(201).json(productCart);
		} catch (error) {

		}
	}

	static async deleteProductCartProducts(req: Request, res: Response) {
		try {
			const productCartService = container.resolve(ProductCartService);
			const productCart = await productCartService.deleteProductCartProducts(parseInt(req.params.id), parseInt(req.params.productId));
			res.status(201).json(productCart);
		} catch (error) {

		}
	}

}