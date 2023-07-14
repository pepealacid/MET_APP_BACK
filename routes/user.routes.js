const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");

//Get and update artworks
router.get("/artworks/favorites/:id", isAuthenticated, userController.getFavoriteArtworks);

router.put(
  "/artworks/update-favorites/:id/:artworkID",
  isAuthenticated,
  userController.updateFavoriteArtworks
);

//Get and update artists
router.get("/artists/favorites/:id", isAuthenticated, userController.getFavoriteArtists);

router.put(
  "/artists/update-favorites/:id/:artistID",
  isAuthenticated,
  userController.updateFavoriteArtists
);

//Handle user info
router.delete("/:id", isAuthenticated, userController.delete);

router.get("/get-user", isAuthenticated, userController.get);





module.exports = router;
