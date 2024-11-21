import React from "react";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const { state } = useLocation();
  console.log("state", state);
  return <div>Blog</div>;
};

export default Blog;
