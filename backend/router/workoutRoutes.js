const router = require("express").Router();
const workout = require("../modules/workoutModule");
// get all workouts
router.get("/all", (req, res) => res.json({ message: "success" }));

// post a new workout
router.post("/", async (req, res) => {
  const { name, duration, date } = req.body;
  if (!name || !duration || !date) {
    res.status(400).json({ error: "One of the fields is not filled" });
    return;
  }

  try {
    const newWorkout = await workout.create({ name, duration, date });
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
