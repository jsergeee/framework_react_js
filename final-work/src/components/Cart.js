import React from "react";

const Cart = ({ cartItems, onUpdateQuantity }) => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity} = $
            {item.price * item.quantity}
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <h3>Grand Total: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;
