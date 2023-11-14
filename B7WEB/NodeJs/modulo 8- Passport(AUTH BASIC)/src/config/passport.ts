import { Request, Response,NextFunction} from 'express'
import passport  from "passport";
import { BasicStrategy } from "passport-http";
import { User, UserInstance } from "../models/User";

const notAuthorizedJson = { status:401, message: 'Não autorizado'};

passport.use (new BasicStrategy(async(email, password, done) => {
    if(email && password) {
        const user = await User.findOne({
            where: {email, password} 
        });
        if(user){
            return done(null,user)
        }
    }
    return done(notAuthorizedJson,false)
}))
export const PrivateRoute = (req:Request,res:Response,next: NextFunction)=>{
    const authFunction = passport.authenticate('basic', (err: Error, user: UserInstance) => {
        req.user= user;
        return user ? next() : next(notAuthorizedJson)
    })
    authFunction(req,res,next)
}
export default passport


// Aqui você vai configura a sua Strategy
