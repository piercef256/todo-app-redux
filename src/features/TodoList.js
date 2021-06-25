import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./todoSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import TodoItem from "./TodoItem";
import TodoItemEditing from "./TodoItemEditing";

const TodoList = () => {
  const { tasks } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(value));
    setValue("");
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="todo-list">
        <ul class="list-group list-group-flush">
          <li className="list-group-item">
            {tasks.map((task, index) =>
              task.isEditing ? (
                <TodoItemEditing task={task} index={index} />
              ) : (
                <TodoItem task={task} index={index} />
              )
            )}
          </li>
        </ul>
      </div>
      <div className="add-task-form-div">
        <form className="add-task-form" onSubmit={handleSubmit}>
          <input
            className="task-input"
            type="text"
            value={value}
            placeholder="Enter task here…"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Submit New Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
