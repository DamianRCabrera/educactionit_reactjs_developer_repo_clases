import { useState } from "react";

function Ejercicio2(){

  const [texto, setTexto] = useState("");

  const guardarInput = (e) => {
    let el = e.target;
    let texto = el.value;
    setTexto(texto)
  }

  return(
    <div className="ejercicio2" style={{display:"flex", flexDirection: "column", gap: "3rem"}}>
      <div className="ejercicio2-img-container">
        <img className="ejercicio2-img" src="https://picsum.photos/seed/picsum/500/200" alt="Imagen random" />
      </div>
      <div className="ejercicio2-input-container">
        <input className="" onChange={guardarInput} type="text" placeholder="Busca lo que sea que estás buscando aquí" style={{padding: "0.5rem",borderRadius: "0.5rem", width: 500}} value={texto} />
      </div>
      <div>
        <p>{texto}</p>
      </div>
    </div>
  )
}

export default Ejercicio2;