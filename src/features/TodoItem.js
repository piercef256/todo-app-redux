import React from "react";
import { useDispatch } from "react-redux";
import { toggleEditMode, deleteTask } from "./todoSlice";
import "../styles.css";

const TodoItem = ({ task, index }) => {
  const dispatch = useDispatch();
  return (
    <a href={() => false} className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <div
          className="d-flex w-100"
          onClick={() => dispatch(toggleEditMode(index))}
        >
          <h5 className="mb-1">{index + 1}</h5>
          <div className="ms-1">{task.text}</div>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-danger ms-1"
            onClick={() => dispatch(deleteTask(index))}
          >
            X
          </button>
        </div>
      </div>
    </a>
  );
};

export default TodoItem;
