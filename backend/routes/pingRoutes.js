//Import express and express.Router() dependencies
const express = require("express");
const router = express.Router();

//Import controller functions
const { ping } = require("../controllers/pingController");

//Set routes for CRUD operations
router.get("/", ping);

//Export router
module.exports = router;
