import { Model, DataType, DataTypes } from "sequelize";
import {sequelize} from "../instances/pg";
import { INTEGER } from "sequelize";

export interface phrasesIntance extends Model{
    id:number,
    author:string,
    txt:string
}

export const Phrase = sequelize.define<phrasesIntance> ('Phrase',{
    id: {
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement: true
        
    },
    author: {
        type:DataTypes.STRING
    },
    txt: {
        type:DataTypes.STRING
    }
},{
    tableName:'phrases',
    timestamps:false
    }
)