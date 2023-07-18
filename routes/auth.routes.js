const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./../models/User.model");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");
const saltRounds = 10;

// DELETE THIS AFTER TESTING HAVING THE ENTIRE API IN THE DB
// const Art = require("./../models/Artwork.model");

// router.post("/art", async(req, res, next)=>{
//   try {
//     const res = await Art.create(req.body)
//     res.status(200).json(res)
//   } catch (error) {
//     console.log(error)
//   }
// })

router.post("/signup", (req, res, next) => {
  const { email, password } = req.body;

  if (password.length < 2) {
    res
      .status(400)
      .json({ message: "Password must have at least 2 characters" });
    return;
  }

  User.findOne({ email })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "User already exists." });
        return;
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      return User.create({ email, password: hashedPassword });
    })
    .then((createdUser) => {
      const { email, _id } = createdUser;
      const user = { email, _id };

      res.status(201).json({ user });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }

  User.findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(401).json({ message: "User not found." });
        return;
      }

      if (bcrypt.compareSync(password, foundUser.password)) {
        const { _id, email } = foundUser;

        const payload = { _id, email };

        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });

        res.json({ authToken });
      } else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
    })
    .catch((err) => next(err));
});

router.get("/verify", isAuthenticated, (req, res, next) => {
  console.log("Authenticated user data: ", req.payload);
  res.status(200).json(req.payload);
});

router.put("/change-password/:userId", (req, res, next) => {
  const { currentPassword, newPassword } = req.body;
  const { userId } = req.params;
  console.log("ROUTE", currentPassword, newPassword)
  User.findById(userId)
    .then((user) => {
      bcrypt
        .compare(currentPassword, user.password)
        .then((isPasswordCorrect) => {
          if (!isPasswordCorrect) {
            return res
              .status(400)
              .json({ message: "Current password is incorrect." });
          }

          const salt = bcrypt.genSaltSync(saltRounds);
          const hashedPassword = bcrypt.hashSync(newPassword, salt);

          user.password = hashedPassword;
          return user.save();
        })
        .then(() => {
          return res
            .status(200)
            .json({ message: "Password changed successfully." });
        })
        .catch((error) => {
          next(error);
        });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
