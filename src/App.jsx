import { createContext, useEffect, useReducer, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { initializer, initialTodos, reducer ,TodoContext,TodoSetContext} from "./store/store";


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
