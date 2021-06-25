import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [
      {
        text: "Feed dog",
        isEditing: true
      },
      {
        text: "Return package",
        isEditing: false
      },
      {
        text: "Study Node.js",
        isEditing: false
      }
    ]
  },
  reducers: {
    addTask: (state, action) => {
      if (action.payload !== "") {
        state.tasks = [
          ...state.tasks,
          { text: action.payload, isEditing: false }
        ];
      } else {
        return;
      }
    },
    deleteTask: (state, action) => {
      const tempTasks = [...state.tasks];
      tempTasks.splice(action.payload, 1);
      state.tasks = tempTasks;
    },
    toggleEditMode: (state, action) => {
      const newTasks = [...state.tasks];
      newTasks[action.payload].isEditing = !newTasks[action.payload].isEditing;
      state.tasks = newTasks;
    },
    handleUpdate: (state, action) => {
      // const [index, newValue] = action.payload;
      const [index, newValue] = [...action.payload];
      const newTasks = [...state.tasks];
      newTasks[index].text = newValue;
      state.tasks = newTasks;
    },
    increment: (state) => {
      state.tasks += 1;
    },
    decrement: (state) => {
      state.tasks -= 1;
    },
    incrementByAmount: (state, action) => {
      state.tasks += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  handleUpdate,
  toggleEditMode,
  deleteTask,
  addTask,
  increment,
  decrement,
  incrementByAmount
} = todoSlice.actions;

export default todoSlice.reducer;
