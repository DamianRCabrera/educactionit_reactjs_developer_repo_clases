function Lista(props){
  return (
    <div>
      <h2>To-Do</h2>
      <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
        {props.children}
      </div>
    </div>
  )
}

export default Lista;