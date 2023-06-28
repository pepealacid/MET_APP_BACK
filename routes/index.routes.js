const router = require("express").Router();

router.use("/", require('./main.routes'))
router.use("/auth", require("./auth.routes"))

module.exports = router;
