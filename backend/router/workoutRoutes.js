const router = require("express").Router();
const {
  getAllWorkouts,
  postNewWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutsController");

// get all workouts
router.get("/all", getAllWorkouts);

// post a new workout
router.post("/", postNewWorkout);

// edit a workout
router.put("/:id", updateWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

module.exports = router;
