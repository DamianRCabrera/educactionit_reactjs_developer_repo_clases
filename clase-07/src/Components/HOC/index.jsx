import React from "react";

const HOC = (Component, text) => {
  return ({ ...props }) => {
    const transformText = () => {
      return `Texto en props: ${text}`;
    };
    return (
      <div style={{height: "15vh"}} className="me-auto ms-auto w-50 bg-info d-flex justify-content-center align-items-center fs-3 fw-bold">
        <Component text={transformText()} {...props} />
      </div>
    );
  };
};

export default HOC;
