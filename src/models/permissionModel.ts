import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { EntityModel, RolModel } from "./";

@Table({
    tableName: 'permissions',
    timestamps: false,
})

export class PermissionModel extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(
        {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    )
    canCreate!: boolean;

    @Column(
        {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    )
    canUpdate!: boolean;

    @Column(
        {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    )
    canDelete!: boolean;

    @Column(
        {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    )
    canGet!: boolean;

    @ForeignKey(() => RolModel)
    @Column(DataType.INTEGER)
    roleId!: number;

    @BelongsTo(() => RolModel)
    rol!: RolModel;

    @ForeignKey(() => EntityModel)
    @Column(DataType.INTEGER)
    entityId!: number;

    @BelongsTo(() => EntityModel)
    entity!: EntityModel;
}