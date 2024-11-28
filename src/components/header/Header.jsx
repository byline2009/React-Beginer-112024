import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div className="header">
      <div className="header-bottom">
        <Nav>
          <Nav.Item>
            <Link to="home" className="nav-link">
              <span>Home</span>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="todo" className="nav-link">
              <span>Todo</span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="useReducer" className="nav-link">
              <span>useReducer</span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="formik" className="nav-link">
              <span>UseFormik</span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="typescript" className="nav-link">
              <span>TypeScript</span>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Header;
