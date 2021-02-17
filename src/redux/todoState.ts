import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  checked: boolean;
  message: string;
}

const initialState: Array<Todo> = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state: Array<Todo>, action: PayloadAction<Todo>) {
      return [...state, action.payload];
    },
  },
});

const todoActions = todoSlice.actions;

export { todoActions };

export default todoSlice.reducer;
