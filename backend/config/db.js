//Import Mongoose
const mongoose = require("mongoose");

//Init DB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); //Connects with MONGO URI credentials
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline); //Displays connection host in terminal
  } catch (err) {
    console.log(err.message);
    process.exit(1); //Exits the process if an error occurs
  }
};

//Exports DB Connection
module.exports = connectDB;
