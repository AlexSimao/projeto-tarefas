import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const lista_de_tarefas = []

  function btnAdd() {
    if (lista_de_tarefas == []) {
      return
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
        <div className="item">
          <span>Tarefa Exemplo</span>
          <button>Excluir</button>
        </div>
        <div className="item completo">
          <span>Tarefa Exemplo</span>
          <button>Excluir</button>
        </div>
      </div>
    </div>
  );
}

export default App;
