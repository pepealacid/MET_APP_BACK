const router = require("express").Router();

router.use("/auth", require("./auth.routes"))
router.use("/itinerary", require("./itinerary.routes"))
router.use("/user", require('./user.routes'))
router.use("/artwork", require("./artwork.routes"))
router.use("/", require('./main.routes'))



module.exports = router;
