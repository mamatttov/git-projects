import ToDoInput from "./ToDoInput";
import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  //Функции для добавления, удаления и редактирования дел

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);

    handleDeleteTodo(index);
  }

  return (
    <>
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <ToDoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
