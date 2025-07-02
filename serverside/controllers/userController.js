const User = require("../models/userSchema"); // use the correct variable name
const bcrypt = require("bcrypt");

// Register User
const registerUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      name: req.body.name,
      address: req.body.address,
      cnumber: req.body.cnumber,
      district: req.body.district,
      city: req.body.city,
      gender: req.body.gender,
      dob: req.body.dob,
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Registered successfully",
      data: result,
    });
  } catch (error) {
    console.error("❌ Error while registering User:", error);
    res.status(500).json({
      success: false,
      message: "Error registering User",
      error: error.message,
    });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.json({ success: false, message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: existingUser._id,
        fullName: existingUser.name,
        emailId: existingUser.email,
      },
    });

  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong during login",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
