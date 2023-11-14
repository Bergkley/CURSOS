import { Request, Response } from 'express';
import * as UserService from '../services/User.Service'

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        const newUser = await UserService.createUser(email,password);

        if(newUser instanceof Error) {
             res.json({error: newUser.message})
             return
        }else {
            res.status(201);
             res.json({id: newUser.id})
             return
        }

    }
}
export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        const user = await UserService.findbyEmail(email)

        if(user && await UserService.matchPassword(password, user.password)) {
            res.json({status: true})
            return
        }
    }
    res.json({status: true})
}


export const list = async (req: Request, res: Response) => {
    let users = await UserService.all();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
}