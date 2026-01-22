//Компонент ввода нового дела
import React from "react";

export default function ToDoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        placeholder="Enter todo..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo(todoValue);
            setTodoValue("");
          }
        }}
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
