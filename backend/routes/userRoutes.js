//Import express and express.Router() dependencies
const express = require("express");
const router = express.Router();

//Import controller functions
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

//Set routes for CRUD operations
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

//Export router
module.exports = router;
