import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../App";
import Todo from "./Todo";

const ListTodo = () => {
  const todos = useContext(TodoContext);
  return (
      <div className="col-lg-5 shadow">
          <div className="d-flex justify-content-between pt-4">
            <div>

            </div>
          <Link to={'/todo/create'}>
            <button className="btn btn-primary w-30 d-flex align-items-center gap-2"><i className="bi bi-plus-square-fill"></i>Create </button>
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
              {todos?.map((todo,index)=><Todo key={todo.id} {...todo} position={index}/>)}
            </tbody>
          </table>
        </div>

        <nav className="navigation d-flex justify-content-center">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link " href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
  
  );
};

export default ListTodo;
