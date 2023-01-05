import React, { Component } from "react";

export default class ClassComponent extends Component {
  state = {
    name: "Damián",
    data: null,
  };

  componentDidMount() {
    console.log("Componente montado");

    //Acá se pueden hacer llamadas a APIs

    // Esto es un IIFE (Immediately Invoked Function Expression)
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      this.setState({ data: users });
      console.log(users);
    })();
  }

  componentWillUnmount() {
    //Esto se ejecuta cuando el componente se desmonta
    console.log("Componente desmontado");
    // this.setState({ name: "Damián no está más" });
  }

  componentDidUpdate(prevState, prevProps) {
    //Esto se ejecuta cuando el componente se actualiza
    console.log("Componente actualizado");
  }

  cambiarTexto = () => {
    this.setState({ name: "Damián no está más" });
  };

  

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.state.name}</p>
        <button onClick={this.cambiarTexto}>Cambiar cosas</button>
        <h2>Info traida al momento de montar</h2>
        <ul>
          {this.state.data ? (
            this.state.data.map((user) => <li key={user.id}>{user.name}</li>)
          ) : (
            <h3>Cargando...</h3>
          )}
        </ul>
      </div>
    );
  }
}
