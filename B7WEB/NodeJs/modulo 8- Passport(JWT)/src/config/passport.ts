import { Request, Response,NextFunction} from 'express'
import dotenv from 'dotenv'
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import passport from 'passport';
import { User,UserInstance } from '../models/User';
import jwt from 'jsonwebtoken';

dotenv.config();
const notAuthorizedjson = { status: 401, message: 'Não autorizado'};

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string

}

passport.use(new JWTStrategy(options,async (payload,done)=> {
        const user = await User.findByPk(payload.id);
        if(user) {
            return done(null,user)
        }else{
            return done(notAuthorizedjson,false)
        }

}))

export const generateToken = (data:object) => {
    return jwt.sign(data, process.env.JWT_SECRET as string)
}

export const privateRoute = (req:Request, res:Response, next: NextFunction) => {
    const authFunction = passport.authenticate('jwt',(err: Error, user: UserInstance)=>{
       req.user = user
        return user? next() :next(notAuthorizedjson)
    } )
}




// Aqui você vai configura a sua Strategy
