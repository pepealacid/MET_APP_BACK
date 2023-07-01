const router = require("express").Router();
const artworkController = require("../controllers/artwork.controller")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");


//(C)RD
router.post("/", isAuthenticated, artworkController.create);

//C(R)D
router.get("/:id", isAuthenticated, artworkController.detail)

//CR(D)
router.delete("/:id", isAuthenticated, artworkController.delete)

module.exports = router;
