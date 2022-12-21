// import Modal from "./Components/Modal/index"
import TarjeteroDePost from "./Components/TarjeteroDePost";
// import { useState } from "react";
import './App.css';

function App() {
  // const [show, setShow] = useState(false);


  return (
    <div className="App">
      {/* <button onClick={()=>{setShow(true)}}>Mostrar</button> */}

      {/* <Modal show={show} setShow={setShow}>
        <p>Hola como va</p>
      </Modal> */}
      <TarjeteroDePost></TarjeteroDePost>
    </div>
  );
}

export default App;
