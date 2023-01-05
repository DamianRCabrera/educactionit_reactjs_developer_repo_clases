import React from "react";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  const handleClick = (ruta) => navigate(ruta);

  return (
    <>
      <h2>Inicio</h2>
      <button onClick={()=>handleClick("/admin")}>Admin</button>
      <br />
      <br />
      <button onClick={()=>handleClick("/admin/pepe")}>Admin Pepe</button>

    </>
  );
};

export default Inicio;
