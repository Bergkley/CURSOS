import { Request, Response } from "express";
import { User } from "../models/User";
import { toDefaultValue } from "sequelize/types/utils";

export const nome = (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;

  res.render("pages/nome", {
    nome,
    idade,
  });
};

export const idadeForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idadeAction = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.ano) {
    let anoNascimento: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};

export const usuarionovo = async (req: Request, res: Response) => {
  let nome: string = req.body.name;
  let idade: number = req.body.age;

  if (req.body.age === "") {
    idade = 18;
  }

  const user = User.create({
    name: nome,
    age: idade,
  });

  res.redirect("/");
};

export const addidade = async (req: Request, res: Response) => {
  let id: string = req.params.id;

  let result = await User.findAll({
    where: {
      id: id,
    },
  });

  if (result.length > 0) {
    let usuario = result[0];
    usuario.age++;

    await usuario.save();
  }
  res.redirect("/");
};

export const diminuiridade = async (req: Request, res: Response) => {
  let id: string = req.params.id;

  let result = await User.findAll({ where: { id } });

  if (result.length > 0) {
    let usuario = result[0];
    usuario.age--;
    await usuario.save();
  }

  res.redirect("/");
};

export const excluiridade = async (req: Request, res: Response) => {
  let id: string = req.params.id;
  let result = await User.findAll({ where: { id } });

  if (result.length > 0) {
    let usuario = result[0];
    await usuario.destroy();
  }

  res.redirect("/");
};
