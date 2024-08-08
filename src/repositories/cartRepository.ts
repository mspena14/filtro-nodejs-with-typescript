import { injectable } from "tsyringe";
import { CartModel } from "../models";

@injectable()
export class CartRepository {
    async create(cartData: Partial<CartModel>): Promise<CartModel> {
        return CartModel.create(cartData as CartModel);
    }

	async findById(id:number): Promise<CartModel | void>{
		const cart = await CartModel.findByPk(id);
		if (!cart) {
            throw new Error('Cart not found');
        }
		else return cart;
	}
}