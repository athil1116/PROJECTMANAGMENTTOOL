const express = require("express");
const route = express.Router();
const usercontroller = require("./controllers/userController");
const resturentcontroller = require("./controllers/resturentController");

// Registration and Login routes
route.post("/api/users/register", usercontroller.registerUser);
route.post("/api/users/login", usercontroller.loginUser);



route.post("/api/resturents/login", resturentcontroller.loginResturent);

// Export the router correctly
module.exports = route;
