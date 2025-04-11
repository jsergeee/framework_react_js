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
          <h2 className="top-head__heading">CART</h2>
          <nav className="bread_crumbs">
            <Link to="/" className="bread_crambs__link">
              HOME
            </Link>
            <Link to="/catalog" className="bread_crambs__link">
              CATALOG
            </Link>
            <Link
              to="/cart"
              className="bread_crambs__link_site"
              style={{ color: "#f16d7f" }}
            >
              CART
            </Link>
          </nav>
        </div>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="product_group">
                    <img
            className="product__image_cart"
            src={item.image}
            alt={item.title}
          />
          <h3 style={{ margin: "5px" }}>{item.title}</h3>
          <p style={{ margin: "5px" }}>Price: ${item.price}</p>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              onUpdateQuantity(item.id, parseInt(e.target.value))
            }
            style={{ height: "30px", width: "40px" }}
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
