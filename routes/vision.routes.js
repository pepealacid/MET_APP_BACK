const router = require("express").Router();
const visionController = require("../controllers/vision.controller");

//(C)RD
router.post("/analyze", visionController.analyzeImage);

module.exports = router;
