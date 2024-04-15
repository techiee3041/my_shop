const express = require("express");
const { createUser, loginUser, fetchUsers, fetchUser } = require("../controller/userCtr");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", fetchUsers);
router.get("/:id", fetchUser);

module.exports = router;
