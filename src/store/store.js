import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import todoReducer from "../features/todo/todoSlice";



export const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
});

setupListeners(store.dispatch);
 