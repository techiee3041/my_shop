const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SCRET_KEY, {expiresIn: "1d"});
}

module.exports = { generateToken };