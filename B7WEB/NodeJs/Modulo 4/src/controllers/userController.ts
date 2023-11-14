import { Request, Response } from 'express';
import User from '../models/User';
import { getMaxListeners } from 'process';
import   * as mongoose  from 'mongoose';
import { timeStamp } from 'console';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;



    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const incrementAgeAction = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    

    let updateAge=await User.findByIdAndUpdate(id, {
        $inc: {age: +1}
        })
    
        if(updateAge){
            res.redirect('/')
        }else{
            res.status(400).send('error')
        }


}

export const diminuiridade = async (req: Request, res: Response) => {
    let id:string = req.params.id;

    let diminuirage = await User.findByIdAndUpdate(id,{
        $inc: {age: -1}
    })

    if(diminuirage){
        res.redirect('/')
    }else{
        res.status(400).send('error')
    }
}

export const excluir = async (req: Request, res: Response) => {
    let id:string = req.params.id

    let excluiruser = await User.findByIdAndDelete(id)

    if(excluiruser) {
        res.redirect('/')
    }else {
        res.status(400).send('ERRO')
    }
}

    
export const usuarioatualizado = async (req: Request, res: Response) => {
    let id:string = req.params.id; 
    let nomefull = req.body.namefull;
    let nomefultest = nomefull.split(' ');

    
    console.log(req.params)
    console.log(req.body)
    console.log(nomefultest)

    let idd = new mongoose.Types.ObjectId(id)

    let usuarioantigo = await User.findById(id)
    let historico= usuarioantigo?.Historico
    historico?.push(nomefull)
    
    let atualizar= await User.findByIdAndUpdate(id,{$set : {name : {firstName: nomefultest[0], lastName: nomefultest[1]},Historico:historico}});
   


        
console.log(atualizar?._id)
console.log(idd)
console.log(atualizar?._id.equals(idd))
    // let atualizar= await User.updateOne({id},
        
    //     {name: {
    //         firstName:nomefultest[0],
    //         lastName:nomefultest[1]
    //     }},
        
    // )
    if(atualizar){
        res.redirect('/')
    }else{
        res.status(400).send('ERRO')
    }
} 


export const updateage = async (req: Request, res: Response) => {
    let id = req.params.id; 
    let idadeatualizar1 = req.body.age;

    let atualizar= await User.findByIdAndUpdate(id,{$set : {age:idadeatualizar1}});

    console.log(atualizar)

    res.redirect('/')
    
   

}

