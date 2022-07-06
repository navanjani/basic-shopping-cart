const ShoppingCartRow = ({
  id,
  name,
  quantity,
  unitPrice,
  AddQuantity,
  ReduceQuantity,
}) => {
  return (
    <div className="row">
      <div className="col">{name}</div>
      <div className="col">
        <div className="row">
          <div className="col">Qty: {quantity}</div>
          <div className="col">
            <button onClick={() => AddQuantity(id)}>+</button>
          </div>
          <div className="col">
            <button onClick={() => ReduceQuantity(id)}>-</button>
          </div>
        </div>
      </div>
      <div className="col">Unit Price: {unitPrice}</div>
      <div className="col">Price: {unitPrice * quantity}</div>
    </div>
  );
};

export default ShoppingCartRow;
