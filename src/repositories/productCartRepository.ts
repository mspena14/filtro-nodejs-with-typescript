import { injectable } from "tsyringe";
import { ProductCartModel, ProductModel } from "../models";


@injectable()
export class ProductCartRepository {
    async create(productCart: any): Promise<ProductCartModel> {
        return ProductCartModel.create(productCart);
    }

    async deleteProductCartProducts(productId: number, cartId: number): Promise<void> {
        await ProductCartModel.destroy({
            where: {
                productId,
                cartId
            }
        });
    }

    async updateProductCartProductsQty(productId: number, cartId: number, qty: number) {
        return ProductCartModel.update(
            {
                quantity: qty,
            },
            {
                where: {
                    productId,
                    cartId
                }
            }
        );
    }

    async findProductsByCartId(cartId: number): Promise<ProductCartModel[]> {
        return ProductCartModel.findAll({
            where: {
                cartId
            },
            include: [{model: ProductModel}]
        });
    }

    async findTotalPriceByCartId(cartId: number): Promise<number> {
        const products = await ProductCartModel.findAll({
            where: {
                cartId
            },
            include: [{model: ProductModel}]
        });
        return products.reduce((total, product) => total + (product.quantity * product.product.price), 0);
    }
}
