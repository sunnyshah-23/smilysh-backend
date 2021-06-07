var express = require("express");
var app = express();
const {
  bookconsultation,
  getOrthodontist,
} = require("../Controllers/bookings");

app.post("/booknow", bookconsultation);
app.get("/orthodontist", getOrthodontist);
module.exports = app;
