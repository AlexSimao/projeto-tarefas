import { useState } from "react";
import "./App.css";
import InputText from "./componentes/InputText";

function App() {
  return (
    <div id="main">
      <h1>Lista de Tarefas</h1>
      <InputText />
      <Lista />
    </div>
  );
}

export default App;
