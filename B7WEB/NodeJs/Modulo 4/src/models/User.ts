import { timeStamp } from "console";
import { Schema, model, Model, connection } from "mongoose";
type UserType = {
    email: string,
    age: number,
    interest: [string],
    name: {
        firstName: string,
        lastName: string
    },
    horario: Date,
    Cidade:String,
    Telefone:String,
    Historico:[string]
};

const schema = new Schema<UserType>({
    email: {type: String, required: true},
    age: {type: Number, required: true},
    interest: [String],
    name: {
      firstName: {type: String, required: true,uppercase:true},
      lastName: {type:String, uppercase:true}
    },
    horario: {type:Date,default:Date.now},
    Cidade: {type: String, uppercase:true},
    Telefone:{type: String},
    Historico: {type:[String], uppercase:true}
  });

const modelName: string = 'User';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType>
     :
    model<UserType>(modelName, schema);

