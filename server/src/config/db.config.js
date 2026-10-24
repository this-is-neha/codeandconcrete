require("dotenv").config();
const mongoose = require("mongoose");

// Some ISP DNS servers refuse the SRV lookup that mongodb+srv:// needs from Node
// ("querySrv ECONNREFUSED"). Use public DNS for Node's lookups instead.
require("dns").setServers(["8.8.8.8", "1.1.1.1"]);

const { MONGO_DB_URL, MONGO_DB_NAME } = process.env;

mongoose.connect(MONGO_DB_URL, {
  dbName: MONGO_DB_NAME,
})
  .then(() => {
    console.log("Mongo db connected successfully...");
  })
  .catch((err) => {
    console.log("Error while connecting MongoDB:", err);
    process.exit(1);
  });

