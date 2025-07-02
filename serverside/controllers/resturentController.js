const Resturent = require("../models/resturentSchema");
const bcrypt = require("bcrypt");

const registerResturent = async (req, res) => {
    try {
        const existingResturent = await Resturent.findOne({ email: req.body.email });
        if (existingResturent) {
            return res.json({ success: false, message: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newResturent = new Resturent({
            name: req.body.name,
            type: req.body.type,
            cnumber: req.body.cnumber,
            district: req.body.district,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            email: req.body.email,
            password: hashedPassword,
        });

        const result = await newResturent.save();

        res.status(200).json({
            success: true,
            message: "Registered successfully",
            data: result,
        });
    } catch (error) {
        console.error("❌ Error while registering Resturent:", error);
        res.status(500).json({
            success: false,
            message: "Error registering Resturent",
            error: error.message,
        });
    }
};


// Login User
const loginResturent = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingResturent = await Resturent.findOne({ email });
        if (!existingResturent) {
            return res.json({ success: false, message: "Resturent not found" });
        }

        const isPasswordMatch = await bcrypt.compare(password, existingResturent.password);
        if (!isPasswordMatch) {
            return res.json({ success: false, message: "Invalid password" });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: existingResturent._id,
                name: existingResturent.name,
                email: existingResturent.email,
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
    registerResturent,
    loginResturent,
};
