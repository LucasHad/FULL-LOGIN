const express = require("express");
const { default: helmet } = require("helmet");
const { route } = require("./routes/main.route");
const cors = require("cors");
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(route);

module.exports = app;
