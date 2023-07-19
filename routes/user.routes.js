const router = require("express").Router();
const userController = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");

// Get and update favorite artworks
router.get(
  "/artworks/favorites/:id",
  isAuthenticated,
  userController.getFavoriteArtworks
);
router.put(
  "/artworks/favorites/:id/:artworkID",
  isAuthenticated,
  userController.updateFavoriteArtworks
);

// Get and update favorite artists
router.get(
  "/artists/favorites/:id",
  isAuthenticated,
  userController.getFavoriteArtists
);
router.put(
  "/artists/favorites/:id/:artistID",
  isAuthenticated,
  userController.updateFavoriteArtists
);

// update users itineraries
router.put("/itineraries/:userId", isAuthenticated, userController.updateItinerary)

// remove one of the user's itinerary 
router.put("/itineraries/remove/:userId", isAuthenticated, userController.removeItinerary)


// get user's itineraries 
router.get("/itineraries/:userId", isAuthenticated, userController.getItinerary)



//Handle user info
router.delete("/:id", isAuthenticated, userController.delete);

// Handle user info
router.get("/get-user", isAuthenticated, userController.get);
router.put("/edit-user/:id", isAuthenticated, userController.updateUser);
router.delete("/:id", isAuthenticated, userController.delete);
router.get("/get-first-time/:id", isAuthenticated, userController.getFirstTime);
router.put(
  "/change-first-time/:id",
  isAuthenticated,
  userController.changeFirstTime
);

module.exports = router;
