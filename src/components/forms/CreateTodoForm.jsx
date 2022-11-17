import React, {useContext, useEffect, useState } from "react";
import { Form, redirect, useActionData, useNavigate} from "react-router-dom";
import { ENUM_STATUS, TodoSetContext } from "../../App";
import { iconStatus } from "../utils/iconStatus";

const initialTodo =  {
    id: Date.now(),
    name: "",
    description: "",
    active: false,
    status: ENUM_STATUS.SUCCESS,
}

export const action = async({request})=>{
  const formData = await request.formData();
  const active = formData.get('active')==='on'?true:false;
  const newTodo = {...Object.fromEntries(formData),active,id:Date.now()};
  return newTodo;
}

const CreateTodoForm = () => {
    const [todo,setTodo] = useState(initialTodo)
    const {name,description,active,status} = todo;
    const newTodo = useActionData();
    const dispatch = useContext(TodoSetContext);
    const navigate = useNavigate()
    useEffect(()=>{
      if(newTodo){
        dispatch({type:'ADD_TODO',payload:newTodo});
        navigate('/',{replace:true});
      }
    },[newTodo])


    const handleChecket = (e)=>{
        setTodo({
            ...todo,
            active:e.target.checked
        })
    }
    const handleSelect = (e)=>{
        setTodo({
            ...todo,
            status:e.target.value
        })
    }

  return (
    <Form method="post" className="col-lg-5" >   
      <h2
        className={`text-${status} text-center mb-4 ${
            active ? `text-decoration-line-through` : ""
        }`}
      >
       Create Todo {iconStatus(status)}
      </h2>
      <div className="mb-3">
        <input
        required
        autoFocus
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
            onChange={handleChecket}
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
          className=" col-8 form-select shadow w-50"
          onChange={handleSelect}
          name="status"
        >
          {Object.entries(ENUM_STATUS).map(([key, value]) => (
            <option key={value} value={value}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary w-100">Create</button>
    </Form>
  )
}

export default CreateTodoForm