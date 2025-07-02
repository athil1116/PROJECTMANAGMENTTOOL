const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },      // ✅ FIXED
  district: { type: String, required: true },
  city: { type: String, required: true },
gender: {
  type: String,
  enum: ["male", "female", "other"], // ✅ match frontend
  required: true,
},
  cnumber: { type: String, required: true },       // ✅ Phone number better as String
  dob: { type: Date, required: true },             // ✅ FIXED
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema); // Use model name "User"
module.exports = User;
