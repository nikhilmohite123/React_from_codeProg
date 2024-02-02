import React from "react";
import { todoFnc } from "./TodoProvider";
function Todo({ completed, title, id }) {
  const { todolist, dispatch } = todoFnc();
  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "grey",
        textAlign: "center",
      }}
    >
      <p
        style={{
          textDecoration: `${completed ? "line-through" : ""}`,
        }}
      >
        title :{title}
      </p>
      <p>completed :{completed ? "True" : "false"}</p>
      <p>id :{id}</p>
      <button
        onClick={() => {
          dispatch({
            type: "DEL_TODO",
            id: id,
          });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "TOGGLE",
            id: id,
          });
        }}
      >
        toggle
      </button>
    </div>
  );
}

export default Todo;
