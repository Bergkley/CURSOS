import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/Movie";

// lOGGER
import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (e:any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor,tente mais tarde !"})
    }
}

export  async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({message: "Filme não encontrado"})
        }
        return res.status(200).json(movie)
    } catch (e:any) {
        Logger.error(`Erro no sistema: ${e.message}`)

    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find();
    } catch (e:any) {
        Logger.error(`Erro no sistema: ${e.message}`)
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id=req.params.id
        const movie = await MovieModel.findByIdAndDelete(id)

        if(!movie) {
            return res.status(404).json({message: "Filme não encontrado"})
        }

        return res.status(200).json({message: "Filme removido com sucesso"})
    } catch (e:any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        return res.status(500).json({error: "Por favor,tente mais tarde !"})
    }
}