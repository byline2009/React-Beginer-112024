import React, { useEffect, useState, useMemo } from "react";
import { Button } from "react-bootstrap";

const ChildComponent = (props) => {
  console.log("re-render");
  return (
    <>
      <div>Hello toi la Content</div>
      <button onClick={() => props.onClick()}>Add to do</button>
    </>
  );
};

const test = () => {
  console.log("childState");
};

export default ChildComponent;
