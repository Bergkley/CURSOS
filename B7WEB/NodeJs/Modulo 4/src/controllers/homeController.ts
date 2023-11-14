import { Request, Response } from 'express';


import { Product } from '../models/Product';

import User from '../models/User'
import { nome } from './userController';


export const home = async (req: Request, res: Response)=>{
    /*let newuser= await User.create({
        name: {firstName:'bergkley', lastName: "brasiil"},
        email:'berg1@gmail',
        age: 19,
        interest: ['pizza','estudar']
    }) */
    /*let newuser = new User() */

    /*newuser.name = {firstName: 'berg2', lastName:'brasiill'};
    newuser.email = 'berg2@gmail.com'
    newuser.age = 15;
    newuser.interest.push('Viajar', 'Comer', 'Tecnologia');
    
    let resultado = await newuser.save() */


    
    let usario = await User.updateOne(
        {email: 'berg2@gmail.com'},
        {email: 'berg3@gmail.com'}
    )

  let users = await User.find()
    
    let age: number = 90;
    let showOld: boolean = false;
    let horario = new Date();

    let contarusers = await User.find()
    let result = contarusers.length
    




    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users,
        horario,
        result
    });
};

export const novoUsuario = async (req: Request, res: Response) => {
    let firstName = req.body.name as string;
    let lastName = req.body.lastName as string;
    let email = req.body.email as string;
    let age = req.body.age as number;
    let interest = req.body.interest as string;
    let Cidade = req.body.cidade as string
    let Telefone = req.body.telefone as string;
    let Historico =req.body.Historico as string;

    

    let newUser = new User();
    newUser.name = {firstName: firstName, lastName: lastName}
    newUser.email= email,
    newUser.age = 20,
    newUser.interest = [interest],
    newUser.Cidade = Cidade,
    newUser.Telefone = Telefone,
    newUser.Historico =[firstName]



    let result = await newUser.save()

    console.log("usuario criado", result)

    res.redirect('/')

    res.render('pages/home', {
        Historico
    });
    }
    

    