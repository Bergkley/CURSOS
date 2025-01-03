import House from '../models/House';
import User from '../models/User';
import * as Yup from 'yup';

class HouseController {
  async index(req, res) {
    const { status } = req.query;

    const houses = await House.find({ status });

    return res.json(houses);
  }
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });
    const { filename } = req.file;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const data = {
      thumbnail: filename,
      description,
      price,
      location,
      status,
      user: user_id,
    };

    const house = await House.create(data);
    return res.json(house);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
      location: Yup.string().required(),
      status: Yup.boolean().required(),
    });
    const { filename } = req.file;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;
    const { house_id } = req.params;

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (String(user._id) !== String(houses.user)) {
      return res.status(401).json({ error: 'Operation not permitted' });
    }

    const data = {
      thumbnail: filename,
      description,
      price,
      location,
      status,
      user: user_id,
    };

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const updatedHouse = await House.findOneAndUpdate({ _id: house_id }, data, {
      new: true,
    });

    return res.status(200).json(updatedHouse);
  }

  async destroy(req, res) {
    const { house_id } = req.body;
    const { user_id } = req.headers;
    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (String(user._id) !== String(houses.user)) {
      return res.status(401).json({ error: 'Operation not permitted' });
    }

    await House.findByIdAndDelete(house_id);

    return res.status(200).json({ message: 'House deleted' });
  }
}

export default new HouseController();
