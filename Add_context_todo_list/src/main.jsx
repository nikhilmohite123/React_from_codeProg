import React from "react";
import ReactDOM from "react-dom/client";
import TodoProvider from "./TodoProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
