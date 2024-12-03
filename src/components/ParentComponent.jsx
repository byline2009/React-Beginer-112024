import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const data = { name: "Phong" };
  const [count, setCount] = useState(1);
  const binding = (number) => {
    setCount(number);
  };
  return (
    <div>
      <ChildComponent props={data} bindingToWay={binding} />
      <h1>{count}</h1>
    </div>
  );
};

export default ParentComponent;
