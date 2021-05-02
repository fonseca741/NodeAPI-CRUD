const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.json());

const routes = require("../routes/api");

app.use("/", routes);
app.use(express.json());

app.use(function (err, req, res, next) {
  res.status(400).send({ error: err.message });
});

module.exports = app;
