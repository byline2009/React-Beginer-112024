import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import ParentComponent from "../components/ParentComponent";
import { useRef, useEffect } from "react";

const Home = () => {
  let navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
};

export default Home;
