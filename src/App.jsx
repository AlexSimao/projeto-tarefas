import { useEffect, useState } from "react";
import "./App.css";
import Item from "./componentes/Item";
import Icon from "./assets/tarefas.svg";

function App() {
  function salvarLocalStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
  }

  function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
  }

  const [inputText, setInputText] = useState("");
  const [lista, setLista] = useState(lerLocalStorage("lista") ?? []);

  useEffect(() => {
    salvarLocalStorage("lista", lista);
  }, [lista]);

  function addItem(form) {
    form.preventDefault();
    if (!inputText) {
      return;
    }

    setLista([...lista, { text: inputText, isCompleted: false }]);
    setInputText("");
    document.querySelector(".input-text input").focus();
  }

  return (
    <div id="main">
      <h1 className="titulo">Lista de Tarefas</h1>

      <form onSubmit={addItem} className="input-text">
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          type="text"
          placeholder="Adicione uma tarefa"
        />
        <button>Add</button>
      </form>

      <div className="lista">
        {lista.length < 1 ? <img className="img-tarefas" src={Icon} /> : lista.map((item, index) => <Item setLista={setLista} lista={lista} index={index} item={item} />)}

        {lista.length > 0 && (
          <button
            onClick={() => {
              setLista([]);
            }}
            className="btn-remove-all"
          >
            Remover Todos
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
