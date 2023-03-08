import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const onSearhValueChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearhValueChange}
    />
  );
}

export { TodoSearch };
