function TarjetaPost({ titulo, detalle }) {
  const estilos = {
    height: 200,
    width: 300,
    backgroundColor: "black",
    color: "white",
    padding: 5,
    margin: 5,
  };

  return (
    <div style={estilos}>
      <h4>{titulo}</h4>
      <p>{detalle}</p>
    </div>
  );
}

export default TarjetaPost;
