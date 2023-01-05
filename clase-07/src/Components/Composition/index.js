import React from "react";
import ParentComponent from "../ParentComponent";
import ChildComponent from "../ChildComponent";
import Text from "../Text.jsx";
import HOC from "../HOC";

const Composition = () => {
  const ComponentText = HOC(Text, "Esto viene de HOC");
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

      <p>
        Surgio porque era dificil manejar los ciclos de vida. Hoy en día esta
        día es reemplazada por los hooks y los customs hooks. Se puede ver en
        vistas donde hay componentes repetitivos.
      </p>

      <h3>Componente sin pasar por HOC</h3>
      <Text text="Texto de prueba de Text Component"></Text>

      <h3>Componente pasado por HOC</h3>
      <ComponentText></ComponentText>
    </div>
  );
};

export default Composition;
