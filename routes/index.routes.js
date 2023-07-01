const router = require("express").Router();

router.use("/", require('./main.routes'))
router.use("/auth", require("./auth.routes"))
router.use("/itinerary", require("./itinerary.routes"))

module.exports = router;
