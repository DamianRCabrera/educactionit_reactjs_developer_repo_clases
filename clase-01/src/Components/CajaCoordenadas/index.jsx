import { useState } from "react";


function CajaCoordenadas(){
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mostrarCoordenadas = (e) => {
    let coordenadaX = e.clientX;
    let coordenadaY = e.clientY;

    //console.log(coordenadaX, coordenadaY);
    
    setX(coordenadaX);
    setY(coordenadaY);
  }

  return(
    <div onMouseMove={mostrarCoordenadas}>
      <table>
        <thead>
          <tr>
            <th>Coordenada X</th>
            <th>Coordenada Y</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{x}</td>
            <td>{y}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CajaCoordenadas;