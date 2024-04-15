const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    // create new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    // user already exists
    throw new Error("User already exists")
  }
});

const loginUser = asyncHandler(async(req, res) => {
  const {email, password} = req.body;
  const findUser = await User.findOne({email});
  if(findUser && findUser.isPasswordMatch(password)) {
    res.json(findUser);
  } else {
    throw new Error("Invalid credentials");
  }
})

module.exports = { createUser, loginUser };
