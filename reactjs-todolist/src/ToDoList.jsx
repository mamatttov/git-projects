import React from "react";
import ToDoCard from "./ToDoCard";

export default function ToDoList() {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <ToDoCard key={todoIndex}>
          <p>{todo}</p>
        </ToDoCard>
      ))}
    </ul>
  );
}
