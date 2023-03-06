const express = require("express");
const router = express.Router();
const {
  getChores,
  setChores,
  updateChore,
  deleteChore,
} = require("../controllers/choreController");

router.route("/").get(getChores).post(setChores);
router.route("/:id").put(updateChore).delete(deleteChore);

module.exports = router;
