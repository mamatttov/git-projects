import ToDoInput from "./ToDoInput";
import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

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
  return (
    <>
      <ToDoInput handleAddTodo={handleAddTodo} />
      <ToDoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
