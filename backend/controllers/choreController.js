const asyncHandler = require("express-async-handler");

const Chore = require("../models/choreModel");

// @desc    Get chores
// @route   GET /api/chores
// @access  Private
const getChores = asyncHandler(async (req, res) => {
  const chores = await Chore.find();
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
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
  });

  res.status(200).json(chores);
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

  const updatedChore = await Chore.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
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

  await Chore.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getChores,
  setChores,
  updateChore,
  deleteChore,
};
