import { CartRepository, ProductCartRepository, ProductRepository } from '../repositories';
import { injectable, inject, container } from 'tsyringe';
import { ProductCartModel } from '../models';

@injectable()
export class ProductCartService {
    constructor(@inject('ProductCartRepository') private productCartRepository: ProductCartRepository) { }

    async deleteProductCartProducts(id: number) {
        return await this.productCartRepository.deleteProductCart()
    }

    async updateProductCartProductsQty(id: number, newQuantity: number) {
        return await this.productCartRepository.updateProductCartProductsQty()
    }
}
