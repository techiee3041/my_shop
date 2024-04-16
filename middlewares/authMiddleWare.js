const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer ")) {
    token = req?.headers?.authorization.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SCRET_KEY);
      const user = await User.findById(decoded?.id);
      req.user = user;
      next();
    }
  } else {
    throw new Error("There is no token attached to header");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const findUser = await User.findOne({ email });
  if (findUser?.role !== "admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});
module.exports = { authMiddleware, isAdmin };
