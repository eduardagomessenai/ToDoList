import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import ToDoNum from "./components/ToDoNum";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Aprender HTML",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Aprender CSS",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Aprender React",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Aprender JavaScript",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const novoTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
      },
    ];
    setTodos(novoTodo);
  };

  const deleteTodo = (id) => {
    const novoTodos = [...todos];
    const filtroTodos = novoTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filtroTodos);
  };
  
  return (
    <div className="fundoBranco">
      <div className="barra"></div>
      <div className="app">
        <h1>ToDo List</h1>
        <ToDoNum tarefas={todos.length} numeros={todos.length} />
        <ToDoForm addTodo={addTodo} />
        <div className="todo-list">
          {todos.map((todo) => (
            <ToDo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
