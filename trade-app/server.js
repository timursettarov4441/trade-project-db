const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();  // ← Эта строка должна быть!

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to trade-app application." });
});

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;  // ← Используем process.env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});