import React from "react";

const LayoutApp = ({ children }) => {
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

      <div className="row mt-4 d-flex justify-content-center">{children}</div>
    </section>
  );
};

export default LayoutApp;
