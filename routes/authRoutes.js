const express = require("express");
const { createUser, loginUser, fetchUsers, fetchUser, deleteUser, updateUser } = require("../controller/userCtr");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", fetchUsers);
router.get("/:id", fetchUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
