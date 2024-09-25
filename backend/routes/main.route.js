const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("main page");
});

route.get("/login", (req, res) => {});

module.exports = { route };
