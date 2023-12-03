const { configDotenv } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./router/workoutRoutes");

const app = express();
app.use(express.json());
app.use("/workouts", router);
app.use(cors());

mongoose
  .connect(process.env.API_KEY)
  .then(() => {
    console.log("Connected to the database");
    app.listen(3001, () => console.log("Listening on porn 3001"));
  })
  .catch((err) => console.log("Cannot connect to the database"));
