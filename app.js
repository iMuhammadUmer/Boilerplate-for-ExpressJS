const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app)
app.get("*", (request, response) =>
  response.status(200).send({
    message: "* route",
  })
);

module.exports = app;
