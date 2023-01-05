import React from "react";
import { useParams } from "react-router-dom";

const Admin = () => {
  const {name} = useParams();

  return (
    <div>
      <h2>Admin {name}</h2>
    </div>
  );
};

export default Admin;
