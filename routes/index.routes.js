const router = require("express").Router();

router.use("/auth", require("./auth.routes"))
router.use("/", require('./main.routes'))
router.use("/", require('./user.routes'))

module.exports = router;
