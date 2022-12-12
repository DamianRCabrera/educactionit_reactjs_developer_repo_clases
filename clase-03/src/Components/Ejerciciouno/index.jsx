import "./style.css";

function Ejerciciouno(props){


  return (
    <article className="teletrabajo">
      <section className="teletrabajo__image">
        <img src={props.url} alt={props.alt} />
      </section>

      <section className="teletrabajo__info">
        <span>{props.name}</span>
        <span>#{props.id}</span>
      </section>
    </article>
  )
}

export default Ejerciciouno;