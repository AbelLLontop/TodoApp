import React, { useContext } from "react";
import { Form } from "react-router-dom";
import { TodoSetContext } from "../App";
import { iconStatus } from "./utils/iconStatus";

const Todo = ({ id, name, description, active, status, position }) => {
  const dispatch = useContext(TodoSetContext);

  const updateTodo = (active) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { id, name, description, active, status },
    });
  };

  return (
    <tr className="active-todo">
      <th>
        <span>
          <i className="bi bi-grip-vertical"></i>
          {position + 1}
        </span>
      </th>
      <td className={`${active ? `text-decoration-line-through` : ""} table-name`}>{name}</td>
      <td className={`${active ? `text-decoration-line-through` : ""} table-description`}>
        {description}
      </td>
      <td>
        <span
          className={`badge bg-${status} ${
            active ? `text-decoration-line-through` : ""
          }`}
        >
          {!active ? status : iconStatus(status)}
        </span>
      </td>
      <td className="d-flex gap-1">
        <Form action={`todo/${id}/edit`}>
          <button type="submit" className="border-0 bg-white">
            <i className="bi bi-pen-fill"></i>
          </button>
        </Form>
        <Form action={`todo/${id}/edit`}>
          <button type="submit" className="border-0 bg-white">
            {" "}
            <i className="bi bi-trash-fill"></i>
          </button>
        </Form>

        {!active ? (
          <i
            className="pointer bi bi-toggle-off"
            onClick={() => updateTodo(true)}
          ></i>
        ) : (
          <i
            className="pointer bi bi-toggle-on"
            onClick={() => updateTodo(false)}
          ></i>
        )}
      </td>
    </tr>
  );
};

export default Todo;
