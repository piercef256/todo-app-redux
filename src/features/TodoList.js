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
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3">To Do App</h4>
                  <p className="text-center">Click on task to edit</p>
                  <div className="list-group">
                    {tasks.map((task, index) => (
                      <React.Fragment key={index}>
                        {task.isEditing ? (
                          <TodoItemEditing task={task} index={index} />
                        ) : (
                          <TodoItem task={task} index={index} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <hr />
                  <div className="form-div">
                    <div>
                      <input
                        className="input new-task form-control"
                        type="text"
                        value={value}
                        placeholder="Enter new task..."
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>

                    <div>
                      <button
                        className="btn btn-success"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
