import { useState } from "react";

const AddItem = ({ AddItemToBasket }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      AddItemToBasket({ name, quantity, unitPrice });
      resetForm();
    } else {
      alert("Invalid Form!");
    }
  };

  const validateForm = () => {
    let valid = true;
    if (name === "") {
      valid = false;
    }
    if (quantity < 1) {
      valid = false;
    }
    if (unitPrice < 0.01) {
      valid = false;
    }
    return valid;
  };

  const resetForm = () => {
    setName("");
    setQuantity(0);
    setUnitPrice(0);
  };

  return (
    <div className="row">
      <h2>Add Item to Shopping Cart</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(event) => {
                const { value } = event.target;
                setQuantity(value ? parseInt(value) : 0);
              }}
            ></input>
          </div>
          <div className="col">
            <label htmlFor="name">Price</label>
            <input
              type="text"
              value={unitPrice}
              onChange={(event) => {
                setUnitPrice(parseFloat(event.target.value));
              }}
            ></input>
          </div>
          <div className="col">
            <button type="submit">Add Item</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
