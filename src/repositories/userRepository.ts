import { injectable } from "tsyringe";
import { UserModel } from "../models";

@injectable()
export  class UserRepository{
    async create(user: Partial<UserModel>){
        return await UserModel.create(user)
    }

    async updateUser(id: number, newUser: Partial<UserModel>){
        return await UserModel.update(newUser, { where: {id}})
    }

    async deleteUser(id: number){
        return await UserModel.destroy({where: {id: id}})
    }

    async findAll(): Promise<UserModel[]>{
        return await UserModel.findAll()
    }

    async findByEmail(email: string){
        return await UserModel.findOne({where: {email}});
    }
    
}