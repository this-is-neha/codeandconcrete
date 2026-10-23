require("dotenv").config();
const mongoose = require("mongoose");

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

