import React from "react";
import { useDispatch } from "react-redux";
import { toggleEditMode, deleteTask } from "./todoSlice";
import "../styles.css";

const TodoItem = ({ task, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="todo-item">
      <span onClick={() => dispatch(toggleEditMode(index))}>{task.text}</span>
      <div className="buttons-div">
        <button
          className="btn btn-info"
          onClick={() => dispatch(toggleEditMode(index))}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteTask(index))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
