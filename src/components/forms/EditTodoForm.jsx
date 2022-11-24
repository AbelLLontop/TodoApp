import React, {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Link, redirect, useActionData, useLoaderData, useNavigate } from "react-router-dom";
import { updateTodo } from "../../features/todo/todoSlice";
import { ENUM_STATUS } from "../../store/status";
import { iconStatus } from "../utils/iconStatus";

export const loader = async ({ request, params }) => {
  const { todoId } = params;
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  
  if (todoId && todos.length > 0) {
    const todo = todos.find((currentTodo) => currentTodo.id == todoId);
    if (todo) {
      return { todo };
    }
    return {};
  } else {
    return redirect("/");
  }
};
 

export const action = async({request,params})=>{
  const { todoId } = params;
  const formData = await request.formData();
  const active = formData.get('active')==='on'?true:false;
  const todoUpdate = {...Object.fromEntries(formData),active,id:todoId};
  return todoUpdate;
}

const EditTodoForm = () => {
  const [stateActive, setStateActive] = useState(false);
  const [stateStatus, setStateStatus] = useState(ENUM_STATUS.SUCCESS);
  const { todo } = useLoaderData();
  const { name, description, active, status } = todo||{};
  const todoUpdate = useActionData();
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  useEffect(()=>{
    if(todoUpdate){
      dispatch(updateTodo(todoUpdate));
      navigate('/',{replace:true});
    }
  },[todoUpdate])

 
  useEffect(() => {
    setStateActive(active);
    setStateStatus(status);
  }, []);

  if (!todo) {
    return (
      <div className="col-lg-5 d-flex flex-column align-items-center">
        <h2 className="text-center">Not Exist Todo</h2>
        <Link to="/">
          <button className="btn btn-primary">Volver a la Lista</button>
        </Link>
      </div>
    );
  }

  return (
    <Form method="post" className="col-lg-5">   
      <h2
        className={`text-${stateStatus} text-center mb-4 ${
          stateActive ? `text-decoration-line-through` : ""
        }`}
      >
       Edit Todo {iconStatus(stateStatus)}
      </h2>
      <div className="mb-3">
        <input
        autoFocus
        required
          placeholder="Add new Item"
          type="text"
          id="search"
          defaultValue={name}
          className={`form-control shadow `}
          name="name"
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <input
        required
          placeholder="A Description"
          type="text"
          defaultValue={description}
          id="description"
          className=" form-control shadow"
          name="description"
          autoComplete="off"
        />
      </div>
      <div className="mb-3 d-flex justify-content-between">
        <div className="form-check form-switch ">
          <input
          
            onChange={(e) => setStateActive(e.target.checked)}
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            defaultChecked={active}
            name="active"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default switch checkbox input
          </label>
        </div>
        <select
        required
          defaultValue={status}
          name="status"
          className=" col-8 form-select shadow w-50"
          onChange={(e) => setStateStatus(e.target.value)}
        >
          {Object.entries(ENUM_STATUS).map(([key, value]) => (
            <option key={value} value={value}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex justify-content-between row gap-4">
      <button type="button" onClick={()=>navigate('/',{replace:true})} className="btn btn-danger col">Cancel</button>
      <button className="btn btn-primary col">Update</button>

      </div>
    </Form>
  )
}

export default EditTodoForm