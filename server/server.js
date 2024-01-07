const app = require("./app.js");
const dotenv = require("dotenv");
const connectionDatabase = require("./database/db.js");

//config
dotenv.config({ path: "./config.env" });

connectionDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on https://localhost:${process.env.PORT}`);
});
