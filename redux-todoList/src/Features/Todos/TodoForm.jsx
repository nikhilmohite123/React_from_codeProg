import React from "react";
import { useState } from "react";
import { addTodo } from "./todosSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function addtodo(e) {
    e.preventDefault();
    // const newTodo = 
    // { id: crypto.randomUUID(),
    //      title: title, 
    //      completed: false };

         dispatch(addTodo(title));
  }
  return (
    <form onSubmit={addtodo}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default TodoForm;
