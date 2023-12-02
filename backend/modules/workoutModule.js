const { Schema, default: mongoose } = require("mongoose");

const workoutSchema = new Schema(
  {
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("workout", workoutSchema);
