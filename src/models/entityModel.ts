import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { PermissionModel } from "./";


@Table({
    tableName: 'entities',
    timestamps: false
})

export class EntityModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(
        {
            type: DataType.STRING(200),
            allowNull: false
        }
    )
    name!: string;

    @HasMany(() => PermissionModel)
    permission!: PermissionModel;

}