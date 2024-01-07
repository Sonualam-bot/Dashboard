const express = require("express");
const entryRouter = express.Router();
const { fetchAllEntry } = require("../controllers/entry.controller");

entryRouter.get("/allEntries", fetchAllEntry);

module.exports = entryRouter;
