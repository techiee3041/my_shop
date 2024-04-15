const express = require("express");
const { createUser, loginUser, fetchUsers } = require("../controller/userCtr");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", fetchUsers);

module.exports = router;
