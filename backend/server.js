//Import dependencies, middleware, and database connections
const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
const protect = require("./middleware/authMiddleware");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");
require("colors");
require("dotenv").config();

//DB Connection
connectDB();

//Init App and Port
const app = express();
const port = process.env.PORT || 3000;

//Parsing Middleware
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json()); //Parses json data
app.use(express.urlencoded({ extended: false })); //Parses urlencoded data

//App Routes
app.use("/api/chores", require("./routes/choreRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/ping", require("./routes/pingRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

//Error Handler
app.use(errorHandler);

//App Listener
app.listen(port, () => console.log(`App listening on port ${port}`));
