import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkouts } from "../Redux/workoutSlice";

function AllWorkouts() {
  const { workouts, isLoading, error } = useSelector((state) => state.workouts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorkouts());
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {workouts.map((workout) => {
        return (
          <div key={workout._id}>
            <div className="bg-green-400">{workout.name}</div>
            <div>{workout.duration}</div>
            <div> {workout.date}</div>
          </div>
        );
      })}
    </div>
  );
}

export default AllWorkouts;
