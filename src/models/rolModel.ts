import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from "sequelize-typescript";
import { UserModel, PermissionModel } from ".";

@Table({
	tableName: 'roles',
	timestamps: false,
})

export class RolModel extends Model {
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

	@HasMany(() => UserModel)
	users!: UserModel[];

	@HasMany(() => PermissionModel)
	permission!: PermissionModel;
}