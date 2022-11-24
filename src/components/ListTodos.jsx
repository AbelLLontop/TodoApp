import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./Pagination";
import Todo from "./Todo";

const ListTodo = () => {
  const todos = useSelector(state=>state.todos)
  const [filterTodos, setFilterTodos] = useState([]);
  const [pagination,selectPage] = usePagination(todos);

  useEffect(() => {
    setFilterTodos(todos.slice(pagination.start, pagination.end));
  }, [pagination]);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos]);

  return (
    <div className="col-lg-5 shadow containter-list  d-flex flex-column justify-content-between">
      <div>
      <div className="d-flex justify-content-between pt-4">
        <div></div>
        <Link to={"/todo/create"}>
          <button className="btn btn-primary w-30 d-flex align-items-center gap-2">
            <i className="bi bi-plus-square-fill"></i>Create{" "}
          </button>
        </Link>
      </div>
      <div className="table-container"
        onDrop={(e) => {
          // e.preventDefault();
          console.log("onDrop");
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
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
              <Todo
              key={todo.id}
              {...todo}
             
              />
            ))}
          </tbody>
        </table>
        {filterTodos.length == 0 && (
          <h4 className="text-center w-100 text-muted">Empty todos</h4>
        )}
      </div>
      </div>
      <Pagination pagination={pagination} selectPage={selectPage}/>
    </div>
  );
};

export default ListTodo;
