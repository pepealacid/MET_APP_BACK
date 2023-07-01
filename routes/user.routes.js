const router = require("express").Router();
const User = require("./../models/User.model");
const userController = require('../controllers/user.controller')

const { isAuthenticated } = require("../middlewares/verifyToken.middleware");

router.put("/:id", isAuthenticated, (req, res, next) => {
  const { data } = req.body;
  try {

  } catch (err) {
    next(err);
  }
});

module.exports = router;
