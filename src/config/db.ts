import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { ProductModel, UserModel, CartModel, OrderModel, PermissionModel, ProductCartModel, RolModel, EntityModel } from '../models'

config();
const { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD} = process.env;

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port:3306,
    models: [ProductModel, UserModel, CartModel, OrderModel, PermissionModel, ProductCartModel, RolModel, EntityModel],
});

export default sequelize;