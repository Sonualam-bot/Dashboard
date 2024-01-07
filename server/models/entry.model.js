const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  Day: {
    type: Date,
    required: true,
  },
  Age: {
    type: String,
    enum: ["15-25", ">25"],
    required: true,
  },
  Gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  A: {
    type: Number,
    required: true,
  },
  B: {
    type: Number,
    required: true,
  },
  C: {
    type: Number,
    required: true,
  },
  D: {
    type: Number,
    required: true,
  },
  E: {
    type: Number,
    required: true,
  },
  F: {
    type: Number,
    required: true,
  },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
