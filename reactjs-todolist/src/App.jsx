import ToDoInput from "./ToDoInput";
import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([
    "eat the food",
    "cook the food",
    "take child from the school",
  ]);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  return (
    <>
      <ToDoInput handleAddTodo={handleAddTodo} />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
