import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";
import { Button } from "react-bootstrap";

const ParentComponent = () => {
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    console.log("check add to do");
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <ChildComponent onClick={addTodo} />
    </div>
  );
};

export default ParentComponent;
