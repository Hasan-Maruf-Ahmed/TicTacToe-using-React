import { useState } from "react";
import "./App.css";

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
      <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
      <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [value, setvalue] = useState(null);

  function handleClick(){
    setvalue('X');
  }
  return (
    <>
      <button className="square" onClick={handleClick}>{value}</button>
    </>
  );
}

export default Board;
