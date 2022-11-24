import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";
import { iconStatus } from "./utils/iconStatus";

const Todo = ({ id, name, description, active, status }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleUpdate = (active) => {
    dispatch(updateTodo( { id, name, description, active, status }))
  };

  return (
    <tr
      draggable
      onDragStart={(e) => {
        console.log(`${id} onDragStart`);
      }}
      onDragEnd={(e) => {
        console.log(`${id} onDragEnd`);
      }}
      className="active-todo todo-container"
    >
      <th>
        <span>
          <i className="bi bi-grip-vertical"></i>
          {/* {id} */}
        </span>
      </th>
      <td
        className={`${active ? `text-decoration-line-through` : ""} table-name`}
      >
        {name}
      </td>
      <td
        className={`${
          active ? `text-decoration-line-through` : ""
        } table-description`}
      >
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
      <td className="d-flex gap-1 align-items-center">
        <Form action={`todo/${id}/edit`}>
          <button type="submit" className="option-icon border-0">
            <i className=" bi bi-pen-fill"></i>
          </button>
        </Form>

        <button onClick={handleDelete} className="option-icon border-0">
          <i className=" bi bi-trash-fill"></i>
        </button>
          <button className="option-icon border-0">

         
        {!active ? (
          <i
            className=" pointer bi bi-toggle-off"
            onClick={() => handleUpdate(true)}
          ></i>
        ) : (
          <i
            className="pointer bi bi-toggle-on"
            onClick={() => handleUpdate(false)}
          ></i>
        )}
         </button>
      </td>
    </tr>
  );
};

export default Todo;
