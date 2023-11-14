import { unlink} from 'fs/promises'
import { Request,Response } from "express";
import {Phrase} from '../models/Phrase';
import { Sequelize } from "sequelize";
import sequelize from "sequelize";
import sharp from "sharp";

export const ping = (req:Request, res:Response) => {
    res.json({pong:true})
}

export const random =(req:Request,res:Response) => {
    let nRand:number = Math.floor( Math.random() * 10);
    res.json({number:nRand})
}


export const nome = (req:Request,res:Response) => {
    let nome:String= req.params.nome;
    res.json({nome})
}

export const createphrases = async (req:Request,res:Response) => {
    let {author,txt} = req.body;

    let newPhrase = await Phrase.create({author, txt})

    res.status(201)
    res.json({id:newPhrase.id, author, txt})
}

export const listphrases = async (req:Request,res:Response) => {
  let listafrases = await Phrase.findAll()

  console.log(listafrases)
  res.json({listafrases})
}

export const onephrases = async (req:Request,res:Response) => {
  let id = req.params.id

  let phrases = await Phrase.findByPk(id)

  if(phrases) {
    res.json({phrases})
  }else {
    res.status(400)
    res.json({error: 'erro'})
  }
}

export const atualizarfrase = async(req:Request,res:Response) => {
    let id = req.params.id
    let {author, txt} = req.body

    let phrases = await Phrase.findByPk(id)

    if(phrases) {
        phrases.author = author;
        phrases.txt = txt;

        await phrases.save()
    }else {
        res.json({error:'Ocorreu um error'})
    }

}
export const deletephrases = async(req:Request,res:Response) => {
    let id = req.params.id;

    let deletarauthor = await Phrase.destroy({where : {id:id} })

    res.json({})

}

export const randomphrases = async(req:Request,res:Response) => {
    let phrases = await Phrase.findOne({
        order : [
            Sequelize.fn('RANDOM')
        ]
    })
    if(phrases){
        res.json({phrases})
    }else {
        res.json({error: 'Ocorreu um error'})
    }
}

export const uploadFile = async (req:Request, res:Response) => {
    if(req.file) {
        await sharp(req.file.path)
            .resize(100,500,{
                fit:sharp.fit.fill,
                position:'top'
            })
            .toFormat('jpeg')
            .toFile(`./public/midia/${req.file.filename}.jpg`)
        await unlink(req.file.path)
        res.json({Image: `${req.file.filename}`})
    }else {
        res.status(400);
        res.json({error: 'ARQUIVO INVALIDO'})
    }
}








