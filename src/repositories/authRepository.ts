import { UserModel } from '../models';
import { injectable } from "tsyringe";
import { CreationAttributes } from 'sequelize';


@injectable()
export class AuthRepository {

	// Create
	async createUser(user: CreationAttributes<UserModel>): Promise<UserModel> {
		return await UserModel.create(user);
	}
	// Read
	async getUserByEmail(email: string): Promise<UserModel | null> {
		const user = await UserModel.findOne({ where: { email }});
		if(user){
			return user;
		}
		else{
			throw new Error('User not found');
		}
	}
	
}