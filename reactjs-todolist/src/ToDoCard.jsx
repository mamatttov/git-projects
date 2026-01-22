import React from "react";
//Компонент карточки дела
export default function ToDoCard(props) {
  const { children, handleDeleteTodo, todoIndex, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(todoIndex)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
