import { injectable } from "tsyringe";
import { OrderModel } from "../models";
import { CreationAttributes } from "sequelize";

@injectable()
export class OrderService {
    async createOrder(data: CreationAttributes<OrderModel>): Promise<OrderModel> {
        return OrderModel.create(data);
    }
    
    async getAllOrders(): Promise<OrderModel[]> {
        return OrderModel.findAll();
    }
    
    async getOrderByUser(userId: number): Promise<OrderModel[]> {
        return OrderModel.findAll({ where: { userId } });
    }
    
    async deleteOrder(id: number): Promise<void> {
        await OrderModel.destroy({ where: { id } });
    }
    
    async updateOrder(id: number, data: Partial<OrderModel>): Promise<OrderModel> {
        return OrderModel.update(data, { where: { id } });
    }
}