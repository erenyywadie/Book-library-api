const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "my-ultra-secret-key-is-here-12345", {
    expiresIn: process.env.JWT_EXPIRES_IN || "90d"
  });
};

// Signup Controller
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message
    });
  }
};

// Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ status: "fail", message: "Please provide email and password!" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({ status: "fail", message: "Incorrect email or password" });
    }

    const token = signToken(user._id);

    res.status(200).json({
      status: "success",
      token
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message
    });
  }
};

// Protect Middleware (حماية المسارات)
exports.protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ status: "fail", message: "You are not logged in! Please log in to get access." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "my-ultra-secret-key-is-here-12345");

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({ status: "fail", message: "The user belonging to this token no longer does exist." });
    }

    req.user = currentUser;
    next();
  } catch (err) {
    return res.status(401).json({ status: "fail", message: "Invalid token or expired!" });
  }
};