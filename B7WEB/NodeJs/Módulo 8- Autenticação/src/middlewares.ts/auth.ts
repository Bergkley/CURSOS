import { Request,Response, NextFunction } from "express";
import { User } from "../models/User";
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

export const Auth =  {
    Private: async (req:Request,res:Response,next:NextFunction) => {
        let sucesso= false;

        //fazer verificação (com Basic Auth) ...

        // if(req.headers.authorization) {
        //     let hash:String =  req.headers.authorization.substring(6);
        //     let decored:string= Buffer.from(hash,'base64').toString()
        //     let data:string[] = decored.split(':')

        //     if(data.length === 2) {
        //         let hasUser = await User.findOne({
        //             where: {
        //                 email: data[0],
        //                 password: data[1]
        //             }
        //         });
        //         if(hasUser){
        //             sucesso = true
        //         }
        //     }
        // }

        //fazer verificação (com JWT)
         
            if(req.headers.authorization) {
                const [authType, token] = req.headers.authorization.split(' ')
                if(authType === 'Bearer') {
                    try {
                    const decoded = JWT.verify(token,
                    process.env.JWT_SECRET_KEY as string
                    );
                    console.log('DECODED',decoded)
                sucesso=true
                    }catch(err){

                    }
                };
            }

        if(sucesso) {
            next()
        }else {
            res.status(403)
            res.json({error: 'NÃO AUTORIZADO'})
        }
    }
}