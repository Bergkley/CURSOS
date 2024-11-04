import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/Movie";

// lOGGER
import Logger from "../../config/Logger"

export async function createMovie(req: Request, res: Response) {
    return res.status(200).send({ message: "Cadastrado com sucesso!" });
}