import { OrderRepository, UserRepository } from "../repositories";
import { injectable, inject } from "tsyringe";
import { OrderModel, ProductCartModel, UserModel} from "../models";
import { CreationAttributes } from "sequelize";

@injectable()
export class OrderService {
    constructor(@inject('OrderRepository') private orderRepository: OrderRepository){}

    async createOrder(user: UserModel,order: Partial<OrderModel>): Promise<OrderModel>{       
        order.userId = user.id
   
        return await this.orderRepository.create(order)
    }

    async updateOrder(id: number, order: Partial<OrderModel>){
        return await this.orderRepository.updateOrder(id, order)
    }

    async findAllOrders(){
        return await this.orderRepository.findAll()
    }

    async deleteUser(id:number){
        return await this.orderRepository.deleteOrder(id)
    }

    async getProductsByIdOrder(id: number){
        return await this.orderRepository.findProductsByIdOrder(id)
    }
}
