const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await ServiceModel.create(service);

      res.status(201).json({ response, msg: "Serviço criado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      // id
      const id = req.params.id;
      const service = await ServiceModel.findById(id);
      if (!service) {
        return res.status(404).json({ msg: "Serviço não encontrado" });
      }
      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      // id
      const id = req.params.id;
      const service = await ServiceModel.findById(id);
      if (!service) {
        return res.status(404).json({ msg: "Serviço não encontrado" });
      }

      const deleteService = await ServiceModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deleteService, msg: "Serviço excluído com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
  udpate: async (req, res) => {
    try {
      const id = req.params.id;
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const updateService = await ServiceModel.findByIdAndUpdate(id, service);

      if (!updateService) {
        return res.status(404).json({ msg: "Serviço não encontrado" });
      }

      res.status(200).json({ service, msg: "Serviço atualizado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = serviceController;
