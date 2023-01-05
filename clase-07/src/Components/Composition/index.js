import React from "react";
import ParentComponent from "../ParentComponent";
import ChildComponent from "../ChildComponent";

const Composition = () => {
  return (
    <div>
      <h1>Composition</h1>
      <p>
        La composición es muy usada en la programación funcional en la cual una
        función utiliza los valores almacenados en la función que la contiene.
      </p>

      <ParentComponent>
        <ChildComponent></ChildComponent>
      </ParentComponent>

      <h2>Higher order component: "HOC'S"</h2>

      <p>
        Una técnica que utiliza la composición para generar componentes con
        acceso a los valores de un componente superior. Una función que envuelve
        a otra.
      </p>
    </div>
  );
};

export default Composition;
