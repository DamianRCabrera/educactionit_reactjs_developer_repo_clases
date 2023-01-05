import React from "react";

const ParentComponent = (props) => {
  const style = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div style={style}>
      <h3>{props.children}</h3>
    </div>
  );
};

export default ParentComponent;
