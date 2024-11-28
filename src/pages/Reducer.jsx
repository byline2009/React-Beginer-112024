import React, { useEffect } from "react";
import ChildComponent from "../components/ChildComponent";
import { useReducer } from "react";
import { reducer, initState } from "../utils/reducer";
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    console.log("check", state);
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <ChildComponent />
    </div>
  );
};

export default Reducer;
