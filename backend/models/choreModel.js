//Import Mongoose
const mongoose = require("mongoose");

//Init Schema
const choreSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

//Export Schema
module.exports = mongoose.model("Chore", choreSchema);
