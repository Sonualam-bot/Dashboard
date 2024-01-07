const Entry = require("../models/entry.model");

const fetchAllEntry = async (req, res) => {
  try {
    const entries = await Entry.find({});
    if (entries.length === 0) {
      res.status(404).json({
        success: false,
        message: "Emty Db",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully fetched entries...",
      data: entries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Failed to fetch entries ${error.message} `,
    });
  }
};

module.exports = {
  fetchAllEntry,
};
