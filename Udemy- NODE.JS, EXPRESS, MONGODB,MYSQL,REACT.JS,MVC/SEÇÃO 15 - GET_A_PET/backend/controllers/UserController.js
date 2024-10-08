const createUserToken = require("../helpers/create-user-token");
const User = require("../models/User");

const bcrypt = require('bcrypt')

module.exports = class UserController {
  static async register(req, res) {
    const { name, email, password, phone, confirmpassword } = req.body;

    // validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    }

    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório!" });
      return;
    }

    if (!phone) {
      res.status(422).json({ message: "O telefone é obrigatório!" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória!" });
      return;
    }

    if (!confirmpassword) {
      res
        .status(422)
        .json({ message: "A confirmação de senha é obrigatória!" });
      return;
    }

    if (password != confirmpassword) {
      res
        .status(422)
        .json({ message: "A senha e a confirmação precisam ser iguais!" });
      return;
    }

    // check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(422).json({ message: "Por favor, utilize outro e-mail!" });
      return;
    }

    // create a password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // create a user
    const user = new User({
      name,
      email,
      password: passwordHash,
      phone,
    });
    try {
      const newUser = await user.save();
      await createUserToken(newUser, req, res);
        
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório!" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória!" });
      return;
    }

      // check if user exists
      const user = await User.findOne({ email: email });

      if (!user) {
        res.status(422).json({ message: "Não há um usuário com esse e-mail" });
        return;
      }

      // check if password match
      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        res.status(422).json({ message: "Senha inválida" });
        return;
      }

      await createUserToken(user, req, res);

  }
};
