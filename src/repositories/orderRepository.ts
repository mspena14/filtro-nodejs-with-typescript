import { injectable } from "tsyringe";
import { OrderModel, ProductModel } from "../models";


@injectable()
export class OrderRepository {
    async create(order: Partial<OrderModel>): Promise<OrderModel> {
        return await OrderModel.create(order as OrderModel);
    }
    
    async findAll(): Promise<OrderModel[]> {
        return await OrderModel.findAll();
    }
    
    async findOrderByIdUser(userId: number): Promise<OrderModel[]> {
        return await OrderModel.findAll({ where: { userId } });
    }
    
    async deleteOrder(id: number){
        return await OrderModel.destroy({ where: { id } });
    }
    
    async updateOrder(id: number, newOrder: Partial<OrderModel>): Promise<number[]> {
        return OrderModel.update(newOrder, { where: { id } });
    }

    async findProductsByIdOrder(id: number){
        return await OrderModel.findByPk(id, {include: [ProductModel]})
    }
}