import { useState } from "react";
import "./App.css";
import InputText from "./componentes/InputText";
import Lista from "./componentes/Lista";

function App() {
  return (
    <div id="main">
      <h1 className="titulo">Lista de Tarefas</h1>
      <InputText />
      <Lista />
    </div>
  );
}

export default App;
