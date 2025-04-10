import React from "react";

const CartPage = ({ cartItems, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart">
      {cartItems.map((item) => (
        <div key={item.id} className="product_group">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              onUpdateQuantity(item.id, parseInt(e.target.value))
            }
          />
        </div>
      ))}
      <div className="container_regForm_totalInformation">
        <h3>GRAND TOTAL: ${totalPrice}</h3>
      </div>
    </main>
  );
};

export default CartPage;
