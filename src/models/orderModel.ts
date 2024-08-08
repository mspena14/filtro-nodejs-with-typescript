import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { UserModel, ProductCartModel } from "./";

@Table({
    tableName: 'orders',
    timestamps: true,
})

export class OrderModel extends Model<OrderModel> {
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

    @ForeignKey(() => ProductCartModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    productCartId!: number;

    @BelongsTo(() => ProductCartModel)
    productCart!: ProductCartModel;
}