import React, { useEffect, useState, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useReducer } from "react";
import { reducer, initState } from "../utils/reducer";

const ChildComponent = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        Add count
      </button>
      <h1>{state.count}</h1>
    </>
  );
};

const test = () => {
  console.log("childState");
};

export default ChildComponent;
