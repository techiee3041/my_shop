const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async(req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer ")) {
        token = req?.headers?.authorization.split(" ")[1];
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
        }
    } else {
        throw new Error("There is no token attached to header")
    }
});

module.exports = authMiddleware;