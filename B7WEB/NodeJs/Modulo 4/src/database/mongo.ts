import { connect, ConnectOptions } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect  = async () => {
    try{
        console.log('Conectando ao MongoDB...');
        await connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology:true

        } as ConnectOptions);
        console.log('MongoDB conectado com sucesso!');
    }catch(error){
        console.log('Erro conexão MongoDB', error);
    }
}