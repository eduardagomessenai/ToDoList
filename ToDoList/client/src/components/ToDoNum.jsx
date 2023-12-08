import React from "react";

const ToDoNum = ({ tarefas, numeros }) => {
  const chk = document.getElementsByName("chk");
  console.log(chk);
  return (
    <div className="tarefas">
      <div className="numeros">
        <h3>Nº DE TAREFAS:</h3>
        <p>{tarefas}</p>
      </div>
      <div className="numeros">
        <h3>TAREFAS PENDENTES:</h3>
        <p>{numeros}</p>
      </div>
    </div>
  );
};

export default ToDoNum;
