//Import dependencies, middleware, and database connections
const express = require("express");
const connectDB = require("./config/db");
const protect = require("./middleware/authMiddleware");
const errorHandler = require("./middleware/errorMiddleware");
require("colors");
require("dotenv").config();

//DB Connection
connectDB();

//Init App and Port
const app = express();
const port = process.env.PORT || 3000;

//Parsing Middleware
app.use(express.json()); //Parses json data
app.use(express.urlencoded({ extended: false })); //Parses urlencoded data

//App Routes
app.use("/api/chores", require("./routes/choreRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//Error Handler
app.use(errorHandler);

//App Listener
app.listen(port, () => console.log(`App listening on port ${port}`));
