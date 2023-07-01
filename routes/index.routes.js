const router = require("express").Router();

router.use("/auth", require("./auth.routes"))
router.use("/itinerary", require("./itinerary.routes"))
router.use("/", require('./main.routes'))
router.use("/", require('./user.routes'))
router.use("/", require("./artwork.routes"))


module.exports = router;
