const jew = require("jsonwebtoken");

const createUserToken = (user, req, res) => {
  const token = jew.sign({ name: user.name, id: user.id }, "nossosecret");
  res
    .status(200)
    .json({ message: "Você está autenticado.", token: token, userId: user._id });
};
module.exports = createUserToken;
