import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cartItems, onUpdateQuantity }) => {
  return <Cart cartItems={cartItems} onUpdateQuantity={onUpdateQuantity} />;
};

export default CartPage;
