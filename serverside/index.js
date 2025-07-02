const express = require("express");
const app = express();
require("./dbconnection"); // MongoDB connection

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const route = require("./routes");
app.use("/", route);

// To handle static uploads if needed
app.use("/upload", express.static("upload"));

// 404 handler to prevent HTML response on wrong API path
app.use((req, res) => {
  res.status(404).json({ error: "API route not found" });
});

app.listen(8080, () => {
  console.log("🚀 Server is running on http://localhost:8080");
});
