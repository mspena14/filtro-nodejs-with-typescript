import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement, HasOne, HasMany } from "sequelize-typescript";
import { CartModel, OrderModel, RolModel } from "./";

@Table({
    tableName: 'users',
    timestamps: true,
})

export class UserModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(
        { type: DataType.STRING, allowNull: false }
    )
    name!: string;


    @Column(
        {
            type: DataType.STRING(200),
            allowNull: false,
            unique: true
        }
    )
    email!: string;

    @Column(
        {
            type: DataType.STRING(200),
            allowNull: false
        }
    )
    password!: string;

    @HasOne(() => CartModel)
    cart!: CartModel;

    @ForeignKey(() => RolModel)
    @Column(
        {
            type: DataType.INTEGER,
            allowNull: false
        }
    )
    rolId!: number;

    @BelongsTo(() => RolModel)
    rol!: RolModel;

    @HasMany(() => OrderModel)
    orders!: OrderModel[];
}  