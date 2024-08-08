import { CartRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { CartModel } from '../models';

@injectable()
export  class CartService{
    constructor(@inject("CartRepository") private cartRepository: CartRepository){}

    async createCart(cart: Partial<CartModel>){
        return await this.cartRepository.create(cart)
    }

    async findById(id: number): Promise<CartModel | void> {
		try {
			return await this.cartRepository.findById(id);
		} catch (error: any) {
			throw new Error('Error: ' + error.message);
		}
	}

}