import "./style.css"

function Modal({show,setShow,children}){

  const style = {
    display: show ? 'block' : 'none'
  }

  return (
    <div style={style} className="modal__contenedor">
      <div className="modal__paper">
        {children}
        <button onClick={()=>{setShow(false)}}>Cerrar</button>
      </div>
    </div>
  )
}

export default Modal;