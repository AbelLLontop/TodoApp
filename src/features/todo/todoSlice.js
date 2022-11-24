import { createSlice } from "@reduxjs/toolkit";
import { ENUM_STATUS } from "../../store/status";

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
      status: ENUM_STATUS.WARNING,
    },
    {
      id: 6,
      name: "Todo 6",
      description: "Description 6",
      active: true,
      status: ENUM_STATUS.DANGER,
    },
    {
      id: 7,
      name: "Todo 7",
      description: "Description 7",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 8,
      name: "Todo 8",
      description: "Description 8",
      active: true,
      status: ENUM_STATUS.WARNING,
    },
    {
      id: 9,
      name: "Todo 9",
      description: "Description 9",
      active: true,
      status: ENUM_STATUS.DANGER,
    },
    {
      id: 10,
      name: "Todo 10",
      description: "Description 10",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 11,
      name: "Todo 11",
      description: "Description 11",
      active: true,
      status: ENUM_STATUS.WARNING,
    },
    {
      id: 12,
      name: "Todo 12",
      description: "Description 12",
      active: true,
      status: ENUM_STATUS.DANGER,
    },
    {
      id: 13,
      name: "Todo 13",
      description: "Description 13",
      active: true,
      status: ENUM_STATUS.SUCCESS,
    },
    {
      id: 14,
      name: "Todo 14",
      description: "Description 14",
      active: true,
      status: ENUM_STATUS.WARNING,
    }
  ];

const initialTodosLocalStorage = localStorage.getItem('todos')&&JSON.parse(localStorage.getItem('todos'))||initialTodos;

export const todoSlice = createSlice({
    name:'todo',
    initialState:initialTodosLocalStorage,
    reducers:{
        addTodo:(state,action)=>{
            state.unshift(action.payload)
        },
        updateTodo:(state,action)=>{
            const todoFound = state.find(todo=>todo.id==action.payload.id);
            const {name,description,status,active} = action.payload;
            if(todoFound){
                todoFound.name = name;
                todoFound.description = description;
                todoFound.status = status;
                todoFound.active = active;
            }
        
        },
        deleteTodo:(state,action)=>{
            const todoIndex = state.findIndex(todo=>todo.id === action.payload.id);
            if(todoIndex>=0){
                state.splice(todoIndex,1);
            }
        },
        resetTodo:()=>{
            return initialTodos;
        }
    }
})


export const {addTodo,deleteTodo,resetTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;