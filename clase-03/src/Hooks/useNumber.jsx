import { useState } from "react";

/* Crear un hook useState del tipo numerico que tengo una funcion para;
1) Que devuelva true si el valor es positivo, y false si es negativo.
2) Que devuelva true si es par, y false si es impar.
*/

function useNumber(props){
  const [number, setNumber] = useState(props.valorIncial)

  const isPositive = () => number > 0;

  const isEven = () => number % 2 === 0;

  return [
    number,
    setNumber,
    isPositive,
    isEven
  ];
}

export default useNumber;
