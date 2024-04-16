const express = require("express");
const { createUser, loginUser, fetchUsers, fetchUser, deleteUser, updateUser } = require("../controller/userCtr");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", fetchUsers);
router.get("/:id", authMiddleware, isAdmin, fetchUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);

module.exports = router;
