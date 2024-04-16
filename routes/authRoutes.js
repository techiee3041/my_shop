const express = require("express");
const {
  createUser,
  loginUser,
  fetchUsers,
  fetchUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
} = require("../controller/userCtr");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", fetchUsers);
router.get("/:id", authMiddleware, isAdmin, fetchUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
