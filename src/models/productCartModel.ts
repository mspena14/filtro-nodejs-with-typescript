import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { ProductModel, CartModel } from "./";

@Table({
    tableName: 'productsCarts',
    timestamps: true,
})

export class ProductCartModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @ForeignKey(() => ProductModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    productId!: number;

    @BelongsTo(() => ProductModel)
    product!: ProductModel;

    @ForeignKey(() => CartModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    cartId!: number

    @BelongsTo(() => CartModel)
    cart!: CartModel;

    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    quantity!: number;
}