const router = require("express").Router();

// Services router
const servicesRouter = require("./services");

router.use("/",servicesRouter);

module.exports = router;