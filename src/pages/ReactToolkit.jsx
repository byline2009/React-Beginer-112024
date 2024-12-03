import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../utils/updateSlice";
const ReactToolkit = () => {
  const count = useSelector((state) => state.updateCounter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <h1>{count}</h1>
      {/* <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button> */}

      <button
        aria-label="increment amount "
        onClick={() => dispatch(incrementByAmount(5))}
      >
        increment amount
      </button>
    </div>
  );
};

export default ReactToolkit;
