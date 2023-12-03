import React, { useState } from "react";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../Redux/workoutSlice";
import EditWorkout from "./EditWorkout";

function WorkoutItem(props) {
  const { _id, name, duration, date } = props.workout;
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteWorkout(_id));
  }

  if (isEdited) {
    return <EditWorkout workout={props.workout} />;
  }

  return (
    <div className="border max-w-md flex flex-col p-4">
      <div className="flex gap-1 text-2xl cursor-pointer self-end">
        <div onClick={() => setIsEdited(true)}>
          <MdOutlineEdit />
        </div>
        <div onClick={handleDelete}>
          <MdOutlineDeleteOutline />
        </div>
      </div>
      <div className="text-lg m-5">
        <div>
          <span className="font-bold"> Exercise: </span>
          {name}
        </div>
        <div>
          <span className="font-bold">Duration: </span>
          {duration} mins
        </div>
        <div>
          <span className="font-bold">Date: </span>
          {date}
        </div>
      </div>
    </div>
  );
}

export default WorkoutItem;
