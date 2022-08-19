const mongoose = require("mongoose");

const connectDB = (url) => {
  const db = mongoose.connect(url);
  return db;
};

module.exports = connectDB;
