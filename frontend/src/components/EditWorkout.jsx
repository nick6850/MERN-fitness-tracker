import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateWorkout } from "../Redux/workoutSlice";

function EditWorkout(props) {
  const { _id, name, duration, date } = props.workout;
  const [workoutData, setWorkoutData] = useState({
    name,
    duration,
    date,
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setWorkoutData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateWorkout({ _id, workoutData }));
  }

  return (
    <form className="flex flex-col border p-4" onSubmit={handleSubmit}>
      <label htmlFor="name">Exercise type</label>
      <input
        id="name"
        className="border"
        type="text"
        placeholder="Basketball..."
        value={workoutData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="duration" className="mt-3">
        Duration (mins)
      </label>
      <input
        id="duration"
        className="border"
        type="text"
        placeholder="90"
        value={workoutData.duration}
        onChange={handleChange}
        required
      />
      <label htmlFor="date" className="mt-3">
        Date
      </label>
      <input
        id="date"
        className="border"
        type="date"
        value={workoutData.date}
        onChange={handleChange}
        required
      />
      <button className="self-end bg-green-600 rounded-md px-2 mt-3 text-gray-100 ">
        Edit
      </button>
    </form>
  );
}

export default EditWorkout;
