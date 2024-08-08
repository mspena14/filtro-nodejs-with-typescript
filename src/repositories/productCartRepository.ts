import { injectable } from "tsyringe";
import { ProductCartModel, ProductModel } from "../models";
import { CreationAttributes} from 'sequelize';

@injectable()
export class ProductCartService {
    async createProductCart(data: CreationAttributes<ProductCartModel>): Promise<ProductCartModel> {
        return ProductCartModel.create(data);
    }
    async deleteProductCartProducts(productId: number, cartId: number): Promise<void> {
        await ProductCartModel.destroy({
            where: {
                productId,
                cartId
            }
        });
    }
    async updateProductCartProductsQty(productId: number, cartId: number, qty: number): Promise<ProductCartModel> {
        return ProductCartModel.update(
            {
                qty
            },
            {
                where: {
                    productId,
                    cartId
                }
            }
        );
    }
    async getProductsByCartId(cartId: number): Promise<ProductCartModel[]> {
        return ProductCartModel.findAll({
            where: {
                cartId
            },
            include: [{model: ProductModel}]
        });
    }
    async getTotalPriceByCartId(cartId: number): Promise<number> {
        const products = await ProductCartModel.findAll({
            where: {
                cartId
            },
            include: [{model: ProductModel}]
        });
        return products.reduce((total, product) => total + (product.quantity * product.product.price), 0);
    }
}
