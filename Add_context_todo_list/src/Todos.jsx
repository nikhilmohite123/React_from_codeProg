import React from "react";
import Todo from "./Todo";
import { todoFnc } from "./TodoProvider";
function Todos() {
  const { todolist, dispatch } = todoFnc();
  return (
    <>
      {todolist.map((todo) => {
        return <Todo {...todo} key={todo.id} />;
      })}
    </>
  );
}

export default Todos;
