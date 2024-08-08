import { Request, Response } from "express";
import { container } from "tsyringe";
import { CartService, UserService } from "../services";
import jwt from 'jsonwebtoken';

export class AuthController {
  static async register(
    req: Request,
    res: Response
  ): Promise<Response | undefined> {
    try {
      const userService: UserService = container.resolve(UserService);
      const createdUser = await userService.createUser(req.body);
      const cartService: CartService = container.resolve(CartService);
      if (createdUser) {
        const userId: any = createdUser.id;
        await cartService.createCart({
          userId: userId,
        });
        res.status(201).json({
          status: 201,
          user: createdUser,
        });
      }
    } catch (err: any) {
      return res.status(500).json({
        status: 500,
        message: err.message,
      });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userService = container.resolve(UserService);
      const user = await userService.checkUserCredentials(email, password);
      if (!user || !user.id || !user.rolId ) {
        return res.status(401).json({
          status: 401,
          message: "Invalid credentials",
        });
      }
      const token = AuthController.generateToken({
        id: user.id,
        roleId: user.rolId
      });
      res.status(200).json({
        token: token
      });
    } catch (err: any) {
      res.status(401).json({
        status: 401,
        message: err.message,
      });
    }
  }

  static generateToken(user: {
    id: number;
    roleId: number;
  }): any{
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("Please provide a JWT secret!");
    }
    const token = jwt.sign(user, secret, { expiresIn: "1h" });
    return token;
  }
}
