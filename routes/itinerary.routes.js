const router = require("express").Router()
const Itinerary = require("../models/Itinerary.model")
const itineraryController = require("../controllers/itinerary.controller")

router.post("/", itineraryController.create)

router.get("/:id", itineraryController.detail)  

router.put("/:id", itineraryController.update) 

router.delete("/:id", itineraryController.delete)


module.exports = router