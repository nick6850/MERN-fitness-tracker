import { configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./workoutSlice";
export const store = configureStore({
  reducer: { workouts: workoutsSlice },
});
