const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

const userRouter = require("./routes/user.routes");
const entryRouter = require("./routes/entry.routes");
const { default: mongoose } = require("mongoose");
const Entry = require("./models/entry.model");

app.use(cookieParser());

app.use(express.json({ limit: "300mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// read json file
const filePath = path.join(__dirname, "sampledatabase.json");
const jsonData = fs.readFileSync(filePath, "utf8");
const entriesData = JSON.parse(jsonData);

app.get("/", (req, res) => {
  res.send("Dashboard Online");
});

//seed the json file
async function seedDatabase() {
  try {
    for (const entryData of entriesData) {
      const newEntry = new Entry({
        Day: entryData.Day,
        Age: entryData.Age,
        Gender: entryData.Gender,
        A: entryData.A,
        B: entryData.B,
        C: entryData.C,
        D: entryData.D,
        E: entryData.E,
        F: entryData.F,
      });
      await newEntry.save();
      console.log(`Entry "${newEntry.Gender}" seeded `);
    }
    console.log("Database seeding completed");
  } catch (error) {
    console.log("Error seeding Database: ", error);
  } finally {
    mongoose.disconnect();
  }
}

// seedDatabase();

app.use("/user", userRouter);
app.use("/entry", entryRouter);

module.exports = app;
