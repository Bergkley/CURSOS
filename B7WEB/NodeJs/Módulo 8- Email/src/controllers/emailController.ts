import { Request, Response } from 'express';
import nodemailer from 'nodemailer'


export const contato = async (req: Request, res: Response) => {
    // Passo 1: Configurar o transporter
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "d2a4b29239113d",
          pass: "4186c705e7a86d"
        }
      });

      // Passo 2: Configurar a mensagem
      let message = {
        from: req.body.from,
        to:'berg@gmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        Text: req.body.email
      }


      // Passo 3: Enviar a mensagem
      let info = await transport.sendMail(message);

      console.log('INFO', info)


    
    res.json({sucess: true});
}
