const router = require("express").Router()
const Itinerary = require("../models/Itinerary.model")
const itineraryController = require("../controllers/itinerary.controller")
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");


router.post("/",isAuthenticated, itineraryController.create)

router.get("/:id", isAuthenticated, itineraryController.detail)  

router.put("/:id", isAuthenticated, itineraryController.update) 

router.delete("/:id", isAuthenticated,  itineraryController.delete)

router.get("/", isAuthenticated, itineraryController.getAll)

module.exports = router