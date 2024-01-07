const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.CONNECTION_URL, {
      dbName: "Dashboard",
    })
    .then((data) => {
      console.log(`Connected to MongoDB server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDb: ", error);
    });
};

module.exports = connectDatabase;
