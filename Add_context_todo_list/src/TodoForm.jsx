import { useState } from "react";
import { todoFnc } from "./TodoProvider";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { dispatch } = todoFnc();
  return (
    <div>
      <form
        action=""
        className="todoForm"
        onSubmit={(e) => {
          e.preventDefault();
          if (title.trim().length === 0) {
            return;
          }
          const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
          };
          dispatch({
            type: "ADD_TODO",
            payload: newTodo,
          });
          setTitle("");
        }}
      >
        <input
          type="text"
          placeholder="Todo"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
