const express = require("express");
const { createMemory, getMemories, getMemory } = require("./controllers/MemoryController");
const upload = require("./helpers/upload");
const router = express.Router();



router.post(
    "/",
    upload.single("image"),
    (req, res, next) => {
      const image = req.file;
      if (!image) {
        return res.status(400).json({ msg: "Por favor, envie um arquivo." });
      }
      next();
    },
    (req, res) => createMemory(req, res)
);

router.get("/", (req, res) => getMemories(req, res))
router.get("/:id", (req, res) => getMemory(req, res))

module.exports = router;