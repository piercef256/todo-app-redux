import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleUpdate, toggleEditMode } from "./todoSlice";
import "../styles.css";

const TodoItemEditing = ({ task, index }) => {
  const dispatch = useDispatch();
  const [newValue, setNewValue] = useState(task.text);

  const update = (index) => {
    dispatch(handleUpdate([index, newValue]));
    dispatch(toggleEditMode(index));
  };

  return (
    <a href={() => false} className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <div className="d-flex w-100">
          <h5 className="mb-1">{index + 1}</h5>
          <div className="ms-1">
            <input
              className="task-input"
              type="text"
              value={newValue}
              placeholder="Enter a title for this task…"
              onChange={(e) => setNewValue(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            onClick={() => update(index)}
            className="btn btn-primary"
            type="submit"
          >
            Update
          </button>
        </div>
      </div>
    </a>
  );
};

export default TodoItemEditing;
