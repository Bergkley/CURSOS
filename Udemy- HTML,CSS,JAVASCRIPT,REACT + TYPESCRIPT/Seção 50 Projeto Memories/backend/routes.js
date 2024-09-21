const express = require("express");
const { createMemory } = require("./controllers/MemoryController");
const router = express.Router();



router.post("/", (req, res) => createMemory(req, res));

module.exports = router;