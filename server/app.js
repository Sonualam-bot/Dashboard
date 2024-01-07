const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

const userRouter = require("./routes/user.routes");
const entryRouter = require("./routes/entry.routes");

app.use(cookieParser());

app.use(express.json({ limit: "300mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Dashboard Online");
});

app.use("/user", userRouter);
app.use("/entry", entryRouter);

module.exports = app;
