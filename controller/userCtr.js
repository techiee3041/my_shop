const { generateToken } = require("../config/jwtToken");
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
    res.json({
      _id: findUser?._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id)
    });
  } else {
    throw new Error("Invalid credentials");
  }
})

module.exports = { createUser, loginUser };
