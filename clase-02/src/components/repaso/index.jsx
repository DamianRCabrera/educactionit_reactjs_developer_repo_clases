import { useState } from "react";

function Repaso(){

  const [counter, setCounter] = useState(0);

  const addClick = () => {
    setCounter(counter + 1);
  }

  return(
    <div>
      <p>Hola, soy un componente para repasar</p>
      <button onClick={addClick}>Click me!</button>
      <p>Se ha hecho {counter} clicks con el botón</p>
    </div>
    
  )
}

export default Repaso;