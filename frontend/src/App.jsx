import React from "react";
import AllWorkouts from "./components/AllWorkouts";
import AddWorkout from "./components/AddWorkout";
import wizard from "./assets/main.jpg";
import { useState } from "react";

function App() {
  const [addWorkout, setAddWorkout] = useState(false);
  return (
    <div className="flex flex-col items-center h-screen w-max p-2 md:m-auto">
      <div className="flex m-auto items-center w-fit">
        <h1 className="text-4xl text-red-800 underline">Workout Wizard</h1>
        <img className="w-64 " src={wizard} alt="main image" />
      </div>
      <AllWorkouts />
      {addWorkout ? (
        <AddWorkout setAddWorkout={setAddWorkout} />
      ) : (
        <button
          className="bg-green-600 text-white m-auto block rounded-md py-3 px-5 font-bold hover:bg-green-500"
          onClick={() => setAddWorkout(true)}
        >
          Add new workout
        </button>
      )}
    </div>
  );
}
export default App;
