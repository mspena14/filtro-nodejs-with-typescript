import { AuthRepository, PermissionsRepository } from '../repositories';
import { injectable, inject } from 'tsyringe';
import { UserModel } from '../models';
import { CreationAttributes } from 'sequelize';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";

config();

@injectable()
export class AuthService {}
