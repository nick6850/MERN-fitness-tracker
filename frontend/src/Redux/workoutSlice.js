import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  workouts: [],
  isLoading: false,
  error: null,
};

export const fetchWorkouts = createAsyncThunk(
  "workouts/fetchWorkouts",
  async () => {
    const res = await axios("http://localhost:3001/workouts/all");
    const data = await res.data;
    return data;
  }
);

export const postNewWorkout = createAsyncThunk(
  "workouts/postNewWorkout",
  async (newWorkout) => {
    const res = await axios.post("http://localhost:3001/workouts/", newWorkout);
    const data = await res.data;
    return data;
  }
);

export const updateWorkout = createAsyncThunk(
  "workouts/updateWorkout",
  async ({ _id, workoutData }) => {
    const res = await axios.put(
      `http://localhost:3001/workouts/${_id}`,
      workoutData
    );
    const data = await res.data;
    return data;
  }
);

export const deleteWorkout = createAsyncThunk(
  "workouts/deleteWorkout",
  async (id) => {
    const res = await axios.delete(`http://localhost:3001/workouts/${id}`);
    return id;
  }
);

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWorkouts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWorkouts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.workouts = action.payload;
    });
    builder.addCase(fetchWorkouts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(postNewWorkout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postNewWorkout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.workouts.push(action.payload);
    });
    builder.addCase(postNewWorkout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateWorkout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateWorkout.fulfilled, (state, action) => {
      state.isLoading = false;
      const editedWorkout = action.payload;
      state.workouts = state.workouts.filter(
        (workout) => workout._id != editedWorkout._id
      );
      state.workouts.push(editedWorkout);
    });
    builder.addCase(updateWorkout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteWorkout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteWorkout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.workouts = state.workouts.filter(
        (workout) => workout._id != action.payload
      );
    });
    builder.addCase(deleteWorkout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default workoutsSlice.reducer;
