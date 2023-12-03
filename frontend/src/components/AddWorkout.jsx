import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewWorkout } from "../Redux/workoutSlice";

function AddWorkout({ setAddWorkout }) {
  const [workoutData, setWorkoutData] = useState({
    name: "",
    duration: "",
    date: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setWorkoutData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let { name, duration, date } = workoutData;
    duration = parseInt(duration);
    dispatch(postNewWorkout(workoutData));
    setAddWorkout(false);
  }

  return (
    <form
      className="flex flex-col m-auto max-w-md border p-4"
      onSubmit={handleSubmit}
    >
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
      <button className="self-end bg-green-600 rounded-md px-2 mt-3 text-gray-100">
        Add
      </button>
    </form>
  );
}

export default AddWorkout;
