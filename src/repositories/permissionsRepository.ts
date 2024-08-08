import { PermissionModel } from '../models';
import { injectable } from "tsyringe";

@injectable()
export  class PermissionRepository {
    async getPermissionsByRoleId(roleId: number): Promise<PermissionModel[]> {
        try {
            const permissions = await PermissionModel.findAll({
                where: { roleId }
            });

            return permissions;
        } catch (error) {
            console.error('Error fetching permissions by roleId:', error);
            throw error;
        }
    }
}