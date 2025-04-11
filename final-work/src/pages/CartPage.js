import React from "react";
import { Link } from "react-router-dom";




const CartPage = ({ cartItems, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart">
      <div className="top-head">
        <div className="top-head_navigation">
          <h2 className="top-head__heading"></h2>
          <nav class="bread_crumbs">
            <Link to="/" class="bread_crambs__link">
              HOME
            </Link>
            <Link to="/catalog" class="bread_crambs__link">
              CATALOG
            </Link>
            <Link to="/cart" class="bread_crambs__link_site">
              CART
            </Link>
          </nav>
        </div>
      </div>
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
