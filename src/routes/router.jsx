import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateTodoForm, { action as todoCreateAction } from "../components/forms/CreateTodoForm";
import EditTodoForm, { action as todoEditAction, loader as todoEditLoader} from "../components/forms/EditTodoForm";
import ListTodo from "../components/ListTodos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index:true,element: <ListTodo /> },
      { path: "todo/:todoId/edit",loader:todoEditLoader, action:todoEditAction,element: <EditTodoForm /> },
      { path: "todo/:todoId/destroy", action:todoEditAction,element: <EditTodoForm /> },
      { path: "todo/create",action:todoCreateAction, element: <CreateTodoForm /> },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
