import { useState } from "react";

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          id="novaTarefa"
          type="text"
          value={value}
          placeholder="Criar novas tarefas"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default ToDoForm;
