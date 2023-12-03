const workout = require("../modules/workoutModule");

const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await workout.find({});
    res.status(200).json(allWorkouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postNewWorkout = async (req, res) => {
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
};

const updateWorkout = async (req, res) => {
  const id = req.params.id;
  try {
    const editedWorkout = await workout.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json(editedWorkout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedWorkout = await workout.findByIdAndDelete({ _id: id });
    res.status(200).json({
      message: `The workout with id ${id} has been succesfully deleted`,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllWorkouts,
  postNewWorkout,
  updateWorkout,
  deleteWorkout,
};
