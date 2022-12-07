import { useState } from "react";

function EjercicioUno(){
    const [counter, setCounter] = useState(0);
  
    const addClick = () => {
      setCounter(counter + 1);
    }

    const estilos = {
      width: 100,
      height: 100,
      backgroundColor: counter % 2 === 0 ? "green" : "yellow",
      border: "1px solid black"
    }
  
    return(
      <div style={estilos} onClick={addClick}>
        <p>Hola, soy un componente para repasar</p>
        <p>Se ha hecho {counter} clicks con el botón</p>
      </div>
      
    )
  }

export default EjercicioUno;