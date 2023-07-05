const router = require("express").Router();
const userController = require('../controllers/user.controller')
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");

router.put("/:id/:artworkId", isAuthenticated, userController.update);

router.delete("/:id", isAuthenticated, userController.delete)

router.get("/get-user", isAuthenticated, userController.get)

module.exports = router;
