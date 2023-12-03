import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkouts } from "../Redux/workoutSlice";
import WorkoutItem from "./WorkoutItem";

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

  if (!workouts.length) {
    return <div className="text-xl">You haven't added any workouts yet</div>;
  }

  return (
    <div className="max-w-2xl">
      <div className=" grid grid-cols-1 p-3 gap-3 lg:grid-cols-2">
        {workouts.map((workout) => {
          return <WorkoutItem key={workout._id} workout={workout} />;
        })}
      </div>
    </div>
  );
}

export default AllWorkouts;
