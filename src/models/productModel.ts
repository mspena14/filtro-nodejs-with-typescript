import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BelongsToMany } from "sequelize-typescript";
import { ProductCartModel, CartModel } from "./";


@Table({
    tableName: 'products',
    timestamps: true,
})

export class ProductModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(
        {
            type: DataType.STRING,
            allowNull: false
        }
    )
    name!: string;

    @Column(
        {
            type: DataType.DECIMAL(10, 2),
            allowNull: false,
        }
    )
    price!: number;

    @Column(
        {
            type: DataType.TEXT
        }
    )
    description!: string;

    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    stock!: number;

    @BelongsToMany(() => CartModel, () => ProductCartModel)
    carts!: CartModel[];
}