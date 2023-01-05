import { useEffect } from "react";
import { useState } from "react";

function FunctionalComponent() {
  const [name, setName] = useState("Damián");
  const [users, setUsers] = useState(null);

  useEffect(() => {
    console.log("Componente montado");

    //Acá se pueden hacer llamadas a APIs

    // Esto es un IIFE (Immediately Invoked Function Expression)
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    })();

    return () => {
      //Esto se ejecuta cuando el componente se desmonta
      console.log("Componente desmontado");
      // setName("Damián no está más");
    };
  }, []);

  const cambiarTexto = () => {
    setName("Damián no está más");
  };

  return (
    <div>
      <h1>Function Component</h1>
      <p>{name}</p>
      <button onClick={cambiarTexto}>Cambiar cosas</button>

      <h2>Info traida al momento de montar</h2>
      <ul>
        {users ? (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <h3>Cargando...</h3>
        )}
      </ul>
    </div>
  );
}

export default FunctionalComponent;
