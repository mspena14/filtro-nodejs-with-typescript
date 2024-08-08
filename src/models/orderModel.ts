import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { UserModel, CartModel } from "./";

@Table({
    tableName: 'orders',
    timestamps: true,
})

export class OrderModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(
        {
            type: DataType.DECIMAL(10, 2),
            allowNull: false
        }
    )
    total!: number;

    @ForeignKey(() => UserModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    userId!: number;

    @BelongsTo(() => UserModel)
    user!: UserModel;

    @ForeignKey(() => CartModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    cartId!: number;

    @BelongsTo(() => CartModel)
    cart!: CartModel;
}