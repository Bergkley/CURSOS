const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");
const Pet = require("../models/Pet");
const {uploadImageToFirebase} = require('../helpers/image.upload')


module.exports = class PetController {
  static async create(req, res) {
    const { name, age, description, weight,breed, color } = req.body;
    const images = req.files;

    const available = true;
    // images upload

    // validations
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    }
    if (!breed) {
      res.status(422).json({ message: "A raça é obrigatório!" });
      return;
    }

    if (!age) {
      res.status(422).json({ message: "A idade é obrigatória!" });
      return;
    }

    if (!weight) {
      res.status(422).json({ message: "O peso é obrigatório!" });
      return;
    }

    if (!color) {
      res.status(422).json({ message: "A cor é obrigatória!" });
      return;
    }
    if (!images.lenght === 0) {
      res.status(422).json({ message: "A imagem é obrigatória!" });
      return;
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
      breed,
      color,
      available,
      images: [],
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        phone: user.phone,
      },
    });
    const imageUploadPromises = images.map(image => uploadImageToFirebase(req, image));

    try {
        const imagesUrls = await Promise.all(imageUploadPromises);
        pet.images.push(...imagesUrls);


      const newPet = await pet.save();
      res.status(201).json({ message: "Pet criado com sucesso!", pet: newPet });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAll(req, res) {
   const pets = await Pet.find().sort('-createdAt')
   res.status(200).json({ message: "Pets encontrados com sucesso!", pets });
  }
};
