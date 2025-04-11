import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const Catalog = ({ products, onAddToCart, pageTitle = "HOME" }) => {
  return (
    <div>
      <div className="top-head">
        <div className="top-head_navigation">
          <h2 className="top-head__heading"></h2>
          <nav class="bread_crumbs">
            <Link to="/" class="bread_crambs__link">
              HOME
            </Link>
            <Link
              to="/catalog"
              className="bread_crambs__link"
              style={{ color: "#f16d7f" }}
            >
              CATALOG
            </Link>
            <Link
              to="/cart"
              class="bread_crambs__link_site"
              style={{ color: "#636363" }}
            >
              CART
            </Link>
          </nav>
        </div>
      </div>
      <div className="container goods__container">
        <h2 className="goods__title">Featured Items</h2>
        <ul className="goods__list">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
