import React from "react";

export default function ToDoCard(props) {
  const { children, handleDeleteTodo, todoIndex } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>

        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
