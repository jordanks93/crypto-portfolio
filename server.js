const express = require("express");
const logger = require("morgan"); 
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3001;

// Setup Express server
const app = express();

app.use([
  express.urlencoded({ extended: true }),
  express.json(),
  // Enable morgan log
  logger("dev")
]);

// Serve static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log("🚀  Server now on port", PORT, "👻 React App on Port 3000");
});