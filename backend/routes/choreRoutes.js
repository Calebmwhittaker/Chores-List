//Import express and express.Router dependecies
const express = require("express");
const router = express.Router();

//Import controller functions
const {
  getChores,
  setChores,
  updateChore,
  deleteChore,
} = require("../controllers/choreController");

const protect = require("../middleware/authMiddleware");

//Set routes for CRUD operations
router.route("/").get(protect, getChores).post(protect, setChores);
router.route("/:id").put(protect, updateChore).delete(protect, deleteChore);

//Export router
module.exports = router;
