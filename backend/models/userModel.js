//Import Mongoose
const mongoose = require("mongoose");

//Init Schema
const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please add a first name"],
    },
    last_name: {
      type: String,
      required: [true, "Please add a last name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
      default: "Michigan",
    },
  },
  {
    timestamps: true,
  }
);

//Export Schema
module.exports = mongoose.model("User", userSchema);
