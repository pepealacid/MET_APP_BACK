const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");

router.put("/addfav/:id/:artworkId", isAuthenticated, userController.update);

router.put("/deletefav/:id/:artworkId", isAuthenticated, userController.update)

router.delete("/:id", isAuthenticated, userController.delete);

router.get("/get-user", isAuthenticated, userController.get);

router.get("/favorites/:id", isAuthenticated, userController.list);

module.exports = router;
