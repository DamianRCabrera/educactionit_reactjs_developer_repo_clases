//Traemos useState para poder acceder a los estados del componente;

import { useState } from "react";

function CajaArcoIris(){
  const [color, setColor] = useState('green');
  //Generamos la variable y dejamos la funcion para actualizar el valor

  //Función que cambiará el color del componente
  const cambiarColor = (e) => {
    //En esta variable guardamos el color del que debe ser el componente dependiendo de que tipo de evento se ha ejecutado
    let colorActual = e.type === 'mouseenter' ? 'blue' : 'green';
    //Guardamos dicho color como un estado del componente
    setColor(colorActual);
  }

  return(
    //Retornamos el componenete con los valores que necesita y junto con los callbacks que deben dispararse al momento de darse el evento
    <div style={{backgroundColor: color, width: '100px', height: '100px'}} onMouseEnter={cambiarColor} onMouseLeave={cambiarColor}></div>
  )
}

export default CajaArcoIris;