const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, console.log(`App listening on port ${port}`));
