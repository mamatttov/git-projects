import ToDoInput from "./ToDoInput";
import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([
    "eat the food",
    "cook the food",
    "take child from the school",
  ]);
  return (
    <>
      <ToDoInput />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
