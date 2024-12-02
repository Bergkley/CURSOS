import { Request, Response } from "express";

import { sequelize } from "../instances/mysql";

//import  {sequelize} from '../instances/pg';

import { User } from "../models/User";

import { Product } from "../models/Product";
import { Op, where } from "sequelize";
import { json } from "sequelize";

export const home = async (req: Request, res: Response) => {
  let users = await User.findAll();

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
    users,
  });
};
