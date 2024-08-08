import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne, BelongsToMany } from "sequelize-typescript";
import { ProductCartModel, ProductModel, UserModel } from "./";

@Table({
    tableName: 'carts',
    timestamps: true,
})

export class CartModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @ForeignKey(() => UserModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    userId!: UserModel

    @BelongsTo(() => UserModel)
    user!: UserModel

    @BelongsToMany(() => ProductModel, () => ProductCartModel)
    products!: ProductModel[];
}