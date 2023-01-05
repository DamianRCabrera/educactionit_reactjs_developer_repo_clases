import React from "react";
import Navbar from "./index.jsx";

const Wrapper = (Component) => {
  return ({ ...props }) => {
    return (
      <>
        <Navbar></Navbar>
        <h1>React Router</h1>
        <div className="p-2 bg-secondary text-primary">
          <Component></Component>
        </div>
      </>
    );
  };
};

export default Wrapper;
