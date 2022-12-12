import { useState } from "react";

function EjemploHookUseStateTipoArray() {
  const [nombre, setNombre] = useState("");
  const [array, setArray] = useState([
    "Manuel",
    "Jonathan",
    "Gullermo",
    "Damian",
  ]);

  const agregarNuevoAmigo = () => {
    setArray((estadoPrevio) => [...estadoPrevio, nombre]);
  };

  const eliminarAmigo = () => {
    let copiaDelArray = array;
    let arrayFiltrado = copiaDelArray.filter((item) => {
      return item !== nombre;
    });
    setArray(arrayFiltrado);
  };

  const invertirArray = () => {
    // let arr = array;
    // let reverseArr = arr.reverse();
    // console.log(reverseArr);
    // setArray(reverseArr);
    //No renderiza <------------

    setArray((old) => [...old].reverse());
    //Si renderiza <--------------------
  };

  /* Crear una funcion que invierta el orden del array. */

  return (
    <div>
      <h3>Lista de amigos de Anderson: </h3>
      <ul>
        {array.map((item) => (
          <li> {item} </li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(event) => {
          setNombre(event.target.value);
        }}
      />
      <button onClick={agregarNuevoAmigo}>Agregar nuevo amigo </button>
      <button onClick={eliminarAmigo}>Eliminar amigo </button>
      <button onClick={invertirArray}>Invertir orden</button>
    </div>
  );
}

export default EjemploHookUseStateTipoArray;
