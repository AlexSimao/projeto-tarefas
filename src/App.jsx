import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div id="main">
      <h1 className="titulo">Lista de Tarefas</h1>

      <div className="input-text">
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          type="text"
          placeholder="Adicione uma terefa"
        />
        <button onClick={() => btnExcluir()}>Add</button>
      </div>

      <div className="lista">
        <img width={320} src="./tarefas.svg" alt="Imagem de uma lista de tarefas." />
      </div>
    </div>
  );
}

export default App;
