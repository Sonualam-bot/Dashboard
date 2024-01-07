const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json({ limit: "300mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Dashboard Online");
});

module.exports = app;
