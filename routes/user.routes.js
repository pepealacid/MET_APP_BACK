const router = require("express").Router();
const userController = require('../controllers/user.controller')
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");

router.put("/:id", isAuthenticated, userController.update);

router.delete("/:id", isAuthenticated, userController.delete)

module.exports = router;
