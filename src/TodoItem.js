import React from "react";
import { useDispatch } from "react-redux";
import { toggleEditMode, deleteTask } from "./redux/todo";
import "./styles.css";

const TodoItem = ({ task, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="todo-item">
      <span onClick={() => dispatch(toggleEditMode(index))}>{task.text}</span>
      <div className="buttons-div">
        <button onClick={() => dispatch(toggleEditMode(index))}>Edit</button>
        <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
