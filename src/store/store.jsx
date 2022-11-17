import { createContext } from "react";

export const ENUM_STATUS = {
    SUCCESS: "primary",
    WARNING: "warning",
    DANGER: "danger",
  };
  
  export const initialTodos = [
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
    {
      id: 5,
      name: "Todo 5",
      description: "Description 5",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 6,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 7,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 8,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 9,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 10,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 11,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 12,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 13,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 14,
      name: "Todo 4",
      description: "Description 4",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
  ];
  
  export const TodoContext = createContext();
  export const TodoSetContext = createContext();
  
  export const reducer = (state,action)=>{
    switch(action.type){
      case 'ADD_TODO':
        return [action.payload,...state];
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
  
  export const initializer = (initialTodos)=>{
    const todosStorage = JSON.parse(localStorage.getItem('todos'));
    return todosStorage ? todosStorage : initialTodos;
  }