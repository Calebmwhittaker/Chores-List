//Import express-async-handler
const asyncHandler = require("express-async-handler");

//Import Model
const Chore = require("../models/choreModel");
const User = require("../models/userModel");

//Init CRUD Functions

// @desc    Get chores
// @route   GET /api/chores
// @access  Private
const getChores = asyncHandler(async (req, res) => {
  const chores = await Chore.find({ user: req.user.id });
  res.status(200).json(chores);
});

// @desc    set chores
// @route   POST /api/chores
// @access  Private
const setChores = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const chores = await Chore.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(201).json(chores);
});

// @desc    update chores
// @route   PUT /api/chores/:id
// @access  Private
const updateChore = asyncHandler(async (req, res) => {
  const chores = await Chore.findById(req.params.id);

  if (!chores) {
    res.status(400);
    throw new Error("Chore not found");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure logged in user matches goal user
  if (chores.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedChore = await Chore.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //Returns the updated value in json
  });

  res.status(200).json(updatedChore);
});

// @desc    delete chores
// @route   DELETE /api/chores
// @access  Private
const deleteChore = asyncHandler(async (req, res) => {
  const chores = await Chore.findById(req.params.id);

  if (!chores) {
    res.status(400);
    throw new Error("No user with that id");
  }

  const user = await User.findById(req.user.id);

  //Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure logged in user matches goal user
  if (chores.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Chore.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

//Export CRUD Functions
module.exports = {
  getChores,
  setChores,
  updateChore,
  deleteChore,
};
