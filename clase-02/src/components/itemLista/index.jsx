import { useState } from 'react';
import './style.css';

function EditButton(){
  return (
    <div className='itemListaSimple__modal'>
      <button>Edit</button>
    </div> 
  )
}

function ItemListaSimple(props){

  const [mostrar, setMostrar] = useState(false);
  
  function mostrarEditBtn(){
    setMostrar(true);
  }

  function ocultarEditBtn(){
    setMostrar(false);
  }

  return (
    <div 
    className='itemListaSimple-container'
    onMouseEnter={mostrarEditBtn}
    onMouseLeave={ocultarEditBtn}
    >
      {mostrar ? <EditButton /> : ""}
      <p className='itemListaSimple__text'>{props.detalle}</p>
    </div>
  )
}

export default ItemListaSimple;