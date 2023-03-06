const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/chores", require("./routes/choreRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`App listening on port ${port}`));
