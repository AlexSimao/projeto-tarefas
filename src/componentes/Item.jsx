function Item({ item, index, lista, setLista }) {
  const listaAux = [...lista];

  function clicou(index) {
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setLista(listaAux);
  }

  function btnRemove(index) {
    listaAux.splice(index, 1);
    setLista(listaAux);
  }

  return (
    <div key={index} className={item.isCompleted ? "item completo" : "item"}>
      <span
        onClick={() => {
          clicou(index);
        }}
      >
        {item.text}
      </span>
      <button
        onClick={() => {
          btnRemove(index);
        }}
      >
        Remover
      </button>
    </div>
  );
}

export default Item;
