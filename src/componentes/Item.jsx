function Item({ item, index, lista, setLista }) {
  function clicou(index) {
    const listaAux = [...lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
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
      <button>Remover</button>
    </div>
  );
}

export default Item;
