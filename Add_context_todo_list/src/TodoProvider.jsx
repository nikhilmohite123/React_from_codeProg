import React from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";

function reducer(todolist, action) {
  if (action.type == "ADD_TODO") {
    return [...todolist, action.payload];
  }
  if (action.type == "DEL_TODO") {
    return todolist.filter((todo) => {
      return todo.id !== action.id;
    });
  }

  if (action.type == "TOGGLE") {
    return todolist.map((todo) => {
      if (action.id === todo.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }

  return todolist;
}
const initialState = [
  { id: 1, title: "dance practice", completed: false },
  { id: 2, title: "Read book", completed: true },
  { id: 3, title: "Morning walk", completed: false },
];

export const todoContext = createContext();
function TodoProvider({ children }) {
  const [todolist, dispatch] = useReducer(reducer, initialState);
  return (
    <todoContext.Provider value={{ todolist, dispatch }}>
      {children}
    </todoContext.Provider>
  );
}
export function todoFnc() {
  return useContext(todoContext);
}
export default TodoProvider;
