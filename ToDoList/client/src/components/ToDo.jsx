import { useState } from "react";
import edit from "../img/bxs_edit.svg";
import del from "../img/Vector.svg";

const ToDo = ({ todo, deleteTodo }) => {
  const [chk, setChk] = useState(false);

  const handleClick = () => {
    setChk(!chk);
  };
  return (
    <div className="todo">
      <div className="content">
        <div
          className={`bolinha ${chk && "corBol"}`}
          onClick={handleClick}
        ></div>
        <p>{todo.text}</p>
      </div>
      <div className="icon">
        <div>
          <img src={edit} alt="" />
        </div>
        <div>
          <img onClick={()=>deleteTodo(todo.id)} src={del} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
