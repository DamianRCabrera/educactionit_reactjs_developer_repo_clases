import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes.js";

const App = () => {
  //BrowserRouter => requiere de fallback de server. Hace peticiones al server.

  //HashRouter => trabaja con valor de hash, nunca hace peticion al server

  return (
    <HashRouter>
      <Routes></Routes>
    </HashRouter>
  );
};

export default App;
