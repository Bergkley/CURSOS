const Memory = require("../models/Memory");

const createMemory = async (req, res) => {
    try {
      const { title, description } = req.body;
      const src = `images/${req.file.filename}`;
  
      console.log(req.file);
  
      if (!title || !description) {
        return res
          .status(400)
          .json({ msg: "Por favor, preencha todos os campos." });
      }
  
      const newMemory = new Memory({
        title,
        src,
        description,
      });
      await newMemory.save();
      res.json({ msg: "Memória criada com sucesso!", newMemory });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
};

const getMemories = async (req, res) => {
    try {
        const memories = await Memory.find();
        res.json(memories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}

module.exports = {
    createMemory,
    getMemories
};