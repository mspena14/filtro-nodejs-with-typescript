import { UserRepository, CartRepository } from '../repositories';
import { injectable, inject } from 'tsyringe';
import { CartModel, UserModel } from '../models';
import { container } from 'tsyringe';

@injectable()
export default class UserService{
    constructor(@inject('UserRepository') private userReposiroty: UserRepository){}

    async createUser(cart: Partial<CartModel>, user: Partial<UserModel>): Promise<UserModel>{
        const cartRepository = container.resolve(CartRepository)
        return await this.userReposiroty.create(user)
    }

    async updateUser(id: number, user: Partial<UserModel>){
        return await this.userReposiroty.updateUser(id, user)
    }

    async findAllUsers(){
        return await this.userReposiroty.findAll()
    }

    async deleteUser(id:number){
        return await this.userReposiroty.deleteUser(id)
    }

    async checkUserCredentials(email:string, password: string): Promise<Partial<UserModel> | undefined>{
        const user = await this.userReposiroty.findByEmail(email)
        if(user &&  user.password === password){
            return user;
        }
        throw new Error('Invalid credentials');
    }

}