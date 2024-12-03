import React from "react";

const ChildComponent = (props) => {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          props.bindingToWay(3);
        }}
      >Click me</button>
    </div>
  );
};

export default ChildComponent;
