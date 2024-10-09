const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");
const Pet = require("../models/Pet");

module.exports = class PetController {
    static async create(req, res) {
        const { name, age, description,weight, color  } = req.body;

        const available = true;
        // images upload

        // validations
    if (!name) {
        res.status(422).json({ message: 'O nome é obrigatório!' })
        return
      }
  
      if (!age) {
        res.status(422).json({ message: 'A idade é obrigatória!' })
        return
      }
  
      if (!weight) {
        res.status(422).json({ message: 'O peso é obrigatório!' })
        return
      }
  
      if (!color) {
        res.status(422).json({ message: 'A cor é obrigatória!' })
        return
      }

    //   get pet owner
    const token = getToken(req);
    const user = await getUserByToken(token);

    // create a Pet

    const pet = new Pet({
        name,
        age,
        description,
        weight,
        color,
        available,
        images: [],
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            phone: user.phone
        }
    })
    try {
        const newPet = await pet.save();
        res.status(201).json({ message: "Pet criado com sucesso!", pet: newPet })
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    }
};