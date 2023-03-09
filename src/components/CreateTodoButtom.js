import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButtom(props) {
  const onClickButtom = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButtom("Aqui se deberiar abrir el modal")}
    >
      +
    </button>
  );
}

export { CreateTodoButtom };
