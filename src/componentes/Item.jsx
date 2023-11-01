function Item(props) {
  return (
    <div className="item">
      <span>{props.texto}</span>
      <button>Remover</button>
    </div>
  );
}

export default Item;
