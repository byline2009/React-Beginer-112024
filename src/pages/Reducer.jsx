import React, { useEffect } from "react";
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
    </div>
  );
};

export default Reducer;
