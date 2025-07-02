const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/PM", {
  serverSelectionTimeoutMS: 5000,
});

const db = mongoose.connection;

console.log("🔁 Trying to connect to MongoDB...");

db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err.message);
});

db.once("open", () => {
  console.log("✅ MongoDB connection successful!");
});

module.exports = db;
