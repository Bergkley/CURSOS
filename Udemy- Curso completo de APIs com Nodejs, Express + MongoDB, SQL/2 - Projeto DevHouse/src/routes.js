const { Router } = require("express");

const routes = new Router();

routes.get('/', function (req, res) {
    return res.json({ message: "Hello World" });
});

module.exports = routes