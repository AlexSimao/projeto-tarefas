function Item(props) {
  return (
    <div className="item">
      <span>Tarefa Exemplo</span>
      <button onClick={() => btnRemover()}>Remover</button>
    </div>
  );
}

export default Item;
