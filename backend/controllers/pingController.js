//Import express-async-handler
const asyncHandler = require("express-async-handler");

//Init CRUD Functions

// @desc    Health Check
// @route   GET /api/ping
// @access  Public
const ping = asyncHandler(async (req, res) => {
  res.status(200).send("Pong");
});

//Export CRUD Functions
module.exports = {
  ping,
};
