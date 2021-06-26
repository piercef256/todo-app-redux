import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleUpdate, toggleEditMode, deleteTask } from "./todoSlice";
import "../styles.css";

const TodoItemEditing = ({ task, index }) => {
  const dispatch = useDispatch();
  const [newValue, setNewValue] = useState(task.text);

  const update = (index) => {
    dispatch(handleUpdate([index, newValue]));
    dispatch(toggleEditMode(index));
  };

  return (
    <div>
      <form className="edit-task-form" onSubmit={() => update(index)}>
        <input
          className="task-input"
          type="text"
          value={newValue}
          placeholder="Enter a title for this task…"
          onChange={(e) => setNewValue(e.target.value)}
        />
        <div className="buttons-div">
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoItemEditing;
