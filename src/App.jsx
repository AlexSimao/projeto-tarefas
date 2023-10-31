import { useState } from "react";
import "./App.css";
import Item from "./componentes/Item";

function App() {
  const [inputText, setInputText] = useState("");
  const lista_de_tarefas = [];

  function btnAdd() {
    if (inputText == "") {
      return;
    }
  }

  return (
    <div id="main">
      <h1 className="titulo">Lista de Tarefas</h1>

      <form className="input-text">
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          type="text"
          placeholder="Adicione uma terefa"
        />
        <button onClick={() => btnAdd()}>Add</button>
      </form>

      <div className="lista">
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default App;
