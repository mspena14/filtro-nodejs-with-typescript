import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

interface CustomRequest extends Request {
    user?: any;
}

const authJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader: string | undefined = req.headers.authorization;

    if(authHeader){
        const token: string = authHeader.split(' ')[1];
        const secret: string | undefined = process.env.JWT_SECRET
        if(!secret){
            res.status(500).json({
                status: 500,
                message: 'secret not found'
            });
            return;
        }
        jwt.verify(token, secret, (err, user) => {
            if(err){
                res.status(403).json({
                    status: 403,
                    message: 'Forbidden'
                });
                return;
            }
            req.body.user = user;
            console.log(req.body)
            next();
        });
    }else{
        res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        });
    }

}

export default authJWT;