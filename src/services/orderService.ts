import { OrderRepository, UserRepository } from "../repositories";
import { injectable, inject } from "tsyringe";
import { OrderModel, ProductCartModel } from "../models";
import { CreationAttributes } from "sequelize";

@injectable()
export class OrderService {}
