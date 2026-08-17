const express = require("express");
const { signup, login, protect } = require("../controllers/auth-controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/protected-test", protect, (req, res) => {
  res.status(200).json({ message: "You accessed a protected route!", user: req.user });
});

module.exports = router;
