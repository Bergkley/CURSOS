import { Model, DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql';
import { toDefaultValue } from "sequelize/types/utils";


export interface UserInstance extends Model {
    id:number;
    name:string;
    age:number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        get () {
            let raw: string = this.getDataValue('name')
            return raw.toUpperCase()
        }
    },
    age: {
        type:DataTypes.INTEGER,
        defaultValue: 18,
        set(value:number){
            if(value <18) {
                value = 18
            } 
            this.setDataValue('age',value)
        }
    }
},{
    tableName: "users",
    timestamps: false
});

