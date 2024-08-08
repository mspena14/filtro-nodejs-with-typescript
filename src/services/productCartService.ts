import { ProductsCartsRepository } from '../repositories/';
import { injectable, inject } from 'tsyringe';
import { ProductCartModel } from '../models';
import { CreationAttributes } from 'sequelize';

@injectable()
export class ProductCartService {}
