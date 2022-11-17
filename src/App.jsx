import { createContext, useEffect, useReducer, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

export const ENUM_STATUS = {
  SUCCESS: "primary",
  WARNING: "warning",
  DANGER: "danger",
};

const initialTodos = [
  {
    id: 1,
    name: "Todo 1",
    description: "Description 1",
    active: true,
    status: ENUM_STATUS.SUCCESS,
  },
  {
    id: 2,
    name: "Todo 2",
    description: "Description 2",
    active: true,
    status: ENUM_STATUS.WARNING,
  },
  {
    id: 3,
    name: "Todo 3",
    description: "Description 3",
    active: true,
    status: ENUM_STATUS.DANGER,
  },
  {
    id: 4,
    name: "Todo 4",
    description: "Description 4",
    active: true,
    status: ENUM_STATUS.SUCCESS,
  },
];

export const TodoContext = createContext();
export const TodoSetContext = createContext();

const reducer = (state,action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return [...state,action.payload];
    case 'DELETE_TODO':
      return state.filter(todo=>todo.id!==action.payload);
    case 'UPDATE_TODO':
      return state.map(todo=>todo.id==action.payload.id?action.payload:todo);
    case 'RESET_TODOS':
      return initialTodos;
    default:
      return state;
  }
}

const initializer = (initialTodos)=>{
  const todosStorage = JSON.parse(localStorage.getItem('todos'));
  return todosStorage ? todosStorage : initialTodos;
}


function App() {

  const [todos, dispatch] = useReducer(reducer,initialTodos,initializer);


  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
 
  return (
    <section className="container mt-5">
   
      <div className="row d-flex justify-content-center">
        <div className=" col-lg-5 ">
          <header>
            <h1 className="mb-1 h4 text-center">Todo List</h1>
            <p className="text-center">Lista de Tareas</p>
          </header>
        </div>
      </div>

      <div className="row mt-4 d-flex justify-content-center">
        
        <TodoContext.Provider value={todos}>
          
          <TodoSetContext.Provider value={dispatch}>
              <Outlet/>
          </TodoSetContext.Provider>
        </TodoContext.Provider>
      </div>
    </section>
  );
}

export default App;
