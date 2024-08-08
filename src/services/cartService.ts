import { CartRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { CartModel } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class CartService {}