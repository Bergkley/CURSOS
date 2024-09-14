const router = require("express").Router();
const serviceController = require("../controllers/serviceController");

// Funções

router.route("/services").post((req, res) => serviceController.create(req, res));

router.route("/services").get((req, res) => serviceController.getAll(req, res));

router.route("/services/:id").get((req, res) => serviceController.get(req, res));

module.exports = router;