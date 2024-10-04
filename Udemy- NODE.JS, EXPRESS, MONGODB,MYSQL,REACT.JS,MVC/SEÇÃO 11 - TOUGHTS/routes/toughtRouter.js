const express = require("express");
const router = express.Router();

// helpers
const checkAuth = require("../helpers/auth").checkAuth;

const ToughtController = require("../controllers/ToughtController");


router.get("/", ToughtController.showToughts)
router.get("/dashboard",checkAuth, ToughtController.dashboard)

module.exports = router