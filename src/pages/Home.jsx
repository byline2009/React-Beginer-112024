import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import ParentComponent from "../components/ParentComponent";

const Home = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  );
};

export default Home;
