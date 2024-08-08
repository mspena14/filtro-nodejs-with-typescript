import { injectable } from "tsyringe";
import { CartModel } from "../models";
import { CreationAttributes} from 'sequelize';


@injectable()
export class CartRepository {
    async createCart(cartData: CreationAttributes<CartModel>): Promise<CartModel> {
        return CartModel.create(cartData);
    }
    async deleteCart(id: number): Promise<void> {
        await CartModel.destroy({ where: { id } });
    }
    async getAllCarts(): Promise<CartModel[]> {
        return CartModel.findAll();
    }
}