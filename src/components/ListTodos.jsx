import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../store/store";
import Todo from "./Todo";

const ListTodo = () => {
  const todos = useContext(TodoContext);
  const [filterTodos, setFilterTodos] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 5,
    numberPages: Math.ceil(todos.length / 5),
    currentPage: 1,
  });


  useEffect(()=>{
    setPagination({
      ...pagination,
      numberPages: Math.ceil(todos.length / 5),
    })
  },[todos])

  useEffect(() => {
    setFilterTodos(todos.slice(pagination.start, pagination.end));
  }, [pagination]);

  return (
    <div className="col-lg-5 shadow">
      <div className="d-flex justify-content-between pt-4">
        <div></div>
        <Link to={"/todo/create"}>
          <button className="btn btn-primary w-30 d-flex align-items-center gap-2">
            <i className="bi bi-plus-square-fill"></i>Create{" "}
          </button>
        </Link>
      </div>
      <div className="table-container">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterTodos?.map((todo, index) => (
              <Todo  key={todo.id} {...todo} />
            ))}
          </tbody>
        </table>
        {filterTodos.length==0&&(<h4 className="text-center w-100 text-muted">Empty todos</h4>)}

      </div>

      <nav className="navigation d-flex justify-content-center">
        <ul className="pagination">
          {Array(pagination.numberPages)
            .fill(0)
            .map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  pagination.currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setPagination({
                      ...pagination,
                      currentPage: index + 1,
                      start: index * 5,
                      end: (index + 1) * 5,
                    })
                  }
                >
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default ListTodo;
