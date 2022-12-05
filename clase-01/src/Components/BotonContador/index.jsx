//Todos los componentes deben comenzar con mayúscula.
//Los componentes deben devolver un solo elemento padre.
//Se puede insertar código JavaScript dentro de llaves.
//Los componentes pueden recibir parámetros, llamados props.

import { useState } from "react";

function BotonContador(){
  //Parte privada del componente
  //let contador = 0; /*Variable tradicional no le guarda el estado */

  const [contador, setContador] = useState(0); /*Variable de estado */

  //Metodo privado dentro del componente
  const counting = () => {
    //contador++; /*contador tradicional*/;
    setContador(contador + 1); /*contador de estado*/
    console.log('Contando... ' + contador);
  }

  return (
    <button onClick={counting}>Magic Button - {contador}</button>
  )
}

export default BotonContador;