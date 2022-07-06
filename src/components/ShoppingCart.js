import { useState } from "react";
import AddItem from "./AddItem";
import ShoppingCartRow from "./ShoppingCartRow";

const ShoppingCart = (params) => {
  const [basket, setBasket] = useState([
    { id: 1, name: "Monitor", quantity: 1, unitPrice: 10.99 },
    { id: 2, name: "Keyboard", quantity: 1, unitPrice: 2.99 },
    { id: 3, name: "Mouse", quantity: 1, unitPrice: 1.99 },
  ]);

  const AddQuantity = (itemId) => {
    const newBasket = basket.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setBasket(newBasket);
  };

  const ReduceQuantity = (itemId) => {
    const newBasket = basket.map((item) => {
      if (item.id === itemId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setBasket(newBasket);
  };

  const AddItemToBasket = (item) => {
    console.log(item);
    const newBasket = [...basket, { id: basket.length + 1, ...item }];
    setBasket(newBasket);
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row mb-3">
        {basket
          ? basket.map((item, index) => (
              <ShoppingCartRow
                id={item.id}
                key={index}
                name={item.name}
                quantity={item.quantity}
                unitPrice={item.unitPrice}
                AddQuantity={AddQuantity}
                ReduceQuantity={ReduceQuantity}
              />
            ))
          : ""}
      </div>
      <div className="row">
        <AddItem AddItemToBasket={AddItemToBasket} />
      </div>
    </div>
  );
};

export default ShoppingCart;
