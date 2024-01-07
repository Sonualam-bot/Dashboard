const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json({ limit: "300mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Dashboard Online");
});

app.use("/user", userRouter);

module.exports = app;
